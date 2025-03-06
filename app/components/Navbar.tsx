import Link from "next/link"

export default function Navbar({ currentSection }: { currentSection: string }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
      <ul className="flex justify-center space-x-8">
        <li>
          <Link href="#about" className={`text-lg ${currentSection === "about" ? "text-blue-400" : "text-white"}`}>
            About
          </Link>
        </li>
        <li>
          <Link href="#skills" className={`text-lg ${currentSection === "skills" ? "text-blue-400" : "text-white"}`}>
            Skills
          </Link>
        </li>
        <li>
          <Link
            href="#projects"
            className={`text-lg ${currentSection === "projects" ? "text-blue-400" : "text-white"}`}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link href="#contact" className={`text-lg ${currentSection === "contact" ? "text-blue-400" : "text-white"}`}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

