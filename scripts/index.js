'use strict';

/* global shoppingList, store */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
  api.createItem('pears', (newItem) => {
    api.getItems((items) => {
      console.log(items);
    });
  });
  api.getItems((items) => {
    items.forEach((item) => store.addItem(item));
    const item = store.items[0];
    console.log('current name: ' + item.name);
    store.findAndUpdate(item.id, { name: 'head' });
    console.log('new name: ' + item.name);
    shoppingList.render();
  });
  
});






// $.getJSON('https://thinkful-list-api.herokuapp.com/ei-student/items', (response) => {
//   console.log('api response:', response);
// });