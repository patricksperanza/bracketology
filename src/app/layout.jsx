import Provider from "@/components/Provider"
import "./globals.css"
import Nav from "@/components/Nav"
import { BracketContextProvider } from "@/context/BracketContext"

export const metadata = {
  title: "Delphi Bracketology",
  description: "Delphi Bracketology Website",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="poppins bg-slate-200">
        <Provider>
          <BracketContextProvider>
            <Nav />
            {children}
          </BracketContextProvider>
        </Provider>
      </body>
    </html>
  )
}
