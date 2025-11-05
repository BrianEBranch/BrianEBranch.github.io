import { FileText, Wrench, Zap, Code } from "lucide-react";
import avatarImage from "@/assets/avatar-pixel.png";

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <FileText className="w-6 h-6 brass-text" />
            <span className="pixel-font text-sm brass-text">CLASSIFIED FILE</span>
          </div>
          <h1 className="pixel-font text-3xl md:text-4xl terminal-glow mb-4">
            PROFILE DOSSIER
          </h1>
          <div className="h-px bg-brass max-w-md mx-auto" />
        </div>

        {/* Main Profile Card */}
        <div className="grain-texture retro-border bg-card p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="retro-border p-2 bg-background inline-block">
                <img
                  src={avatarImage}
                  alt="Brian - Pixel Avatar"
                  className="w-48 h-48 object-cover"
                  style={{ imageRendering: "pixelated" }}
                />
                <div className="mt-2 flex justify-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-flicker" />
                  <div className="w-2 h-2 bg-accent rounded-full animate-flicker" style={{ animationDelay: "0.3s" }} />
                  <div className="w-2 h-2 bg-primary rounded-full animate-flicker" style={{ animationDelay: "0.6s" }} />
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="mb-6">
                <div className="terminal-font text-sm brass-text mb-1">DESIGNATION:</div>
                <h2 className="text-2xl font-bold terminal-glow">BRIAN</h2>
              </div>

              <div className="mb-6">
                <div className="terminal-font text-sm brass-text mb-1">CLASSIFICATION:</div>
                <div className="flex flex-wrap gap-2">
                  {["ENGINEER", "BUILDER", "TINKERER", "RETRO ENTHUSIAST"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 border border-brass bg-primary/10 pixel-font text-xs brass-text"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="terminal-font text-sm brass-text mb-2">MISSION STATEMENT:</div>
                <p className="text-foreground leading-relaxed">
                  Building the future with tools from the past. I merge 1920s craftsmanship with
                  modern technology, creating projects that blend industrial elegance with digital innovation.
                  When I'm not wrangling code or soldering circuits, you'll find me exploring the
                  intersection of retro-futurism and practical engineering.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills/Expertise Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {[
            {
              icon: Code,
              title: "SOFTWARE ENGINEERING",
              items: ["Frontend Development", "React & TypeScript", "UI/UX Design", "Web Applications"],
            },
            {
              icon: Wrench,
              title: "HARDWARE PROJECTS",
              items: ["Electronics", "Mechanical Design", "Prototyping", "Retro Computing"],
            },
            {
              icon: Zap,
              title: "SPECIALIZATIONS",
              items: ["Retro Aesthetics", "Industrial Design", "System Architecture", "Creative Coding"],
            },
            {
              icon: FileText,
              title: "DOCUMENTATION",
              items: ["Technical Writing", "Project Logs", "Tutorial Creation", "Knowledge Sharing"],
            },
          ].map((module, index) => {
            const Icon = module.icon;
            return (
              <div key={index} className="module-card grain-texture p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 border-2 border-brass bg-primary/10">
                    <Icon className="w-5 h-5 brass-text" />
                  </div>
                  <h3 className="pixel-font text-xs terminal-glow">{module.title}</h3>
                </div>
                <ul className="space-y-2">
                  {module.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full animate-flicker" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Timeline/Journey Section */}
        <div className="grain-texture retro-border bg-card p-8">
          <h3 className="pixel-font text-lg terminal-glow mb-6 text-center">
            OPERATIONAL TIMELINE
          </h3>
          <div className="space-y-6">
            {[
              {
                year: "2020",
                event: "TERMINAL INITIALIZATION",
                description: "Began merging vintage aesthetics with modern tech",
              },
              {
                year: "2021",
                event: "HARDWARE INTEGRATION",
                description: "Expanded into physical computing and retro electronics",
              },
              {
                year: "2023",
                event: "FULL SYSTEM DEPLOYMENT",
                description: "Launched comprehensive project portfolio",
              },
              {
                year: "2025",
                event: "CURRENT OPERATIONS",
                description: "Building the retro-futuristic web, one project at a time",
              },
            ].map((entry, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 border-2 border-primary bg-primary/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full animate-flicker" />
                  </div>
                  {index < 3 && (
                    <div className="w-px h-full bg-brass mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-6">
                  <div className="terminal-font text-sm brass-text mb-1">{entry.year}</div>
                  <h4 className="pixel-font text-sm terminal-glow mb-2">{entry.event}</h4>
                  <p className="text-sm text-muted-foreground">{entry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
