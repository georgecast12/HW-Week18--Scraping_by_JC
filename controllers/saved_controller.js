var db = require("../models");

exports.index = function(req, res) {
  res.render("/saved", {
    layout: "main",
    articles: dbSaved
  });
};
