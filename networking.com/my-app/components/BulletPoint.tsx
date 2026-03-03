import { ReactNode } from "react";

type PayCardProps = {
  children: ReactNode; 
};

export default function BulletPoint({ children }: PayCardProps) {
  return (
    <>
      <div className=" flex items-center justify-center">
        <div className="text-purple-600 w-6 rounded-full bg-purple-600 absolute bottom-35 left-5">
            t
            {children}
        </div>
      </div>
    </>
  );
}