import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";

const dirContent = fs.readdirSync("content", "utf-8");
const blogs = dirContent.map((file) => {
  const content = fs.readFileSync(`content/${file}`, "utf-8");
  const { data } = matter(content);
  return data;
});

const Blog = () => {
  return (
    <main className="flex flex-col items-center justify-between py-8 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map((blog, index) => (
          <Card
            key={index}
            className="w-full max-w-sm h-[450px] rounded-lg overflow-hidden p-3 hover:scale-105 transition-transform ease-in-out"
          >
            <CardContent className="flex flex-col justify-between h-full">
              <div className="grid gap-4">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" alt={blog.author} />
                    <AvatarFallback>{blog.avatarFallback}</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-0.5">
                    <div className="font-medium">{blog.author}</div>
                    <div className="text-xs text-muted-foreground">{blog.date}</div>
                  </div>
                </div>
                <Image
                  src={blog.imageUrl}
                  width={640}
                  height={360}
                  alt={blog.title}
                  className="aspect-video object-cover rounded-md"
                />
                <div className="grid gap-2">
                  <h3 className="text-xl font-semibold">{blog.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {blog.description}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <Link href={`/blogpost/${blog.slug}`} className={buttonVariants({ variant: "outline" })}>
                  Read More
                </Link>

              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default Blog;