"use client"

import { getAllUsers } from "@/utils/getAllUsers"
import { useEffect, useState, useContext } from "react"
import { BracketContext } from "@/context/BracketContext"

export default function BracketDropDown({ displayBracketDropdown }) {
  const [usersList, setUsersList] = useState([])
  const { allBrackets, currentBracketId, setCurrentBracketId } =
    useContext(BracketContext)

  useEffect(() => {
    const getUsersList = async () => {
      const list = await getAllUsers()
      setUsersList(list)
    }

    getUsersList()
  }, [])

  const selectBracket = (bracketId) => {
    setCurrentBracketId(bracketId)
  }

  return (
    <>
      {usersList.length > 0 && displayBracketDropdown && (
        <div className="absolute top-8 z-50">
          {usersList.map((user) => (
            <div
              key={user.name}
              className="text-xs font-semibold bg-slate-100 text-black py-2"
            >
              <h2>{user.name}</h2>
              {allBrackets.map((bracket, i) => (
                <p
                  key={i}
                  className="px-4 py-2 font-normal border-b"
                  onClick={() => selectBracket(bracket._id)}
                >
                  {new Date(bracket.createdAt).toDateString()}
                </p>
              ))}{" "}
            </div>
          ))}
        </div>
      )}
    </>
  )
}
