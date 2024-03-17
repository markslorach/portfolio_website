export default {
  name: "blog",
  type: "document",
  title: "Blog",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Blog Post Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "Blog Post Slug",
      options: {
        source: "title",
      },
    },
    {
      name: "createdAt",
      type: "date",
      title: "Created At",
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
        },
      ],
    },
  ],
};
