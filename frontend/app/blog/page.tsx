import { getBlogs } from "@/services/visitor/blog";
import CardBlog from "../_components/blog/card-blog";
import BlurFade from "@/components/ui/blur-fade";

const BlogPage = async () => {
  const blogs = await getBlogs();
  return (
    <BlurFade delay={0.25} inView>
      <div className="text-center mb-6">
        <p className="text-center text-xl font-semibold">Blog</p>
        <div className="mt-2 text-sm text-muted-foreground">{`I write about my experiences, thoughts, and ideas on various topics.`}</div>
      </div>
      <div className="grid max-[760px]:grid-cols-1 grid-cols-2 gap-2">
        {blogs.map((blog) => (
          <CardBlog
            key={blog.id}
            title={blog.title}
            summary={blog.summary}
            cover_url={blog.cover_url}
            href={blog.slug}
          />
        ))}
      </div>
    </BlurFade>
  );
};

export default BlogPage;
