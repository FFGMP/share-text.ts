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

function textoToServer(
  e: ChangeEvent<HTMLTextAreaElement>,
  socket: Socket<DefaultEventsMap, DefaultEventsMap>,
  path: string,
  textoTextArea: string,
  setTextoTextArea: Dispatch<SetStateAction<string>>,
) {
  if (textoTextArea !== e.target.value) {
    socket.emit("new text", e.target.value, path);
  }
}

export function TextArea({ path }: { path: string }) {
  const [textoTextArea, setTextoTextArea] = useState("");

  const socket = io("localhost:3001");

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connect");
    });

    socket.emit("join space", path, (value: string) => {
      setTextoTextArea(value);
    });

    socket.on("update text", (value: string) => {
      if (value !== textoTextArea) {
        setTextoTextArea(value);
      }
    });
  }, []);

  return (
    <textarea
      className=" h-full w-full resize-none dark:bg-neutral-900"
      autoFocus
      onChange={(e) => {
        textoToServer(e, socket, path, textoTextArea, setTextoTextArea);
      }}
      defaultValue={textoTextArea}
    ></textarea>
  );
}
