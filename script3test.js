
$(document).ready(function() {
  // Hide all panels except the first one
  $('.Largebox:not(:first)').hide();

  // Header click event
  $('.accordion-header').on('click', function() {
    // Hide all panels
    $('.accordion-panel').hide();

    // Show the selected panel
    var targetPanel = $(this).data('target');
    $('#' + targetPanel).show();
  });
});