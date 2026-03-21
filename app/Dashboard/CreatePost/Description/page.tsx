"use client"
import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation" // use App Router's useRouter

function Description() {
  const router = useRouter() // move useRouter to top level

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")

  // Make createCard async and await axios
  const createCard = async () => {
    try {
      await axios.post("https://networking-com-frontend-ofly-kz0mzbj60.vercel.app/api/cards", {
        title,
        description,
        phone_number: phoneNumber,
        email
      })
      router.push("/Dashboard/CreatePost/Description/Sucess")
    } catch (err) {
      console.error(err)
      alert("Failed to create post")
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-semibold translate-x-10">Card details</h1>

        {/* call createCard on button click */}
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="h-10 w-[280px] border rounded-md border-gray-600 px-2"
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="h-24 w-[280px] border rounded-md px-2"
        />
        <input
          type="tel"
          placeholder="Phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="h-10 w-[280px] border rounded-md border-gray-600 px-2"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-10 w-[280px] border rounded-md border-gray-600 px-2"
        />

        <button
          onClick={createCard} // attach click handler
          className="h-10 w-[280px] bg-green-600 text-white rounded-full"
        >
          Create Post
        </button>
      </div>
    </div>
  )
}

export default Description