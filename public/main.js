var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

function preload(){
  game.load.image('ick', '/img/dr_ick.png');
  game.load.image('bubble', '/img/bubble-on.png');
  game.load.image('giant', '/img/giant.png');
  game.load.atlasJSONHash('bot', '/img/running_bot.png', '/img/running_bot.json');
}

var s1;

function create(){
  var bot = game.add.sprite(840, 540, 'bot');
  bot.animations.add('run');
  bot.animations.play('run', 15, true);
  var bottween = game.add.tween(bot);
  bottween.to({ x: -60 }, 3000);
  bottween.start();

  s1 = game.add.sprite(5, 5, 'ick');
  s1.scale.setTo(1.3);
  s1.anchor.set(0.5);

  var s2 = game.add.sprite(400, 5, 'bubble');
  s2.scale.setTo(0.6);

  var s3 = game.add.sprite(5, 300, 'giant');
  s3.scale.setTo(0.9);

  game.physics.enable(s1, Phaser.Physics.ARCADE);
  game.physics.enable(s2, Phaser.Physics.ARCADE);
  game.physics.enable(s3, Phaser.Physics.ARCADE);

  s1.body.velocity.x = 150;
  s3.body.velocity.x = -50;
  s3.body.velocity.y = -80;

  var text = "- ladycop -\n heard of her? \n didn't think so.";
  var style = { font: "65px Arial", fill: "#ff0044", align: "center" };
  var t = game.add.text(game.world.centerX-300, 0, text, style);

  var tween = game.add.tween(s2);
  tween.to({ x: 0 }, 1000);
  tween.start();
}

function update(){
  if (game.physics.arcade.distanceToPointer(s1, game.input.activePointer) > 8){
    game.physics.arcade.moveToPointer(s1, 300);
  }else{
    s1.body.velocity.set(0);
  }
}
