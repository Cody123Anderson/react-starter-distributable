var emailRoutes = require('./email-routes');
var viewRoutes = require('./view-routes');

module.exports = (app) => {
  emailRoutes(app);
  viewRoutes(app);
};
