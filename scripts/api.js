'use strict';

const api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/aaron-nikolas';

  const getItems = function (callback) {

    $.getJSON(`${BASE_URL}/items`, (response) => {
      callback(response);
    });

  };

  const updateItem = function (id, updateData, callback, callback2) {
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify(updateData),
      success: function(data) {
        callback(data);  //on success run a function with the successful message 
      },
      error: function(data) {
        callback(data);
      }
    });
  };

  const deleteItem = function (id, callback) {
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'DELETE',
      success: function(data) {
        callback(data);
      }
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
        callback(data);
      }
    });
  };






  return {
    getItems,
    createItem,
    updateItem,
    deleteItem
  };

}());