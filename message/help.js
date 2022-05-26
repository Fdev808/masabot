const moment = require("moment-timezone");
const fs = require("fs");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

function toCommas(x) {
	x = x.toString()
	var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
	   x = x.replace(pattern, "$1,$2");
	return x;
}

exports.allmenu = (sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount) => {
	return `*── 「 ${setting.botName} - MD Beta 」 ──*
	
  _*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}*_

   ≼≽Library : *Baileys-MD*.
   ≼≽Prefix : ( ${prefix} )
   ≼≽Tanggal Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
   ≼≽Waktu Server : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
   ≼≽Bahasa : *Indonesia* 🇮🇩
   ≼≽Bot Type : *Multi-Device*.
   
	〆•Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}
	〆•Limit Harian : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
	〆•Limit Game : ${isOwner ? '-' : cekGLimit(sender, gcount, glimit)}
	〆•Balance : $${toCommas(getBalance(sender, balance))}
  Note : Anggap ➩_<>_ *Tidak Ada*
  
  *Berikut Lits Menu Masa Bot*
  ${readmore}
  〆 *Main Menu*
  ➩ ${prefix}menu
  ➩ ${prefix}owner
  ➩ ${prefix}donasi
  ➩ ${prefix}speed
  ➩ ${prefix}runtime
  ➩ ${prefix}cekprem
  ➩ ${prefix}listprem
 
    *Converter/Tools*
  ➩ ${prefix}sticker <ReplyGambar/vidio>
  ➩ ${prefix}attp <text>

  〆 *Downloader*
  ➩ ${prefix}play <Querry>
  ➩ ${prefix}youtube <LinkYt>
  ➩ ${prefix}tiktok <LinkTt>
  ➩ ${prefix}tiktokaudio <LinkTt>
  ➩ ${prefix}ytmp4 <LinkYt>
  ➩ ${prefix}ytmp3 <LinkYt>
  ➩ ${prefix}ytmp3vn <LinkYt>
  ➩ ${prefix}ytmp3doc <LinkYt>
  ➩ ${prefix}getvideo
  ➩ ${prefix}getmusic
  ➩ ${prefix}mediafire <LinkMediaFire>
  ➩ ${prefix}instagram <LinkIg>
  ➩ ${prefix}facebook <LinkFb>
  
  〆 *Group Menu*
  ➩ ${prefix}linkgrup
  ➩ ${prefix}setppgrup
  ➩ ${prefix}setnamegc
  ➩ ${prefix}setdesc
  ➩ ${prefix}group <Open/Close>
  ➩ ${prefix}revoke
  ➩ ${prefix}entod <@tag>
  ➩ ${prefix}antilink
  ➩ ${prefix}hidetag <Text>
  ➩ ${prefix}kick <@tag>
  ➩ ${prefix}add <@tag>
  
  〆 *Game & Fun Menu*
  ➩ ${prefix}tictactoe @tag
  ➩ ${prefix}lamar @tag  
  ➩ ${prefix}delttc
  ➩ ${prefix}suit
  ➩ ${prefix}masa <text>
  ➩ ${prefix}tebakgambar
  ➩ ${prefix}apakah <Query>
  ➩ ${prefix}kapankah <Query>
  ➩ ${prefix}rate <Query>
  ➩ ${prefix}gantecek <Nama>
  ➩ ${prefix}cantikcek <Nama>
  ➩ ${prefix}sangecek <Nama>
  ➩ ${prefix}gaycek <Nama>
  ➩ ${prefix}lesbicek <Nama>
  ➩ ${prefix}tahlil
  ➩ ${prefix}pantun
  ➩ ${prefix}emojimix
  ➩ ${prefix}gimana <Query>
  ➩ ${prefix}bisakah <Query>
  ➩ ${prefix}cekme

  〆 *Premium Menu*
  ➩ ${prefix}ass
  ➩ ${prefix}bdsm
  ➩ ${prefix}ahegao
  ➩ ${prefix}cuckold
  ➩ ${prefix}blowjob
  ➩ ${prefix}cum
  ➩ ${prefix}ero
  ➩ ${prefix}femdom
  ➩ ${prefix}foot
  ➩ ${prefix}gangbang
  ➩ ${prefix}xnxx <Link>
  ➩ ${prefix}cersex <Ceritasex>
  
  〆 *Random Picture*
  ➩ ${prefix}cecan
  ➩ ${prefix}cogan
  ➩ ${prefix}naruto
  ➩ ${prefix}loli
  ➩ ${prefix}waifu
  ➩ ${prefix}husbu
  ➩ ${prefix}yaoi
  ➩ ${prefix}mikasa
  ➩ ${prefix}wallpaper
  ➩ ${prefix}sagiri
  ➩ ${prefix}gojo
  ➩ ${prefix}nezuko
  ➩ ${prefix}levi
  ➩ ${prefix}rimuru
  ➩ ${prefix}shikimori
  ➩ ${prefix}anya
  ➩ ${prefix}loid
  ➩ ${prefix}yor
  ➩ ${prefix}nobara
  ➩ ${prefix}luffy
  ➩ ${prefix}ace
  ➩ ${prefix}zoro

    〆 *Menu Lain Nya*
  ➩ ${prefix}shortlink <Link>
  ➩ ${prefix}ssweb <Link>
  ➩ ${prefix}ssdesktop <Link>
  ➩ ${prefix}sshpfull <Link>
  ➩ ${prefix}kbbi <Kata>
  ➩ ${prefix}faktaunik
  ➩ ${prefix}ppcp
  ➩ ${prefix}kalkulator
  ➩ ${prefix}darkjokes
  ➩ ${prefix}covid19
  ➩ ${prefix}cerpen
  ➩ ${prefix}wiki <Query>
  ➩ ${prefix}igstalk <Username>
  ➩ ${prefix}qr <Text>
  ➩ ${prefix}readmore <Text>|<Text>
  ➩ ${prefix}hitungmundur 12 10 2022
  ➩ ${prefix}lirik <Judul>
  ➩ ${prefix}grupwa <Pencarian>
  ➩ ${prefix}ytsearch <Pencarian>
  ➩ ${prefix}pinterest <Querry>

  〆 *Islamic Menu*
  ➩ ${prefix}quran <nomer>
  ➩ ${prefix}quranaudio <surah> <ayat>
  ➩ ${prefix}listquran <nomer>
  ➩ ${prefix}kisahnabi <Nama Nabi>

  〆 *Menu Tulis*
  ➩ ${prefix}nuliskanan <Text>
  ➩ ${prefix}nuliskiri <Text>
  ➩ ${prefix}foliokanan <Text>
  ➩ ${prefix}foliokiri <Text>
  
  〆 *Payment & Bank*
  ➩ ${prefix}buylimit <Jumlah>
  ➩ ${prefix}buyglimit <Jumlah>
  ➩ ${prefix}transfer @tag <jumlah>
  ➩ ${prefix}limit
  ➩ ${prefix}balance
  ➩ ${prefix}topbalance
  
  〆 *Menu Maker*
  ➩ ${prefix}glitch <Text> <Text>
  ➩ ${prefix}shadow <Text>
  ➩ ${prefix}wolftext <Text>
  ➩ ${prefix}romantic <Text>
  ➩ ${prefix}writetext <Text>
  ➩ ${prefix}lovetext <Text>
  ➩ ${prefix}lovetext2 <Text>
  ➩ ${prefix}undergrass <Text>
  ➩ ${prefix}coffecup <Text>
  ➩ ${prefix}woodheart <Text>
  ➩ ${prefix}tahta <Text>
  ➩ ${prefix}waifumaker <Text>
  ➩ ${prefix}lolimaker <Text>
  ➩ ${prefix}kanekimaker <Text>
  ➩ ${prefix}guramaker <Text>
  ➩ ${prefix}leaves <Text>
  ➩ ${prefix}pornhub <Text>
  ➩ ${prefix}christmas <Text>
  ➩ ${prefix}logowolf <Text>
  ➩ ${prefix}logowolf2 <Text>
  ➩ ${prefix}thunder <Text>
  
  〆 *Maker From Image*
  ➩ ${prefix}maker1 <Text>
  ➩ ${prefix}maker2 <Text>
  ➩ ${prefix}maker3 <Text>
  ➩ ${prefix}maker4 <Text>
  ➩ ${prefix}maker5 <Text>
  ➩ ${prefix}maker6 <Text>
  ➩ ${prefix}maker7 <Text>
  ➩ ${prefix}maker8 <Text>
  ➩ ${prefix}maker9 <Text>
  ➩ ${prefix}maker10 <Text>
  
  〆 *Owner Menu*
  > evalcode
  x evalcode-2
  $ executor
  ➩ ${prefix}setppbot
  ➩ ${prefix}exif
  ➩ ${prefix}leave
  ➩ ${prefix}addprem
  ➩ ${prefix}delprem
  ➩ ${prefix}broadcast

  〆 *THANKS TO*
  - Allah SWT
  - Baileys-Md (AdiwaJshing)
  - @yannnnn.zz_ (Riyan)
  - @arsrfi.jpg (Arasya)
  - M Hadi Firmansya (Hadi Api)
  - @hardianto.xyz (Anto)`
}