import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";

async function getData() {
  const query = `*[_type == "about"]{title, content}`;

  const data = await client.fetch(query);
  return data;
}

export const revalidate = 0

const AboutPage = async () => {
  const data = await getData();
  console.log(data);

  return (
    <div>
      <h1 className="heading-h2 mb-8"><span className="underline decoration-blue-400 decoration-[4px] underline-offset-4">About</span>.</h1>
      <article className="mb-24">
        {data.map((data: any, idx: any) => (
          <div key={data} className="prose dark:prose-invert">
            <PortableText value={data.content} />
          </div>
        ))}
      </article>
    </div>
  );
};

export default AboutPage;
