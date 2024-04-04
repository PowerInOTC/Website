import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Settings } from "lucide-react"
import { Checkbox } from "../ui/checkbox"

export default function SettingDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="h-auto p-[0] text-[#ffffff] relative top-[1px]"><Settings className="ml-[20px]" size={20} /></Button>
      </DialogTrigger>
      <DialogContent className="xl:max-w-[1160px] lg:max-w-[960px] w-[95%] rounded-[10px]">
        <DialogHeader className={"sm:text-center text-center"}>
          <DialogTitle className="lg:text-[36px] lg:leading-[46px] sm:text-[28px] sm:leading-[38px] text-[20px] leading-[28px] font-ubuntu">Select Your Interests</DialogTitle>
          <DialogDescription className="text-[18px] leading-[22px] text-[#000000]">
            Refine your recommendations for more personalized results.
          </DialogDescription>
        </DialogHeader>
        <div className="overflow-y-auto overflow-x-hidden max-h-[calc(100vh_-_275px)]">
          <div className="flex flex-wrap mx-[-8px] md:mt-[60px] mt-[30px]">
            <div className="lg:w-4/12 px-[8px] mb-[30px]">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" className="w-[20px] h-[20px] border-[#CCCCCC] data-[state=checked]:bg-[#EBCB88] data-[state=checked]:border-[#EBCB88] data-[state=checked]:text-[#000000]" />
                <label
                  htmlFor="terms"
                  className="text-[18px] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Lorem ipsum dolor
                </label>  
              </div>
            </div>
            <div className="lg:w-4/12 px-[8px] mb-[30px]">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms1" className="w-[20px] h-[20px] border-[#CCCCCC] data-[state=checked]:bg-[#EBCB88] data-[state=checked]:border-[#EBCB88] data-[state=checked]:text-[#000000]" />
                <label
                  htmlFor="terms1"
                  className="text-[18px] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Lorem ipsum dolor
                </label>  
              </div>
            </div>
            <div className="lg:w-4/12 px-[8px] mb-[30px]">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms3" className="w-[20px] h-[20px] border-[#CCCCCC] data-[state=checked]:bg-[#EBCB88] data-[state=checked]:border-[#EBCB88] data-[state=checked]:text-[#000000]" />
                <label
                  htmlFor="terms3"
                  className="text-[18px] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Lorem ipsum dolor
                </label>  
              </div>
            </div>
            <div className="lg:w-4/12 px-[8px] mb-[30px]">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms4" className="w-[20px] h-[20px] border-[#CCCCCC] data-[state=checked]:bg-[#EBCB88] data-[state=checked]:border-[#EBCB88] data-[state=checked]:text-[#000000]" />
                <label
                  htmlFor="terms4"
                  className="text-[18px] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Lorem ipsum dolor
                </label>  
              </div>
            </div>
            <div className="lg:w-4/12 px-[8px] mb-[30px]">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms5" className="w-[20px] h-[20px] border-[#CCCCCC] data-[state=checked]:bg-[#EBCB88] data-[state=checked]:border-[#EBCB88] data-[state=checked]:text-[#000000]" />
                <label
                  htmlFor="terms5"
                  className="text-[18px] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Lorem ipsum dolor
                </label>  
              </div>
            </div>
            <div className="lg:w-4/12 px-[8px] mb-[30px]">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms6" className="w-[20px] h-[20px] border-[#CCCCCC] data-[state=checked]:bg-[#EBCB88] data-[state=checked]:border-[#EBCB88] data-[state=checked]:text-[#000000]" />
                <label
                  htmlFor="terms6"
                  className="text-[18px] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Lorem ipsum dolor
                </label>  
              </div>
            </div>
            <div className="lg:w-4/12 px-[8px] mb-[30px]">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms7" className="w-[20px] h-[20px] border-[#CCCCCC] data-[state=checked]:bg-[#EBCB88] data-[state=checked]:border-[#EBCB88] data-[state=checked]:text-[#000000]" />
                <label
                  htmlFor="terms7"
                  className="text-[18px] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Lorem ipsum dolor
                </label>  
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" className="min-w-[100px] border-[#EBCB88] hover:bg-[#EBCB88] sm:mt-0 mt-[15px]">Close</Button>
          <Button type="submit" className="min-w-[100px] bg-[#EBCB88] text-[#000000] hover:bg-[#EBCB88] hover:opacity-[0.8]">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}