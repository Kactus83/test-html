const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8085;

// Crée le serveur HTTP
http.createServer((req, res) => {
    // Gère la route par défaut (index.html)
    let filePath = req.url === '/' ? './index.html' : `.${req.url}`;
    const extname = String(path.extname(filePath)).toLowerCase();

    // Types MIME pour différents fichiers
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.mp4': 'video/mp4',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
    };

    const contentType = mimeTypes[extname] || 'application/octet-stream';

    // Lire et retourner le fichier demandé
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 - Page Not Found</h1>', 'utf-8');
            } else {
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
}).listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
