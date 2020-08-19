import { Model } from "objection";
import User from "./User";
import Menu from "./Menu";

class Rating extends Model {
  static get tableName() {
    return "ratings";
  }
  static get relationMappings() {
    return {
      users: {
        relation: Model.HasManyRelation,
        modelClass: User,
        join: {
          from: "ratings.user_id",
          to: "users.id",
        },
      },
      menus: {
        relation: Model.HasManyRelation,
        modelClass: Menu,
        join: {
          from: "ratings.user_id",
          to: "menus.id",
        },
      },
    };
  }
}
export default Rating;
