export default {
  name: "category",
  type: "document",
  title: "Resource Categories",

  fields: [
    {
      name: "name",
      type: "string",
      title: "Category Name",
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
