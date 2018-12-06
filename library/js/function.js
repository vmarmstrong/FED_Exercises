$(function () {
				
	$('#myTab a[href="#item1"]').tab('show');
	$('#myTab a[href="#item2"]').tab('show');
	$('#myTab a[href="#item3"]').tab('show');

	$('#nav-tabs a').on('click', function (e) {
		e.preventDefault()
		$(this).tab('show')
	})

});