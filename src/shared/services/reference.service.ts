import {Injectable} from 'angular2/core';
import {REFERENCES} from './mock-references';
import {TOPICS} from './mock-topics';
import {Topic} from '../../app/model/topic';
import {Reference} from '../../app/model/reference';


@Injectable()
export class ReferenceService {
    MOCK_IDENTIFIER: number = 11;

    getReferences() {
        return Promise.resolve(REFERENCES.sort(function(a, b) {
			if(a.ranking < b.ranking)
				return -1;
			if(a.ranking > b.ranking)
				return 1;
			return 0
		}));
    }

    getReference(id: number) {
        return REFERENCES.filter(ref => ref.id === id)[0];
    }

    testIt() {
        return Promise.resolve();
    }

    getTopicById(id :number) {
        var t = TOPICS.filter(topic => topic.id === id)[0];
        console.log(t);
        return t;
    }

    addReference(ref) {
        ref.id = this.MOCK_IDENTIFIER + 1;
        REFERENCES.push(ref);
        this.MOCK_IDENTIFIER = this.MOCK_IDENTIFIER + 1;
    }

    createNewTopic(topic: Topic) {
        topic.id = TOPICS.length + 1;
        TOPICS.push(topic);
    }

    getTopics() {
        return Promise.resolve(TOPICS);
    }

    testLog(t) {
        console.log(t);
    }
}
