module.exports = {
  token_bot: "MTMyNDc1MDMxNzUyNjQ1NDI4NA.G44Vcc.KSbIw1MxYJnlUoDimRAOzZjSaK2dMDMK1Cw8Yg",
  ownerID: ["860761801855205396", "1293989203482247290"],
  botInvite: "https://discord.com/oauth2/authorize?client_id=1324750317526454284&permissions=8&integration_type=0&scope=bot",
  supportServer: "https://discord.gg/tbMNNnwDRg",
  mongodbURL: "mongodb+srv://shiva:shiva@musicbotyt.ouljywv.mongodb.net/?retryWrites=true&w=majority",
  status: 'oof',
  commandsDir: './commands',
  language: "en",
  embedColor: "00fbff",
  errorLog: "",


  sponsor: {
    status: true,
    url: "https://discord.gg/tbMNNnwDRg",
  },

  voteManager: {
    status: false,
    api_key: "",
    vote_commands: ["back", "channel", "clear", "dj", "filter", "loop", "nowplaying", "pause", "playnormal", "playlist", "queue", "resume", "save", "play", "skip", "stop", "time", "volume"],
    vote_url: "",
  },

  shardManager: {
    shardStatus: false
  },

  playlistSettings: {
    maxPlaylist: 10,
    maxMusic: 75,
  },

  opt: {
    DJ: {
      commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume', 'shuffle']
    },

    voiceConfig: {
      leaveOnFinish: false,
      leaveOnStop: false,
      leaveOnEmpty: {
        status: true,
        cooldown: 10000000,
      },

    },

    maxVol: 150,

  }
}
