var descriptors = ["Revolutionary", "Workers'", "Proletarian", "Socialist", "Communist", "Bolshevik", "New Communist", "International", "Democratic", "United", "Popular", "Red", "Labour", "Marxist-Leninist", "Peasants'", "New", "Workers' & Peasants'", "Spartacist", "Progressive", "People's"];

var groups = ["Party", "League", "Front", "Left", "Organisation", "Appeal", "Caucus", "Alternative", "Power", "Fight", "Network", "Movement", "Faction", "Group", "Vanguard", "Future", "Action", "Viewpoint", "Refoundation", "Reading Group", "Resistance", "Alliance", "Federation", "Twitter Clique", "Gang", "Brigade"];

var locations = ["America", "Britain", "Kent", "Cornwall", "Spain", "France", "Italy", "Japan", "Russia", "Germany", "the Netherlands", "New York", "Berwick-upon-Tweed", "the Bay Area", "Cascadia", "Camden", "Shoreditch", "Brooklyn", "Scotland", "Transnistria", "the Basement", "the Former Yugoslavia", "Ireland", "the Matrix", "Liberated Swansea", "East Anglia", "Berlin", "Mars", "Minas Tirith", "Liberated Hobbiton", "the Vampire Castle", "Judea", "Neo-Tokyo"];

var tendencies = ["(Marxist-Leninist)", "(Provisional Central Committee)", "(Fourth Internationalist)", "(Posadist)", "(Fifth Internationalist)", "for the Fourth International", "for the Reconstruction of the Fourth International", "(Unified Marxist-Leninist)", "(Maoist)", "(Marxist)", "for Socialism with Chinese Characteristics", "(Alternative Group)", "(Marxist-Leninist-Maoist)", "(Stalinist)", "(Anime Marxist)", "(Maoist)", "(Bolshevik Reorganisation Movement)", "(Proletarian Action)", "(Left Faction)", "(Renewed)", "(Action Faction)", "(Menshevik)", "Of Four", "(Primitivist)", "(Twink Faction)", "(Mordorian Front)", "(Bear Faction)", "(EU-Twisting Nether)", "(Sewing Circle)"];


$(document).ready(function() {
  generate();
  $( "#reload" ).click(function() {
    $("#party-hq #party").fadeOut('fast', function() {
      generate();
      $("#party-hq #party").fadeIn();
    });
  });
});

function generate(){

	//Descriptors
	var desc1 = descriptors[Math.floor(Math.random()*descriptors.length)];
	var desc2 = descriptors[Math.floor(Math.random()*descriptors.length)];

	while (desc1 == desc2) {
		//Until we have 2 different descriptions, pick another random one
		desc2 = descriptors[Math.floor(Math.random()*descriptors.length)];
	}

	var group = groups[Math.floor(Math.random()*groups.length)];
	var loc = locations[Math.floor(Math.random()*locations.length)];
	var tendency = tendencies[Math.floor(Math.random()*tendencies.length)];

	var party = desc1;

	//Second descriptor: 0.5 chance
	if (Math.random() <= 0.5) {
		party += ' ' + desc2;
	}

	party += ' ' + group;

	//Location: 0.4 chance
	if (Math.random() <= 0.4) {
		party += ' of ' + loc;
	}

	//Tendency: 0.35 chance
	if (Math.random() <= 0.35) {
		party += ' ' + tendency
	}

	$("#party-hq #party").text(party);
}
