import z from "zod";

export const createEntitySchema = z.object({
  name: z.string().max(60, "Max title length is 60"),
  overall_progress: z.number().default(0).nullish(),
  number_of_employees: z.number().default(1).nullish(),
  contact_person: z.string().max(30, "Max title length is 30").nullish(),
  contact_email: z.string().max(30, "Max title length is 30").nullish(),
  company_website: z
    .string()
    .max(30, "Max title length is 30")
    .nullish()
    .nullish(),
});

export type CreateEntityInput = z.TypeOf<typeof createEntitySchema>;

export const getSingleEntitySchema = z.object({
  entity_id: z.string(),
});
