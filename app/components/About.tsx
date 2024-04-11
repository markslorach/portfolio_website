import { getAboutInfo } from "@/lib/fetchData";
import { PortableText } from "@portabletext/react";
export const revalidate = 0;

const About = async () => {
  const about = await getAboutInfo();

  return (
    <section>
      <article>
        {about.map((data: any, idx: any) => (
          <div
            key={idx}
            className="prose min-w-full leading-relaxed tracking-[0.015rem] dark:prose-invert"
          >
            <PortableText value={data.content} />
          </div>
        ))}
      </article>
    </section>
  );
};

export default About;
