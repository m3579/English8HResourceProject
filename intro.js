$(document).ready(function() {

	$.ajax({
		url: "intro.txt",
		
		success: function(result) {
			$(".intro").html(result);
		},
		
		error: function(xhr, status, error) {
			alert("Error:\n" + xhr + "\n" + status + "\n" + error);
		}
	});
	
});
