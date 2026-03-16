function DeletePost(){
    return(
        <>
          <div className="flex  items-center justify-center min-h-screen">
             <div className="flex flex-col gap-4">
                        <h1 className="text-4xl font-semibold translate-x-10"> Delete Post</h1>
                        <input type="text" placeholder="username" className="h-10 w-70 border rounded-md"/>
                        <input type="text" placeholder="password" className="h-10 w-70 border rounded-md" />
                        <button className="h-10 w-70 border  rounded-full bg-green-600 text-white">Log in</button>
             </div>
          </div>
        </>
    )
}
export default DeletePost