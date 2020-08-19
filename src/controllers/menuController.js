import Menu from "../models/Menu";

class MenuController {
  async create(req, res) {
    const { starter_course, protein, accompany, garnish, dessert } = req.body;

    const menu = await Menu.query().insert({
      starter_course,
      protein,
      accompany,
      garnish,
      dessert,
    });

    return res.json(menu);
  }
  async list(req, res) {
    const menus = await Menu.query().select();

    return res.json(menus);
  }
  async listRating(req, res) {
    const { menu_id } = req.params;

    const menus = await Menu.query()
      .select(["menus.*", "ratings.*"])
      .join("ratings", "ratings.menu_id", "menus.id")
      .where("menus.id", "=", menu_id);

    return res.json(menus);
  }
}

export default new MenuController();
