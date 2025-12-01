export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold mb-6">Get In Touch</h2>
          <div className="w-12 h-px bg-accent/50 mx-auto mb-8"></div>
          <p className="text-lg text-foreground/70">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="text-center">
            <h3 className="font-semibold text-foreground mb-3">Email</h3>
            <a
              href="mailto:parthjain03@gmail.com"
              className="text-accent hover:text-accent/80 transition-colors"
            >
              parthjain03@gmail.com
            </a>
          </div>

          <div className="text-center">
            <h3 className="font-semibold text-foreground mb-3">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/jain-parth/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 transition-colors"
            >
              linkedin.com/in/jain-parth
            </a>
          </div>
        </div>

        <div className="pt-16 border-t border-border text-center">
          <form className="space-y-6 max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 bg-background border border-border rounded text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent/50"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-3 bg-background border border-border rounded text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent/50"
            />
            <textarea
              placeholder="Your message"
              rows={5}
              className="w-full px-4 py-3 bg-background border border-border rounded text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent/50 resize-none"
            ></textarea>
            <button className="w-full px-8 py-3 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
