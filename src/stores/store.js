import { observable, decorate, action, computed } from 'mobx';
import * as contentful from "contentful";

const client = contentful.createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN
});

export class Store {
  posts = [];

  // get latestCount() {
  //   return this.posts.filter(post => post.fields.status === 'registered').length;
  // }

  getPosts() {
    client.getEntries({
      content_type: 'post'
    })
      .then((response) => {
        console.log('we have got posts', response.items);
        this.posts = response.items;
      })
      .catch((error) => {
        console.log("Error occurred while fetching Entries");
        console.error(error)
      })
  };

  getPost(id) {
    client.getEntries({
      content_type: 'post',
      'fields.id': id
    })
      .then((response) => {
        this.currentPost = response.items[0];
        this.getCost();

      })
      .catch((error) => {
        console.log("Error occurred while fetching Entries");
        console.error(error)
      })
  };
}

decorate(Store, {
  posts: observable,
  getPost: action,
  getPosts: action
});

export default new Store();
