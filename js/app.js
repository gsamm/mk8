angular.module('mk8', []);

angular.module('mk8').controller('MainController', ['$scope', function ($scope) {
	$scope.speed = 1;
	$scope.acceleration = 1;
	$scope.weight = 1;
	$scope.handling = 1;
	$scope.traction = 1;
	$scope.miniTurbo = 1;

	$scope.filterChanged = function () {
		var filteredLoadouts = [];

		console.log('filtering...');

		for (i = 0, l = loadouts.length; i < l; i++) {
			var speedMatches = loadouts[i].speedGround >= $scope.speed;
			var accelerationMatches = loadouts[i].acceleration >= $scope.acceleration;
			var weightMatches = loadouts[i].weight >= $scope.weight;
			var handlingMatches = loadouts[i].handlingGround >= $scope.handling;
			var tractionMatches = loadouts[i].traction >= $scope.traction;
			var miniTurboMatches = loadouts[i].miniTurbo >= $scope.miniTurbo;

			// console.log("speed matches: %s, acceleration matches: %s, weight matches: %s, handling matches: %s, traction matches: %s, miniTurbo matches: %s", speedMatches, accelerationMatches, weightMatches, handlingMatches, tractionMatches, miniTurboMatches);

			if (speedMatches && accelerationMatches && weightMatches && handlingMatches && tractionMatches && miniTurboMatches) {
				filteredLoadouts.push(loadouts[i]);
			}
		}

		$scope.loadouts = filteredLoadouts;
	};

	$scope.resetClicked = function () {
		$scope.speed = 1;
		$scope.acceleration = 1;
		$scope.weight = 1;
		$scope.handling = 1;
		$scope.traction = 1;
		$scope.miniTurbo = 1;
	};

	var characters = [
		new CharacterClass1({ name: 'char class1' }),
		new CharacterClass2({ name: 'char class2' }),
		new CharacterClass3(),
		new CharacterClass4(),
		new CharacterClass5(),
		new CharacterClass6(),
		new CharacterClass7()
	];

	var karts = [
		new KartClass1(),
		new KartClass2(),
		new KartClass3(),
		new KartClass4(),
		new KartClass5(),
		new KartClass6()
	];

	var tires = [
		new TireClass1(),
		new TireClass2(),
		new TireClass3(),
		new TireClass4(),
		new TireClass5(),
		new TireClass6(),
		new TireClass7()
	];

	var gliders = [
		new GliderClass1(),
		new GliderClass2()
	];

	var loadouts = [];

	for (var characterIndex = 0, charactersLength = characters.length; characterIndex < charactersLength; characterIndex++) {
		for (var kartIndex = 0, kartsLength = karts.length; kartIndex < kartsLength; kartIndex++) {
			for (var tireIndex = 0, tiresLength = tires.length; tireIndex < tiresLength; tireIndex++) {
				for (var gliderIndex = 0, glidersLength = gliders.length; gliderIndex < glidersLength; gliderIndex++) {
					loadouts.push(new Loadout(characters[characterIndex], karts[kartIndex], tires[tireIndex], gliders[gliderIndex]));
				}
			}
		}
	}

	$scope.loadouts = loadouts;
}]);