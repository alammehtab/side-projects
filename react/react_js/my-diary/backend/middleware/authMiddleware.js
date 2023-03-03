const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  // check header cz token is put there, if token is there and it starts with Bearer
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // get token by removing Bearer string
      token = req.headers.authorization.split(" ")[1];

      // verify the token, so that to get the user id from it, that we've passed while creating jwt, we could've put anything
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

      // now get the user from the decoded token
      // put everything in req.user but minus password from it .select("-password")
      req.user = await User.findById(decodedToken.id).select("-password");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized");
    }
  }

  // if there's no token in headers.authorization
  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module.exports = { protect };
