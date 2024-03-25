import { Tag } from "@/app/utils/interface";
import { Badge } from "@/components/ui/badge";
import { getTags } from "@/lib/fetchData";
import Link from "next/link";

export const revalidate = 0;

const TagsPage = async () => {
  const tags: Tag[] = await getTags();

  return (
    <section>
      <h1 className="hero-heading mb-20">#</h1>
      <div className="flex gap-2">
        {tags.length > 0 &&
          tags.map((tag) => (
            <Badge className="text-base" variant="outline" key={tag._id}>
              <Link href={`/tags/${tag.slug.current}`}>{`#${tag.name}`}</Link>
            </Badge>
          ))}
      </div>
    </section>
  );
};

export default TagsPage;
