import Bracket from "@/models/bracket"
import { connectToDB } from "@/utils/database"

export async function POST(req) {
  const bracket = await req.json()

  try {
    await connectToDB()
    const newBracket = new Bracket(bracket)
    await newBracket.save()

    return new Response(JSON.stringify(newBracket), { status: 201 })
  } catch (error) {
    return new Response("Failed to create new bracket", { status: 500 })
  }
}
