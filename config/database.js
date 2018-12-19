const mongoose = require('mongoose');

var db = mongoose.connection;
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('db connected');
});

