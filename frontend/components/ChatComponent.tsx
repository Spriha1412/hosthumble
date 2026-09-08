"use client"
import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const ChatComponent = () => {
  return (
    <>
      <div className='flex flex-col h-full overflow-hidden'>
        {/* Sources header mapping... */}
        <div className='space-y-4 mb-4 flex-shrink-0'>
          <div className="w-full h-16 flex items-center justify-end space-x-3 overflow-x-auto">
            <div className='border-2 w-36 rounded-md'>
              <div className='p-1.5 flex flex-col min-w-0 max-w-36 flex-1'>
                <p className='text-xs font-medium line-clamp-2 leading-tight'>
                  System Architecture.pdf
                </p>
              </div>
            </div>
            <div className='border-2 w-36 rounded-md'>
              <div className='p-1.5 flex flex-col min-w-0 max-w-36 flex-1'>
                <p className='text-xs font-medium line-clamp-2 leading-tight'>
                  API Specifications.docx
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className='flex-1 overflow-y-auto space-y-4'>
          {/* USER MESSAGE */}
          <div className='w-full flex justify-end items-start'>
            <div className='bg-card text-card-foreground p-3 rounded-lg max-w-[80%] break-words shadow-sm'>
              <p className='font-mono text-sm font-medium'>
                Hello! How does React state work?
              </p>
            </div>
          </div>
          <div className='w-full flex justify-end items-start'>
            <div className='bg-card text-card-foreground p-3 rounded-lg max-w-[80%] break-words shadow-sm'>
              <p className='font-mono text-sm font-medium'>
                Hello! How does React state work?
              </p>
            </div>
          </div>
          <div className='w-full flex justify-end items-start'>
            <div className='bg-card text-card-foreground p-3 rounded-lg max-w-[80%] break-words shadow-sm'>
              <p className='font-mono text-sm font-medium'>
                Hello! How does React state work?
              </p>
            </div>
          </div>
          <div className='w-full flex justify-end items-start'>
            <div className='bg-card text-card-foreground p-3 rounded-lg max-w-[80%] break-words shadow-sm'>
              <p className='font-mono text-sm font-medium'>
                Hello! How does React state work?
              </p>
            </div>
          </div>
          <div className='w-full flex justify-end items-start'>
            <div className='bg-card text-card-foreground p-3 rounded-lg max-w-[80%] break-words shadow-sm'>
              <p className='font-mono text-sm font-medium'>
                Hello! How does React state work?
              </p>
            </div>
          </div>
          <div className='w-full flex justify-end items-start'>
            <div className='bg-card text-card-foreground p-3 rounded-lg max-w-[80%] break-words shadow-sm'>
              <p className='font-mono text-sm font-medium'>
                Hello! How does React state work?
              </p>
            </div>
          </div>
          {/* AI / ASSISTANT MESSAGE */}
          <div className='w-full flex justify-start items-start'> 
            <div className='text-foreground p-3 rounded-lg max-w-[80%] break-words shadow-sm prose dark:prose-invert prose-sm max-w-none'>
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  code({ node, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '');
                    const isInline = !match;
                    const codeString = String(children).replace(/\n$/, '');

                    if (!isInline) {
                      return (
                        <div className="w-full max-w-full rounded-md overflow-hidden bg-[#282c34] my-4 border border-zinc-800">
                          {/* Header bar */}
                          <div className="flex items-center justify-between px-4 py-2 bg-[#21252b] text-zinc-400 text-xs font-mono">
                            <span>{match[1]}</span>
                            <button
                              onClick={() => navigator.clipboard.writeText(codeString)}
                              className="hover:text-white transition-colors"
                            />
                          </div>
                        </div>
                      );
                    }

                    return (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  },
                }}
              >
                React state is a built-in object used to contain data or information about the component.
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatComponent