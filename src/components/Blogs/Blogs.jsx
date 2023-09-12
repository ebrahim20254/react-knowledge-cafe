import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleBookmarks, handleMarkTime}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h2 className="text-4xl">blogs: {blogs.length}</h2>
            {
                blogs.map(blog =>
                     <Blog key={blog.id} blog={blog}
                     handleBookmarks = {handleBookmarks}
                     handleMarkTime = {handleMarkTime}
                     ></Blog>)
            }
        </div>
    );
};

export default Blogs;