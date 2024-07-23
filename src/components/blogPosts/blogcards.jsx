import React from "react";
import Image from "next/image";
import styles from "@/components/blogPosts/blog_post.module.css";

const BlogsCards = ({ item, handleReadMoreClick }) => (
  <div className={styles.gridItem}>
    <Image src={item.image} alt="grid" className={styles.ImageContainer} />
    <div className={styles.date}>{item.date}</div>
    <div className={styles.description}>{item.blogPost_text}</div>
    {/* <button
      onClick={() => handleReadMoreClick(item.readMoreRoute)}
      className="Blogscard-link"
      role="button"
    >
      <span className="text">Read More</span>
    </button> */}
  </div>
);

export default BlogsCards;
