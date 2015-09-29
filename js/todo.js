/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
document.ontouchmove = function(e){ e.preventDefault(); }
$('#add').tap(function(){
  $('#add').hide();
  $('#cancel').show();
  $('#newitem').slideDown();
  saveon = false;
  activatesave();
});

$('#cancel').tap(function(){
  $('#add').show();
  $('#cancel').hide();
  $('#newitem').slideUp();
  $('div.delete').hide();
  swipeon = false;
});
