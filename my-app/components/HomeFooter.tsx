import profile  from '../public/profile_pic.jpeg'
export default function HomeFooter(){
    return(
        <>
          <div className="-translate-y-70 ml-60 text-2xl text-white">
              Reviews 
          </div>
          <div className="relative">
               <img src={profile.src} alt="profile_pic" width={100} height={100} className='rounded-full -translate-y-70 ml-20' />
               <div className='text-yellow-600 absolute top-[-270px] left-[200px] text-6xl'>
                 {'★'}
               </div>
               <div className='text-yellow-600 absolute top-[-270px] left-[250px] text-6xl'>
                 {'★'}
               </div>
                <div className='text-yellow-600 absolute top-[-270px] left-[300px] text-6xl'>
                 {'★'}
               </div>
                <div className='text-yellow-600 absolute top-[-270px] left-[350px] text-6xl'>
                 {'★'}
               </div>
               <div className='text-yellow-600 absolute top-[-270px] left-[400px] text-6xl'>
                 {'★'}
               </div>
          </div>
        </>
    )
}