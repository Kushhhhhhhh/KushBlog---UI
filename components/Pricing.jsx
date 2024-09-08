import { Button } from "./ui/button"

const Pricing = () => {
  return (
    <section className="py-12 md:py-24 lg:py-32">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Pricing
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Choose the plan that fits your needs.
          </p>
        </div>
        <div className="container grid max-w-5xl grid-cols-1 gap-8 px-4 md:grid-cols-3 md:px-6 lg:gap-12">
          <div className="space-y-4 rounded-lg border border-gray-300 dark:border-gray-200 bg-background p-6 shadow-lg md:p-8 transition-transform duration-300 hover:scale-105 cursor-pointer">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Basic</h3>
              <p className="text-muted-foreground">
                Get started with our basic plan.
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-bold">$9</div>
              <p className="text-sm text-muted-foreground">per month</p>
            </div>
            <div className="space-y-2">
              <ul className="grid gap-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 fill-primary" />
                  <span>1 blog post per week</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 fill-primary" />
                  <span>Basic analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 fill-primary" />
                  <span>Custom domain</span>
                </li>
                <li className="flex items-center gap-2">
                  <XIcon className="h-4 w-4 fill-muted-foreground" />
                  <span>No ads</span>
                </li>
                <li className="flex items-center gap-2">
                  <XIcon className="h-4 w-4 fill-muted-foreground" />
                  <span>Priority support</span>
                </li>
              </ul>
            </div>
            <Button className="w-full">Get Started</Button>
          </div>

          <div className="space-y-4 rounded-lg border border-gray-300 dark:border-gray-200 bg-background p-6 shadow-lg md:p-8 transition-transform duration-300 hover:scale-105 cursor-pointer">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Pro</h3>
              <p className="text-muted-foreground">
                Unlock more features for your blog.
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-bold">$29</div>
              <p className="text-sm text-muted-foreground">per month</p>
            </div>
            <div className="space-y-2">
              <ul className="grid gap-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 fill-primary" />
                  <span>3 blog posts per week</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 fill-primary" />
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 fill-primary" />
                  <span>Custom domain</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 fill-primary" />
                  <span>No ads</span>
                </li>
                <li className="flex items-center gap-2">
                  <XIcon className="h-4 w-4 fill-muted-foreground" />
                  <span>Priority support</span>
                </li>
              </ul>
            </div>
            <Button className="w-full">Get Started</Button>
          </div>

          <div className="space-y-4 rounded-lg border border-gray-300 dark:border-gray-200 bg-background p-6 shadow-lg md:p-8 transition-transform duration-300 hover:scale-105 cursor-pointer">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Enterprise</h3>
              <p className="text-muted-foreground">
                Tailored for large businesses and teams.
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-bold">$99</div>
              <p className="text-sm text-muted-foreground">per month</p>
            </div>
            <div className="space-y-2">
              <ul className="grid gap-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 fill-primary" />
                  <span>Unlimited blog posts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 fill-primary" />
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 fill-primary" />
                  <span>Custom domain</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 fill-primary" />
                  <span>No ads</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 fill-primary" />
                  <span>Priority support</span>
                </li>
              </ul>
            </div>
            <Button className="w-full">Get Started</Button>
          </div>
        </div>
      </section>
  )
}

export default Pricing

function CheckIcon(props) {
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
        <path d="M20 6 9 17l-5-5" />
      </svg>
    );
  }
  
  function XIcon(props) {
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
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    );
  }