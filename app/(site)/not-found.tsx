import Image from "next/image";
import notFoundImage from "@/public/images/404.png";

export default function NotFound() {
  return (
    <section>
      <div className="mb-28 flex flex-col items-center gap-3">
        <figure>
          <Image
            src={notFoundImage}
            alt="404 Not Found"
            width={175}
            height={175}
            quality={75}
            priority
            className="rounded-full"
          />
        </figure>
      </div>
    </section>
  );
}
