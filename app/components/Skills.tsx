"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const skillCategories = {
  Frontend: ["React", "Vue.js", "CSS/SASS", "JavaScript", "TypeScript", "HTML5"],
  Backend: ["Node.js", "Express", "Python", "Django", "RESTful APIs", "GraphQL", "ASP.NET", ".NET", "C#"],
  "System & Software": ["Git", "Docker", "CI/CD", "AWS", "Linux", "Agile/Scrum", "Visual Studio"],
  "Database Management": ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Elasticsearch", "SQL", "XML"],
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("Frontend")

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-16">
      <div className="max-w-4xl w-full">
        <div className="flex flex-wrap justify-center mb-8">
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              className={`px-4 py-2 m-2 rounded-full ${
                activeCategory === category ? "bg-blue-500 text-white" : "bg-white bg-opacity-10"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {skillCategories[activeCategory].map((skill) => (
            <div key={skill} className="bg-white bg-opacity-10 p-4 rounded-lg text-center">
              {skill}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
