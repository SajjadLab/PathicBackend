import mongoose from "mongoose";
const { Schema } = mongoose;

// This is the schema for GeoJson polygon object
// that relate to terraperiums during a period of time
const TemporalGeoJsonSchema = new Schema({
  type: { // Type of geojson
    type: String,
    enum: ['Feature'],
    required:true
  },
  properties: { // temporal properties and all relationships with terraperiums/other
    name: { type: Schema.Types.ObjectId, ref: "name" }, // link to Property of type String
    startDate: { type: Schema.Types.ObjectId, ref: "startDate" }, // link to Property of type FuzzyDate
    endDate: { type: Schema.Types.ObjectId, ref: "endDate" }, // link to Property of type FuzzyDate
    entities: [{ type: Schema.Types.ObjectId, ref: "entity" }], // link to objects through Tempaths
    area: Number,
    center: [Number]
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
