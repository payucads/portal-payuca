
//Enable the default input field with licence plates info
$('#bearbeiten1').click(function(){
  $('#kennzeichen1').prop('disabled', false);
});

$(function () {

  // initial value
  var count = 1;

  //Hinzufügen Button actions
  $('#add').on('click', function () {
    count++; //increase the initial value for one
    var idnr = count; //assign a static value for the IDs - from count

    //Add a new input field for the additional licence plates - adds a whole content block
    $('<div class="col-lg-6 m-b-md kennzeichen'+ idnr + '"><label>Kennzeichen '+ count + '</label><div class="input-group"><input type="text" class="form-control" placeholder="W7777H" id="kennzeichen' + count + '" disabled name="kennzeichen"><div class="input-group-btn"><button class="btn btn-default dropdown-toggle" data-toggle="dropdown" type="button" aria-expanded="false"><span class="fa fa-cog"></span></button><ul class="dropdown-menu pull-right"><li><a id="bearbeiten'+ idnr +'">Bearbeiten</a></li><li><a id="entfernen'+ idnr +'">Entfernen</a></li></ul></div></div></div>').appendTo('#kennzeichen');

    //Enable the input field with the licence plates info
    $('#bearbeiten' + idnr).click(function(){
      $('#kennzeichen' + idnr).prop('disabled', false);
    });

    //Remove the whole content block, containing the LP input field
    $('#entfernen' + idnr).click(function(){
        $('.kennzeichen' + idnr).remove();
    });

  });
});
