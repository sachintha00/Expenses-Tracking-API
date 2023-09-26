const connectDB = require('./utility/db')
const dotenv = require('dotenv');
dotenv.config();

const app = require('./app'); // Import the 'app' instance from app.js

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    connectDB()
});





