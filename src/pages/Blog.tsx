import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Radio, Share2 } from "lucide-react";
import { useEffect, useState } from "react";

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        // Dynamically import the post by ID
        const module = await import(`../Blogs/${id}.js`);
        setPost(module.default);
      } catch (err) {
        console.error("Post not found", err);
      }
    };

    loadPost();
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-muted-foreground">
        Loading transmission...
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Back Button */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 border-2 border-brass brass-text hover:border-primary hover:bg-primary/10 btn-press pixel-font text-xs transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          BACK TO LOGS
        </Link>

        {/* Article Header */}
        <article className="grain-texture retro-border bg-card p-8 mb-8">
          {/* Meta Info */}
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-3 py-1 border border-brass bg-primary/10 pixel-font text-xs brass-text">
              {post.category}
            </span>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span className="terminal-font">{post.date}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span className="terminal-font">{post.readTime} read</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Radio className="w-4 h-4 brass-text animate-flicker" />
              <span className="terminal-font brass-text">BY {post.author}</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold terminal-glow mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-brass" />
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-flicker" />
              <div className="w-2 h-2 bg-primary rounded-full animate-flicker" style={{ animationDelay: "0.3s" }} />
              <div className="w-2 h-2 bg-primary rounded-full animate-flicker" style={{ animationDelay: "0.6s" }} />
            </div>
            <div className="flex-1 h-px bg-brass" />
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="whitespace-pre-line text-foreground leading-relaxed">
              {post.content}
            </div>
          </div>
        </article>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between mb-8">
          <button className="px-4 py-3 border-2 border-brass brass-text hover:border-primary hover:bg-primary/10 btn-press pixel-font text-xs transition-all flex items-center justify-center gap-2">
            <Share2 className="w-4 h-4" />
            SHARE TRANSMISSION
          </button>
          <Link
            to="/contact"
            className="px-4 py-3 border-2 border-primary bg-primary/20 hover:bg-primary/30 btn-press pixel-font text-xs terminal-glow transition-all flex items-center justify-center gap-2"
          >
            <Radio className="w-4 h-4" />
            RESPOND VIA TERMINAL
          </Link>
        </div>

        {/* Related Posts */}
        <div className="grain-texture retro-border bg-card p-8">
          <h3 className="pixel-font text-lg terminal-glow mb-6">
            RELATED TRANSMISSIONS
          </h3>
          <div className="space-y-4">
            {/* Example: You could filter by category or pick manually */}
            <Link
              to={`/blog/2`}
              className="block p-4 border border-brass/30 hover:border-primary hover:bg-primary/5 transition-all group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="terminal-font text-xs brass-text">SOFTWARE</span>
                  <h4 className="text-sm font-medium group-hover:terminal-glow transition-colors mt-1">
                    The Art of CRT Scanline Effects in CSS
                  </h4>
                </div>
                <ArrowLeft className="w-4 h-4 brass-text group-hover:terminal-glow transition-colors rotate-180" />
              </div>
            </Link>
            <Link
              to={`/blog/3`}
              className="block p-4 border border-brass/30 hover:border-primary hover:bg-primary/5 transition-all group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="terminal-font text-xs brass-text">HARDWARE</span>
                  <h4 className="text-sm font-medium group-hover:terminal-glow transition-colors mt-1">
                    Designing with Brass: Metalworking for Engineers
                  </h4>
                </div>
                <ArrowLeft className="w-4 h-4 brass-text group-hover:terminal-glow transition-colors rotate-180" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
