import { client } from "@/sanity/lib/client";

export async function getProjects() {
  const query = `*[_type == "projects"] | order(_createdAt desc) {title, description, githubUrl, slug}`;
  const data = await client.fetch(query);
  return data;
}

export async function getBlogs() {
  const query = `*[_type == "blog"] | order(_createdAt desc) {title, description, slug, createdAt}`;
  const data = await client.fetch(query);
  return data;
}

export async function getAboutInfo() {
  const query = `*[_type == "about"]{title, content}`;
  const data = await client.fetch(query);
  return data;
}
