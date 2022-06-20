const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://mohamed:5bnRn80xDHy4wyQR@cluster0.hl2me.mongodb.net/test', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("connection ok");
});