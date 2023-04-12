const fs = require('fs-extra');

fs.mkdirSync('./dist/medias', { recursive: true });


fs.copyFile('./src/medias/scene.splinecode', './dist/medias/scene.splinecode', (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Spline file copied successfully!');
  }
});