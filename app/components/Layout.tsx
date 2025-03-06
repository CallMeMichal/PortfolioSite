"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import InteractiveBackground from "./InteractiveBackground"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname()

  return (
    <div className="relative min-h-screen text-white">
      <InteractiveBackground />
      <div className="relative z-10">
        <nav className="fixed top-0 left-0 right-0 z-50 p-4">
          <ul className="flex justify-center space-x-8">
            <li>
              <Link href="/" className={`text-lg ${pathname === "/" ? "text-blue-400" : "text-white"}`}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className={`text-lg ${pathname === "/about" ? "text-blue-400" : "text-white"}`}>
                About
              </Link>
            </li>
            <li>
              <Link href="/skills" className={`text-lg ${pathname === "/skills" ? "text-blue-400" : "text-white"}`}>
                Skills
              </Link>
            </li>
            <li>
              <Link href="/projects" className={`text-lg ${pathname === "/projects" ? "text-blue-400" : "text-white"}`}>
                Projects
              </Link>
            </li>
          </ul>
        </nav>
        <main className="pt-16">{children}</main>
      </div>
    </div>
  )
}