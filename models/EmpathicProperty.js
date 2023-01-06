import mongoose, { Schema } from "mongoose";
import { ObjectId } from "mongodb";

// Empatic property defines a particular view on a property based on a collection of empaths
// is used to make up a Property
// Multiple EmpathicProperties within a Property suggests differing views on the nature of a property
const EmpathicPropertySchema = new Schema({
    value: { // the value of an empathic property, should be of type=type listed under parent Property
        type: Mixed,
        required: true
    },
    empaths: { // empaths that give meaning to this interpretation of a property
        type: [ObjectId],
        required: true
    },
    empathicStatus: { // fuzzy qualitative string of acceptance of this object
        type: String,
        required: false
    }
})

module.exports = EmpathicProperty = mongoose.model("EmpathicProperty", EmpathicPropertySchema);