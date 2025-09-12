'use server';

/**
 * @fileOverview This file defines a Genkit flow for engaging in a debate about a user's claim.
 *
 * The flow takes a user's claim as input and generates a debate between an Advocate and a Skeptic agent.
 * The goal is to provide evidence-backed pushback and challenge the user's claim to help the user evaluate potential drawbacks.
 *
 * @exports `debateClaim` - An async function that initiates the debate flow.
 * @exports `DebateClaimInput` - The input type for the `debateClaim` function.
 * @exports `DebateClaimOutput` - The output type for the `debateClaim` function.
 */

import { aiDebateClaim } from '@/ai/genkit-instances';
import {z} from 'genkit';

const DebateClaimInputSchema = z.object({
  claim: z.string().describe('The claim made by the user.'),
  verticals: z
    .array(z.enum(['Finance', 'Fitness', 'Career', 'Relationships', 'Famous Personas', 'History', 'Medicine']))
    .describe('The verticals to which the claim belongs.'),
});
export type DebateClaimInput = z.infer<typeof DebateClaimInputSchema>;

const DebateClaimOutputSchema = z.object({
  advocateText: z.string().describe("The Advocate's arguments."),
  skepticText: z.string().describe("The Skeptic's arguments."),
});
export type DebateClaimOutput = z.infer<typeof DebateClaimOutputSchema>;

export async function debateClaim(input: DebateClaimInput): Promise<DebateClaimOutput> {
  return debateClaimFlow(input);
}

const debateClaimPrompt = aiDebateClaim.definePrompt({
  name: 'debateClaimPrompt',
  input: {schema: DebateClaimInputSchema},
  output: {schema: z.object({
    advocateText: z.string().describe("The Advocate's arguments, presenting a strong case in favor of the user's claim."),
    skepticText: z.string().describe("The Skeptic's arguments, providing evidence-backed pushback and challenging the user's claim."),
  })},
  prompt: `You are facilitating a debate between an Advocate and a Skeptic regarding the following claim made by a user in the context of {{#each verticals}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}:

  Claim: {{{claim}}}

  The Advocate will provide arguments in favor of the claim, while the Skeptic will raise concerns and counter-arguments. The goal is to provide a balanced perspective to help the user evaluate the claim critically.
  
  Please provide the arguments for the Advocate and the Skeptic separately in the specified output format. Each should have only one turn. Do not include the speaker's name (e.g., "Advocate:") in the text itself.`,
});

const debateClaimFlow = aiDebateClaim.defineFlow(
  {
    name: 'debateClaimFlow',
    inputSchema: DebateClaimInputSchema,
    outputSchema: DebateClaimOutputSchema,
  },
  async input => {
    
    let advocateText = '';
    let skepticText = '';
    const maxRetries = 3;
    let lastError: Error | null = null;

    for (let i = 0; i < maxRetries; i++) {
        try {
            const {output} = await debateClaimPrompt(input);
            if (!output || !output.advocateText || !output.skepticText) {
              throw new Error("Failed to generate debate: Incomplete output from model.");
            }
            advocateText = output.advocateText;
            skepticText = output.skepticText;
            break; // Success, exit loop
        } catch (error) {
            lastError = error as Error;
            console.warn(`Debate generation attempt ${i + 1} failed. Retrying...`, lastError.message);
            if (i < maxRetries - 1) {
                await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
            }
        }
    }
    
    if (!advocateText || !skepticText) {
        throw new Error(`Failed to generate debate after ${maxRetries} attempts. Last error: ${lastError?.message}`);
    }
    
    return {
        advocateText: advocateText.trim(),
        skepticText: skepticText.trim(),
    };
  }
);
