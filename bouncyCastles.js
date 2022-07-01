// Use the value below whenever you need the value of Pi
const PI = 3.14159;

const sphereVolume = function (radius) {
  let volume = 4 / 3 * PI * radius * radius * radius;
  return volume;
};

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  // And here!
  let volume = 1 / 3 * PI * radius * radius * height;
  return volume;
};

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  // Probably here too!
  let volume = height * width * depth;
  return volume;
};

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function(solids) {
  // Code here? Yup!
  let volume = 0;
  for (let i of solids) {
    if (i === largeSphere) {
      volume += sphereVolume(i.radius);
    }
    if (i === smallSphere) {
      volume += sphereVolume(i.radius);
    }
    if (i === cone) {
      volume += coneVolume(i.radius,i.height);
    }
  }
  return volume;
};

const largeSphere = {
  type: 'sphere',
  radius: 40
};

const smallSphere = {
  type: 'sphere',
  radius: 10
};

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
};

const duck = [
  largeSphere,
  smallSphere,
  cone
];
console.log(totalVolume(duck));
console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);