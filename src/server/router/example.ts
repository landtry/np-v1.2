import { createRouter } from "./context";
import { z } from "zod";
import * as trpc from "@trpc/server";
import { createEntitySchema } from "../../schema/entity.schema";

export const exampleRouter = createRouter()
  .query("hello", {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    },
  })
  .query("getAllUsers", {
    async resolve({ ctx }) {
      return await ctx.prisma.user.findMany();
    },
  })
  .mutation("createEntity", {
    input: createEntitySchema,
    async resolve({ ctx, input }) {
      if (!ctx.session?.userId) {
        new trpc.TRPCError({
          code: "FORBIDDEN",
          message: "Cannot create a post while loggout out",
        });
      }

      const entity = await ctx.prisma.entity.create({
        data: {
          ...input,
          user: {
            connect: {
              id: ctx.session?.userId,
            },
          },
        },
      });

      return entity;
    },
  });
