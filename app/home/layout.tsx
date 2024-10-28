//Custome Import
import Nav
    from "@/app/components/home/nav/page";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <Nav/>
        {children}
      </body>
    </html>
  );
}