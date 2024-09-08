import Link from "next/link"
import Image from "next/image"

const Hero = () => {
  return (
    <section className="w-full py-8 md:py-16 lg:py-24">
    <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
      <div className="space-y-4">
        <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
          Featured Article
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Unlocking the Power of Blogging: A Transformative Journey
        </h1>
        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Discover how blogging can revolutionize your online presence and
          unlock new opportunities. Join us on this transformative journey.
        </p>
        <Link
          href="/blog"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-transform hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          Read More
        </Link>
      </div>
      <Image
        src="/hero.png"
        width={400}
        height={300}
        alt="Hero Image"
        className="mx-auto overflow-hidden rounded-xl object-cover object-center"
        priority
      />
    </div>
  </section>
  )
}

export default Hero