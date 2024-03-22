export interface Project {
  title: string;
  description: string;
  githubUrl: string;
  slug: { current: string };
  content: any;
  _id: string;
}

export interface BlogPost {
  title: string;
  description: string;
  titleImage: any;
  slug: { current: string };
  createdAt: string;
  content: any;
  tags: Array<Tag>;
  _id: string;
}

export interface Tag {
  name: string;
  slug: { current: string };
  _id: string;
}
