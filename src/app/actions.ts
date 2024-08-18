"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { registerEvent } from "./luma";


export async function registerEventGuest(
  _: {
    message: string;
  },
  formData: FormData,
) {
  const schema = z.object({
    email: z.string().email(),
    name: z.string().min(1)
  });
  const parse = schema.safeParse({
    email: formData.get("email"),
    name:formData.get('name')
  });

  if (!parse.success) {
    return { message: "Failed to register for the event" };
  }

  const {email,name} = parse.data;

  try {
    await registerEvent(email,name)

    revalidatePath("/");
    return { message: `Added ${name} to the guests list` };
  } catch (e) {
    console.error(e);
    return { message: "Failed to register for the event" };
  }
}