import Link from "next/link"
import Image from "next/image"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function TopBlog() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-2xl font-bold text-center tracking-tight sm:text-3xl md:text-4xl">Top Blogs</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="group rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <Link href="#" className="block" prefetch={false}>
              <Image
                src="/blog1.jpeg"
                alt="Blog Post Image"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
              <div className="p-4 bg-background">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">
                  Unlocking the Power of React Hooks
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mt-2">
                  Discover how React Hooks can revolutionize your web development workflow and create more efficient and
                  maintainable applications.
                </p>
                <div className="flex items-center text-sm text-muted-foreground mt-4">
                  <Avatar className="w-6 h-6 mr-2">
                    <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                    <AvatarFallback>AC</AvatarFallback>
                  </Avatar>
                  <span>Acme Inc</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="group rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <Link href="#" className="block" prefetch={false}>
              <Image
                src="/blog2.jpeg"
                alt="Blog Post Image"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
              <div className="p-4 bg-background">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">
                  Mastering Responsive Design with CSS Grid
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mt-2">
                  Learn how to leverage the power of CSS Grid to create responsive and visually stunning layouts for
                  your web projects.
                </p>
                <div className="flex items-center text-sm text-muted-foreground mt-4">
                  <Avatar className="w-6 h-6 mr-2">
                    <AvatarImage src="/placeholder-user.jpg" alt="@jaredpalmer" />
                    <AvatarFallback>JP</AvatarFallback>
                  </Avatar>
                  <span>Jared Palmer</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="group rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <Link href="#" className="block" prefetch={false}>
              <Image
                src="/blog3.jpeg"
                alt="Blog Post Image"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
              <div className="p-4 bg-background">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">
                  Optimizing Website Performance with Lazy Loading
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mt-2">
                  Discover techniques to improve your website`s performance by implementing lazy loading for images,
                  videos, and other media.
                </p>
                <div className="flex items-center text-sm text-muted-foreground mt-4">
                  <Avatar className="w-6 h-6 mr-2">
                    <AvatarImage src="/placeholder-user.jpg" alt="@maxleiter" />
                    <AvatarFallback>ML</AvatarFallback>
                  </Avatar>
                  <span>Max Leiter</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="group rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <Link href="#" className="block" prefetch={false}>
              <Image
                src="/blog4.jpeg"
                alt="Blog Post Image"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
              <div className="p-4 bg-background">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">
                  Building Accessible Web Applications with ARIA
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mt-2">
                  Learn how to create inclusive and accessible web applications using ARIA (Accessible Rich Internet
                  Applications) attributes.
                </p>
                <div className="flex items-center text-sm text-muted-foreground mt-4">
                  <Avatar className="w-6 h-6 mr-2">
                    <AvatarImage src="/placeholder-user.jpg" alt="@shuding_" />
                    <AvatarFallback>SD</AvatarFallback>
                  </Avatar>
                  <span>Shu Ding</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}