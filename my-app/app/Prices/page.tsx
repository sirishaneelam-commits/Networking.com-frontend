'use client'
import BulletPoint from "@/components/BulletPoint"
import PayCard from "@/components/payCard"
import axios from 'axios'

if (typeof window !== "undefined") {
  const params = new URLSearchParams(window.location.search)
  if (params.get("success") === "true") {
    window.location.href = "/login"
  }
}

const handlebasic = async () => {
  const res = await axios.post(
    'http://localhost:8000/api/users/Pay?plan=basic',
  )
  window.location.href = res.data.url;
  console.log('http request sent!')
}
const handleadvanced = async () => {
  const res = await axios.post(
    'http://localhost:8000/api/users/Pay?plan=advanced',
  )
  window.location.href = res.data.url;
  console.log('http request sent!')
}
export default function Prices(){
    return(
        <>
          <div className="h-screen flex flex-col bg-gradient-to-b from-[#EA00FF] to-[#E0E300]">
            <div className=" flex items-center justify-center py-10">
              <div className="text-4xl text-white font-semibold">
                Prices
              </div>
            </div>
            <div className="flex-1 px-80">
                  <PayCard>
                   <div className="py-10 px-5">
                      <div className="text-2xl">
                        Basic
                      </div>
                       <div className="text-4xl mb-30 ml-10 flex items-end space-x-4">
                         <div>
                           2.99
                         </div>
                         <div className="relative flex flex-col">
                           <div className="relative z-10 text-sm ">
                             5.99
                             <hr className="absolute top-1/2 left-0 w-7 border-black -translate-y-1/2" />
                           </div>
                           <div className="text-[#A3A3A3] text-sm">
                             /per month
                           </div>
                         </div>
                       </div>
                    </div>
                <button
                      type="button"
                      className="absolute bottom-10 left-5 h-10 w-40 bg-yellow-400 text-white flex items-center justify-center z-10"
                      onClick={handlebasic}
                    >
                      Pay
                </button>
                    <div className="absolute left-12 bottom-35">
                      Acess to basic content
                    </div>
                    <div className="absolute left-12 bottom-25">
                      24/7 support 
                    </div>
                     <BulletPoint>
                        <div>
                             
                        </div>
                     </BulletPoint>
                    <div className=" translate-y-38">
                        <BulletPoint>
                            <div>

                            </div>
                        </BulletPoint>
                     </div>
                  </PayCard>
                  <div className="px-70 absolute top-30"> 
                    <PayCard >
                   <div className="py-10 px-5">
                      <div className="text-2xl">
                        Advanced
                      </div>
                       <div className="text-4xl mb-30 ml-10 flex items-end space-x-4">
                         <div>
                           5.99
                         </div>
                         <div className="relative flex flex-col">
                           <div className="relative z-10 text-sm ">
                             11.99
                             <hr className="absolute top-1/2 left-0 w-7 border-black -translate-y-1/2" />
                           </div>
                           <div className="text-[#A3A3A3] text-sm">
                             /per month
                           </div>
                         </div>
                       </div>
                    </div>
                        <button
                      type="button"
                      className="absolute bottom-10 left-5 h-10 w-40 bg-yellow-400 text-white flex items-center justify-center z-10"
                      onClick={handleadvanced}
                    >
                      Pay
                </button>
                    <div className="absolute left-12 bottom-35">
                      Acess to more features 
                    </div>
                    <div className="absolute left-12 bottom-25">
                      Join the top 1%
                    </div>
                     <BulletPoint>
                        <div>
                             
                        </div>
                     </BulletPoint>
                    <div className=" translate-y-38">
                        <BulletPoint>
                            <div>

                            </div>
                        </BulletPoint>
                     </div>
                  </PayCard>
                  </div>
              </div>
          </div>
          
        </>
    )
}