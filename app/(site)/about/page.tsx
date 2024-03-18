import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
// import Image from "next/image";

interface AboutData {
  title: string;
  content: any;
}

async function getData(): Promise<AboutData[]> {
  const query = `*[_type == "about"]{title, content}`;
  const data = await client.fetch(query);
  return data;
}

const AboutPage = async () => {
  const about = await getData();

  return (
    <section>
      <h1 className="heading-h2 mb-8">
        <span className="underline decoration-blue-400 decoration-[5px] underline-offset-4">
          About
        </span>
        .
      </h1>
      {/* <Image
        className="mb-8 rounded-lg"
        width={672}
        height={290}
        priority
        alt="Glencoe"
        src="/images/Glencoe.jpeg"
      ></Image> */}
      <article className="mb-24">
        {about.map((data, idx) => (
          <div
            key={idx}
            className="prose dark:prose-invert leading-relaxed tracking-[0.015rem]"
          >
            <PortableText value={data.content} />
          </div>
        ))}
      </article>
    </section>
  );
};

export default AboutPage;
