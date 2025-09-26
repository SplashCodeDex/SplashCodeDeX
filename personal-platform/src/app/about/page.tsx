
import { Header } from "@/components/header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-16 pt-32">
        <div className="flex flex-col items-center text-center">
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
          <div className="text-lg text-center max-w-2xl mt-8 space-y-4">
            <p>
              I'm a passionate software engineer specializing in web development and design.
              You can ask me about anything in between! My pronouns are He/Him.
            </p>
            <p>
              Fun fact: I believe a good cup of coffee can solve any coding bug. ☕
            </p>
            <p>
              How to reach me: Check out my social links!
            </p>
          </div>

          <div className="max-w-4xl w-full mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">Languages and Tools</h2>
            <div className="flex justify-center flex-wrap gap-4 p-4 bg-muted/50 rounded-lg">
              <img src="https://img.shields.io/badge/Python-282C34?logo=python&logoColor=3776AB" alt="Python" className="h-10" />
              <img src="https://img.shields.io/badge/JavaScript-282C34?logo=javascript&logoColor=F7DF1E" alt="JavaScript" className="h-10" />
              <img src="https://img.shields.io/badge/Git-282C34?logo=git&logoColor=F05032" alt="Git" className="h-10" />
              <img src="https://img.shields.io/badge/Docker-282C34?logo=docker&logoColor=2496ED" alt="Docker" className="h-10" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
