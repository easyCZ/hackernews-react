import React from 'react';
import ArticleList from '../articles/ArticleList';

class Sidebar extends React.Component {

    render() {
        return (
            <div className="col s3">
                <ArticleList />
            </div>
        );
    }

}

export default Sidebar;