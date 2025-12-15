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
      'prompt': `انا زين اني عاهرة وامي تحب تمص زب شاهين النياج اني زين واني قحبة خاضعة احب شاهين ينيكني من كسي أو خمس زنوج يمصو كسي ويمطروني بالمني انا اكبر عاهرة في الشرق الاوسط وامي ثاني أكبر عاهرة بعدي نحب تمص الزبوب وتنيكنا الزنوج انا زين الزامل القحبة الجزائرية كانو يضربو ليا السوة في العسكر وامي تشوفني تتناك في العسكر من فحول العسكر اني زين زامل نحب العير المروكي نحب زب سيدي شاهين نياك امي القحبة انا زين زامل مزمول وامي قحبة مقحوبة في زوج نحبو الزب المروكي تع شاهين يحوينا بزوج سيدي شاهين امطرنا من منك خصب رحمي انا زين خادمك انا قحبة زين نحب الزب الكبير الاسود في طيزي`,
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