import crypto from "crypto";
import axios from 'axios';

function getSign(appKey, reqMethod, method, timestamp) {
  const base64AppKey = Buffer.from(appKey).toString("base64");
  const raw = reqMethod + method + timestamp + base64AppKey;
  return crypto.createHash("md5").update(raw).digest("hex");
}

function generateRandomId(length = 16) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

const device = generateRandomId(10);
const regionCode = "CA";
const language = "en_US";
const productId = "319";
const appKey = "10002601";
const timestamp = Date.now();


const makeLyricsRequest = async (text) => {
  try {
    const response = await axios.post(
      "https://api-use.aisongcreate.com/api/rest/cfc/simple/make/async",
      {
        method: "/api/rest/cfc/simple/make/async",
        device,
        regionCode,
        language,
        productId,
        appKey,
        timestamp,
        sign: getSign(appKey, "POST", "/api/rest/cfc/simple/make/async", timestamp),
        content: {
          taskMode: "deepseek",
          modeContext: {
            text,
            lyricsMode: true,
          },
          taskExtra: JSON.stringify({ taskMode: "deepseek" }),
          datas: [],
          reportExtend: JSON.stringify({ user_is_vip: true }),
        },
      },
      {
        headers: {
          "User-Agent": "okhttp/4.12.0",
          Connection: "Keep-Alive",
          "Accept-Encoding": "gzip",
          "Content-Type": "application/json; charset=utf-8",
          "X-Xiaoying-Security-traceid": `319_10002601_${device}_1756225990079_1`,
          "x-resp-format": "encoding",
        },
      }
    );

    return response.data.data.businessId;
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
  }
};

const queryResult = async (taskID) => {
  while (true) {
    try {
      const response = await axios.post(
        "https://api-use.aisongcreate.com/api/rest/cfc/simple/make/async/queryResult",
        {
          method: "/api/rest/cfc/simple/make/async/queryResult",
          device,
          regionCode,
          language,
          productId,
          appKey,
          timestamp,
          sign: getSign(appKey, "POST", "/api/rest/cfc/simple/make/async/queryResult", timestamp),
          content: {
            businessId: taskID,
          },
        },
        {
          headers: {
            "User-Agent": "okhttp/4.12.0",
            Connection: "Keep-Alive",
            "Accept-Encoding": "gzip",
            "Content-Type": "application/json; charset=utf-8",
            "X-Xiaoying-Security-traceid": `319_10002601_${device}_1756225990079_2`,
            "x-resp-format": "encoding",
          },
        }
      );
      if (response.data && response.data.data) {
        return JSON.parse(response.data.data.extraEventResult).algo_llm_image_event_result.text;
      }
    } catch (error) {
      throw new Error("Error:", error.response?.data || error.message);
    }
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
};

const task = await makeLyricsRequest("create a song about react js and how hard it is");
console.log(await queryResult(task))