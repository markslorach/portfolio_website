export default {
  name: "tag",
  type: "document",
  title: "Blog Tags",

  fields: [
    {
      name: "name",
      type: "string",
      title: "Tag Name",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "name",
      },
    },
  ],
};
