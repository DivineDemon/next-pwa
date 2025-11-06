import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const imageRouter = createTRPCRouter({
  getRandom: publicProcedure.query(() => {
    const seed = Math.floor(Math.random() * 1000);
    const width = 800;
    const height = 600;

    return `https://picsum.photos/seed/${seed}/${width}/${height}`;
  }),
});
