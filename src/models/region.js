import { Schema, model, models } from "mongoose"

const GameSchema = new Schema({
  name1: String,
  slug1: String,
  seed1: String,
  name2: String,
  slug2: String,
  seed2: String,
})

const RegionSchema = new Schema({
  eightColumn: [GameSchema],
  fourColumn: [GameSchema],
  twoColumn: [GameSchema],
  oneColumn: [GameSchema],
})

const Game = models.Game || model("Game", GameSchema)
const Region = models.Region || model("Region", RegionSchema)

export default Region
