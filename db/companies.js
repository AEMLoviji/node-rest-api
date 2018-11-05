const Pool = require('pg').Pool;
const config = require('../app_config.json');


const pool = new Pool({
    user: config.dbConfig.user,
    host: config.dbConfig.host,
    database: config.dbConfig.database,
    password: config.dbConfig.password,
    port: config.dbConfig.port,
});

const getCompanies = (request, response) => {
    pool.query('SELECT * FROM companies ORDER BY "ID" ASC', (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    })
}

const getCompanyById = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query('SELECT * FROM companies WHERE "ID" = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    })
}

const createCompany = (request, response) => {
    const { name, email } = request.body;

    pool.query('INSERT INTO companies (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(201).send(`Company added with ID: ${result.insertId}`);
    })
}

const updateCompany = (request, response) => {
    const id = parseInt(request.params.id);
    const { name, email } = request.body;

    pool.query(
        'UPDATE companies SET name = $1, email = $2 WHERE "ID" = $3',
        [name, email, id],
        (error, results) => {
            if (error) {
                throw error;
            }
            response.status(200).send(`Company modified with ID: ${id}`);
        }
    )
}

const deleteCompany = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query('DELETE FROM companies WHERE "ID" = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).send(`Company deleted with ID: ${id}`);
    })
}

module.exports = {
    getCompanies,
    getCompanyById,
    createCompany,
    updateCompany,
    deleteCompany,
}