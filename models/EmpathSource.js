import mongoose, { Schema } from "mongoose";
import FuzzyDate from "./FuzzyDate";

// Interpretation object for relating perspective
const EmpathSchema = new Schema({
    source: { 
        type: Schema.types.ObjectId,
        ref: "Entity", //zotero link or maybe people
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
        type: Schema.types.ObjectId, // type Tempath to a person
        ref: "Tempath",
        required: true
    },
    interpretationDate: { // When this object was interpreted
        type: FuzzyDate,
        required: true
    },
    chain: { // the books listed bibliography and references
                      // Will help when searching for new info (possible monty carlo search tre)
        type: [{type: Schema.Types.ObjectId, ref: "Tempath"}], // tempath to other empaths
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

const Empath = mongoose.model("Empath", EmpathSchema);
export default Empath