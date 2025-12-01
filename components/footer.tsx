export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-primary text-primary-foreground/80">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-primary-foreground/20">
          <div>
            <h4 className="font-serif text-lg font-semibold text-primary-foreground mb-4">Aerospace Engineer</h4>
            <p className="text-sm leading-relaxed">
              Engineering is the closest thing we have to magic.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {['About', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-primary-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:parthjain03@gmail.com" className="hover:text-primary-foreground transition-colors">
                  Email
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/jain-parth/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.researchgate.net/publication/388969393_thrustMIT-_Project_AgniAstra_Team_56_Project_Technical_Report_to_the_2024_Spaceport_America_Cup" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                  ResearchGate
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-sm text-primary-foreground/60">
          <p>&copy; 2025 All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
