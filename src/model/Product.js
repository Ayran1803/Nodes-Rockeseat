const mongosse = require('mongoose');

const ProductSchema = new mongosse.Schema({
  tile: {
    type: String,
    required: true,
  },
  descripton: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

mongosse.model('Product', ProductSchema);
