import Game from "@/models/game"
import { connectToDB } from "@/utils/database"

export async function GET(request) {
  return new Response("received new request")
}

export async function POST(req) {
  const { name1, slug1, seed1, name2, slug2, seed2 } = await req.json()

  try {
    await connectToDB()
    const newGame = new Game({ name1, slug1, seed1, name2, slug2, seed2 })
    await newGame.save()

    return new Response(JSON.stringify(newGame), { status: 201 })
  } catch (error) {
    return new Response("Failed to create new game", { status: 500 })
  }
}
