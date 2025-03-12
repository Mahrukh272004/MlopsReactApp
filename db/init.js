const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// Add a test user (optional)
const testUser = new User({ email: 'test@example.com', password: 'password123' });
testUser.save().then(() => {
  console.log('Test user saved');
  mongoose.connection.close();
});