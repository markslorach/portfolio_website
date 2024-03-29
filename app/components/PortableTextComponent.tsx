import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import CodeBlock from "./CodeBlock";

export const PortableTextComponent = {
  types: {
    image: ({ value }: any) => (
      <figure className="px-0 md:px-4">
        <Image
          src={urlForImage(value)}
          alt="Post image"
          width={1000}
          height={280}
          quality={75}
          priority
          className="rounded-lg"
        />
      </figure>
    ),
    code: ({ value }: any) => (
      <CodeBlock language={value.language || "text"}>{value.code}</CodeBlock>
    ),
  },
};
