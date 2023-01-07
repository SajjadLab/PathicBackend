import mongoose, { Schema } from "mongoose";
import FuzzyDateSchema from "./FuzzyDate.js";

// Bibliographic type object
const SourceSchema = new Schema({
    title: { // main title at [0], alternate title at [1]
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
    publisher: { // publishing company or individual
        type: [{type: Schema.Types.ObjectId, ref: "Tempath"}], // tempath to Instituition or Person
        required: true
    },
    isbn: { // isbn
        type: [String],
        required: true
    },
    instances: { // instances (most will be zoteroLinks)
        type: [{type: Schema.Types.ObjectId, ref: "Tempath"}], // tempath to an instance 
        required: false
    },
    referencesUsed: { // the books listed bibliography and references
                      // Will help when searching for new info (possible monty carlo search tre)
        type: [{type: Schema.Types.ObjectId, ref: "Tempath"}], // tempath to other Source
        required: false
    }
})

const Source = mongoose.model("Source", SourceSchema);
export default Source;