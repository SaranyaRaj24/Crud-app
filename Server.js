const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // Path to your JSON data file
const middlewares = jsonServer.defaults();

// Use default middleware (logger, static, cors, no-cache)
server.use(middlewares);

// Custom ID generation
server.use((req, res, next) => {
  if (req.method === "POST" && req.body) {
    req.body.id = generateCustomId(); // Function to generate custom ID
  }
  next();
});

// Function to generate custom ID
function generateCustomId() {
  return Math.floor(Math.random() * 1000000); // Example: Numeric ID
}

server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running on port 3000");
});
