import Link from "next/link";
import { Button } from "./ui/button.jsx";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeBtn } from "./theme-btn.js";

const Navbar = () => {
  return (
    <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b z-10">
      <div className="container mx-auto flex justify-between items-center px-8">
        <div className="flex items-center space-x-2">
          <Link
            className="text-2xl font-bold hover:text-gray-700 dark:hover:text-gray-200"
            href="/"
          >
            KushBlog
          </Link>
        </div>
        <div className="space-x-4 hidden md:flex items-center">
          <Link
            href="/"
            className="transition-transform transform duration-300 hover:scale-105 hover:text-gray-700 dark:hover:text-gray-300 hover:font-semibold"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="transition-transform transform duration-300 hover:scale-105 hover:text-gray-700 dark:hover:text-gray-300 hover:font-semibold"
          >
            About
          </Link>
          <Link
            href="/blogs"
            className="transition-transform transform duration-300 hover:scale-105 hover:text-gray-700 dark:hover:text-gray-300 hover:font-semibold"
          >
            Blogs
          </Link>
          <Link
            href="/contact"
            className="transition-transform transform duration-300 hover:scale-105 hover:text-gray-700 dark:hover:text-gray-300 hover:font-semibold"
          >
            Contact
          </Link>
          <div className="flex items-center">
            <Button
              className="mx-2 transition-transform transform duration-300 hover:scale-105 hover:text-gray-700 dark:hover:text-gray-300 hover:font-semibold"
              variant="outline"
            >
              Login
            </Button>
            <Button
              className="mx-2 transition-transform transform duration-300 hover:scale-105 hover:text-gray-700 dark:hover:text-gray-300 hover:font-semibold"
              variant="outline"
            >
              Signup
            </Button>
            <ThemeBtn />
          </div>
        </div>

        <div className="md:hidden">
                <span className="mx-4">
                  <ThemeBtn />
                </span>
          <Sheet>
            <SheetTrigger className="text-2xl">☰</SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="font-bold my-4">KushBlog</SheetTitle>
                <div className="flex flex-col gap-6">
                  <Link href="/">Home</Link>
                  <Link href="/about">About</Link>
                  <Link href="/blogs">Blogs</Link>
                  <Link href="/contact">Contact</Link>
                  <div className="text-xs">
                    <Button className="mx-4" variant="outline">
                      Login
                    </Button>
                    <Button className="mx-4" variant="outline">
                      Signup
                    </Button>
                  </div>
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
