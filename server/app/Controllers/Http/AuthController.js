"use strict";

const User = use("App/Models/User");

class AuthController {
  async logIn({ request, auth }) {
    const { email, password } = request.all();

    const token = await auth.attempt(email, password);

    return token;
  }

  async register({ request }) {
    const data = request.only(["email", "password"]);

    await User.create(data);

    return this.logIn(...arguments);
  }
}

module.exports = AuthController;
