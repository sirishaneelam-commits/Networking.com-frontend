import Link from "next/link"

export default function Navbar(){
    return(
        <div className="flex items-center justify-between px-10 pt-8 text-white">
            <div className="font-semibold text-4xl">
              Networking.com 
            </div>

            <div className="flex gap-10">
                <Link href="/Register">
                  Register
                </Link>
                <Link href="/Register">
                  Prices
                </Link>
            </div>
        </div>
    )
}