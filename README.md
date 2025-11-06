# Random Image Generator PWA

A Progressive Web App (PWA) built with the [T3 Stack](https://create.t3.gg/) that generates random images using server-side tRPC.

## Features

- 🖼️ **Random Image Generation** - Click a button to generate random images
- 🚀 **100% Server-Side** - All logic runs on the server using tRPC
- 📱 **Progressive Web App** - Installable on mobile and desktop devices
- 🔄 **Offline Support** - Works offline with service worker caching
- ⚡ **Fast & Optimized** - Built with Next.js 15 and React Server Components

## PWA Setup

This app is configured as a Progressive Web App with:

- Service worker for offline support
- Web app manifest for installability
- Caching strategies for optimal performance

### Adding Icons

To complete the PWA setup, you need to add icon files to the `public` directory:

- `icon-192x192.png` (192x192 pixels)
- `icon-512x512.png` (512x512 pixels)
- `favicon.ico` (standard favicon)

You can generate these using:
- [RealFaviconGenerator](https://realfavicongenerator.net/)
- Design tools like Figma or Canva
- Any image editor

The icons should be square PNG images with transparent backgrounds.

### Testing PWA Features

1. Build the app: `pnpm run build`
2. Start the production server: `pnpm run start`
3. Open in a browser and check:
   - Install prompt (mobile/desktop)
   - Offline functionality
   - Service worker registration

**Note:** PWA features are disabled in development mode. Test in production build.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Drizzle](https://orm.drizzle.team)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.
