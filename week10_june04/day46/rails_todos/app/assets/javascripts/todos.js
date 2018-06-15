// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function() {
  if ($('body.todos.index').length == 0) {
    return;
  }

  console.log('index only');
  
  $('.delete-todo').click(function(e){
    e.preventDefault();
    let deletionUrl = e.target.getAttribute('href');
    $.ajax({
      method: 'DELETE',
      url: deletionUrl,
      success: function(data) {
        $(e.target).parents('.todo-div').remove();
        toastr.success('Your todo has been sucessfully deleted.');
      }
    })
    console.log(e);
  });

});



$(document).ready(function() {
  if ($('body.todos.new, body.todos.edit').length == 0) {
    return;
  }  

  console.log('new and edit only');

})