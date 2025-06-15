import Link from "next/link";
import { getSortedArticles } from "@/lib/articles";

export default function Blog() {
  const articles = getSortedArticles()
  return (
    <div>
      <div className="text-center font-bold text-5xl pt-16 pb-2">Blog</div>
      <div className="mt-8 text-xl italic text-center pt-2 pb-16">Articles about things in the world of math & physics that I find interesting!</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-32 mx-auto">
        {articles.map((article, id)=>(
          <div key={id}>
          <Link href={`/blog/${article.id}`}>
              <div className="border rounded">
                  <div className="relative">
                    <img src={article.image} className="w-full aspect-video object-cover rounded-t"></img>
                    <div className="absolute bottom-0 text-xs text-black bg-white opacity-60 p-1">{`Source: ${article.source}`}</div>
                  </div>
                  <div className="p-4">
                    <div className="font-semibold">{article.title}</div>
                  </div>
              </div>
          </Link>
      </div>
        ))}
      </div>
    </div>
  );
}
