interface Props {
  params: {
    slug: string;
  };
}

const BlogPage = ({ params: { slug } }: Props) => {
  return (
    <div>{slug}</div>
  );
};

export default BlogPage;