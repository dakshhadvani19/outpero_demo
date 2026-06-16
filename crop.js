import sharp from 'sharp';

async function crop() {
  try {
    await sharp('Logo_website.png')
      .trim()
      .toFile('public/Logo_website.png');
    console.log('Successfully zoomed/cropped logo and saved to public/Logo_website.png');
  } catch (error) {
    console.error('Error cropping logo:', error);
  }
}

crop();
