import net from "node:net";
import { randomUUID } from "node:crypto";

const users = new Map();

const notifySubscribers = (socketId, data) => {
  ;[...users.values()]
    .filter(userSocket => userSocket.id !== socketId)
    .forEach(userSocket => userSocket.write(data))
}

const server = net.createServer((socket) => {
  socket.pipe(socket);
});

server.listen(3000, () => console.log("Server is runnig at 3000"));

server.on("connection", (socket) => {
  socket.id = randomUUID();
  console.log("new connection!", socket.id);
  users.set(socket.id, socket);
});
