/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://Interview%20Sim_owner:nDxYFk4K1UdM@ep-quiet-credit-a6ds2ixh.us-west-2.aws.neon.tech/Interview%20Sim?sslmode=require',
    }
  };