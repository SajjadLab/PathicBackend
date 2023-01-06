import mongoose, { Schema } from "mongoose";
import { ObjectId } from "mongodb";
import Property from "./Property";

// Bibliographic type object
const SourceSchema = new Schema({
    title: { // main title at [0], alternate title at [1]
        type: [Property], // type String
        required: true
    },
    authors: { // all authors
        type: [ObjectId], // tempath to People
        required: true
    },
    publicationDate: { // original publication date
        type: Property, // type FuzzyDate
        required: true
    },
    publisher: { // publishing company or individual
        type: [ObjectId], // tempath to Instituition or Person
        required: true
    },
    isbn: { // isbn
        type: [Property], // type String
        required: true
    },
    instances: { // instances (most will be zoteroLinks)
        type: [ObjectId],
        required: true
    },
    referencesUsed: { // the books listed bibliography and references
                      // Will help when searching for new info (possible monty carlo search tre)
        type: [ObjectId], // link to other Source
        required: true
    }
})

module.exports = Source = mongoose.model("Source", SourceSchema);