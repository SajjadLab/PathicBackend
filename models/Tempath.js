import mongoose, { Schema } from "mongoose";
import FuzzyDateSchema from "./FuzzyDate.js";

// Defines a versatile property object for entities
const TempathSchema = new Schema({
    name: {
        type: String,
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
    components: { // Members of relationship
        type: [{type: Schema.Types.ObjectId, ref: "Entity"}],
        required: true
    },
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const Tempath = mongoose.model("Tempath", TempathSchema);
export default Tempath;