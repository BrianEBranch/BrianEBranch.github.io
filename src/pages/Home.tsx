import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Terminal, Cpu, Radio } from "lucide-react";
import StartupSequence from "@/components/StartupSequence";
import heroImage from "@/assets/hero-terminal.jpg";

const Home = () => {
  const [showStartup, setShowStartup] = useState(true);

  if (showStartup) {
    return <StartupSequence onComplete={() => setShowStartup(false)} />;
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Retro Terminal Workstation"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="grain-texture retro-border bg-card/90 backdrop-blur-sm p-8 md:p-12 max-w-4xl mx-auto">
            {/* Terminal Header */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <Terminal className="w-8 h-8 terminal-glow animate-flicker" />
              <span className="pixel-font text-xs sm:text-sm terminal-glow">
                SYSTEM ONLINE
              </span>
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-primary rounded-full animate-flicker" />
                <div className="w-2 h-2 bg-primary rounded-full animate-flicker" style={{ animationDelay: "0.3s" }} />
                <div className="w-2 h-2 bg-primary rounded-full animate-flicker" style={{ animationDelay: "0.6s" }} />
              </div>
            </div>

            {/* Main Title */}
            <h1 className="pixel-font text-2xl sm:text-3xl md:text-4xl terminal-glow mb-4">
              WELCOME TO
              <br />
              BRIAN'S TERMINAL
            </h1>

            <div className="h-px bg-brass my-6 mx-auto max-w-md" />

            {/* Subtitle */}
            <p className="terminal-font text-lg sm:text-xl md:text-2xl brass-text mb-8">
              Engineering the Future with Retro Style
            </p>

            <p className="text-base sm:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              A personal data terminal from an alternate timeline where 1920s industrial design,
              Fallout aesthetics, and 8-bit gaming culture merged into something beautiful.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/projects"
                className="group px-6 py-3 border-2 border-primary bg-primary/20 hover:bg-primary/30 transition-all btn-press flex items-center gap-2 pixel-font text-xs terminal-glow"
              >
                VIEW MODULES
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="group px-6 py-3 border-2 border-brass hover:border-primary hover:bg-primary/10 transition-all btn-press flex items-center gap-2 pixel-font text-xs brass-text hover:terminal-glow"
              >
                ACCESS PROFILE
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="pixel-font text-xl sm:text-2xl terminal-glow text-center mb-12">
            TERMINAL FEATURES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Cpu,
                title: "HARDWARE MODULES",
                description: "Explore engineering projects built with brass, code, and determination",
                link: "/projects",
              },
              {
                icon: Radio,
                title: "TRANSMISSION LOGS",
                description: "Read dispatches from the workshop on technology, design, and retro-futurism",
                link: "/blog",
              },
              {
                icon: Terminal,
                title: "DIRECT LINK",
                description: "Establish a telegraph connection for collaboration and inquiries",
                link: "/contact",
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={index}
                  to={feature.link}
                  className="module-card grain-texture p-6 hover:scale-[1.02] transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 border-2 border-brass bg-primary/10 rounded">
                      <Icon className="w-6 h-6 brass-text group-hover:terminal-glow transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="pixel-font text-sm terminal-glow mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-xs brass-text group-hover:terminal-glow transition-colors">
                    <span className="terminal-font">ACCESS MODULE</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
