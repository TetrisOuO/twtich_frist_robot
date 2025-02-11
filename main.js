const tmi = require("tmi.js");
require("dotenv").config();

const channel = "jerry_peter";

const client = new tmi.Client({
  options: { debug: true },
  identity: {
    username: process.env.TWITCH_USER_NAME,
    password: process.env.TWITCH_OAUTH,
  },
  channels: [channel],
});

client.connect().catch(console.error);

client.on("message", async (channel, tags, message, self) => {
  // Ignore echoed messages.
  if (self) return;

  if (message.toLowerCase() === "!hello") {
    // "@alca, heya!"
    client.say(channel, `@${tags.username}, heya!`);
  }
});
