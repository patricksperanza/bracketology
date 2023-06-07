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

const FinalSchema = new Schema({
  finalFour: [GameSchema],
  championship: [GameSchema],
})

const BracketSchema = new Schema({
  south: RegionSchema,
  midwest: RegionSchema,
  final: FinalSchema,
  east: RegionSchema,
  west: RegionSchema,
})

const Game = models.Game || model("Game", GameSchema)
const Region = models.Region || model("Region", RegionSchema)
const Final = models.Final || model("Final", FinalSchema)
const Bracket = models.Bracket || model("Bracket", BracketSchema)

export default Bracket
