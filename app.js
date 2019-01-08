$('.spoiler').on('click', 'button', function(event){
  // Show the spoiler text
  $(this).prev().show(); // "this" is replacing the event.target in this case, eg bellow
  // Hide the "Spoiler Alert" button
  $(this).hide(); // $(event.target).hide(); === $(this).hide();
});

// Create the "Spoiler Alert" button
const $button = $('<button>Spoiler Alert</button>');
// Append to page
$('.spoiler').append($button);

// Hide the spoiler text
$('.spoiler span').hide();
