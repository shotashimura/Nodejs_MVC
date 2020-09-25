// Node.jsアプリからMongoDBを操作するためのライブラリ
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//string型のnameとDate型のCreated_dateによって構成
var TaskSchema = new Schema({
  name: {
    type: String,
    required: "Enter the name of the task",
  },
  Created_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Tasks", TaskSchema);
