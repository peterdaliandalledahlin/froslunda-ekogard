const PriceList = () => {
	const template = `
    <div id="pricelist" class="container pricelist">
    <h4 class="mt-3">Prislista</h4>
        <table class="table table-striped">
            <thead>
                <th scope="col">Pris & sortimentlista</th>
                <th scope="col" >Per kg inklusive moms</th>
            </thead>
            <tbody>
                <tr>
                    <td>Hamburgerfärs</td><td>150 kr/kg</td>
                </tr>
                <tr>
                    <td>Nötfärs</td><td>120 kr/kg</td>
                </tr>
                <tr>
                    <td>Kalvfärs</td><td>150 kr/kg</td>
                </tr>
                <tr>
                    <td>Märgpipa i bit</td><td>150 kr/kg</td>
                </tr>
                <tr>
                    <td>Grytbitar</td><td>140 kr/kg</td>
                </tr>
                <tr>
                    <td>Lägg, kalv</td><td>140 kr/kg</td>
                </tr>
                <tr>
                    <td>Lägg, nöt</td><td>120 kr/kg</td>
                </tr>
                <tr>
                    <td>Högrev med ben</td><td>140 kr/kg</td>
                </tr>
                <tr>    
                    <td>Högrev i bit</td><td>150 kr/kg</td>
                </tr>     
                <tr>
                    <td>Bringa, nöt med ben</td><td>120 kr/kg</td>
                </tr>
                <tr>
                    <td>Bringa,kalv med ben</td><td>140 kr/kg</td>
                </tr>
                <tr>
                    <td>Bog, med ben</td><td>140 kr/kg</td>
                </tr>
                <tr>
                    <td>Fransyska</td><td>200 kr/kg</td>
                </tr>
                <tr>
                    <td>Ytterlår</td><td>180 kr/kg</td>
                </tr>
                <tr>
                    <td>Innanlår</td><td>250 kr/kg</td>
                </tr>
                <tr>
                    <td>Flankstek</td><td>200 kr/kg</td>
                </tr>
                <tr>
                    <td>Nötrulle</td><td>200 kr/kg</td>
                </tr>
                <tr>
                    <td>Njurtapp</td><td>200 kr/kg</td>
                </tr>
                <tr>
                    <td>Luffarbiff</td><td>250 kr/kg</td>
                </tr>
                <tr>
                    <td>Rökt rulle</td><td>250 kr/kg</td>
                </tr>
                <tr>
                    <td>Rumpstek</td><td>250 kr/kg</td>
                </tr>
                <tr>
                    <td>Grillskiva</td><td>300 kr/kg</td>
                </tr>
                <tr>
                    <td>Ryggbiff, bit</td><td>300 kr/kg</td>
                </tr>
                <tr>
                    <td>Ryggbiff, skivad</td><td>340 kr/kg</td>
                </tr>
                <tr>
                    <td>Rostbiff</td><td>300 kr/kg</td>
                </tr>
                <tr>
                    <td>Entrecôte, bit</td><td>380 kr/kg</td>
                </tr>
                <tr>
                    <td>Entrecôte, skivad</td><td>420 kr/kg</td>
                </tr>
                <tr>
                    <td>Rostas</td><td>400 kr/kg</td>
                </tr>
                <tr>
                    <td>Ledknoter</td><td>70 kr/kg</td>
                </tr>
                <tr>
                    <td>Hundben</td><td>70 kr/kg</td>
                </tr>
                <tr>
                    <td>Märgben</td><td>70 kr/kg</td>
                </tr>
                <tr>
                    <td>Oxlever</td><td>75 kr/kg</td>
                </tr>
                <tr>
                    <td>Oxnjure</td><td>75 kr/kg</td>
                </tr>
                <tr>
                    <td>Oxsvans</td><td>100 kr/kg</td>
                </tr>
                <tr>
                    <td>Oxtunga</td><td>100 kr/kg</td>
                </tr>
                <tr>
                    <td>Kindkött</td><td>200 kr/kg</td>
                </tr>
                <tr>
                    <td>Kalvkotlett</td><td>300 kr/kg</td>
                </tr>
                <tr>
                    <td>Kalvstek</td><td>400 kr/kg</td>
                </tr>
                <tr>
                    <td>T-ben</td><td>400 kr/kg</td>
                </tr>
                <tr>
                    <td>Klubbstek</td><td>275 kr/kg</td>
                </tr>
                <tr>
                    <td>Oxfilé</td><td>600 kr/kg</td>
                </tr>
                <tr>
                    <td>Kalvfilé</td><td>800 kr/kg</td>
                </tr>
            </tbody>
        </table>
    </div>
  `;

	return template;
};

export default PriceList;