import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

/**
 * Router for random image generation
 */
export const imageRouter = createTRPCRouter({
  /**
   * Generate a random image URL using Picsum Photos API
   */
  getRandom: publicProcedure.query(() => {
    // Generate a random seed to get a different image each time
    const seed = Math.floor(Math.random() * 1000);
    const width = 800;
    const height = 600;

    // Return the image URL with a random seed
    return `https://picsum.photos/seed/${seed}/${width}/${height}`;
  }),
});
