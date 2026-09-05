/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');

async function optimizeImages() {
  const files = fs.readdirSync(IMAGES_DIR);
  console.log(`Analyzing ${files.length} images in ${IMAGES_DIR}...`);

  for (const file of files) {
    if (!file.endsWith('.jpg') && !file.endsWith('.jpeg') && !file.endsWith('.png')) {
      continue;
    }

    const filePath = path.join(IMAGES_DIR, file);
    const stats = fs.statSync(filePath);
    const originalSizeKb = (stats.size / 1024).toFixed(1);

    // Only process images larger than 120KB
    if (stats.size > 120 * 1024) {
      try {
        // Read file into Buffer first so file descriptor is closed immediately (crucial on Windows)
        const inputBuffer = fs.readFileSync(filePath);
        const metadata = await sharp(inputBuffer).metadata();
        const maxDimension = 1440; // High resolution retina display limit

        let pipeline = sharp(inputBuffer);
        if (metadata.width > maxDimension || metadata.height > maxDimension) {
          pipeline = pipeline.resize({
            width: metadata.width > metadata.height ? maxDimension : undefined,
            height: metadata.height >= metadata.width ? maxDimension : undefined,
            fit: 'inside',
            withoutEnlargement: true,
          });
        }

        if (file.endsWith('.jpg') || file.endsWith('.jpeg')) {
          pipeline = pipeline.jpeg({
            quality: 80,
            mozjpeg: true,
            chromaSubsampling: '4:2:0',
          });
        } else if (file.endsWith('.png')) {
          pipeline = pipeline.png({
            quality: 85,
            compressionLevel: 8,
          });
        }

        const buffer = await pipeline.toBuffer();
        const newSizeKb = (buffer.length / 1024).toFixed(1);

        if (buffer.length < stats.size) {
          fs.writeFileSync(filePath, buffer);
          const savings = (((stats.size - buffer.length) / stats.size) * 100).toFixed(1);
          console.log(`✓ ${file}: ${originalSizeKb} KB -> ${newSizeKb} KB (-${savings}%)`);
        } else {
          console.log(`- ${file}: Already optimal (${originalSizeKb} KB)`);
        }
      } catch (err) {
        console.error(`Error processing ${file}:`, err.message);
      }
    } else {
      console.log(`• ${file}: Light enough (${originalSizeKb} KB)`);
    }
  }

  console.log('Image optimization finished successfully!');
}

optimizeImages();
