"use client";

import Form from "./Form";
import { signIn } from "next-auth/react"
export default function Authcard() {
  return (
    <div className="h-90 w-80 bg-white border relative translate-y-10 p-5">
      <div className="text-2xl font-semibold mb-5 text-center">
        Sign In
      </div>

      <div className="flex items-center justify-center">
        <Form />
      </div>

      <div className="flex items-center justify-center mt-4">
        <button onClick={()=>{signIn('google',{callbackUrl:'/CreateUser'})}} className="h-10 w-70 bg-gray-100 border rounded-full">
          Sign in with Google
        </button>
      </div>
    </div>
  );
}