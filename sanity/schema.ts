import { type SchemaTypeDefinition } from "sanity";
import projects from "./schemas/projects";
import blog from "./schemas/blog";
import about from "./schemas/about";
import tag from "./schemas/tag";
import resources from "./schemas/resources";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog, tag, projects, resources, about],
};
