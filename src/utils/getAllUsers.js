import { BASE_URL } from "./BASE_URL"

export async function getAllUsers(userId) {
  const res = await fetch(`${BASE_URL}/api/user`, {
    method: "GET",
    cache: "no-store",
  })
  if (!res.ok) {
    throw new Error("failed to get user")
  }
  return res.json()
}
