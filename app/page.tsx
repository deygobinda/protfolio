"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function Component() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg mt-4 rounded-full w-auto"
            : "bg-transparent w-full"
        }`}
      >
        <div className={`mx-auto px-4 ${isScrolled ? "max-w-md" : "container"}`}>
          <ul className="flex justify-center space-x-6 py-4">
            <li>
              <Link href="#home" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="#projects" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Social Media Links */}
      <div className="fixed bottom-4 left-4 flex flex-col space-y-4">
        <Link href="https://github.com/deygobinda" target="_blank" rel="noopener noreferrer">
          <Button size="icon" variant="outline">
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </Button>
        </Link>
        <Link href="linkedin.com/in/deygobinda" target="_blank" rel="noopener noreferrer">
          <Button size="icon" variant="outline">
            <Linkedin className="h-4 w-4" />
            <span className="sr-only">LinkedIn</span>
          </Button>
        </Link>
        <Link href="https://x.com/deygobinda_" target="_blank" rel="noopener noreferrer">
          <Button size="icon" variant="outline">
            <Twitter className="h-4 w-4" />
            <span className="sr-only">Twitter</span>
          </Button>
        </Link>
      </div>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-xl mb-8">I'm a passionate developer creating amazing web experiences</p>
          <Button asChild>
            <Link href="#projects">View My Work</Link>
          </Button>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <Card key={project}>
                <CardHeader>
                  <CardTitle>Project {project}</CardTitle>
                  <CardDescription>A brief description of the project</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src={`/placeholder.svg?height=200&width=400`}
                    alt={`Project ${project}`}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <Button className="w-full">View Project</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-16">
            <img
              src="/placeholder.svg?height=300&width=300"
              alt="Profile"
              className="w-64 h-64 rounded-full object-cover"
            />
            <div className="max-w-md">
              <p className="text-lg mb-4">
                Hello! I'm a passionate web developer with expertise in React, Node.js, and modern web technologies. I
                love creating intuitive and performant web applications that solve real-world problems.
              </p>
              <p className="text-lg mb-4">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or enjoying the great outdoors.
              </p>
              <Button asChild>
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}