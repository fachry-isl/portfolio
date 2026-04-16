import { getProjects } from "@/services/visitor/project";
import BlurFade from "@/components/ui/blur-fade";
import CardProject from "../_components/project/card-project";

const ProjectPage = async () => {
  const projects = await getProjects();
  return (
    <BlurFade delay={0.25} inView>
      <div className="text-center mb-6">
        <p className="text-center text-xl font-semibold">Project</p>
        <div className="mt-2 text-sm text-muted-foreground">{`I have experience working on a wide range of projects, from basic to advanced usecases.`}</div>
      </div>
      <div className="grid max-[760px]:grid-cols-1 grid-cols-2 gap-2">
        {projects?.map((project) => (
          <CardProject
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.summary}
            href={project.demo_url ?? ""}
            source={project.repo_url ?? ""}
            image={project.cover_url ?? "/no-image.jpg"}
          />
        ))}
      </div>
    </BlurFade>
  );
};

export default ProjectPage;
