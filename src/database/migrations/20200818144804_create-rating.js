exports.up = function (knex) {
  return knex.schema.createTable("ratings", (table) => {
    table.increments("id").primary();
    table.integer("starter_course").notNullable();
    table.integer("protein").notNullable();
    table.integer("accompany").notNullable();
    table.integer("garnish").notNullable();
    table.integer("dessert").notNullable();
    table.string("comment").notNullable();

    table
      .integer("user_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");

    table
      .integer("menu_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("menus")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("ratings");
};
