import Link from "next/link";
import BtnBack from "../back";

export default function BlogLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <section>
      <p className="bg-slate-100 px-6 py-2 text-sm text-slate-600">
        Bagian: Blog —{" "}
        <Link href="/blog" className="underline">
          semua tulisan
        </Link>
      </p>
      {children}
      <div className="my-6 mx-3 transition-timing-function: cubic-bezier(0.4, 0, 1, 1);">
        <BtnBack />
      </div>
    </section>
  );
}
