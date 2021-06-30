const btn = document.querySelector('.btn');
const modalCalc = document.querySelector('.modal');
const calc = modalCalc.querySelector('.calc');
const numeral = calc.querySelectorAll('.numeral');



btn.addEventListener('click', modalOpened);

modalCalc.addEventListener('click', function (e) {
	let target = e.target;

	if (!(target === calc && target === calc.children)) {
		modalCalc.classList.remove('opened');
	}

})

function modalOpened() {
	modalCalc.classList.add('opened');
	if (modalCalc.classList.contains('opened')) {
		document.body.classList.add('scroll-hidden');
	}
}
