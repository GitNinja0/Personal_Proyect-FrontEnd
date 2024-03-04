<template>
    <footer>
		<img id="logo" src="./../../assets/images/logoConectados.png" alt="" />
		<hr />
		<div id="social_media">
			<a href="https://www.instagram.com/" target="_blank">
				<img src="./../../assets/icons/instagram-icon.svg" alt="" />
			</a>
			<a href="https://www.facebook.com/?locale=es_ES" target="_blank">
				<img src="./../../assets/icons/facebook-icon.svg" alt="" />
			</a>
			<a href="https://www.linkedin.com/" target="_blank">
				<img src="./../../assets/icons/linkedin-icon.svg" alt="" />
			</a>
			<a href="https://web.telegram.org/a/" target="_blank">
				<img src="./../../assets/icons/telegram-icon.svg" alt="" />
			</a>
			<a href="https://www.youtube.com/" target="_blank">
				<img src="./../../assets/icons/youtube-icon.svg" alt="" />
			</a>
		</div>
		<hr />
		<div id="other_information">
			<p>Politica de privacidad</p>
			<p>Politica de cookies</p>
			<p>Nota legal</p>
			<p>Mapa web</p>
		</div>
		<p>
			© 2024 GitNinja. Reservados todos los
			derechos.
		</p>
	</footer>
</template>
<style scoped lang="scss">
footer {
	width: 100%;
	background-color: #494949;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2rem;
	padding-bottom: 3rem;
}
#logo {
	margin-top: 5rem;
	width: 30%;
}
#social_media {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	width: 70%;
	img {
		width: 4rem;
	}
}
#other_information {
	display: flex;
	width: 80%;
	justify-content: space-around;
	p {
		font-size: 1rem;
	}
}
p {
	width: auto;
	display: inline-block;
	color: white;
	font-family: "Poppins", sans-serif;
}
hr {
	width: 70%;
	border: solid 1px white;
}
@media (min-width: 800px) {
	#logo {
		padding: 5rem;
		width: 30%;
	}
	#social_media {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 50%;
		img {
			width: 4rem;
		}
	}
	#other_information {
		width: 30%;
		p {
			font-size: 1em;
		}
	}
}
</style>