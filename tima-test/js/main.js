/* !!! В моей работе достаточно недочётов, но я надеюсь, что Вы сможете 
		научить меня бороться со всеми этими ошибками на протяжении всего времени обучения.
		Я прилежный ученик и постараюсь выложиться по максимуму! 
		Я закоментировал то, что понимаю что нужно было сделать, но не знаю как !!!*/

function validate() {
	let name = document.querySelector(".name");
	let surname = document.querySelector(".surname");
	let date = document.querySelector(".date");
	let select = document.querySelector(".select");
	// let radio = document.querySelector(".radio");   //  Не успел разобраться
	let email = document.querySelector(".email");
	let password = document.querySelector(".password");
	let adres = document.querySelector(".adres");
	
	let textPat = /([A-Za-z0-9-]+)/;
	let selectval = /([A-Za-zА-Яа-я])/;
	let emailreg = /([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.])/;

	switch (true) {
		case !name.value:
			let trr = document.createElement('div');
			trr.classList.add('error-message');
			trr.innerHTML = 'Поле не должно быть пустым!';
			name.after( trr );

			name.classList.add('error');
			console.log('error');
			break;

		case !textPat.test(name.value):
			let element = document.createElement('div');
			element.classList.add('error-message');
			element.innerHTML = 'Неверный формат!';
			name.after( element );

			name.classList.add('error');
			console.log('Фигня');
			break;

		case textPat.test(name.value):
			name.classList.add('success');
			alert('Поле с именем валидно!');

			/*  - Где-то тут явно нужно было отменить стандартное действие браузера
			      методом preventDefolt()
			    - Также, нужно как-то удалить добавленный мной элемент, 
			      показывающий ошибку через parent.removeChild(element)
			*/

	};

	switch (true) {
		case !surname.value:
			let trr = document.createElement('div');
			trr.classList.add('error-message');
			trr.innerHTML = 'Поле не должно быть пустым!';
			surname.after( trr );

			surname.classList.add('error');
			console.log('error');
			break;

		case !textPat.test(surname.value):
			let element = document.createElement('div');
			element.classList.add('error-message');
			element.innerHTML = 'Неверный формат!';
			surname.after( element );

			surname.classList.add('error');
			console.log('Фигня');
			break;

		case textPat.test(surname.value):
			surname.classList.add('success');
			alert('Поле с фамилией валидно!');
	};

	switch (true) {
		case !date.value:
			let trr = document.createElement('div');
			trr.classList.add('error-message');
			trr.innerHTML = 'Поле не должно быть пустым!';
			date.after( trr );

			date.classList.add('error');
			console.log('error');
			break;

		case !textPat.test(date.value):
			let element = document.createElement('div');
			element.classList.add('error-message');
			element.innerHTML = 'Неверный формат!';
			date.after( element );

			date.classList.add('error');
			console.log('Фигня');
			break;

		case textPat.test(date.value):
			date.classList.add('success');
			alert('Дата выбрана');
	};

	/* В этом месте при валидации, скорее всего нужно просто проверить
	   выбрано ли хоть одно значение и для проверки использовать true или false
	*/
			// switch (true) {
			// 	case !radio1.value || !radio2.value:
			// 		console.log('ничего не выбрано');
			// 		break;
			// };


	switch (true) {
		case !select.value:
			let trr = document.createElement('div');
			trr.classList.add('error-message');
			trr.innerHTML = 'Поле не должно быть пустым!';
			select.after( trr );

			select.classList.add('error');
			console.log('error');
			break;

		case selectval.test(select.value):
			select.classList.add('success');
			alert('Страна выбрана!');

	};


	switch (true) {
		case !email.value:
			let trr = document.createElement('div');
			trr.classList.add('error-message');
			trr.innerHTML = 'Поле не должно быть пустым!';
			email.after( trr );

			email.classList.add('error');
			console.log('error');
			break;

		case !emailreg.test(email.value):
			let element = document.createElement('div');
			element.classList.add('error-message');
			element.innerHTML = 'Неверный формат!';
			email.after( element );

			email.classList.add('error');
			console.log('Фигня');
			break;

		case emailreg.test(email.value):
			email.classList.add('success');
			alert('Электронный адресс введён верно!');
	};


	switch (true) {
		case !password.value:
			let trr = document.createElement('div');
			trr.classList.add('error-message');
			trr.innerHTML = 'Поле не должно быть пустым!';
			password.after( trr );

			password.classList.add('error');
			console.log('error');
			break;

		case selectval.test(password.value):
			password.classList.add('success');
			alert('Пароль введён!');

	};


	switch (true) {
		case !adres.value:
			let trr = document.createElement('div');
			trr.classList.add('error-message');
			trr.innerHTML = 'Поле не должно быть пустым!';
			adres.after( trr );

			adres.classList.add('error');
			console.log('error');
			break;

		case selectval.test(adres.value):
			adres.classList.add('success');
			alert('Адрес введён!');

	};
};

document.getElementById('button').addEventListener('click', validate);

/* В конечном итоге, нужно было повторяющиеся участки кода вынести 
   в отдельные функции, а затем просто вызывать их в нужных местах,
   таким образом значительно сократив количество строк. */