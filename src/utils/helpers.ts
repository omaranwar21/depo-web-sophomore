"use server";
import { cookies } from "next/headers";

export async function getUserLocale() {
  const cookieStore = await cookies(); // ✅ Await the cookies object
  return cookieStore.get("i18nextLng")?.value || "en"; // ✅ Now `.get()` works
}

export async function setUserLocale(locale: "en" | "ar") {
  const cookieStore = await cookies(); // ✅ Await the cookies object
  cookieStore.set("i18nextLng", locale);
}
