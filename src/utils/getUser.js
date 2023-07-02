import { BASE_URL } from "./BASE_URL"

export async function getUser(userId) {
  const res = await fetch(`${BASE_URL}:3000/api/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: userId }),
    cache: "no-store",
  })
  if (!res.ok) {
    throw new Error("failed to get user")
  }
  return res.json()
}
