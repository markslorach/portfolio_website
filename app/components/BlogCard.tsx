// Icons
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

const blogPosts = [
  {
    id: 1,
    title: "The Power of Simplicity in Web Design",
    slug: "power-of-simplicity-web-design",
    tags: ["design", "minimalism", "UI"],
    summary:
      "Explore the benefits of clean, uncluttered web design for enhanced user experience.",
  },
  {
    id: 2,
    title: "Mastering JavaScript Promises",
    slug: "mastering-javascript-promises",
    tags: ["JavaScript", "promises", "async"],
    summary:
      "Learn to manage asynchronous code effectively in JavaScript using promises.",
  },
  {
    id: 3,
    title: "Veganuary: Delicious Plant-Based Recipes",
    slug: "veganuary-plant-based-recipes",
    tags: ["vegan", "recipes", "healthy"],
    summary:
      "Discover flavorful and nutritious vegan recipes perfect for Veganuary and beyond.",
  },
  {
    id: 4,
    title: "Travel Photography Tips",
    slug: "travel-photography-tips",
    tags: ["photography", "travel", "tips"],
    summary:
      "Improve your travel photography skills with these practical tips and techniques.",
  },
];

const BlogCard = () => {
  return (
    <section className="mb-24">
      <div className="flex flex-col space-y-3">
        {blogPosts.map((post, idx) => (
          <article key={idx} className="projectCard">
            <div className="mb-2 flex items-center">
              <h2 className="leading-1 line-clamp-1 font-semibold">
                {post.title}
              </h2>
              <ArrowUpRightIcon className="ml-2 h-4 w-4" />
            </div>
            <small className="leading-1 line-clamp-1 text-black/50">
              {post.summary}
            </small>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogCard;
