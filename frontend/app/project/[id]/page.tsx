import BlurFade from "@/components/ui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  Calendar,
  Globe,
  GitBranch,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectByID } from "@/services/visitor/project";

type Props = {
  params: Promise<{ id: string }>;
};

type Project = {
  id: string;
  title: string;
  summary: string;
  cover_url: string | null;
  demo_url: string | null;
  repo_url: string | null;
  created_at: string;
  published_at: string | null;
};

export default async function ProjectDetailPage({ params }: Readonly<Props>) {
  const { id } = await params;
  const project = await getProjectByID(id);

  if (!project) return notFound();

  return (
    <BlurFade delay={0.25} inView>
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <Link href="/project">
          <Button variant="ghost" size="sm" className="mb-6 gap-2">
            <ArrowLeft className="size-4" />
            Back to Projects
          </Button>
        </Link>

        {/* Project Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="size-4" />
              <span>
                Created:{" "}
                {new Date(project.created_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            {project.published_at &&
              project.published_at !== project.created_at && (
                <div className="flex items-center gap-2">
                  <Calendar className="size-4" />
                  <span>
                    Updated:{" "}
                    {new Date(project.published_at).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      },
                    )}
                  </span>
                </div>
              )}
          </div>

          {/* Project Image */}
          {project.cover_url && (
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-6">
              <Image
                src={project.cover_url}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Project Description</CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  className="prose dark:prose-invert max-w-none text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: project.summary }}
                />
              </CardContent>
            </Card>

            {/* Project Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>Project Timeline</CardTitle>
                <CardDescription>
                  Development milestones and updates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div className="size-2 rounded-full bg-primary" />
                      <div className="w-px h-full bg-border" />
                    </div>
                    <div className="pb-4">
                      <p className="text-sm font-medium">Project Created</p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(project.created_at).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          },
                        )}
                      </p>
                    </div>
                  </div>
                  {project.published_at &&
                    project.published_at !== project.created_at && (
                      <div className="flex gap-3">
                        <div className="flex flex-col items-center">
                          <div className="size-2 rounded-full bg-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Last Updated</p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(project.published_at).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              },
                            )}
                          </p>
                        </div>
                      </div>
                    )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {project.demo_url && (
                  <Link
                    href={project.demo_url}
                    target="_blank"
                    className="block"
                  >
                    <Button className="w-full gap-2" variant="default">
                      <Globe className="size-4" />
                      Visit Website
                      <ExternalLink className="size-3 ml-auto" />
                    </Button>
                  </Link>
                )}
                {project.repo_url && (
                  <Link
                    href={project.repo_url}
                    target="_blank"
                    className="block"
                  >
                    <Button className="w-full gap-2" variant="outline">
                      <GitBranch className="size-4" />
                      Source Code
                      <ExternalLink className="size-3 ml-auto" />
                    </Button>
                  </Link>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Project Info</CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <p className="text-sm font-medium mb-1">Status</p>
                  <Badge variant="default">Active</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </BlurFade>
  );
}
