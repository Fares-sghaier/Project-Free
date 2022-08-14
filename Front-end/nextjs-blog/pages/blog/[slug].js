import Link from "next/link";

export default function Posts() {
  const posts = [
    {
      name: "fares",
      age: 21,
    },
  ];
  return (
    <div>
      {posts.map((elem, index) => {
        return (
          <div key={index}>
            <Link href={`/blog/${encodeURIComponent(elem.slug)}`}>
              <h1>{elem.name}</h1>
            </Link>
            <p>{elem.age}</p>
          </div>
        );
      })}
    </div>
  );
}
