"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import InteractiveBackground from "./components/InteractiveBackground"

export default function Home() {
  const email = "michaltulej1@gmail.com"

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center text-white">
      <InteractiveBackground />
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-4">Michal Tulej</h1>
        <h2 className="text-2xl mb-8">Full Stack Developer</h2>
        
        {/* Add a card container */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg mx-auto">
          <h3 className="text-3xl font-semibold mb-6">Contact Information</h3>
          
          <div className="flex flex-col items-center space-y-4 mb-8">
            <div className="flex space-x-6">
              <a
                href="https://github.com/CallMeMichal"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform group"
                aria-label="GitHub Profile"
              >
                <Github className="w-8 h-8 group-hover:text-blue-400" />
              </a>
              <a
                href="https://www.linkedin.com/in/michał-tulej-b03942302/"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform group"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-8 h-8 group-hover:text-blue-400" />
              </a>
              <a
                href={`mailto:${email}`}
                className="transform hover:scale-110 transition-transform group"
                aria-label="Send Email"
              >
                <Mail className="w-8 h-8 group-hover:text-blue-400" />
              </a>
            </div>
            <span className="text-sm text-blue-400 opacity-75 hover:opacity-100 transition-opacity">
              {email}
            </span>
          </div>
          
          <nav className="mb-6">
            <ul className="flex justify-center space-x-6">
              <li>
                <Link href="/skills" className="text-lg hover:text-blue-400 transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-lg hover:text-blue-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-lg hover:text-blue-400 transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </main>
  )
}
