
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Github, Linkedin, Twitter } from "lucide-react";

const projects = [
  {
    title: "Project One",
    description: "A cutting-edge application that solves a real-world problem.",
    image: "/project1.png", // Replace with your project image
  },
  {
    title: "Project Two",
    description: "An innovative platform that connects people and ideas.",
    image: "/project2.png", // Replace with your project image
  },
  {
    title: "Project Three",
    description: "A beautiful and intuitive user interface for a complex system.",
    image: "/project3.png", // Replace with your project image
  },
];

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <Avatar className="w-32 h-32 mb-4 border-4 border-gray-700">
            <AvatarImage src="/avatar.png" alt="Your Name" /> 
            <AvatarFallback>YN</AvatarFallback>
          </Avatar>
          <h1 className="text-5xl font-bold mb-2">Your Name</h1>
          <p className="text-xl text-gray-400">Software Engineer | Creative Thinker | Problem Solver</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white"><Github /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Linkedin /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Twitter /></a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="p-8 rounded-xl bg-white/10 backdrop-blur-md border border-white/20"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <HoverCard key={index}>
                <HoverCardTrigger>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
                  >
                    <Card className="bg-gray-800 border-gray-700 hover:border-gray-500 transition-all">
                      <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <img src={project.image} alt={project.title} className="rounded-lg mb-4" />
                        <p className="text-gray-400">{project.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </HoverCardTrigger>
                <HoverCardContent>
                  <p>More details about {project.title} will be available soon!</p>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="text-center mt-16"
        >
          <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">Contact Me</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Get in Touch</DialogTitle>
              </DialogHeader>
              {/* Add your contact form here */}
              <p>Your contact form will be here.</p>
            </DialogContent>
          </Dialog>
        </motion.div>
      </main>
    </div>
  );
}
