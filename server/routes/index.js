module.exports = app => {

    // Base URLS
    app.use('/api/recipes', require('./recipes.routes.js'))
    app.use('/api/auth', require('./auth.routes.js'))
}