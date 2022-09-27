import React from "react";
import Link from "next/link";

const Post = ({ post }) => {
  return (
    <div key={post.id} className="col-md-3 mb-3">
      <Link href={`/posts/${post.id}`}>
        <a className="text-decoration-none text-black">
          <div className="card shadow w-100 h-100">
            <div className="card-body p-3">
              <h5>{post.title}</h5>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Post;
