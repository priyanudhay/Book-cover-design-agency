import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { Icons } from "@/components/icons"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-gradient-to-b from-background to-secondary/20">
          <div className="container relative z-10 px-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Bring Your Story to Life with
              <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Stunning Book Covers
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Professional book cover designs that capture your story's essence and attract your ideal readers.
              Custom, handcrafted covers tailored to your vision and genre.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="/services">View Our Services</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/portfolio">See Our Work</Link>
              </Button>
            </div>
          </div>
          <div className="absolute inset-0 -z-10 opacity-10">
            <Icons.patternBackground className="h-full w-full" />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 sm:py-32">
          <div className="container px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Why Choose Our Book Cover Designs?
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                We combine artistic excellence with market knowledge to create covers that don't just look good—they sell books.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    icon: <Icons.palette className="h-8 w-8" />,
                    title: "Custom Designs",
                    description: "Each cover is uniquely crafted to match your story's tone, genre, and target audience.",
                  },
                  {
                    icon: <Icons.award className="h-8 w-8" />,
                    title: "Professional Quality",
                    description: "Our designers are industry professionals with years of experience in book cover design.",
                  },
                  {
                    icon: <Icons.clock className="h-8 w-8" />,
                    title: "Fast Turnaround",
                    description: "Get your custom book cover in as little as 7-10 business days after approval.",
                  },
                  {
                    icon: <Icons.refreshCw className="h-8 w-8" />,
                    title: "Unlimited Revisions",
                    description: "We're not happy until you're completely satisfied with your cover design.",
                  },
                  {
                    icon: <Icons.deviceMobile className="h-8 w-8" />,
                    title: "Print & Digital Ready",
                    description: "Get files perfectly formatted for both print and digital platforms.",
                  },
                  {
                    icon: <Icons.shield className="h-8 w-8" />,
                    title: "100% Satisfaction",
                    description: "Your satisfaction is our top priority. We guarantee you'll love your cover.",
                  },
                ].map((feature, index) => (
                  <div key={index} className="rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      {feature.icon}
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground">
          <div className="container relative z-10 px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Make Your Book Stand Out?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/90">
              Get started with a custom book cover design that captures your story's essence and attracts your ideal readers.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link href="/portfolio">See Our Work</Link>
              </Button>
            </div>
          </div>
          <div className="absolute inset-0 -z-10 opacity-10">
            <Icons.patternBackground className="h-full w-full text-primary-foreground" />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container px-4 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-semibold">Ink & Imagination</h3>
              <p className="text-sm text-muted-foreground">
                Professional book cover designs that capture your story's essence and attract your ideal readers.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'Services', href: '/services' },
                  { name: 'Portfolio', href: '/portfolio' },
                  { name: 'Contact', href: '/contact' },
                  { name: 'FAQ', href: '/faq' },
                ].map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Contact Us</h4>
              <address className="not-italic text-muted-foreground">
                <p className="text-sm">123 Book Street</p>
                <p className="text-sm">New York, NY 10001</p>
                <p className="mt-2 text-sm">
                  <a href="mailto:hello@inkandimagination.com" className="hover:text-foreground">
                    hello@inkandimagination.com
                  </a>
                </p>
                <p className="text-sm">
                  <a href="tel:+1234567890" className="hover:text-foreground">
                    (123) 456-7890
                  </a>
                </p>
              </address>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  { name: 'Twitter', icon: <Icons.twitter className="h-5 w-5" />, href: '#' },
                  { name: 'Facebook', icon: <Icons.facebook className="h-5 w-5" />, href: '#' },
                  { name: 'Instagram', icon: <Icons.instagram className="h-5 w-5" />, href: '#' },
                  { name: 'Pinterest', icon: <Icons.pinterest className="h-5 w-5" />, href: '#' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-muted-foreground hover:text-foreground"
                    aria-label={social.name}
                  >
                    <span className="sr-only">{social.name}</span>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Ink & Imagination. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
