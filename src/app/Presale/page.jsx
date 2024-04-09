/**
 * v0 by Vercel.
 * @see https://v0.dev/t/zlthdJRp8gT
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Presale() {
  return (
    <>
      <div className="bg-gray-50 py-12 lg:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 xl:gap-20">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                The future of finance is decentralized
              </h2>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                Radix is the first layer-one protocol built specifically to
                serve DeFi. It is scalable, secure, and interoperable, providing
                the infrastructure for the next generation of decentralized
                finance.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <div className="grid gap-1">
                <h3 className="text-xl font-semibold tracking-tight">
                  Presale Starts In
                </h3>
                <p className="text-2xl font-semibold tracking-tight/[-0.025]">
                  56
                  <span className="text-base font-medium tracking-tight/[-0.025]">
                    d
                  </span>
                  12
                  <span className="text-base font-medium tracking-tight/[-0.025]">
                    h
                  </span>
                  34
                  <span className="text-base font-medium tracking-tight/[-0.025]">
                    m
                  </span>
                  19
                  <span className="text-base font-medium tracking-tight/[-0.025]">
                    s
                  </span>
                </p>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-gray-200" />
                  <span className="text-sm text-gray-500">Scalability</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-gray-200" />
                  <span className="text-sm text-gray-500">Security</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-gray-200" />
                  <span className="text-sm text-gray-500">
                    Interoperability
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="grid gap-12 lg:grid-cols-2 lg:gap-0">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">
              Meet the Team
            </h2>
            <p className="max-w-[500px] text-gray-500 md:text-xl dark:text-gray-400">
              Our team is composed of experienced professionals with a passion
              for blockchain technology and decentralized finance.
            </p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 overflow-hidden rounded-xl">
                <img
                  alt="Avatar 1"
                  className="object-cover border border-gray-200 aspect-square dark:border-gray-800"
                  height="80"
                  src="/placeholder.svg"
                  width="80"
                />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-semibold">Alice Johnson</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  CEO & Founder
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 overflow-hidden rounded-xl">
                <img
                  alt="Avatar 2"
                  className="object-cover border border-gray-200 aspect-square dark:border-gray-800"
                  height="80"
                  src="/placeholder.svg"
                  width="80"
                />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-semibold">Mark Lee</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  CTO & Blockchain Expert
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 overflow-hidden rounded-xl">
                <img
                  alt="Avatar 3"
                  className="object-cover border border-gray-200 aspect-square dark:border-gray-800"
                  height="80"
                  src="/placeholder.svg"
                  width="80"
                />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-semibold">Sophia White</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Lead Developer
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 overflow-hidden rounded-xl">
                <img
                  alt="Avatar 4"
                  className="object-cover border border-gray-200 aspect-square dark:border-gray-800"
                  height="80"
                  src="/placeholder.svg"
                  width="80"
                />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-semibold">David Brown</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Marketing Manager
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid items-center gap-6 lg:gap-12">
          <img
            alt="Team"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom lg:aspect-video"
            height="320"
            src="/placeholder.svg"
            width="600"
          />
        </div>
      </section>
      <div className="container flex flex-col items-center py-12 lg:py-16">
        <div className="container flex flex-col items-center py-12 lg:py-16">
          <div className="grid max-w-3xl gap-4 lg:gap-8 text-center lg:max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">
              Join the Presale
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Be the first to get RAD tokens and participate in the future of
              decentralized finance.
            </p>
            <form className="flex flex-col gap-4 mx-auto lg:max-w-sm">
              <Label htmlFor="amount">Amount</Label>
              <Input id="amount" placeholder="Enter your amount" required />
              <Button type="submit">Buy Presale</Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
