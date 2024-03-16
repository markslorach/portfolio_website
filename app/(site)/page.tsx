import Image from "next/image";

// Icons
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

export default function Home() {
  return (
    <main>
      <section className="mb-24">
        <figure>
          <Image
            src="/images/me.png"
            alt="Mark Slorach avatar"
            width={400}
            height={400}
            className="mb-2 h-20 w-20 rounded-lg"
          />
        </figure>

        <h1 className="heading-h1 mb-8">
          Hello, I&apos;m{" "}
          <span className="underline decoration-blue-400 decoration-[6px] underline-offset-4">
            Mark
          </span>
          .
        </h1>
        <p className="mb-8 leading-relaxed tracking-[0.015rem] text-black/70 dark:text-white/80 line-clamp-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed lectus nisi. Sed sit amet tincidunt purus. Fusce molestie dui ullamcorper nulla facilisis ornare. In in facilisis lorem. Vivamus mattis, tellus ac molestie mollis, est magna vestibulum ante.
        </p>
        <div className="flex space-x-2 text-black/80 dark:text-white/90">
          <RxGithubLogo className="h-6 w-6" />
          <RxLinkedinLogo className="h-6 w-6" />
        </div>
      </section>
      <section>
        <h2 className="heading-h2">Recent Projects</h2>
      </section>
      <section>
        <h2 className="heading-h2">Latest Posts</h2>
      </section>
    </main>
  );
}
