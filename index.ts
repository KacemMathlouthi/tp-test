const server = Bun.serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);
    const path = url.pathname === "/" ? "/index.html" : url.pathname;

    if (path === "/todo.js") {
      return new Response(Bun.file("./projet/src/todo.js"), {
        headers: { "Content-Type": "application/javascript" },
      });
    }

    const file = Bun.file(`./projet/public${path}`);
    if (await file.exists()) {
      return new Response(file);
    }
    return new Response("Not Found", { status: 404 });
  },
});

console.log(`Server running at http://localhost:${server.port}`);
