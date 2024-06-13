"use server";
import { RegisterSchema } from "@/schemas";
import * as z from "zod";

export async function register(values: z.infer<typeof RegisterSchema>) {
  console.log(values);
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid inputs" };
  }

  return { success: "Success" };
}
