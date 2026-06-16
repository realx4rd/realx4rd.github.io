---
title: "Databases & data modeling"
focus: "Store data that lasts — relational databases, SQL, and sensible schemas."
hours: 44
tech: ["PostgreSQL", "SQL", "Supabase"]
objectives:
  - "Explain what a relational database is and when it is the right tool for the job."
  - "Write SQL for every CRUD operation and understand what each clause does."
  - "Model data with tables, primary keys, foreign keys, and one-to-many or many-to-many relationships."
  - "Connect a PostgreSQL database to a Node API and replace in-memory storage with real persistence."
  - "Use Supabase to host a Postgres database and protect it with parameterised queries and row-level security."
days:
  - n: 1
    topic: "Relational concepts + SQL basics"
    learn: "What a relational database is, how tables relate through keys, and the four fundamental SQL statements: SELECT, INSERT, UPDATE, and DELETE."
    build: "Create a small table in a local Postgres database and run all four CRUD statements against it."
    assignment: "Design a two-column table for a list of something you care about (books, cities, recipes), insert five rows, update one, delete one, and SELECT the result — paste the final SELECT output as your answer."
    time: "~8h"
    details: "A relational database stores data in tables — rows and columns, like a very powerful spreadsheet — and keeps those tables consistent by enforcing rules about what can be stored. SQL (Structured Query Language) is the language you use to talk to it. The four core statements map directly to the operations your API already does in memory: SELECT reads, INSERT creates, UPDATE changes, DELETE removes. Everything else in the module builds on these four. Start here and do not rush."
    steps:
      - "Install PostgreSQL locally (postgresql.org/download) or use the Supabase SQL editor if you prefer — both work for today."
      - "Open psql (the Postgres command-line client) and run \\l to list databases, then CREATE DATABASE academy; to make your own."
      - "Connect to it: \\c academy"
      - "Create your first table: CREATE TABLE books (id SERIAL PRIMARY KEY, title TEXT NOT NULL, author TEXT NOT NULL);"
      - "Insert three rows: INSERT INTO books (title, author) VALUES ('Designing Data-Intensive Applications', 'Kleppmann'), ('The Pragmatic Programmer', 'Hunt & Thomas'), ('Clean Code', 'Martin');"
      - "Read them back: SELECT * FROM books;"
      - "Update one row: UPDATE books SET title = 'Pragmatic Programmer, The' WHERE id = 2;"
      - "Delete one row: DELETE FROM books WHERE id = 3; then SELECT * FROM books; to confirm."
    stuck: "psql refuses to connect? Make sure the Postgres server is actually running — on macOS run brew services list | grep postgresql; on Windows check Services in Task Manager."
    resources:
      - label: "PostgreSQL Tutorial — Getting started"
        url: "https://www.postgresqltutorial.com/postgresql-getting-started/"
      - label: "SQLBolt — Interactive SQL lessons"
        url: "https://sqlbolt.com/"
      - label: "PostgreSQL Tutorial — PostgreSQL SELECT"
        url: "https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-select/"
  - n: 2
    topic: "Data modeling — keys and relationships"
    learn: "Primary keys, foreign keys, one-to-many and many-to-many relationships, and the idea of normalisation: storing each fact exactly once."
    build: "Model a simple blog: a users table and a posts table linked by a foreign key, then query both tables together."
    assignment: "Design a schema for a tiny bookshelf app: users, books, and a reading_list join table that links them. Write the three CREATE TABLE statements with correct primary and foreign keys, and describe each relationship in one sentence each."
    time: "~9h"
    details: "Storing everything in one giant table is a natural first instinct — and a reliable way to create a mess. Normalisation means separating distinct entities into their own tables and linking them with keys. A primary key uniquely identifies every row in a table; a foreign key in one table points to the primary key in another, enforcing that the relationship is real. One-to-many (one user, many posts) is the most common relationship; many-to-many (many users can have many books) needs a third 'join' table in the middle. Getting your schema right before writing any application code saves you painful migrations later."
    steps:
      - "In your academy database, create a users table: CREATE TABLE users (id SERIAL PRIMARY KEY, email TEXT UNIQUE NOT NULL, name TEXT NOT NULL);"
      - "Create a posts table with a foreign key: CREATE TABLE posts (id SERIAL PRIMARY KEY, user_id INT REFERENCES users(id) ON DELETE CASCADE, title TEXT NOT NULL, body TEXT, created_at TIMESTAMPTZ DEFAULT NOW());"
      - "Insert one user: INSERT INTO users (email, name) VALUES ('alex@example.com', 'Alex');"
      - "Insert two posts for that user: INSERT INTO posts (user_id, title, body) VALUES (1, 'First post', 'Hello world'), (1, 'Second post', 'Still here');"
      - "Try to insert a post with a non-existent user_id — Postgres should reject it with a foreign key violation. This is the constraint working correctly."
      - "Create a tags table and a post_tags join table to model a many-to-many relationship between posts and tags."
      - "Sketch a simple diagram (paper is fine) showing the three tables and the arrows between their keys."
    stuck: "Foreign key constraint errors when inserting? The referenced row must exist first — insert the parent (user) before the child (post). Check the order of your INSERT statements."
    resources:
      - label: "PostgreSQL Tutorial — Primary key"
        url: "https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-primary-key/"
      - label: "PostgreSQL Tutorial — Foreign key"
        url: "https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-foreign-key/"
      - label: "SQLBolt — Lessons 11–12 (queries with multiple tables)"
        url: "https://sqlbolt.com/lesson/selecting_data_from_multiple_tables"
  - n: 3
    topic: "Joins and more powerful queries"
    learn: "Filtering with WHERE, sorting with ORDER BY, aggregating with GROUP BY and COUNT, and combining tables with INNER JOIN and LEFT JOIN."
    build: "Write queries that answer real questions: 'who wrote the most posts?', 'show me all posts by a specific user', 'list users with no posts yet'."
    assignment: "Using your users and posts tables, write four queries: (1) all posts by a specific user; (2) the total post count per user using GROUP BY; (3) users who have zero posts (hint: LEFT JOIN); (4) all posts created in the last 7 days. Paste the SQL and one row of sample output for each."
    time: "~9h"
    details: "SELECT * FROM one table only gets you so far. Real applications ask questions that span multiple tables — and SQL answers them cleanly with JOINs. An INNER JOIN returns only rows that match in both tables; a LEFT JOIN returns every row from the left table and NULL where there is no match on the right, which is how you find 'things with no related things'. GROUP BY collapses multiple rows into one summary row per group, enabling aggregate functions like COUNT, SUM, and AVG. These are the tools that turn raw rows into answers."
    steps:
      - "Run a basic WHERE filter: SELECT * FROM posts WHERE user_id = 1;"
      - "Sort the results: SELECT * FROM posts ORDER BY created_at DESC;"
      - "Join users and posts: SELECT users.name, posts.title FROM posts INNER JOIN users ON posts.user_id = users.id;"
      - "Count posts per user: SELECT users.name, COUNT(posts.id) AS post_count FROM users INNER JOIN posts ON posts.user_id = users.id GROUP BY users.id, users.name;"
      - "Find users with no posts using a LEFT JOIN: SELECT users.name FROM users LEFT JOIN posts ON posts.user_id = users.id WHERE posts.id IS NULL;"
      - "Filter by date: SELECT * FROM posts WHERE created_at > NOW() - INTERVAL '7 days';"
      - "Add a LIMIT: SELECT * FROM posts ORDER BY created_at DESC LIMIT 5; — useful for pagination."
    stuck: "GROUP BY error about 'column must appear in GROUP BY clause'? Include every non-aggregate column from your SELECT list in the GROUP BY clause — Postgres is strict about this, and it is correct to be."
    resources:
      - label: "SQLBolt — Lessons 6–12 (JOINs and aggregates)"
        url: "https://sqlbolt.com/"
      - label: "PostgreSQL Tutorial — Joins"
        url: "https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-joins/"
      - label: "PostgreSQL Tutorial — GROUP BY"
        url: "https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-group-by/"
  - n: 4
    topic: "Connect a database to your Node API"
    learn: "How to connect a Node.js application to Postgres using the pg library (or Supabase's JS client), read rows in a route handler, and replace in-memory arrays with real persistence."
    build: "Wire up a /users and /posts route that reads from and writes to your Postgres database, replacing any in-memory storage."
    assignment: "Take the REST API from a previous module (or start a minimal new one) and connect it to Postgres. Implement at least GET all, GET one, POST, and DELETE — each reading from or writing to the database. Test all four with curl or a REST client and paste the commands and responses."
    time: "~9h"
    details: "An in-memory array is fine for learning, but it resets every time you restart the server. A real database persists that data and lets multiple server processes share it. The pg package is the standard Postgres client for Node — you create a Pool (a managed set of reusable connections), and call pool.query(sql, values) in each route handler. The key rule: the SQL goes inside pool.query, not in string concatenation. That single discipline is what separates safe code from code with SQL injection vulnerabilities — which is exactly what Day 5 addresses."
    steps:
      - "In your API project, install the Postgres client: npm install pg"
      - "Create a db.js file that exports a connection pool: import { Pool } from 'pg'; export const pool = new Pool({ connectionString: process.env.DATABASE_URL });"
      - "Add DATABASE_URL to a .env file pointing at your local Postgres instance, for example: postgres://localhost:5432/academy. Add .env to .gitignore immediately."
      - "In a route handler, import pool and run: const { rows } = await pool.query('SELECT * FROM users'); res.json(rows);"
      - "Add a parameterised INSERT route for POST /users — use pool.query('INSERT INTO users (email, name) VALUES ($1, $2) RETURNING *', [email, name]);"
      - "Add GET /users/:id using WHERE id = $1 and return 404 if rows.length === 0."
      - "Test all routes with curl: curl http://localhost:3000/users and curl -X POST http://localhost:3000/users -H 'Content-Type: application/json' -d '{\"email\":\"b@example.com\",\"name\":\"Bo\"}'."
    stuck: "Pool throws 'ECONNREFUSED'? The Postgres server is not running or the DATABASE_URL is wrong. Run psql -U postgres on the command line — if that fails, the server itself is the problem."
    resources:
      - label: "PostgreSQL Tutorial — node-postgres (pg) guide"
        url: "https://www.postgresqltutorial.com/postgresql-nodejs/connect/"
      - label: "Supabase — Connecting to your database"
        url: "https://supabase.com/docs/guides/database/overview"
      - label: "Supabase — JavaScript client quickstart"
        url: "https://supabase.com/docs"
  - n: 5
    topic: "Supabase in practice + security"
    learn: "How to host a Postgres database on Supabase, why parameterised queries prevent SQL injection, and what row-level security (RLS) means and when you need it."
    build: "Move your database to Supabase, update your connection string, enable RLS on one table, and verify that a direct API request cannot read another user's data."
    assignment: "Push your project database to Supabase. Enable row-level security on your main data table and write at least one policy. Add a comment to every pool.query call explaining why the values are passed as parameters and not concatenated into the SQL string. Commit and push."
    time: "~9h"
    details: "SQL injection is one of the oldest and most damaging attacks on the web — it happens when user-supplied input is dropped directly into a SQL string, letting an attacker rewrite the query. Parameterised queries ($1, $2 placeholders) make injection structurally impossible because the driver always treats parameter values as data, never as SQL. Supabase adds one more layer: row-level security (RLS) lets you write Postgres policies that restrict which rows each authenticated user can see or modify, so even if someone calls your API with a valid token they can only touch their own data. Understanding these two things — parameterised queries and RLS — separates a developer who ships data to the right person from one who leaks everyone's data to anyone who asks."
    steps:
      - "Create a free Supabase project at supabase.com. In the Supabase dashboard, open the SQL editor and verify the same tables you built locally exist (or recreate them using the SQL editor)."
      - "Copy the connection string from Project Settings > Database > Connection string (URI format). Paste it as DATABASE_URL in your .env."
      - "Restart your server and rerun your curl tests — all routes should work identically, now against the hosted database."
      - "In the Supabase dashboard, go to Authentication > Policies, select your posts table, and enable RLS. An empty RLS policy means no one can read the table — this is intentional."
      - "Add a policy: allow all authenticated users to SELECT their own posts. The Supabase UI walks you through the SQL: CREATE POLICY \"own posts\" ON posts FOR SELECT USING (auth.uid() = user_id);"
      - "Review every pool.query call in your project. If any SQL string uses + or template literals to insert user input, rewrite it to use $1 placeholders."
      - "Try a simple injection by passing id=1 OR 1=1 as a query param in a poorly written route (on a local test copy), then observe how the parameterised version handles it safely."
    stuck: "RLS is blocking legitimate queries? When RLS is on, there is no default allow — you must write a policy for every operation (SELECT, INSERT, UPDATE, DELETE) you want to permit. Check the Supabase Policies tab to see what is currently allowed."
    resources:
      - label: "Supabase — Row level security"
        url: "https://supabase.com/docs/guides/database/overview"
      - label: "Supabase — Docs home"
        url: "https://supabase.com/docs"
      - label: "PostgreSQL Tutorial — Preventing SQL injection"
        url: "https://www.postgresqltutorial.com/"
project:
  title: "Give your API a real database"
  brief: "Add a persistent relational database to the REST API you built, with a sensible schema and at least one relationship between tables. Every CRUD operation must read from or write to Postgres — no in-memory fallback."
  deploy: "Supabase or a hosted Postgres"
  rubric:
    - "A normalised schema with at least one foreign-key relationship between tables"
    - "Full CRUD (create, read, update, delete) persists to the database — server restarts do not lose data"
    - "Every SQL query uses parameterised placeholders — no string-concatenated user input anywhere"
    - "A seed script or sample data file so reviewers can populate the database from scratch"
    - "A short schema diagram or written description explaining each table and its relationships"
milestone: false
proSkills: ["Debug-first reflex"]
resources:
  - label: "PostgreSQL Tutorial"
    url: "https://www.postgresqltutorial.com/"
  - label: "SQLBolt — Free interactive SQL lessons"
    url: "https://sqlbolt.com/"
  - label: "Supabase — Docs"
    url: "https://supabase.com/docs"
  - label: "Supabase — Database guide"
    url: "https://supabase.com/docs/guides/database/overview"
---

## The module in one sentence

A database is not a feature you add later — it is the foundation that turns a toy prototype into software that actually works, because **data that disappears when the server restarts is not data at all**.

## What we are really learning

Beginners often reach for a database too late, shoe-horning it into an architecture designed around arrays and objects. Or they reach for it too early, picking a complex ORM before they understand what it is abstracting. This module takes a third path: learn SQL first, understand the relational model second, then connect it to your existing code. By the time you add Supabase, you will know exactly what it is doing for you.

**Relational databases** store data in tables of rows and columns, and maintain consistency through rules (constraints) about what can be stored. SQL is the language that every major relational database understands — Postgres, MySQL, SQLite, and many others all speak a close dialect of it. Learning SQL once means you can talk to almost any database you will ever encounter in a professional setting.

**The modeling step is the most important one.** A badly designed schema is painful to fix after you have written application code on top of it. Spend time on Day 2 thinking about your entities and relationships before writing a single line of JavaScript. A ten-minute sketch on paper is worth two hours of migrations.

## SQL injection is not an advanced topic

You will hear "SQL injection" mentioned as a security concern, and it is — but avoiding it is not hard. The rule is simple: **never build SQL strings by concatenating user input**. Use parameterised queries (`$1`, `$2` placeholders) from the very first query you write. This module teaches that habit from Day 4 onward, not as a special "security day" add-on, because safe queries and readable queries are the same queries.

## AI as a schema reviewer, not a schema author

It is very easy to ask an AI to design your database schema for you. Do not. Designing the schema is the module — it is where the learning happens, and a schema you do not understand will confuse you for the rest of the project. Where AI is genuinely useful here: as a second pair of eyes after you have drafted your schema. Describe your tables and relationships and ask "do you see any normalisation problems or missing constraints?" That is using it to sharpen your thinking, not to skip it.
