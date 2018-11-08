const pg = require('pg');

const client = new pg.Client('postgres://localhost/node_postgres_demo');

client.connect((err) => {
	console.log(err);
});
