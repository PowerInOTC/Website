import Link from "next/link";

export default function DropdownItemGroup() {
  return (
    <>
      <div className="text-[#1a1a1a] text-[14px] leading-[17px] font-bold pb-[10px] mb-[7px] border-b border-b-[#cccccc]">
        Lorem ipsum dolor
      </div>
      <Link
        href={"/"}
        className="text-[#666] block hover:text-[#1a1a1a] cursor-pointer text-[14px] leading-[22px] py-[7px] px-[0]"
      >
        Lorem ipsum dolor
      </Link>
      <Link
        href={"/"}
        className="text-[#666] block hover:text-[#1a1a1a] cursor-pointer text-[14px] leading-[22px] py-[7px] px-[0]"
      >
        Lorem ipsum dolor
      </Link>
      <Link
        href={
          "https://elemental-printer-3ab.notion.site/Job-Board-2780f935ca334189ad96166115ad6917?pvs=4"
        }
        className="text-[#666] block hover:text-[#1a1a1a] cursor-pointer text-[14px] leading-[22px] py-[7px] px-[0]"
      >
        Be Paid To Do Open Source
      </Link>
    </>
  );
}
