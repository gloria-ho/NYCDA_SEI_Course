$(document).ready(function() {
	$('#dropdown').on('change', function() {
		let theme = $('#dropdown').val();
		$('#header, #div, #footer').removeClass('morningText', 'afternoonText', 'nightText');
		$('#div').removeClass('morningDBg').removeClass('afternoonDBg').removeClass('nightDBg');
		$('#header').removeClass('morningHBg').removeClass('afternoonHBg').removeClass('nightHBg');
		$('#footer').removeClass('morningFBg').removeClass('afternoonFBg').removeClass('nightFBg');
		$('#header, #div, #footer').addClass(theme.toLowerCase() + 'Text');
		$('#div').addClass(theme.toLowerCase() + 'DBg');
		$('#header').addClass(theme.toLowerCase() + 'HBg');
		$('#footer').addClass(theme.toLowerCase() + 'FBg');
	});
});