
import { config } from 'dotenv';
config();

import '@/ai/flows/debate-claim.ts';
import '@/ai/flows/detect-self-deception.ts';
// This import is now for a file with multiple exports, which is fine.
import '@/ai/flows/generate-text-to-speech.ts';
