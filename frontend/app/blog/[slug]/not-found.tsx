"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import Link from "next/link";

const BlogSlugNotFound = () => {
  const router = useRouter();

  return (
    <main className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-4">
        <Typography.H2>Blog Not Found</Typography.H2>
        <Typography.P>
          The blog you are looking for does not exist.
        </Typography.P>
        <Link href={`/blog`} className="w-full">
          <Button>Go Back</Button>
        </Link>
      </div>
    </main>
  );
};

export default BlogSlugNotFound;
