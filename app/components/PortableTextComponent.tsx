import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

export const PortableTextComponent = {
  types: {
    image: ({ value }: any) => (
      <Image
        src={urlForImage(value)}
        alt="Post image"
        width={800}
        height={280}
        quality={75}
        priority
        className="rounded-lg px-0 sm:px-5"
      />
    ),
  },
};
