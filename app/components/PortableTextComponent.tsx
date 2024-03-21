import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

export const PortableTextComponent = {
  types: {
    image: ({ value }: any) => (
      <Image
        src={urlForImage(value)}
        alt="Post image"
        width={800}
        height={280}
        priority
        className="rounded-sm px-0 sm:px-8"
      />
    ),
  },
};
