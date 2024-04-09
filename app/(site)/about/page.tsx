import { getAboutInfo } from "@/lib/fetchData";
import { PortableText } from "@portabletext/react";
// import glencoe from "@/public/images/Glencoe.jpeg";
// import Image from "next/image";

// Components
import Heading from "@/app/components/Heading";
import Experience from "@/app/components/Experience";
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

      <Heading className="mb-20">
        About<span className="dark:text-[#8cbdf8] text-blue-400">.</span>
      </Heading>

      <article>
        {about.map((data: any, idx: any) => (
          <div
            key={idx}
            className="prose min-w-full text-wrap leading-relaxed tracking-[0.015rem] dark:prose-invert"
          >
            <PortableText value={data.content} />
          </div>
        ))}
      </article>
      <h2 className="text-2xl font-bold leading-none mb-8">
        Recent <span className="text-[#8cbdf8]">Experience</span>
      </h2>
      <Experience />
    </section>
  );
};

export default AboutPage;
