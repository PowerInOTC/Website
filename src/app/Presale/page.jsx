/**
 * v0 by Vercel.
 * @see https://v0.dev/t/zlthdJRp8gT
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function presale() {
  return (
    <>
      <div className="bg-gray-50 py-12 lg:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 xl:gap-20">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Soon
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
