'use client'
import Image from "next/image";
import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-[#EA00FF] to-[#E0E300]">
        <main>

          <hr  className="translate-y-20"/>
          <div className="flex items-center justify-end h-full  ">
            <Card></Card>
          </div>
        </main>
      </div>
    </>
  );
}
