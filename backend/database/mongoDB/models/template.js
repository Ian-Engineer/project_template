const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
  id: Number,
})

const Template = mongoose.model('Template', templateSchema);

module.exports = Template;