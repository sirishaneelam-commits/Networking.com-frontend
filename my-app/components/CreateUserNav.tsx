import Link from "next/link"
export default function UserNav(){
    return(
        <>
    <div className="flex item-center justify-end -translate-x-5 translate-y-10">
     <Link href='/'>
        <div className="text-white  ">
            Log Out 
        </div>
     </Link>
    </div>
          <hr className="translate-y-19" />
        </>
    )
}