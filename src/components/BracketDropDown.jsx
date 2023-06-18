"use client"

import { getAllUsers } from "@/utils/getAllUsers"
import { useEffect, useState } from "react"
import { getBrackets } from "@/utils/getBrackets"

export default function BracketDropDown({ displayDropdown }) {
  const [usersList, setUsersList] = useState([])
  const [bracketsList, setBracketsList] = useState([])

  useEffect(() => {
    const getUsersList = async () => {
      const list = await getAllUsers()
      setUsersList(list)
    }

    getUsersList()
  }, [])

  useEffect(() => {
    const getBracketsList = async () => {
      const list = await getBrackets()
      setBracketsList(list)
    }

    getBracketsList()
  }, [])

  console.log(bracketsList)
  return (
    <>
      {usersList.length > 0 && displayDropdown && (
        <div className="absolute top-8">
          {usersList.map((user) => (
            <li
              key={user.name}
              className="list-none text-xs font-semibold bg-slate-100 text-black pr-4 py-2"
            >
              <h2>{user.name}</h2>
              <ul>
                {bracketsList.map((bracket, i) => (
                  <li key={i} className="pl-4 font-normal">
                    {new Date(bracket.createdAt).toDateString()}
                  </li>
                ))}{" "}
              </ul>
            </li>
          ))}
        </div>
      )}
    </>
  )
}
