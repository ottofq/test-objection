import knex from "knex";
import config from "../../knexfile";
import { Model } from "objection";

const connection = knex(config);
Model.knex(connection);

export default connection;
