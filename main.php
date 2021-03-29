<?php
require_once('./Image_3D/Image/3D.php');
// Create the blank three-dimensional space
$world = new Image_3D();
$world->setColor(new Image_3D_Color(255,
255, 255));

// A blue light from the left
$light1 = $world->createLight('Light', array(-300, 0, -300));
$light1->setColor(new Image_3D_Color(252, 175, 62));

// A blue light from the upper right
$light2 = $world->createLight('Light', array(300, -300, -300));
$light2->setColor(new Image_3D_Color(164, 0, 0));

// Build the sphere object
$sphere = $world->createObject('sphere', array('r' => 85, 'detail' => 5));
$sphere->setColor(new Image_3D_Color(255, 255, 255));

// Render and save the 2-D image
$world->createRenderer('perspectively');
$world->createDriver('gd');
$world->render(400, 400, 'object.png');
