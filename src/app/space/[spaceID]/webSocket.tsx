import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();

let connectedUsers: Map<string, string> = new Map();

let textOnSpaces: Map<string, string> = new Map();

const io = new Server(httpServer, {
  cors: { origin: "*", methods: ["GET", "POST"] },
});

io.on("connection", async (socket) => {
  socket.on("join space", (path: string, callback: any) => {
    console.log(socket.id + "joined " + " Space " + path);
    socket.join(path);
    connectedUsers.set(socket.id, path);

    if (textOnSpaces.get(path)) {
      callback(textOnSpaces.get(path));
    }
  });

  socket.on("disconnect", () => {
    console.log("Disconnected");
    connectedUsers.delete(socket.id);
    console.log(connectedUsers);
  });

  socket.on("new text", (text: string, path: string) => {
    textOnSpaces.set(path, text);
    socket.to(path).emit("update text", textOnSpaces.get(path));
  });
});

httpServer.listen(3001, () => {
  console.log("Server is listening on the port 3001");
});
