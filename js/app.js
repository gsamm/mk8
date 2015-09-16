angular.module('mk8', []);

angular.module('mk8').directive('ifSortedBy', function () {
	return {
		restrict: 'A',
		link: function (scope, element, attrs) {
			scope.$watch('sortCriteria', function (newValue, oldValue, scope) {
				element.css('display', (newValue == attrs.ifSortedBy) ? '' : 'none');
			});
		}
	};
});

angular.module('mk8').controller('MainController', ['$scope', function ($scope) {
	var filteredLoadouts = [];
	var loadouts = [];

	$scope.sortCriteria = 'speedGround';
	$scope.speed = 1;
	$scope.acceleration = 1;
	$scope.weight = 1;
	$scope.handling = 1;
	$scope.traction = 1;
	$scope.miniTurbo = 1;

	$scope.filterChanged = function () {
		// Reset the collection of filtered loadouts.
		filteredLoadouts = [];

		for (i = 0, l = loadouts.length; i < l; i++) {
			var speedMatches = loadouts[i].speedGround >= $scope.speed;
			var accelerationMatches = loadouts[i].acceleration >= $scope.acceleration;
			var weightMatches = loadouts[i].weight >= $scope.weight;
			var handlingMatches = loadouts[i].handlingGround >= $scope.handling;
			var tractionMatches = loadouts[i].traction >= $scope.traction;
			var miniTurboMatches = loadouts[i].miniTurbo >= $scope.miniTurbo;

			if (speedMatches && accelerationMatches && weightMatches && handlingMatches && tractionMatches && miniTurboMatches) {
				filteredLoadouts.push(loadouts[i]);
			}
		}

		$scope.loadouts = filteredLoadouts.slice(0, 10);
		$scope.filteredLoadouts = $scope.loadouts.length;
		$scope.totalLoadouts = filteredLoadouts.length;
	};

	$scope.resetClicked = function () {
		$scope.speed = 1;
		$scope.acceleration = 1;
		$scope.weight = 1;
		$scope.handling = 1;
		$scope.traction = 1;
		$scope.miniTurbo = 1;

		$scope.filterChanged();
	};

	$scope.sort = function (criteria) {
		switch (criteria)
		{
			case 'speedGround':
				filteredLoadouts.sort(function (a, b) {
					return b.speedGround - a.speedGround;
				});
				break;
			case 'speedWater':
				filteredLoadouts.sort(function (a, b) {
					return b.speedWater - a.speedWater;
				});
				break;
			case 'speedAir':
				filteredLoadouts.sort(function (a, b) {
					return b.speedAir - a.speedAir;
				});
				break;
			case 'speedAntiGravity':
				filteredLoadouts.sort(function (a, b) {
					return b.speedAntiGravity - a.speedAntiGravity;
				});
				break;
			case 'acceleration':
				filteredLoadouts.sort(function (a, b) {
					return b.acceleration - a.acceleration;
				});
				break;
			case 'weight':
				filteredLoadouts.sort(function (a, b) {
					return b.weight - a.weight;
				});
				break;
			case 'handlingGround':
				filteredLoadouts.sort(function (a, b) {
					return b.handlingGround - a.handlingGround;
				});
				break;
			case 'handlingWater':
				filteredLoadouts.sort(function (a, b) {
					return b.handlingWater - a.handlingWater;
				});
				break;
			case 'handlingAir':
				filteredLoadouts.sort(function (a, b) {
					return b.handlingAir - a.handlingAir;
				});
				break;
			case 'handlingAntiGravity':
				filteredLoadouts.sort(function (a, b) {
					return b.handlingAntiGravity - a.handlingAntiGravity;
				});
				break;
			case 'traction':
				filteredLoadouts.sort(function (a, b) {
					return b.traction - a.traction;
				});
				break;
			case 'miniTurbo':
				filteredLoadouts.sort(function (a, b) {
					return b.miniTurbo - a.miniTurbo;
				});
				break;
		}

		$scope.sortCriteria = criteria;
		$scope.loadouts = filteredLoadouts.slice(0, 10);
	};

	var characters = [
		new CharacterClass1(),
		new CharacterClass2(),
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

	for (var characterIndex = 0, charactersLength = characters.length; characterIndex < charactersLength; characterIndex++) {
		for (var kartIndex = 0, kartsLength = karts.length; kartIndex < kartsLength; kartIndex++) {
			for (var tireIndex = 0, tiresLength = tires.length; tireIndex < tiresLength; tireIndex++) {
				for (var gliderIndex = 0, glidersLength = gliders.length; gliderIndex < glidersLength; gliderIndex++) {
					loadouts.push(new Loadout(characters[characterIndex], karts[kartIndex], tires[tireIndex], gliders[gliderIndex]));
				}
			}
		}
	}

	filteredLoadouts = loadouts;

	$scope.loadouts = filteredLoadouts.slice(0, 10);
	$scope.filteredLoadouts = $scope.loadouts.length;
	$scope.totalLoadouts = filteredLoadouts.length;
}]);