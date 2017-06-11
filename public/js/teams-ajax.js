$(document).ready(function() {

  $('.delete-link').click(function(e) {
    e.preventDefault();
    var teamURL = $(this).attr('href');
    var elementToDelete = $(this);
    // console.log(teamURL);
    $.ajax({
      method: 'DELETE',
      url: teamURL
    }).done(function(data) {
      elementToDelete.parent().remove();
      console.log('deleted');
      console.log(data);
    })
  });

  $('.put-form').submit(function(e) {
    e.preventDefault();

    var teamUrl = $(this).attr('action');
    var teamData = $(this).serialize();

    // console.log(teamData);
    $.ajax({
      url: teamUrl,
      method: 'PUT',
      data: teamData
    }).done(function(data) {
      console.log(data.msg);
      window.location = '/teams';
    });
  });

});
