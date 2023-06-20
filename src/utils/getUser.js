export async function getUser(userId) {
  const res = await fetch("http://localhost:3000/api/user", {
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
