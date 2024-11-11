## Getting Started

First, set your API key for OpenAI or NVIDIA by create `.env.local` file
```bash
OPENAI_API_KEY=<your-openai-api-key>
NVIDIA_API_KEY=<your-nvidia-api-key>

```


If you didn't have API key yet, you can follow this instructions :
- [OpenAI](https://platform.openai.com/docs/quickstart/developer-quickstart#create-and-export-an-api-key)
- [NVIDIA](https://docs.nvidia.com/nim/large-language-models/latest/getting-started.html#generate-an-api-key)

Second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
