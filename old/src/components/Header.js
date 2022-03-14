import logotype from '../assets/images/logga.png'
const Header = () => {
	const template = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm smart-scroll">
      <div class="container">
          <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarToggler">
            <a class="navbar-brand" href="#">
              <img src="${logotype}" width="150" alt="Fröslunda ekogård">
            </a>
              <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                  <li class="nav-item"><a class="nav-link" href="#home">Hem</a></li>
                  <li class="nav-item"><a class="nav-link" href="#pricelist">Prislista</a></li>
                  <li class="nav-item"><a class="nav-link" href="#about">Om oss</a></li>
                  <li class="nav-item"><a class="nav-link" href="#gallery">Galleri</a></li>
                  <li class="nav-item"><a class="nav-link" href="#map">Hitta till oss</a></li>
                  <li class="nav-item"><a class="nav-link" href="#contact">Kontakta oss</a></li>
              </ul>
          </div>
      </div>
    </nav>
  `;

	return template;
};

export default Header;
