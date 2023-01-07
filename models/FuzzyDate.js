import mongoose, { Schema } from "mongoose"

// Fuzzy date object for quantifying (or qualifying) time inaccuracy
const FuzzyDateSchema = new Schema({
    startDate: { // Start of the fuzzy date
        type: Date,
        required: true
    },
    endDate: { // end of the fuzzy date
        type: Date,
        required: true
    },
    distribution: { // can either be a qualitiative string,
                    // or a mathematical probability distribution (in wolfram notation)
        type: String,
        required: true
    }
})

const FuzzyDate = mongoose.model("FuzzyDate", FuzzyDateSchema);
export default FuzzyDateSchema;