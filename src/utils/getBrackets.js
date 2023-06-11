export async function getBrackets() {
  const res = await fetch("http://localhost:3000/api/bracket", {
    cache: "no-store",
  })
  if (!res.ok) {
    throw new Error("failed to get brackets")
  }
  return res.json()
}
