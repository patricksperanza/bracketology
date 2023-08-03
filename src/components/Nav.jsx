"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import BracketDropDown from "./BracketDropDown";
import UserDropDown from "./UserDropDown";
import { useState } from "react";

export default function Nav() {
  const { data: session } = useSession();
  const [displayBracketDropdown, setDisplayBracketDropdown] = useState(false);
  const [displayUserDropdown, setDisplayUserDropdown] = useState(false);

  return (
    <nav>
      <div className="text-2xl text-center font-semibold p-3 rounded bg-slate-50 drop-shadow flex justify-between items-center">
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
        <h1>Bracketology</h1>
        {session ? (
          <div className="flex gap-4 justify-center items-center w-[50px] font-semibold pointer">
            <Image
              className="rounded-full cursor-pointer"
              src={session.user.image}
              alt="user image"
              width={30}
              height={30}
              onClick={() => setDisplayUserDropdown((prev) => !prev)}
            />
            <UserDropDown displayUserDropdown={displayUserDropdown} />
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
      </div>

      <div className="bg-slate-700">
        <ul className="flex justify-center text-slate-50 text-center relative w-[700px mx-auto">
          <li className="hover:text-sky-300 cursor-pointer border-r border-l border-slate-200 px-14 py-1 text-center">
            <p onClick={() => setDisplayBracketDropdown((prev) => !prev)}>
              Brackets
            </p>
            <BracketDropDown displayBracketDropdown={displayBracketDropdown} />
          </li>
          <li className="hover:text-sky-300 cursor-pointer border-r border-slate-200 px-14 py-1 text-center">
            Seed Lists
          </li>
          <li className="hover:text-sky-300 cursor-pointer border-r border-slate-200 px-14 py-1 text-center">
            Standings
          </li>
          <li className="hover:text-sky-300 cursor-pointer border-r border-slate-200 px-14 py-1 text-center">
            Podcast
          </li>
        </ul>
      </div>
    </nav>
  );
}
