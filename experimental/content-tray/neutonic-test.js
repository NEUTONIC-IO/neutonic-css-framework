const btns = document.querySelectorAll('.icon');

for (const btn of btns) {
	btn.addEventListener('click', (e) => {
		
	btn.classList.toggle('active');
	
	});
}
