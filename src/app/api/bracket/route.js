import Bracket from "@/models/bracket"
import { connectToDB } from "@/utils/database"

export async function GET(req) {
  try {
    await connectToDB()

    const brackets = await Bracket.find({})

    return new Response(JSON.stringify(brackets), { status: 200 })
  } catch (error) {
    return new Response("Failed to fetch all brackets", { status: 500 })
  }
}
