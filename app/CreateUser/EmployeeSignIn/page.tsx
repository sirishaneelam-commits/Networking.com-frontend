"use client"
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EmployeeSignIn() {
  const [username, setUsername] = useState(""); // always string
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://networking-com-frontend-ofly-kz0mzbj60.vercel.app/api/users/is-employer",
        { username }
      );

      const { is_employer } = response.data;

      if (is_employer) {
        router.push("/Dashboard");
      } else {
        alert("You are not an employer");
      }
    } catch (err: any) {
      console.error(err);
      alert(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen flex-col gap-5">
      <div className="border w-60 rounded-md p-4">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <h1 className="text-2xl">Sign in as employer</h1>

          <input
            type="text"
            placeholder="Username"
            name="username"
            defaultValue={username} // use defaultValue to avoid hydration mismatch
            onChange={(e) => setUsername(e.target.value)}
            className="border h-10 px-2 rounded"
          />

          <button
            type="submit"
            className="text-white bg-green-600 h-10 rounded"
          >
            Sign In as employer
          </button>
        </form>
      </div>
    </div>
  );
}

