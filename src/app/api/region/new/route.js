import Region from "@/models/region"
import { connectToDB } from "@/utils/database"

export async function GET(request) {
  return new Response("received new request")
}

export async function POST(req) {
  const region = await req.json()
  console.log(region)

  try {
    await connectToDB()
    const newRegion = new Region(region)
    await newRegion.save()

    return new Response(JSON.stringify(newRegion), { status: 201 })
  } catch (error) {
    return new Response("Failed to create new region", { status: 500 })
  }
}
