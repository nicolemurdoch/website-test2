$('#black-button').on('click', function() {
  $('body').css('background', 'black');
});

$('#yellow-button').on('click', function() {
  $('body').css('background', '#ffcc00');
});

$('#default-button').on('click', function() {
  $('body').css('background', '#fff2e6');
});

$('.madame-sousou').on('click', function() {
  $('#local-food-info').text('laaaaalalalla');
});

$('.queens-comfort').on('click', function() {
  $('#local-food-info').img('YUMMMMM');
});

$('.vite-italian').on('click', function() {
  $('#local-food-info').text('Mamma Mia!!!');
});
