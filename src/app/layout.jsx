import "./globals.css"
import { AppProvider } from "@/context/AppContext"

export const metadata = {
  title: "Delphi Bracketology",
  description: "Delphi Bracketology Website",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="poppins bg-slate-200">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}
