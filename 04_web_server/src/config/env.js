require('dotenv').config();
const { get } = require('env-var');
const envs = {
  PORT: get('PORT').default(3000).asPortNumber(),   // Default port 3000 
  PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString() // Default public URL   
}
module.exports = {
    envs
}