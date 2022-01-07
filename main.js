const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
    host: "localhost",
    user: "root",
    password: "cdac",
    database: "wpt",
};

const selectAllUser = async() => {
    const connection = mysql.createConnection(dbinfo);

    await connection.connectAsync();

    //Query
    let sql = `SELECT * FROM message`;
    const list = await connection.queryAsync(sql, [10]);
    console.log(list);

    // console.log("Connection in Process!!");

    await connection.endAsync();
    return list;
};

const addUser = async() => {
    const connection = mysql.createConnection(dbinfo);

    await connection.connectAsync();

    //Query
    let sql = `INSERT INTO  message (messages) values( ? )`;
    let list = connection.queryAsync(sql, [50]);

    console.log("Message Recorded/Recieved !!!!");

    await connection.endAsync();
};

module.exports = { selectAllUser, addUser };