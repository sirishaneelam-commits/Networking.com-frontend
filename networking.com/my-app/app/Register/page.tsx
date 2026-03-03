"use client"; // ⚠️ This makes the component a Client Component

import { useEffect } from "react";
import { useRouter } from "next/navigation"; 

export default function Register() {
  const router = useRouter();

  useEffect(() => {
    router.push("/Prices"); 
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      Redirecting...
    </div>
  );
}