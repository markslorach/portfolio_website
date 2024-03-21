export interface Projects {
  title: string;
  description: string;
  githubUrl: string;
  slug: { current: string };
  _id: string;
}

export interface BlogPosts {
  title: string;
  description: string;
  slug: { current: string };
  createdAt: string;
  _id: string;
}
