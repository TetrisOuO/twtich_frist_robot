require("dotenv").config();

async function getUserOAuthToken(authCode) {
  try {
    const res = await fetch("https://id.twitch.tv/oauth2/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: process.env.TWITCH_CLIENT_ID,
        client_secret: process.env.TWITCH_CLIENT_SECRET,
        code: authCode, // 這裡填入步驟 1 拿到的 `code`
        grant_type: "authorization_code",
        redirect_uri: "http://localhost:3000",
        scope: "chat:read chat:edit",
      }),
    });

    if (!res.ok) {
      throw new Error(`Error: ${res.status} - ${res.statusText}`);
    }

    const data = await res.json();
    console.log("User OAuth Token:", data.access_token);
    console.log("Refresh Token:", data.refresh_token);
  } catch (error) {
    console.error("Failed to get user OAuth token:", error.message);
  }
}

// ⚠️ 替換 `your_code_here` 為你在步驟 1 拿到的 `code`
getUserOAuthToken(process.env.CODE);
