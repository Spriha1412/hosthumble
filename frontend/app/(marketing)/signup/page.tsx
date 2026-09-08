"use client"

import { SignUpForm } from "@/components/SignUpForm"

const page = () => {
  return (
      <div className="bg-background flex min-h-svh pb-20 flex-col items-center justify-center">
        <div className="flex w-full max-w-sm flex-col">
          <a className="flex items-center gap-2 self-center font-medium">
          </a>
          <SignUpForm/>
        </div>
      </div>
    )
}

export default page