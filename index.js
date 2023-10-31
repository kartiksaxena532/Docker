const express =  require ("express");
const app = express();

const PORT = process.env.port;

app.get("/", (req, res) => {
 return res.json("hi im node js container");

});

app.listen(PORT ,()=>console.log(`server started on port ${PORT}`))