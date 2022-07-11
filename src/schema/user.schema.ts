import z from "zod";

export const getSingleUserSchema = z.object({
  user_id: z.string(),
});
