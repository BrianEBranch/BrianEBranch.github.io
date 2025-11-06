import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Radio } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Testing Blog",
      date: "2025-11-5",
      category: "Software",
      excerpt: "My first blog to test functionallity",
      readTime: "1 min",
      status: "TRANSMITTED",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Radio className="w-6 h-6 brass-text animate-flicker" />
            <span className="pixel-font text-sm brass-text">TRANSMISSION LOG</span>
          </div>
          <h1 className="pixel-font text-3xl md:text-4xl terminal-glow mb-4">
            DISPATCH ARCHIVE
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Field notes, technical dispatches, and transmissions from the workshop
          </p>
          <div className="h-px bg-brass max-w-md mx-auto mt-6" />
        </div>

        {/* Filter Bar */}
        <div className="grain-texture retro-border bg-card p-4 mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {["ALL", "HARDWARE", "SOFTWARE", "DESIGN"].map((filter) => (
              <button
                key={filter}
                className={`
                  px-4 py-2 border-2 btn-press
                  pixel-font text-xs transition-all
                  ${filter === "ALL" 
                    ? "border-primary bg-primary/20 terminal-glow" 
                    : "border-brass brass-text hover:border-primary hover:bg-primary/10"}
                `}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts */}
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="block module-card grain-texture p-6 hover:scale-[1.01] transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 border border-brass bg-primary/10 pixel-font text-xs brass-text">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="terminal-font">{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full animate-flicker" />
                      <span className="terminal-font text-xs brass-text">{post.status}</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold terminal-glow mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-sm">
                    <span className="terminal-font brass-text">
                      READ TIME: {post.readTime}
                    </span>
                    <div className="flex items-center gap-2 terminal-font brass-text group-hover:terminal-glow transition-colors">
                      <span>ACCESS LOG</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Post Number Badge */}
                <div className="retro-border bg-primary/10 p-4 text-center min-w-[80px]">
                  <div className="terminal-font text-xs brass-text mb-1">LOG</div>
                  <div className="pixel-font text-lg terminal-glow">
                    {post.id.toString().padStart(3, '0')}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <div className="grain-texture retro-border bg-card p-4 inline-flex items-center gap-4">
            <button className="px-4 py-2 border-2 border-brass brass-text hover:border-primary hover:bg-primary/10 btn-press pixel-font text-xs transition-all">
              PREV
            </button>
            <div className="flex gap-2">
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  className={`
                    w-10 h-10 border-2 btn-press
                    pixel-font text-xs transition-all
                    ${page === 1 
                      ? "border-primary bg-primary/20 terminal-glow" 
                      : "border-brass brass-text hover:border-primary hover:bg-primary/10"}
                  `}
                >
                  {page}
                </button>
              ))}
            </div>
            <button className="px-4 py-2 border-2 border-brass brass-text hover:border-primary hover:bg-primary/10 btn-press pixel-font text-xs transition-all">
              NEXT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
