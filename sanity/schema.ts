import { type SchemaTypeDefinition } from "sanity";
import projects from "./schemas/projects";
import blog from "./schemas/blog";
import about from "./schemas/about";
import tag from "./schemas/tag";
import resources from "./schemas/resources";
import category from "./schemas/category";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projects, blog, tag, resources, category, about],
};
