import Image from "next/image";

export default function Tentang() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <p>Hello, my name is</p>
        <Image
          className="dark:overlay h-[100px] w-[100px]"
          src="/diamond 1.svg"
          alt="Next.js logo"
          width={100}
          height={100}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Putri Yasmina Rahma Zain
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            I am a fullstack developer based in Jakarta.
            I also enjoy creating graphic designs.
          </p>
        </div>
      </main>
    </div>
  );
}
