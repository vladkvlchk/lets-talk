import { express } from "express";

const app = express();

app.use(express.json());

app.get("/hello", (req, res) => {
    res.json({message: "Hello! It's the second server"});
})

app.listen(5001, () => console.log('Server was started on port 5001'));

