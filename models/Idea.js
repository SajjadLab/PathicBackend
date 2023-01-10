import mongoose, { Schema } from "mongoose";

// Defines a versatile property object for entities
const IdeaSchema = new Schema({
    title: {
        type: [String],
        required: true
    },
    accepted: { // The currently accepted/most reliable empathic property's index
        type: String,
        default: "0",
        required: true
    },
    type: { // should be either a standard mongodb type or a custom model
        type: String, // add enumerate
        required: true
    },
    chain: { // list of empathic properties by tempath
        type: [{type: Schema.types.ObjectId, ref: "Tempath"}], // All empaths implied should be original Self -> "empathicProperty"
        required: true
    }
})

const Idea = mongoose.model("Idea", IdeaSchema);
export default Idea