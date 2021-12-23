const members = require("./members");

const getOnline = members => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = members.filter(person => person.location === "online");
            resolve(data);
        }, 500);
    });
}

const getOffline = members => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = members.filter(person => person.location === "offline");
            resolve(data);
        }, 500);
    });
}

const getYB = members => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = members.filter(person => person.group === "YB");
            resolve(data)
        }, 500);
    });
}

const getOB = members => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = members.filter(person => person.group === "OB");
            resolve(data);
        }, 500);
    });
}

getOnline(members).then(getOB).then(console.log)
getYB(members).then(getOffline).then(console.log)

// 이런 식으로 써도 됨
getOnline(members).then(result => getOB(result)).then(result => console.log(result));