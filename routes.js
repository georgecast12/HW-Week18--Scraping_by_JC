module.exports = function(app) {
  const application = require("./routes/application");
  const saved = require("./routes/saved");

  app.use("/", application);
  app.use("/saved", saved);

  //other routes..
};
