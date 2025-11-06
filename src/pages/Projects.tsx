import { ExternalLink, Cpu, Wrench, Code } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "STANLEY AI ASSISTANT",
      category: "HARDWARE",
      icon: Cpu,
      description: "Voice-activated AI assistant running on Raspberry Pi with facial recognition, wake word detection, and TTS capabilities.",
      technologies: ["Python", "OpenAI API", "Raspberry Pi", "Facial Recognition"],
      status: "OPERATIONAL",
      color: "primary",
    },
    {
      id: 2,
      title: "NASA FIREBALLS MAP",
      category: "SOFTWARE",
      icon: Code,
      description: "Visualized NASA fireball reports using Python, NumPy, Pandas, and Matplotlib to create an interactive data exploration tool.",
      technologies: ["Python", "NumPy", "Pandas", "Matplotlib"],
      status: "COMPLETED",
      color: "accent",
    },
    {
      id: 3,
      title: "CoBoards",
      category: "SOFTWARE",
      icon: Code,
      description: "Developed a collaborative digital whiteboard for team design projects, improving productivity and reducing iteration cycles.",
      technologies: ["React", "Firebase", "Tailwind CSS", "User Testing"],
      status: "OPERATIONAL",
      color: "primary",
    },
    {
      id: 4,
      title: "WHERE'S BRIAN?",
      category: "SOFTWARE",
      icon: Code,
      description: "Real-time web app where users compete against a KNN-based ML model to predict my location, with REST API and fast real-time updates.",
      technologies: ["React", "Vite", "FastAPI", "Machine Learning", "KNN", "API Development"],
      status: "IN DEVELOPMENT",
      color: "accent",
  },
    {
      id: 5,
      title: "PERSONAL PORTFOLIO WEBSITE",
      category: "SOFTWARE",
      icon: Code,
      description: "A Pip-Boy inspired portfolio website showcasing projects with retro UI and interactive elements.",
      technologies: ["React", "Tailwind CSS", "Pixel Art", "Audio API"],
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
            A collection of hardware and software projects
          </p>
          <div className="h-px bg-brass max-w-md mx-auto mt-6" />
        </div>

        {/* Stats Bar */}
        <div className="grain-texture retro-border bg-card p-4 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { label: "TOTAL MODULES", value: "6" },
              { label: "OPERATIONAL", value: "4" },
              { label: "IN DEVELOPMENT", value: "1" },
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
