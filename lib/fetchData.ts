import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

// Get project card data
export async function getProjects() {
  const query = groq`*[_type == "projects"] | order(_createdAt desc) {
    _id,
    title,
    description,
    githubUrl,
    slug,
    tags[]-> {
          _id,
          slug,
          name,
        }
  }`;
  const data = await client.fetch(query);
  return data;
}

// Get blog card data
export async function getBlogs() {
  const query = groq`*[_type == "blog"] | order(_createdAt desc) {
    _id,
    title, 
    description, 
    slug, 
    createdAt,
    tags[]-> {
          _id,
          slug,
          name,
        }
    }`;
  const data = await client.fetch(query);
  return data;
}

// Get about page data
export async function getAboutInfo() {
  const query = groq`*[_type == "about"] {title, content}`;
  const data = await client.fetch(query);
  return data;
}

// Get blog article by slug
export async function getBlogArticle(slug: string) {
  const query = groq`
    *[_type == "blog" && slug.current == '${slug}'] {
        _id,
        title,
        createdAt,
        titleImage,
        content,
        tags[]-> {
          _id,
          slug,
          name,
        }
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

// Get all tags
export async function getTags() {
  const query = groq`
  *[_type == "tag"] | order(lower(name) asc) {
    _id,
    name,
    slug,
}`;

  const data = await client.fetch(query);
  return data;
}

// Get project by tag
export async function getPostsByTag(slug: string) {
  const query = groq`*[_type == "blog" && references(*[_type == "tag" && slug.current == "${slug}"]._id)]`;

  const data = await client.fetch(query);
  return data;
}
