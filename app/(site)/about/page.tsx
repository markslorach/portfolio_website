import { getAboutInfo } from "@/lib/fetchData";
import { PortableText } from "@portabletext/react";
// import Image from "next/image";

export const revalidate = 0 // remove once website is complete

const AboutPage = async () => {
  const about = await getAboutInfo();

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
        {about.map((data:any, idx: any) => (
          <div
            key={idx}
            className="prose dark:prose-invert min-w-full leading-relaxed tracking-[0.015rem]"
          >
            <PortableText value={data.content} />
          </div>
        ))}
      </article>
    </section>
  );
};

export default AboutPage;
