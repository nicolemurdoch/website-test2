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
  $('#local-food-info').text('For the Espresso Snobs of the World');
});

$('.queens-comfort').on('click', function() {
  $('#local-food-info').img('If you hanker for artery-clogging goodness');
});

$('.vite-italian').on('click', function() {
  $('#local-food-info').text('some of the best local italian around - seasonal, innovative menu');
});
