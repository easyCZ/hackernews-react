import React from 'react';
import ArticleStore from '../stores/ArticleStore';
import ArticleActions from '../actions/ArticleActions';


class ArticleSummary extends React.Component {

    constructor(props) { super(props); }

    componentDidMount() {
        ArticleStore.addStoryChangeListener(
            this.props.articleId,
            story => this.onStoryChange(story)
        );

        // TODO: Ask for article detail to be loaded
        ArticleActions.loadStory(this.props.articleId);
    }

    onStoryChange() {
        this.setState({
            story: ArticleStore.getStory(this.props.articleId)
        });
    }

    render() {
        if (this.state && this.state.story)
            return (<li className="collection-item">{this.state.story.title}</li>);

        return (
            <li className="collection-item">Loading - {this.props.articleId}</li>
        );

    }

}

export default ArticleSummary;

