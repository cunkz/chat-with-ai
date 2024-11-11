import ChatOpenAI from '../components/ChatOpenAI';

export default function About() {
  return (
    <div className="relative flex h-full max-w-full flex-1 flex-col overflow-hidden font-[family-name:var(--font-geist-sans)]">
      <ChatOpenAI />
    </div>
  );
}
