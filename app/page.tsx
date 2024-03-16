import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section>
        <figure>
          <Image
            src="/images/me.png"
            alt="Mark Slorach avatar"
            width={400}
            height={400}
            className="h-20 w-20 rounded-lg mb-2"
          />
        </figure>

        <h1 className="heading-h1 mb-8">
          Hello, I&apos;m{" "}
          <span className="cursor-pointer underline decoration-blue-400 decoration-[6px] underline-offset-4">
            Mark
          </span>
          .
        </h1>
        <p>
          I&apos;m a passionate software developer with a focus on creating
          elegant solutions. My expertise includes full-stack web development,
          cloud computing, and mobile app development. I love turning ideas into
          robust, user-friendly applications.
        </p>
      </section>
      <section>
        <h2 className="heading-h2">Recect Projects</h2>
      </section>
      <section>
        <h2 className="heading-h2">Latest Posts</h2>
      </section>
    </main>
  );
}
