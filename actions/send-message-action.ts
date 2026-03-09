"use server";

import { createContactSchema } from "@/schema/contactSchema";

const contactFormSchema = createContactSchema;

export default async function sendMessageAcion(formData: FormData) {
  console.log("estou na action");
  const validatedObjects = contactFormSchema.safeParse({
    name: formData.get("name")?.toString().trim(),
    email: formData.get("email")?.toString().trim(),
    message: formData.get("message")?.toString().trim(),
  });

  if (!validatedObjects.success) {
    return { success: false, message: "Dados inválidos", status: 500 };
  }

  const { name, email, message } = validatedObjects.data;

  try {
    const response = await fetch(
      "http://localhost:3000/api/message-from-user",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      },
    );

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      return { success: true, status: 200 };
    }
  } catch (e) {
    console.log(e);
    return {
      success: false,
      message: "Não foi possível enviar o email",
      status: 500,
    };
  }
}
