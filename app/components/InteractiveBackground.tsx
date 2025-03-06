"use client"

import { useRef, useEffect } from "react"
import * as THREE from "three"

export default function InteractiveBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    containerRef.current.appendChild(renderer.domElement)

    // Create particles with circular texture
    const particlesCount = 5000
    
    // Create a circular texture for stars
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    canvas.width = 32
    canvas.height = 32
    if (context) {
      // Draw a radial gradient to create a circular shape
      const gradient = context.createRadialGradient(16, 16, 0, 16, 16, 16)
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)')
      gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.5)')
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
      context.fillStyle = gradient
      context.beginPath()
      context.arc(16, 16, 16, 0, Math.PI * 2)
      context.fill()
    }
    
    // Create texture from canvas
    const texture = new THREE.CanvasTexture(canvas)
    
    const particlesGeometry = new THREE.BufferGeometry()
    const posArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))

    // Use the circular texture for particles
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.01,
      map: texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    camera.position.z = 2

    let mouseX = 0
    let mouseY = 0

    const animateParticles = (event: MouseEvent) => {
      mouseX = event.clientX
      mouseY = event.clientY
    }

    window.addEventListener("mousemove", animateParticles)

    const clock = new THREE.Clock()

    const animate = () => {
      requestAnimationFrame(animate)

      const elapsedTime = clock.getElapsedTime()

      particlesMesh.rotation.y = -0.1 * elapsedTime
      if (mouseX > 0) {
        particlesMesh.rotation.x = -mouseY * (elapsedTime * 0.00008)
        particlesMesh.rotation.y = mouseX * (elapsedTime * 0.00008)
      }

      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("mousemove", animateParticles)
      window.removeEventListener("resize", handleResize)
      containerRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 bg-gradient-to-br from-blue-900 to-black" />
}