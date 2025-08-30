import { MainNav } from "@/components/main-nav"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PortfolioPage() {
  const categories = [
    { id: 'all', name: 'All Genres' },
    { id: 'fantasy', name: 'Fantasy' },
    { id: 'romance', name: 'Romance' },
    { id: 'mystery', name: 'Mystery & Thriller' },
    { id: 'scifi', name: 'Science Fiction' },
    { id: 'nonfiction', name: 'Non-Fiction' },
    { id: 'ya', name: 'Young Adult' },
    { id: 'children', name: 'Children\'s Books' },
  ]

  const portfolioItems = [
    {
      id: 1,
      title: "Shadows of the Forgotten",
      author: "Elena Voss",
      genre: ["fantasy", "ya"],
      image: "/portfolio/shadows-of-the-forgotten.jpg",
      alt: "Fantasy book cover with a dark forest and glowing runes"
    },
    {
      id: 2,
      title: "The Last Summer",
      author: "James Calloway",
      genre: ["romance"],
      image: "/portfolio/the-last-summer.jpg",
      alt: "Romantic beach sunset with silhouettes of two people holding hands"
    },
    {
      id: 3,
      title: "Silent Witness",
      author: "Mia Zhang",
      genre: ["mystery", "thriller"],
      image: "/portfolio/silent-witness.jpg",
      alt: "Mysterious dark alley with a single lit window"
    },
    {
      id: 4,
      title: "Nebula Drift",
      author: "Dr. Alan Kessler",
      genre: ["scifi"],
      image: "/portfolio/nebula-drift.jpg",
      alt: "Spaceship flying through a colorful nebula"
    },
    {
      id: 5,
      title: "The Mindful Entrepreneur",
      author: "Sarah Chen",
      genre: ["nonfiction"],
      image: "/portfolio/mindful-entrepreneur.jpg",
      alt: "Minimalist design with a brain illustration and geometric shapes"
    },
    {
      id: 6,
      title: "Dragon's Heir",
      author: "Thomas Wright",
      genre: ["fantasy", "ya"],
      image: "/portfolio/dragons-heir.jpg",
      alt: "Dragon silhouette against a moonlit castle"
    },
    {
      id: 7,
      title: "The Secret of Willow Creek",
      author: "Emily Parker",
      genre: ["mystery", "ya"],
      image: "/portfolio/secret-willow-creek.jpg",
      alt: "Misty forest with a hidden path"
    },
    {
      id: 8,
      title: "Little Explorer's Guide to the Ocean",
      author: "Dr. Lisa Monroe",
      genre: ["children", "nonfiction"],
      image: "/portfolio/little-explorers-ocean.jpg",
      alt: "Colorful underwater scene with friendly sea creatures"
    },
    {
      id: 9,
      title: "Starlight Serenade",
      author: "Marcus Johnson",
      genre: ["romance", "scifi"],
      image: "/portfolio/starlight-serenade.jpg",
      alt: "Two astronauts holding hands with Earth in the background"
    },
    {
      id: 10,
      title: "The Alchemist's Daughter",
      author: "Isabella Montclair",
      genre: ["fantasy"],
      image: "/portfolio/alchemists-daughter.jpg",
      alt: "Mystical potion bottles with glowing liquids"
    },
    {
      id: 11,
      title: "Midnight at the Museum",
      author: "Oliver Grant",
      genre: ["children", "fantasy"],
      image: "/portfolio/midnight-museum.jpg",
      alt: "Museum exhibits coming to life at night"
    },
    {
      id: 12,
      title: "The Quantum Paradox",
      author: "Dr. Richard Kim",
      genre: ["scifi", "thriller"],
      image: "/portfolio/quantum-paradox.jpg",
      alt: "Futuristic city with floating buildings and digital elements"
    }
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-secondary/20 py-20">
          <div className="container px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Our Portfolio
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                Explore our collection of professionally designed book covers across various genres.
                Each cover is custom-made to capture the essence of the story within.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-16">
          <div className="container px-4">
            {/* Category Filters */}
            <div className="mb-12 flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant="outline"
                  className="rounded-full"
                  data-category={category.id}
                >
                  {category.name}
                </Button>
              ))}
            </div>
            
            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {portfolioItems.map((item) => (
                <div key={item.id} className="group relative overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-md">
                  <div className="aspect-[2/3] overflow-hidden bg-muted">
                    <div className="h-full w-full bg-gradient-to-br from-primary/10 to-secondary/20">
                      <div className="flex h-full items-center justify-center">
                        <Icons.image className="h-16 w-16 text-muted-foreground/30" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 to-transparent p-6 opacity-0 transition-opacity group-hover:opacity-100">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <p className="text-sm text-white/80">by {item.author}</p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {item.genre.map((genre) => (
                          <span key={genre} className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/80">
                            {categories.find(c => c.id === genre)?.name || genre}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get Your Custom Cover Design
                  <Icons.arrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-secondary/30 py-24">
          <div className="container px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                What Our Clients Say
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Don't just take our word for it. Here's what authors and publishers have to say about working with us.
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote: "The cover design exceeded all my expectations. It perfectly captures the mood of my novel and has received countless compliments from readers.",
                  author: "Sarah J.",
                  role: "Self-Published Author"
                },
                {
                  quote: "Working with this team was a dream. They understood my vision immediately and brought it to life in ways I couldn't have imagined.",
                  author: "Michael T.",
                  role: "Indie Publisher"
                },
                {
                  quote: "The attention to detail is incredible. The cover not only looks amazing but also works perfectly at thumbnail size, which is so important for online sales.",
                  author: "Dr. Lisa R.",
                  role: "Non-Fiction Author"
                }
              ].map((testimonial, index) => (
                <div key={index} className="rounded-lg border bg-card p-6 shadow-sm">
                  <div className="mb-4 flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Icons.star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground">
                    <p className="relative text-sm italic">
                      <span className="absolute -left-4 -top-2 text-4xl font-bold text-muted-foreground/20">"</span>
                      {testimonial.quote}
                    </p>
                  </blockquote>
                  <div className="mt-4">
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="container px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Make Your Book Stand Out?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/90">
              Let's create a cover that captures your story's essence and attracts your ideal readers.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Get a Free Quote
                  <Icons.arrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link href="/services">
                  View Our Services
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
