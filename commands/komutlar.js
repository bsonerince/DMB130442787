const Discord = require("discord.js");
exports.run = async (client, message, args) => {
if (message.author.id != "454706987658248214") return message.channel.send("**Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!**")
if (args[0] == "liste") {
  message.channel.send(new Discord.RichEmbed().setColor(message.member.highestRole.hexColor).setThumbnail(client.user.avatarURL).setDescription(client.commands.array().map(e => "**"+e.help.name+"**").join(" `|` ")).setTitle("Komutlarımın Listesi!").setFooter(`${client.user.tag} - ${client.commands.size} komut!`, client.user.avatarURL))
} else if (args[0] == "göster") {
  if (!args[1] || !client.commands.has(args[1])) return message.channel.send("**Bir komut ismi yazmalısın!**")
  await message.channel.send("**İstediğin komutun kodlarını özeline gönderdim!**")
  message.author.send(client.commands.get(args[1]).run, {code: "js", split: true})
} else return message.channel.send("**Kullanabileceğiniz parametre:** `liste`**")
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kod", "command", "code"],
  permLevel: 0
}
exports.help = {
  name: "komut",
  description: "Komut Yönetimi",
  usage: "komut <liste>"
}