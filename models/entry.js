var mongoose = require("mongoose");

var entrySchema = new mongoose.Schema({
   title: String,
   article: String
});

module.exports = mongoose.model("Entry" , entrySchema);