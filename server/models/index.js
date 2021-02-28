const mongoose = require('mongoose');

const Customer = require('./customer');

const connectDB = () => {
  return mongoose.connect(process.env.DATABASE_URL);
}

const modals = {
  Customer
};

connectDB().then(() => console.log("connect success"))

export { connectDB };
export default modals;
