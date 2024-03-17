import { type SchemaTypeDefinition } from 'sanity'
import projects from './schemas/projects'
import blog from './schemas/blog'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog, projects],
}
