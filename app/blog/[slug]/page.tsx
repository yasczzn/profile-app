export const instant = false;

export default async function TulisanPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center py-32 px-16 sm:items-start">
        <h1 className="text-3xl font-bold">{slug}</h1>
        <p className="mt-4">
          Sebagai fullstack developer, terus belajar, menambah wawasan, dan terupdate mengenai
          framework terbaru sangat penting untuk kelangsungan app yang dikelola.
        </p>
      </main>
    </div>
  );
}
