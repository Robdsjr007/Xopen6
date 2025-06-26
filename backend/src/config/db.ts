import { config } from "dotenv";
import { neon } from "@neondatabase/serverless";

config();

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL não está definida nas variáveis de ambiente.");
}

const sql = neon(databaseUrl);

export { sql };