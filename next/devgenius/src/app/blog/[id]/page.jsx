import Image from "next/image";
import styles from "./blogPost.module.css";

async function getBlogPostData(postId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getUserData(userId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const blogPost = await getBlogPostData(params.id);
  const user = await getUserData(blogPost.userId);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{blogPost.title}</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className={styles.author}>
            <Image
              src="/illustration.png"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{user.name}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/apps.jpg" alt="" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{blogPost.body}</p>
      </div>
    </div>
  );
};

export default BlogPost;
