import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#000000] py-[8px] w-full">
      <div className="lg:max-w-[1280px] mx-[auto] px-[15px]">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#ffffff] md:text-[12px] text-[12px] mb-2 md:mb-0">
            © 2024 Microderiv Limited
          </p>
          <div className="flex space-x-4">
            <Link
              href="https://developer.pio.finance/misc/privacy-policy"
              className="text-[#ffffff] text-[12px] hover:opacity-80"
            >
              Privacy Policy
            </Link>
            <Link
              href="https://developer.pio.finance/misc/terms-of-service"
              className="text-[#ffffff] text-[12px] hover:opacity-80"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
