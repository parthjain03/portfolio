export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="font-serif text-6xl md:text-7xl font-bold text-balance leading-tight">
                Parth Jain
              </h1>
              <p className="text-xl text-foreground/60 mt-2">Aerospace Engineer</p>
            </div>
            
            <div className="w-16 h-px bg-accent/50"></div>
            
            <p className="text-lg md:text-xl text-foreground/70 text-balance leading-relaxed max-w-xl">
              Designing and innovating solutions in aerospace technology, from concept to implementation
            </p>
          </div>

          {/* Personal photo */}
          <div className="flex justify-center md:justify-end">
            <div className="w-72 h-80 bg-card border border-foreground/10 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/parth_profile-9ZUg7ra9HU2BQhb0ObzBzwNRE0c6OH.jpeg"
                alt="Parth Jain - Aerospace Engineer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
