import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="w-full">
      <section className="bg-gradient-to-r from-primary to-muted-foreground py-20 md:py-32 lg:py-40">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">KushBlog</h1>
            <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground">
              Your one-stop destination for all things cannabis.
            </p>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20 lg:py-28">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Get in Touch</h2>
              <p className="text-muted-foreground">
                Have a question or want to collaborate? Fill out the form below and we`ll get back to you as soon as
                possible.
              </p>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="transition-all duration-300 focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="transition-all duration-300 focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Enter your message"
                  className="transition-all duration-300 focus:ring-2 focus:ring-primary"
                />
              </div>
              <Button
                type="submit"
                variant="outline"
                className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}