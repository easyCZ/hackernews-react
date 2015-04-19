import AppDispatcher from '../AppDispatcher';
import HackerNews from '../api/HackerNews';


let _NAME = '[Article Actions]';

class ArticleActions {

    loadTopStories() {
        console.log(_NAME, 'Loading Top Stories...');
        HackerNews
            .topStories()
            .on('value', data => this.onTopStoriesLoad(data.val()));
    }

    onTopStoriesLoad(stories) {
        console.log(_NAME, 'Loaded Top Stories', stories);
        AppDispatcher.handleView({
            actionType: 'RECEIVE_TOP_STORIES',
            data: stories
        });
    }
}

let articleActions = new ArticleActions();

export default articleActions;