"use client"
import { ReactNode } from "react";
import axios from 'axios'

const handlebasic=async()=>{
  const res =await axios.post(
    'http://localhost:8000/api/users/Pay?plan=basic',
  )
  window.location.href = res.data.url;
}
type PayCardProps = {
  children: ReactNode; 
};

export default function PayCard({ children }: PayCardProps) {
  return (
    <div>
      <div className="w-60 h-96 bg-white relative">
        {children}

        <div className="absolute ml-5" style={{ top: "156px" }}>
            Features
        </div>
   
        <hr className="absolute left-0 w-full border-[#949494]" style={{ top: "200px" }} />

        
        </div>
      </div>
    
  );
}