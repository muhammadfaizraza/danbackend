const ErrorHandler = require("../utils/Errorhandler.js");
const catchAsyncErrors = require("./catchAsyncErrors.js");
const jwt = require("jsonwebtoken");
const User = require("../model/userModel");
exports.isAuthenticated = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return next(new ErrorHandler("Please Login to Access This Resource", 400));
  }

  const decodeddata = jwt.verify(token, process.env.JWT_SECRETS);

  req.user = await User.findById(decodeddata.id);
  next();
});
