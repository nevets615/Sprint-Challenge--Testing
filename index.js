const server = require('./server.js');

const port = process.env.PORT || 6000;
server.listen(port, () => {
  console.log("\n*** API running on port 6k ***\n");
});