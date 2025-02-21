import { useTheme } from "next-themes"
import { Button } from "./button"
import { useEffect, useState } from "react"
import dynamic from 'next/dynamic';

const Moon = dynamic(() => import('lucide-react').then(mod => mod.Moon));
const Sun = dynamic(() => import('lucide-react').then(mod => mod.Sun));

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <Button
    variant="outline"
    size="sm"
    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
