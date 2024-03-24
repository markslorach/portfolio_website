import { Rule } from "sanity";

export default {
  name: "blog",
  type: "document",
  title: "Blog",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Blog Post Title",
      validation: (Rule: Rule) => Rule.required().error("Required"),
    },
    {
      name: "slug",
      type: "slug",
      title: "Blog Post Slug",
      options: {
        source: "title",
      },
      validation: (Rule: Rule) => Rule.required().error("Required"),
    },
    {
      name: "createdAt",
      type: "date",
      title: "Created At",
      initialValue: () => new Date().toISOString(),
      options: {
        dateFormat: "DD-MM-YYYY",
      },
    },
    {
      name: "titleImage",
      type: "image",
      title: "Title Image",
    },
    {
      name: "description",
      type: "string",
      title: "Small Description",
      validation: (Rule: Rule) => Rule.required().error("Required"),
    },
    {
      name: "content",
      type: "array",
      title: "Blog Post Content",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          fields: [{ type: "text", name: "alt", title: "Alt" }],
        },
        {
          type: "code",
        }
      ],
    },
    {
      name: "tags",
      type: "array",
      title: "Tags",
      of: [
        {
          type: 'reference',
          to: [{type: 'tag'}]
        },
      ],
    },
  ],
};
