/*HELLO BRO TERIMA KASIH SUDAH AMBIL SCRIPT INI JANGAN LUPA IKUTI DAN SUBSCRIBE MEDIA SOSIAL OWNER DAN BOT

Instagram : @arsrfi.jpg
Youtube : Channel JOJO
WhatsApp : 0813-1994-4917

THANKS TO
- Irfan Hardianto
- Amell
- Hardianto
- Affis Junianto
- Rafli Rusdiana
- Febri
- Grup Jojoo

Matur Nuwun*/
"use strict";
const {
	downloadContentFromMessage
} = require("@adiwajshing/baileys")
const { color, bgcolor } = require('../lib/color')
const { getBuffer, fetchJson, fetchText, getRandom, getGroupAdmins, runtime, sleep, makeid } = require("../lib/myfunc");
const { webp2mp4File } = require("../lib/convert")
const { y2mateA, y2mateV } = require('../lib/y2mate')
const { pinterest } = require("../lib/pinterest")
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("../lib/limit");
const { isTicTacToe, getPosTic } = require("../lib/tictactoe");
const { addPlayGame, getJawabanGame, isPlayGame, cekWaktuGame, getGamePosi } = require("../lib/game");
const tictac = require("../lib/tictac");
const _prem = require("../lib/premium");

const fs = require ("fs");
const moment = require("moment-timezone");
const util = require("util");
const { exec, spawn } = require("child_process");
const ffmpeg = require("fluent-ffmpeg");
const xfar = require('xfarr-api');
const axios = require("axios");
const hxz = require("hxz-api");
const ra = require("ra-api");
const kotz = require("kotz-api");
const yts = require("yt-search");
const speed = require("performance-now");
const request = require("request");
const ms = require("parse-ms");

//Apikey melcanz, Search aja melcanz.com
//Apikey Anto = hardianto
//Apikey jojo = Syaa
const apikey = "melcantik"
const keyanto = "hardianto"
const jojoapi = "Syaa"
const ikiapi = "FuckBitch"

//Setting ke 2

var ownnumb = "6283811034750"
var nobot = "6283811034750"

// Setting Donasi
const gopay = "083168004413"
const ovo = "083168004413"
const dana = "083811034750"
const pulsa = "083811034750"
const pulsa2 = "083163410880"
const ig = "arsrfi.jpg"

// Exif
const Exif = require("../lib/exif")
const exif = new Exif()

// DB Game
let tictactoe = [];
let tebakgambar = []

// Database
let pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))
let mess = JSON.parse(fs.readFileSync('./message/response.json'));
let premium = JSON.parse(fs.readFileSync('./database/premium.json'));
let balance = JSON.parse(fs.readFileSync('./database/balance.json'));
let limit = JSON.parse(fs.readFileSync('./database/limit.json'));
let glimit = JSON.parse(fs.readFileSync('./database/glimit.json'));

moment.tz.setDefault("Asia/Jakarta").locale("id");

module.exports = async(conn, msg, m, setting, store) => {
	try {
		let { ownerNumber, botName, gamewaktu, limitCount } = setting
		let { allmenu } = require('./help')
		const { type, quotedMsg, mentioned, now, fromMe } = msg
		if (msg.isBaileys) return
		const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
		let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
		const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
		const content = JSON.stringify(msg.message)
		const from = msg.key.remoteJid
		const chats = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'documentMessage') && msg.message.documentMessage.caption ? msg.message.documentMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type == 'buttonsResponseMessage' && msg.message.buttonsResponseMessage.selectedButtonId) ? msg.message.buttonsResponseMessage.selectedButtonId : (type == 'templateButtonReplyMessage') && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : ''
		const toJSON = j => JSON.stringify(j, null,'\t')
		if (conn.multi) {
			var prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(chats) ? chats.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '#'
		} else {
			if (conn.nopref) {
				prefix = ''
			} else {
				prefix = conn.prefa
			}
		}
		const more = String.fromCharCode(8206)
    const readmore = more.repeat(4001)
		const args = chats.split(' ')
		const command = chats.toLowerCase().split(' ')[0] || ''
		const isCmd = command.startsWith(prefix)
		const isGroup = msg.key.remoteJid.endsWith('@g.us')
		const sender = isGroup ? (msg.key.participant ? msg.key.participant : msg.participant) : msg.key.remoteJid
		const isOwner = ownerNumber.includes(sender)
		const pushname = msg.pushName
		const q = chats.slice(command.length + 1, chats.length)
		const body = chats.startsWith(prefix) ? chats : ''
		const botNumber = conn.user.id.split(':')[0] + '@s.whatsapp.net'
		const groupMetadata = isGroup ? await conn.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.id : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender)
		const isUser = pendaftar.includes(sender)
		const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium)

		const gcounti = setting.gcount
		const gcount = isPremium ? gcounti.prem : gcounti.user

		const mentionByTag = type == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.mentionedJid : []
                const mentionByReply = type == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.participant || "" : ""
                const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
                mention != undefined ? mention.push(mentionByReply) : []
                const mentionUser = mention != undefined ? mention.filter(n => n) : []
		
		async function downloadAndSaveMediaMessage (type_file, path_file) {
			if (type_file === 'image') {
				var stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			} else if (type_file === 'video') {
				var stream = await downloadContentFromMessage(msg.message.videoMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			} else if (type_file === 'sticker') {
				var stream = await downloadContentFromMessage(msg.message.stickerMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			} else if (type_file === 'audio') {
				var stream = await downloadContentFromMessage(msg.message.audioMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.audioMessage, 'audio')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			}
		}
		const sendFileFromUrl = async (from, url, caption, options = {}) => {
		    let mime = '';
		    let res = await axios.head(url)
		    mime = res.headerd["content-type"]
		    let type = mime.split("/")[0]+"Message"
		    if (mime.split("/")[0] === "image") {
		       var img = await getBuffer(url)
		       return conn.sendMessage(from, { image: img, caption: caption }, options)
		    } else if (mime.split("/")[0] === "video") {
		       var vid = await getBuffer(url)
		       return conn.sendMessage(from, { video: vid, caption: caption }, options)
		    } else if (mime.split("/")[0] === "audio") {
		       var aud = await getBuffer(url)
		       return conn.sendMessage(from, { audio: aud, mimetype: 'audio/mp3' }, options)
		    } else {
		       var doc = await getBuffer(url)
		       return conn.sendMessage(from, { document: doc, mimetype: mime, caption: caption }, options)
		    }
		}
        async function sendPlay(from, query) {
           var url = await yts(query)
           url = url.videos[0].url
           hxz.youtube(url).then(async(data) => {
             /*var button = [{ buttonId: `/ytmp3 ${url}`, buttonText: { displayText: `🎵 Audio (${data.size_mp3})` }, type: 1 }, { buttonId: `/ytmp4 ${url}`, buttonText: { displayText: `🎥 Video (${data.size})` }, type: 1 }]*/
             /*conn.sendMessage(from, { caption: `*Title :* ${data.title}\n*Quality :* ${data.quality}\n*Url :* https://youtu.be/${data.id}`, location: { jpegThumbnail: await getBuffer(data.thumb) }, buttons: button, footer: 'Pilih Salah Satu Button Dibawah⬇️', mentions: [sender] })*/
           var button = [
		        	{ urlButton: { displayText: `Source`, url : `https://youtu.be/${data.id}` } },
	         		{ quickReplyButton: { displayText: `🎵 Audio (${data.size_mp3})`, id: `${prefix}ytmp3 ${url}` } },
	         		{ quickReplyButton: { displayText: `🎥 Video (${data.size})`, id: `${prefix}ytmp4 ${url}` } },
		]
             conn.sendMessage(from, { caption: `*Title :* ${data.title}\n*Quality :* ${data.quality}\n*Url :* https://youtu.be/${data.id}`, image: {url: data.thumb}, templateButtons: button, footer: 'Pilih Salah Satu Button Dibawah', mentions: [sender]} )
           }).catch((e) => {
             conn.sendMessage(from, { text: mess.error.api }, { quoted: msg })
               ownerNumber.map( i => conn.sendMessage(from, { text: `Send Play Error : ${e}` }))
           })
        }
		const isUrl = (url) => {
			return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
		}
		function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
		function monospace(string) {
            return '```' + string + '```'
        }
		function randomNomor(min, max = null) {
		  if (max !== null) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		  } else {
			return Math.floor(Math.random() * min) + 1
		  }
		}
		const pickRandom = (arr) => {
			return arr[Math.floor(Math.random() * arr.length)]
		}
		function mentions(teks, mems = [], id) {
			if (id == null || id == undefined || id == false) {
			  let res = conn.sendMessage(from, { text: teks, mentions: mems })
			  return res
			} else {
		      let res = conn.sendMessage(from, { text: teks, mentions: mems }, { quoted: msg })
		      return res
 		    }
		}
		const reply = (teks) => {
			conn.sendMessage(from, { text: teks }, { quoted: msg })
		}
		const textImg = (teks) => {
			return conn.sendMessage(from, { text: teks, jpegThumbnail: fs.readFileSync(setting.pathimg) }, { quoted: msg })
		}
		const sendMess = (hehe, teks) => {
			conn.sendMessage(hehe, { text, teks })
		}
		const buttonWithText = (from, text, footer, buttons) => {
			return conn.sendMessage(from, { text: text, footer: footer, templateButtons: buttons })
		}
		const sendContact = (jid, numbers, name, quoted, mn) => {
			let number = numbers.replace(/[^0-9]/g, '')
			const vcard = 'BEGIN:VCARD\n' 
			+ 'VERSION:3.0\n' 
			+ 'FN:' + name + '\n'
			+ 'ORG:;\n'
			+ 'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n'
			+ 'END:VCARD'
			return conn.sendMessage(from, { contacts: { displayName: name, contacts: [{ vcard }] }, mentions : mn ? mn : []},{ quoted: quoted })
		}
		//{ callButton: { displayText: `Call Owner!`, phoneNumber: `+${ownnumb}` } },
		const buttonsDefault = [
			{ urlButton: { displayText: `GRUP MASA-BOT`, url : `https://chat.whatsapp.com/HcFQEGk424lAOorW7hmRas` } },
			{ urlButton: { displayText: `My Support`, url : `nekopoi.care` } },
			{ quickReplyButton: { displayText: `Sedekah`, id: `${prefix}donate` } },
			{ quickReplyButton: { displayText: `Developer`, id: `${prefix}owner` } },
			{ quickReplyButton: { displayText: `Sewa~Bot💸`, id: `${prefix}sewa` } },
		]
		const button5 = [
			{ callButton: { displayText: `Number Owner`, phoneNumber: `083811034750` } },
			{ urlButton: { displayText: `Grup Masa Bot`, url : `https://chat.whatsapp.com/HcFQEGk424lAOorW7hmRas` } },
			{ quickReplyButton: { displayText: `Owner Nya`, id: `${prefix}owner` } },
		]
        
		const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedMsg = (type == 'extendedTextMessage')
		const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
		const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
		const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
		const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
		const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false

		// Auto Read & Presence Online
		conn.sendReadReceipt(from, sender, [msg.key.id])
		conn.sendPresenceUpdate('available', from)
		
        // Auto Registrasi
		if (isCmd && !isUser) {
			pendaftar.push(sender)
			fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar, null, 2))
		  }

		// Premium
		_prem.expiredCheck(conn, premium)

		// Tictactoe
		if (isTicTacToe(from, tictactoe)) tictac(chats, prefix, tictactoe, from, sender, reply, mentions, addBalance, balance)

        // Game
		cekWaktuGame(conn, tebakgambar)
		if (isPlayGame(from, tebakgambar) && isUser) {
		  if (chats.toLowerCase() == getJawabanGame(from, tebakgambar)) {
		    var htgm = randomNomor(100, 150)
			addBalance(sender, htgm, balance)
		    reply(`*Selamat Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, tebakgambar)}\nHadiah : ${htgm} balance\n\nIngin bermain lagi? ketik *${prefix}tebakgambar*`)
		    tebakgambar.splice(getGamePosi(from, tebakgambar), 1)
		  }
		}
if (chats.startsWith("@6283163410880")){
	conn.sendMessage(from, { react: { text: `😍`, key: msg.key }})
   conn.sendMessage(from, { audio: {url : `https://d.top4top.io/m_22231oj7h1.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: msg})
}
if (chats.startsWith("Assalamualaikum")){
		reply("Waalaikumsalam kakk️")
conn.sendMessage(from, { audio: fs.readFileSync('audio/assalamualaikum.mp3'), mimetype: 'audio/mp4', ptt: true}, {quoted: msg})
}
if (chats.startsWith("Rizky")){
		reply("Kayak kenal🫡️")
conn.sendMessage(from, { audio: fs.readFileSync('audio/meme.mp3'), mimetype: 'audio/mp4', ptt: true}, {quoted: msg})
}
if (chats.startsWith("Masa")){
conn.sendMessage(from, { audio: fs.readFileSync('audio/kontol.m4a'), mimetype: 'audio/mp4', ptt: true}, {quoted: msg})
}
		if (chats.startsWith("> ") && isOwner) {
		console.log(color('[EVAL]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
		  const ev = (sul) => {
            var sat = JSON.stringify(sul, null, 2)
            var bang = util.format(sat)
            if (sat == undefined) {
              bang = util.format(sul)
            }
            return textImg(bang)
          }
          try {
           textImg(util.format(eval(`;(async () => { ${chats.slice(2)} })()`)))
          } catch (e) {
           textImg(util.format(e))
          }
		} else if (chats.startsWith("$ ") && isOwner) {
        console.log(color('[EXEC]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
          exec(chats.slice(2), (err, stdout) => {
		    if (err) return reply(`${err}`)
		    if (stdout) reply(`${stdout}`)
		  })
        } else if (chats.startsWith("x ") && isOwner) {
	    console.log(color('[EVAL]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkaokwoak`))
		 try {
	       let evaled = await eval(chats.slice(2))
		   if (typeof evaled !== 'string') evaled = require("util").inspect(evaled)
			reply(`${evaled}`)
		 } catch (err) {
		   reply(`${err}`)
		 }
		}
		
		// Logs;
		if (!isGroup && isCmd && !fromMe) {
			addBalance(sender, randomNomor(45), balance)
			console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(msg.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
		}
		if (isGroup && isCmd && !fromMe) {
			addBalance(sender, randomNomor(45), balance)
			console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(msg.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
		}

		switch(command) {
			// Main Menu
			case prefix+'menu':
			case prefix+'help':
			  conn.sendMessage(from, { audio: fs.readFileSync('audio/Assalamualaika.m4a'), mimetype: 'audio/mp4', ptt: true}, {quoted: msg})
			    var teks = allmenu(sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount)
			    
				conn.sendMessage(from, { react: { text: `😍`, key: msg.key }})
conn.sendMessage(from, { caption: teks, image: fs.readFileSync('media/Jojo.jpg'), templateButtons: buttonsDefault, footer: '© Masa - Bot', mentions: [sender]} )
				break
case prefix+'donasiah':
  reply(`Jika Ingin Sedekah untuk bot Harap Hubungi Owner yahh\n\nhttps://wa.me/${ownnumb}`)
  break
case prefix+'getcase':
if (m.isGroup) throw mess.private
if (!isCreator) return reply(mess.owner)
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("message/msg.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
ads(`${getCase(q)}`)
addCmd(command.slice(1), 1, commund)
break
case prefix+'donasi':
  case prefix+'donate':
  var donasibut = [
			{ callButton: { displayText: `Number Owner`, phoneNumber: `083811034750` } },
			{ urlButton: { displayText: `Grup Masa`, url : `https://chat.whatsapp.com/HcFQEGk424lAOorW7hmRas` } },
			{ quickReplyButton: { displayText: `Aku Ingin Sedekah`, id: `${prefix}donasiah` } },
		]
var teks = `  │
❏ GOPAY
❏ ${gopay}
❏ OVO
❏ ${ovo}
❏ DANA
❏ ${dana}
❏ PULSA
❏ ${pulsa}
❏ PULSA2
❏ ${pulsa2}
  
  Donasi Untuk Upgrade Ke Fitur Premium
  Note : SedekahSeikhlasnya`
 conn.sendMessage(from, { caption: teks, image: {url: `https://telegra.ph/file/55c56db4c54cbc23bded2.png`}, templateButtons: donasibut, footer: '© Masa - Bot', mentions: [sender]} )  
			    break
case prefix+'sewa':
  case prefix+'daftarprem':
  var teks = `*[ HARGA SEWA DAN PREMIUM ]*

_Jika ingin sewa bot harap hubungi owner ya kak_
 https://wa.me/6283811034750
 
 *Keuntungan :*
- Limit Unlimited
- Bisa gunakan bot sepuasnya
- Bot Join Grup WhatsApp Mu
- Tidak Ada Kata ~Limit Menurun~
- Transfer Balance
- Akses fitur premium

*LIST HARGA SEWA*
- Rp.5.000 - Perbulan
- Rp.10.000 - Dua Bulan
- Rp.30.000 - Lima Bulan

*LIST DAFTAR PREMIUM*
- Rp.3.000 - Perbulan
- Rp.7.000 - Dua Bulan
- Rp.20.000 - Lima Bulan`
			    conn.sendMessage(from, { caption: teks, location: { jpegThumbnail: fs.readFileSync(setting.pathimg) }, templateButtons: button5, footer: '© Masa - Bot', mentions: [sender] })
			    break
			case prefix+'runtime':
			    reply(runtime(process.uptime()))
			    break
case prefix+'gcmasa':
  reply("Group 1\n\nhttps://chat.whatsapp.com/HcFQEGk424lAOorW7hmRas\nGroup 2\n\nhttps://chat.whatsapp.com/HcFQEGk424lAOorW7hmRas\nItuhh silahkan join kak")
  break
			case prefix+'speed':
			    let timestamp = speed();
                            let latensi = speed() - timestamp
                            textImg(`${latensi.toFixed(4)} Second`)
		            break
case prefix+'infobot':
  case prefix+'inforobot':
    case prefix+'info':
      var caption = `*[ INFO MASA BOT ]*

*Nama Bot :* masa bot
*Name Owner :* Fahri
*Nomor Bot :* wa.me/${nobot}
*Nomor Owner :* wa.me/${ownnum}
*Engine :* NodeJs
*Status :* Aktif
*Aktif Selama :* ${runtime(process.uptime())}

===================
Thanks To
- Riyan
- Arasya
- Amel
- Fahri
- Hardianto
- Febri`

conn.sendMessage(from, {caption: caption, image: {url: `https://telegra.ph/file/328b6ec9ab3ab2818ee6e.jpg`}}, {quoted: msg})
break
			/*case prefix+'donate':
			case prefix+'donasi':
			    reply(`◪ DONASI
  │
  ├─ ❏ GOPAY
  ├─ ❏ 083168004413
  ├─ ❏ OVO
  ├─ ❏ 083168004413
  ├─ ❏ PULSA
  ├─ ❏ 083811034750
  ├─ ❏ PULSA2
  ├─ ❏ 083163410880
  
  Donasi Untuk Upgrade Ke Fitur Premium
  Note : Donasi Seikhlasnya`)
			    break*/
			case prefix+'owner':
			    for (let x of ownerNumber) {
			      sendContact(from, x.split('@s.whatsapp.net')[0], 'My Owner', msg)
			    }
			    conn.sendMessage(from, { audio: fs.readFileSync('audio/owner.mp3'), mimetype: 'audio/mp4', ptt: true}, {quoted: msg})
			    break
			case prefix+'cekprem':
            case prefix+'cekpremium':
                if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}daftarprem* untuk membeli premium`)
                if (isOwner) return reply(`Lu owner bego!`)
                if (_prem.getPremiumExpired(sender, premium) == "PERMANENT") return reply(`PERMANENT`)
                let cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
                let premiumnya = `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
                reply(premiumnya)
                break
            case prefix+'listprem':
                let txt = `List Prem\nJumlah : ${premium.length}\n\n`
                let men = [];
                for (let i of premium) {
                    men.push(i.id)
                    txt += `*ID :* @${i.id.split("@")[0]}\n`
                  if (i.expired === 'PERMANENT') {
                    let cekvip = 'PERMANENT'
                    txt += `*Expire :* PERMANENT\n\n`
                  } else {
                    let cekvip = ms(i.expired - Date.now())
                    txt += `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
                  }
                }
                mentions(txt, men, true)
                break
	        // Converter & Tools Menu
			case prefix+'sticker': case prefix+'stiker': case prefix+'s': case prefix+'stickergif': case prefix+'sgif': case prefix+'stikergif': case prefix+'stikgif':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (isImage || isQuotedImage) {
		           var stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
			       var buffer = Buffer.from([])
			       for await(const chunk of stream) {
			          buffer = Buffer.concat([buffer, chunk])
			       }
			       var rand1 = 'sticker/'+getRandom('.jpg')
			       var rand2 = 'sticker/'+getRandom('.webp')
			       fs.writeFileSync(`./${rand1}`, buffer)
			       ffmpeg(`./${rand1}`)
				.on("error", console.error)
				.on("end", () => {
				  exec(`webpmux -set exif ./sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
				    conn.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) })
				    limitAdd(sender, limit)
					fs.unlinkSync(`./${rand1}`)
			            fs.unlinkSync(`./${rand2}`)
			          })
				 })
				.addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
				.toFormat('webp')
				.save(`${rand2}`)
			    } else if (isVideo || isQuotedVideo) {
				 var stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
				 var buffer = Buffer.from([])
				 for await(const chunk of stream) {
				   buffer = Buffer.concat([buffer, chunk])
				 }
			     var rand1 = 'sticker/'+getRandom('.mp4')
				 var rand2 = 'sticker/'+getRandom('.webp')
			         fs.writeFileSync(`./${rand1}`, buffer)
			         ffmpeg(`./${rand1}`)
				  .on("error", console.error)
				  .on("end", () => {
				    exec(`webpmux -set exif ./sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
				      conn.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: msg })
				      limitAdd(sender, limit)
					  fs.unlinkSync(`./${rand1}`)
				      fs.unlinkSync(`./${rand2}`)
				    })
				  })
				 .addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
				 .toFormat('webp')
				 .save(`${rand2}`)
                } else {
			       reply(`Kirim gambar/vidio dengan caption ${command} atau balas gambar/vidio yang sudah dikirim\nNote : Maximal vidio 10 detik!`)
			    }
                break
			/*case prefix+'toimg': case prefix+'toimage':
			case prefix+'tovid': case prefix+'tovideo':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (!isQuotedSticker) return reply(`Reply stikernya!`)
			    var stream = await downloadContentFromMessage(msg.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
			    var buffer = Buffer.from([])
			    for await(const chunk of stream) {
			       buffer = Buffer.concat([buffer, chunk])
			    }
			    var rand1 = 'sticker/'+getRandom('.webp')
			    var rand2 = 'sticker/'+getRandom('.png')
			    fs.writeFileSync(`./${rand1}`, buffer)
			    if (isQuotedSticker && msg.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated !== true) {
			    exec(`ffmpeg -i ./${rand1} ./${rand2}`, (err) => {
			      fs.unlinkSync(`./${rand1}`)
			      if (err) return reply(mess.error.api)
			      conn.sendMessage(from, { image: { url: `./${rand2}` }}, { quoted: msg })
			      limitAdd(sender, limit)
				  fs.unlinkSync(`./${rand2}`)
			    })
			    } else {
			    reply(mess.wait)
		          webp2mp4File(`./${rand1}`).then( data => {
			       fs.unlinkSync(`./${rand1}`)
			       conn.sendMessage(from, { video: { url: data.result }}, { quoted: msg })
			       limitAdd(sender, limit)
				  })
			    }
			    break*/
			    case prefix+'toimage': case prefix+'toimg': {
if (isBan) return ads(mess.ban)
if (!m.quoted) return ads('Reply Image')
if (!/webp/.test(mime)) return ads(`balas stiker dengan caption *${prefix + command}*`)
ads(mess.wait)
let media = await conn.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
conn.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'attp': {
const buff = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(q)}`)
conn.sendMessage(from, { sticker : buff}) 
}
break
	        // Downloader Menu
			/*case prefix+'tiktok':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('tiktok')) return reply(mess.error.Iv)
			    reply(mess.wait)
			    xfar.Tiktok(args[1]).then( data => {
			      conn.sendMessage(from, {
				   video: { url: data.medias[0].url },
				   caption: `${data.title}\n\nKamu bisa mengubahnya menjadi Vidio Tanpa Watermark atau Audio, pencet tombol dibawah untuk mengubahnya!`,
				   buttons: [{buttonId: `${prefix}tiktoknowm ${args[1]}`, buttonText: { displayText: "Without Watermark" }, type: 1 },
					{buttonId: `${prefix}tiktokaudio ${args[1]}`, buttonText: { displayText: "Audio" }, type: 1 }],
				   footer: "Create by @yannnnn.zz_"
			      }, { quoted: msg })
				  limitAdd(sender, limit)
			    }).catch(() => reply(mess.error.api))
			    break*/
			case prefix+'tiktoknowm':
			  case prefix+'tiktok':
				  case prefix+'tt':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    const link = `${q}`
				hxz.ttdownloader(link).then( data => {
					var tidtod = [
						{ urlButton: { displayText: `Link`, url : `${q}` } },
			{ quickReplyButton: { displayText: `Ubah Ke Audio`, id: `${prefix}tiktokaudio ${q}` } },
				]
				conn.sendMessage(from, { caption: `Succes Download Video Tiktok, Thanks For Using MASA-BOT!`, video: {url: data.nowm}, templateButtons: tidtod, footer: '© Masa - Bot', mentions: [sender]} )
			}).catch(() => reply(mess.error.api))
			limitAdd(sender, limit)
			    break
			case prefix+'tiktokaudio':
				case prefix+'ttaudio':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('tiktok')) return reply(mess.error.Iv)
			    reply(mess.wait)
			    hxz.ttdownloader(args[1]).then( data => {
			      conn.sendMessage(from, { audio: { url: data.nowm }, mimetype: 'audio/mp4' }, { quoted: msg })
			       limitAdd(sender, limit)
				}).catch(() => reply(mess.error.api))
		        break
				case prefix+'mediafire':
				if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
					if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('mediafire')) return reply(mess.error.Iv)
			    reply(mess.wait)
					var data = await fetchJson(`https://docs-jojo.herokuapp.com/api/mediafire?url=${q}`)
					conn.sendMessage(from, { document: { url: data.url }, fileName: `${data.filename}`, mimetype: 'zip' }, { quoted: msg })
					limitAdd(sender, limit)
					break
            case prefix+'play':
				case prefix+'yt':
					case prefix+'youtube':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah ${command} query\nContoh : ${command} monokrom`)
                reply(mess.wait)
                await sendPlay(from, q)
				limitAdd(sender, limit)
                break
case prefix+'ytmp4': case prefix+'mp4':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('youtu.be') && !args[1].includes('youtube.com')) return reply(mess.error.Iv)
			    reply(mess.wait)
			    xfar.Youtube(args[1]).then( data => {
			      //var teks = `*Youtube Video Downloader*\n\n*≻ Title :* ${data.title}\n*≻ Quality :* ${data.medias[1].quality}\n*≻ Size :* ${data.medias[1].formattedSize}\n*≻ Url Source :* ${data.url}`
			      var teks = `Succes`
			      conn.sendMessage(from, { video: { url: data.medias[1].url }, caption: teks }, { quoted: msg })
			      limitAdd(sender, limit)
				}).catch(() => reply(mess.error.api))
			    break
/*case prefix+'ytmp3': case prefix+'mp3':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('youtu.be') && !args[1].includes('youtube.com')) return reply(mess.error.Iv)
			    reply(mess.wait)
			    xfar.Youtube(args[1]).then( data => {
			      var teks = `*Youtube Audio Downloader*\n\n*≻ Title :* ${data.title}\n*≻ Quality :* ${data.medias[7].quality}\n*≻ Size :* ${data.medias[7].formattedSize}\n*≻ Url Source :* ${data.url}\n\n_wait a minute sending media..._`
			      conn.sendMessage(from, { audio: { url: data.medias[7].url }, mimetype: 'audio/mp4' }, { quoted: msg })
			      limitAdd(sender, limit)
				}).catch(() => reply(mess.error.api))
			    break*/
case prefix+'ytmp3audio':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)

			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)

			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('youtu.be') && !args[1].includes('youtube.com')) return reply(mess.error.Iv)
			    reply(mess.wait)
          var data = await fetchJson(`https://docs-jojoapi.herokuapp.com/api/yutub/audio?url=${q}&apikey=${jojoapi}`)
var title = `*Judul :* ${data.result.title}\n*Link Download :* ${data.result.result}\n\n*Tunggu Sebentar Audio Akan Segera Di Kirim*`
conn.sendMessage(from, {caption: title, image: {url: data.result.thumb}}, {quoted: msg})
conn.sendMessage(from, {audio: {url: data.result.result}, mimetype: 'audio/mp4'}, {quoted: msg})
limitAdd(sender, limit)
              break
			  case prefix+'ytmp3vn':
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('youtu.be') && !args[1].includes('youtube.com')) return reply(mess.error.Iv)
			    reply(mess.wait)
				var data = await fetchJson(`https://docs-jojoapi.herokuapp.com/api/yutub/audio?url=${q}&apikey=${jojoapi}`)
				var title = `*Judul :* ${data.result.title}\n*Link Download :* ${data.result.result}\n\n*Tunggu Sebentar Voice Not Akan Segera Di Kirim*`
				conn.sendMessage(from, {caption: title, image: {url: data.result.thumb}}, {quoted: msg})
				conn.sendMessage(from, {audio: {url: data.result.result}, mimetype: 'audio/mp4', ptt: true}, {quoted: msg})
				limitAdd(sender, limit)
				  break
				  case prefix+'ytmp3':
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('youtu.be') && !args[1].includes('youtube.com')) return reply(mess.error.Iv)
			    reply(mess.wait)
				var data = await fetchJson(`https://docs-jojoapi.herokuapp.com/api/yutub/audio?url=${q}&apikey=${jojoapi}`)
				var title = `*Judul :* ${data.result.title}\n*Link Download :* ${data.result.result}\n\n*Tunggu Sebentar File MP3 Akan Segera Di Kirim*`
				conn.sendMessage(from, {caption: title, image: {url: data.result.thumb}}, {quoted: msg})
				conn.sendMessage(from, { document: { url: data.result.result }, fileName: `${data.result.title}.mp3`, mimetype: 'audio/mp3' }, { quoted: msg })
				limitAdd(sender, limit)
				  break
			case prefix+'getvideo': case prefix+'getvidio':
			if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (!isQuotedImage) return reply(`Balas hasil pencarian dari ${prefix}ytsearch dengan teks ${command} <no urutan>`)
				if (!quotedMsg.fromMe) return reply(`Hanya bisa mengambil hasil dari pesan bot`)
				if (args.length < 2) return reply(`Balas hasil pencarian dari ${prefix}ytsearch dengan teks ${command} <no urutan>`)
				var kuoted = await quotedMsg.chats
                var ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/gi
                var arrey = [...kuoted.matchAll(ytIdRegex)].map(x => x[1])
                if (arrey.length == 0) return reply(`Reply hasil dari *${prefix}ytsearch* dengan perintah *${command}* urutan`)
                if (isNaN(args[1])) return reply(`Hanya support angka! pilih angka 1 sampai 10\nContoh : ${command} 2`)
                if (args[1] > arrey.length) return reply(`Urutan Hasil *${prefix}ytsearch* Hanya Sampai *${arrey.length}*`)
			    reply(mess.wait)
			    xfar.Youtube(`https://youtube.com/watch?v=${arrey[args[1] -1]}`).then( data => {
			      var teks = `*Youtube Video Downloader*\n\n*≻ Title :* ${data.title}\n*≻ Quality :* ${data.medias[1].quality}\n*≻ Size :* ${data.medias[1].formattedSize}\n*≻ Url Source :* ${data.url}\n\n_wait a minute sending media..._`
			      conn.sendMessage(from, { video: { url: data.medias[1].url }, caption: teks }, { quoted: msg })
			       limitAdd(sender, limit)
				}).catch(() => reply(mess.error.api))
		        break
			case prefix+'getmusik': case prefix+'getmusic':
			if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (!isQuotedImage) return reply(`Balas hasil pencarian dari ${prefix}ytsearch dengan teks ${command} <no urutan>`)
				if (!quotedMsg.fromMe) return reply(`Hanya bisa mengambil hasil dari pesan bot`)
				if (args.length < 2) return reply(`Balas hasil pencarian dari ${prefix}ytsearch dengan teks ${command} <no urutan>`)
				/*var kuoted = await quotedMsg.chats
                var ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/gi
                var arrey = [...kuoted.matchAll(ytIdRegex)].map(x => x[1])
                if (arrey.length == 0) return reply(`Reply hasil dari *${prefix}ytsearch* dengan perintah *${command}* urutan`)
                if (isNaN(args[1])) return reply(`Hanya support angka! pilih angka 1 sampai 10\nContoh : ${command} 2`)
                if (args[1] > arrey.length) return reply(`Urutan Hasil *${prefix}ytsearch* Hanya Sampai *${arrey.length}*`)
			    reply(mess.wait)
			    xfar.Youtube(`https://youtube.com/watch?v=${arrey[args[1] -1]}`).then( data => {
			      var teks = `*Youtube Audio Downloader*\n\n*≻ Title :* ${data.title}\n*≻ Quality :* ${data.medias[7].quality}\n*≻ Size :* ${data.medias[7].formattedSize}\n*≻ Url Source :* ${data.url}\n\n_wait a minute sending media..._`
			      conn.sendMessage(from, { image: { url: data.thumbnail }, caption: teks }, { quoted: msg })
			      conn.sendMessage(from, { document: { url: data.medias[7].url }, fileName: `${data.title}.mp3`, mimetype: 'audio/mp3' }, { quoted: msg })
			      limitAdd(sender, limit)
				}).catch(() => reply(mess.error.api))*/
			    reply(mess.wait)
          var data = await fetchJson(`https://docs-jojoapi.herokuapp.com/api/yutub/audio?url=${q}&apikey=${jojoapi}`)
var title = `*Judul :* ${data.result.title}\n*Link Download :* ${data.result.result}\n\n*Tunggu Sebentar Audio Akan Segera Di Kirim*`
conn.sendMessage(from, {caption: title, image: {url: data.result.thumb}}, {quoted: msg})
conn.sendMessage(from, {audio: {url: data.result.result}, mimetype: 'audio/mp4'}, {quoted: msg})
limitAdd(sender, limit)
			    break
			case prefix+'igdl': case prefix+'instagram': case prefix+'ig':
			if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('instagram.com')) return reply(mess.error.Iv)
			    reply(mess.wait)
			    xfar.Instagram(args[1]).then( data => {
			     var teks = `*Instagram Downloader*\n\n*≻ Title :* ${data.title}\n*≻ Jumlah Media :* ${data.medias.length}\n*≻ Url Source :* ${data.url}\n\n_wait a minute sending media..._`
			     reply(teks)
			     for (let i of data.medias) {
				  if (i.extension === "mp4") {
				   conn.sendMessage(from, { video: { url: i.url }})
				  } else if (i.extension === "jpg") {
				   conn.sendMessage(from, { image: { url: i.url }})
			      }
			     }
				 limitAdd(sender, limit)
			    }).catch(() => reply(mess.error.api))
			    break
			case prefix+'facebook': case prefix+'fbdl':
			if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('facebook.com')) return reply(mess.error.Iv)
			    reply(mess.wait)
			    xfar.Facebook(args[1]).then( data => {
			      conn.sendMessage(from, { video: { url: data.medias[0].url }, caption: data.title }, { quoted: msg })
			      limitAdd(sender, limit)
				}).catch(() => reply(mess.error.api))
			    break
			// Owner Menu
			case prefix+'exif':
			    if (!isOwner) return reply(mess.OnlyOwner)
			    var namaPack = q.split('|')[0] ? q.split('|')[0] : q
                var authorPack = q.split('|')[1] ? q.split('|')[1] : ''
                exif.create(namaPack, authorPack)
				reply(`Sukses membuat exif`)
				break
			case prefix+'leave':
			    if (!isOwner) return reply(mess.OnlyOwner)
				if (!isGroup) return reply(mess.OnlyGrup)
				conn.groupLeave(from)
			    break
			case prefix+'masuk':
			  if (!isPremium)return reply("Khusus Pengguna Premium")
			    if (!isOwner) return reply(mess.OnlyOwner)
				if (args.length < 2) return reply(`Kirim perintah ${command} _linkgrup_`)
				if (!isUrl(args[1])) return reply(mess.error.Iv)
				var url = args[1]
			    url = url.split('https://chat.whatsapp.com/')[1]
				var data = await conn.groupAcceptInvite(url)
				reply(jsonformat(data))
				break
case prefix+'bc': case prefix+'broadcast':
			    if (!isOwner) return reply(mess.OnlyOwner)
		            if (args.length < 2) return reply(`Masukkan isi pesannya`)
                            var data = await store.chats.all()
                            for (let i of data) {
                               conn.sendMessage(i.id, { text: `*[ MASA BOT BROADCAST ]*\n\n${q}` })
                               await sleep(1000)
                            }
                            break
			case prefix+'setpp': case prefix+'setppbot':
		        if (!isOwner) return reply(mess.OnlyOwner)
		        if (isImage || isQuotedImage) {
				  var media = await downloadAndSaveMediaMessage('image', 'ppbot.jpeg')
				  var data =  await conn.updateProfilePicture(botNumber, { url: media })
			      fs.unlinkSync(media)
				  reply(`Sukses`)
				} else {
				  reply(`Kirim/balas gambar dengan caption ${command} untuk mengubah foto profil bot`)
				}
				break
			case prefix+'addprem':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Penggunaan :\n*${prefix}addprem* @tag waktu\n*${prefix}addprem* nomor waktu\n\nContoh : ${command} @tag 30d`)
                if (!args[2]) return reply(`Mau yang berapa hari?`)
                if (mentioned.length !== 0) {
                    _prem.addPremiumUser(mentioned[0], args[2], premium)
                    reply('Sukses')
                } else {
                 var cekap = await conn.onWhatsApp(args[1]+"@s.whatsapp.net")
                 if (cekap.length == 0) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
                    _prem.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], premium)
                    reply('Sukses')
                }
                break
            case prefix+'delprem':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Penggunaan :\n*${prefix}delprem* @tag\n*${prefix}delprem* nomor`)
                if (mentioned.length !== 0){
                    premium.splice(_prem.getPremiumPosition(mentioned[0], premium), 1)
                    fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
                    reply('Sukses!')
                } else {
                 var cekpr = await conn.oWhatsApp(args[1]+"@s.whatsapp.net")
                 if (cekpr.length == 0) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
                    premium.splice(_prem.getPremiumPosition(args[1] + '@s.whatsapp.net', premium), 1)
                    fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
                    reply('Sukses!')
                }
                break
			// Random Menu
			case prefix+'quote': case prefix+'quotes':
			case prefix+'randomquote': case prefix+'randomquotes':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				var data = await fetchJson(`https://docs-jojoapi.herokuapp.com/api/randomquote?apikey=${jojoapi}`)
				var anjayani = `${data.result.quotes}\n\nQuotes By - ${data.result.author}`
			    var but = [{buttonId: `${command}`, buttonText: { displayText: "Get Quotes" }, type: 1 }]
conn.sendMessage(from, { text: anjayani, buttons: but, footer: "© Masa Bot", templateButtons: but }, {quoted: msg})
				limitAdd(sender, limit)
				break
case prefix+'covid': case prefix+'covid19': case prefix+'kopit':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var data = await fetchJson(`https://docs-jojoapi.herokuapp.com/api/covidworld?apikey=${jojoapi}`)
  var captnya = `*[ COVID WORLD ]*\n\nTotal Kasus Seluruh Dunia : *${data.result.totalCases}* Jiwa\nTotal Sembuh : *${data.result.recovered}* Jiwa\nMeninggal : *${data.result.deaths}* Jiwa\nKasus Aktif : *${data.result.activeCases}*\nKasus Tertutup : *${data.result.closedCases}*\n\nPembaruan Terakhir Pada : *${data.result.lastUpdate}*`
   conn.sendMessage(from, {caption: captnya, image: { url: `https://telegra.ph/file/86b3b90581f9d31353b62.jpg`}}, {quoted: msg})
   limitAdd(sender, limit)
   break
case prefix+'shortlink':
if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
  if (args.length < 2) return reply(`Kirim perintah ${command} link`)
  if (!isUrl(args[1])) return reply("Masukan Link")
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				var data = await fetchJson(`https://docs-jojoapi.herokuapp.com/api/short/tiny?url=${args[1]}&apikey=${jojoapi}`)
			    reply(`Link : ${data.result.link}`)
				limitAdd(sender, limit)
				break
case prefix+'hitungmundur':
  if (args.length < 2) return reply(`Mana tanggalnya?\nContoh : ${prefix}hitungmundur 12 10 2022`)
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (isNaN(args[1], args[2], args[3])) return reply(`Harus berupa angka`)
				var data = await fetchJson(`https://melcanz.com/countdown?tanggal=${args[1]}&bulan=${args[2]}&tahun=${args[3]}&apikey=${apikey}`)
			    reply(`Terisisa ${data.result}`)
				limitAdd(sender, limit)
				break
case prefix+'kbbi':
  if (args.length < 2) return reply(`Kirim perintah ${command} jembatan`)
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    const kbbi = args.join(" ")
				var data = await fetchJson(`https://docs-jojoapi.herokuapp.com/api/kbbi?kata=${args[1]}&apikey=${jojoapi}`)
			    reply(`Kata : ${kbbi}\nArti : ${data.result.arti}`)
				limitAdd(sender, limit)
				break
			case prefix+'cecan': case prefix+'cewek':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				reply(mess.wait)
			    var query = ["cecan hd","cecan indo","cewe cantik", "cewe aesthetic", "cecan aesthetic"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/cecan`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Cewe Cantik", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
			    limitAdd(sender, limit)
 			    break
			case prefix+'cogan': case prefix+'cowok':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				reply(mess.wait)
				var query = ["cogan hd","cogan indo","cowo ganteng","handsome boy","hot boy","oppa","cowo aesthetic","cogan aesthetic"]
				var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/cogan`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Cowo Ganteng", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
			    limitAdd(sender, limit)
				break
case prefix+'naruto':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				reply(mess.wait)
			    var query = ["naruto hd","naruto boruto","naruto sasuke", "naruto aesthetic", "naruto aesthetic"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/naruto`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Foto Naruto", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
			    limitAdd(sender, limit)
 			    break
case prefix+'mikasa':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				reply(mess.wait)
			    var query = ["mikasa hd","mikasa ackerman","mikasa eren", "mikasa kawai", "mikasa ackerman keren"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/mikasa`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "yang baca wibu", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
			    limitAdd(sender, limit)
 			    break
case prefix+'sagiri':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				reply(mess.wait)
			    var query = ["sagiri","sagiri kawai","sagiri anime", "sagiri lucu", "sagiri keren"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/sagiri`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "yang baca wibu", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
			    limitAdd(sender, limit)
 			    break
case prefix+'nezuko':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				reply(mess.wait)
			    var query = ["nezuko hd","nezuko demon slayer","nezuko kny", "nezuko kawai", "nezuko keren"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/nezuko`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "yang baca wibu", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
			    limitAdd(sender, limit)
 			    break
case prefix+'shikimori':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				reply(mess.wait)
			    var query = ["shikimori hd","shikimori kawaii","shikimori keren", "shikimori kawai", "shikimori anime"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/shikimori`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "yang baca wibu", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
			    limitAdd(sender, limit)
 			    break
case prefix+'rimuru':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				reply(mess.wait)
			    var query = ["rimuru ","rimuru","rimuru keren", "rimuru anime", "rimuru"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/rimuru`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "yang baca wibu", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
			    limitAdd(sender, limit)
 			    break
case prefix+'gojo':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				reply(mess.wait)
			    var query = ["gojo satoru hd","gojo satoru kawaii","gojo satoru keren", "gojo satoru anime", "gojo satoru"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/gojo`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "yang baca wibu", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
			    limitAdd(sender, limit)
 			    break
case prefix+'anya':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				reply(mess.wait)
			    var query = ["anya forger hd","anya forger kawaii","anya forger", "anya forger anime", "anya forger"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/anya`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "yang baca wibu", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
			    limitAdd(sender, limit)
 			    break
case prefix+'loid':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				reply(mess.wait)
			    var query = ["loid forger hd","loid forger anime","loid forger keren", "loid forger anime", "loid forger"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/loid`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "yang baca wibu", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
			    limitAdd(sender, limit)
 			    break
case prefix+'yor':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				reply(mess.wait)
			    var query = ["","yor forger","yor forger keren", "yor forger anime", "yor forger"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/yor`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "yang baca wibu", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
			    limitAdd(sender, limit)
 			    break
case prefix+'nobara':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				reply(mess.wait)
			    var query = ["nobara","nobara kawaii","nobara jujutsu kaisen keren", "nobara anime", "nobara jujutsu kaisen"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/nobara`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "yang baca wibu", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
			    limitAdd(sender, limit)
 			    break
case prefix+'luffy':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				reply(mess.wait)
			    var query = ["luffy hd","luffy one piece kawaii","luffy keren", "luffy one piece anime", "luffy one piece"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/luffy`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "yang baca wibu", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
			    limitAdd(sender, limit)
 			    break
case prefix+'zoro':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				reply(mess.wait)
			    var query = ["roronoa zoro hd","zoro one piece kawaii","roronoa zoro keren", "roronoa zoro anime", "roronoa zoro keren"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/zoro`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "yang baca wibu", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
			    limitAdd(sender, limit)
 			    break
case prefix+'ace':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				reply(mess.wait)
			    var query = ["ace hd","ace one piece kawaii","ace keren", "ace one piece anime", "ace"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/ace`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "yang baca wibu", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
			    limitAdd(sender, limit)
 			    break
case prefix+'levi':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				reply(mess.wait)
			    var query = ["levi hd","levi ackerman","levi eren", "levi kawai", "levi ackerman keren"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/levi`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "yang baca wibu", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
			    limitAdd(sender, limit)
 			    break
case prefix+'wallpaper':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				reply(mess.wait)
			    var query = ["wallpaper pemandangan","wallpaper kota","wallpaper neon", "wallpaper pemandangan", "wallpaper loli"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/wallpaper`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Wallpaper", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
			    limitAdd(sender, limit)
 			    break
case prefix+'yaoi':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)

				reply(mess.wait)
			    var query = ["yaoi","yaoi aesthetic","yaoi hd","yaoi ganteng"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/${command}`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Foto Yaoi", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
			    limitAdd(sender, limit)
 			    break
case prefix+'loli':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				reply(mess.wait)
			    var query = ["loli","loli chan","loli anime","loli hd","loli aesthetic"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/loli`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Foto Loli Chan", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
			    limitAdd(sender, limit)
 			    break
case prefix+'waifu':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				reply(mess.wait)
			    var query = ["waifu","waifu aesthetic","waifu hd"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/waifu`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Waifu", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
			    limitAdd(sender, limit)
 			    break
case prefix+'husbu':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				reply(mess.wait)
			    var query = ["husbu anime","husbu hd","husbu aesthetic"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/husbu`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Husbu", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
			    limitAdd(sender, limit)
 			    break
			// Search Menu
case prefix+'lirik':
  if (args.length < 2) return reply(`Liriknya mana?Kirim perintah ${command} Nama lagu\nContoh ${command} Indonesia Raya`)
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
reply("Lagu apaan tuh bingung nih bot, bentar bot cariin\n\nKlo bot gak respon berarti liriknya gak ketemu ya:(")
				var data = await fetchJson(`https://hardianto.xyz/api/info/lirik?query=${q}&apikey=${keyanto}`)
			    reply(`*Nama Lagu :* ${q}\n*Lirik Lagu :* ${data.lirik}`)
				limitAdd(sender, limit)
				break
			case prefix+'grupwa': case prefix+'searchgrup':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (args.length < 2) return reply(`Kirim perintah ${command} nama grup`)
				reply(mess.wait)
			    hxz.linkwa(q).then(async(data) => {
				  if (data.length == 0) return reply(`Grup ${q} tidak ditemukan`)
				  var teks = `*Hasil Pencarian Dari ${q}*\n\n`
				  for (let x of data) {
					teks += `*Nama :* ${x.nama}\n*Link :* ${x.link}\n\n`
				  }
				  reply(teks)
				  limitAdd(sender, limit)
				}).catch(() => reply(mess.error.api))
			    break
			case prefix+'pinterest':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (args.length < 2) return reply(`Kirim perintah ${command} query atau ${command} query --jumlah\nContoh :\n${command} cecan atau ${command} cecan --10`)
				reply(mess.wait)
			    var jumlah;
			    if (q.includes('--')) jumlah = q.split('--')[1]
			    pinterest(q.replace('--'+jumlah, '')).then(async(data) => {
				  if (q.includes('--')) {
					if (data.result.length < jumlah) {
					  jumlah = data.result.length
					  reply(`Hanya ditemukan ${data.result.length}, foto segera dikirim`)
					}
					for (let i = 0; i < jumlah; i++) {
					  conn.sendMessage(from, { image: { url: data.result[i] }})
					}
				    limitAdd(sender, limit)
				  } else {
					var but = [{buttonId: `.pinterest ${q}`, buttonText: { displayText: 'Next Photo' }, type: 1 }]
					conn.sendMessage(from, { caption: `Hasil pencarian dari ${q}`, image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
				    limitAdd(sender, limit)
				  }
				})
			    break
			case prefix+'yts': case prefix+'ytsearch':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} query`)
				reply(mess.wait)
			    yts(q).then( data => {
				  let yt = data.videos
				  var jumlah = 15
				  if (yt.length < jumlah) jumlah = yt.length
				  var no = 0
				  let txt = `*YOUTUBE SEARCH*

 *Data berhasil didapatkan*
 *Hasil pencarian dari ${q}*
 
 *${prefix}getmusic <no urutan>*
 *${prefix}getvideo <no urutan>*
 Untuk mengambil Audio/Video dari hasil pencarian`
                for (let i = 0; i < jumlah; i++) {
				  no += 1
				  txt += `\n─────────────────\n\n*No Urutan : ${no.toString()}*\n*▢ Judul :* ${yt[i].title}\n*▢ ID :* ${yt[i].videoId}\n*▢ Channel :* ${yt[i].author.name}\n*▢ Upload :* ${yt[i].ago}\n*▢ Ditonton :* ${yt[i].views}\n*▢ Duration :* ${yt[i].timestamp}\n*▢ URL :* ${yt[i].url}\n`
				}
				conn.sendMessage(from, { image: { url: yt[0].image }, caption: txt }, { quoted: msg })
				limitAdd(sender, limit)
				}).catch(() => reply(mess.error.api))
			    break
//report
case prefix+'report':
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        if (args.length < 2) return reply(`Kirim perintah ${command} laporan`)
        reply(`Sukses Kirim Ke Owner, Main² banned!`)
        for (let i of ownerNumber) {
            conn.reply(i, `*[ PANGGILAN USER ]*\nMessage nya : ${q}`, msg)
        }
        limitAdd(sender, limit)
        break
case prefix+'join':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        if (args.length < 2) return reply(`Kirim perintah ${command} Link Grup Kamu`)
        reply(`Sukses Kirim Ke Owner, tunggu Laporan 3/4 menitan untuk masukan bot ke grup`)
        for (let i of ownerNumber) {
            conn.reply(i, `*[ JOIN GRUP ]*\nLink nya : ${q}`, msg)
        }
        limitAdd(sender, limit)
        break
case prefix+'cekme':
  case prefix+'me':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  const ganteng = ['Wah Cakep️😙','Jelek njir skip😬']
  const sifat = ['Pembohong','Galak','Suka Bantu Orang','Baik','Jahat:(','Bobrok','Suka BadMood','Setia','Tulus','Beriman','Penyayang Binatang','Baperan']
  const suka = ['Makan','Tidur','Main Game','Sesama Jenis','Binatang',`Seseorang Yang ${pushname} Sukai`,'Belajar','Ibadah','Diri Sendiri']
  const nomernyah = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','31','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','82','84','84','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
  const keberanian = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','31','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','82','84','84','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
  const kepinteran = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','31','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','82','84','84','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const ganz = ganteng[Math.floor(Math.random() * ganteng.length)]
					const sipat = sifat[Math.floor(Math.random() * sifat.length)]
					const numb = nomernyah[Math.floor(Math.random() * nomernyah.length)]
					const gai = suka[Math.floor(Math.random() * suka.length)]
					const berani = keberanian[Math.floor(Math.random() * keberanian.length)]
					const pinter = kepinteran[Math.floor(Math.random() * kepinteran.length)]
  var cek = `*[ CEK PRIBADI KAMU ]*
 
Nama : ${pushname}
Sifat : ${sipat}
Keberanian : ${berani}%
Ketakutan : ${numb}%
Cakep : ${ganz}
Cek Pintar : ${pinter}%
Menyukai : ${gai}
  `
var but = [{buttonId: '.y', buttonText: { displayText: 'Cocok' }, type: 1 }, {buttonId: '.n', buttonText: { displayText: 'Gak Cocok' }, type: 1 }]
					conn.sendMessage(from, { caption: cek, image: { url: `https://telegra.ph/file/9c9e1361d114c4be31982.png` }, buttons: but, footer: '© MasaBot' }, { quoted: msg })
				    limitAdd(sender, limit)
				    break
case prefix+'y':
  reply("Yeeey cocok:)")
  break
case prefix+'n':
  reply("yah gak cocok:(")
  break
case prefix+'sc':
  reply("nekopoi.care")
  break
case prefix+'apakah':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const apa = ['Iyah', 'Enggak', 'Bisa Jadi sih', 'Betul']
					const kah = apa[Math.floor(Math.random() * apa.length)]
conn.sendMessage(from, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted: msg })
limitAdd(sender, limit)
					break
case prefix+"tahlil": //Deff
const tahlil =["Judul :* *Salam Nabi*\n\n*Arab :* *وَسَلِّمْ وَرَضِيَ اللهُ تَعَالَى عَنْ اَصْحَابِ سَيِّدِنَا رَسُوْلِ اللهِ اَجْمَعِيْنَ*\n\n*Artinya :* *Semoga Allah yang maha suci dan tinggi meridhai para sahabat dari pemimpin kami (Rasulullah)","Judul :* *Doa Meminta Syafa‘at Al-Qur’an*\n\n*Arab :* *اللَّهُمَّ اجْعَلِ القُرْآنَ العَظِيْمَ فِي قَبْرِهِ مُؤْنِسًا، وَفِي القِيَامَةِ شَافِعًا، وَفِي الحَشْرِ ضِيَاءً وَظِلًّا وَدَلِيْلًا، وَفِي المِيْزَانِ رَاجِحًا، وَعَلَى الصِّرَاطِ نُوْرًا وَقَائِدًا، وَعَنِ النَّارِ سِتْرًا وَحِجَابًا، وَفِي الجَنَّةِ رَفِيْقًا*\n\n *Artinya :* *Ya Allah, jadikanlah Al-Qur’an di kuburnya sebagai teman, di Hari Kiamat sebagai pemberi syafaat, di tempat berkumpul (mahsyar) kelak sebagai sinar, naungan, dan petunjuk, di mizan sebagai pemberat timbangan amal baik, di sirath sebagai cahaya dan penuntun, dari api neraka sebagai tabir dan hijab, dan di surga sebagai kawan","Judul :* *Membaca surat Al-Ikhlas (3 kali)*\n\n*Arab :* *بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ . قُلْ هُوَ اللهُ اَحَدٌ . اَللهُ الصَّمَدُ . لَمْ يَلِدْ وَلَمْ يُوْلَدْ . وَلَمْ يَكٌنْ لَهُ كُفُوًا اَحَدٌ*\n\n*Artinya :* *Dengan menyebut nama Allah yang maha pengasih lagi maha penyayang. Katakanlah, ‘Dialah yang maha esa. Allah adalah tuhan tempat bergantung oleh segala sesuatu. Dia tidak beranak dan tidak diperanakkan. Dan tidak ada seorangpun yang setara dengan-Nya’. (3 kali)","Judul :* *Shalawat Zat Mukammalah*\n\n*Arab :* *اللَّهُمَّ صَلِّ علَى الذَّاتِ المُكَمَّلَةِ وَالرَّحْمَةِ المُنَزَّلَةِ سَيِّدِنَا مُحَمَّدٍ وَعَلَى اَلِهِ وَصَحْبِهِ وَسَلِّمْ*\n\n*Artinya :* *Ya Allah, limpahkan shalawat dan salam untuk zat yang disempurnakan dan rahmat yang diturunkan, yaitu Nabi Muhammad SAW, keluarga, dan sahabatnya","Judul :* *Doa Keberkahan Al-Qur‘an*\n\n*Arab :* *اللَّهُمَّ اشْرَحْ بِالقُرْآنِ صُدُوْرَنَا وَيَسِّرْ بِهِ أُمُوْرَنَا وَعَظِّمْ بِهِ أُجُوْرَنَا وَحَسِّنْ بِهِ أَخْلَاقَنَا وَوَسِّعْ بِهِ أَرْزَاقَنَا وَنَوِّرْ بِهِ قُبُوْرَنَا*\n\n*Artinya :* *Ya Allah, dengan Al-Qur’an lapangkanlah hati kami, mudahkan urusan kami, lipatgandakanlah pahala kami, perbaiki akhlak kami, luaskan rezeki kami, dan terangilah kubur kami","Judul :* *Hadits Keutamaan Tahlil*\n\n*Arab :* *لَااِلَهَ اِلَّا اللهُ، حَىٌّ بَاقٍ الَّذِيْ لَا يَمُوْتُ*\n\n*Artinya :* *Tiada tuhan selain Allah, zat kekal yang takkan mati","Judul :* *Awal Surat Al-Baqarah*\n\n*Arab :* *بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ. المّ. ذَلِكَ الكِتابُ لاَرَيْبَ فِيْهِ هُدَى لِلْمُتَّقِيْنَ. الَّذِيْنَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيْمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنْفِقُونَ. وَالَّذِيْنَ يُؤْمِنُونَ بِمَا اُنْزِلَ اِلَيْكَ وَمَا اُنْزِلَ مِن قَبْلِكَ وَبِالْاَخِرَةِ هُمْ يُوقِنُونَ. اُولَئِكَ عَلَى هُدًى مِّن رَّبِّهِمْ، وَاُولَئِكَ هُمُ الْمُفْلِحُونَ*\n\n*Artinya :* *Dengan menyebut nama Allah yang maha pengasih lagi maha penyayang. Alif lam mim. Demikian itu kitab ini tidak ada keraguan padanya. Sebagai petunjuk bagi mereka yang bertakwa. Yaitu mereka yang beriman kepada yang ghaib, yang mendirikan shalat, dan menafkahkan sebagian rezeki yang kami anugerahkan kepada mereka. Dan mereka yang beriman kepada kitab Al-Qur’an yang telah diturunkan kepadamu (Muhammad SAW) dan kitab-kitab yang telah diturunkan sebelumnya, serta mereka yakin akan adanya kehidupan akhirat. Mereka itulah yang tetap mendapat petunjuk dari tuhannya. Merekalah orang orang yang beruntung","Judul :* *Doa Wahbah untuk Para Sahabat Rasul dan Wali Allah*\n\n*Arab :* *اللَّهُمَّ اجْعَلْ ثَوَاَبَ مَا قَرَأْنَاهُ وَبَرَكَةَ مَا تَلَوْنَاهُ وَصَلَّيْنَاهُ عَلَى نَبِيِّكَ مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ وَمَا هَلَلْنَا هَدِيَّةً بَالِغَةً وَرَحْمَةً مِنْكَ نَازِلَةً نُقَدِّمُهَا وَنُهْدِيْهَا اِلَى حَضَرَاتِ النَّبِيِّ الأَكْرَمِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ، ثُمَّ اِلَى أَرْوَاحِ آبَائِهِ وَإِخْوَانِهِ مِنَ النَّبِيِّيْنَ وَالمُرْسَلِيْنَ وَإِلَى مَلَائِكَةِ اللهِ الْمُقَرَّبِيْنَ وَالكَرُّوْبِيِّيْنَ، وَاِلَى أَرْوَاحِ سَادَاتِنَا أَبِي بَكْرٍ وَعُمَرَ وَعُثْمَانَ وَعَلِيٍّ، وَإِلَى البَقِيَّةِ العَشْرَةِ المُبَشَّرَةِ بِالجَنَّةِ وَسَائِرِ الصَّحَابَةِ وَالقَرَابَةِ وَالتَّابِعِيْنَ وَإِلَى أَرْوَاحِ الحَسَنِ وَالحُسَيْنِ وَأُمِّهِمَا سَيِّدَتِنَا فَاطِمَةَ الزَّهْرَاءِ وَسَيِّدَتِنَا خَدِيْجَةَ الكُبْرَى وَسَيِّدِنَا حَمْزَةَ وَالعَبَّاسِ وَالشُّهَدَاءِ البَدْرِيِّيْنَ وَالأُحُدِيِّيْنَ وَإِلَى أَرْوَاحِ الخِضْرِ وَإِلْيَاسَ وَسَيِّدِنَا عَبْدِ اللهِ ابْنِ عَبَّاسٍ وَإِلَى أَرْوَاحِ الأَرْبَعَةِ الأَئِمَّةِ المُجْتَهِدِيْنَ وَمُقَلِّدِيْهِمْ فِي الدِّيْنِ وَإِلَى أَرْوَاحِ العُلَمَاءِ العَامِلِيْنَ وَالقُرَّاءِ وَأَئِمَّةِ الحَدِيْثِ وَالمُفَسِّرِيْنَ وَسَادَاتِنَا الصُّوْفِيَّةِ المُحَقِّقِيْنَ وَإِلَى رُوْحِ القُطْبِ الرَّبَّانِيِّ وَالعَارِفِ الصَّمَدَانِيِّ سَيِّدِيْ عَبْدِ القَادِرِ الجَيْلَانِيّ وَسَيِّدِيْ أَحْمَدَ البَدَوِيِّ وَسَيِّدِيْ أَحْمَدَ الرِّفَاعِيِّ وَسَيِّدِيْ إِبْرَاهِيْمَ الدَّسُوْقِيِّ وَسَيِّدِيْ أَبِي القَاسِمِ الجُنَيْدِ البَغْدَادِيِّ وَسَيِّدِيْ أَحْمَدَ ابْنِ عَلْوَانَ وَسَيِّدِيْ أَبِي طَالِبٍ المَكِّيِّ وَإِلَى أَرْوَاحِ كُلِّ وَلِيٍّ وَوَلِيَّةٍ لِلهِ مِنْ مَشَارِقِ الأَرْضِ وَمَغَارِبِهَا بَرِّهَا وَبَحْرِهَا أَيْنَمَا كَانُوْا وَكَانَ الكَائِنُ فِي عِلْمِكَ وَحَلَّتْ أَرْوَاحُهُمْ يَا رَبَّ العَالَمِيْنَ*\n\n*Artinya :* *Ya Allah, jadikanlah pahala dan keberkahan bacaan kami, shalawat kami, dan tahlil kami sebagai hadiah yang sampai dan rahmat-Mu yang turun, yang kami persembahkan dan hadiahkan untuk Nabi Muhammad SAW termulia, arwah bapak moyangnya, saudaranya dari kalangan para nabi dan rasul, malaikat muqarrabin dan karubiyyin, pemimpin kami Abu Bakar RA, Umar RA, Ustman RA, Ali RA, sepuluh sahabat yang dijanjikan masuk surge, seluruh sahabat, kerabat, tabi‘in, arwah Hasan, Husein, Ibu keduanya yaitu Sayyidah Fathimah Az-Zahra, Sayyidah Khadijah Al-Kubra, Sayyidina Hamzah, Abbas RA, syuhada Badar dan Uhud, arwah Khidhir, Ilyas, Sayyidina Abdullah bin Abbas RA, arwah empat imam mujtahid dan pengikut mereka perihal agama, arwah ulama, ahli qira‘ah, imam hadits, mufasir, pemuka sufi ahli hakikat, roh quthub rabbani dan arif as-shamadani Syekh Abdul Qadir Al-Jailani, Sayyid Ahmad Badawi, Sayyid Ahmad Ar-Rifa‘i, Sayyid Ibrahim Ad-Dasuqi, Sayyid Abul Qasim Al-Junaid Al-Baghdadi, Sayyid Ahmad bin Alwan, Sayyid Abu Thalib Al-Makki, seluruh wali Allah baik laki-laki dan perempuan dari Timur ke Barat baik di daratan maupun di lautan; di mana saja mereka dan roh mereka berada. Sementara semua yang ada berada dalam pengetahuan-Mu, waha Tuhan sekalian alam","Judul :* *Surat An-Nas*\n\n*Arab :* *بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ. قُلْ اَعُوذُ بِرَبِّ النَّاسِ. مَلِكِ النَّاسِ. اِلَهِ النَّاسِ. مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ. الَّذِى يُوَسْوِسُ فِى صُدُوْرِ النَّاسِ. مِنَ الْجِنَّةِ وَالنَّاسِ*\n\n*Artinya :* *Dengan menyebut nama Allah yang maha pengasih lagi maha penyayang. Katakanlah, ‘Aku berlindung kepada tuhan manusia, raja manusia. Sesembahan manusia, dari kejahatan bisikan setan yang biasa bersembunyi. Yang membisikkan kejahatan ke dalam dada manusia. Dari setan dan manusia.","Judul :* *Surat Al-Ahzab ayat 33*\n\n*Arab :* *اِنَّمَا يُريِدُ اللهُ لِيُذْهِبَ عَنْكُمُ الرِّجْسَ اَهْلَ الْبَيْتِ وَيُطَهِّرَكُمْ تَطْهِيْرًا*\n\n*Artinya :* *Sungguh Allah berkehendak menghilangkan segala kotoran padamu, wahai ahlul bait, dan menyucikanmu sebersih-bersihnya"]
const bleu = tahlil[Math.floor(Math.random() * (tahlil.length))]
reply(bleu) 
          break	
case prefix+'storyanime':
await reply ('wait for a few minutes')
anu = `Waifu Mu Mas`
  message = await prepareWAMessageMedia({ video: {url:'https://megayaa.herokuapp.com/api/randomaesthetic' }, jpegThumbnail: fakeThumb}, { upload: conn.waUploadToServer })
                template = generateWAMessageFromContent(from, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            videoMessage: message.videoMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: 'nekopoi.care'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '+6283811034750'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Next',
                                    id: '#storyanime'
                                    }
                                },{quickReplyButton: {
                                    displayText: 'menu',
                                    id: '.menu'
                                }
                            }]
                        }
                    }
                }), { userJid: from, quoted: m })
                conn.relayMessage(from, template.message, { messageId: template.key.id })
             break
case prefix+'emojimix': {
	        if (!q) throw `Example : ${prefix + command} 😅+🤔`
		let [emoji1, emoji2] = q.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await conn.sendImageAsSticker(from, res.url, m, { packname: 'Deff', author: 'Deff', categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
case prefix+'antilink':
if (!isGroup) return reply(mess.OnlyGroup)
if (!isGroupAdmins) return reply(mess.GrupAdmin) 
//if (!isBotAdmins) return reply(mess.BotAdmin)
if (q === 'on') {
if (isAntiLink) return reply('Sudah Aktif Kak')
antilink.push(sender)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
reply('Sukses mengaktifkan fitur antilink')
conn.sendMessage(from,  {text: `ALLERT!!! Group ini sudah di pasang anti link\nJika Kamu Melanggar Maka Akan Saya Tendang`})
} else if (q === 'off') {
if (!isAntiLink) return reply('Sudah Mati Kak')
var ini = antilink.indexOf(sender)
antilink.splice(ini, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
reply('Sukses menonaktifkan fitur antilink')
} else if (!q){
 reply(`Pilih Antilink On / Off `)
}
break 
case prefix+'pantun':		
const pantun = ["\nAnak tikus rindu ibunya\n\nsombong nich ceritanya","\nAda kepompong ada kupu\n\nbales donk sms dari aku","\nBeli bandeng\n\ndi Malaysia\n\ngue ganteng\n\nkayak Pasha","\nHati siapa tak bimbang\n\nsitu botak minta dikepang","\nBuah semangka\n\nbuah duren\n\nnggak nyangka\n\ngue keren\n ","\n Mawar bersemi\n\ndi batang kayu\n\ndo you love me\n\nlike i love you","\nBurung perkutut\n\nburung kuthilang\n\nkamu kentut\n\nenggak bilang bilang","\nBread is roti\n\nshadow is bayang\n\nbefore you mati\n\nbetter you sembahyang","\nJangan takut\n\njangan khawatir\n\nitu kentut\n\nbukan petir","\nBeli ikan di pasar malam\n\ndasar bego ni kawan","\nMakan duren sambil ngelamun,\n\nHati-hati ketelen ntar bijinya","\nDi  sana gunung, di sini gunung\n\nCiptaan Tuhan deh","\nKan bandeng\n\nmakan kawat\n\norang ganteng\n\nnumpang lewat","\nOrang ganteng\n\nsuka sama si Rini\n\ngak seneng\n\nmaju sini","\nMelon manis di air es\n\nke mana aja lo gak pernah sms","\nJambu merah\n\ndi dinding\n\njangan marah\n\njust kidding","\nBuah semangka\n\nbuah manggis\n\nnggak nyangka\n\ngue manis","\nMen sana\n\nin corpore sano\n\ngue maen ke sana,\n\nelo maen ke sono!","\nBuah apel\n\ndi air payau\n\nnggak level\n\nlayauuuuuuu","\nDi sini bingung, di sana linglung\n\nemangnya enak, enggak nyambung…","\nBuah semangka berdaun sirih\n\nBuah ajaib kali yah","\nPilih suara harpa yang jelas.\n\nTali di harpa diikat cinta","\nCiuman di pipi\n\nciuman di dahi\n\nApa yang dicium sesudah lah cinta?","\nSepandai-pandai tupai melompat\n\nPolisi lebih pandai melompat","\nDua tiga kacang tanah\n\nenggak ada pacar yang datang ke rumah","\nDapet kado isinya tomat\n\nBodo amat!!","\nDulu delman, sekarang gokar\n\ndulu teman, sekarang pacar","\nStroberi mangga apel\n\nsorry gak level","\nBola pingpong dimakan gelatik\n\nBiar ompong yang penting cantik\n","\nMata belo,\n\nala komedian.\n\ngue sama elo?\n\nmaunya jadian.","\nTunda lapar,\n\nmakan indomi.\n\nhati menggelepar,\n\ncintapun bersemi.","\nPotong kuku,\n\npendek-pendek.\n\nhatiku beku,\n\nsi abang mendadak ngondek.","\nBeli ketan,\n\nbeli kain songket.\n\nbiar udah mantan,\n\nkita tetep lengket.","\nKe pasar, nyari obat gatal\n\nDasar, gak modal!","\nMakan semangka,\n\nmakan kedondong.\n\nkalau suka,\n\nnyatain dong.","\nGa punya pendirian,\n\nbikin jemu.\n\nga mau sendirian,\n\nmaunya bobo sama kamu.","\nNembak itik,\n\nlangsung kena.\n\nkamu cantik,\n\nhey nona!","\nKotak amal,\n\ndigoyang-goyang.\n\nkemarin aku diramal,\n\njodohnya sama abang.","\nHari Jumat,\n\npada pake batik.\n\nsalam hormat,\n\nbuat neng cantik.","\nPecahan genting,\n\ndi bawah kursi.\n\nbetah meeting,\n\nkarena si boss seksi.","\nNangis-nangis,\n\nmobil kena srempet.\n\nneng manis,\n\nmau dong dipepet.","\nPanasin mentega,\n\nkarena mulai beku.\n\nkamu mau ga,\n\njadi imamku?","\nPotong sebahu,\n\nbiar ga sendu.\n\nkamu tahu?\n\nAku rindu.","\nJangan tanya,\n\nkapan lulus kuliah.\n\nga dapet anaknya,\n\nmamanya boleh lah","\nBikin anak,\n\ndi pojokan sekolah\n\nkalau mau enak,\n\nnikah dulu lah.","\nMain mata,\n\nmesem-mesem.\n\nneng tetep cinta,\n\nbiarpun abang keteknya asem.","\nTiduran di tandu,\n\nberjam-jam.\n\nhati merindu,\n\nmata sulit memejam.","\nUbek-ubek peti,\n\ncari gunting.\n\nsaking cinta mati,\n\nneng rela bunting.","\nNamanya penjahat,\n\npolisi jadi inceran.\n\nbosan jadi temen curhat,\n\nmaunya pacaran.","\nKe salon creambath,\n\nbiar aliran darah lancar.\n\nbosen ah jadi sahabat,\n\nmaunya jadi pacar!"]
const ran_pantun = pantun[Math.floor(Math.random() * pantun.length)]
reply(ran_pantun) 
break	
case prefix+'blackpink':
case prefix+'neon':
case prefix+'greenneon':
case prefix+'advanceglow':
case prefix+'futureneon':
case prefix+'sandwriting':
case prefix+'sandsummer':
case prefix+'sandengraved':
case prefix+'metaldark':
case prefix+'neonlight':
case prefix+'holographic':
case prefix+'text1917':
case prefix+'minion':
case prefix+'deluxesilver':
case prefix+'newyearcard':
case prefix+'bloodfrosted':
case prefix+'halloween':
case prefix+'jokerlogo':
case prefix+'fireworksparkle':
case prefix+'natureleaves':
case prefix+'bokeh':
case prefix+'toxic':
case prefix+'strawberry':
case prefix+'box3d':
case prefix+'roadwarning':
case prefix+'breakwall':
case prefix+'icecold':
case prefix+'luxury':
case prefix+'cloud':
case prefix+'summersand':
case prefix+'horrorblood':
case prefix+'thunder':
if (!q) return reply('#blackpink text') 
reply (mess.wait)
var buffer = await getBuffer(`https://api.lolhuman.xyz/api/textprome/${command.split(prefix)[1]}?apikey=Deffbotz&text=${q}`)
conn.sendMessage(from, { caption: `DONE`,image: buffer , templateButtons: buttonsDefault, footer: 'TextProme', mentions: [sender] })
break
case prefix+'bisakah':
  case prefix+'bisa':
    case prefix+'bisagak':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const bisa = ['Bisa','Gak Bisa','Gak Bisa coba lagi di tahun 2067','TENTU PASTI KAMU BISA!!!!']
					const ga = bisa[Math.floor(Math.random() * bisa.length)]
conn.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ga}` }, { quoted: msg })
limitAdd(sender, limit)
					break
//suit menu
case prefix+'suit':
  var but = [{buttonId: `/sbatu`, buttonText: { displayText: "Batu ✊" }, type: 1 }, {buttonId: `/sgunting`, buttonText: { displayText: "Gunting ✌️" }, type: 1 }, {buttonId: `/skertas`, buttonText: { displayText: "Kertas ✋" }, type: 1 }]
  var sutit = `*[ GAME SUIT ]*\n\nNOTE : *KAMU MEMILIKI 3 BUTTON DAN 3 KESEMPATAN UNTUK MEMILIH ANTARA BATU GUNTING KERTAS\nJIKA KAMU MEMENANGKAN 3 KESEMPATAN PERMAINAN BATU GUNTING KERTAS\n*KAMU MENANG!!*`
conn.sendMessage(from, { text: sutit, buttons: but, footer: "Pilih Button Di Bawah\n\n- _Jika Kamu Pakai WhatsApp Mod Langsung Saja Ketik /sgunting, /sbatu, /skertas_", templateButtons: but }, {quoted: msg})
break
case prefix+'sbatu':
  if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
  const batu = [`Aku Memilih *Batu*\nKamu Memilih *Batu*\n\n!! KITA SERI !!😏`,`Aku Memilih *Gunting*\nKamu Memilih *Batu*\n\n!! KAMU MENANG😔`,`Aku Memilih *Kertas*\nKamu Memilih *Batu*\n\n!! AKU MENANG !!🥱`]
					const batuh = batu[Math.floor(Math.random() * batu.length)]
					var batuh2 = `*[ GAME SUIT ]*\n\n${batuh}`
					conn.sendMessage(from, { text: batuh2 }, { quoted: msg })
gameAdd(sender, glimit)
break
case prefix+'sgunting':
  if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
  const gunting = [`Aku Memilih *Batu*\nKamu Memilih *Gunting*\n\n!! AKU MENANG !!🥱`,`Aku Memilih *Gunting*\nKamu Memilih *Gunting*\n\n!! KITA SERI !!😏`,`Aku Memilih *Kertas*\nKamu Memilih *Gunting*\n\n!! KAMU MENANG😓`]
					const guntingh = gunting[Math.floor(Math.random() * gunting.length)]
					var guntingh2 = `*[ GAME SUIT ]*\n\n${guntingh}`
					conn.sendMessage(from, { text: guntingh2 }, { quoted: msg })
gameAdd(sender, glimit)
break
case prefix+'skertas':
  if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
  const kertas = [`Aku Memilih *Batu*\nKamu Memilih *Kertas*\n\n!! KAMU MENANG😞`,`Aku Memilih *Gunting*\nKamu Memilih *Kertas*\n\n!! KAMU KALAH😎!!`,`Aku Memilih *Kertas*\nKamu Memilih *Kertas*\n\n!! KITA SERI😒!!`]
					const kertash = kertas[Math.floor(Math.random() * kertas.length)]
					var kertash2 = `*[ GAME SUIT ]*\n\n${kertash}`
					conn.sendMessage(from, { text: kertash2 }, { quoted: msg })
gameAdd(sender, glimit)
break
case prefix+'bagaimanakah':
  case prefix+'gimanakah':
    case prefix+'gimana':
      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
					const ya = gimana[Math.floor(Math.random() * gimana.length)]
conn.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ya}` }, { quoted: msg })
limitAdd(sender, limit)
					break
case prefix+'rate':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
					const ra = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
conn.sendMessage(from, { text: `Rate : ${q}\nJawaban : *${te}%*` }, { quoted: msg })
limitAdd(sender, limit)
					break
case prefix+'gantengcek':
  case prefix+'cekganteng':
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Fahri`)
					const gan = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
conn.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${teng}%*` }, { quoted: msg })
limitAdd(sender, limit)
					break
case prefix+'cantikcek':
  case prefix+'cekcantik':
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Fahri`)
					const can = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const tik = can[Math.floor(Math.random() * can.length)]
conn.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${tik}%*` }, { quoted: msg })
limitAdd(sender, limit)
					break
case prefix+'sangecek':
  case prefix+'ceksange':
    case prefix+'gaycek':
      case prefix+'cekgay':
        case prefix+'lesbicek':
          case prefix+'ceklesbi':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
					const sangeh = ['5', '10', '15','20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
conn.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${sange}%*` }, { quoted: msg })
limitAdd(sender, limit)
					break
case prefix+'lamar': case prefix+'lagilamar': case prefix+'maulamar':
                if (!isGroup)return reply(mess.OnlyGrup)
			    if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}lamar* @tag orang yg mau di lamar`)
                if (mentionByTag.length !== 1) {
				if (mentionByTag[0] === botNumber) return reply(`gabisa lamar bot tolol!!`)
                if (mentionByTag[0] === sender) return reply(`Sad amat main ama diri sendiri`)
				     mentions(monospace(`@${sender.split('@')[0]} melamar❤️❤️ @${mentionByTag[0].split('@')[0]} terima atau gak lamaranya❤️❤️❤️❤️\n\nKirim (/terima /tolak)/terima untuk menerima/tolak untuk menolak\n\nHadiah : ${hadiah} balance`), [sender, mentionByTag[0]], false)
                     tictactoe.push({
                        id: from,
                        status: null,
                        hadiah: 567,
                        penantang: sender,
                        ditantang: mentionByTag[0],
                     })
					 gameAdd(sender, glimit)
                } else {
                    reply(`Kirim perintah *${prefix}lamar* @tag`)
                }
                break
case prefix+'terima':
  reply("Horee di terima lamaranya selamat yah kak❤️")
  conn.sendMessage(from, { audio: fs.readFileSync('audio/terima.m4a'), mimetype: 'audio/mp4', ptt: true}, {quoted: msg})
  break
case prefix+'tes':
  reply("apa sayang")
  conn.sendMessage(from, { audio: fs.readFileSync('audio/terima.m4a'), mimetype: 'audio/mp4', ptt: true}, {quoted: msg})
  break
case prefix+'tolak':
  reply("Yahhh di tolak,yang sabar yah kak💔")
  conn.sendMessage(from, { audio: fs.readFileSync('audio/tolak.m4a'), mimetype: 'audio/mp4', ptt: true}, {quoted: msg})
  break
case prefix+'kapankah':
  case prefix+'kapan':
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (!q) return reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
					const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi','20 Hari Lagi', '25 Hari Lagi','30 Hari Lagi','35 Hari Lagi','40 Hari Lagi','45 Hari Lagi','50 Hari Lagi','55 Hari Lagi','60 Hari Lagi','65 Hari Lagi','70 Hari Lagi','75 Hari Lagi','80 Hari Lagi','85 Hari Lagi','90 Hari Lagi','100 Hari Lagi','5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi','20 Bulan Lagi', '25 Bulan Lagi','30 Bulan Lagi','35 Bulan Lagi','40 Bulan Lagi','45 Bulan Lagi','50 Bulan Lagi','55 Bulan Lagi','60 Bulan Lagi','65 Bulan Lagi','70 Bulan Lagi','75 Bulan Lagi','80 Bulan Lagi','85 Bulan Lagi','90 Bulan Lagi','100 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','Besok','Lusa',`Abis Command Ini Juga Lu ${q}`]
					const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
conn.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : *${kapankah}*` }, { quoted: msg })
limitAdd(sender, limit)
					break
case prefix+'getname': {
if (isBan) return ads(mess.ban)
if (qtod === "true") {
namenye = await conn.getName(m.quoted.sender)
ads(namenye)
} else if (qtod === "false") {
conn.sendMessage(from, {text:"Reply orangnya"}, {quoted:m})
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'getpic': {
if (isBan) return ads(mess.ban)
if (qtod === "true") {
try {
pporg = await conn.profilePictureUrl(m.quoted.sender, 'image')
} catch {
pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
conn.sendMessage(m.chat, { image : { url : pporg }, caption:`Done` }, { quoted : m })
} else if (qtod === "false") {
try {
pporgs = await conn.profilePictureUrl(from, 'image')
} catch {
pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
conn.sendMessage(m.chat, { image : { url : pporgs }, caption:`Done` }, { quoted : m })
}
}
addCmd(command.slice(1), 1, commund)
break
			case prefix+'tictactoe': case prefix+'ttt': case prefix+'ttc':
                if (!isGroup)return reply(mess.OnlyGrup)
			    if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                if (isTicTacToe(from, tictactoe)) return reply(`Masih ada game yg blum selesai`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}tictactoe* @tag`)
                if (mentionByTag.length !== 1) {
				if (mentionByTag[0] === botNumber) return reply(`Tidak bisa bermain dengan bot!`)
                if (mentionByTag[0] === sender) return reply(`Sad amat main ama diri sendiri`)
                     var hadiah = randomNomor(100, 150)
				     mentions(monospace(`@${sender.split('@')[0]} menantang @${mentionByTag[0].split('@')[0]} untuk bermain TicTacToe\n\nKirim (Y/N) untuk bermain\n\nHadiah : ${hadiah} balance`), [sender, mentionByTag[0]], false)
                     tictactoe.push({
                        id: from,
                        status: null,
						hadiah: hadiah,
                        penantang: sender,
                        ditantang: mentionByTag[0],
                        TicTacToe: ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣']
                     })
					 gameAdd(sender, glimit)
                } else {
                    reply(`Kirim perintah *${prefix}tictactoe* @tag`)
                }
                break
			case prefix+'delttt':
            case prefix+'delttc':
                if (!isGroup)return reply(mess.OnlyGrup)
				if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                if (!isTicTacToe(from, tictactoe)) return reply(`Tidak ada sesi game tictactoe di grup ini`)
                var posi = getPosTic(from, tictactoe)
                if (tictactoe[posi].penantang.includes(sender)) {
                    tictactoe.splice(posi, 1)
                    reply(`Berhasil menghapus sesi tictactoe di grup ini`)
                 } else if (tictactoe[posi].ditantang.includes(sender)) {
                     tictactoe.splice(posi, 1)
                     reply(`Berhasil menghapus sesi tictactoe di grup ini`)
                 } else if (isGroupAdmins) {
                     tictactoe.splice(posi, 1)
                     reply(`Berhasil menghapus sesi tictactoe di grup ini`)
                 } else if (isOwner) {
                     tictactoe.splice(posi, 1)
                     reply(`Berhasil menghapus sesi tictactoe di grup ini`)
                 } else {
                   reply(`Anda tidak bisa menghapus sesi tictactoe, karena bukan pemain!`)
                }
                break
			case prefix+'tebakgambar':
		        if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
			    if (isPlayGame(from, tebakgambar)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, tebakgambar[getGamePosi(from, tebakgambar)].msg)
				kotz.tebakgambar().then( data => {
				  data = data[0]
				  data.jawaban = data.jawaban.split('Jawaban ').join('')
				  var teks = `*TEBAK GAMBAR*\n\n`+monospace(`Petunjuk : ${data.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nWaktu : ${gamewaktu}s`)
				  conn.sendMessage(from, { image: { url: data.image }, caption: teks }, { quoted: msg })
				  .then( res => {
					var jawab = data.jawaban.toLowerCase()
					addPlayGame(from, 'Tebak Gambar', jawab, gamewaktu, res, tebakgambar)
					gameAdd(sender, glimit)
				  })
				})
			    break
			// Group Menu
			case prefix+'linkgrup': case prefix+'link': case prefix+'linkgc':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				var url = await conn.groupInviteCode(from).catch(() => reply(mess.error.api))
			    url = 'https://chat.whatsapp.com/'+url
				reply(url)
				break
			case prefix+'setppgrup': case prefix+'setppgc':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins) return reply(mess.GrupAdmin)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				if (isImage || isQuotedImage) {
				  var media = await downloadAndSaveMediaMessage('image', `ppgc${from}.jpeg`)
			      await conn.updateProfilePicture(from, { url: media })
				  .then( res => {
					reply(`Sukses`)
					fs.unlinkSync(media)
				  }).catch(() => reply(mess.error.api))
				} else {
			      reply(`Kirim/balas gambar dengan caption ${command}`)
				}
				break
			case prefix+'setnamegrup': case prefix+'setnamegc':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins) return reply(mess.GrupAdmin)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
				await conn.groupUpdateSubject(from, q)
			    .then( res => {
				  reply(`Sukses`)
				}).catch(() => reply(mess.error.api))
			    break
			case prefix+'setdesc': case prefix+'setdescription':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins) return reply(mess.GrupAdmin)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
				await conn.groupUpdateDescription(from, q)
			    .then( res => {
			      reply(`Sukses`)
				}).catch(() => reply(mess.error.api))
				break
			case prefix+'group': case prefix+'grup':
		        if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins) return reply(mess.GrupAdmin)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				if (args.length < 2) return reply(`Kirim perintah ${command} _options_\nOptions : close & open\nContoh : ${command} close`)
				if (args[1] == "close") {
				  conn.groupSettingUpdate(from, 'announcement')
				  reply(`Sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini`)
				} else if (args[1] == "open") {
				  conn.groupSettingUpdate(from, 'not_announcement')
				  reply(`Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini`)
				} else {
				  reply(`Kirim perintah ${command} _options_\nOptions : close & open\nContoh : ${command} close`)
				}
			    break
			case prefix+'revoke':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins) return reply(mess.GrupAdmin)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				await conn.groupRevokeInvite(from)
			    .then( res => {
				  reply(`Sukses menyetel tautan undangan grup ini`)
				}).catch(() => reply(mess.error.api))
				break
			case prefix+'hidetag':
		        if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
			    let mem = [];
		        groupMembers.map( i => mem.push(i.id) )
				conn.sendMessage(from, { text: q ? q : '', mentions: mem })
			    break
case prefix+'kick':
    if (!isGroup) return reply(mess.OnlyGrup)
    if (!isGroupAdmins) return reply(mess.GrupAdmin)
    if (!isBotGroupAdmins) return reply(mess.BotAdmin)
    var number;
    if (mentioned.length !== 0) {
      number = mentioned[0]
      conn.groupParticipantsUpdate(from, [number], "remove")
      .then( res => reply(jsonformat(res)))
      .catch( err => reply(jsonformat(err)))
    } else if (isQuotedMsg) {
      number = quotedMsg.sender
      conn.groupParticipantsUpdate(from, [number], "remove")
      .then( res => reply(jsonformat(res)))
      .catch( err => reply(jsonformat(err)))
    } else {
      reply(`Tag atau balas pesan member yang ingin dikeluarkan dari grup`)
    }
    break
case prefix+'entod':
    if (!isGroup) return reply(mess.OnlyGrup)
    if (!isGroupAdmins) return reply(mess.GrupAdmin)
    if (!isBotGroupAdmins) return reply(mess.BotAdmin)
    var number;
    if (mentioned.length !== 0) {
      number = mentioned[0]
      conn.groupParticipantsUpdate(from, [number], "remove")
      .then( res => reply(jsonformat(res)))
      .catch( err => reply(jsonformat(err)))
    } else if (isQuotedMsg) {
      number = quotedMsg.sender
      conn.groupParticipantsUpdate(from, [number], "remove")
      .then( res => reply(jsonformat(res)))
      .catch( err => reply(jsonformat(err)))
    } else {
      reply(`Tag atau balas pesan member yang ingin dikeluarkan dari grup`)
    }
    break

case prefix+'add':
    if (!isGroup) return reply(mess.OnlyGrup)
    if (!isGroupAdmins) return reply(mess.GrupAdmin)
    if (!isBotGroupAdmins) return reply(mess.BotAdmin)
    var number;
    if (args[1]) {
      number = mentioned[0]
      var cek = await conn.onWhatsApp(number)
      if (cek.length == 0) return reply(`Masukkan nomer yang valid dan terdaftar di WhatsApp`)
      conn.groupParticipantsUpdate(from, [number], "add")
      .then( res => reply(jsonformat(res)))
      .catch( err => reply(jsonformat(err)))
    } else if (isQuotedMsg) {
      number = quotedMsg.sender
      var cek = await conn.onWhatsApp(number)
      if (cek.length == 0) return reply(`Member yang kamu balas pesannya sudah tidak terdaftar di WhatsApp`)
      conn.groupParticipantsUpdate(from, [number], "add")
      .then( res => reply(jsonformat(res)))
      .catch( err => reply(jsonformat(err)))
    } else {
      reply(`Kirim perintah ${command} nomer atau balas pesan orang yang ingin dimasukkan kedalam grup`)
    }
    break
			// Bank & Payment Menu
			case prefix+'topbalance':{
                balance.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
                let top = '*── 「 TOP BALANCE 」 ──*\n\n'
                let arrTop = []
				var total = 10
				if (balance.length < 10) total = balance.length
                for (let i = 0; i < total; i ++){
                    top += `${i + 1}. @${balance[i].id.split("@")[0]}\n=> Balance : $${balance[i].balance}\n\n`
                    arrTop.push(balance[i].id)
                }
                mentions(top, arrTop, true)
            }
                break
            case prefix+'buylimit':{
                if (args.length < 2) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $150 balance`)
                if (args[1].includes('-')) return reply(`Jangan menggunakan -`)
                if (isNaN(args[1])) return reply(`Harus berupa angka`)
                if (args[1].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                let ane = Number(parseInt(args[1]) * 150)
                if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
                kurangBalance(sender, ane, balance)
                giveLimit(sender, parseInt(args[1]), limit)
                reply(monospace(`Pembeliaan limit sebanyak ${args[1]} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Limit : ${getLimit(sender, limitCount, limit)}/${limitCount}`))
            }
                break
			case prefix+'transfer':
            case prefix+'tf':{
                 if (args.length < 2) return reply(`Kirim perintah *${command}* @tag nominal\nContoh : ${command} @6281319944917 2000`)
                 if (mentioned.length == 0) return reply(`Tag orang yang ingin di transfer balance`)
                 if (!args[2]) return reply(`Masukkan nominal nya!`)
                 if (isNaN(args[2])) return reply(`Nominal harus berupa angka!`)
                 if (args[2].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                 if (args[2].includes("-")) return reply(`Jangan menggunakan -`)
                 var anu = getBalance(sender, balance)
                 if (anu < args[2] || anu == 'undefined') return reply(`Balance Kamu Tidak Mencukupi Untuk Transfer Sebesar $${args[2]}, Kumpulkan Terlebih Dahulu\nKetik ${prefix}balance, untuk mengecek Balance mu!`)
                 kurangBalance(sender, parseInt(args[2]), balance)
                 addBalance(mentioned[0], parseInt(args[2]), balance)
                 reply(`Sukses transfer balance sebesar $${args[2]} kepada @${mentioned[0].split("@")[0]}`)
            }
                 break
            case prefix+'buygamelimit':
            case prefix+'buyglimit':{
                if (args.length < 2) return reply(`Kirim perintah *${prefix}buyglimit* jumlah game limit yang ingin dibeli\n\nHarga 1 game limit = $150 balance\nPajak $1 / $10`)
                if (args[1].includes('-')) return reply(`Jangan menggunakan -`)
                if (isNaN(args[1])) return reply(`Harus berupa angka`)
                if (args[1].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                let ane = Number(parseInt(args[1]) * 150)
                if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
                kurangBalance(sender, ane, balance)
                givegame(sender, parseInt(args[1]), glimit)
                reply(monospace(`Pembeliaan game limit sebanyak ${args[1]} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Game Limit : ${cekGLimit(sender, gcount, glimit)}/${gcount}`))
            }
                break
			case prefix+'limit': case prefix+'balance':
			case prefix+'ceklimit': case prefix+'cekbalance':
			    if (mentioned.length !== 0){
					var Ystatus = ownerNumber.includes(mentioned[0])
					var isPrim = Ystatus ? true : _prem.checkPremiumUser(mentioned[0], premium)
				    var ggcount = isPrim ? gcounti.prem : gcounti.user
                    var limitMen = `${getLimit(mentioned[0], limitCount, limit)}`
                    textImg(`Limit : ${_prem.checkPremiumUser(mentioned[0], premium) ? 'Unlimited' : limitMen}/${limitCount}\nLimit Game : ${cekGLimit(mentioned[0], ggcount, glimit)}/${ggcount}\nBalance : $${getBalance(mentioned[0], balance)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
                } else {
                    var limitPrib = `${getLimit(sender, limitCount, limit)}/${limitCount}`
                    textImg(`Limit : ${isPremium ? 'Unlimited' : limitPrib}\nLimit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : $${getBalance(sender, balance)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
                }
				break
//Api Anto
case prefix+'ssweb':
  if (!isUrl(args[1])) return reply(mess.error.Iv)
  var seweb = chats.slice(7)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (args.length < 2) return reply(`Kirim Perintah ${command} link Mu\nContoh ${command} https://github.com/GetSya`)
  reply(mess.wait)
  conn.sendMessage(from, { image: { url: `https://hardianto.xyz/api/tools/ssweb?url=${seweb}&apikey=${keyanto}`}})
  limitAdd(sender, limit)
  break
  case prefix+'sshpfull':
  if (!isUrl(args[1])) return reply(mess.error.Iv)
  var seweb = chats.slice(7)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (args.length < 2) return reply(`Kirim Perintah ${command} link Mu\nContoh ${command} https://github.com/GetSya`)
  reply(mess.wait)
  conn.sendMessage(from, { image: { url: `https://hadi-api.herokuapp.com/api/ssweb?url=${q}&device=phone&full=on`}})
  limitAdd(sender, limit)
  break
case prefix+'ssdesktop':
  if (!isUrl(args[1])) return reply(mess.error.Iv)
  var seweb = chats.slice(7)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (args.length < 2) return reply(`Kirim Perintah ${command} link Mu\nContoh ${command} https://github.com/GetSya`)
  reply(mess.wait)
  conn.sendMessage(from, { image: { url: `https://hadi-api.herokuapp.com/api/ssweb?url=${q}&device=desktop&full=on`}})
  limitAdd(sender, limit)
  break
case prefix+'nuliskanan':
  var kanan = chats.slice(11)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (args.length < 2) return reply(`Kirim Perintah ${command} Tulisan Mu\nContoh ${command} Masa Chan\n\n⚠️ *NOTE : GAK BOLEH DI TAMBAHIN EMOJI/TEXT TEXT GAK JELAS*`)
  reply(mess.wait)
  conn.sendMessage(from, { image: { url: `https://hardianto.xyz/api/nuliskanan?text=${kanan}&apikey=${keyanto}`}})
  limitAdd(sender, limit)
  break
case prefix+'nuliskiri':
  var kiri = chats.slice(10)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (args.length < 2) return reply(`Kirim Perintah ${command} Tulisan Mu\nContoh ${command} Masa Chan\n\n⚠️ *NOTE : GAK BOLEH DI TAMBAHIN EMOJI/TEXT TEXT GAK JELAS*`)
  reply(mess.wait)
  conn.sendMessage(from, { image: { url: `https://hardianto.xyz/api/nuliskanan?text=${kiri}&apikey=${keyanto}`}})
  limitAdd(sender, limit)
  break
case prefix+'foliokiri':
  var fkiri = chats.slice(10)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (args.length < 2) return reply(`Kirim Perintah ${command} Tulisan Mu\nContoh ${command} Masa Chan\n\n⚠️ *NOTE : GAK BOLEH DI TAMBAHIN EMOJI/TEXT TEXT GAK JELAS*`)
  reply(mess.wait)
  conn.sendMessage(from, { image: { url: `https://hardianto.xyz/api/foliokiri?text=${fkanan}&apikey=${keyanto}`}})
  limitAdd(sender, limit)
  break
case prefix+'foliokanan':
  var fkiri = chats.slice(11)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (args.length < 2) return reply(`Kirim Perintah ${command} Tulisan Mu\nContoh ${command} Masa Chan\n\n⚠️ *NOTE : GAK BOLEH DI TAMBAHIN EMOJI/TEXT TEXT GAK JELAS*`)
  reply(mess.wait)
  conn.sendMessage(from, { image: { url: `https://hardianto.xyz/api/foliokanan?text=${fkiri}&apikey=${keyanto}`}})
  limitAdd(sender, limit)
  break
case prefix+'nulis':
  case prefix+'tulis':
    case prefix+'menulis':
reply(`*[ COMMAND NOT FOUND ]*
Command Salah ❌
Silahkan Pilih Type Buku/Folio Berikut

- ${prefix}foliokanan <Text>
- ${prefix}foliokiri <Text>
- ${prefix}nuliskanan <Text>
- ${prefix}nuliskiri <Text>

Note : Anggap "<" dan ">" Tidak Ada
 `)
 break
//nsfw
case prefix+'ass':
if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
	if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var data = await fetchJson(`https://docs-jojoapi.herokuapp.com/api/nsfw/ass?apikey=${jojoapi}`)
var but = [{buttonId: `${command}`, buttonText: { displayText: 'Next Photo' }, type: 1 }]
					conn.sendMessage(from, { caption: `Sangenya prem ini`, image: { url: data.result }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
					break
case prefix+'bdsm':
if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
	if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var data = await fetchJson(`https://docs-jojoapi.herokuapp.com/api/nsfw/bdsm?apikey=${jojoapi}`)
var but = [{buttonId: `${command}`, buttonText: { displayText: 'Next Photo' }, type: 1 }]
					conn.sendMessage(from, { caption: `Sangenya prem ini`, image: { url: data.result }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
					break
case prefix+'ahegao':
if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
	if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var data = await fetchJson(`https://docs-jojoapi.herokuapp.com/api/nsfw/ahegao?apikey=${jojoapi}`)
var but = [{buttonId: `${command}`, buttonText: { displayText: 'Next Photo' }, type: 1 }]
					conn.sendMessage(from, { caption: `Sangenya prem ini`, image: { url: data.result }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
					break
case prefix+'blowjob':
if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
	if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var data = await fetchJson(`https://docs-jojoapi.herokuapp.com/api/nsfw/blowjob?apikey=${jojoapi}`)
var but = [{buttonId: `${command}`, buttonText: { displayText: 'Next Photo' }, type: 1 }]
					conn.sendMessage(from, { caption: `Sangenya prem ini`, image: { url: data.result }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
					break
case prefix+'cuckold':
if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
	if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var data = await fetchJson(`https://docs-jojoapi.herokuapp.com/api/nsfw/cuckold?apikey=${jojoapi}`)
var but = [{buttonId: `${command}`, buttonText: { displayText: 'Next Photo' }, type: 1 }]
					conn.sendMessage(from, { caption: `Sangenya prem ini`, image: { url: data.result }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
					break
case prefix+'cum':
if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
	if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var data = await fetchJson(`https://docs-jojoapi.herokuapp.com/api/nsfw/cum?apikey=${jojoapi}`)
var but = [{buttonId: `${command}`, buttonText: { displayText: 'Next Photo' }, type: 1 }]
					conn.sendMessage(from, { caption: `Sangenya prem ini`, image: { url: data.result }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
					break
case prefix+'ero':
if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
	if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var data = await fetchJson(`https://docs-jojoapi.herokuapp.com/api/nsfw/ero?apikey=${jojoapi}`)
var but = [{buttonId: `${command}`, buttonText: { displayText: 'Next Photo' }, type: 1 }]
					conn.sendMessage(from, { caption: `Sangenya prem ini`, image: { url: data.result }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
					break
case prefix+'femdom':
if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
	if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var data = await fetchJson(`https://docs-jojoapi.herokuapp.com/api/nsfw/femdom?apikey=${jojoapi}`)
var but = [{buttonId: `${command}`, buttonText: { displayText: 'Next Photo' }, type: 1 }]
					conn.sendMessage(from, { caption: `Sangenya prem ini`, image: { url: data.result }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
					break
case prefix+'foot':
if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
	if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var data = await fetchJson(`https://docs-jojoapi.herokuapp.com/api/nsfw/foot?apikey=${jojoapi}`)
var but = [{buttonId: `${command}`, buttonText: { displayText: 'Next Photo' }, type: 1 }]
					conn.sendMessage(from, { caption: `Sangenya prem ini`, image: { url: data.result }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
					break
case prefix+'gangbang':
if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
	if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)

  var data = await fetchJson(`https://docs-jojoapi.herokuapp.com/api/nsfw/gangbang?apikey=${jojoapi}`)
var but = [{buttonId: `${command}`, buttonText: { displayText: 'Next Photo' }, type: 1 }]
					conn.sendMessage(from, { caption: `Sangenya prem ini`, image: { url: data.result }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
					break
case prefix+'glasses':
if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
	if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var data = await fetchJson(`https://docs-jojoapi.herokuapp.com/api/nsfw/glasses?apikey=${jojoapi}`)
var but = [{buttonId: `${command}`, buttonText: { displayText: 'Next Photo' }, type: 1 }]
					conn.sendMessage(from, { caption: `Sangenya prem ini`, image: { url: data.result }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
					break
case prefix+'hentai':
if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
   var data = await getBuffer(`https://docs-jojoapi.herokuapp.com/api/nsfw/glasses?apikey=${jojoapi}`)
				var but = [{buttonId: `/hentai`, buttonText: { displayText: "Kirim Hentai Lagi" }, type: 1 }]
				conn.sendMessage(from, { caption: "Hentai For Premium", image: { url: `https://hardianto.xyz/api/anime/random?nsfw=hentai&apikey=${keyanto}` }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
				limitAdd(sender, limit)
				break
///MAKER BY HADII APII!!!!
case prefix+'glitch':
  if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: "© Arasya && Hadi Api", image: { url: `https://hadi-api.herokuapp.com/api/photoxy/tiktok-effect?text=${args[1]}&text2=${args[2]}`}}, {quoted: msg})
limitAdd(sender, limit)
break
case prefix+'flaming':
  if (args.length < 2) return reply(`Kirim perintah ${command} <Text>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: "© Arasya && Hadi Api", image: { url: `https://hadi-api.herokuapp.com/api/photoxy/flaming-fire?text=${q}`}}, {quoted: msg})
limitAdd(sender, limit)
break
case prefix+'shadow':
  if (args.length < 2) return reply(`Kirim perintah ${command} <Text1>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: "© Arasya && Hadi Api", image: { url: `https://hadi-api.herokuapp.com/api/photoxy/shadow-sky?text=${q}`}}, {quoted: msg})
limitAdd(sender, limit)
break
case prefix+'wolftext':
  if (args.length < 2) return reply(`Kirim perintah ${command} <Text1>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: "© Arasya && Hadi Api", image: { url: `https://hadi-api.herokuapp.com/api/photoxy/wolf-metal?text=${q}`}}, {quoted: msg})
limitAdd(sender, limit)
break
case prefix+'cup':
  if (args.length < 2) return reply(`Kirim perintah ${command} <Text1>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: "© Arasya && Hadi Api", image: { url: `https://hadi-api.herokuapp.com/api/photoxy/teks-cup?text=${q}`}}, {quoted: msg})
limitAdd(sender, limit)
break
case prefix+'romantic':
  if (args.length < 2) return reply(`Kirim perintah ${command} <Text1>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: "© Arasya && Hadi Api", image: { url: `https://hadi-api.herokuapp.com/api/photoxy/romantic-messages?text=${q}`}}, {quoted: msg})
limitAdd(sender, limit)
break
case prefix+'writetext':
  if (args.length < 2) return reply(`Kirim perintah ${command} <Text1>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: "© Arasya && Hadi Api", image: { url: `https://hadi-api.herokuapp.com/api/photoxy/burn-paper?text=${q}`}}, {quoted: msg})
limitAdd(sender, limit)
break
case prefix+'cup2':
  if (args.length < 2) return reply(`Kirim perintah ${command} <Text1>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: "© Arasya && Hadi Api", image: { url: `https://hadi-api.herokuapp.com/api/photoxy/funny-cup?text=${q}`}}, {quoted: msg})
limitAdd(sender, limit)
break
case prefix+'lovetext':
  if (args.length < 2) return reply(`Kirim perintah ${command} <Text1>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: "© Arasya && Hadi Api", image: { url: `https://hadi-api.herokuapp.com/api/photoxy/love-messages?text=${q}`}}, {quoted: msg})
limitAdd(sender, limit)
break
case prefix+'lovetext2':
  if (args.length < 2) return reply(`Kirim perintah ${command} <Text1>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: "© Arasya && Hadi Api", image: { url: `https://hadi-api.herokuapp.com/api/photoxy/romantic-double?text=${q}`}}, {quoted: msg})
limitAdd(sender, limit)
break
case prefix+'undergrass':
  if (args.length < 2) return reply(`Kirim perintah ${command} <Text1>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: "© Arasya && Hadi Api", image: { url: `https://hadi-api.herokuapp.com/api/photoxy/under-grass?text=${q}`}}, {quoted: msg})
limitAdd(sender, limit)
break
case prefix+'tahta': case prefix+'hartatahta':
  if (args.length < 2) return reply(`Kirim perintah ${command} <Text1>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
  reply(`Harta Tahta *${q}* Sedang Di Buat`)
conn.sendMessage(from, {caption: `*HARTA*\n*TAHTA*\n*${q}*`, image: { url: `https://hardianto.xyz/api/maker/harta-tahta?apikey=${keyanto}&text=${q}`}}, {quoted: msg})
limitAdd(sender, limit)
break
case prefix+'coffecup':
  if (args.length < 2) return reply(`Kirim perintah ${command} <Text1>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: "© Arasya && Hadi Api", image: { url: `https://hadi-api.herokuapp.com/api/photoxy/coffee-cup?text=${q}`}}, {quoted: msg})
limitAdd(sender, limit)
break
case prefix+'woodheart':
  if (args.length < 2) return reply(`Kirim perintah ${command} <Text1>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  
conn.sendMessage(from, {caption: "© Arasya && Hadi Api", image: { url: `https://hadi-api.herokuapp.com/api/photoxy/wood-hearth?text=${q}`}}, {quoted: msg})
limitAdd(sender, limit)
break
case prefix+'say': case prefix+'tts':
  if (args.length < 2) return reply(`Kirim perintah ${command} Text`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
   conn.sendMessage(from, { audio: {url : `https://hadi-api.herokuapp.com/api/tts?text=${q}&language=id`}, mimetype: 'audio/mp4', ptt: true}, {quoted: msg})
limitAdd(sender, limit)
   break
case prefix+'nabi': case prefix+'kisahnabi':
  if (args.length < 2) return reply(`Kirim perintah ${command} Nama Nabi\nContoh : ${command} Muhammad`)
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				var data = await fetchJson(`https://hardianto.xyz/api/muslim/kisahnabi?nabi=${q}&apikey=${keyanto}`)
				var kisahnya = `*Nama Nabi :* ${data.result.name}\n*Kelahiran :* ${data.result.wafat_usia}\n*Tempat Tinggal :* ${data.result.singgah}\n*Kisah Nabi :* ${data.result.kisah}`
			    reply(kisahnya)
				limitAdd(sender, limit)
				break
case prefix+'quranaudio': case prefix+'quranvn':
  if (args.length < 2) return reply(`Kirim perintah ${command} surah ayat\nContoh : ${command} 1 2`)
  if (isNaN(args[1])) return reply(`Harus berupa angka`)
  if (isNaN(args[2])) return reply(`Harus berupa angka`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var data = await fetchJson(`https://hardianto.xyz/api/muslim/quran?surah=${args[1]}&ayat=${args[2]}&apikey=${keyanto}`)

conn.sendMessage(from, { audio: {url : pickRandom(data.result.data.audio.secondary)}, mimetype: 'audio/mp4', ptt: true})
limirAdd(sender, limit)
break
case prefix+'quran':
  if (args.length < 2) return reply(`Kirim perintah ${command} Nomer`)
  if (isNaN(args[1])) return reply(`Harus berupa angka`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var data = await fetchJson(`https://hadi-api.herokuapp.com/api/quran?no=${q}`)
			    reply(`*Surah :* ${data.result.surah}\n*Ayat :* \n${data.result.ayat}\n*Arti :* \n${data.result.terjemahan}`)
			    break
case prefix+'listquran':
  var listquran = `*[ LIST QURAN ]*

1. Al Fatihah (Pembuka)
2. Al Baqarah (Sapi Betina)
3. Ali Imran (Keluarga Imran)
4. An Nisa (Wanita)
5. Al Ma'idah (Jamuan)
6. Al An'am (Hewan Ternak)
7. Al-A'raf (Tempat yang Tertinggi)
8. Al-Anfal (Harta Rampasan Perang)
9. At-Taubah(Pengampunan)
10. Yunus (Nabi Yunus)
11. Hud (Nabi Hud)
12. Yusuf (Nabi Yusu)
13. Ar-Ra'd (Guruh)
14. Ibrahim (Nabi Ibrahim)
15. Al-Hijr (Gunung Al Hijr)
16. An-Nahl (Lebah)
17. Al-Isra' (Perjalanan Malam)
18. Al-Kahf (Penghuni-penghuni Gua)
19. Maryam (Maryam)
20. Ta Ha (Ta Ha)
21. Al-Anbiya (Nabi-Nabi)
22. Al-Hajj (Haji)
23. Al-Mu'minun (Orang-orang mukmin)
24. An-Nur (Cahaya)
25. Al-Furqan (Pembeda)
26. Asy-Syu'ara' (Penyair)
27. An-Naml (Semut)
28. Al-Qasas (Kisah-kisah)
29. Al-'Ankabut (Laba-laba)
30. Ar-Rum (Bangsa Romawi)
31. Luqman (Keluarga Luqman)
32. As-Sajdah (Sajdah)
33. Al-Ahzab (Golongan-golongan yang Bersekutu)
34. Saba' (Kaum Saba')
35. Fatir (Pencipta)
36. Ya Sin (Yaasiin)
37. As-Saffat (Barisan-barisan)
38. Sad (Shaad)
39. Az-Zumar (Rombongan-rombongan)
40. Ghafir (Yang Mengampuni)
41. Fussilat (Yang Dijelaskan)
42. Asy-Syura (Musyawarah)
43. Az-Zukhruf (Perhiasan)
44. Ad-Dukhan (Kabut)
45. Al-Jasiyah (Yang Bertekuk Lutut)
46. Al-Ahqaf (Bukit-bukit Pasir)
47. Muhammad (Nabi Muhammad)
48. Al-Fath (Kemenangan)
49. Al-Hujurat (Kamar-kamar)
50. Qaf (Qaaf)
51. Az-Zariyat (Angin yang Menerbangkan)
52. At-Tur (Bukit)
53. An-Najm (Bintang)
54. Al-Qamar (Bulan)
55. Ar-Rahman (Yang Maha Pemurah)
56. Al-Waqi'ah (Hari Kiamat)
57. Al-Hadid (Besi)
58. Al-Mujadilah (Wanita yang Mengajukan Gugatan)
59. Al-Hasyr (Pengusiran)
60. Al-Mumtahanah (Wanita yang Diuji)
61. As-Saff (Satu Barisan)
62. Al-Jumu'ah (Hari Jum'at)
63. Al-Munafiqun (Orang-orang yang Munafik)
64. At-Tagabun (Hari Dinampakkan Kesalahan-kesalahan)
65. At-Talaq (Talak)
67. Al-Mulk (Kerajaan)
68. Al-Qalam (Pena)
69. Al-Haqqah (Hari Kiamat)
70. Al-Ma'arij (Tempat Naik)
71. Nuh (Nabi Nuh)
72. Al-Jinn (Jin)
73. Al-Muzzammil (Orang yang Berselimut)
74. Al-Muddassir (Orang yang Berkemul)
75. Al-Qiyamah (Kiamat)
76. Al-Insan (Manusia)
77. Al-Mursalat (Malaikat-Malaikat Yang Diutus)
78. An-Naba' (Berita Besar)
79. An-Nazi'at (Malaikat-Malaikat Yang Mencabut)
80. 'Abasa (Ia Bermuka Masam)
81. At-Takwir (Menggulung)
82.Al-Infitar (Terbelah)
83. Al-Tatfif (Orang-orang yang Curang)
84. Al-Insyiqaq (Terbelah)
85. Al-Buruj (Gugusan Bintang)
86. At-Tariq (Yang Datang di Malam Hari)
87. Al-A'la (Yang Paling Tinggi)
88. Al-Gasyiyah (Hari Pembalasan)
89. Al-Fajr (Fajar)
90. Al-Balad (Negeri)
91. Asy-Syams (Matahari)
92. Al-Lail (Malam)
93. Ad-Duha (Waktu Matahari Sepenggalahan Naik (Dhuha))
94. Al-Insyirah (Melapangkan)
95. At-Tin (Buah Tin)
96. Al-'Alaq (Segumpal Darah)
97. Al-Qadr (Kemuliaan)
98. Al-Bayyinah (Pembuktian)
99. Az-Zalzalah (Kegoncangan)
100. Al-'Adiyat (Berlari Kencang)
101. Al-Qari'ah (Hari Kiamat)
102. At-Takasur (Bermegah-megahan)
103. Al-'Asr (Masa)
104. Al-Humazah (Pengumpat)
105. Al-Fil (Gajah)
106. Quraisy (Suku Quraisy)
107. Al-Ma'un (Barang-barang yang Berguna)
108. Al-Kausar (Nikmat yang Berlimpah)
109. Al-Kafirun (Orang-orang Kafir)
110. An-Nasr (Pertolongan)
111. Al-Lahab (Gejolak Api)
112. Al-Ikhlas (Ikhlas)
113. Al-Falaq (Waktu Subuh)
100. Al-'Adiyat (Berlari Kencang)
101. Al-Qari'ah (Hari Kiamat)
102. At-Takasur (Bermegah-megahan)
103. Al-'Asr (Masa)
104. Al-Humazah (Pengumpat)
105. Al-Fil (Gajah)
106. Quraisy (Suku Quraisy)
107. Al-Ma'un (Barang-barang yang Berguna)
108. Al-Kausar (Nikmat yang Berlimpah)
109. Al-Kafirun (Orang-orang Kafir)
110. An-Nasr (Pertolongan)
111. Al-Lahab (Gejolak Api)
112. Al-Ikhlas (Ikhlas)
113. Al-Falaq (Waktu Subuh)
114. An-Nas (Umat Manusia)`
  textImg(listquran)
  break
case prefix+'darkjokes': case prefix+'dark': case prefix+'darkjoke':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var but = [{buttonId: `${command}`, buttonText: { displayText: "Dark Jokes" }, type: 1 }]
  var data = await fetchJson(`https://hadi-api.herokuapp.com/api/darkjokes`)
				conn.sendMessage(from, { caption: "© Hadi Api & Arasya", image: { url: data.result }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
limitAdd(sender, limit)
break
case prefix+'readmore':
  case prefix+'more':
    if (args.length < 2) return reply(`Kirim perintah ${command} Text1|Text2`)
    var read = q.split("|")
    var more2 = q.split("|")
    var retmor = `${read}${readmore}${more}`
    conn.sendMessage(from, { text: retmor}, { quoted: msg })
    break
case prefix+'wiki':
  case prefix+'wikipedia':
    if (args.length < 2) return reply(`Kirim perintah ${command} Kata\nContoh : ${command} WhatsApp`)
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
    reply(mess.wait)
     var data = await fetchJson(`https://hadi-api.herokuapp.com/api/wiki?query=${q}`)
    var captionnya = `${data.result}\n\n${readmore} *© MASA BOT*`
    conn.sendMessage(from, {caption: captionnya, image: {url: `https://telegra.ph/file/b4a72e6438af9770300eb.jpg`}}, {quoted: msg})
    limitAdd(sender, limit)
    break
case prefix+'igstalk':
  case prefix+'stalkig':
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
    if (args.length < 2) return reply(`Kirim perintah ${command} Username\nContoh : ${command} arsrfi.jpg`)
    var data = await fetchJson(`https://hardianto.xyz/api/igstalk?username=${q}&apikey=hardianto`)
    var caption = `*[ INSTAGRAM STALK ]*\n\n👤Username : ${data.username}\n📛 Full Name : ${data.fullname}\n✔️ Verified : ${data.verified}\n👥 Followers : ${data.followers}\n🫂 Following : ${data.follow}\n🗣️ Kategori ${data.category}\n\n${readmore} *© MASA BOT*`
    conn.sendMessage(from, {caption: caption, image: {url: data.thumbnail}}, {quoted: msg})
    limitAdd(sender, limit)
    break
case prefix+'guramaker':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
    if (args.length < 2) return reply(`Kirim perintah ${command} Text\nContoh : ${command} Masa`)
   conn.sendMessage(from, {caption: `Premium Feature For User Free`, image: {url: `https://hardianto.xyz/api/bot/gura?apikey=hardianto&nama=${q}`}}, {quoted: msg})
   limitAdd(sender, limit)
   break
   case prefix+'kanekimaker':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
    if (args.length < 2) return reply(`Kirim perintah ${command} Text\nContoh : ${command} Masa`)
   conn.sendMessage(from, {caption: `Premium Feature For User Free`, image: {url: `https://hardianto.xyz/api/bot/gfx1?apikey=hardianto&nama=${q}`}}, {quoted: msg})
   limitAdd(sender, limit)
   break
case prefix+'lolimaker':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
    if (args.length < 2) return reply(`Kirim perintah ${command} Text\nContoh : ${command} Masa`)
   conn.sendMessage(from, {caption: `Premium Feature For User Free`, image: {url: `https://hardianto.xyz/api/bot/gfx2?apikey=hardianto&nama=${q}`}}, {quoted: msg})
   limitAdd(sender, limit)
   break
case prefix+'waifumaker':
if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
    if (args.length < 2) return reply(`Kirim perintah ${command} Text\nContoh : ${command} Masa bot`)
   conn.sendMessage(from, {caption: `Premium Feature For User Free`, image: {url: `https://hardianto.xyz/api/bot/gfx4?apikey=hardianto&text1=${args[1]}&text2=${args[2]}`}}, {quoted: msg})
   limitAdd(sender, limit)
   break
case prefix+'qrcode':
  case prefix+'qr':
  if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
    if (args.length < 2) return reply(`Kirim perintah ${command} Text\nContoh : ${command} Masa bot`)
    reply(`Membuat Qr Code`)
    conn.sendMessage(from, {caption: `*QR CODE*`, image: {url: `https://docs-jojo.herokuapp.com/api/qrcode?text=${q}`}}, {quoted: msg})
    limitAdd(sender, limit)
    break
case prefix+'cersex':
  if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var data = await fetchJson(`https://docs-jojo.herokuapp.com/api/cersex`)
  var caption = `*[ CERSEX ]*\n\n*Judul* : ${data.result.judul}\n*Cerita* : ${data.result.cersex}\n${readmore} *MASA BOT*`
  conn.sendMessage(from, {caption: caption, image: {url: data.result.img}}, {quoted: msg})
  limitAdd(sender, limit)
  break
case prefix+'cerpen':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var data = await fetchJson(`https://docs-jojo.herokuapp.com/api/cerpen`)
  var text = `*[ CERPEN ]*\n\n*Judul* : ${data.result.title}\n*Kategori* : ${data.result.kategori}\n*Cerritanya* : ${data.result.cerpen}`
  conn.sendMessage(from, {text: text}, {quoted: msg})
  limitAdd(sender, limit)
  break
case prefix+'faktaunik':
  case prefix+'faktamenarik':
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
     var data = await fetchJson(`https://docs-jojo.herokuapp.com/api/fakta-unik`)
var caption = `Tahukah kamu?
${data.result}`
var but = [{buttonId: `${command}`, buttonText: { displayText: "Fakta Unik" }, type: 1 }]
conn.sendMessage(from, { text: caption, buttons: but, footer: "© Masa Bot", templateButtons: but }, {quoted: msg})
limitAdd(sender, limit)
break
//maker arasya
case prefix+'leaves':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var data = await fetchJson(`https://jojo-docsapi.herokuapp.com/api/textpro/natural-leaves?apikey=Joo&text=${q}`)
  conn.sendMessage(from, {caption: `Succes!`, image: {url: data.result}}, {quoted: msg})
  limitAdd(sender, limit)
  break
case prefix+'pornhub':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
  var data = await fetchJson(`https://jojo-docsapi.herokuapp.com/api/textpro/porn-hub?apikey=Joo&text1=${args[1]}&text2=${args[2]}`)
  conn.sendMessage(from, {caption: `Succes!`, image: {url: data.result}}, {quoted: msg})
  limitAdd(sender, limit)
  break
case prefix+'3d':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
  var data = await fetchJson(`https://jojo-docsapi.herokuapp.com/api/textpro/3d-gradient?apikey=Joo&text=${q}`)
  conn.sendMessage(from, {caption: `Succes!`, image: {url: data.result}}, {quoted: msg})
  limitAdd(sender, limit)
  break
case prefix+'christmas':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
  var data = await fetchJson(`https://jojo-docsapi.herokuapp.com/api/textpro/christmas?apikey=Joo&text=${q}`)
  conn.sendMessage(from, {caption: `Succes!`, image: {url: data.result}}, {quoted: msg})
  limitAdd(sender, limit)
  break
case prefix+'thunder':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
 var data = await fetchJson(`https://bx-hunter.herokuapp.com/api/textpro/thunder-text?text=${q}&apikey=${ikiapi}`)
conn.sendMessage(from, {caption: `nih Dah jadi`, image: {url: data.result}}, {quoted: msg})
limitAdd(sender, limit)
break
case prefix+'logowolf':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
  var data = await fetchJson(`https://jojo-docsapi.herokuapp.com/api/textpro/logo-wolf2?apikey=Joo&text=${args[1]}&text2=${args[2]}`)

  conn.sendMessage(from, {caption: `Succes!`, image: {url: data.result}}, {quoted: msg})
  limitAdd(sender, limit)
  break
case prefix+'logowolf2':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
  var data = await fetchJson(`https://jojo-docsapi.herokuapp.com/api/textpro/logo-wolf ?apikey=Joo&text=${args[1]}&text2=${args[2]}`)
  conn.sendMessage(from, {caption: `Succes!`, image: {url: data.result}}, {quoted: msg})
  limitAdd(sender, limit)
  break
//Amel
case prefix+'ppcouple':
  case prefix+'ppcp':
    case prefix+'couple':
      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
    var data = await fetchJson(`https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json?&apikey=${apikey}`)
    reply("Couplean sama aku yuk")
conn.sendMessage(from, {caption: `Cowo`, image: {url: data.cowo}}, {quoted: msg})
conn.sendMessage(from, {caption: `Cewe`, image: {url: data.cewe}}, {quoted: msg})
limitAdd(sender, limit)
break
case prefix+'xnxx':
  case prefix+'xnxxdownload':
  if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
if (args.length < 2) return reply(`Kirim perintah ${command} link`)
if (!args[1].includes('xnxx')) return reply(mess.error.Iv)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
var data = await fetchJson(`https://melcanz.com/xnxxdl?url=${q}&apikey=${apikey}`)
reply(mess.wait)
conn.sendMessage(from, {video: {url: data.result.files.high}}, {quoted: msg})
break
//Punya Iki
case prefix+'kalkulator':
  case prefix+'k':
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
    var data = await fetchJson(`https://bx-hunter.herokuapp.com/api/calculator?angka=${q}&apikey=${ikiapi}`)
    reply(data.result)
    limitAdd(sender, limit)
    break
case prefix+'maker1':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var data = await getBuffer(`https://bx-hunter.herokuapp.com/api/flamingtext/text3d?text=${q}&apikey=${ikiapi}`)
reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `*${q}*`, image: data}, {quoted: msg})
limitAdd(sender, limit)
break
case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await conn.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await conn.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            conn.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
case 'emojimix': {
	        if (!text) throw `Example : ${prefix + command} 😅+🤔`
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await conn.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            conn.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${hisoka.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            conn.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await conn.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await conn.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                m.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await conn.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
case prefix+'maker2':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var data = await getBuffer(`https://bx-hunter.herokuapp.com/api/flamingtext/blackbird?text=${q}&apikey=${ikiapi}`)
reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `*${q}*`, image: data}, {quoted: msg})
limitAdd(sender, limit)
case prefix+'maker3':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var data = await getBuffer(`https://bx-hunter.herokuapp.com/api/flamingtext/express?text=${q}&apikey=${ikiapi}`)
reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `*${q}*`, image: data}, {quoted: msg})
limitAdd(sender, limit)
break
case prefix+'maker4':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var data = await getBuffer(`https://bx-hunter.herokuapp.com/api/flamingtext/hbd?text=${q}&apikey=${ikiapi}`)
reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `*${q}*`, image: data}, {quoted: msg})
limitAdd(sender, limit)
break
case prefix+'maker5':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var data = await getBuffer(`https://bx-hunter.herokuapp.com/api/flamingtext/glow?text=${q}&apikey=${ikiapi}`)
reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `*${q}*`, image: data}, {quoted: msg})
limitAdd(sender, limit)
break
case prefix+'maker6':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var data = await getBuffer(`https://bx-hunter.herokuapp.com/api/flamingtext/neon?text=${q}&apikey=${ikiapi}`)
reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `*${q}*`, image: data}, {quoted: msg})
limitAdd(sender, limit)
break
case prefix+'maker7':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var data = await getBuffer(`https://bx-hunter.herokuapp.com/api/flamingtext/sound?text=${q}&apikey=${ikiapi}`)
reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `*${q}*`, image: data}, {quoted: msg})
limitAdd(sender, limit)
break
case prefix+'maker8':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var data = await getBuffer(`https://bx-hunter.herokuapp.com/api/flamingtext/cereal?text=${q}&apikey=${ikiapi}`)
reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `*${q}*`, image: data}, {quoted: msg})
limitAdd(sender, limit)
break
case prefix+'maker9':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var data = await getBuffer(`https://bx-hunter.herokuapp.com/api/flamingtext/fun?text=${q}&apikey=${ikiapi}`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `*${q}*`, image: data}, {quoted: msg})
limitAdd(sender, limit)
break
case prefix+'maker10':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var data = await getBuffer(`https://bx-hunter.herokuapp.com/api/flamingtext/harry?text=${q}&apikey=${ikiapi}`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `*${q}*`, image: data}, {quoted: msg})
limitAdd(sender, limit)
break
case prefix+'react':
  case prefix+'reaction':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
 conn.sendMessage(from, { react: { text: `${q}`, key: msg.key }})
 limitAdd(sender, limit)
 break
 //BOLEH DI AKTIFIN JIKA MENGGUNAKAN HEROKU
case prefix+'halah':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (!isQuotedMsg) return reply(`Reply Message nya!`)
  quotedMsg.chats.replace(/[a|i|u|e|o|A|I|U|E|O]/gi, 'a')
  limitAdd(sender, limit)
  break
case prefix+'hilih':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (!isQuotedMsg) return reply(`Reply Message nya!`)
  quotedMsg.chats.replace(/[a|i|u|e|o|A|I|U|E|O]/gi, 'i')
  limitAdd(sender, limit)
  break
case prefix+'huluh':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (!isQuotedMsg) return reply(`Reply Message nya!`)
  quotedMsg.chats.replace(/[a|i|u|e|o|A|I|U|E|O]/gi, 'u')
  limitAdd(sender, limit)
  break
case prefix+'heleh':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (!isQuotedMsg) return reply(`Reply Message nya!`)
  quotedMsg.chats.replace(/[a|i|u|e|o|A|I|U|E|O]/gi, 'e')
  limitAdd(sender, limit)
  break
case prefix+'holoh':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (!isQuotedMsg) return reply(`Reply Message nya!`)
  quotedMsg.chats.replace(/[a|i|u|e|o|A|I|U|E|O]/gi, 'o')
  limitAdd(sender, limit)
  break
			default:
			if (isGroup && isCmd) {
				var but = [{buttonId: `/menu`, buttonText: { displayText: "MENU" }, type: 1 }]
conn.sendMessage(from, { text: "Command Belum Tersedia Di Menu Coba Kamu Cek Lagi Di Menu Nya Ya kak", buttons: but, footer: "Lihat Lebih Di Menu", templateButtons: but }, {quoted: msg})
			}
			if (!isGroup && isCmd) {
				reply("Command Belum Tersedia Coba Cek Lagi Di Menu nya Yah kak")
			}
		}
	} catch (err) {
		console.log(color('[ERROR]', 'red'), err)
	}
}