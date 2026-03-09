import z from "zod";

export const createContactSchema = z.object({
  name: z
    .string()
    .min(1, "Nome é obrigatório")
    .min(-3, "Nome deve conter pelo menos 3 caractéres")
    .max(50, "Nome pode conter no máximo 50 caractéres"),

  email: z
    .string()
    .min(1, "Email é obrigatório")
    .max(100, "Email pode conter no máximo 100 caractéres"),

  message: z
    .string()
    .min(20, "Na mensagem deve conter pelo menos 20 caractéres")
    .max(500, "Mensagem pode conter no máximo 500 caractéres"),
});
