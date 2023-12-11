const inner = document.querySelector('.brand_inner_mid');
const articles = document.querySelectorAll('article');
const prev = document.querySelector('.brand_prev');
const next = document.querySelector('.brand_next');
const opens = document.querySelectorAll('.open');
const closes = document.querySelectorAll('.close');
const wrap = document.querySelector('.wrap');
const navs = document.querySelector('.brand_btn');

//next, prev를 클릭할때

next.addEventListener('click', () => {
	inner.append(inner.firstElementChild);
});

prev.addEventListener('click', () => {
	inner.prepend(inner.lastElementChild);
});

//open, close를 클릭할때

opens.forEach((el, index) => {
	el.addEventListener('click', (e) => {
		e.target.closest('article').classList.add('on');
		for (let el of articles)
			!el.classList.contains('on') && el.classList.add('hide');
		console.log(e.target);
		e.target.closest('article').querySelector('.open').classList.add('off');
		//e.target el.addEventListener('click', 이 해당 이벤트가 직접 발생한 대상입니다
		//console.log(e.target);는 span태그
		//closest('article')으로 할아버지태그인 아티클을 찾고
		//querySelector('.open')거기에서 오픈을 찾아서
		//클래스 off붙인다 => scss에 코딩됨
		navs.classList.add('off');
	});

	//hide를 붙이는 코드
	//on이 붙어있지 않은 아티클을 어떻게 선택할 것인지?
	//on이 붙어있지 않다면? 그러면 hide클래스를 붙여달라

	//활성화 되지 않은 article은 모두 hide를 붙여서 보이지 않게 해야하므로
	//반복문을 사용해야합니다

	//on클래스가 없다면 && 모두 hide클래스를 부여

	//반복문 안에서 on이 없는 대상을 모두 hide해야합니다
	// 보통 3항연산자를 이용한 조건문이나 (앞의 조건)&& 앞의 조건이 참인것을 판단해서
	//&&뒤의 내용을 판단하도록 합니다 따라서 조건문 처럼 사용할 수 있습니다
});

closes.forEach((el, index) => {
	el.addEventListener('click', (e) => {
		//클릭이벤트가 발생한 대상에 아티클을 찾아서 on을 지웁니다
		e.target.closest('article').classList.remove('on');
		//그리고 반복을 돌면서 모든 article의 hide을 지웁니다
		for (let el of articles) el.classList.remove('hide');
		e.target.closest('article').querySelector('.open').classList.remove('off');
		//그반대로 닫기버튼을 누르면 off가 지워져야함
		navs.classList.remove('off');
	});
});
