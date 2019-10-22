let MechLoader = new THREE.OBJLoader();
MechLoader.load(
  'assets/mech.obj',
  function (object) {
    mechMesh = object.children[0]
    mechMesh.position.set(0, -4, 0);
    mechMesh.rotation.y = Math.PI;
    debugger


    let materials = mechMesh.material
    for (let i = 0; i < materials.length; i++) {
      if (i % 2 === 0) {
        mechMesh.material[i].color.set(0x2f523e);
      } else {
        mechMesh.material[i].color.set(0xf5d742);
      }
    }
    
    player.position.set(0, 10, 0);
    player.material.wireframe = true;

    player.add(mechMesh)
    scene.add(player)
}
);