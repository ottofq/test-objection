exports.up = function (knex) {
  return knex.schema.createTable("menus", (table) => {
    table.increments("id").primary().notNullable();
    table.string("starter_course").notNullable();
    table.string("protein").notNullable();
    table.string("accompany").notNullable();
    table.string("garnish").notNullable();
    table.string("dessert").notNullable();
    table.datetime("created_at").defaultTo(knex.fn.now());
    table.datetime("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("menus");
};
