import { getAboutInfo } from "@/lib/fetchData";
import { PortableText } from "@portabletext/react";
// import glencoe from "@/public/images/Glencoe.jpeg";
// import Image from "next/image";

export const revalidate = 0; // remove once website is complete

const AboutPage = async () => {
  const about = await getAboutInfo();

  return (
    <section>
      {/* <figure>
        <Image
          src={glencoe}
          alt="Glencoe mountains header image"
          quality={75}
          priority
          placeholder="blur"
          className="mb-28 rounded-lg"
        ></Image>
      </figure> */}
      <h1 className="hero-heading mb-20">
        <span className="underline decoration-blue-400 decoration-[8px] underline-offset-4">
          About
        </span>
        .
      </h1>

      <article className="mb-24">
        {about.map((data: any, idx: any) => (
          <div
            key={idx}
            className="prose min-w-full text-wrap leading-relaxed tracking-[0.015rem] dark:prose-invert"
          >
            <PortableText value={data.content} />
          </div>
        ))}
      </article>
    </section>
  );
};

export default AboutPage;
