$(document).ready(function()
{
	$("button").click(function()
	{
		$("div").css("color", "blue").slideUp(2000).slideDown(2000);
	});
});