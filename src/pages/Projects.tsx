import { ExternalLink, Cpu, Wrench, Code } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "RETRO WEATHER STATION",
      category: "HARDWARE",
      icon: Wrench,
      description: "A vintage-styled weather monitoring system with brass gauges and analog displays, powered by modern sensors and microcontrollers.",
      technologies: ["Arduino", "Metal Fabrication", "Sensor Integration", "Vintage Displays"],
      status: "OPERATIONAL",
      color: "primary",
    },
    {
      id: 2,
      title: "TERMINAL UI FRAMEWORK",
      category: "SOFTWARE",
      icon: Code,
      description: "A React component library for building retro-futuristic interfaces with CRT effects, scanlines, and vintage terminal aesthetics.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Animation"],
      status: "IN DEVELOPMENT",
      color: "accent",
    },
    {
      id: 3,
      title: "BRASS CALCULATOR",
      category: "HARDWARE",
      icon: Cpu,
      description: "A functional mechanical calculator housed in a custom brass enclosure, combining vintage craftsmanship with modern electronics.",
      technologies: ["PCB Design", "Metal Working", "Mechanical Engineering"],
      status: "COMPLETED",
      color: "primary",
    },
    {
      id: 4,
      title: "8-BIT PORTFOLIO SITE",
      category: "SOFTWARE",
      icon: Code,
      description: "A personal portfolio website designed to look like an NES game menu system with pixel art and chiptune music integration.",
      technologies: ["React", "Pixel Art", "Audio API", "Game Design"],
      status: "OPERATIONAL",
      color: "accent",
    },
    {
      id: 5,
      title: "STEAMPUNK KEYBOARD",
      category: "HARDWARE",
      icon: Wrench,
      description: "A custom mechanical keyboard with brass keycaps, vintage typewriter styling, and individually addressable RGB backlighting.",
      technologies: ["Mechanical Design", "Custom PCB", "QMK Firmware", "Metal Casting"],
      status: "IN DEVELOPMENT",
      color: "primary",
    },
    {
      id: 6,
      title: "FALLOUT PIP-BOY CLONE",
      category: "HARDWARE",
      icon: Cpu,
      description: "A wearable device inspired by Fallout's Pip-Boy with real-time data display, environmental sensors, and retro terminal interface.",
      technologies: ["Raspberry Pi", "3D Printing", "Python", "Electronics"],
      status: "OPERATIONAL",
      color: "accent",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Cpu className="w-6 h-6 brass-text animate-flicker" />
            <span className="pixel-font text-sm brass-text">MODULE DATABASE</span>
          </div>
          <h1 className="pixel-font text-3xl md:text-4xl terminal-glow mb-4">
            PROJECT MODULES
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of hardware and software projects blending retro aesthetics with modern engineering
          </p>
          <div className="h-px bg-brass max-w-md mx-auto mt-6" />
        </div>

        {/* Stats Bar */}
        <div className="grain-texture retro-border bg-card p-4 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { label: "TOTAL MODULES", value: "6" },
              { label: "OPERATIONAL", value: "3" },
              { label: "IN DEVELOPMENT", value: "2" },
              { label: "COMPLETED", value: "1" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="terminal-font text-2xl terminal-glow mb-1">{stat.value}</div>
                <div className="pixel-font text-xs brass-text">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => {
            const Icon = project.icon;
            const statusColor = 
              project.status === "OPERATIONAL" ? "terminal-green" :
              project.status === "IN DEVELOPMENT" ? "accent" :
              "brass";

            return (
              <div
                key={project.id}
                className="module-card grain-texture p-6 hover:scale-[1.02] transition-all group cursor-pointer"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 border-2 border-brass bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 brass-text group-hover:terminal-glow transition-colors" />
                    </div>
                    <div>
                      <div className="pixel-font text-xs brass-text mb-1">{project.category}</div>
                      <h3 className="pixel-font text-sm terminal-glow">{project.title}</h3>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 brass-text group-hover:terminal-glow transition-colors opacity-0 group-hover:opacity-100" />
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 border border-brass/50 bg-background/50 text-xs terminal-font text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Status */}
                <div className="flex items-center justify-between pt-4 border-t border-brass/30">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full animate-flicker`} 
                         style={{ backgroundColor: `hsl(var(--${statusColor}))` }} />
                    <span className="terminal-font text-xs brass-text">STATUS:</span>
                    <span className="terminal-font text-xs terminal-glow">{project.status}</span>
                  </div>
                  <span className="terminal-font text-xs brass-text">MODULE-{project.id.toString().padStart(3, '0')}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <div className="grain-texture retro-border bg-card p-6 inline-block">
            <p className="terminal-font text-sm brass-text">
              MORE MODULES UNDER CONSTRUCTION...
            </p>
            <div className="flex gap-2 justify-center mt-3">
              <div className="w-2 h-2 bg-accent rounded-full animate-flicker" />
              <div className="w-2 h-2 bg-accent rounded-full animate-flicker" style={{ animationDelay: "0.3s" }} />
              <div className="w-2 h-2 bg-accent rounded-full animate-flicker" style={{ animationDelay: "0.6s" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
