import React from 'react';
import ArticleStore from '../stores/ArticleStore';


class ArticleSummary extends React.Component {

    constructor(props) { super(props); }

    componentDidMount() {
        // TODO: Ask for article detail to be loaded
    }

    render() {
        return (
            <li className="collection-item">{this.props.articleId}</li>
        );
    }

}

export default ArticleSummary;

