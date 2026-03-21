"use client"
import { useState, useEffect } from "react";
import { DashNav } from "@/components/DashNav";
import axios from "axios"

interface Card{
   _id: string
   title: string
   description: string
   phone_number: string
   email: string
}

export default function Dashboard(){

  const [cards, setCards] = useState<Card[]>([])
  const [selectedCard, setSelectedCard] = useState<Card | null>(null)

  useEffect(() => {
    const fetchCards = async () =>{
      try{
        const res = await axios.get("https://networking-com-api-11.onrender.com/api/cards")
        setCards(res.data)
      }
      catch(err){
        console.log(err)
      }
    }

    fetchCards()
  }, [])

  return(
    <>
      <DashNav/>

      <h1 className="flex items-center justify-center mt-5 text-4xl font-semibold">
        All Cards
      </h1>

      <div className="flex flex-col items-center gap-6 mt-6 w-full px-6">

        
        {!selectedCard && cards.map((card) => (

          <div
            key={card._id}
            className="relative border w-full p-6 rounded-md shadow flex items-center"
          >

            
            <div
              onClick={() => setSelectedCard(card)}
              className="absolute top-2 left-2 w-[50px] h-[50px] bg-blue-600 text-white flex items-center justify-center rounded cursor-pointer"
            >
              Go
            </div>

           
            <h2 className="text-xl font-semibold ml-16">
              {card.title}
            </h2>

          </div>

        ))}

        
        {selectedCard && (

          <div className="border w-full max-w-[600px] p-6 rounded-md shadow">

            <h2 className="text-2xl font-bold">
              {selectedCard.title}
            </h2>

            <p className="mt-4">
              {selectedCard.description}
            </p>

            <p className="mt-4">
              Phone: {selectedCard.phone_number}
            </p>

            <p className="mt-2">
              Email: {selectedCard.email}
            </p>

            <button
              className="mt-6 bg-gray-600 text-white px-4 py-2 rounded"
              onClick={() => setSelectedCard(null)}
            >
              Back
            </button>

          </div>

        )}

      </div>
    </>
  )
}


