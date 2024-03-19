"use server";
import { z } from "zod";
import { errorType } from "../types/types";
import { redirect } from "next/navigation";

export async function startRoomAction(
  state: any,
  formData: FormData,
): Promise<errorType<string> | void> {
  const mySchema = z
    .string()
    .nonempty("O nome da sala não pode estar vazio")
    .max(32, "O nome da sala deve ter menos de 32 caracteres");
  const verifiedRoomName = mySchema.safeParse(formData.get("Room"));

  if (!verifiedRoomName.success) {
    return { status: "failed", data: verifiedRoomName.error.errors[0].message };
  } else {
    redirect("/space/" + "teste");
    return { status: "success", data: "Everything was verified" };
  }
}
