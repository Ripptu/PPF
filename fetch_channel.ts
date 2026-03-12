import https from 'https';
import fs from 'fs';

https.get('https://www.youtube.com/@Nimascha', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('yt.html', data);
    console.log('Saved');
  });
});
