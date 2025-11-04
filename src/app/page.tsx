
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "next-themes";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Header } from "@/components/header";

const projects = [
  {
    title: "Workmate",
    description: "Your AI executive assistant.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Slingshot",
    description: "Personalized AI counselor.",
    image: "https://images.unsplash.com/photo-1620712943543-2858806db580?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Patreon",
    description: "Helping creators connect with superfans.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Home() {
  const { setTheme } = useTheme();
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="container mx-auto px-4 py-16 pt-32">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <Avatar className="w-32 h-32 mb-4 border-4 border-primary">
            <AvatarImage src="/avatar.png" alt="Your Name" />
            <AvatarFallback>YN</AvatarFallback>
          </Avatar>
          <h1 className="text-5xl font-bold mb-2">Your Name</h1>
          <p className="text-xl text-muted-foreground">
            Software Engineer | Creative Thinker | Problem Solver
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Github />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Linkedin />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Twitter />
            </a>
          </div>
        </motion.div>

        <div ref={targetRef}>
          <h2 className="text-3xl font-bold text-center mb-8">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                style={{
                  opacity,
                  scale,
                }}
              >
                <Card className="bg-card border-border hover:border-primary transition-all overflow-hidden">
                  <CardHeader>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="rounded-lg mb-4 h-48 object-cover"
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
