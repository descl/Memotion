var slipsum = 'Now that we know who you are, I know who I am. I\'m not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain\'s going to be? He\'s the exact opposite of the hero. And most times they\'re friends, like you and me! I should\'ve known way back when... You know why, David? Because of the kids. They called me Mr Glass.';

$(function() {
  addNote('Note grave fraiche', '31/01/2014 18h05', slipsum, 1);
  addImage('31/01/2014 18h05', 'the_egg_chair.jpg', 1)
  addNote('Note sympa quand même', '31/01/2014 18h25', 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.', 2);
});

function addNote(title, timestamp, text, i) {
  $('.leftCollumn').append('<div class="note note' + i + '"><h2>' + title + '</h2><p><span class="glyphicon glyphicon-book"></span>Note écrite à ' + timestamp +'</p></div>');
  $('.note' + i).popover({
    content: '<div class="notePopover"><h3>' + title + '</h3><p style="text-align: justify;">' + text + '</p></div>',
    placement: 'right',
    trigger: 'hover',
    html: true
  });
}

function addImage(timestamp, image, i) {

  $('.leftCollumn').append('<div class="image image' + i + '"><h2>Photo</h2><p><img style="width: 30px; margin-right: 15px;" src="img/' + image + '"/>Photo prise à ' + timestamp +'</p></div>');
  $('.image' + i).popover({
    content: '<div class="imagePopover" style="min-height: 325px;"><img src="img/' + image + '" class="img-responsive img-rounded" /></div>',
    placement: 'right',
    trigger: 'hover',
    html: true
  });
}