"use client"
import { signIn, signOut, useSession, getProviders } from "next-auth/react"
import { useState, useEffect, useContext } from "react"
import Image from "next/image"

export default function Auth() {
  const { data: session } = useSession()
  const [providers, setProviders] = useState(null)

  useEffect(() => {
    const setUpProviders = async () => {
      const res = await getProviders()
      setProviders(res)
    }
    setUpProviders()
  }, [])

  return (
    <div className="flex justify-center mt-16">
      {session?.user ? (
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 justify-center items-center w-[500px] font-semibold">
            <Image
              className="rounded-full"
              src={session.user.image}
              alt="user image"
              width={40}
              height={40}
            />
            <h2>{session.user.name}</h2>
          </div>
          <button
            className="w-44 h-8 bg-slate-50 rounded drop-shadow flex justify-center items-center pointer mx-auto"
            onClick={signOut}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-5">
          <div>
            <h2 className="text-xl font-semibold text-center">Welcome</h2>
            <p>Sign in to start creating and updating your Brackets!</p>
          </div>

          <button
            className="w-44 h-8 bg-slate-50 rounded drop-shadow block pointer mx-auto"
            onClick={() => {
              signIn()
            }}
          >
            Sign In with Google
          </button>
        </div>
      )}
    </div>
  )
}
