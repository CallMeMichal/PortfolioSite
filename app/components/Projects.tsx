"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React frontend and Node.js backend",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "3D Visualization Tool",
    description: "An interactive 3D data visualization tool using Three.js and D3",
    technologies: ["Three.js", "D3.js", "React", "WebGL"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Task Management API",
    description: "A RESTful API for task management with authentication and real-time updates",
    technologies: ["Node.js", "Express", "PostgreSQL", "Socket.io", "JWT"],
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-16">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-10 p-6 rounded-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              exit={{ y: 50 }}
              className="bg-gray-900 p-8 rounded-lg max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <p className="mb-4">{selectedProject.description}</p>
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2">Technologies used:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="bg-blue-500 text-white px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

