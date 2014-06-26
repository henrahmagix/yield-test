var co = require('co');

function sleepSync (delay, message) {
    setTimeout(function () {
        console.log(message);
    }, delay);
};

function sleepAsync (delay, message) {
    return function (callback) {
        setTimeout(function () {
            console.log(message);
            callback(null, true);
        }, delay);
    };
};

module.exports = function () {
    co(function *() {
        console.log('start');
        yield sleepAsync(1000, 'async');
        sleepSync(1000, 'sync');
        console.log('end');
    })();
};
