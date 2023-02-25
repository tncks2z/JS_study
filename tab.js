let tabNum = $('.tab-content').length;
let tabButton = $('.tab-button');
let tabContent = $('.tab-content');
// for (let i = 0; i < tabNum; i++) {
// 	tabButton.eq(i).on('click', function () {
// 		openTab(i);
// 	});
// }
function openTab(num) {
	tabButton.removeClass('orange');
	tabButton.eq(num).addClass('orange');
	tabContent.removeClass('show');
	tabContent.eq(num).addClass('show');
}
$('.list').click(function (e) {
	openTab(Number(e.target.dataset.id));
});
