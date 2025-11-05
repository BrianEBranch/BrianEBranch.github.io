import { useState } from "react";
import { Send, Radio, Mail, Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate sending
    toast({
      title: "TRANSMISSION SENT",
      description: "Your message has been received. Expect a response soon.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Radio className="w-6 h-6 brass-text animate-flicker" />
            <span className="pixel-font text-sm brass-text">COMMUNICATION TERMINAL</span>
          </div>
          <h1 className="pixel-font text-3xl md:text-4xl terminal-glow mb-4">
            ESTABLISH CONNECTION
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transmit your message through the terminal. All communications are encrypted and stored in the archive.
          </p>
          <div className="h-px bg-brass max-w-md mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="grain-texture retro-border bg-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <Send className="w-5 h-5 brass-text" />
                <h2 className="pixel-font text-sm terminal-glow">TRANSMISSION FORM</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block terminal-font text-sm brass-text mb-2">
                    SENDER IDENTIFICATION:
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input border-2 border-brass focus:border-primary focus:outline-none terminal-font text-sm transition-colors terminal-glow"
                    placeholder="Enter your name..."
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block terminal-font text-sm brass-text mb-2">
                    RETURN FREQUENCY:
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input border-2 border-brass focus:border-primary focus:outline-none terminal-font text-sm transition-colors terminal-glow"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label className="block terminal-font text-sm brass-text mb-2">
                    TRANSMISSION SUBJECT:
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input border-2 border-brass focus:border-primary focus:outline-none terminal-font text-sm transition-colors terminal-glow"
                    placeholder="Brief subject line..."
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block terminal-font text-sm brass-text mb-2">
                    MESSAGE CONTENT:
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-input border-2 border-brass focus:border-primary focus:outline-none terminal-font text-sm transition-colors resize-none terminal-glow"
                    placeholder="Type your message..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-4 border-2 border-primary bg-primary/20 hover:bg-primary/30 btn-press pixel-font text-sm terminal-glow transition-all flex items-center justify-center gap-3"
                >
                  <Send className="w-5 h-5" />
                  TRANSMIT MESSAGE
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-flicker" />
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-flicker" style={{ animationDelay: "0.2s" }} />
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-flicker" style={{ animationDelay: "0.4s" }} />
                  </div>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            {/* Status Panel */}
            <div className="grain-texture retro-border bg-card p-6">
              <h3 className="pixel-font text-xs terminal-glow mb-4">TERMINAL STATUS</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="terminal-font text-xs brass-text">CONNECTION:</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-flicker" />
                    <span className="terminal-font text-xs terminal-glow">ACTIVE</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="terminal-font text-xs brass-text">SIGNAL:</span>
                  <span className="terminal-font text-xs terminal-glow">STRONG</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="terminal-font text-xs brass-text">ENCRYPTION:</span>
                  <span className="terminal-font text-xs terminal-glow">ENABLED</span>
                </div>
              </div>
            </div>

            {/* Direct Channels */}
            <div className="grain-texture retro-border bg-card p-6">
              <h3 className="pixel-font text-xs terminal-glow mb-4">DIRECT CHANNELS</h3>
              <div className="space-y-3">
                <a
                  href="mailto:brian@example.com"
                  className="flex items-center gap-3 p-3 border border-brass/30 hover:border-primary hover:bg-primary/5 transition-all group"
                >
                  <Mail className="w-4 h-4 brass-text group-hover:terminal-glow transition-colors" />
                  <div>
                    <div className="terminal-font text-xs brass-text">EMAIL</div>
                    <div className="text-xs text-muted-foreground">brian@example.com</div>
                  </div>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 border border-brass/30 hover:border-primary hover:bg-primary/5 transition-all group"
                >
                  <Github className="w-4 h-4 brass-text group-hover:terminal-glow transition-colors" />
                  <div>
                    <div className="terminal-font text-xs brass-text">GITHUB</div>
                    <div className="text-xs text-muted-foreground">@brian</div>
                  </div>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 border border-brass/30 hover:border-primary hover:bg-primary/5 transition-all group"
                >
                  <Linkedin className="w-4 h-4 brass-text group-hover:terminal-glow transition-colors" />
                  <div>
                    <div className="terminal-font text-xs brass-text">LINKEDIN</div>
                    <div className="text-xs text-muted-foreground">Brian</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Response Time */}
            <div className="grain-texture retro-border bg-card p-6">
              <h3 className="pixel-font text-xs terminal-glow mb-3">RESPONSE TIME</h3>
              <p className="terminal-font text-xs text-muted-foreground">
                Typical response within 24-48 hours. Priority transmissions flagged automatically.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
