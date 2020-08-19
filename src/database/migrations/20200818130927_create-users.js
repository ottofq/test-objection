exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary().notNullable();
    table.string("name").notNullable();
    table.string("email").notNullable().unique();
    table.datetime("created_at").defaultTo(knex.fn.now());
    table.datetime("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
