import React from "react";
import Link from "next/link";

const PostDetails = ({ post }) => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card shadow p-3">
          <h4 className="text-center">{post.title}</h4>
          <div className="card-body">{post.body}</div>
        </div>
        <Link href="/">
          <a className="text-decoration-none text-white btn btn-primary w-100 mt-2">
            <div> Go back</div>
          </a>
        </Link>
      </div>
    </div>
  );
};
//her defe request gedende yeni html yaradir.(ssr) 1ci usul
// export async function getServerSideProps(context) {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const post = await res.json();
//   return {
//     props: {
//       post,
//     },
//   };
// }


//sehifeler evvelden yaradilir static olaraq. 2ci usul
//butun postlari getirecek
export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);

  const posts = await res.json();
  const paths=posts.map(post=>{
    return {
      params:{id:post.id.toString()}
    }
  })
  return {
    paths,
    fallback: false,
  };
};

//bize lazim olan post ucun

export const getStaticProps=async(context)=>{
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);

  const post = await res.json();
  return {
    props:{
      post,
    },
  };
};

export default PostDetails;
