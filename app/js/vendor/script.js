const btn = document.querySelector('.btn');
const modalCalc = document.querySelector('.modal');
const calc = modalCalc.querySelector('.calc');
const numeral = calc.querySelectorAll('.numeral');
const result = document.querySelector('.result');

numeral.forEach(item => {
	item.addEventListener('click', () => {
		if (item.getAttribute('data-value')) {
			if (result.innerHTML == 0) {
				result.innerHTML = '';
			}
			result.innerHTML += item.getAttribute('data-value');
		} else {
			result.innerHTML = 0;
		}

	})
})



btn.addEventListener('click', modalOpened);

modalCalc.addEventListener('click', function (e) {
	let target = e.target;

	if (!(target === calc || target === calc.children[0] || target === calc.children[1])) {
		console.log(target.classList.contains('numeral'))
		if (!(target.classList.contains('numeral'))) {
			document.body.classList.remove('scroll-hidden');
			modalCalc.classList.remove('opened');
		}
	}
})

function modalOpened() {
	modalCalc.classList.add('opened');
	if (modalCalc.classList.contains('opened')) {
		document.body.classList.add('scroll-hidden');
	}
}
