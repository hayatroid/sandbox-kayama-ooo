import { Hono } from "hono";
import { cors } from "hono/cors";
import { PatternRouter } from "hono/router/pattern-router";

import ping from "./routes/ping";

const app = new Hono({ router: new PatternRouter() });

app.use(cors({ origin: "https://wiki.trap.jp" }));

app.route("/api/ping", ping);

export default app;
