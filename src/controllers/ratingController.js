import Rating from "../models/Rating";

class RatingController {
  async create(req, res) {
    const {
      starter_course,
      protein,
      accompany,
      garnish,
      dessert,
      comment,
      user_id,
      menu_id,
    } = req.body;

    const rating = await Rating.query().insert({
      starter_course,
      protein,
      accompany,
      garnish,
      dessert,
      comment,
      user_id,
      menu_id,
    });

    return res.json(rating);
  }
  async list(req, res) {
    const { menu_id } = req.params;

    const ratings = await Rating.query()
      .select()
      .where("ratings.menu_id", "=", menu_id);

    return res.json(ratings);
  }

  async avg(req, res) {
    const { menu_id } = req.params;

    const menu = await Rating.query()
      .avg({ starter_course: ["starter_course"] })
      .avg({ protein: ["protein"] })
      .avg({ accompany: ["accompany"] })
      .avg({ garnish: ["garnish"] })
      .avg({ dessert: ["dessert"] })
      .where("ratings.menu_id", "=", menu_id);

    return res.json(menu);
  }

  async listComments(req, res) {
    const { menu_id } = req.params;

    const ratings = await Rating.query()
      .select(["ratings.comment"])
      .where("ratings.id", "=", menu_id);

    return res.json(ratings);
  }
}

export default new RatingController();
