"use strict";
class DocumentItem {
    constructor() {
        this.setState(new DraftDocumentItemState());
    }
    getState() {
        return this.state;
    }
    setState(state) {
        this.state = state;
        this.state.setContext(this);
    }
    publishDoc() {
        this.state.publish();
    }
    deleteDoc() {
        this.state.delete();
    }
}
class DocumentItemState {
    setContext(item) {
        this.item = item;
    }
}
class DraftDocumentItemState extends DocumentItemState {
    constructor() {
        super();
        this.name = "DraftDocument";
    }
    publish() {
        console.log(`text "${this.item.text}"  send to site`);
        this.item.setState(new PublishDocumentItemState());
    }
    delete() {
        console.log(`Document was deleted`);
    }
}
class PublishDocumentItemState extends DocumentItemState {
    constructor() {
        super();
        this.name = "DraftDocument";
    }
    publish() {
        console.log(`Public doc hasn't be published`);
    }
    delete() {
        console.log("removed from publish");
        this.item.setState(new DraftDocumentItemState());
    }
}
const item = new DocumentItem();
item.text = 'My post!';
console.log(item.getState());
item.publishDoc();
console.log(item.getState());
item.publishDoc();
item.deleteDoc();
console.log(item.getState());
