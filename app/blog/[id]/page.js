async function getPost(id) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  return res.json();
}

export default async function BlogDetailPage({ params }) {
  const { id } = await params;
  const post = await getPost(id);

  return (
    <main className="p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          {post.title}
        </h1>

        <p className="text-gray-600 mb-8">
          {post.body}
        </p>

        <a
          href="/"
          className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg"
        >
          Back to Blog
        </a>
      </div>
    </main>
  );
}