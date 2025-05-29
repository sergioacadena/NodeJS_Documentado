/* require('dotenv').config(); */

import env from 'dotenv'
import  envar from 'env-var';
export const envs = {
  PORT: envar.get('PORT').default(3000).asPortNumber(),   // Default port 3000 
  PUBLIC_PATH: envar.get('PUBLIC_PATH').default('public').asString() // Default public URL   
}
