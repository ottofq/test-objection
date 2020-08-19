import { Model } from "objection";
import Rating from "./Rating";

class Menu extends Model {
  static get tableName() {
    return "menus";
  }

  static get relationMappings() {
    return {
      ratings: {
        relation: Model.HasManyRelation,
        modelClass: Rating,
        join: {
          from: "menus.id",
          to: "ratings.menu_id",
        },
      },
    };
  }
}
export default Menu;
