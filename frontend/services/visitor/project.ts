"use server";

import { projectType } from "@/commons/types/project";

export const getProjects = async () => {
  const apiBase = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;
  try {
    const response = await fetch(`${apiBase}/projects`);
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
  const apiBase = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;
  try {
    const response = await fetch(`${apiBase}/projects/${id}`);
    const data = await response.json();
    return data as projectType;
  } catch (error) {
    console.error(`Failed to fetch project with ID: ${id}`);
    return null;
  }
};
