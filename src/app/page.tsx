import Image from "next/image";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { api } from "@/trpc/server";

interface PageProps {
  searchParams: Promise<{ image?: string }>;
}

const Page = async ({ searchParams }: PageProps) => {
  const params = await searchParams;
  const imageUrl = params.image;

  async function generateImageAction() {
    "use server";
    const imageUrl = await api.image.getRandom();
    redirect(`/?image=${encodeURIComponent(imageUrl)}`);
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-8 p-4 sm:p-8">
      <div className="flex w-full max-w-4xl flex-col items-center gap-4">
        {imageUrl ? (
          <div className="relative h-[400px] w-full max-w-[800px] overflow-hidden rounded-lg border shadow-lg sm:h-[600px]">
            <Image
              src={imageUrl}
              alt="Random image"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
          </div>
        ) : (
          <div className="flex h-[400px] w-full max-w-[800px] items-center justify-center rounded-lg border border-dashed bg-muted sm:h-[600px]">
            <p className="text-center text-muted-foreground">Click the button to generate a random image</p>
          </div>
        )}

        <form action={generateImageAction}>
          <Button type="submit" size="lg">
            Generate Random Image
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Page;
