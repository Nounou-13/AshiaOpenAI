"use client"

import Link from "next/link"
import { FC } from "react"
import { ChatbotUISVG } from "../icons/chatbotui-svg"
import { LucideMessagesSquare } from "lucide-react"

interface BrandProps {
  theme?: "dark" | "light"
}

export const Brand: FC<BrandProps> = ({ theme = "dark" }) => {
  return (
    <>
      <div className="mb-2">
        <ChatbotUISVG theme={theme === "dark" ? "dark" : "light"} scale={0.3} />
        {/* <LucideMessagesSquare /> */}
      </div>

      <div
        className="text-4xl font-bold tracking-wide opacity-20
      "
      >
        Assistant Ashia
      </div>
    </>
  )
}
