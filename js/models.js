function Part(opts) {
	this.speedGround = 0;
	this.speedWater = 0;
	this.speedAir = 0;
	this.speedAntiGravity = 0;
	this.acceleration = 0;
	this.weight = 0;
	this.handlingGround = 0;
	this.handlingWater = 0;
	this.handlingAir = 0;
	this.handlingAntiGravity = 0;
	this.traction = 0;
	this.miniTurbo = 0;

	$.extend(this, opts);
};

function CharacterClass1(opts) {
	Part.call(this, opts);

	this.characters = [
		{ iconUrl: 'images/characters/baby-mario.png' },
		{ iconUrl: 'images/characters/baby-luigi.png' },
		{ iconUrl: 'images/characters/baby-peach.png' },
		{ iconUrl: 'images/characters/baby-daisy.png' },
		{ iconUrl: 'images/characters/baby-rosalina.png' },
		{ iconUrl: 'images/characters/lemmy.png' },
		{ iconUrl: 'images/characters/mii.png' }
	];

	this.speedGround = 2.25;
	this.speedWater = 2.75;
	this.speedAir = 2.25;
	this.speedAntiGravity = 2.5;
	this.acceleration = 3.25;
	this.weight = 2.25;
	this.handlingGround	= 4.75;
	this.handlingWater = 4.75;
	this.handlingAir = 4.5;
	this.handlingAntiGravity = 5;
	this.traction = 4.5;
	this.miniTurbo = 3;
};

CharacterClass1.prototype = Object.create(Part.prototype);
CharacterClass1.prototype.constructor = CharacterClass1;

function CharacterClass2(opts) {
	Part.call(this, opts);

	this.characters = [
		{ iconUrl: 'images/characters/toad.png' },
		{ iconUrl: 'images/characters/koopa.png' },
		{ iconUrl: 'images/characters/shy-guy.png' },
		{ iconUrl: 'images/characters/lakitu.png' },
		{ iconUrl: 'images/characters/toadette.png' },
		{ iconUrl: 'images/characters/larry.png' },
		{ iconUrl: 'images/characters/wendy.png' }
	];

	this.speedGround = 2.75;
	this.speedWater = 3.25;
	this.speedAir = 2.75;
	this.speedAntiGravity = 3;
	this.acceleration = 3;
	this.weight = 2.75;
	this.handlingGround	= 4.25;
	this.handlingWater = 4.25;
	this.handlingAir = 4;
	this.handlingAntiGravity = 4.5;
	this.traction = 4.25;
	this.miniTurbo = 2.75;
};

CharacterClass2.prototype = Object.create(Part.prototype);
CharacterClass2.prototype.constructor = CharacterClass2;

function CharacterClass3(opts) {
	Part.call(this, opts);

	this.characters = [
		{ iconUrl: 'images/characters/peach.png' },
		{ iconUrl: 'images/characters/daisy.png' },
		{ iconUrl: 'images/characters/yoshi.png' }
	];

	this.speedGround = 3.25;
	this.speedWater = 3.75;
	this.speedAir = 3.25;
	this.speedAntiGravity = 3.5;
	this.acceleration = 2.75;
	this.weight = 3.25;
	this.handlingGround	= 3.75;
	this.handlingWater = 3.75;
	this.handlingAir = 3.5;
	this.handlingAntiGravity = 4;
	this.traction = 4;
	this.miniTurbo = 2.5;
};

CharacterClass3.prototype = Object.create(Part.prototype);
CharacterClass3.prototype.constructor = CharacterClass3;

function CharacterClass4(opts) {
	Part.call(this, opts);

	this.characters = [
		{ iconUrl: 'images/characters/mario.png' },
		{ iconUrl: 'images/characters/luigi.png' },
		{ iconUrl: 'images/characters/iggy.png' },
		{ iconUrl: 'images/characters/ludwig.png' },
		{ iconUrl: 'images/characters/mii.png' }
	];

	this.speedGround = 3.75;
	this.speedWater = 4.25;
	this.speedAir = 3.75;
	this.speedAntiGravity = 4;
	this.acceleration = 2.5;
	this.weight = 3.75;
	this.handlingGround	= 3.25;
	this.handlingWater = 3.25;
	this.handlingAir = 3;
	this.handlingAntiGravity = 3.5;
	this.traction = 3.75;
	this.miniTurbo = 2.25;
};

CharacterClass4.prototype = Object.create(Part.prototype);
CharacterClass4.prototype.constructor = CharacterClass4;

function CharacterClass5(opts) {
	Part.call(this, opts);

	this.characters = [
		{ iconUrl: 'images/characters/donkey-kong.png' },
		{ iconUrl: 'images/characters/waluigi.png' },
		{ iconUrl: 'images/characters/rosalina.png' },
		{ iconUrl: 'images/characters/roy.png' }
	];

	this.speedGround = 4.25;
	this.speedWater = 4.75;
	this.speedAir = 4.25;
	this.speedAntiGravity = 4.5;
	this.acceleration = 2.25;
	this.weight = 4.25;
	this.handlingGround	= 2.75;
	this.handlingWater = 2.75;
	this.handlingAir = 2.5;
	this.handlingAntiGravity = 3;
	this.traction = 3.5;
	this.miniTurbo = 2;
};

CharacterClass5.prototype = Object.create(Part.prototype);
CharacterClass5.prototype.constructor = CharacterClass5;

function CharacterClass6(opts) {
	Part.call(this, opts);

	this.characters = [
		{ iconUrl: 'images/characters/metal-mario.png' },
		{ iconUrl: 'images/characters/pink-gold-peach.png' }
	];

	this.speedGround = 4.25;
	this.speedWater = 4.75;
	this.speedAir = 4.25;
	this.speedAntiGravity = 4.5;
	this.acceleration = 2;
	this.weight = 4.75;
	this.handlingGround	= 2.75;
	this.handlingWater = 2.75;
	this.handlingAir = 2.5;
	this.handlingAntiGravity = 3;
	this.traction = 3.25;
	this.miniTurbo = 1.75;
};

CharacterClass6.prototype = Object.create(Part.prototype);
CharacterClass6.prototype.constructor = CharacterClass6;

function CharacterClass7(opts) {
	Part.call(this, opts);

	this.characters = [
		{ iconUrl: 'images/characters/bowser.png' },
		{ iconUrl: 'images/characters/wario.png' },
		{ iconUrl: 'images/characters/morton.png' },
		{ iconUrl: 'images/characters/mii.png' }
	];

	this.speedGround = 4.75;
	this.speedWater = 5.25;
	this.speedAir = 4.75;
	this.speedAntiGravity = 5;
	this.acceleration = 2;
	this.weight = 4.75;
	this.handlingGround	= 2.25;
	this.handlingWater = 2.25;
	this.handlingAir = 2;
	this.handlingAntiGravity = 2.5;
	this.traction = 3.25;
	this.miniTurbo = 1.75;
};

CharacterClass7.prototype = Object.create(Part.prototype);
CharacterClass7.prototype.constructor = CharacterClass7;

function KartClass1(opts) {
	Part.call(this, opts);

	this.karts = [
		{ iconUrl: 'images/karts/standard.png' },
		{ iconUrl: 'images/karts/cat-cruiser.png' },
		{ iconUrl: 'images/karts/prancer.png' },
		{ iconUrl: 'images/karts/sneeker.png' },
		{ iconUrl: 'images/karts/the-duke.png' },
		{ iconUrl: 'images/karts/teddy-buggy.png' }
	];
}

KartClass1.prototype = Object.create(Part.prototype);
KartClass1.prototype.constructor = KartClass1;

function KartClass2(opts) {
	Part.call(this, opts);

	this.karts = [
		{ iconUrl: 'images/karts/steel-driver.png' },
		{ iconUrl: 'images/karts/tri-speeder.png' },
		{ iconUrl: 'images/karts/badwagon.png' },
		{ iconUrl: 'images/karts/standard-atv.png' }
	];

	this.speedGround = 0;
	this.speedWater = 0.5;
	this.speedAir = 0;
	this.speedAntiGravity = -0.25;
	this.acceleration = -0.5;
	this.weight = 0.5;
	this.handlingGround	= -0.5;
	this.handlingWater = 0.75;
	this.handlingAir = -0.3;
	this.handlingAntiGravity = -0.75;
	this.traction = 0.5;
	this.miniTurbo = -0.75;
}

KartClass2.prototype = Object.create(Part.prototype);
KartClass2.prototype.constructor = KartClass2;

function KartClass3(opts) {
	Part.call(this, opts);

	this.karts = [
		{ iconUrl: 'images/karts/biddy-buggy.png' },
		{ iconUrl: 'images/karts/landship.png' },
		{ iconUrl: 'images/karts/mr-scooty.png' }
	];

	this.speedGround = -0.75;
	this.speedWater = 0.5;
	this.speedAir = 0.5;
	this.speedAntiGravity = -0.25;
	this.acceleration = 1.25;
	this.weight = -0.5;
	this.handlingGround	= 0.5;
	this.handlingWater = 0.75;
	this.handlingAir = 0.75;
	this.handlingAntiGravity = 0;
	this.traction = -0.25;
	this.miniTurbo = 1;
}

KartClass3.prototype = Object.create(Part.prototype);
KartClass3.prototype.constructor = KartClass3;

function KartClass4(opts) {
	Part.call(this, opts);

	this.karts = [
		{ iconUrl: 'images/karts/mach8.png' },
		{ iconUrl: 'images/karts/circuit-special.png' },
		{ iconUrl: 'images/karts/sports-coupe.png' },
		{ iconUrl: 'images/karts/gold-standard.png' }
	];

	this.speedGround = 0.5;
	this.speedWater = 0.25;
	this.speedAir = 0.5;
	this.speedAntiGravity = -0.25;
	this.acceleration = -0.25;
	this.weight = 0.25;
	this.handlingGround	= 0;
	this.handlingWater = 0;
	this.handlingAir = 0;
	this.handlingAntiGravity = -0.25;
	this.traction = -1;
	this.miniTurbo = -0.5;
}

KartClass4.prototype = Object.create(Part.prototype);
KartClass4.prototype.constructor = KartClass4;

function KartClass5(opts) {
	Part.call(this, opts);

	this.karts = [
		{ iconUrl: 'images/karts/comet.png' },
		{ iconUrl: 'images/karts/sports-bike.png' },
		{ iconUrl: 'images/karts/jet-bike.png' },
		{ iconUrl: 'images/karts/yoshi-bike.png' }
	];

	this.speedGround = 0;
	this.speedWater = 0;
	this.speedAir = 0;
	this.speedAntiGravity = -0.25;
	this.acceleration = 0.75;
	this.weight = -0.25;
	this.handlingGround	= 0.75;
	this.handlingWater = 0.75;
	this.handlingAir = 0.75;
	this.handlingAntiGravity = 0.5;
	this.traction = -1.25;
	this.miniTurbo = 0.5;
}

KartClass5.prototype = Object.create(Part.prototype);
KartClass5.prototype.constructor = KartClass5;

function KartClass6(opts) {
	Part.call(this, opts);

	this.karts = [
		{ iconUrl: 'images/karts/pipe-frame.png' },
		{ iconUrl: 'images/karts/standard-bike.png' },
		{ iconUrl: 'images/karts/flame-rider.png' },
		{ iconUrl: 'images/karts/varmint.png' },
		{ iconUrl: 'images/karts/wild-wiggler.png' }
	];

	this.speedGround = 0;
	this.speedWater = 0.25;
	this.speedAir = 0.3;
	this.speedAntiGravity = -0.25;
	this.acceleration = 0.25;
	this.weight = -0.25;
	this.handlingGround	= 0.5;
	this.handlingWater = 0.5;
	this.handlingAir = 0.75;
	this.handlingAntiGravity = 0;
	this.traction = -0.5;
	this.miniTurbo = 0.25;
}

KartClass6.prototype = Object.create(Part.prototype);
KartClass6.prototype.constructor = KartClass6;

function TireClass1(opts) {
	Part.call(this, opts);

	this.tires = [
		{ iconUrl: 'images/tires/standard.png' },
		{ iconUrl: 'images/tires/off-road.png' },
		{ iconUrl: 'images/tires/blue-standard.png' },
		{ iconUrl: 'images/tires/retro-off-road.png' },
	];
}

TireClass1.prototype = Object.create(Part.prototype);
TireClass1.prototype.constructor = TireClass1;

function TireClass2(opts) {
	Part.call(this, opts);

	this.tires = [
		{ iconUrl: 'images/tires/monster.png' },
		{ iconUrl: 'images/tires/hot-monster.png' }
	];

	this.speedGround = 0;
	this.speedWater = -0.5;
	this.speedAir = -0.3;
	this.speedAntiGravity = 0;
	this.acceleration = -0.5;
	this.weight = 0.5;
	this.handlingGround	= -0.75;
	this.handlingWater = -0.75;
	this.handlingAir = -0.8;
	this.handlingAntiGravity = -0.75;
	this.traction = 0.75;
	this.miniTurbo = 0;
}

TireClass2.prototype = Object.create(Part.prototype);
TireClass2.prototype.constructor = TireClass2;

function TireClass3(opts) {
	Part.call(this, opts);

	this.tires = [
		{ iconUrl: 'images/tires/roller.png' },
		{ iconUrl: 'images/tires/button.png' },
		{ iconUrl: 'images/tires/azure-roller.png' }
	];

	this.speedGround = -0.5;
	this.speedWater = 0;
	this.speedAir = 0.5;
	this.speedAntiGravity = -0.5;
	this.acceleration = 1;
	this.weight = -0.5;
	this.handlingGround	= 0.25;
	this.handlingWater = 0.25;
	this.handlingAir = 0.25;
	this.handlingAntiGravity = 0.25;
	this.traction = -0.25;
	this.miniTurbo = 1.5;
}

TireClass3.prototype = Object.create(Part.prototype);
TireClass3.prototype.constructor = TireClass3;

function TireClass4(opts) {
	Part.call(this, opts);

	this.tires = [
		{ iconUrl: 'images/tires/slim.png' },
		{ iconUrl: 'images/tires/crimson-slim.png' }
	];

	this.speedGround = 0.25;
	this.speedWater = -0.25;
	this.speedAir = 0.25;
	this.speedAntiGravity = 0.25;
	this.acceleration = -0.25;
	this.weight = 0;
	this.handlingGround	= 0.25;
	this.handlingWater = 0.25;
	this.handlingAir = 0.25;
	this.handlingAntiGravity = 0.25;
	this.traction = -0.5;
	this.miniTurbo = 0.25;
}

TireClass4.prototype = Object.create(Part.prototype);
TireClass4.prototype.constructor = TireClass4;

function TireClass5(opts) {
	Part.call(this, opts);

	this.tires = [
		{ iconUrl: 'images/tires/slick.png' },
		{ iconUrl: 'images/tires/cyber-slick.png' }
	];

	this.speedGround = 0.5;
	this.speedWater = -1;
	this.speedAir = 0.5;
	this.speedAntiGravity = 0.5;
	this.acceleration = -0.25;
	this.weight = 0.25;
	this.handlingGround	= 0;
	this.handlingWater = 0;
	this.handlingAir = 0;
	this.handlingAntiGravity = 0;
	this.traction = -1;
	this.miniTurbo = 0.25;
}

TireClass5.prototype = Object.create(Part.prototype);
TireClass5.prototype.constructor = TireClass5;

function TireClass6(opts) {
	Part.call(this, opts);

	this.tires = [
		{ iconUrl: 'images/tires/metal.png' },
		{ iconUrl: 'images/tires/gold.png' }
	];

	this.speedGround = 0.25;
	this.speedWater = -0.25;
	this.speedAir = 0.25;
	this.speedAntiGravity = 0.25;
	this.acceleration = -0.5;
	this.weight = 0.5;
	this.handlingGround	= 0;
	this.handlingWater = 0;
	this.handlingAir = 0;
	this.handlingAntiGravity = 0;
	this.traction = -0.5;
	this.miniTurbo = 0;
}

TireClass6.prototype = Object.create(Part.prototype);
TireClass6.prototype.constructor = TireClass6;

function TireClass7(opts) {
	Part.call(this, opts);

	this.tires = [
		{ iconUrl: 'images/tires/sponge.png' },
		{ iconUrl: 'images/tires/wood.png' },
		{ iconUrl: 'images/tires/cushion.png' }
	];

	this.speedGround = -0.25;
	this.speedWater = -1;
	this.speedAir = 0.25;
	this.speedAntiGravity = -0.25;
	this.acceleration = 0.25;
	this.weight = -0.25;
	this.handlingGround	= -0.25;
	this.handlingWater = -0.5;
	this.handlingAir = 0;
	this.handlingAntiGravity = -0.25;
	this.traction = 0.5;
	this.miniTurbo = 0.75;
}

TireClass7.prototype = Object.create(Part.prototype);
TireClass7.prototype.constructor = TireClass7;

function GliderClass1(opts) {
	Part.call(this, opts);

	this.gliders = [
		{ iconUrl: 'images/gliders/super.png' },
		{ iconUrl: 'images/gliders/wario-wing.png' },
		{ iconUrl: 'images/gliders/waddle-wing.png' },
		{ iconUrl: 'images/gliders/plane.png' },
		{ iconUrl: 'images/gliders/gold.png' }
	];
}

GliderClass1.prototype = Object.create(Part.prototype);
GliderClass1.prototype.constructor = GliderClass1;

function GliderClass2(opts) {
	Part.call(this, opts);

	this.gliders = [
		{ iconUrl: 'images/gliders/cloud.png' },
		{ iconUrl: 'images/gliders/peach-parasol.png' },
		{ iconUrl: 'images/gliders/parachute.png' },
		{ iconUrl: 'images/gliders/parafoil.png' },
		{ iconUrl: 'images/gliders/flower.png' },
		{ iconUrl: 'images/gliders/bowser.png' },
		{ iconUrl: 'images/gliders/mktv-parafoil.png' }
	];

	this.speedGround = 0;
	this.speedWater = 0;
	this.speedAir = -0.25;
	this.speedAntiGravity = 0;
	this.acceleration = 0.25;
	this.weight = -0.25;
	this.handlingGround	= 0;
	this.handlingWater = 0;
	this.handlingAir = 0.25;
	this.handlingAntiGravity = 0;
	this.traction = 0;
	this.miniTurbo = 0.25;
}

GliderClass2.prototype = Object.create(Part.prototype);
GliderClass2.prototype.constructor = GliderClass2;

function Loadout(characterClass, kartClass, tireClass, gliderClass) {
	Part.call(this);

	this.characterClass = characterClass;
	this.kartClass = kartClass;
	this.tireClass = tireClass;
	this.gliderClass = gliderClass;

	this.speedGround = Math.round(100 * (characterClass.speedGround + kartClass.speedGround + tireClass.speedGround + gliderClass.speedGround)) / 100;
	this.speedWater = Math.round(100 * (characterClass.speedWater + kartClass.speedWater + tireClass.speedWater + gliderClass.speedWater)) / 100;
	this.speedAir = Math.round(100 * (characterClass.speedAir + kartClass.speedAir + tireClass.speedAir + gliderClass.speedAir)) / 100;
	this.speedAntiGravity = Math.round(100 * (characterClass.speedAntiGravity + kartClass.speedAntiGravity + tireClass.speedAntiGravity + gliderClass.speedAntiGravity)) / 100;
	this.acceleration = Math.round(100 * (characterClass.acceleration + kartClass.acceleration + tireClass.acceleration + gliderClass.acceleration)) / 100;
	this.weight = Math.round(100 * (characterClass.weight + kartClass.weight + tireClass.weight + gliderClass.weight)) / 100;
	this.handlingGround	= Math.round(100 * (characterClass.handlingGround + kartClass.handlingGround + tireClass.handlingGround + gliderClass.handlingGround)) / 100;
	this.handlingWater = Math.round(100 * (characterClass.handlingWater + kartClass.handlingWater + tireClass.handlingWater + gliderClass.handlingWater)) / 100;
	this.handlingAir = Math.round(100 * (characterClass.handlingAir + kartClass.handlingAir + tireClass.handlingAir + gliderClass.handlingAir)) / 100;
	this.handlingAntiGravity = Math.round(100 * (characterClass.handlingAntiGravity + kartClass.handlingAntiGravity + tireClass.handlingAntiGravity + gliderClass.handlingAntiGravity)) / 100;
	this.traction = Math.round(100 * (characterClass.traction + kartClass.traction + tireClass.traction + gliderClass.traction)) / 100;
	this.miniTurbo = Math.round(100 * (characterClass.miniTurbo + kartClass.miniTurbo + tireClass.miniTurbo + gliderClass.miniTurbo)) / 100;
}