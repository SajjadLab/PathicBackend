import mongoose, { Schema } from "mongoose";
import EmpathicProperty from "./EmpathicProperty";

// Defines a versatile property object for entities
const PropertySchema = new Schema({
    accepted: { // The currently accepted/most reliable empathic property's index
        type: Number,
        default: 0,
        required: true
    },
    type: { // should be either a standard mongodb type or a custom model
        type: String, // add enumerate
        required: true
    },
    empaticProperties: { // list of empathic properties
        type: [EmpathicProperty],
        required: true
    }
})

module.exports = Property = mongoose.model("Property", PropertySchema);