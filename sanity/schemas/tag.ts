export default {
  name: "tag",
  type: "document",
  title: "Tags",

  fields: [
    {
      name: "name",
      type: "string",
      title: "Tag Name",
    },
    {
      name: "slug", // change to tag
      type: "slug",
      title: "Slug",
      options: {
        source: "name",
      },
    },
  ],
};
