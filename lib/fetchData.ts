import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

// Get project card data
export async function getProjects() {
  const query = groq`*[_type == "projects"] | order(_createdAt desc) {title, description, githubUrl, slug}`;
  const data = await client.fetch(query);
  return data;
}

// Get blog card data
export async function getBlogs() {
  const query = groq`*[_type == "blog"] | order(_createdAt desc) {title, description, slug, createdAt}`;
  const data = await client.fetch(query);
  return data;
}

// Get about page data
export async function getAboutInfo() {
  const query = groq`*[_type == "about"]{title, content}`;
  const data = await client.fetch(query);
  return data;
}

// Get blog article by slug
export async function getBlogArticle(slug: string) {
  const query = groq`
    *[_type == "blog" && slug.current == '${slug}']{
        title,
        createdAt,
        titleImage,
        content,
        tags
      }[0]
  `;
  const data = await client.fetch(query);
  return data;
}

// Get project by slug
export async function getProject(slug: string) {
  const query = groq`
    *[_type == "projects" && slug.current == '${slug}']{
        title,
      }[0]
  `;
  const data = await client.fetch(query);
  return data;
}
