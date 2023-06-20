export async function getAllUsers(userId) {
  const res = await fetch("http://localhost:3000/api/user", {
    method: "GET",
    cache: "no-store",
  })
  if (!res.ok) {
    throw new Error("failed to get user")
  }
  return res.json()
}
