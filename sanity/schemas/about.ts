export default {
  name: "about",
  type: "document",
  title: "About",
  fields: [
    {
      name: "title",
      type: "string",
      title: "About",
    },
    {
      name: "content",
      type: "array",
      title: "About Me",
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
