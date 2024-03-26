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
