import PropTypes from 'prop-types';;
import { FaBookmark } from 'react-icons/fa';
const Blog = ( {blog, handleBookmarks, handleMarkTime} ) => {
    // console.log(blog);
    const {title, cover,author_img,reading_time,author,posted_date,hashtags} = blog;
    return (
        <div className='mb-20 space-y-5'>
            <img className='w-full mb-8' src={cover} alt="" />
            <div className='flex justify-between mb-4'>
                <div className='flex gap-6'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleBookmarks(blog)} className=' text-red-400 ml-2'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
        <p>
           {
                hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
            }
        </p>
        <button onClick={()=>handleMarkTime(reading_time)} className='text-purple-700 font-bold underline'>Mark as read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;