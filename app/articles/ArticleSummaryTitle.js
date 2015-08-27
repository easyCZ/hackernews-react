import React from 'react';
import ArticleSummaryTitleStyle from './ArticleSummaryTitle.scss';

class ArticleSummaryTitle extends React.Component {

    constructor(props) { super(props); }

    render() {
        let date = new Date(this.props.timestamp * 1000);
        console.log(date);
        return (
            <div className="ArticleSummaryTitle cf">
                <div className="left">
                    {date.toString()}
                </div>
                <div className="right">
                    {this.props.author}
                </div>
            </div>
        );
    }

}

ArticleSummaryTitle.propTypes = {
    timestamp: React.PropTypes.string.isRequired,
    author: React.PropTypes.string.isRequired
}

export default ArticleSummaryTitle;
