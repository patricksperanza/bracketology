import { Schema, model, models } from "mongoose"

const TeamSchema = new Schema({
  name: String,
  seed: String,
})

const GameSchema = new Schema({
  team1: TeamSchema,
  team2: TeamSchema,
})

const BracketSchema = new Schema(
  {
    south: [GameSchema],
    midwest: [GameSchema],
    east: [GameSchema],
    west: [GameSchema],
    playIn: [GameSchema],
    firstFourOut: [TeamSchema],
  },
  { timestamps: true }
)

const Bracket = models.Bracket || model("Bracket", BracketSchema)

export default Bracket
