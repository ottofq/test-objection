import { Model } from "objection";
import Rating from "./Rating";

class User extends Model {
  static get tableName() {
    return "users";
  }

  static get relationMappings() {
    return {
      ratings: {
        relation: Model.HasManyRelation,
        modelClass: Rating,
        join: {
          from: "users.id",
          to: "ratings.user_id",
        },
      },
    };
  }
}
export default User;
