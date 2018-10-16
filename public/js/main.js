$('#myModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var itemId = button.data('id') // Extract info from data-* attributes
    var content = button.closest('li').find('h4').text();
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    // console.log(content)
    modal.find('form.modal-body input').val(content)
    modal.find('form.modal-body').prop('action', 'edit/' + itemId);
})


// $('.list-group-item').hover(function () {
//     // over
//     $(this).find('.btn-group').show();
// }, function () {
//     // out
//     $(this).find('.btn-group').hide();
// });


$('.panel-footer span mark').eq(0).text($('.list-group-item').length);
$('.panel-footer span mark').eq(1).text($('.list-group-item .del').length);
$('.panel-footer span mark').eq(2).text($('.list-group-item').length - $('.list-group-item .del').length);