import Link from "next/link"
import { signOut } from "next-auth/react"

export default function UserDropDown({ displayUserDropdown }) {
  return (
    <>
      {displayUserDropdown && (
        <div className="absolute text-xs top-[56px] right-0 bg-slate-100 p-2 w-40 z-20">
          <Link
            href="/"
            className="block border-b border-t py-3 mt-2 text-slate-700 hover:text-sky-300"
          >
            My Profile
          </Link>
          <Link
            href="/new"
            className="block border-b py-3 text-slate-700 hover:text-sky-300"
          >
            New Bracket
          </Link>
          <div
            className="border-b py-3 text-slate-700 cursor-pointer hover:text-sky-300"
            onClick={signOut}
          >
            Sign Out
          </div>
        </div>
      )}
    </>
  )
}
