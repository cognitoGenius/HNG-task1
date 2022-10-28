import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res, next) => {
    res.status(200).json({
        "slackUsername": "String",
        "backend": true,
        "age": 21,
        "bio": "I am Tommy, an up and coming software engineer"
    })
})

const port = process.env.PORT || 3000
const server = app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})