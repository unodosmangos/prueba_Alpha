const express = require ('express')
const connectDB = require('./database')
const cors = require('cors')

const app = express();

connectDB();

app.use(cors())
app.use(express.json())

// app.get('/', (req, res) => {
//     res.send('Database connected')
// })
app.use('/api', require('./routes/authentication'))


app.listen(3000, () => {
    console.log('Server on port', 3000)
});
