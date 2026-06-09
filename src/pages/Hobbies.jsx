import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import Lightbox from '../components/Lightbox'

const hobbies = [
  {
    title: 'Soccer',
    tag: 'Team Sport',
    summary:
      'Soccer is where I learned what it actually means to work with other people. Showing up to practice, trusting your teammates, staying focused when the pressure is high. Those habits carry over into everything I do.',
    quote: 'Great work is built the same way a team wins: trust first, execution second.',
    details:
      'Individual talent only gets you so far in soccer. The game rewards people who communicate well, read the situation quickly, and do not panic when things get tight. I try to be that person on every team I am part of.',
    image: '/soccer.jpg',
    imageAlt: 'Soccer',
  },
  {
    title: 'Bowling',
    tag: 'Strategy + Focus',
    summary:
      'Bowling looks easy until you try to do it well. Getting consistent takes real focus, and the same calm you need to throw a good frame is the same calm you need to debug a tricky problem.',
    quote: 'The best frames come from preparation. The worst come from overthinking.',
    details:
      'Every lane is a little different. You have to pay attention, adjust your approach, and stay patient even when it is not clicking. There is something satisfying about figuring out the right system and then watching it hold up.',
    video: '/bowling-cal-poly.mp4',
  },
  {
    title: 'Hiking',
    tag: 'Adventure',
    summary:
      'Hiking resets my head. A few days in Yosemite with no signal and nothing to do but walk makes every problem that felt urgent seem a lot more manageable when I get back.',
    quote: 'Nature gives you perspective that no amount of screen time can replicate.',
    details:
      'Some of my best ideas have come on long trail days. There is no multitasking when you are climbing switchbacks. You just walk, and your brain has room to work on things in the background. I come back from hikes sharper than almost anything else gives me.',
    image: '/backpacking-yosemite.jpg',
    imageAlt: 'Backpacking in Yosemite',
  },
  {
    title: 'Cycling',
    tag: 'Endurance',
    summary:
      'Cycling is how I push myself physically. Long rides in unfamiliar places, figuring out the route as I go. The patience it takes to grind through a long climb translates pretty directly to the patience you need on a difficult project.',
    quote: 'The hills are hard every time. You just learn to trust that you will get there.',
    details:
      'That never quite goes away, the difficulty of the hills. But I have learned to trust that if I keep pedaling, I will get there. That mindset has gotten me through more than a few difficult projects.',
    image: '/cycling.jpeg',
    imageAlt: 'Cycling',
  },
  {
    title: 'Photography',
    tag: 'Storytelling',
    summary:
      'Photography taught me to slow down and pay attention. Finding the right angle, waiting for the right light, noticing details that most people walk past. It has made me better at design and better at communicating ideas.',
    quote: 'What you leave out of a frame matters as much as what you keep in.',
    details:
      'I prefer natural light and moments that are not staged. The practice of deciding what to include and what to cut has helped me communicate more clearly in everything else I do.',
    image: '/photography.jpg',
    imageAlt: 'Photography moment',
  },
  {
    title: 'Gardening',
    tag: 'Patience and Growth',
    summary:
      'Gardening taught me that patience and consistency matter more than intensity. You cannot force a plant to grow faster by checking on it every hour. You show up, do the work, and trust the process.',
    quote: 'Consistency beats effort. The garden does not care how hard you tried today.',
    details:
      'The best results in a garden come from steady, repeated action over time. Water on schedule, prune when needed, adjust when something is not working. That same rhythm shows up in everything I take seriously. Skill, fitness, relationships, code quality. None of them respond to shortcuts. They all respond to showing up regularly and doing the small things right, even when there is nothing exciting to show for it yet.',
    image: '/gardening.jpeg',
    imageAlt: 'Gardening',
    imageFit: 'contain',
  },
  {
    title: 'Hot Air Balloon Adventures',
    tag: 'Perspective',
    summary:
      'I have had the chance to support hot air balloon operations and go up myself. Seeing things from that height changes your sense of scale. Problems that felt big on the ground look pretty small from 2,000 feet.',
    quote: 'You see a lot more clearly when you are not standing in the middle of it.',
    details:
      'Balloon operations do not leave room for guessing. Weather can shift fast, communication has to be clear, and every person on the crew needs to know their role. It is one of the few experiences outside of work that has reminded me how much preparation and trust actually matter.',
    image: '/balloon-2.jpg',
    imageAlt: 'Hot air balloon operations at launch',
  },
]

const galleryItems = [
  { src: '/balloon-1.jpg', alt: 'Balloon at dawn' },
  { src: '/balloon-2.jpg', alt: 'Balloon operations' },
  { src: '/backpacking-yosemite.jpg', alt: 'Yosemite backpacking trail', className: 'gallery-wide' },
  { src: '/raisin-lake-yosemite.jpg', alt: 'Raisin Lake, Yosemite' },
  { src: '/graduation-1.jpg', alt: 'Graduation day', className: 'gallery-tall' },
  { src: '/graduation-2.jpg', alt: 'Graduation celebration' },
  { src: '/graduation-3.jpg', alt: 'A moment of reflection' },
  { src: '/humboldt-helpers.jpg', alt: 'Humboldt Helpers community project', className: 'gallery-wide' },
]

export default function Hobbies() {
  useReveal()
  const [lightbox, setLightbox] = useState(null)

  return (
    <div className="page-content">
      {/* ── HERO ── */}
      <section className="hobby-hero glass-panel reveal">
        <div className="section-label">Beyond Technology</div>
        <h2>Work is important to me, but some of my best thinking happens when I am completely away from a screen.</h2>
        <p>
          Bowling, hiking, soccer, gardening. These are not hobbies I picked to look interesting on a website.
          They are things I actually do, and they have shaped how I think about patience, teamwork, and showing up consistently.
        </p>
      </section>

      {/* ── HOBBY CARDS ── */}
      <section className="hobby-list">
        {hobbies.map((hobby, i) => (
          <article key={hobby.title} className={`hobby-card glass-panel reveal reveal-delay-${(i % 3) + 1}`}>
            <div className="hobby-tag">{hobby.tag}</div>
            <div className="hobby-card-inner">
              <div className="hobby-copy">
                <h3>{hobby.title}</h3>
                <p className="hobby-summary">{hobby.summary}</p>
                <blockquote>{hobby.quote}</blockquote>
                <p className="hobby-details">{hobby.details}</p>
              </div>

              <div className="hobby-media">
                {hobby.image && (
                  <div
                    className={`hobby-media-img${hobby.imageFit === 'contain' ? ' contain' : ''}`}
                    onClick={() => setLightbox({ src: hobby.image, alt: hobby.imageAlt })}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setLightbox({ src: hobby.image, alt: hobby.imageAlt })}
                    aria-label={`View photo: ${hobby.imageAlt}`}
                  >
                    <img src={hobby.image} alt={hobby.imageAlt} loading="lazy" />
                  </div>
                )}
                {hobby.video && (
                  <div className="hobby-media-video">
                    <video
                      src={hobby.video}
                      controls
                      preload="metadata"
                      playsInline
                      aria-label={`${hobby.title} video`}
                    />
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* ── GALLERY ── */}
      <section className="gallery-section">
        <div className="section-headline reveal">
          <div className="section-label">Photo Gallery</div>
          <h3>Places and moments that have stuck with me.</h3>
        </div>
        <div className="gallery-grid reveal">
          {galleryItems.map((item) => (
            <div
              key={item.alt}
              className={`gallery-card${item.className ? ` ${item.className}` : ''}`}
              onClick={() => setLightbox(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setLightbox(item)}
              aria-label={`View ${item.alt}`}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <div className="gallery-overlay">
                <span>{item.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {lightbox && (
        <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}
    </div>
  )
}
