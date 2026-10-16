import Image from "next/image";

export default function Kontak() {
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
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Find me on:
          </h1>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row mt-5">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://github.com/yasczzn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://www.behance.net/putriyasminaz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Behance
          </a>
        </div>
      </main>
    </div>
  );
}
