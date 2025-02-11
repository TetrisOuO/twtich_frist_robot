require("dotenv").config();

async function validateToken(accessToken) {
  try {
    const response = await fetch("https://id.twitch.tv/oauth2/validate", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`, // Use 'Bearer' instead of 'OAuth'
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Token is valid:", data);
  } catch (error) {
    console.log("Token validation failed:", error.message);
  }
}

// Replace with your actual access token
const accessToken = process.env.TWITCH_OAUTH;

async function refreshToken(refreshToken) {
  const res = await fetch("https://id.twitch.tv/oauth2/token", {
    method: "POST",
    body: new URLSearchParams({
      client_id: process.env.TWITCH_CLIENT_ID,
      client_secret: process.env.TWITCH_CLIENT_SECRET,
      refresh_token: refreshToken,
      grant_type: "refresh_token",
    }),
  });

  const data = await res.json();
  console.log("New Access Token:", data.access_token);
  console.log("New Refresh Token:", data.refresh_token);

  validateToken(data.access_token);
}

// 假設你有 Refresh Token，傳入刷新
refreshToken(process.env.TWITCH_REFRESH_TOKEN);
