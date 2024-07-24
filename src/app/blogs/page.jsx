"use client"
import BlogsPage from "@/components/blogspage/page";
import { useEffect } from "react";
import BlogsMain from "@/components/blogPosts/page";

const Blogs =() =>{
    useEffect(() => {
        document.title =
            "Blogs | Royal Crown";
    });
    return(
        <div>
            <BlogsPage />
            <BlogsMain />
        </div>
    )
}
export default Blogs;