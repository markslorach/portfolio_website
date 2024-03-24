import { Rule } from "sanity";

export default {
  name: "projects",
  type: "document",
  title: "Projects",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Project Title",
      validation: (Rule: Rule) => Rule.required().error("Required"),
    },
    {
      name: "slug",
      type: "slug",
      title: "Project Slug",
      options: {
        source: "title",
      },
      validation: (Rule: Rule) => Rule.required().error("Required"),
    },
    {
      name: "description",
      type: "string",
      title: "Project Description",
      validation: (Rule: Rule) => Rule.required().error("Required"),
    },
    {
      name: "githubUrl",
      title: "GitHub Repo URL",
      type: "url",
    },
    {
      name: "projectUrl",
      title: "Deployed URL",
      type: "url",
    },
    {
      name: "images",
      title: "Project Images",
      type: "array",
      of: [
        {
          type: "image",
          fields: [{ type: "text", name: "alt", title: "Alt" }],
        },
      ],
    },
    {
      name: "content",
      type: "array",
      title: "Project Information",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          fields: [{ type: "text", name: "alt", title: "Alt" }],
        },
      ],
    },
    {
      name: "tags",
      type: "array",
      title: "Tags",
      of: [
        {
          type: "reference",
          to: [{ type: "tag" }],
        },
      ],
    },
  ],
};
