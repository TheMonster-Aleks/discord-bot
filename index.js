var Discord = require("discord.js");

var Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]});

const prefix = "*";

Client.on("ready", () => {
    console.log("bot opérationnel")
});

Client.on("messageCreate", message => {
    if (message.author.bot) return;

    //*help
    if(message.content === prefix + "help"){
        const embed = new Discord.MessageEmbed()
            .setColor("#6600a1")
            .setTitle ("𝑴𝒚-𝑯𝒆𝒓𝒐𝒔-𝑨𝒄𝒂𝒅𝒆𝒎𝒊𝒂")
            .setAuthor("𝑨𝒖𝒕𝒆𝒖𝒓 𝒅𝒖 𝑩𝒐𝒕", "https://share.creavite.co/VLpxugJcEtsonVzi.gif")
            .setThumbnail("https://cdn.discordapp.com/attachments/948973605423824897/949349979309342790/6776-Universal-100-ANNI-Centenario1-600x600.jpg")
            .setImage("https://static3.cbrimages.com/wordpress/wp-content/uploads/2019/05/FEATURED-IMAGE-my-hero-academia.jpg")
            .setTimestamp()
            .setFooter("𝑪𝒆 𝑩𝒐𝒕 𝒂𝒑𝒑𝒂𝒓𝒕𝒊𝒆𝒏𝒕 à 𝑻𝒉𝒆𝑴𝒐𝒏𝒔𝒕𝒆𝒓_𝑨𝒍𝒆𝒌𝒔", "https://share.creavite.co/VLpxugJcEtsonVzi.gif")
            message.channel.send({ embeds: [embed]});
    }
});


Client.login(process.env.TOKEN);