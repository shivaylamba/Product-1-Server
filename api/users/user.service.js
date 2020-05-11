const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into users(username, email, password)
            values(?,?,?)`,
            [
                data.username,
                data.email,
                data.password
            ],
            (error, results, fields) => {
                if(error){
                   return callBack(error)
                }
                return callBack(null, results);
            }
        );
    },

    getUsers: callBack => {
        pool.query(
            `select id, username, email from users`,
            [],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    getUsersById: (id, callBack) => {
        pool.query(
            `select id, username, email from users where id =?`,
            [id],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },

    updateUser: (data, callBack) => {
        pool.query (
            `update users set username=?, email=?, password=? where id=?`,
            [
                data.username,
                data.email,
                data.password,
                data.id
            ],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },

    deleteUser: (data, callBack) => {
        pool.query(
            `delete from users where id=?`,
            [data.id],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },

    getUserByEmail: (email, callBack) => {
        pool.query(
            `select * from users where email =?`,
            [email],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }
};