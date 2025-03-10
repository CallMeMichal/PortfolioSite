"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Layout from "../components/Layout"


const projects = [
  {
    title: "Web Application for managing and organizing online auctions in real time",
    description: "An online auction platform with real-time bid updates, SignalR integration, and seamless item management.",
    technologies: [
      "MVC", "Clean Architecture", "CSS", "JS", "C#", ".NET Framework", "LINQ", "Bootstrap", "HTML", "SignalR", "JS Calendar", "SQL database"
    ],
    images: [
      "/AuctionAcePhotos/auctionAceInterfaceUnlogged.png",
      "/AuctionAcePhotos/auctionsInterface.png", 
      "/AuctionAcePhotos/LicytacionInterfaceAuctionAce.png",
      "/AuctionAcePhotos/loggedInterfaceAuctionAce.png", 
    ],
    website: "http://michaltulejauctionace.pl.hostingasp.pl",
    github: "https://github.com/CallMeMichal/AuctionAce"
  }
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [fullScreenImage, setFullScreenImage] = useState(null)

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      (prev + 1) % selectedProject.images.length
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    )
  }

  return (
    <Layout>
      <section className="min-h-screen flex flex-col items-center justify-start pt-16">
        <div className="grid grid-cols-3 gap-12 w-full px-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-10 p-6 rounded-lg cursor-pointer" 
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                setSelectedProject(project)
                setCurrentImageIndex(0)
              }}
            >
              <img
                src={project.images[0] || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-56 object-cover mb-4 rounded"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm line-clamp-3">{project.description}</p>
            </motion.div>
          ))}
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
                className="bg-gray-900 p-8 rounded-lg max-w-5xl w-full h-[90vh] relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-white hover:text-gray-300"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>

                <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>

                {/* Custom Tailwind Carousel */}
                <div className="relative w-full h-[60%] overflow-hidden rounded-lg mb-4">
                  <div className="flex transition-transform duration-300 h-full" 
                       style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
                    {selectedProject.images.map((image, index) => (
                      <div 
                        key={index} 
                        className="w-full h-full flex-shrink-0 relative"
                      >
                        <img
                          src={image}
                          alt={`Project image ${index + 1}`}
                          className="w-full h-full object-contain cursor-zoom-in"
                          onClick={() => setFullScreenImage(image)}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Navigation Buttons */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button 
                        onClick={prevImage}
                        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                      >
                        ←
                      </button>
                      <button 
                        onClick={nextImage}
                        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                      >
                        →
                      </button>
                    </>
                  )}

                  {/* Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {selectedProject.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full ${
                          index === currentImageIndex 
                            ? 'bg-white' 
                            : 'bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex flex-col h-[calc(40%-2rem)]">
                  <p className="mb-4 flex-grow overflow-auto">{selectedProject.description}</p>
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
                  <div className="flex justify-center gap-4">
                    <a
                      href={selectedProject.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center"
                    >
                      Go to Website
                    </a>
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    >
                      Go to GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Full Screen Image Overlay */}
        {fullScreenImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-[100] flex items-center justify-center p-8 cursor-zoom-out"
            onClick={() => setFullScreenImage(null)}
          >
            <img
              src={fullScreenImage}
              alt="Full screen project image"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        )}
      </section>
    </Layout>
  )
}