const auth = require("../services/auth.services");
const createError = require("http-errors");

class AuthController {
  static register = async (req, res, next) => {
    try {
      const user = await auth.register(req.body);
      res.status(200).json({
        status: true,
        message: "user created successfully",
        data: user,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };

  static login = async (req, res, next) => {
    try {
      const data = await auth.login(req.body);
      res.status(200).json({
        status: true,
        message: "login successful",
        data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };

  static all = async (req, res, next) => {
    try {
      const users = await auth.all();
      res.status(200).json({
        status: true,
        message: "All users",
        data: users,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
}

module.exports = AuthController;
