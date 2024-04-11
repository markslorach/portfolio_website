import Link from "next/link";

const About = async () => {

  return (
    <section>
      <article className="prose min-w-full dark:prose-invert text-pretty tracking-wide">
        <p>In 2023, my love for tech and curiosity about how applications are built led me to transition from a career as a videographer and drone operator to completing CodeClan&apos;s Professional Software Development Bootcamp. I gained a strong foundation in building <Link href="/projects" className="bio-link">full-stack applications</Link> with <span className="bio-highlight">JavaScript</span>, Python and Java, including working with Frameworks, Object-Oriented Programming <span className="bio-highlight">OOP</span>, Test-Driven Development <span className="bio-highlight">TDD</span>, databases (<span className="bio-highlight">PostgreSQL</span>, MongoDB), version control, and agile methodologies.</p>

        <p>Since CodeClan, I&apos;ve focused my efforts on modern JavaScript development, diving deeper into <span className="bio-highlight">TypeScript</span> with <span className="bio-highlight">React</span> and <span className="bio-highlight">Next.js</span>. I&apos;m also exploring content management systems and tools like Prisma ORM to streamline database management in my personal projects - because who <i>really</i> wants to write raw SQL queries? Besides my own personal projects, I volunteer for the <Link href="https://www.scottishtecharmy.org/" target="_blank" className="bio-link">Scottish Tech Army</Link> as a web developer, which has been extremely rewarding.</p>

        <p>I spend a good chunk of time documenting as I learn, so I thought, &quot;<i>Why not start a blog?</i>&quot; You can check it out <Link href="/blog" className="bio-link">here</Link>. I focus on building hands-on tutorials centred around modern development.</p>

        <p>You&apos;ll often find me at the <Link href="https://www.meetup.com/techmeetup/" target="_blank" className="bio-link">Glasgow Tech Meetup</Link> and <Link href="https://www.meetup.com/glasgow-javascript/" target="_blank" className="bio-link">GlasgowJS</Link>, so if you spot me, feel free to say hey! You can also get in touch <Link href="/contact" className="bio-link">here</Link> or connect with me on <Link href="https://www.linkedin.com/in/markslorach/" target="_blank" className="bio-link">LinkedIn</Link>.</p>

      </article>
    </section>
  );
};

export default About;
