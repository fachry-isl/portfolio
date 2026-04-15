import BlurFade from "@/components/ui/blur-fade";
import { getBlogDetail } from "@/services/visitor/blog";
import BlogReaderView from "@/app/_components/blog/blog-reader-view";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

type Params = Promise<{ slug: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function BlogDetail(
  props: Readonly<{
    params: Params;
    searchParams: SearchParams;
  }>,
) {
  const params = await props.params;
  const blog = await getBlogDetail(params.slug);

  if (!blog) {
    notFound(); // renders Next.js 404 page
  }
  console.log("Blog:", blog);
  return (
    <BlurFade delay={0.25} inView>
      <BlogReaderView prop={blog} pageViewCount={0} />
    </BlurFade>
  );
}
