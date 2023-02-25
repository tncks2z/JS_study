let tabNum = $('.tab-content').length;
let tabButton = $('.tab-button');
let tabContent = $('.tab-content');
for (let i = 0; i < tabNum; i++) {
	tabButton.eq(i).on('click', function () {
		tabButton.removeClass('orange');
		tabButton.eq(i).addClass('orange');
		tabContent.removeClass('show');
		tabContent.eq(i).addClass('show');
	});
}
