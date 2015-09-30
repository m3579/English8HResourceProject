$(document).ready(function() {

	$.ajax({
		url: "menu.txt",
		
		success: function(result) {
			$("#menu-container").html(result);
		},
		
		error: function(xhr, status, error) {
			alert("Error:\n" + xhr + "\n" + status + "\n" + error);
		}
	});
	
});
