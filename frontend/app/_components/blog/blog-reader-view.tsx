import React from "react";
import Link from "next/link";
import BlogReaderHeader from "./blog-reader-header";
import ImageRender from "@/components/ui/image-render";
import { Separator } from "@/components/ui/separator";
import MDXComponent from "@/components/ui/mdx-components";
import Typography from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { BlogDetailProps } from "@/commons/types/blog";

interface BlogReaderViewProps {
  prop: BlogDetailProps;
  pageViewCount: number;
}

const BlogReaderView = ({ prop, pageViewCount }: BlogReaderViewProps) => {
  const { cover_url, title, content, published_at } = prop;
  return (
    <>
      <div className="mb-5 text-start text-sm font-normal underline underline-offset-4">
        <Link href={"/blog"}>Back</Link>
      </div>
      <BlogReaderHeader
        title={title}
        reading_time_minutes={5}
        published_at={published_at}
      />
      <div className="space-y-6 leading-[1.8] dark:text-neutral-300 ">
        <div className="overflow-hidden rounded-xl max-h-[300px]">
          <ImageRender
            src={cover_url}
            width={800}
            height={500}
            alt={title}
            className="transition-all w-full duration-700 hover:scale-105"
          />
        </div>
        {content && <MDXComponent>{content}</MDXComponent>}
      </div>
      {/* {tags?.length >= 1 && (
        <div className="my-10 space-y-2">
          <Typography.H3 className="text-lg font-medium">Tags:</Typography.H3>
          <div className="flex flex-wrap gap-2 pt-2">
            {tags?.map((stack: string, index: number) => (
              <Badge key={index}>{stack}</Badge>
            ))}
          </div>
        </div>
      )} */}
      <Separator className="my-6" />
    </>
  );
};

export default BlogReaderView;
