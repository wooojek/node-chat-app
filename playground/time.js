const moment = require('moment');

const createdAt = 1234;
const date = moment(createdAt);

const someTimestamp = moment().valueOf();

console.log(someTimestamp);

console.log(date.format('h:mm a'));