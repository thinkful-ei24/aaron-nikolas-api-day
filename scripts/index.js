'use strict';

/* global shoppingList, store */

$(document).ready(function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
  // api.createItem('pears', (newItem) => {
  //   api.getItems((items) => {
  //     console.log(items);
  //   });
  // });
  api.getItems((items) => {
    items.forEach((item) => store.addItem(item));
    shoppingList.render();
  });

});






// $.getJSON('https://thinkful-list-api.herokuapp.com/ei-student/items', (response) => {
//   console.log('api response:', response);
// });