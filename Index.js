import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
   { "message":"TYPE In Your URL",
     name:"Url"

   }
  ])
  .then((answers) => {
   const url = answers.URL;
    const qr_svg = qr.image(url, { type: 'png' }); 
qr_svg.pipe(fs.createWriteStream('qr_img.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
  