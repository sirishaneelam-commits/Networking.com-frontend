import Authcard from "@/components/authcard"
import { signIn } from "next-auth/react"
export default function CreateUser(){
    return(
        <>
           <div className=" flex items-center justify-center min-h-screen bg-gradient-to-b from-[#EA00FF] to-[#E0E300]">
             <Authcard></Authcard>
           </div>
        </>
    )
}