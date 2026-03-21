"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import { redirect } from "next/dist/server/api-utils"
function CreatePost(){
    const router = useRouter()
    const authUser = async () => {
        try{
            await axios.post("https://networking-com-frontend-ofly-kz0mzbj60.vercel.app/api/users/login",{
            username:username,
            password:password
        })
        router.push("/Dashboard/CreatePost/Description")
       }
       catch(err){
        console.log(err)
       }
    }
    const [username,setusername] = useState("")
    const [password,setpassword] = useState("")
    return(
        <>
          <div className="flex  items-center justify-center min-h-screen">
             <div className="flex flex-col gap-4">
                        <h1 className="text-4xl font-semibold translate-x-10"> Create Post</h1>
                        <input type="text" placeholder="username" value={username} onChange={(e) => setusername(e.target.value)} className="h-10 w-70 border rounded-md"/>
                        <input type="text" placeholder="password" value={password} onChange={(e) => setpassword(e.target.value)} className="h-10 w-70 border rounded-md" />
                        <button className="h-10 w-70 border  rounded-full bg-green-600 text-white" onClick={authUser}>Log in</button>
             </div>
          </div>
        </>
    )
}
export default CreatePost