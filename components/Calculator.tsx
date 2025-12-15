"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Card, CardContent } from "@/components/ui/card"

const buttons = [
  "7", "8", "9", "÷",
  "4", "5", "6", "×",
  "1", "2", "3", "-",
  "0", "C", "DEL", "+",
  "=",
]

export default function Calculator() {
  const [display, setDisplay] = useState("")

  const handleClick = (value: string) => {
    if (value === "C") {
      setDisplay("")
      return
    }

    if (value === "DEL") {
      setDisplay((prev) => prev.slice(0, -1))
      return
    }

    if (value === "=") {
      try {
        const expression = display
          .replace(/×/g, "*")
          .replace(/÷/g, "/")

        setDisplay(String(eval(expression)))
      } catch {
        setDisplay("Error")
      }
      return
    }

    setDisplay((prev) => prev + value)
  }

  return (
    <Card className="w-auto mx-auto my-5 bg-blue-300">
      <CardContent className="p-4 space-y-4">
        <div className="h-20 rounded-md flex items-center justify-end px-3 text-4xl font-mono bg-blue-400 font-bold">
          {display || "0"}
        </div>

        <div className="grid grid-cols-4 gap-2">
          {buttons.slice(0, 16).map((btn) => (
            <Button
              key={btn}
              variant={btn === "C" ? "blue" : "secondary"}
              onClick={() => handleClick(btn)}
            >
              {btn}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-2">
          <Button
            variant="secondary"
            onClick={() => handleClick(buttons[16])}
          >
            {buttons[16]}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
