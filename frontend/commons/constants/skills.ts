export interface SkillCategory {
  name: string;
  skills: string[];
  icon: string;
  color: string;
}

export const skills_data: SkillCategory[] = [
  {
    name: "Frontend Development",
    skills: [
      "React",
      "Next.js",
      "Typescript",
      "Javascript",
      "Kotlin",
      "HTML5",
      "CSS3",
      "Android Studio",
    ],
    icon: "Monitor",
    color: "from-blue-500 to-cyan-400",
  },
  {
    name: "UI/UX & Libraries",
    skills: [
      "Tailwind CSS",
      "Material UI",
      "Bootstrap",
      "Figma",
      "Framer Motion",
      "Responsive Design",
    ],
    icon: "Palette",
    color: "from-pink-500 to-rose-400",
  },
  {
    name: "Backend Development",
    skills: ["Django", "FastAPI", "Gin", "REST API"],
    icon: "Server",
    color: "from-green-500 to-emerald-400",
  },
  {
    name: "Programming Languages",
    skills: [
      "Javascript",
      "Typescript",
      "Python",
      "Java",
      "Kotlin",
      "Go",
      "C#",
      "C++",
    ],
    icon: "Code2",
    color: "from-violet-500 to-purple-400",
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "MySQL", "SQLite", "Firebase", "Supabase"],
    icon: "Database",
    color: "from-orange-500 to-amber-400",
  },
  {
    name: "DevOps & Tools",
    skills: [
      "Docker",
      "Portainer",
      "Git",
      "GitHub Actions",
      "GitLab CI",
      "Jenkins",
      "AWS",
      "Azure",
      "Google Cloud",
      "Vercel",
      "Netlify",
      "Heroku",
      "Railway",
      "Nginx",
      "Terraform",
    ],
    icon: "Cloud",
    color: "from-sky-500 to-blue-400",
  },
  {
    name: "Testing & Quality",
    skills: ["Playwright", "Vitest", "Postman"],
    icon: "TestTube2",
    color: "from-teal-500 to-cyan-400",
  },
  {
    name: "Mobile Development",
    skills: [
      "React Native",
      "Flutter",
      "Expo",
      "Kotlin (Android)",
      "Java (Android)",
    ],
    icon: "Smartphone",
    color: "from-lime-500 to-green-400",
  },
  {
    name: "Data Science & AI",
    skills: [
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "Keras",
      "OpenCV",
      "Matplotlib",
      "MCP",
      "Fastmcp",
      "Data Warehouse",
      "ETL",
      "RAG",
      "Fine tuning",
      "Chunking",
      "Embedding",
    ],
    icon: "Brain",
    color: "from-fuchsia-500 to-pink-400",
  },
];

export const skills_data_top = [
  "React",
  "Next.js",
  "Typescript",
  "Javascript",
  "Flutter",
  "Docker",
  "Git",
  "Tailwind CSS",
  "Chakra UI",
  "Material UI",
  "Ant Design",
  "Kotlin",
  "Java",
  "React Native",
  "Angular",
  "Svelte",
  "HTML5",
  "CSS3",
  "RAG",
  "MCP",
  "FastAPI",
];

export const skills_data_bottom = [
  "Portainer",
  "Express.js",
  "Nest.js",
  "Astro.js",
  "PostgreSQL",
  "MySQL",
  "Laravel",
  "Spring Boot",
  "Go",
  "ASP .NET",
  "Python",
  "Figma",
  "Data Warehouse",
  "RabbitMQ",
];

export const getAllSkills = (): string[] => {
  return skills_data.reduce((acc, category) => {
    return [...acc, ...category.skills];
  }, [] as string[]);
};

export const getSkillsByCategory = (categoryName: string): string[] => {
  const category = skills_data.find((cat) => cat.name === categoryName);
  return category ? category.skills : [];
};

export const searchSkills = (query: string): string[] => {
  const allSkills = getAllSkills();
  return allSkills.filter((skill) =>
    skill.toLowerCase().includes(query.toLowerCase()),
  );
};

export const getRandomSkills = (count: number): string[] => {
  const allSkills = getAllSkills();
  const shuffled = [...allSkills].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const skillsStats = {
  totalSkills: getAllSkills().length,
  totalCategories: skills_data.length,
  averageSkillsPerCategory: Math.round(
    getAllSkills().length / skills_data.length,
  ),
  categoryWithMostSkills: skills_data.reduce((prev, current) =>
    prev.skills.length > current.skills.length ? prev : current,
  ).name,
  categoryWithLeastSkills: skills_data.reduce((prev, current) =>
    prev.skills.length < current.skills.length ? prev : current,
  ).name,
};
