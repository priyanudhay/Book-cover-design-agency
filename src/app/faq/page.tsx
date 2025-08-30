import { MainNav } from "@/components/main-nav"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FAQPage() {
  const faqCategories = [
    {
      id: 'general',
      name: 'General Questions',
      icon: <Icons.helpCircle className="h-5 w-5" />
    },
    {
      id: 'process',
      name: 'Design Process',
      icon: <Icons.refreshCw className="h-5 w-5" />
    },
    {
      id: 'pricing',
      name: 'Pricing & Payments',
      icon: <Icons.dollarSign className="h-5 w-5" />
    },
    {
      id: 'files',
      name: 'Files & Formats',
      icon: <Icons.fileText className="h-5 w-5" />
    },
    {
      id: 'rights',
      name: 'Rights & Ownership',
      icon: <Icons.shield className="h-5 w-5" />
    }
  ]

  const faqs = [
    // General Questions
    {
      id: 'what-genres',
      question: 'What genres do you specialize in?',
      answer: 'We have experience designing covers for all major fiction and non-fiction genres including fantasy, science fiction, romance, mystery/thriller, young adult, children\'s books, memoirs, business, and self-help. Our designers are well-versed in the visual language of each genre to ensure your cover attracts the right readers.',
      category: 'general'
    },
    {
      id: 'timeline',
      question: 'How long does the design process take?',
      answer: 'Our standard timeline is 7-14 business days from the start of the project, depending on the package you choose. Basic covers take about 7-10 business days, while more complex designs may take up to 14 days. We offer expedited services for an additional fee if you need your cover sooner.',
      category: 'general'
    },
    {
      id: 'revisions',
      question: 'How many revisions are included?',
      answer: 'The number of revisions depends on your chosen package. Our Basic package includes 2 rounds of revisions, Professional includes 3, and Premium includes unlimited revisions. Additional revisions beyond your package limit can be purchased if needed.',
      category: 'general'
    },
    
    // Design Process
    {
      id: 'start-process',
      question: 'How do we get started?',
      answer: 'After you place your order, we\'ll send you a detailed design brief to fill out. This helps us understand your vision, target audience, and design preferences. Once we receive your completed brief, we\'ll assign a designer and begin creating your initial concepts.',
      category: 'process'
    },
    {
      id: 'concepts',
      question: 'How many initial concepts will I receive?',
      answer: 'The number of initial concepts varies by package: Basic includes 2 concepts, Professional includes 3, and Premium includes 4 concepts. Each concept will present a distinct direction for your cover design.',
      category: 'process'
    },
    {
      id: 'revision-process',
      question: 'How does the revision process work?',
      answer: 'After receiving your initial concepts, you can provide feedback and request changes. We\'ll refine the selected concept based on your feedback. Each round of revision allows you to request changes to the design until you\'re completely satisfied (within your package limits).',
      category: 'process'
    },
    
    // Pricing & Payments
    {
      id: 'payment-methods',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express, Discover) as well as PayPal. We also accept bank transfers for larger projects. A 50% deposit is required to begin work, with the balance due upon completion.',
      category: 'pricing'
    },
    {
      id: 'refund-policy',
      question: 'What is your refund policy?',
      answer: 'Your satisfaction is our priority. If you\'re not happy with the initial concepts, you may be eligible for a partial refund of your deposit, minus a $50 administrative fee. Once the revision process has begun, the deposit is non-refundable as we will have already invested significant time in your project.',
      category: 'pricing'
    },
    {
      id: 'series-discount',
      question: 'Do you offer discounts for series?',
      answer: 'Yes! We offer a 15% discount on additional books in a series when ordered at the same time or within 3 months of the first order. This applies to books with similar design elements and when purchased as part of the same series.',
      category: 'pricing'
    },
    
    // Files & Formats
    {
      id: 'file-formats',
      question: 'What file formats will I receive?',
      answer: 'You\'ll receive high-resolution JPG and PNG files for digital use, and print-ready PDFs with proper bleed and trim marks for physical books. Premium packages include source files (AI/PSD) for future edits. All files are delivered via a secure download link.',
      category: 'files'
    },
    {
      id: 'print-ready',
      question: 'Are the files print-ready?',
      answer: 'Yes, all our designs are created to be print-ready. We provide PDFs with the correct bleed (typically 0.125 inches on all sides), trim marks, and high resolution (300 DPI). We can also provide files formatted for specific printers like IngramSpark, KDP, or CreateSpace upon request.',
      category: 'files'
    },
    {
      id: 'editable-files',
      question: 'Will I receive editable files?',
      answer: 'Source files (Adobe Illustrator .AI or Photoshop .PSD) are included with our Premium package. If you need editable files with other packages, they can be purchased separately. We retain the right to use your cover in our portfolio unless otherwise agreed upon.',
      category: 'files'
    },
    
    // Rights & Ownership
    {
      id: 'rights-ownership',
      question: 'Who owns the rights to the cover design?',
      answer: 'Once final payment is made, you own full rights to use the cover design for your book. We retain the right to display the design in our portfolio and marketing materials. The designer retains the right to be credited for their work.',
      category: 'rights'
    },
    {
      id: 'commercial-use',
      question: 'Can I use the cover for merchandise?',
      answer: 'The standard license covers use of the design for your book cover (print and digital). If you want to use the design on merchandise (t-shirts, mugs, etc.), please let us know as additional licensing may be required. We can provide quotes for extended commercial use.',
      category: 'rights'
    },
    {
      id: 'stock-images',
      question: 'What about stock images used in the design?',
      answer: 'Any stock images or fonts used in your cover will be properly licensed for commercial use. We use premium stock resources and will provide you with all necessary licenses. You\'ll never have to worry about copyright issues with the assets we use in your design.',
      category: 'rights'
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
                Frequently Asked Questions
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                Find answers to common questions about our book cover design services, process, and more.
                Can't find what you're looking for? <Link href="/contact" className="font-medium text-primary hover:underline">Contact us</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container px-4">
            {/* Category Tabs */}
            <div className="mb-12 flex flex-wrap justify-center gap-2">
              {faqCategories.map((category) => (
                <Button
                  key={category.id}
                  variant="outline"
                  className="group relative flex items-center gap-2"
                  data-category={category.id}
                >
                  <span className="text-muted-foreground group-hover:text-primary">
                    {category.icon}
                  </span>
                  {category.name}
                </Button>
              ))}
            </div>
            
            {/* FAQ List */}
            <div className="mx-auto max-w-4xl">
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.id} className="group rounded-lg border p-6 transition-all hover:shadow-md">
                    <h3 className="flex items-center text-lg font-semibold">
                      <span className="mr-3 text-primary">
                        <Icons.helpCircle className="h-5 w-5" />
                      </span>
                      {faq.question}
                    </h3>
                    <div className="mt-4 pl-8 text-muted-foreground">
                      <p>{faq.answer}</p>
                    </div>
                    <div className="mt-4 flex justify-between">
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {faqCategories.find(c => c.id === faq.category)?.name}
                      </span>
                      <button 
                        className="text-sm font-medium text-primary hover:underline"
                        onClick={() => {
                          // In a real app, this would copy the question to clipboard
                          navigator.clipboard.writeText(faq.question);
                          // Show a toast notification
                          alert(`Copied "${faq.question}" to clipboard`);
                        }}
                      >
                        Copy question
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 rounded-lg border bg-card p-8 text-center">
                <Icons.helpCircle className="mx-auto h-12 w-12 text-primary" />
                <h3 className="mt-4 text-xl font-bold">Still have questions?</h3>
                <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
                  We're here to help! Contact our support team and we'll get back to you within 24 hours.
                </p>
                <div className="mt-6">
                  <Button asChild>
                    <Link href="/contact">
                      Contact Support
                      <Icons.arrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="container px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/90">
              Let's create a book cover that captures your story's essence and attracts your ideal readers.
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
