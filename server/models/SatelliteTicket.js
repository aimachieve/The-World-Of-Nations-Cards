const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const SatelliteTicketSchema = new Schema(
  {
    user_id: {
      type: Schema.ObjectId,
      ref: 'users'
    },
    eventId: {
      type: Schema.ObjectId,
      ref: 'events'
    },
    satelliteId: {
      type: Schema.ObjectId,
    },
    username: {
      type: String,
      require: true,
    },
    status: {
      type: Boolean,
      default: false
    },
    eventId: {
      type: String,
      require: true
    },
  },
)

module.exports = SatelliteTicket = mongoose.model('satellitetickets', SatelliteTicketSchema)