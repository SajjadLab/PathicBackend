import mongoose, { Schema } from "mongoose";
import FuzzyDateSchema from "./FuzzyDate.js";

// This is the schema for GeoJson polygon object
// that relate to terraperiums during a period of time
const TemporalGeoJsonSchema = new Schema({
  type: { // Type of geojson
    type: String,
    enum: ['Feature'],
    required:true
  },
  properties: { // temporal properties and all relationships with terraperiums/other
    name: String,
    startDate: FuzzyDateSchema,
    endDate: FuzzyDateSchema,
    entities: [{ type: Schema.Types.ObjectId, ref: "Entity" }], // link to objects through Tempaths
    area: Number,
    // center: [Number]
  },
  geometry: { // geojson geometry
    type: {
      type: String,
      enum: ['MultiPolygon'],
      required: true
    },
    coordinates: {
      type: [[[[Number]]]],
      required: true
    }
  }
});

const TemporalGeoJson = mongoose.model("TemporalGeoJson", TemporalGeoJsonSchema);
export default TemporalGeoJson
