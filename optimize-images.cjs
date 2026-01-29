const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const TARGET_DIR = path.join(__dirname, 'src/assets/portfolio');
const MAX_SIZE_MB = 1;

async function processImages(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stats = fs.statSync(fullPath);

        if (stats.isDirectory()) {
            await processImages(fullPath);
        } else {
            const ext = path.extname(fullPath).toLowerCase();
            const sizeMB = stats.size / (1024 * 1024);

            if (['.png', '.jpg', '.jpeg'].includes(ext)) {
                // Use regex to replace extension case-insensitively
                const baseName = path.basename(fullPath, ext);
                const dirName = path.dirname(fullPath);
                const newPath = path.join(dirName, baseName + '.webp');
                console.log(`Converting to webp: ${file} (${sizeMB.toFixed(2)}MB)`);

                try {
                    await sharp(fullPath)
                        .webp({ quality: sizeMB > MAX_SIZE_MB ? 85 : 90 })
                        .toFile(newPath);

                    // Delete original
                    fs.unlinkSync(fullPath);
                    console.log(`Success: ${file} converted to webp.`);
                } catch (err) {
                    console.error(`Error processing ${file}:`, err);
                }
            } else if (ext === '.webp' && sizeMB > MAX_SIZE_MB) {
                // Re-compress existing large webp
                const tempPath = fullPath + '.tmp.webp';
                console.log(`Re-compressing large webp: ${file} (${sizeMB.toFixed(2)}MB)`);

                try {
                    await sharp(fullPath)
                        .webp({ quality: 80 })
                        .toFile(tempPath);

                    fs.unlinkSync(fullPath);
                    fs.renameSync(tempPath, fullPath);
                    console.log(`Success: ${file} re-compressed.`);
                } catch (err) {
                    console.error(`Error re-compressing ${file}:`, err);
                }
            }
        }
    }
}

console.log('Starting image optimization...');
processImages(TARGET_DIR).then(() => {
    console.log('Optimization complete!');
}).catch(err => {
    console.error('Fatal error:', err);
});
