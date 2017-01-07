$('.get-image').on('click', function(e){
  e.preventDefault();
  $('.new-stuff').remove();

  $.ajax({
    url: 'https://api.instagram.com/oembed?url=http://instagr.am/p/' + $('.get-id').val().match(new RegExp("/p/" + "(.*)" + "/"))[1] + '/',
    type: "POST",
    dataType: 'jsonp'
  }).done(function(e) {
    $('<div class="new-stuff">').insertAfter('form');
    $('.new-stuff').prepend('<img class="generated-image" src="' + e.thumbnail_url.replace(/640/g, '1080') + '">');
    $('.new-stuff').append('<a class="download" href="' + e.thumbnail_url.replace(/640/g, '1080') + '" download>Download</a>');
  });
});
