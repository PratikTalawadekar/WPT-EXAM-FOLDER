//Express is over hear

const express = require("express");
const app = express("express");

app.use(express.json());

const cors = require("cors");
app.use(cors());

const { addUser, selectAllUser } = require("./user");
const { message } = require("statuses");

app.get("/user", async(req, res) => {
    const list = await selectAllUser();
    res.json(list);
});

app.post("/addUser", async(req, res) => {
    let user = req.body;
    await addUser(user);
    res.json({ message: "Sent" });
});

app.listenerCount(4000, () => console.log("Server Started!!!"));