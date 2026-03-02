'use client'

import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Homebody from "@/components/Homebody";
import HomeFooter from "@/components/HomeFooter";
export default function Home() {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-[#EA00FF] to-[#E0E300] m-0 p-0">
        <main>
          <Navbar></Navbar>

          <hr className="translate-y-10" />
              
             <Homebody>
              
             </Homebody>

          <div className="flex items-center justify-end h-full">
            <Card></Card>
          </div>
          <HomeFooter></HomeFooter>
        </main>
      </div>
    </>
  );
}