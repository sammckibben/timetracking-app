const Pool = require("pg").Pool;

const pool = new Pool ( {

    host:     "localhost",
    port:      5432,
    user:     'sam',
    password: 'sam',
    database: 'task_tracker'

} )

module.exports = pool;