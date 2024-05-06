$(document).ready(function() {
  // Show the default tab on page load
  showTab("tab1");

  // Handle tab click event
  $(".tab").click(function() {
    var tabId = $(this).data("tab");
    showTab(tabId);
  });

  // Function to show/hide tabs
  function showTab(tabId) {
    // Hide all tabs
    $(".tab-content").hide();

    // Show the selected tab
    $("#" + tabId).show();

    // Remove 'active' class from all tabs
    $(".tab").removeClass("active");

    // Add 'active' class to the clicked tab
    $("[data-tab='" + tabId + "']").addClass("active");
  }
});