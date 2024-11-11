'use client'
// components/Chat.js
import { useState } from 'react';
import axios from 'axios';
import Markdown from 'react-markdown'

export default function ChatNvidia() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);
    setInput('');

    try {
      const response = await axios.post('/api/chat/nvidia', { message: input });
      const aiMessage = { role: 'assistant', content: response.data.message };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleEnterKey = (event) => {
    if (event.key === 'Enter') sendMessage();
  };

  return (
    <div className='flex h-full flex-col focus-visible:outline-0'>
      <div className="flex-1 overflow-hidden">
        <div className='active-scroll'>
          {messages.map((msg, index) => {
            if(msg.role == 'user') {
              return (
                <article key={index} className="w-full text-token-text-primary focus-visible:outline-2 focus-visible:outline-offset-[-4px]">
                  <div className="m-auto text-base py-[18px] px-3 md:px-4 w-full md:px-5 lg:px-4 xl:px-5">
                    <div className="mx-auto flex flex-1 gap-4 text-base md:gap-5 lg:gap-6 md:max-w-3xl">
                      <div className="group/conversation-turn relative flex w-full min-w-0 flex-col">
                        <div className="flex-col gap-1 md:gap-3">
                          <div className="flex max-w-full flex-col flex-grow">
                            <div data-message-author-role={msg.role === 'user' ? 'user' : 'assistant'}
                              className="min-h-8 text-message flex w-full flex-col items-end gap-2 whitespace-normal break-words [.text-message+&amp;]:mt-5">
                              <div className="flex w-full flex-col gap-1 empty:hidden items-end rtl:items-start">
                                <div
                                  className="relative max-w-[70%] rounded-3xl px-5 py-2.5 bg-[#f4f4f4] dark:bg-token-main-surface-secondary">
                                  <div className="whitespace-pre-wrap">{msg.content}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            } else {
              return (
                <article key={index} className="w-full text-token-text-primary focus-visible:outline-2 focus-visible:outline-offset-[-4px]">
                  <div className="m-auto text-base py-[18px] px-3 md:px-4 w-full md:px-5 lg:px-4 xl:px-5">
                    <div className="mx-auto flex flex-1 gap-4 text-base md:gap-5 lg:gap-6 md:max-w-3xl">
                      <div className="flex-shrink-0 flex flex-col relative items-end">
                        <div>
                          <div className="pt-0">
                            <div className="gizmo-bot-avatar flex h-8 w-8 items-center justify-center overflow-hidden rounded-full">
                              <div
                                className="relative p-1 rounded-sm flex items-center justify-center bg-token-main-surface-primary text-token-text-primary h-8 w-8">
                                <img src='/nvidia-7.svg'></img>
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="group/conversation-turn relative flex w-full min-w-0 flex-col agent-turn">
                        <div className="flex-col gap-1 md:gap-3">
                          <div className="flex max-w-full flex-col flex-grow">
                            <div data-message-author-role={msg.role === 'user' ? 'user' : 'assistant'}
                              className="min-h-8 text-message flex w-full flex-col items-end gap-2 whitespace-normal break-words [.text-message+&amp;]:mt-5"
                            >
                              <div className="flex w-full flex-col gap-1 empty:hidden first:pt-[3px]">
                                <div className="markdown prose w-full break-words dark:prose-invert dark">
                                  <Markdown>{msg.content}</Markdown>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            }
          })}
        </div>
      </div>
      <div className="md:pt-0 dark:border-white/20 md:border-transparent md:dark:border-transparent w-full">
        <div>
          <div className="m-auto text-base px-3 md:px-4 w-full md:px-5 lg:px-4 xl:px-5">
            <div className="mx-auto flex flex-1 gap-4 text-base md:gap-5 lg:gap-6 md:max-w-3xl">

              <div className="relative flex h-full max-w-full flex-1 flex-col">
                <div className="absolute bottom-full left-0 right-0 z-20"></div>
                <div className="relative h-0">
                  <div className="absolute bottom-3 space-y-2 z-20"></div>
                </div>
                <div className="group relative flex w-full items-center">
                  <div
                    className="flex w-full flex-col transition-colors contain-inline-size gap-1.5 rounded-[26px] p-1.5 bg-[#f4f4f4] dark:bg-token-main-surface-secondary">
                    <div className="flex items-end gap-1.5 pl-4 md:gap-2">
                      <div className="flex min-w-0 flex-1 flex-col">
                        <div
                          className="_prosemirror-parent_15ceg_1 text-token-text-primary max-h-[25dvh] max-h-52 overflow-auto default-browser">
                          <div translate="no" className="ProseMirror" id="prompt-textarea">
                            <p data-placeholder="Message ChatGPT" className="placeholder">
                              <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleEnterKey}
                                placeholder="Type your message..."
                                className='input-message'
                                autoFocus={true}
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mb-1 me-1">
                        <div className="min-w-8"><span className="" data-state="closed"><button
                          onClick={sendMessage}
                          aria-label="Send prompt" data-testid="send-button"
                          className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:opacity-70 focus-visible:outline-none focus-visible:outline-black disabled:text-[#f4f4f4] disabled:hover:opacity-100 dark:focus-visible:outline-white disabled:dark:bg-token-text-quaternary dark:disabled:text-token-main-surface-secondary bg-black text-white dark:bg-white dark:text-black disabled:bg-[#D7D7D7]">
                            <svg
                            width="32" height="32" viewBox="0 0 32 32" fill="none"
                            xmlns="http://www.w3.org/2000/svg" className="icon-2xl">
                            <path
                              d="M15.1918 8.90615C15.6381 8.45983 16.3618 8.45983 16.8081 8.90615L21.9509 14.049C22.3972 14.4953 22.3972 15.2189 21.9509 15.6652C21.5046 16.1116 20.781 16.1116 20.3347 15.6652L17.1428 12.4734V22.2857C17.1428 22.9169 16.6311 23.4286 15.9999 23.4286C15.3688 23.4286 14.8571 22.9169 14.8571 22.2857V12.4734L11.6652 15.6652C11.2189 16.1116 10.4953 16.1116 10.049 15.6652C9.60265 15.2189 9.60265 14.4953 10.049 14.049L15.1918 8.90615Z"
                              fill="currentColor"></path>
                          </svg>
                          </button></span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div
            className="relative w-full px-2 py-2 text-center text-xs text-token-text-secondary empty:hidden md:px-[60px]">
            <div className="min-h-4">
              <div>Don't forget AI can make mistakes.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
