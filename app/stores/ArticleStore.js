import AppDispatcher from '../AppDispatcher';
import events from 'events';
import Firebase from 'firebase';
import ArticleActions from '../actions/ArticleActions';

let _articles = [];
let _storyDetails = {};


class ArticleStore extends events.EventEmitter {

    constructor() {
        super();
    }

    getArticles() {
        return _articles;
    }

    setArticles(articles) {
        console.log('Setting articles', articles);
        _articles = articles;
    }

    getStory(storyId) {
        return _storyDetails[storyId];
    }

    setStory(storyId, story) {
        _storyDetails[storyId] = story;
    }


    emitChange() {
        this.emit('change');
    }

    emitStoryChange(storyId) {
        this.emit(`STORY_CHANGE_${storyId}`);
    }


    addStoryChangeListener(storyId, callback) {
        this.on(`STORY_CHANGE_${storyId}`, callback);
    }

    removeStoryChangeListener(storyId, callback) {
        this.removeListener(`STORY_CHANGE_${storyId}`, callback);
    }


    addChangeListener(callback) {
        this.on('change', callback);
    }

    removeChangeListener(callback) {
        this.removeListener('change', callback);
    }

}

let articleStore = new ArticleStore();

AppDispatcher.register((payload) => {
    let action = payload.action;


    switch (action.actionType) {

        case 'CHANGE':
            // articleStore.emitChange();
            break;

        case 'RECEIVE_TOP_STORIES':
            articleStore.setArticles(action.data);
            articleStore.emitChange();
            break;

        case 'STORY_RECEIVE':
            articleStore.setStory(action.data.id, action.data);
            articleStore.emitStoryChange(action.data.id);
            break;

        default:
            return true;

    }

    return true;
});

export default articleStore;