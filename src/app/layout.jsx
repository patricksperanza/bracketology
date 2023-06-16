import Image from "next/image"
import Link from "next/link"
import Provider from "@/components/Provider"
import "./globals.css"

export const metadata = {
  title: "Delphi Bracketology",
  description: "Delphi Bracketology Website",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="poppins bg-slate-200">
        <Provider>
          <nav className="text-2xl text-center font-semibold p-3 rounded bg-slate-50 drop-shadow flex justify-between items-center">
            <Link href="/">
              <Image
                src="/images/basketball.svg"
                alt="basketball"
                width={30}
                height={30}
              />
            </Link>
            <h1>Delphi Bracketology</h1>
            <Link href="/new" className="w-[30px] text-xs font-normal">
              New
            </Link>
          </nav>
          {children}
        </Provider>
      </body>
    </html>
  )
}
