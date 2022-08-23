import { createPool } from "mysql2/promise";

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '2005',
    port: 3306,
    database: 'commercedb'
})

export { pool };