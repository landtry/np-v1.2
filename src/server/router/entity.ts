import { createRouter } from "./context";
import { z } from "zod";
import * as trpc from "@trpc/server";
import {
  createEntitySchema,
  getSingleEntitySchema,
} from "../../schema/entity.schema";

export const entityRouter = createRouter()
  .mutation("create-entity", {
    input: createEntitySchema,
    async resolve({ ctx, input }) {
      if (!ctx.session?.userId) {
        new trpc.TRPCError({
          code: "FORBIDDEN",
          message: "Cannot create an entity while loggout out",
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
  })
  .query("entities", {
    resolve({ ctx }) {
      return ctx.prisma.entity.findMany({
        where: {
          user_id: ctx.session?.userId,
        },
      });
    },
  })
  .query("single-entity", {
    input: getSingleEntitySchema,
    resolve({ input, ctx }) {
      return ctx.prisma.entity.findUnique({
        where: {
          id: input.entity_id,
        },
      });
    },
  })
  .mutation("update-entity", {
    input: createEntitySchema,
    async resolve({ ctx, input }) {
      if (!ctx.session?.userId) {
        new trpc.TRPCError({
          code: "FORBIDDEN",
          message: "Cannot update an entity while loggout out",
        });
      }

      const entity = await ctx.prisma.entity.update({
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
  })
  .query("delete-single-entity", {
    input: getSingleEntitySchema,
    resolve({ input, ctx }) {
      return ctx.prisma.entity.delete({
        where: {
          id: input.entity_id,
        },
      });
    },
  });
