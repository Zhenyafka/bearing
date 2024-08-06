const { Pool } = require('pg');

const pool = new Pool({
    user: 'root',
    host: 'localhost',
    database: 'bearing',
    password: 'root',
    port: 5432,
});

async function getBrands() {
    const query = 'SELECT id, name FROM brand'
    const result = await pool.query(query);
    return result.rows;
}

async function getBearings() {
    const query = `
        SELECT bearings.name AS name,
               brand.name    AS brand,
               bearings.count AS count,
               bearings.price AS price,
               bearings.inner_diameter,
               bearings.outer_diameter,
               bearings.height,
               type.name AS type,
               country.name AS country
        FROM bearings
                 JOIN brand
                      ON bearings.brand_id = brand.id
                 JOIN type ON bearings.type_id = type.id
                 JOIN country ON bearings.country_id = country.id
  `;
    const result = await pool.query(query);
    return result.rows;
}

module.exports = {
    getBrands,
    getBearings,
};