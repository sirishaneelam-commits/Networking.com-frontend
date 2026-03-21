"use client"

import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function EmployeeSignIn() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    const username = (form.elements.namedItem("username") as HTMLInputElement).value

    if (!username) {
      alert("Username is required")
      return
    }

    try {
      setLoading(true)

      const response = await axios.post(
        "https://networking-com-api-11.onrender.com/api/users/get-user",
        { username }
      )

      const { is_employer } = response.data

      if (!is_employer) {
        alert("You are not an employer")
        return
      }

      router.push("/Dashboard")

    } catch (error) {
      console.error("Error signing in:", error)
      alert("Login failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen flex-col gap-5">
      <div className="border w-60 rounded-md p-4">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <h1 className="text-2xl">
            Sign in as employer
          </h1>

          <input
            type="text"
            placeholder="Username"
            name="username"
            className="border h-10 px-2 rounded"
          />

          <button
            type="submit"
            disabled={loading}
            className="text-white bg-green-600 h-10 rounded"
          >
            {loading ? "Signing in..." : "Sign In as employer"}
          </button>

        </form>
      </div>
    </div>
  )
}