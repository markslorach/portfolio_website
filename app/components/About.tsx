import Link from "next/link";

const About = async () => {
  return (
    <section>
      <article className="prose min-w-full text-pretty tracking-wide dark:prose-invert">
        <p>
          In 2023, my passion for technology led me from a career as a
          videographer and drone operator into the world of software
          development. I completed CodeClan&apos;s Professional Software Development
          Bootcamp, where I learned the fundamentals of full-stack application
          development using <span className="bio-highlight">JavaScript</span>,
          Python, Java, databases such as{" "}
          <span className="bio-highlight">PostgreSQL</span> and{" "}
          <span className="bio-highlight">MongoDB</span>, version control, and
          agile methodologies. I also gained experience with Object-Oriented
          Programming, Test-Driven
          Development and worked with{" "}
          <span className="bio-highlight">Node.js</span> and{" "}
          <span className="bio-highlight">Express</span> for API development.
        </p>
        <p>
          Since then, I have focused on modern JavaScript development, diving
          deeper into <span className="bio-highlight">TypeScript</span> and{" "}
          <span className="bio-highlight">React</span> and utilising the
          server-side capabilities and routing within{" "}
          <span className="bio-highlight">Next.js</span>. I am a big fan of
          Tailwind CSS and use libraries such as Shadcn/ui to improve my design
          workflow. I have also been exploring content management systems and
          using tools like Prisma ORM to make my personal projects more
          efficient. Currently, I am volunteering as a web developer for the{" "}
          <Link
            href="https://www.scottishtecharmy.org/"
            target="_blank"
            className="bio-link"
          >
            Scottish Tech Army
          </Link>
          , which has been an incredibly rewarding experience.
        </p>
        <p>
          I always try to document what I learn, so I thought, &quot;Why not start a
          blog?&quot; You can check it out{" "}
          <Link href="/blog" className="bio-link">
            here
          </Link>
          . I focus on building hands-on tutorials centred around modern
          development.
        </p>
        <p>
          You will often find me at the{" "}
          <Link
            href="https://www.meetup.com/techmeetup/"
            target="_blank"
            className="bio-link"
          >
            Glasgow Tech Meetup
          </Link>{" "}
          and{" "}
          <Link
            href="https://www.meetup.com/glasgow-javascript/"
            target="_blank"
            className="bio-link"
          >
            GlasgowJS
          </Link>
          , so if you spot me, feel free to say hello! You can also contact me{" "}
          <Link href="/contact" className="bio-link">
            here
          </Link>{" "}
          or connect with me on{" "}
          <Link
            href="https://www.linkedin.com/in/markslorach/"
            target="_blank"
            className="bio-link"
          >
            LinkedIn
          </Link>
          . ✌
        </p>
      </article>
    </section>
  );
};

export default About;
