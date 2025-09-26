
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-900 text-white py-4 px-6 md:px-8 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold">
          Your Name
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="hover:text-gray-400">
            About
          </a>
          <a href="#projects" className="hover:text-gray-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </nav>
        <Button variant="outline" className="md:hidden">
          Menu
        </Button>
      </header>
      <main className="flex-1">
        <section
          id="hero"
          className="bg-gray-900 text-white py-20 md:py-32 flex flex-col items-center justify-center text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to My Digital Garden
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mb-8">
            I'm a passionate developer, writer, and creator. Explore my work and
            get in touch.
          </p>
          <div className="flex space-x-4">
            <Button>View Projects</Button>
            <Button variant="outline">Contact Me</Button>
          </div>
        </section>
        <section id="projects" className="py-16 md:py-24">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Project 1</CardTitle>
                  <CardDescription>A brief description of the project.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    More details about the project. Talk about the technologies used, the challenges faced, and the solutions implemented.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button>View Project</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Project 2</CardTitle>
                  <CardDescription>A brief description of the project.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    More details about the project. Talk about the technologies used, the challenges faced, and the solutions implemented.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button>View Project</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Project 3</CardTitle>
                  <CardDescription>A brief description of the project.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    More details about the project. Talk about the technologies used, the challenges faced, and the solutions implemented.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button>View Project</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-6 px-6 md:px-8 text-center">
        <p>© 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}
