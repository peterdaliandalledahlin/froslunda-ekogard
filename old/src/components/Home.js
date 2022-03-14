
const Home = () => {
	const template = `
    <div class="jumbotron jumbotron-fluid mb-0 p-0">
        <div id="home" class="container home">
            <h1 class="display-2 text-light">Fröslunda Ekogård</h1>
            <p class="display-6 text-light">Fröslunda Ekogård drivs ekologiskt av Sune och Agneta Erlandsson.<br> Gården ligger i Altuna, ca  25km norr om Enköping.</p>
            <a class="btn btn-primary btn-lg mt-md-4 mb-2 mb-md-0" href="#boka" role="button">Till prislistan</a>
            <a class="btn btn-secondary btn-lg mt-md-4 ml-md-2" href="#about" role="button">Om oss</a>
        </div>
    </div>
  `;

	return template;
};

export default Home;