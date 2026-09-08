"use client"

import { FileText, Link2, MessageSquare, Upload } from "lucide-react"
import React, { useState } from "react"

// Interface matching your definition
export interface SourceResponse {
  _id: string
  name?: string
  sourceType: "file" | "url"
  fileSize?: number
  createdAt: string
  url?: string
  status?: string
}

// Dummy sources array adhering strictly to SourceResponse interface
const DUMMY_SOURCES: SourceResponse[] = [
  {
    _id: "src_1",
    name: "Project_Requirements_v2.pdf",
    sourceType: "file",
    fileSize: 2457600, // ~2.4 MB
    createdAt: new Date().toISOString(),
    status: "completed",
  },
  {
    _id: "src_2",
    name: "https://docs.nextjs.org/app/building-your-application",
    sourceType: "url",
    url: "https://docs.nextjs.org/app/building-your-application",
    createdAt: new Date().toISOString(),
    status: "completed",
  },
  {
    _id: "src_3",
    name: "Financial_Report_Q3_2025.xlsx",
    sourceType: "file",
    fileSize: 5120000,
    createdAt: new Date().toISOString(),
    status: "completed",
  },
  {
    _id: "src_4",
    name: "https://tailwind-ui.com/documentation",
    sourceType: "url",
    url: "https://tailwind-ui.com/documentation",
    createdAt: new Date().toISOString(),
    status: "completed",
  },
]

const Mainchat = () => {
  // State for dummy data and selected items
  const [sources, setSources] = useState<SourceResponse[]>(DUMMY_SOURCES)
  const [selectedSources, setSelectedSources] = useState<SourceResponse[]>([
    DUMMY_SOURCES[0], // Pre-select first source as demo
  ])

  // Toggle selection handler
  const toggleSource = (source: SourceResponse) => {
    setSelectedSources((prev) =>
      prev.some((s) => s._id === source._id)
        ? prev.filter((s) => s._id !== source._id)
        : [...prev, source]
    )
  }

  // Dummy action handler for uploading sources
  const openUploadDialog = () => {
    console.log("Open upload modal / dialog")
  }

  return (
    <div className="relative h-full">
      <div className="flex flex-col gap-3 text-center w-full h-full p-0">
        <div className="w-full">
          <div className="flex flex-col items-center justify-center text-center mb-2 mt-2">
            <MessageSquare size={48} className="text-muted-foreground" />
          </div>
          <div className="inline-flex items-center justify-center w-full h-12 rounded-2xl mb-1">
            <h1 className="text-xl font-semibold">Select Your Sources to Start Chat</h1>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {sources.slice(0, 7).map((source) => {
              const isSelected = selectedSources.some((s) => s._id === source._id)

              return (
                <div
                  role="button"
                  onClick={() => toggleSource(source)}
                  key={`${source._id}`}
                  className={`relative rounded-sm group cursor-pointer bg-card transition-all duration-300 p-4 h-[80px] flex items-center
                    border border-[#EEF4F9] dark:border-[#23272F]
                    hover:border-vblue-400/50 hover:bg-secondary/80
                    ${isSelected ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20" : ""}`}
                >
                  <div
                    className={`absolute top-2 right-2 border-2 w-3.5 h-3.5 shrink-0 transition-colors
                    ${isSelected ? "bg-blue-500 border-blue-500" : "border-slate-300 dark:border-slate-600"}`}
                  />

                  <div className="flex flex-row items-center gap-3 w-full pr-4">
                    <div className="shrink-0 text-muted-foreground">
                      {source.sourceType === "file" ? <FileText size={24} /> : <Link2 size={24} />}
                    </div>
                    <h4 className="text-sm font-semibold line-clamp-2 text-left break-words">
                      {source.name}
                    </h4>
                  </div>
                </div>
              )
            })}

            <div
              role="button"
              onClick={openUploadDialog}
              className="flex flex-row items-center gap-3 h-[80px] border-2 border-slate-400 border-dotted group cursor-pointer transition-all duration-300 p-4 rounded-sm border-[#EEF4F9] dark:border-[#23272F] hover:border-vblue-400/50 hover:bg-secondary/40"
            >
              <div className="shrink-0 text-muted-foreground">
                <Upload size={24} />
              </div>
              <h1 className="text-sm font-semibold text-left">Upload Sources</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mainchat