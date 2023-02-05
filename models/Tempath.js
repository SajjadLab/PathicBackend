import mongoose, { Schema } from "mongoose";
import FuzzyDateSchema from "./FuzzyDate.js";

// Defines a versatile property object for entities
const TempathSchema = new Schema({
    source: { 
        type: String,
        required: true
        },
    title: {
        type: [String],
        required: true
    },
    authors: { // all authors
        type: [{type: Schema.Types.ObjectId, ref: "Tempath"}], // tempath to People
        required: true
    },
    publicationDate: { // original publication date
        type: FuzzyDateSchema,
        required: true
    },
    uid: { // isbn
        type: [String],
        required: true
    },
    referenceGroup: { // Organizational location of the empath
        heirarchy: String,
        value: String
    },
    highlight: { // Highlight from source
        type: String,
        required: false // only false cause of issues of extracting txt
    },
    interpretation: { // What the interpretor believes the author meant
        type: String, // populated by empaths in the case of sources?
        required: false
    },
    interpreter: { // The individual interprating the highlight
        type: Schema.Types.ObjectId, // type Tempath to a person
        ref: "Tempath",
        required: false
    },
    interpretationDate: { // When this object was interpreted
        type: FuzzyDateSchema,
        required: true
    },
    startDate: { // start date of relationship
        type: FuzzyDateSchema,
        required: true
    },
    endDate: { // end date of relationship
        type: FuzzyDateSchema,
        required: true
    },
    chain: { // the books listed bibliography and references
                      // Will help when searching for new info (possible monty carlo search tre)
        type: [{type: Schema.Types.ObjectId, ref: "Tempath"}], // any ID (empath, idea)
        required: false
    },
    reliability: {
        type: String,
        required: false
    },
    tags: { // Query tags
        type: [String],
        required: false
    }
})

const Tempath = mongoose.model("Tempath", TempathSchema);
export default Tempath;