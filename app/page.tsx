export default function Home() {
  return (
    <main>
      <section className="flex flex-col space-y-4">
        <h1 className="heading-h1">
          Hello, I&apos;m{" "}
          <span className="underline decoration-blue-400 decoration-[6px] underline-offset-4">
            Mark
          </span>
          .
        </h1>
        <p>
          I'm a passionate software developer with a focus on creating elegant
          solutions. My expertise includes full-stack web development, cloud
          computing, and mobile app development. I love turning ideas into
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
