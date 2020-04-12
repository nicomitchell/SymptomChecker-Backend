import app from './app';

//port 80 is standard for HTTP
const port = process.env.PORT || '80'; app.listen(port); 

console.log(`Listening on port ${port}`);
