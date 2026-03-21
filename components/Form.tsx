"use client"
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Form() {
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const username = (form.elements.namedItem("username") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;
   
    try {
      await axios.post("https://networking-com-frontend-ofly-kz0mzbj60.vercel.app/api/users/register", { // lowercase
        username, 
        password
      });
 
      router.push("/CreateUser");
      console.log("User redirected successfully!");
    } 
    catch (err: any) {
        console.log("Status:", err.response?.status);
        console.log("API response:", err.response?.data || err.message);
     }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-4 mt-5">
      <input
        type="text"
        name="username"
        placeholder="Username"
        className="border w-70 h-10 rounded-md"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="border w-70 h-10 rounded-md"
      />
      <button
        type="submit"
        className="h-10 w-70 bg-green-600 text-white rounded-md"
      >
        Log in
      </button>
    </form>
  );
}


