import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center py-32 px-16 sm:items-start">
        <Image
          className="dark:overlay h-[100px] w-[100px] hover:rotate-180 transition-transform duration-1000"
          src="/diamond 1.svg"
          alt="Next.js logo"
          width={100}
          height={100}
          priority
        />
        <h1 className="text-3xl font-bold">Blog</h1>
        <ul className="mt-4 list-disc pl-5 underline">
          <li>
            <Link href="/blog/belajar-nextjs">Belajar Next.js</Link>
          </li>
          <li>
            <Link href="/blog/hal-baru">Hal baru yang saya pelajari</Link>
          </li>
          <li>
            <Link href="/blog/target-tahun-ini">Target tahun ini</Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
