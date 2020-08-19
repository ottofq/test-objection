import User from "../models/User";

class UserController {
  async create(req, res) {
    const { name, email } = req.body;

    const user = await User.query().insert({ name, email });

    return res.json(user);
  }
  async list(req, res) {
    const users = await User.query().select();

    return res.json(users);
  }
  async listRating(req, res) {
    const { user_id } = req.params;

    const user = await User.query()
      .select(["users.*", "ratings.*"])
      .join("ratings", "ratings.user_id", "users.id")
      .where("users.id", "=", user_id);

    return res.json(user);
  }
}

export default new UserController();
