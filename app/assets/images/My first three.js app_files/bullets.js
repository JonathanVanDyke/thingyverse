function Bullets() {
  self = this;
}

Bullets.prototype.fire = () => {
  let bulletsBlockGeometry = new THREE.SphereGeometry(1, 1, 1); //PRIMITIVE SHAPE AND SIZE
  let bulletsBlockMaterial = new THREE.MeshLambertMaterial({ color: 0xff00C2 }); //COLOR OF MESH
  let bulletsBlock = new Physijs.BoxMesh(bulletsBlockGeometry, bulletsBlockMaterial); //MESH POINTS MAT TO GEOMETRY
  bulletsBlock.position.set(0, 10, 0);
  scene.add(bulletsBlock)
}
