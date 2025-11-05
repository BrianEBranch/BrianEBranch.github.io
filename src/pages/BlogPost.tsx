import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Radio, Share2 } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams();

  // In a real app, this would fetch the post based on ID
  const post = {
    id: 1,
    title: "Building a Retro Weather Station with Modern Sensors",
    date: "2025-01-15",
    category: "HARDWARE",
    readTime: "8 min",
    author: "BRIAN",
    content: `
# TRANSMISSION BEGIN

Welcome to this technical dispatch on building a fully functional weather station that combines the elegance of 1920s instrument design with modern sensor technology.

## The Concept

The idea came from wanting to display weather data in a way that felt more tangible and engaging than a simple digital readout. Vintage weather instruments have a certain charm - brass housings, analog dials, mechanical movements - that modern devices lack.

## Hardware Components

### Sensors
- BME280 for temperature, humidity, and pressure
- Anemometer for wind speed
- Wind vane for direction
- Rain gauge with tipping bucket mechanism

### Microcontroller
I chose an Arduino Mega for its multiple analog inputs and sufficient processing power. The extra I/O pins proved invaluable as the project grew.

### Display Elements
- Custom laser-cut brass dials
- Vintage-style analog gauges (repurposed voltmeters)
- Small OLED display for exact readings (hidden unless needed)
- LED indicators for status

## The Build Process

### Phase 1: Sensor Integration
First, I got all the sensors talking to the Arduino. The BME280 communicates via I2C, making it straightforward to integrate. The mechanical sensors required careful calibration.

### Phase 2: Mechanical Design
Using brass sheet metal, I fabricated the housing. This involved:
- Cutting and bending brass panels
- Drilling precise holes for gauges
- Adding decorative rivets
- Applying a aged patina finish

### Phase 3: Electronics Assembly
Wiring everything inside the brass enclosure was challenging but rewarding. I used vintage-style fabric-wrapped wire for authenticity.

### Phase 4: Calibration
Getting accurate readings took several iterations. Each gauge needed individual calibration curves mapped in software.

## Code Architecture

The Arduino code handles:
- Sensor polling at appropriate intervals
- Data smoothing and filtering
- Gauge position calculations
- Serial communication for logging
- Error detection and recovery

## Results

The final weather station performs flawlessly while looking like it belongs in a 1920s radio station. It's both functional and a conversation piece.

## Lessons Learned

1. Metalworking takes patience and practice
2. Calibration is more important than you think
3. Document everything as you go
4. The smallest details matter for authenticity
5. Sometimes analog is more satisfying than digital

## Future Improvements

- Add wireless connectivity
- Implement data logging to SD card
- Create a matching indoor display unit
- Build a protective housing for outdoor deployment

---

## Technical Specifications

**Dimensions:** 30cm x 20cm x 15cm  
**Weight:** 2.3kg  
**Power:** 12V DC, 500mA average  
**Accuracy:** ±0.5°C, ±3% humidity  
**Update Rate:** 10 seconds  
**Materials:** Brass, steel, glass, wood  

# TRANSMISSION END

Thank you for reading this dispatch. Questions? Transmit them via the contact terminal.
    `,
  };

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
            {[
              { id: 2, title: "The Art of CRT Scanline Effects in CSS", category: "SOFTWARE" },
              { id: 3, title: "Designing with Brass: Metalworking for Engineers", category: "HARDWARE" },
            ].map((related) => (
              <Link
                key={related.id}
                to={`/blog/${related.id}`}
                className="block p-4 border border-brass/30 hover:border-primary hover:bg-primary/5 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="terminal-font text-xs brass-text">{related.category}</span>
                    <h4 className="text-sm font-medium group-hover:terminal-glow transition-colors mt-1">
                      {related.title}
                    </h4>
                  </div>
                  <ArrowLeft className="w-4 h-4 brass-text group-hover:terminal-glow transition-colors rotate-180" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
