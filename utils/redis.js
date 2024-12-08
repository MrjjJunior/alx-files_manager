import { createClient } from 'redis'; 

const client = createClient();

client.on('connect', () => {l
  console.log('Redis client connected to the server');
})

client.on('error', (err) => {
  console.error(`Redis client not connected to the server: ${err.message}`);
})

/**
class RedisClient {
  client.on('connect', () => {
    console.log('Connected to Redis');
  });
}

function isAlive () => {
    if client === connected{
        return true
    }
    return false
}
*/