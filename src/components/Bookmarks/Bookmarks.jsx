import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks ,readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-200 ml-4">
            <h3 className="text-2xl text-center underline text-purple-700 font-bold">Spent time on read :{readingTime} min</h3>
            <h2 className="text-4xl text-center bg-slate-200 rounded-xl mt-20">Bookmarks Blog: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;