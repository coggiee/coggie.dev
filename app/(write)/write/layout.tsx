export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" w-full min-h-screen ">
      {/* <main className="flex-grow flex flex-col items-center w-full px-5 md:px-5 md:flex-row md:items-baseline font-notosanskr"> */}
      {children}
      {/* </main> */}
    </div>
  );
}
