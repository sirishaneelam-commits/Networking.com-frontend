import UserNav from "@/components/CreateUserNav"
import UserBody from "@/components/Userbody"
import axios from "axios"
import Link from "next/link"
export default function Dashboard(){
    return(
        <>
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#EA00FF] to-[#E0E300]  flex flex-col gap-10 ">
           <Link href='/CreateUser/EmployerSignIn'> 
            <button className="border  bg-white  h-15 w-60 rounded-md">
                Sign In as employer 
            </button>
           </Link>
           <Link href='/CreateUser/EmployeeSignIn'>
           <button className="border  bg-white  h-15 w-60 rounded-md">
            Sign In as employee
           </button>
           </Link>
        </div>
        </>
    )
}