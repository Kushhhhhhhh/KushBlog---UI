import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Testomonial() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Say</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Hear from our satisfied customers about their experience with our products and services.
          </p>
        </div>
        <div className="mt-10 overflow-hidden">
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <Card className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-8">
                  <Avatar className="w-20 h-20 md:w-24 md:h-24">
                    <AvatarImage src="/placeholder-user.jpg" alt="Sarah Johnson" />
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2 text-center md:text-left">
                    <h3 className="text-xl font-semibold">Sarah Johnson</h3>
                    <p className="text-muted-foreground">
                      The product has been a game-changer for my business. It`s\n easy to use and has helped me
                      streamline my workflows.
                    </p>
                  </div>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-8">
                  <Avatar className="w-20 h-20 md:w-24 md:h-24">
                    <AvatarImage src="/placeholder-user.jpg" alt="John Doe" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2 text-center md:text-left">
                    <h3 className="text-xl font-semibold">John Doe</h3>
                    <p className="text-muted-foreground">
                      I was hesitant at first, but this product has exceeded my\n expectations. The customer support
                      team has been\n exceptional.
                    </p>
                  </div>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-8">
                  <Avatar className="w-20 h-20 md:w-24 md:h-24">
                    <AvatarImage src="/placeholder-user.jpg" alt="Emily Parker" />
                    <AvatarFallback>EP</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2 text-center md:text-left">
                    <h3 className="text-xl font-semibold">Emily Parker</h3>
                    <p className="text-muted-foreground">
                      I`m so glad I found this product. It has made my life so\n much easier and has helped me save a
                      lot of time.
                    </p>
                  </div>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background p-2 shadow-lg hover:bg-accent hover:text-accent-foreground focus:outline-none focus-visible:ring-1 focus-visible:ring-ring">
              <ChevronLeftIcon className="h-6 w-6" />
            </CarouselPrevious>
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background p-2 shadow-lg hover:bg-accent hover:text-accent-foreground focus:outline-none focus-visible:ring-1 focus-visible:ring-ring">
              <ChevronRightIcon className="h-6 w-6" />
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </section>
  )
}

function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}