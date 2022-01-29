const container = document.getElementById('img_container');
const loader = document.getElementById('loader');
const apiUrl = 'http://localhost:9090/nasa-photos';

function setAttributes(element, attributes) {
	for (const key in attributes) {
		element.setAttribute(key, attributes[key]);
	}
}

(async () => {
	/* abre o arq JSON */
	const response = await fetch(apiUrl);
	const data = await response.json();
	let photosArray = data.result;

	photosArray.forEach((photo) => {
		const image = document.createElement('img');
		setAttributes(image, {
			src: photo.src,
			alt: "Nasa's Photo",
			title: "Nasa's Photo",
		});

		image.addEventListener('click', () => {
			/* abre o Insta da NASA numa outra guia */
			window.open(
				'https://facebook.com/pg/nasasolarsystem/photos/?tab=album&album_id=164320877917',
				'_blank'
			);
		});

		container.appendChild(image);
	});

	loader.hidden = true;
})();
