# veri-TA-serum - Gemini

veri-TA-serum blends neural probes, symbolic checks, and adversarial debate to help users challenge their own claims - turning self-deception into an opportunity for reflection.

> *"The truth serum for your claims"*

**Veritaserum-Gemini** is an AI-powered fact-checking and claim validation tool that helps users challenge their own assertions and combat self-deception. By combining neural probes, symbolic checks, and adversarial debate techniques, it turns potential misinformation into opportunities for reflection and critical thinking.

## 🌟 Features

- **Neural Probes**: Deep analysis of claims using advanced AI models
- **Symbolic Verification**: Logic-based fact-checking mechanisms
- **Adversarial Debate**: Multi-perspective analysis to challenge assertions
- **Self-Reflection Tools**: Helps identify cognitive biases and logical fallacies
- **Powered by Gemini**: Leverages Google's Gemini AI for comprehensive analysis

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- A Google Gemini API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/realGuyCrimson/veritaserum-gemini.git
cd veritaserum-gemini
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up your environment variables:
```bash
cp .env.example .env.local
```

Add your Gemini API key to `.env.local`:
```
GEMINI_API_KEY=your_api_key_here
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📖 Usage

To get started with the application, take a look at `src/app/page.tsx` which contains the main interface components.

### Basic Example

1. Enter a claim you want to verify
2. The system will analyze it through multiple lenses:
   - Factual accuracy
   - Logical consistency
   - Potential biases
   - Counter-arguments
3. Review the comprehensive analysis and reflection prompts

## 🏗️ Project Structure

```
veritaserum-gemini/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main application page
│   │   └── ...
│   ├── components/           # Reusable React components
│   ├── lib/                  # Utility functions and helpers
│   └── types/                # TypeScript type definitions
├── public/                   # Static assets
├── .env.example              # Environment variables template
└── package.json
```

## 🔧 Tech Stack

- **Framework**: Next.js
- **Language**: TypeScript
- **AI Model**: Google Gemini
- **Styling**: Tailwind CSS (assumed)
- **Runtime**: Node.js

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Made for comparative analysis with our github repo: [https://github.com/realGuyCrimson/veritaserum-gptoss](https://github.com/realGuyCrimson/veritaserum-gptoss)
- Built with Google's Gemini AI
- Created to promote critical thinking and intellectual honesty

## 📧 Findings

Comparative benchmarking showed that gpt-oss-120b is much faster,  but gemini-2.5-flash produces more grounded reasoning. This trade off highlights the importance of tailoring the backbone model to the user’s  priorities (latency vs. interpretability).

---

**Note**: This tool is designed to assist with critical thinking and should not be considered a definitive fact-checker. Always verify important information through multiple reliable sources.
