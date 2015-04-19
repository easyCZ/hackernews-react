import AppDispatcher from '../AppDispatcher';
import HackerNews from '../api/HackerNews';


let _NAME = '[Article Actions]';

class ArticleActions {

    loadTopStories() {
        console.log(_NAME, 'Loading Top Stories...');
        HackerNews
            .topStories()
            .on('value', data => this.onTopStoriesLoad(data.val().slice(0, 30)));
    }

    loadStory(storyId) {
        console.log(_NAME, 'Loading Story', storyId);

        HackerNews
            .story(storyId)
            .on('value', data => this.onStoryLoad(data.val()));
    }

    onTopStoriesLoad(stories) {
        console.log(_NAME, 'Loaded Top Stories', stories);
        AppDispatcher.handleView({
            actionType: 'RECEIVE_TOP_STORIES',
            data: stories
        });
    }

    onStoryLoad(story) {
        console.log(_NAME, 'Story loaded.', story);
        AppDispatcher.handleView({
            actionType: 'STORY_RECEIVE',
            data: story
        });
    }
}

let articleActions = new ArticleActions();

export default articleActions;