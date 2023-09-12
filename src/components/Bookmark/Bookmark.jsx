
const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="p-4 m-4 bg-slate-400 rounded-xl">
            <h3 className="text-2xl">{title}</h3>
        </div>
    );
};

export default Bookmark;