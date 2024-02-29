import Express from "express";
import Config from "./config";

const app = Express();

app.get('/api/test', (req, res) => {
    res.send('hello');
});

app.listen(Config.listen_port, () => {
    console.log(`Server started at port: ${Config.listen_port}`);
});
