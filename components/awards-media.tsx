'use client'

import { useState } from 'react'

export default function AwardsMedia() {
  const [expandedAward, setExpandedAward] = useState<string | null>(null)

  const awards = [
    {
      id: 'nacdec',
      title: 'NACDeC-VII — Second Place',
      date: '2024',
      description: 'Secured second place among 45 teams at the 7th National Aerospace Conceptual Design Competition (NACDeC-VII), organised by The Aeronautical Society of India (AeSI). The team received a cash prize of ₹1,25,000 for their conceptual UAV designed for Martian atmospheric studies.'
    },
    {
      id: 'vedanth',
      title: 'Vedanth 13.0 — Third Place',
      date: '2024',
      description: 'Achieved third place at Vedanth 13.0, the national-level technical exhibition hosted by the Manipal Institute of Technology. The team demonstrated advanced rocketry innovations, including a novel airbrake mechanism, and received a cash prize of ₹15,000.'
    }
  ]

  const mediaLinks = [
    {
      outlet: 'MyGov India',
      title: 'Celebrating India\'s young innovators',
      description: 'Featured for contributions to student rocketry and thrustMIT\'s performance at the Spaceport America Cup 2024.',
      url: 'https://blog.mygov.in/editorial/celebrating-indias-young-innovators-who-outshined-at-spaceport-america-cup-2024/'
    },
    {
      outlet: 'India Education Diary',
      title: 'thrustMIT Team Recognized as India\'s Young Innovators',
      description: 'Coverage of thrustMIT\'s recognition at Spaceport America Cup 2024.',
      url: 'https://indiaeducationdiary.in/thrustmit-team-recognized-as-indias-young-innovators-at-spaceport-america-cup-2024/'
    },
    {
      outlet: 'Manipal Alumni Network',
      title: 'FlightForge\'s Second-Place Finish at NACDeC-VII',
      description: 'Highlighting FlightForge\'s achievement in the aerospace design competition.',
      url: 'https://mitmplalumni.manipal.edu/f/flight-forge-2nd-place-34134'
    }
  ]

  return (
    <section id="awards-media" className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-4xl font-bold mb-16 text-center">Awards & Media</h2>

        {/* Awards Section */}
        <div className="mb-16">
          <h3 className="font-semibold text-xl text-foreground mb-8 flex items-center gap-3">
            <span className="text-accent">★</span> Recognition & Awards
          </h3>
          <div className="space-y-4">
            {awards.map((award) => (
              <div
                key={award.id}
                className="p-6 border border-border rounded-lg bg-card hover:border-accent/50 transition-all"
              >
                <div
                  className="cursor-pointer"
                  onClick={() => setExpandedAward(expandedAward === award.id ? null : award.id)}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-lg text-foreground">{award.title}</h4>
                      <p className="text-sm text-foreground/60 mt-1">{award.date}</p>
                    </div>
                    <svg
                      className={`w-5 h-5 text-accent flex-shrink-0 mt-1 transition-transform ${
                        expandedAward === award.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>

                {expandedAward === award.id && (
                  <p className="text-foreground/70 mt-4 text-sm leading-relaxed">{award.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Media Mentions Section */}
        <div>
          <h3 className="font-semibold text-xl text-foreground mb-8 flex items-center gap-3">
            <span className="text-accent">📰</span> Media Mentions
          </h3>
          <div className="space-y-4">
            {mediaLinks.map((media, index) => (
              <a
                key={index}
                href={media.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 border border-border rounded-lg bg-card hover:border-accent/70 hover:bg-card/50 transition-all group block"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-sm font-medium text-accent">{media.outlet}</p>
                    <svg
                      className="w-5 h-5 text-accent flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                    {media.title}
                  </h4>
                  <p className="text-sm text-foreground/60">{media.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
