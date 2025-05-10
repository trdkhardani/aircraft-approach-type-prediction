const redis = require('redis')

const redisClient = redis.createClient({
    url: process.env.REDIS_URI
});

redisClient.on("error", (err) =>
    console.error(`Redis Client Error ${err}`)
)

async function redisConnect(){

    try {
        if (!redisClient.isOpen) await redisClient.connect();
        await redisClient.ping();
        console.log("Connected to Redis");
    } catch (err) {
        console.error("Redis connection failed:", err);
        // Optionally fall back or exit early
    }
}


module.exports = {
    redisClient, 
    redisConnect
}