import clientPromise from "../../../mongodb"

export async function GET(req) {
  try {
    const client = await clientPromise
    console.log("Connected to MongoDB successfully") // Log success message
    const db = client.db("MitschWebsite")
    const collection = db.collection("PoetryPrompts")

    const prompts = await collection.find({}).toArray()

    return new Response(JSON.stringify(prompts || []), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    })
  } catch (error) {
    console.error("Error in GET /api/prompts:", error) // Log the actual error
    return new Response(JSON.stringify({ message: "Error fetching prompts" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    })
  }
}

export async function POST(req) {
  try {
    const client = await clientPromise
    const db = client.db("MitschWebsite")
    const collection = db.collection("PoetryPrompts")

    const body = await req.json()
    const { prompt } = body

    if (!prompt) {
      return new Response(JSON.stringify({ message: "Prompt cannot be empty" }), {
        status: 400
      })
    }

    await collection.insertOne({ prompt })
    return new Response(JSON.stringify({ message: "Prompt added" }), {
      status: 200
    })
  } catch (error) {
    console.error("Error in POST /api/prompts:", error) // Log the error
    return new Response(JSON.stringify({ message: "Error adding prompt" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    })
  }
}
