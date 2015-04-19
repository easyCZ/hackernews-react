import React from 'react';
import ArticleStore from '../stores/ArticleStore';
import AppDispatcher from '../AppDispatcher';
import ArticleActions from '../actions/ArticleActions';
import ArticleSummary from './ArticleSummary';


class ArticleList extends React.Component {

    constructor() {
        super();

        this.state = {
            articles: ArticleStore.getArticles()
        };
    }

    setArticles() {
        this.setState({
            articles: ArticleStore.getArticles()
        });
    }

    componentDidMount() {
        ArticleStore.addChangeListener(this._onChange.bind(this));

        // Fire and forget action
        ArticleActions.loadTopStories();
    }

    componentWillUnmount() {
        ArticleStore.removeChangeListener(this._onChange.bind(this));
    }

    _onChange(data) {
        this.setArticles();
    }

    render() {
        let articles = this.state.articles.map((article, i) => {
            return (
                <ArticleSummary articleId={article} />
                // <div className="Article">{article}</div>
            );
        });

        return (
            <ul className="collection">
                {articles}
            </ul>
        );
    }
}

export default ArticleList;