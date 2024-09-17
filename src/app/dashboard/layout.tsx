import Header from "./_components/Header";
import SideBar from "./_components/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-between  ">
      <div className="md:w-64 hidden md:block fixed   ">
        <SideBar />
      </div>
      <div className="md:ml-64 w-full ">
        <Header/>
        
        {children}</div>
    </div>
  );
}
