var os = require('os');
var Brakes = require('brakes');

const globalStats = Brakes.getGlobalStats();

module.exports = function (options) {
    options = options || {};

    var url = options.url || '/hystrix.stream';

    return function (ctx, next) {
        if (url === ctx.url) {
            ctx.response.set({
                'Content-Type': 'text/event-stream;charset=UTF-8',
                'Cache-Control': 'no-cache, no-store, max-age=0, must-revalidate',
                'Pragma': 'no-cache'
            });
            return ctx.body = globalStats.getHystrixStream();
        }

        return next();
    }
};