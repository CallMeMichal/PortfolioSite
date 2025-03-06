import Layout from "../components/Layout"
import Image from "next/image"

export default function About() {
  return (
    <Layout>
      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <div className="max-w-4xl text-center">
          <div className="mb-8 flex justify-center">
            <Image 
              src="/moje2.png" 
              alt="Profile Picture" 
              width={300} 
              height={300} 
              className="rounded-full object-cover shadow-lg"
            />
          </div>
          <div className="space-y-4 text-lg text-white-700">
            <p>
              I'm a graduate of the Polish-Japanese Academy of Computer Techniques in Warsaw, where I developed a strong foundation in cutting-edge computer technologies and digital innovation. My academic journey has equipped me with comprehensive skills in software development and computer science.
            </p>
            
            <p>
              As a passionate technologist, I thrive on exploring the intersection of technology and creativity. My professional interests span full-stack web development, with a particular enthusiasm for creating intuitive and efficient digital solutions.
            </p>
            
            <p>
              Beyond the world of coding, I'm an avid mountain enthusiast. Hiking allows me to find balance, challenge myself physically, and gain fresh perspectives. Whether trekking through the Tatra Mountains in Poland or exploring alpine landscapes, I find inspiration in nature's grand vistas and challenging terrains.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}