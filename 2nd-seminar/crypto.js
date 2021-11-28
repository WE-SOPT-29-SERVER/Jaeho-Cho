const crypto = require("crypto");

const password = "qwerty";
const hex = crypto.createHash("sha512").update(password).digest("hex");
const base64 = crypto.createHash("sha512").update(password).digest("base64");

// const salt = "QxLUF1bglAdeQXbv5PehSMfV11CdYYLmfY6lehjZMQ";
const salt = crypto.randomBytes(32).toString("hex");
const iteration = 100000;
const keylen = 64;
const digest = "sha512";
const callBack = (err, derivedKey) => {
    if (err) throw err;
    console.log(derivedKey.toString("hex"));
};
crypto.pbkdf2(password, salt, iteration, keylen, digest, callBack);

const encrypt = (salt, password) => {
    crypto.pbkdf2(password, salt.toString(), 1, 32, "sha512", (err, derivedKey) => {
        if (err) throw err;
        const hashed = derivedKey.toString("hex");
        console.log("salt : ", salt);
        console.log("hashed : ", hashed);
    });
};

// const password = "fl0wer";
// const salt = crypto.randomBytes(32).toString("hex");
encrypt(salt, password);