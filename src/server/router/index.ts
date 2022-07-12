// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { userRouter } from "./user";
import { authRouter } from "./auth";
import { entityRouter } from "./entity";
import { assessmentRouter } from "./assessment";
import { iso_27001Router } from "./iso_27001";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("user.", userRouter)
  .merge("entity.", entityRouter)
  .merge("auth.", authRouter)
  .merge("assessment.", assessmentRouter)
  .merge("iso_27001.", iso_27001Router);

// export type definition of API
export type AppRouter = typeof appRouter;
