export default {
  name: "projects",
  type: "document",
  title: "Projects",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Project Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "Project Slug",
      options: {
        source: "title",
      },
    },
    {
      name: "description",
      type: "string",
      title: "Project Description",
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
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      of: [
        {
          type: "string",
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
  ],
};
