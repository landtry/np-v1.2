import { createRouter } from "./context";
import { z } from "zod";
import * as trpc from "@trpc/server";
import {
  createAssessmentSchema,
  getManyAssessmentsInput,
  getSingleAssessmentSchema,
} from "../../schema/assessment.schema";
import { getSingleUserSchema } from "../../schema/user.schema";

export const userRouter = createRouter()
  // .mutation("create-assessment", {
  //   input: createAssessmentSchema,
  //   async resolve({ ctx, input }) {
  //     if (!ctx.session?.userId) {
  //       new trpc.TRPCError({
  //         code: "FORBIDDEN",
  //         message: "Cannot create an entity while loggout out",
  //       });
  //     }

  //     const assessment = await ctx.prisma.assessment.create({
  //       data: {
  //         name: input.name,
  //         standard: input.standard,
  //         entity: {
  //           connect: {
  //             id: input.entity_id,
  //           },
  //         },
  //         iso_27001: {
  //           create: {
  //             name: input.name,
  //           },
  //         },
  //       },
  //     });

  //     return assessment;
  //   },
  // })
  // .query("assessments", {
  //   input: getManyAssessmentsInput,
  //   resolve({ ctx, input }) {
  //     return ctx.prisma.assessment.findMany({
  //       where: {
  //         entity_id: input.entity_id,
  //       },
  //     });
  //   },
  // })
  .query("single-user", {
    input: getSingleUserSchema,
    resolve({ input, ctx }) {
      return ctx.prisma.user.findUnique({
        where: {
          id: input.user_id,
        },
      });
    },
  });
// .query("details", {
//   input: getSingleAssessmentSchema,
//   resolve({ input, ctx }) {
//     console.log(input);
//     return ctx.prisma.iso_27001.findUnique({
//       where: {
//         id: input.assessment_id,
//       },
//     });
//   },
// });
// .mutation("update-entity", {
//   input: createEntitySchema,
//   async resolve({ ctx, input }) {
//     if (!ctx.session?.userId) {
//       new trpc.TRPCError({
//         code: "FORBIDDEN",
//         message: "Cannot update an entity while loggout out",
//       });
//     }

//     const entity = await ctx.prisma.entity.update({
//       data: {
//         ...input,
//         user: {
//           connect: {
//             id: ctx.session?.userId,
//           },
//         },
//       },
//     });

//     return entity;
//   },
// })
// .query("delete-single-entity", {
//   input: getSingleEntitySchema,
//   resolve({ input, ctx }) {
//     return ctx.prisma.entity.delete({
//       where: {
//         id: input.entity_id,
//       },
//     });
//   },
// });
