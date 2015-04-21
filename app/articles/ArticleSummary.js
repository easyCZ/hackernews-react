import React from 'react';
import ArticleStore from '../stores/ArticleStore';
import ArticleActions from '../actions/ArticleActions';
import ArticleSummaryTitle from './ArticleSummaryTitle';
import ArticleSummaryStyle from './ArticleSummary.scss';


class ArticleSummary extends React.Component {

    constructor(props) { super(props); }

    componentDidMount() {
        ArticleStore.addStoryChangeListener(
            this.props.articleId,
            story => this.onStoryChange(story)
        );

        ArticleActions.loadStory(this.props.articleId);
    }

    onStoryChange() {
        let story = ArticleStore.getStory(this.props.articleId);
        console.log('story', story);
        this.setState({
            story: story
        });
    }

    render() {
        if (this.state && this.state.story)
            return (
                <a href={this.state.story.url} className="collection-item ArticleSummary">
                    <ArticleSummaryTitle
                        author={this.state.story.by}
                        timestamp={this.state.story.time} />

                    {this.state.story.title}
                </a>
            );

        return (
            <span className="collection-item">Loading - {this.props.articleId}</span>
        );

    }

}

export default ArticleSummary;

