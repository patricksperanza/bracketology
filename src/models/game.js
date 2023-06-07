import { Schema, model, models } from "mongoose"

const GameSchema = new Schema({
  name1: String,
  slug1: String,
  seed1: String,
  name2: String,
  slug2: String,
  seed2: String,
})

const Game = models.Game || model("Game", GameSchema)

export default Game
