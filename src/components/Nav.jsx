"use client"
import { signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { useContext } from "react"

export default function Nav() {
  const { data: session } = useSession()
  return (
    <nav className="text-2xl text-center font-semibold p-3 rounded bg-slate-50 drop-shadow flex justify-between items-center">
      <div className="w-[50px]">
        <Link href="/">
          <Image
            src="/images/basketball.svg"
            alt="basketball"
            width={30}
            height={30}
          />
        </Link>
      </div>
      <h1>Delphi Bracketology</h1>
      {session ? (
        <div className="flex gap-4 justify-center items-center w-[50px] font-semibold pointer">
          <Image
            className="rounded-full cursor-pointer"
            src={session.user.image}
            alt="user image"
            width={30}
            height={30}
            onClick={signOut}
          />
        </div>
      ) : (
        <div className="w-[60px]">
          <button
            className="w-[60px] h-8 bg-slate-50 rounded drop-shadow block mx-auto text-xs font-normal"
            onClick={() => signIn()}
          >
            Sign In
          </button>
        </div>
      )}
    </nav>
  )
}
