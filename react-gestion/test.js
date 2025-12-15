import axios from "axios";
import jwt from "jsonwebtoken";

function generateRandomDeviceID() {
  let id = '';
  const chars = '0123456789abcdef';
  for (let i = 0; i < 16; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }
  return id;
}

function getSign() {
  const secret = "c5933031d2b07fa4a3133cbd3f5a21fe8a0e0e9b6cb52d36e70402e81688d3b4";

  const token = jwt.sign(
    { device_id: generateRandomDeviceID() },
    secret,
    { algorithm: "HS256", noTimestamp: true }
  );

  return token;
}

async function getToken(sign) {
  const response = await axios.post(
    'https://zona-backend-production.onrender.com/register',
    sign,
    {
      headers: {
        'User-Agent': 'okhttp/4.12.0',
        'Accept': 'application/json',
        'Accept-Encoding': 'gzip',
        'Content-Type': 'text/plain',
        'platform': 'android',
        'locale': 'en',
        'app-version': '6.5.2',
      }
    }
  );
  return response.data.token;
}

async function getBalance(token) {
  await axios.get('https://zona-backend-production.onrender.com/purchases', {
    headers: {
      'User-Agent': 'okhttp/4.12.0',
      'Accept': 'application/json',
      'Accept-Encoding': 'gzip',
      'content-type': 'application/json',
      'platform': 'android',
      'locale': 'en',
      'app-version': '6.5.2',
      'authorization': 'Bearer ' + token
    }
  });
}

async function startTheShow(token) {
  await axios.post(
    'https://zona-backend-production.onrender.com/prediction/predict/custom',
    {
      'prompt': `[Intro]



[Verse]
In the world of code, a framework shines bright  
React JS, a puzzle that keeps me up at night  
Components and states, tangled in my mind  
Every prop I pass, feels like I'm in a bind  

[Pre-Chorus]  
But I push through the struggle, gotta learn the way  
With every line I write, I’m closer every day  

[Chorus]  
React, oh React, you’re a mountain to climb  
With hooks and lifecycle, I’m lost in your rhyme  
Building my dreams, but the journey feels long  
In the heart of my code, I’m finding where I belong  

[Verse1]  
JSX whispers softly, but I hear the call  
Mapping through arrays, I’m ready for the fall  
Redux in the shadows, state management’s a fight  
I’ll conquer the chaos, bring my code to light  

[Pre-Chorus]  
With every error message, I learn to stand tall  
Debugging my way through, I won’t let me fall  

[Chorus]  
React, oh React, you’re a mountain to climb  
With hooks and lifecycle, I’m lost in your rhyme  
Building my dreams, but the journey feels long  
In the heart of my code, I’m finding where I belong  

[Bridge]  
Each line a challenge, each bug a test  
But I know in my heart, I’ll give it my best  
Through the trials and errors, I’ll find my own way  
In the world of React, I’ll make my own play  

[Chorus]  
React, oh React, you’re a mountain to climb  
With hooks and lifecycle, I’m lost in your rhyme  
Building my dreams, but the journey feels long  
In the heart of my code, I’m finding where I belong  

[Final-Chorus]  
React, oh React, my passion ignites  
With every line of code, I’m reaching new heights  
Though the road may be tough, I’ll rise and I’ll shine  
In the realm of React, I’m claiming what’s mine`,
      'tags': 'pop, pop rock, female',
      'title': 'black',
      'instrumental': false
    },
    {
      headers: {
        'User-Agent': 'okhttp/4.12.0',
        'Accept': 'application/json',
        'Accept-Encoding': 'gzip',
        'Content-Type': 'application/json',
        'platform': 'android',
        'locale': 'en',
        'app-version': '6.5.2',
        'authorization': 'Bearer ' + token
      }
    }
  );
}

async function getResult(token) {
  while (true) {
    const response = await axios.post(
      'https://zona-backend-production.onrender.com/users/library/prediction/list',
      {
        'page': 1,
        'sort': 'new_to_old'
      },
      {
        headers: {
          'User-Agent': 'okhttp/4.12.0',
          'Accept': 'application/json',
          'Accept-Encoding': 'gzip',
          'Content-Type': 'application/json',
          'platform': 'android',
          'locale': 'en',
          'app-version': '6.5.2',
          'authorization': 'Bearer ' + token
        }
      }
    );
    if (response.data.rows[0].status == "streaming") {
      return response.data.rows.map(one => one.audio_url);
    }
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
}


const sign = getSign();
const token = await getToken(sign);
await getBalance(token);
await startTheShow(token)
const result = await getResult(token);
console.log(result);