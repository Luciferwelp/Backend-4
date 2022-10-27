const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getFortune } = require("../server/controller");

const { getCompliment, getAcnh, getTaco, postTaco } = require('./controller');

const { postAcnh } = require("./controller");

app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getFortune);

app.get("/api/acnh", getAcnh);

app.get("/api/taco", getTaco);

app.post("/api/taco", postTaco);

app.post("/api/acnh", postAcnh);


// app.post("/api/acnh", (request, response) => {
//     acnh.push(request.body)
//     response.status(200).json({message: "ok"})
// })
// app.post(`/api/houses`, createHouse)
// const createMovie = body => axios.post(baseURL, body).then(moviesCallback).catch(errCallback)


app.listen(4000, () => console.log("Server running on 4000"));
