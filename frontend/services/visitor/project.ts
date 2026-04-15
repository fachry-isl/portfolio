"use server";

import { projectType } from "@/commons/types/project";

export const getProjects = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`);
    const data = await response.json();
    return data as projectType[];
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return [];
  }
};

export const getProjectByID = async (
  id: string,
): Promise<projectType | null> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/projects/${id}`,
    );
    const data = await response.json();
    return data as projectType;
  } catch (error) {
    console.error(`Failed to fetch project with ID: ${id}`);
    return null;
  }
};
