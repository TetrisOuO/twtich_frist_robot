請創建 .env 檔案
TWITCH_OAUTH="oauth:<請輸入 access token>"
TWITCH_USER_NAME="<請輸入 機器人 twitch ID>"
TWITCH_CLIENT_ID="<請輸入 tiwtch dev client ID>"
TWITCH_CLIENT_SECRET="<請輸入 twitch dev client secret>"
TWITCH_REFRESH_TOKEN="<請輸入 refresh token>"
CODE="<請輸入 code>"

如何獲取 以上數值

一. TWITCH_CLIENT_SECRET 和 TWITCH_CLIENT_ID 獲取

1. 申請 Twitch Developer Account
2. https://dev.twitch.tv/，創建應用 app
   取名稱
   OAuth 導向 http://localhost:3000
   選擇 分類
   此時你會看到 客戶端 ID (client id) 就是 TWITCH_CLIENT_ID
   按下新密碼
   會看到客戶端密碼 (client secret) 就是 TWITCH_CLIENT_SECRET

二. TWITCH_USER_NAME 獲取

1. 申請 Twitch 帳戶
2. 申請 Twitch 英文就是 ID 就是 TWITCH_USER_NAME

三. CODE 獲取

1. 使用瀏覽器連上
   https://id.twitch.tv/oauth2/authorize
   ?response_type=code
   &client_id=<你的 client_id>
   &redirect_uri=<你的 redirect_uri>
   &scope=chat:read chat:edit
   如果想要更多權限請到 (https://dev.twitch.tv/docs/api/) 文檔查看 scope 相關資訊

2. 連線後會與你核對是否給予權限，按下是後有一個 here 的網址可以點
3. 點完後會出現很像連不上，表示你做對了，請注意上方網址
   http://localhost/?code=<這一串就是 CODE>&scope=xxxxxxxxx
4. code=<這一串就是 CODE>

四. TWITCH_REFRESH_TOKEN 獲取

1. 有了 code 後執行開啟命令提示輸入 node getAcssToken.js
   如果無法使用有 2 種可能

   可能一: 目錄不對
   處理方法: 請在命令提示裡 cd 到本資料夾(例如: cd C:\Users\...\twitch get OAuth)
   再執行 node getAcssToken.js

   可能二: 請下載 node 後執行可能一

2.此時命令提示會出現 User OAuth Token: <這一長串就是你的 TWITCH_REFRESH_TOKEN>

五. TWITCH_OAUTH 獲取

1.使用 命令提示輸入 node refresh.js
此時會有
New Access Token: <這是你的 TWITCH_OAUTH>
New Refresh Token: xxxxxxxxxxxx
Token is valid: {
client_id: 'xxxxxxxxxxxxxx',
scopes: [ 'chat:xxxx', 'chat:xxxx' ],
user_id: 'xxxxx',
expires_in: xxxx
}
