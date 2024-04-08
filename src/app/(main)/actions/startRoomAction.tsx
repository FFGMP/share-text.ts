"use server";
import { z } from "zod";
import { errorType } from "../types/types";
import { redirect } from "next/navigation";

async function redirectToTextRoom(path: string | undefined) {
  redirect("/space/" + path);
}

export async function startRoomAction(
  state: any,
  formData: FormData,
): Promise<errorType<string> | void> {
  const mySchema = z
    .string()
    .nonempty("O nome da sala não pode estar vazio")
    .max(32, "O nome da sala deve ter menos de 32 caracteres")
    .refine(
      (value) => /^[a-zA-Z0-9]+$/.test(value),
      "O nome da sala não pode conter caracteres especiais",
    ); // Add this line

  const verifiedRoomName = mySchema.safeParse(formData.get("Room"));

  if (!verifiedRoomName.success) {
    return { status: "failed", data: verifiedRoomName.error.errors[0].message };
  } else {
    await redirectToTextRoom(formData.get("Room")?.toString());
    return { status: "success", data: "Everything was verified" };
  }
}
