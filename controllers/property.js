const Property = require("../models/property");

const createProperty = async (req, res, next) => {
  try {
    const newProperty = new Property(req.body);
    const data = await newProperty.save();
    if (data) {
      return res.status(200).json({
        success: true,
        message: "Property created successfully",
        data: data,
        error: null,
      });
    } else {
      return res.status(200).json({
        success: false,
        message: "Failed to create Property",
        data: null,
        error: null
      });
    }
  } catch (error) {
    next(error);
  }
}

const getAllProperties = async (req, res, next) => {
  try {
    const data = await Property.find({}).select("_id slug name location rate image");
    if (data) {
      return res.status(200).json({
        success: true,
        message: "Property fetched successfully",
        data: {
          properties: data
        },
        error: null,
      })
    } else {
      return res.status(200).json({
        success: false,
        message: "Failed to fetch properties",
        data: null,
        error: null,
      });
    }
  } catch (error) {
    next(error);
  }
}

const getSingleProperty = async (req, res, next) => {
  try {
    const data = await Property.findById(req.params.id);
    if (data) {
      return res.status(200).json({
        success: true,
        message: "Property found successfully",
        data: {
          property: data,
        },
        error: null,
      });
    } else {
      return res.status(200).json({
        success: false,
        message: "Property not found",
        data: null,
        error: null,
      });
    }
  } catch (error) {
    next(error);
  }
}

const getPropertyBySlug = async (req, res, next) => {
  try {
    const data = await Property.findOne({ slug: req.params.slug });
    if (data) {
      return res.status(200).json({
        success: true,
        message: "Property fetched successfully",
        data: {
          property: data,
        },
        error: null,
      });
    } else {
      return res.status(200).json({
        success: false,
        message: "Property not found",
        data: null,
        error: null,
      });
    }
  } catch (error) {
    next(error);
  }
}

const addToFeatured = async (req, res, next) => {
  try {
    const data = await Property.findByIdAndUpdate(req.params.id, {
      featured: true,
    }, {
      new: true
    });
    if (data) {
      return res.status(200).json({
        success: true,
        message: "Property added to featured list",
        data: {
          property: data
        },
        error: null,
      })
    } else {
      return res.status(200).json({
        success: false,
        message: "Failed to add property info featured list",
        data: null,
        error: null,
      });
    }
  } catch (error) {
    next(error);
  }
}

const removeFromFeatured = async (req, res, next) => {
  try {
    const data = await Property.findByIdAndUpdate(req.params.id, {
      featured: false,
    }, { new: true });
    if (data) {
      return res.status(200).json({
        success: true,
        message: "Property removed from featured List",
        data: {
          property: data,
        },
        error: null,
      })
    } else {
      return res.status(200).json({
        success: false,
        message: "Failed to remove property from the featured list",
        data: null,
        error: null,
      })
    }
  } catch (error) {
    next(error);
  }
}

const addToTrending = async (req, res, next) => {
  try {
    const data = await Property.findByIdAndUpdate(req.params.id, {
      trending: true
    }, { new: true });
    if (data) {
      return res.status(200).json({
        success: true,
        message: "Property added to trending list",
        data: {
          property: data,
        },
        error: null,
      })
    } else {
      return res.status(200).json({
        success: false,
        message: "Failed to add property into trending list",
        data: null,
        error: null,
      })
    }
  } catch (error) {
    next(error);
  }
}

const removeFromTrending = async (req, res, next) => {
  try {
    const data = await Property.findByIdAndUpdate(req.params.id, {
      trending: false,
    }, { new: true });
    if (data) {
      return res.status(200).json({
        success: true,
        message: "Property removed from trending list",
        data: {
          property: data,
        },
        error: null,
      })
    } else {
      return res.status(200).json({
        success: false,
        message: "Failed to remove property from the trending list",
        data: null,
        error: null,
      });
    }
  } catch (error) {
    next(error);
  }
}

const getFeaturedProperties = async (req, res, next) => {
  try {
    const data = await Property.find({ featured: true }).select("_id name slug location category image rate");
    if (data) {
      return res.status(200).json({
        success: true,
        message: "Featured properties fetched successfully",
        data: {
          properties: data,
        },
        error: null,
      });
    } else {
      return res.status(200).json({
        success: false,
        message: "Failed to fetch featured properties",
        data: null,
        error: null,
      });
    }
  } catch (error) {
    next(error);
  }
}

const getTrendingProperties = async (req, res, next) => {
  try {
    const data = await Property.find({ trending: true }).select("_id name slug location category image rate");
    if (data) {
      return res.status(200).json({
        success: true,
        message: "Trending properties fetched successfully",
        data: {
          properties: data,
        },
        error: null,
      })
    } else {
      return res.status(200).json({
        success: false,
        message: "Failed to fetch trending properties",
        data: null,
        error: null,
      })
    }
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createProperty,
  getAllProperties,
  getSingleProperty,
  getPropertyBySlug,
  addToFeatured,
  removeFromFeatured,
  addToTrending,
  removeFromTrending,
  getFeaturedProperties,
  getTrendingProperties,
}