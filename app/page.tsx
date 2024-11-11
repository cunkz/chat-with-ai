'use client'
import { useState } from 'react';
import ChatOpenAI from '../components/ChatOpenAI';
import ChatNvidia from '../components/ChatNvidia';

export default function Home() {
  const [isShowChatOpenAI, setIsShowChatOpenAI] = useState(true);

  return (
    <div className="relative flex h-full max-w-full flex-1 flex-col overflow-hidden font-[family-name:var(--font-geist-sans)]">
      <main className="relative h-full w-full flex-1 overflow-auto transition-width">
        <div className="flex h-full flex-col focus-visible:outline-0">
          <div
            className="draggable no-draggable-children sticky top-0 p-3 mb-1.5 flex items-center justify-between z-10 h-header-height font-semibold bg-token-main-surface-primary max-md:hidden">
            <div className="absolute start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2"></div>
            <div className="flex items-center gap-0 overflow-hidden top-lead">
              <span>Chat with AI</span>
            </div>
            <div className="flex items-center gap-2 pr-1 leading-[0]">
              <button aria-label="" type="button" id="radix-:rsm:" aria-haspopup="menu"
                aria-expanded="false" data-state="closed" data-testid="model-switcher-dropdown-button"
                onClick={() => setIsShowChatOpenAI(true)}
                className={isShowChatOpenAI ? "active-source-button group flex cursor-pointer items-center gap-1 rounded-lg py-1.5 px-3 text-lg hover:bg-token-main-surface-secondary radix-state-open:bg-token-main-surface-secondary font-semibold text-token-text-secondary overflow-hidden whitespace-nowrap" : "group flex cursor-pointer items-center gap-1 rounded-lg py-1.5 px-3 text-lg hover:bg-token-main-surface-secondary radix-state-open:bg-token-main-surface-secondary font-semibold text-token-text-secondary overflow-hidden whitespace-nowrap"}>
                <div className="text-token-text-secondary">
                  OpenAI
                </div>
              </button>
              <button aria-label="" type="button" id="radix-:rsm:" aria-haspopup="menu"
                aria-expanded="false" data-state="closed" data-testid="model-switcher-dropdown-button"
                onClick={() => setIsShowChatOpenAI(false)}
                className={!isShowChatOpenAI ? "active-source-button group flex cursor-pointer items-center gap-1 rounded-lg py-1.5 px-3 text-lg hover:bg-token-main-surface-secondary radix-state-open:bg-token-main-surface-secondary font-semibold text-token-text-secondary overflow-hidden whitespace-nowrap" : "group flex cursor-pointer items-center gap-1 rounded-lg py-1.5 px-3 text-lg hover:bg-token-main-surface-secondary radix-state-open:bg-token-main-surface-secondary font-semibold text-token-text-secondary overflow-hidden whitespace-nowrap"}>
                <div className="text-token-text-secondary">
                  Nvidia
                </div>
              </button>
            </div>
          </div>
          {isShowChatOpenAI ? <ChatOpenAI /> : <ChatNvidia /> }
        </div>
      </main>
    </div>
  );
}
