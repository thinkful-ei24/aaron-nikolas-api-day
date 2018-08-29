'use strict';

const api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/aaron-nikolas';

  const getItems = function (callback) {

    $.getJSON(`${BASE_URL}/items`, (response) => {
      console.log(response);
    });

  };


  const createItem = function (name, callback) {
    let newItem = {
      name: name
    };

    

    $.ajax({
      url: `${BASE_URL}/items`,
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(newItem),
      success: function(data) {
        console.log(data);
        callback(data);
      }
    });
  };






  return {
    getItems,
    createItem
  };

}());