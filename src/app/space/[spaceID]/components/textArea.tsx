"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Socket, io } from "socket.io-client";

export function TextArea({ path }: { path: string }) {
  const [textoTextArea, setTextoTextArea] = useState("");
  const [disconnected, setDisconnected] = useState(true);
  const socketRef = useRef<Socket>();

  useEffect(() => {
    const socket = io("ws://localhost:3001");
    socketRef.current = socket;

    socket.on("connect", () => {
      setDisconnected(false);
    });

    socket.emit("join space", path, (value: string) => {
      setTextoTextArea(value);
    });

    socket.on("update text", (value: string) => {
      setTextoTextArea(value);
    });

    socket.on("disconnect", () => {
      setDisconnected(true);
    });

    return () => {
      socket.off("connect");
      socket.off("update text");
      socket.off("disconnect");
      socket.disconnect();
    };
  }, [path]);

  function textoToServer(e: ChangeEvent<HTMLTextAreaElement>, path: string) {
    if (socketRef && socketRef.current) {
      socketRef.current.emit("new text", e.target.value, path);
    }
  }

  return (
    <div className="h-full">
      {disconnected ? (
        <div className="absolute right-9 top-2 rounded-md bg-red-400 p-2">
          <p className="">Disconnected</p>
        </div>
      ) : (
        ""
      )}
      <textarea
        className="h-full w-full resize-none dark:bg-neutral-900"
        autoFocus
        value={textoTextArea}
        maxLength={300000}
        onChange={(e) => {
          setTextoTextArea(e.target.value);
          textoToServer(e, path);
        }}
      ></textarea>
    </div>
  );
}
