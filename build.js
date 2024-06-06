const fs = require('node:fs');
const path = require('node:path');

const srcDir = path.join(__dirname, 'src', 'views');
const destDir = path.join(__dirname, 'dist', 'views');
const srcDirPublic = path.join(__dirname, 'public');
const destDirPublic = path.join(__dirname, 'dist', 'public');

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

if (!fs.existsSync(destDirPublic)) {
    fs.mkdirSync(destDirPublic, { recursive: true });
}

const copyFiles = (src, dest) => {
    fs.readdir(src, (err, files) => {
        if (err) throw err;
        for (const file of files) {
            const srcFile = path.join(src, file);
            const destFile = path.join(dest, file);
            fs.copyFile(srcFile, destFile, (err) => {
                if (err) throw err;
                console.log(`Copied ${srcFile} to ${destFile}`);
            });
        }
    });
};

copyFiles(srcDir, destDir);
copyFiles(srcDirPublic, destDirPublic);
