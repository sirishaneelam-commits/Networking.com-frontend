import { ReactNode } from "react";

type PayCardProps = {
  children: ReactNode; 
};

export default function PayCard({ children }: PayCardProps) {
  return (
    <div>
      <div className="w-60 h-96 bg-white relative">
        {children}

        <div className="absolute  top-39 ml-5">
            Features
        </div>
   
        <hr className="absolute top-50 left-0 w-full border-[#949494]" />

        <div className="flex items-center justify-center absolute top-80 ml-10">
          <div className="h-10 w-40 bg-[#C4BE1D] text-white flex items-center justify-center">
            <div>Pay</div>
          </div>
        </div>
      </div>
    </div>
  );
}