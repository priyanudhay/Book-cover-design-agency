import { MainNav } from "@/components/main-nav"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServicesPage() {
  const pricingPlans = [
    {
      name: "Basic Cover",
      price: 199,
      description: "Perfect for self-published authors on a budget",
      features: [
        "Custom front cover design",
        "High-resolution digital files (JPG, PNG)",
        "2 initial concepts",
        "2 rounds of revisions",
        "3D mockup",
        "7-10 day delivery"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Professional Cover",
      price: 399,
      description: "Our most popular package for serious authors",
      features: [
        "Custom front, back & spine design",
        "Print-ready PDF + digital files",
        "3 initial concepts",
        "3 rounds of revisions",
        "3D & print mockups",
        "10-14 day delivery",
        "Kindle/eBook version included",
        "Source files (AI/PSD)"
      ],
      popular: true,
      cta: "Choose Professional"
    },
    {
      name: "Premium Cover",
      price: 699,
      description: "Complete package for best-selling authors",
      features: [
        "Custom front, back, spine & flaps",
        "Print-ready PDF + digital files",
        "4 initial concepts",
        "Unlimited revisions",
        "3D, print & animated mockups",
        "Priority 5-7 day delivery",
        "eBook & audiobook versions",
        "Source files (AI/PSD)",
        "Social media graphics",
        "Author logo design"
      ],
      popular: false,
      cta: "Go Premium"
    }
  ]

  const faqs = [
    {
      question: "What file formats will I receive?",
      answer: "You'll receive high-resolution JPG and PNG files for digital use, and print-ready PDFs for physical books. Premium packages include source files (AI/PSD) for future edits."
    },
    {
      question: "How long does the design process take?",
      answer: "Basic covers take 7-10 business days, Professional covers take 10-14 days, and Premium covers are completed within 5-7 business days. Timelines start after we receive all necessary materials."
    },
    {
      question: "What information do you need to design my cover?",
      answer: "We'll need your book's title, subtitle, author name, back cover blurb, genre, target audience, and any specific design ideas or inspirations you have in mind."
    },
    {
      question: "Can I see concepts before the final design?",
      answer: "Yes! We'll provide initial concepts based on your requirements. You'll have the opportunity to request revisions until you're completely satisfied with the design."
    },
    {
      question: "Do you offer any discounts for series?",
      answer: "Yes, we offer 15% off for subsequent books in a series. The discount applies to books ordered at the same time or within 3 months of the first order."
    },
    {
      question: "What if I need additional design services?",
      answer: "We offer additional services like formatting, marketing materials, and website design. Contact us for custom quotes on these services."
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
                Book Cover Design Services
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                Professional book cover designs that capture your story's essence and attract your ideal readers.
                Choose the perfect package for your needs or contact us for a custom quote.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24">
          <div className="container px-4">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-8 md:grid-cols-3">
                {pricingPlans.map((plan, index) => (
                  <div 
                    key={index}
                    className={cn(
                      "relative flex flex-col rounded-2xl border p-8 shadow-sm transition-all hover:shadow-md",
                      plan.popular 
                        ? "border-primary/30 bg-primary/5 ring-2 ring-primary/20" 
                        : "border-border"
                    )}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
                        <span className="rounded-full bg-primary px-4 py-1 text-xs font-medium text-primary-foreground">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-4xl font-bold tracking-tight">
                        ${plan.price}
                      </span>
                      <span className="ml-1 text-muted-foreground">/one-time</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {plan.description}
                    </p>
                    <ul className="mt-6 flex-1 space-y-4">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Icons.check className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      size="lg" 
                      className={cn(
                        "mt-8 w-full",
                        plan.popular 
                          ? "bg-primary hover:bg-primary/90" 
                          : "bg-foreground text-background hover:bg-foreground/90"
                      )}
                      asChild
                    >
                      <Link href="/contact">
                        {plan.cta}
                        <Icons.arrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 rounded-lg border bg-card p-8 text-center">
                <h3 className="text-2xl font-bold">Need something custom?</h3>
                <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
                  We understand that every book is unique. Contact us for a custom quote tailored to your specific needs.
                </p>
                <Button variant="outline" className="mt-6" asChild>
                  <Link href="/contact">
                    Request Custom Quote
                    <Icons.arrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-secondary/30 py-24">
          <div className="container px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Our Simple Design Process
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                We've streamlined our process to make getting your perfect book cover easy and stress-free.
              </p>
            </div>
            
            <div className="mx-auto mt-16 max-w-5xl">
              <div className="grid gap-8 md:grid-cols-4">
                {[
                  {
                    step: "1",
                    title: "Consultation",
                    description: "We'll discuss your book, genre, target audience, and design preferences."
                  },
                  {
                    step: "2",
                    title: "Concepts",
                    description: "You'll receive initial design concepts based on our discussion."
                  },
                  {
                    step: "3",
                    title: "Revisions",
                    description: "We'll refine the design based on your feedback until it's perfect."
                  },
                  {
                    step: "4",
                    title: "Delivery",
                    description: "Receive your final files in all required formats, ready for publishing."
                  }
                ].map((item, index) => (
                  <div key={index} className="relative text-center">
                    <div className="absolute left-1/2 top-0 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold">
                      {item.step}
                    </div>
                    <div className="rounded-lg border bg-card p-6 pt-10 shadow-sm">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24">
          <div className="container px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Everything you need to know about our book cover design services.
              </p>
            </div>
            
            <div className="mx-auto mt-16 max-w-3xl">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="rounded-lg border p-6">
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    <p className="mt-2 text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-muted-foreground">
                  Still have questions? We're here to help!
                </p>
                <Button variant="outline" className="mt-4" asChild>
                  <Link href="/contact">
                    Contact Us
                    <Icons.arrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="container px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to bring your book to life?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/90">
              Let's create a cover that captures your story's essence and attracts your ideal readers.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Get Started Today
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

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
