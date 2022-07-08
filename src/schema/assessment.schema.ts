import z from "zod";

export const createAssessmentSchema = z.object({
  name: z.string().max(60, "Max title length is 60"),
  standard: z.string().max(60, "Max standard length is 60").nullish(),
  overall_progress: z.number().nullish(),
  overall_score: z.number().nullish(),
  entity_id: z.string(),
});

export type CreateAssessmentInput = z.TypeOf<typeof createAssessmentSchema>;

export const getManyAssessmentsInput = z.object({
  entity_id: z.string(),
});

export const getSingleAssessmentSchema = z.object({
  assessment_id: z.string(),
});
