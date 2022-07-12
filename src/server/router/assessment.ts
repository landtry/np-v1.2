import { createRouter } from "./context";
import { z } from "zod";
import * as trpc from "@trpc/server";
import {
  createAssessmentSchema,
  getManyAssessmentsInput,
  getSingleAssessmentSchema,
} from "../../schema/assessment.schema";

export const assessmentRouter = createRouter()
  .mutation("create-assessment", {
    input: createAssessmentSchema,
    async resolve({ ctx, input }) {
      if (!ctx.session?.userId) {
        new trpc.TRPCError({
          code: "FORBIDDEN",
          message: "Cannot create an entity while loggout out",
        });
      }

      const assessment = await ctx.prisma.assessment.create({
        data: {
          name: input.name,
          standard: input.standard,
          entity: {
            connect: {
              id: input.entity_id,
            },
          },
          iso_27001: {
            create: {
              name: input.name,
            },
          },
        },
      });

      return assessment;
    },
  })
  .query("assessments", {
    input: getManyAssessmentsInput,
    resolve({ ctx, input }) {
      return ctx.prisma.assessment.findMany({
        where: {
          entity_id: input.entity_id,
        },
      });
    },
  })
  .query("single-assessment", {
    input: getSingleAssessmentSchema,
    resolve({ input, ctx }) {
      return ctx.prisma.assessment.findUnique({
        where: {
          id: input.assessment_id,
        },
        include: {
          iso_27001: true,
        },
      });
    },
  });
