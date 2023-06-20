import User from "@/models/user"
import { connectToDB } from "@/utils/database"

export async function GET(req) {
  try {
    await connectToDB()

    const users = await User.find()

    return new Response(JSON.stringify(users), { status: 200 })
  } catch (error) {
    return new Response("Failed to fetch users", { status: 500 })
  }
}

export async function POST(req) {
  try {
    await connectToDB()

    const { id } = await req.json()

    const user = await User.findById(id)

    return new Response(JSON.stringify(user), { status: 200 })
  } catch (error) {
    return new Response("Failed to fetch user", { status: 500 })
  }
}
