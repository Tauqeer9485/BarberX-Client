// Simple sqlite3 wrapper (Promise-based)

import sqlite3 from "sqlite3";
import path from "path";
import { fileURLToPath } from "url";

// resolve db path relative to project root/src
// const __filename = typeof __filename !== "undefined" ? __filename : fileURLToPath(import.meta.url);
// const __dirname = typeof __dirname !== "undefined" ? __dirname : path.dirname(__filename);
// const dbPath = path.join(__dirname, "../../database.sqlite");

// Fix __filename and __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, "../../database.sqlite");

sqlite3.verbose();

let dbInstance = null;

export function getDB() {
  if (dbInstance) return dbInstance;

  dbInstance = new sqlite3.Database(dbPath);

  // init tables once
  // dbInstance.serialize(() => {
  //   dbInstance.run(`
  //     CREATE TABLE IF NOT EXISTS users (
  //       id INTEGER PRIMARY KEY AUTOINCREMENT,
  //       fullName TEXT NOT NULL,
  //       email TEXT UNIQUE,
  //       phone TEXT UNIQUE,
  //       password TEXT NOT NULL,
  //       role TEXT CHECK(role IN ('customer','owner')) NOT NULL
  //     )
  //   `);
  // });

  dbInstance.serialize(() => {
    dbInstance.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        fullname TEXT NOT NULL,
        email TEXT UNIQUE,
        phone TEXT UNIQUE,
        password TEXT NOT NULL,
        role TEXT CHECK(role IN ('customer', 'owner')) NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS owners (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        ownerId INTEGER NOT NULL,
        salonName TEXT NOT NULL,
        address TEXT NOT NULL,
        barbers TEXT, -- store JSON string of barbers if not normalized
        FOREIGN KEY (ownerId) REFERENCES users(id) ON DELETE CASCADE
      );
    `);
  });

  return dbInstance;
}

export function run(sql, params = []) {
  const db = getDB();
  return new Promise((resolve, reject) => {
    db.run(sql, params, function (err) {
      if (err) return reject(err);
      resolve({ id: this.lastID, changes: this.changes });
    });
  });
}

export function get(sql, params = []) {
  const db = getDB();
  return new Promise((resolve, reject) => {
    db.get(sql, params, (err, row) => {
      if (err) return reject(err);
      resolve(row);
    });
  });
}

export function all(sql, params = []) {
  const db = getDB();
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
}
