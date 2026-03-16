import Link from "next/link"
export  function DashNav(){
   return(
    <>
      <div>
    <div className="flex items-center justify-end -translate-x-10 gap-10">
      <Link href='/Dashboard/CreatePost'>
        <button className=" h-10 w-30 translate-y-10  bg-blue-600 text-white rounded-md ">
            Create Posting 
        </button>
      </Link>
      <Link href='/Dashboard/DeletePost'>
        <button className="h-10 w-30 translate-y-10 border rounded-md border-red-600 text-red-600">
          Delete Posting
        </button>
      </Link>
        <Link href='/'>
        <button className="h-10 w-30 translate-y-10 border rounded-md bg-white">
           Logout 
        </button>
        </Link>
    </div>
        <hr  className="mt-15"/> 
        
      </div>
    </>
   )
}