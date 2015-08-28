import React from 'react';
import ArticleStore from '../stores/ArticleStore';
import ArticleActions from '../actions/ArticleActions';
import './ArticleSummary.scss';


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
        this.setState({
            story: story
        });
    }

    render() {
        if (this.state && this.state.story)
          return (
            <a href={this.state.story.url} className="mdl-grid ArticleSummary">
              <div className="mdl-cell mdl-cell--12-col">{this.state.story.title}</div>
            </a>
          );

        return (
          <span className="collection-item">Loading - {this.props.articleId}</span>
        );

    }

}

export default ArticleSummary;
