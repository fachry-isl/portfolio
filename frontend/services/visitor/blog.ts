"use server";
import { BlogDetailProps, blogType } from "@/commons/types/blog";

export const getBlogs = async (): Promise<blogType[]> => {
  const apiBase = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;
  try {
    const response = await fetch(`${apiBase}/posts`);
    const data = await response.json();
    return data as blogType[];
  } catch (error) {
    console.error("Error while fetching blogs", error);
    return [];
  }
};

export const getBlogDetail = async (
  slug: string,
): Promise<BlogDetailProps | null> => {
  const apiBase = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;
  try {
    const response = await fetch(`${apiBase}/posts/${slug}`);
    if (!response.ok) return null;

    const data = await response.json();
    return data as BlogDetailProps;
  } catch (error) {
    console.error("Error while fetching blog detail", error);
    return null;
  }
};
