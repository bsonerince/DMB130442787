const Discord = require('discord.js');

exports.run = async(client, message, args) => {
  if(!args[0]) return message.reply('Bota yazdırmak istediğin şeyi belirtmelisin!')
  let yazı = args.slice(0).join(' ');
  if(yazı.includes('token') || yazı.includes('@everyone') || yazı.includes('@here')) return message.reply('Bu yazıyı atamam ;)')
  message.delete(100)
  message.channel.send(yazı)
};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'adminyaz', 
  description: 'Bota belirttiğiniz şeyi yazdırırsınız.',
  usage: 'adminyaz [mesajınız]' 
};