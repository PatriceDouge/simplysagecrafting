import Image from "next/image";
import logo from "../app/logo.png";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between p-12 bg-[#EFD6F1]">
      <div className="w-full flex justify-center">
        <Image src={logo} alt="Logo" width={275} height={275} priority />
      </div>
      <h1 className="text-2xl font-bold	text-white">coming soon.</h1>
      <div></div>
    </main>
  );
}
