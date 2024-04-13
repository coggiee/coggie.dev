import "@/app/_styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-stone-800 dark:text-main-dark dark:bg-main-dark">
      <main className="flex-grow flex flex-col items-center w-full px-5 md:px-5 md:flex-row md:items-baseline font-notosanskr">
        {children}
      </main>
    </div>
  );
}
