'use strict';

/* global shoppingList, store */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
  api.getItems();
  api.createItem('pears', (newItem) => {
    api.getItems((items) => {
      console.log(items);
    });
  });
});



store.items.push(Item.create('apples'));


// $.getJSON('https://thinkful-list-api.herokuapp.com/ei-student/items', (response) => {
//   console.log('api response:', response);
// });