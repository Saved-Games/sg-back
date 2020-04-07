const bcrypt = require('bcryptjs');

const saltRounds = 10;

class Utilities {

    testString2Email(string) {
        let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return emailRegex.test(string)
    }

    crypt(code) {
        return new Promise((resolve, reject) => {
            bcrypt.hash(code, saltRounds, function (err, hash) {

                if (err) {
                    reject(err);
                } else {
                    resolve(hash);
                }

            });
        });
    }

}

module.exports = new Utilities;