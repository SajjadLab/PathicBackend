import mongoose, { Schema } from "mongoose";
import Property from "./Property";

    {/*
    entities: [
        { type: Schema.Types.ObjectId, ref: "entity" }
    ],
 */}

// Interpretation object for relating perspective
const EmpathSchema = new Schema({
    source: { 
        type: Schema.types.ObjectId,
        ref: "Source",
        required: true
        },
    referenceGroup: { // Organizational location of the highlight
        heirarchy: String,
        value: String
    },
    highlight: { // Highlight from source
        type: String,
        required: false
    },
    interpretation: { // What the interpretor believes the author meant
        type: String,
        required: true
    },
    interpreter: { // The individual interprating the highlight
        type: Schema.types.ObjectId, // type Person
        ref: "Person",
        required: true
    },
    interpretationDate: { // When this object was interpreted
        type: Schema.types.ObjectId, // type FuzzyDate
        ref: "FuzzyDate",
        required: true
    },
    tags: { // Query tags
        type: [String],
        required: false
    }
})

module.exports = Empath = mongoose.model("Empath", EmpathSchema);