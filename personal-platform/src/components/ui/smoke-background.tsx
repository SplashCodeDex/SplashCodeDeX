
"use client";
import { useEffect, useState } from "react";
import { Particles } from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export const SmokeBackground = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  return (
    <div className="fixed inset-0 -z-10">
      {init && (
        <Particles
          id="tsparticles"
          options={{
            fpsLimit: 60,
            particles: {
              number: {
                value: 50,
              },
              color: {
                value: "#888",
              },
              shape: {
                type: "circle",
              },
              opacity: {
                value: 0.2,
                random: true,
              },
              size: {
                value: 100,
                random: true,
              },
              move: {
                enable: true,
                speed: 1,
                direction: "top",
                straight: false,
              },
            },
            interactivity: {
              detectsOn: "canvas",
              events: {
                onHover: {
                  enable: true,
                  mode: "bubble",
                },
              },
              modes: {
                bubble: {
                  distance: 400,
                  size: 200,
                  duration: 2,
                  opacity: 0.3,
                },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </div>
  );
};
