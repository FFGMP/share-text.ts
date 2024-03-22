"use client";

import { DefaultEventsMap } from "@socket.io/component-emitter";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Socket } from "socket.io";
import { io } from "socket.io-client";

const socket = io("ws://localhost:3001");

export function TextArea({ path }: { path: string }) {
  const [textoTextArea, setTextoTextArea] = useState("");

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connect");
    });

    socket.emit("join space", path, (value: string) => {
      setTextoTextArea(value);
    });

    socket.on("update text", (value: string) => {
      setTextoTextArea(value);
    });
  }, []);

  function textoToServer(
    e: ChangeEvent<HTMLTextAreaElement>,
    socket: any,
    path: string,
    textoTextArea: string,
  ) {
    socket.emit("new text", e.target.value, path);
  }

  return (
    <textarea
      className="h-full w-full resize-none dark:bg-neutral-900"
      autoFocus
      value={textoTextArea}
      onChange={(e) => {
        setTextoTextArea(e.target.value);
        textoToServer(e, socket, path, textoTextArea);
      }}
    ></textarea>
  );
}
