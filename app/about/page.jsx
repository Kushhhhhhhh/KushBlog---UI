import React from 'react'

const About = () => {
  return (
    <div className="bg-background">
      <header className="py-12 md:py-20 bg-gradient-to-r from-primary to-muted-foreground">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="flex items-center justify-center">
              <LeafIcon className="h-12 w-12 text-primary-foreground" />
              <h1 className="text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl">KushBlog</h1>
            </div>
            <p className="text-lg text-primary-foreground">Elevating the cannabis conversation.</p>
            <p className="text-primary-foreground">
              Explore the world of cannabis through thought-provoking articles, insightful interviews, and engaging
              content.
            </p>
          </div>
        </div>
      </header>
      <main>
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-6">
              <div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">About KushBlog</h2>
                <p className="mt-4 text-muted-foreground">
                  KushBlog is a premier destination for cannabis enthusiasts, industry professionals, and anyone
                  interested in exploring the diverse world of cannabis. Our mission is to provide thought-provoking and
                  informative content that educates, entertains, and inspires our readers.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">What to Expect</h2>
                <p className="mt-4 text-muted-foreground">
                  At KushBlog, you can expect a wide range of content that covers the latest trends, research, and
                  developments in the cannabis industry. From in-depth product reviews and cultivation guides to
                  insightful interviews with industry leaders and thought-provoking essays, our content is designed to
                  cater to the diverse interests of our readers.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Key Features</h2>
                <ul className="mt-4 space-y-4 text-muted-foreground">
                  <li className="flex items-start">
                    <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                    <span>Regular updates with the latest cannabis news and insights</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                    <span>Thought-provoking articles that challenge perspectives and spark discussions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                    <span>A user-friendly interface that makes it easy to navigate and discover content</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                    <span>Comprehensive guides on cannabis cultivation and usage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                    <span>Expert reviews of the latest cannabis products and accessories</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-6 w-6 mr-2 text-primary" />
                    <span>Community forums for sharing experiences and advice</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default About

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
  )
}


function LeafIcon(props) {
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
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}