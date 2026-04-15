export type blogType = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  cover_url: string;
  featured: boolean;
  status: string;
  published_at: string;
  created_at: string;
};

export type BlogDetailProps = {
  id: number;
  title: string;
  summary: string;
  slug: string;
  content: string;
  cover_url: string;
  featured: boolean;
  status: string;
  published_at: string;
  created_at: string;
};
