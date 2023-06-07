import Test from "@/models/testModel"
import { connectToDB } from "@/utils/database"

export async function GET(request) {
  return new Response("received new request")
}

export async function POST(req) {
  const { name } = await req.json()

  try {
    await connectToDB()
    const newTest = new Test({ name })
    await newTest.save()

    return new Response(JSON.stringify(newTest), { status: 201 })
  } catch (error) {
    return new Response("Failed to create new test", { status: 500 })
  }
}
