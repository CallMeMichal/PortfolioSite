"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Layout from "../components/Layout"

interface Skill {
  name: string
  details: string
}

const initialSkillCategories: Record<string, Skill[]> = {
  Frontend: [
    { name: "HTML", details: "Markup language for structuring web pages" },
    { name: "CSS", details: "Style sheet language for designing web pages" },
    { name: "JavaScript", details: "Programming language for dynamic content" },
    { name: "React", details: "Basic knowledge" },
  ],
  Backend: [
    { name: "ASP.NET", details: "Web framework for building web apps with .NET" },
    { name: "ASP.NET MVC", details: "MVC framework for building scalable applications" },
    { name: ".NET", details: "Framework for building cross-platform applications" },
    { name: "C#", details: "Object-oriented programming language for .NET" },
  ],
  "System & Software": [
    { name: "Git", details: "Version control system for tracking changes" },
    { name: "Visual Studio", details: "IDE for .NET development" },
    { name: "WebCon", details: "Low-code platform for process automation" },
  ],
  Database: [
    { name: "PostgreSQL", details: "Open-source relational database management system" },
    { name: "SQL", details: "Structured query language for managing databases" },
  ],
}


export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("Frontend")
  const [skillCategories, setSkillCategories] = useState(initialSkillCategories)

  return (
    <Layout>
      <section className="min-h-screen py-8">
        <div className="max-w-6xl w-full mx-auto flex">
          {/* Left sidebar for categories */}
          <div className="w-1/4 p-4">
            <div className="flex flex-col space-y-4">
              {Object.keys(skillCategories).map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-lg font-semibold transition duration-300 ease-in-out ${
                    activeCategory === category
                      ? "bg-blue-500 text-white"
                      : "bg-white bg-opacity-10 hover:bg-opacity-20"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Right side for skill cards */}
          <div className="w-3/4 p-4">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              {skillCategories[activeCategory].map((skill) => (
                <div
                  key={skill.name}
                  className="bg-white bg-opacity-10 p-4 rounded-lg text-center hover:bg-opacity-20 transition duration-300 ease-in-out"
                >
                  <h4 className="font-medium text-lg">{skill.name}</h4>
                  <p className="text-sm text-gray-400 mt-2">{skill.details}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
