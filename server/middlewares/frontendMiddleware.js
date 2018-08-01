module.exports = (app, options) => {
    const addProdMiddlewares = require('./addProdMiddlewares');
    addProdMiddlewares(app, options);
    return app;
};
