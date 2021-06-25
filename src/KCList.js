import EachKC from './EachKC';
import AuthorPagination from './AuthorPagination';
import { useState } from "react";


const KCList = (props) => {

    const KCBlogs = props.KCBlogs;
    // title = props.title;
    // console.log(KCBlogs);

    const [showPerPage, setShowPerPage] = useState(3);
    const [pagination, setPagination] = useState({
        start: 0,
        end: showPerPage,
    });

    const onPaginationChange = (start, end) => {
        setPagination({ start: start, end: end });
    };

    return (                
        <div className="outerKB">
            {KCBlogs.slice(pagination.start, pagination.end).map((eachKCBlog) => (
                <EachKC eachKC = {eachKCBlog}/>
            ))}
            
            <AuthorPagination
                showPerPage={showPerPage}
                onPaginationChange={onPaginationChange}
                totalAuthors={KCBlogs.length}
            />

        </div>
        
    );
}
 
export default KCList;