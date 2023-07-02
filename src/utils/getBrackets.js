import { BASE_URL } from "./BASE_URL"

export async function getBrackets() {
  const res = await fetch(`${BASE_URL}/api/bracket`, {
    cache: "no-store",
  })
  if (!res.ok) {
    throw new Error("failed to get brackets")
  }
  return res.json()
}
