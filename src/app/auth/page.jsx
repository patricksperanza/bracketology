"use client"
import { signIn, signOut, useSession, getProviders } from "next-auth/react"
import { useState, useEffect } from "react"

export default function Auth() {
  const { data: session } = useSession()
  console.log(session)

  const [providers, setProviders] = useState(null)

  useEffect(() => {
    const setUpProviders = async () => {
      const res = await getProviders()
      setProviders(res)
    }
    setUpProviders()
  }, [])

  return (
    <>
      {session?.user ? (
        <div>
          <button onClick={signOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          {providers &&
            Object.values(providers).map((provider) => (
              <button key={provider.name} onClick={() => signIn(provider.id)}>
                Sign In
              </button>
            ))}
        </div>
      )}
    </>
  )
}
