import FeedCard from "./FeedCard";

function FeedList({ posts }) {
  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <FeedCard
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
}

export default FeedList;