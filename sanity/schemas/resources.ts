import { Rule } from "sanity";

export default {
  name: "resources",
  type: "document",
  title: "Resources",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      validation: (Rule: Rule) => Rule.required().error("Required"),
    },
    {
      name: "url",
      title: "Link",
      type: "url",
      validation: (Rule: Rule) => Rule.required().error("Required"),
    },
    {
      name: "categories",
      type: "array",
      title: "Categories",
      of: [
        {
          type: "reference",
          to: [{ type: "category" }],
        },
      ],
    },
  ],
};
