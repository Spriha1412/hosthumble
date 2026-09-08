"use client"
import { LoginForm } from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="bg-background flex w-screen flex-col items-center justify-center gap-6 overflow-hidden p-6 md:p-10">       
      <div className="relative z-10 bg-background flex w-full max-w-sm flex-col rounded-xl p-2">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
        </a>
        <LoginForm/>
      </div>
    </div>
  )
}


