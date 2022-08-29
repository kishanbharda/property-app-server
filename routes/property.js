const express = require("express");
const Router = express.Router();
const PropertyCtrl = require("../controllers/property");

Router.post("/property", PropertyCtrl.createProperty);
Router.get("/properties", PropertyCtrl.getAllProperties);
Router.get("/properties/featured", PropertyCtrl.getFeaturedProperties);
Router.get("/properties/trending", PropertyCtrl.getTrendingProperties);
Router.get("/properties/:slug", PropertyCtrl.getPropertyBySlug);
Router.post("/properties/featured/:id", PropertyCtrl.addToFeatured);
Router.delete("/properties/featured/:id", PropertyCtrl.removeFromFeatured);
Router.post("/properties/trending/:id", PropertyCtrl.addToTrending);
Router.delete("/properties/trending/:id", PropertyCtrl.removeFromTrending);

module.exports = Router;