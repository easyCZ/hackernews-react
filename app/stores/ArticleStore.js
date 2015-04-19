import AppDispatcher from '../AppDispatcher';
import events from 'events';
import Firebase from 'firebase';
import ArticleActions from '../actions/ArticleActions';

let _articles = [];
let _articleDetails = {};


class ArticleStore extends events.EventEmitter {

    constructor() {
        super();
    }

    setArticles(articles) {
        console.log('Setting articles', articles);
        _articles = articles;
    }

    getArticles() {
        return _articles;
    }

    emitChange() {
        this.emit('change');
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
            break;

        default:
            return true;

    }

    articleStore.emitChange();
    return true;
});

export default articleStore;