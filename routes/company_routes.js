var companiesRepo = require('../db/companies');

exports.assignRoutes = function (app) {
    app.get('/companies/', companiesRepo.getCompanies)
    app.get('/companies/:id', companiesRepo.getCompanyById)
    app.post('/companies', companiesRepo.createCompany)
    app.put('/companies/:id', companiesRepo.updateCompany)
    app.delete('/companies/:id', companiesRepo.deleteCompany)
}