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

async function getOnlineOB(members) {
    let onlineMembers = await getOnline(members);
    let onlineOB = await getOB(onlineMembers);
    console.log(onlineOB);
}

async function getOfflineYB(members) {
    let YBMembers = await getYB(members);
    let offlineYB = await getOffline(YBMembers);
    console.log(offlineYB);
}

getOnlineOB(members);
getOfflineYB(members);