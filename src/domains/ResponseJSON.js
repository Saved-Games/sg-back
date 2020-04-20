class ResponseJSON {
    status;
    message;
    body;

    constructor(status, message) {
        this.status = status;
        this.message = message;
    }
}

module.exports = new ResponseJSON;