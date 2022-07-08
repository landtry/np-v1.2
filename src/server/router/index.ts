// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { exampleRouter } from "./example";
import { authRouter } from "./auth";
import { entityRouter } from "./entity";
import { assessmentRouter } from "./assessment";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("example.", exampleRouter)
  .merge("entity.", entityRouter)
  .merge("auth.", authRouter)
  .merge("assessment.", assessmentRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
