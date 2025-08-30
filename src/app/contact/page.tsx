import { MainNav } from "@/components/main-nav"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-secondary/20 py-20">
          <div className="container px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Get In Touch
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                Have questions about our services or ready to start your book cover design project?
                Fill out the form below or reach out to us directly.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-24">
          <div className="container px-4">
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-12 md:grid-cols-2">
                {/* Contact Form */}
                <div>
                  <h2 className="text-2xl font-bold">Send Us a Message</h2>
                  <p className="mt-2 text-muted-foreground">
                    We'll get back to you within 24 hours.
                  </p>
                  
                  <form className="mt-8 space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-foreground">
                          First name
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 bg-background py-1.5 text-foreground shadow-sm ring-1 ring-inset ring-muted-foreground/20 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-foreground">
                          Last name
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="block w-full rounded-md border-0 bg-background py-1.5 text-foreground shadow-sm ring-1 ring-inset ring-muted-foreground/20 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium leading-6 text-foreground">
                        Email
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="block w-full rounded-md border-0 bg-background py-1.5 text-foreground shadow-sm ring-1 ring-inset ring-muted-foreground/20 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="project-type" className="block text-sm font-medium leading-6 text-foreground">
                        Project Type
                      </label>
                      <div className="mt-2">
                        <select
                          id="project-type"
                          name="project-type"
                          className="block w-full rounded-md border-0 bg-background py-1.5 text-foreground shadow-sm ring-1 ring-inset ring-muted-foreground/20 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                          defaultValue="Book Cover Design"
                        >
                          <option>Book Cover Design</option>
                          <option>eBook Cover Design</option>
                          <option>Series Design</option>
                          <option>Illustration</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium leading-6 text-foreground">
                        Tell us about your project
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          className="block w-full rounded-md border-0 bg-background py-1.5 text-foreground shadow-sm ring-1 ring-inset ring-muted-foreground/20 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                          defaultValue={''}
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        id="privacy-policy"
                        name="privacy-policy"
                        type="checkbox"
                        className="h-4 w-4 rounded border-muted-foreground/20 text-primary focus:ring-primary"
                      />
                      <label htmlFor="privacy-policy" className="ml-3 block text-sm leading-6 text-muted-foreground">
                        I agree to the{' '}
                        <Link href="/privacy" className="font-medium text-foreground hover:text-primary">
                          Privacy Policy
                        </Link>
                      </label>
                    </div>
                    
                    <div>
                      <Button type="submit" className="w-full">
                        Send Message
                        <Icons.arrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                </div>
                
                {/* Contact Information */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold">Contact Information</h2>
                    <p className="mt-2 text-muted-foreground">
                      We'd love to hear from you. Here's how you can reach us.
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icons.mail className="h-5 w-5" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-sm font-medium text-muted-foreground">Email</h3>
                        <p className="mt-1 text-base">
                          <a href="mailto:hello@inkandimagination.com" className="hover:text-primary">
                            hello@inkandimagination.com
                          </a>
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          We'll respond within 24 hours
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icons.phone className="h-5 w-5" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-sm font-medium text-muted-foreground">Phone</h3>
                        <p className="mt-1 text-base">
                          <a href="tel:+1234567890" className="hover:text-primary">
                            (123) 456-7890
                          </a>
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Monday-Friday, 9am-5pm EST
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icons.mapPin className="h-5 w-5" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-sm font-medium text-muted-foreground">Office</h3>
                        <p className="mt-1 text-base">
                          123 Book Street
                        </p>
                        <p className="mt-1 text-base">
                          New York, NY 10001
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          By appointment only
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="rounded-lg border bg-card p-6">
                    <h3 className="text-lg font-semibold">Frequently Asked Questions</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Check out our <Link href="/faq" className="font-medium text-primary hover:underline">FAQ page</Link> for answers to common questions about our design process, pricing, and more.
                    </p>
                    <div className="mt-4">
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="/faq">
                          Visit FAQ
                          <Icons.arrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <div className="h-96 w-full bg-muted">
          <div className="flex h-full items-center justify-center">
            <div className="text-center">
              <Icons.mapPin className="mx-auto h-12 w-12 text-muted-foreground/30" />
              <p className="mt-2 text-muted-foreground">Map would be displayed here</p>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="container px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Bring Your Book to Life?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/90">
              Let's create a cover that captures your story's essence and attracts your ideal readers.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/services">
                  View Our Services
                  <Icons.arrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link href="/portfolio">
                  See Our Work
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
