import bg_sunset_video from '../assets/images/sunset.mp4'
const Showcase = () => {
	const template = `
        <section class="showcase container-fluid">
            <video src="${bg_sunset_video}" muted loop autoplay></video>
            <div class="overlay"></div>
            <div class="text">
                <h1>Välkomna till Fröslunda Ekogård</h1>
                <p>Fröslunda Ekogård drivs ekologiskt av Sune och Agneta Erlandsson.<br> Gården ligger i Altuna, ca  25km norr om Enköping.</p>
                <a href="#">Jag vill veta mer</a>
            </div>
        </section>
  `;

	return template;
};

export default Showcase;