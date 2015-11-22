import $ from 'jquery';

  let token;
$.ajaxSetup({
  headers: {
    "Authorization": "Bearer " + token
  }
});

export default $;
