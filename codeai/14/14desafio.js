var roller = createSprite(200, 200);
roller.scale = 2;
roller.setAnimation("roller_1");
roller.setCollider("rectangle", 0, 0, 200, 35, 45);
roller.debug = true;
drawSprites();