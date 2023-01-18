const fs = require("fs");
const petik = '```'
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")


function toCommas(x) {
    x = x.toString()
    var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
       x = x.replace(pattern, "$1,$2");
    return x;
}

exports.allMenu = (role, ucapanWaktu, pushname, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}

╭─────────────────···▸
│୫ Ramadan Countdown 🌙 
│${mundur}
╰────────────────···▸

╭──────────────────···▸
│     𓊆*STATISTICS*𓊇
│ ⩨𓄰 Upload : ${upload}
│ ⩨𓄰 Downloads : ${download}
╰────────────────···▸

𓍯━━━══𖣯*BOT INFO*𖣯══━━━𖢨
┃ •𖤣 Creator : ${ownerName}
┃ •𖤣 Bot Name : ${botName}
┃ •𖤣 Time : ${jam}
┃ •𖤣 Date : ${tanggal(new Date())}
┃ •𖤣 Runtime : ${runtime(process.uptime())}
𓍯━━══◍𝗔𝘀𝗜𝗙 - 𝗞𝗶𝗻𝗚👑◍══━━━𖢨

𓍯━━━══𖣯*USER INFO*𖣯══━━━𖢨
┃𔓘𝆯 Name : ${pushname !== undefined ? pushname : '-'}
┃𔓘𝆯 Status : ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
┃𔓘𝆯 Limit : ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
┃𔓘𝆯 Limit Game : ${isCreator ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
┃𔓘𝆯 Balance : ${toCommas(getBalance(sender, balance))}
┃𔓘𝆯 Role : ${role}
𓍯━━══◍𝗔𝘀𝗜𝗙 - 𝗞𝗶𝗻𝗚👑◍══━━━𖢨
 
 
𓍯━━━══𖣯*MAIN MENU*${petik}𖣯══━━━𖢨
┃𔓘𝆯 ${prefix}menu
┃𔓘𝆯 ${prefix}infobot
┃𔓘𝆯 ${prefix}donate
┃𔓘𝆯 ${prefix}dashboard
┃𔓘𝆯 ${prefix}owner
┃𔓘𝆯 ${prefix}cekdrive
┃𔓘𝆯 ${prefix}cekbandwidth
┃𔓘𝆯 ${prefix}cekpremium
┃𔓘𝆯 ${prefix}listpremium
┃𔓘𝆯 ${prefix}listsewa
┃𔓘𝆯 ${prefix}speed
┃𔓘𝆯 ${prefix}runtime
┃𔓘𝆯 ${prefix}listbahasa${petik}
𓍯━━══◍𝗔𝘀𝗜𝗙 - 𝗞𝗶𝗻𝗚👑◍══━━━𖢨
              ╲╱ 
𖣯*CONVERTER/TOOLS*${petik}𖣯 
┃𔓘𝆯 ${prefix}sticker
┃𔓘𝆯 ${prefix}stickerwm
┃𔓘𝆯 ${prefix}smeme
┃𔓘𝆯 ${prefix}toimg
┃𔓘𝆯 ${prefix}tovideo
┃𔓘𝆯 ${prefix}tomp3
┃𔓘𝆯 ${prefix}ttp
┃𔓘𝆯 ${prefix}attp
┃𔓘𝆯 ${prefix}emojimix
┃𔓘𝆯 ${prefix}nuliskiri
┃𔓘𝆯 ${prefix}nuliskanan
┃𔓘𝆯 ${prefix}foliokiri
┃𔓘𝆯 ${prefix}foliokanan
┃𔓘𝆯 ${prefix}say
┃𔓘𝆯 ${prefix}translate${petik}
       ╲╱ 
𖣯*ANONYMOUS CHATS*${petik}𖣯
┃𔓘𝆯 ${prefix}menfess name|92xxx|message
┃𔓘𝆯 ${prefix}anonymous
┃𔓘𝆯 ${prefix}start
┃𔓘𝆯 ${prefix}next
┃𔓘𝆯 ${prefix}stop
┃𔓘𝆯 ${prefix}sendprofile${petik}
        ╲╱ 
𖣯*STORE MENU*${petik}𖣯
┃𔓘𝆯 ${prefix}list
┃𔓘𝆯 ${prefix}addlist
┃𔓘𝆯 ${prefix}dellist
┃𔓘𝆯 ${prefix}update
┃𔓘𝆯 ${prefix}jeda
┃𔓘𝆯 ${prefix}tambah
┃𔓘𝆯 ${prefix}kurang
┃𔓘𝆯 ${prefix}kali
┃𔓘𝆯 ${prefix}bagi
┃𔓘𝆯 ${prefix}delsetdone
┃𔓘𝆯 ${prefix}changedone
┃𔓘𝆯 ${prefix}setdone
┃𔓘𝆯 ${prefix}delsetproses
┃𔓘𝆯 ${prefix}changeproses
┃𔓘𝆯 ${prefix}setproses
┃𔓘𝆯 proses < reply chat >
┃𔓘𝆯 done < reply chat >${petik}
          ╲╱ 
𖣯*RPG GAMES*${petik}𖣯
┃𔓘𝆯 ${prefix}inventory
┃𔓘𝆯 ${prefix}mining
┃𔓘𝆯 ${prefix}buy 
┃𔓘𝆯 ${prefix}sell
┃𔓘𝆯 ${prefix}heal
┃𔓘𝆯 ${prefix}hunt
┃𔓘𝆯 ${prefix}adventure
┃𔓘𝆯 ${prefix}luckyday
┃𔓘𝆯 ${prefix}killslime
┃𔓘𝆯 ${prefix}killgoblin
┃𔓘𝆯 ${prefix}killdevil
┃𔓘𝆯 ${prefix}killbehemoth
┃𔓘𝆯 ${prefix}killdemon
┃𔓘𝆯 ${prefix}killdemonking
┃𔓘𝆯 ${prefix}joinrpg
┃𔓘𝆯 ${prefix}sellikan
┃𔓘𝆯 ${prefix}sellbesi
┃𔓘𝆯 ${prefix}sellemas
┃𔓘𝆯 ${prefix}jelajah
┃𔓘𝆯 ${prefix}mancing
┃𔓘𝆯 ${prefix}jualikan
┃𔓘𝆯 ${prefix}jualcoal
┃𔓘𝆯 ${prefix}lebur
┃𔓘𝆯 ${prefix}jualstone
┃𔓘𝆯 ${prefix}jualingot
┃𔓘𝆯 ${prefix}jualkayu
┃𔓘𝆯 ${prefix}nebang
┃𔓘𝆯 ${prefix}goplanet
┃𔓘𝆯 ${prefix}jualbahankimia${petik}
           ╲╱ 
𖣯*DOWNLOADS MENU*${petik}𖣯
┃𔓘𝆯 ${prefix}play
┃𔓘𝆯 ${prefix}ytmp3
┃𔓘𝆯 ${prefix}ytmp4
┃𔓘𝆯 ${prefix}instagram
┃𔓘𝆯 ${prefix}igphoto
┃𔓘𝆯 ${prefix}igvideo
┃𔓘𝆯 ${prefix}igreels
┃𔓘𝆯 ${prefix}tiktok
┃𔓘𝆯 ${prefix}tiktoknowm
┃𔓘𝆯 ${prefix}tiktokaudio
┃𔓘𝆯 ${prefix}mediafire
┃𔓘𝆯 ${prefix}gitclone${petik}
           ╲╱ 
𖣯*GROUP MENU*${petik}𖣯
┃𔓘𝆯 ${prefix}afk
┃𔓘𝆯 ${prefix}welcome
┃𔓘𝆯 ${prefix}left
┃𔓘𝆯 ${prefix}pppanjanggc
┃𔓘𝆯 ${prefix}setopen
┃𔓘𝆯 ${prefix}changesetopen
┃𔓘𝆯 ${prefix}delsetopen
┃𔓘𝆯 ${prefix}setclose
┃𔓘𝆯 ${prefix}changesetclose
┃𔓘𝆯 ${prefix}delsetclose
┃𔓘𝆯 ${prefix}setwelcome
┃𔓘𝆯 ${prefix}changewelcome
┃𔓘𝆯 ${prefix}delsetwelcome
┃𔓘𝆯 ${prefix}setleft
┃𔓘𝆯 ${prefix}changeleft
┃𔓘𝆯 ${prefix}delsetleft
┃𔓘𝆯 ${prefix}linkgc
┃𔓘𝆯 ${prefix}setppgc
┃𔓘𝆯 ${prefix}setppgc2 
┃𔓘𝆯 ${prefix}setnamegc
┃𔓘𝆯 ${prefix}setdesc
┃𔓘𝆯 ${prefix}antilink
┃𔓘𝆯 ${prefix}antiwame
┃𔓘𝆯 ${prefix}open
┃𔓘𝆯 ${prefix}close
┃𔓘𝆯 ${prefix}add
┃𔓘𝆯 ${prefix}kick
┃𔓘𝆯 ${prefix}promote
┃𔓘𝆯 ${prefix}demote
┃𔓘𝆯 ${prefix}revoke
┃𔓘𝆯 ${prefix}hidetag
┃𔓘𝆯 ${prefix}checksewa${petik}
         ╲╱ 
𖣯*GAME MENU*${petik}𖣯
┃𔓘𝆯 ${prefix}tictactoe
┃𔓘𝆯 ${prefix}delttt
┃𔓘𝆯 ${prefix}casino
┃𔓘𝆯 ${prefix}delcasino${petik}
         ╲╱ 
𖣯*SEARCH MENU*${petik}𖣯
┃𔓘𝆯 ${prefix}lirik
┃𔓘𝆯 ${prefix}grupwa
┃𔓘𝆯 ${prefix}pinterest
┃𔓘𝆯 ${prefix}ytsearch${petik}
         ╲╱ 
𖣯*RANDOM MENU*${petik}𖣯
┃𔓘𝆯 ${prefix}cecan
┃𔓘𝆯 ${prefix}cogan
┃𔓘𝆯 ${prefix}waifu${petik}
         ╲╱ 
𖣯*BALANCE MENU*${petik}𖣯
┃𔓘𝆯 ${prefix}topglobal
┃𔓘𝆯 ${prefix}toplocal
┃𔓘𝆯 ${prefix}buylimit
┃𔓘𝆯 ${prefix}buyglimit
┃𔓘𝆯 ${prefix}transfer
┃𔓘𝆯 ${prefix}limit
┃𔓘𝆯 ${prefix}balance${petik}
         ╲╱ 
𖣯*STORAGE*${petik}𖣯
┃𔓘𝆯 ${prefix}addstik
┃𔓘𝆯 ${prefix}addvn
┃𔓘𝆯 ${prefix}addimg
┃𔓘𝆯 ${prefix}addvid
┃𔓘𝆯 ${prefix}liststik
┃𔓘𝆯 ${prefix}listvn
┃𔓘𝆯 ${prefix}listimg
┃𔓘𝆯 ${prefix}listvid${petik}
         ╲╱ 
𖣯*BAILEYS*${petik}𖣯
┃𔓘𝆯 ${prefix}fitnah
┃𔓘𝆯 ${prefix}nowa
┃𔓘𝆯 ${prefix}getquoted
┃𔓘𝆯 ${prefix}fakehidetag
┃𔓘𝆯 ${prefix}react
┃𔓘𝆯 ${prefix}setcmd
┃𔓘𝆯 ${prefix}delcmd${petik}
          ╲╱ 
𖣯*OWNER MENU*${petik}𖣯
┃𔓘𝆯 ${prefix}autoread
┃𔓘𝆯 ${prefix}autobio
┃𔓘𝆯 ${prefix}antidelete
┃𔓘𝆯 ${prefix}antiviewonce
┃𔓘𝆯 ${prefix}autorespond
┃𔓘𝆯 ${prefix}anticall
┃𔓘𝆯 ${prefix}autoblok212
┃𔓘𝆯 ${prefix}join
┃𔓘𝆯 ${prefix}left
┃𔓘𝆯 ${prefix}self
┃𔓘𝆯 ${prefix}public
┃𔓘𝆯 ${prefix}setppbot2
┃𔓘𝆯 ${prefix}setppbot
┃𔓘𝆯 ${prefix}broadcast
┃𔓘𝆯 ${prefix}bcimg
┃𔓘𝆯 ${prefix}bcstik
┃𔓘𝆯 ${prefix}bcvn
┃𔓘𝆯 ${prefix}bcvideo
┃𔓘𝆯 ${prefix}bcsewa
┃𔓘𝆯 ${prefix}addpremium
┃𔓘𝆯 ${prefix}delpremium
┃𔓘𝆯 ${prefix}addsewa
┃𔓘𝆯 ${prefix}delsewa${petik}
           ╲╱ 
𖣯*ASUPAN MENU*${petik}𖣯
┃𔓘𝆯 ${prefix}chika
┃𔓘𝆯 ${prefix}delvira
┃𔓘𝆯 ${prefix}ayu
┃𔓘𝆯 ${prefix}bunga
┃𔓘𝆯 ${prefix}aura
┃𔓘𝆯 ${prefix}nisa
┃𔓘𝆯 ${prefix}ziva
┃𔓘𝆯 ${prefix}yana
┃𔓘𝆯 ${prefix}viona
┃𔓘𝆯 ${prefix}syania
┃𔓘𝆯 ${prefix}riri
┃𔓘𝆯 ${prefix}syifa
┃𔓘𝆯 ${prefix}mama_gina
┃𔓘𝆯 ${prefix}alcakenya
┃𔓘𝆯 ${prefix}mangayutri
┃𔓘𝆯 ${prefix}rikagusriani
┃𔓘𝆯 ${prefix}asupan
┃𔓘𝆯 ${prefix}bocil
┃𔓘𝆯 ${prefix}geayubi
┃𔓘𝆯 ${prefix}santuy
┃𔓘𝆯 ${prefix}ukhty
┃𔓘𝆯 ${prefix}syifa${petik}
           ╲╱ 
𖣯*NSFW MENU*${petik}𖣯
┃𔓘𝆯 ${prefix}baka
┃𔓘𝆯 ${prefix}smug
┃𔓘𝆯 ${prefix}neko_sfw
┃𔓘𝆯 ${prefix}hentai_gif
┃𔓘𝆯 ${prefix}spank
┃𔓘𝆯 ${prefix}blowjob
┃𔓘𝆯 ${prefix}cumarts
┃𔓘𝆯 ${prefix}eroyuri
┃𔓘𝆯 ${prefix}eroneko
┃𔓘𝆯 ${prefix}erokemonomimi
┃𔓘𝆯 ${prefix}erokitsune
┃𔓘𝆯 ${prefix}ero
┃𔓘𝆯 ${prefix}feet
┃𔓘𝆯 ${prefix}erofeet
┃𔓘𝆯 ${prefix}feetgif
┃𔓘𝆯 ${prefix}femdom
┃𔓘𝆯 ${prefix}futanari
┃𔓘𝆯 ${prefix}hentai
┃𔓘𝆯 ${prefix}holoero
┃𔓘𝆯 ${prefix}holo
┃𔓘𝆯 ${prefix}keta
┃𔓘𝆯 ${prefix}kitsune
┃𔓘𝆯 ${prefix}kemonomimi
┃𔓘𝆯 ${prefix}pussyart
┃𔓘𝆯 ${prefix}pussywankgif
┃𔓘𝆯 ${prefix}girl_solo
┃𔓘𝆯 ${prefix}girl_solo_gif
┃𔓘𝆯 ${prefix}tits
┃𔓘𝆯 ${prefix}trap
┃𔓘𝆯 ${prefix}yuri
┃𔓘𝆯 ${prefix}avatar2
┃𔓘𝆯 ${prefix}anal
┃𔓘𝆯 ${prefix}bj
┃𔓘𝆯 ${prefix}boobs
┃𔓘𝆯 ${prefix}classic
┃𔓘𝆯 ${prefix}cumsluts
┃𔓘𝆯 ${prefix}kuni
┃𔓘𝆯 ${prefix}lesbian
┃𔓘𝆯 ${prefix}neko
┃𔓘𝆯 ${prefix}neko_gif
┃𔓘𝆯 ${prefix}ahegao
┃𔓘𝆯 ${prefix}bdsm
┃𔓘𝆯 ${prefix}cuckold
┃𔓘𝆯 ${prefix}cum
┃𔓘𝆯 ${prefix}foot
┃𔓘𝆯 ${prefix}gangbang
┃𔓘𝆯 ${prefix}glasses
┃𔓘𝆯 ${prefix}jahy
┃𔓘𝆯 ${prefix}masturbation
┃𔓘𝆯 ${prefix}nsfw_neko
┃𔓘𝆯 ${prefix}orgy
┃𔓘𝆯 ${prefix}panties
┃𔓘𝆯 ${prefix}tentacles
┃𔓘𝆯 ${prefix}thighs
┃𔓘𝆯 ${prefix}zettai${petik}
              ╲╱ 
𓍯━━━══𖣯*TEXTPRO MENU*${petik}𖣯══━━━𖢨
┃𔓘𝆯 ${prefix}halloween2
┃𔓘𝆯 ${prefix}horror
┃𔓘𝆯 ${prefix}game8bit
┃𔓘𝆯 ${prefix}layered
┃𔓘𝆯 ${prefix}glitch2
┃𔓘𝆯 ${prefix}coolg
┃𔓘𝆯 ${prefix}coolwg
┃𔓘𝆯 ${prefix}realistic
┃𔓘𝆯 ${prefix}space3d
┃𔓘𝆯 ${prefix}gtiktok
┃𔓘𝆯 ${prefix}stone
┃𔓘𝆯 ${prefix}marvel
┃𔓘𝆯 ${prefix}marvel2
┃𔓘𝆯 ${prefix}pornhub
┃𔓘𝆯 ${prefix}avengers
┃𔓘𝆯 ${prefix}metalr
┃𔓘𝆯 ${prefix}metalg
┃𔓘𝆯 ${prefix}metalg2
┃𔓘𝆯 ${prefix}halloween2
┃𔓘𝆯 ${prefix}lion
┃𔓘𝆯 ${prefix}wolf_bw
┃𔓘𝆯 ${prefix}wolf_g
┃𔓘𝆯 ${prefix}ninja
┃𔓘𝆯 ${prefix}3dsteel
┃𔓘𝆯 ${prefix}horror2
┃𔓘𝆯 ${prefix}lava
┃𔓘𝆯 ${prefix}bagel
┃𔓘𝆯 ${prefix}blackpink
┃𔓘𝆯 ${prefix}rainbow2
┃𔓘𝆯 ${prefix}water_pipe
┃𔓘𝆯 ${prefix}halloween
┃𔓘𝆯 ${prefix}sketch
┃𔓘𝆯 ${prefix}sircuit
┃𔓘𝆯 ${prefix}discovery
┃𔓘𝆯 ${prefix}metallic2
┃𔓘𝆯 ${prefix}fiction
┃𔓘𝆯 ${prefix}demon
┃𔓘𝆯 ${prefix}transformer
┃𔓘𝆯 ${prefix}berry
┃𔓘𝆯 ${prefix}thunder
┃𔓘𝆯 ${prefix}magma
┃𔓘𝆯 ${prefix}3dstone
┃𔓘𝆯 ${prefix}neon
┃𔓘𝆯 ${prefix}glitch
┃𔓘𝆯 ${prefix}harry_potter
┃𔓘𝆯 ${prefix}embossed
┃𔓘𝆯 ${prefix}broken
┃𔓘𝆯 ${prefix}papercut
┃𔓘𝆯 ${prefix}gradient
┃𔓘𝆯 ${prefix}glossy
┃𔓘𝆯 ${prefix}watercolor
┃𔓘𝆯 ${prefix}multicolor
┃𔓘𝆯 ${prefix}neon_devil
┃𔓘𝆯 ${prefix}underwater
┃𔓘𝆯 ${prefix}bear
┃𔓘𝆯 ${prefix}wonderfulg
┃𔓘𝆯 ${prefix}christmas
┃𔓘𝆯 ${prefix}neon_light
┃𔓘𝆯 ${prefix}snow
┃𔓘𝆯 ${prefix}cloudsky
┃𔓘𝆯 ${prefix}luxury2
┃𔓘𝆯 ${prefix}gradient2
┃𔓘𝆯 ${prefix}summer
┃𔓘𝆯 ${prefix}writing
┃𔓘𝆯 ${prefix}engraved
┃𔓘𝆯 ${prefix}summery
┃𔓘𝆯 ${prefix}3dglue
┃𔓘𝆯 ${prefix}metaldark
┃𔓘𝆯 ${prefix}neonlight
┃𔓘𝆯 ${prefix}oscar
┃𔓘𝆯 ${prefix}minion
┃𔓘𝆯 ${prefix}holographic
┃𔓘𝆯 ${prefix}purple
┃𔓘𝆯 ${prefix}glossyb
┃𔓘𝆯 ${prefix}deluxe2
┃𔓘𝆯 ${prefix}glossyc
┃𔓘𝆯 ${prefix}fabric
┃𔓘𝆯 ${prefix}neonc
┃𔓘𝆯 ${prefix}newyear
┃𔓘𝆯 ${prefix}newyear2
┃𔓘𝆯 ${prefix}metals
┃𔓘𝆯 ${prefix}xmas
┃𔓘𝆯 ${prefix}blood
┃𔓘𝆯 ${prefix}darkg
┃𔓘𝆯 ${prefix}joker
┃𔓘𝆯 ${prefix}wicker
┃𔓘𝆯 ${prefix}natural
┃𔓘𝆯 ${prefix}firework
┃𔓘𝆯 ${prefix}skeleton
┃𔓘𝆯 ${prefix}balloon
┃𔓘𝆯 ${prefix}balloon2
┃𔓘𝆯 ${prefix}balloon3
┃𔓘𝆯 ${prefix}balloon4
┃𔓘𝆯 ${prefix}balloon5
┃𔓘𝆯 ${prefix}balloon6
┃𔓘𝆯 ${prefix}balloon7
┃𔓘𝆯 ${prefix}steel
┃𔓘𝆯 ${prefix}gloss
┃𔓘𝆯 ${prefix}denim
┃𔓘𝆯 ${prefix}decorate
┃𔓘𝆯 ${prefix}decorate2
┃𔓘𝆯 ${prefix}peridot
┃𔓘𝆯 ${prefix}rock
┃𔓘𝆯 ${prefix}glass
┃𔓘𝆯 ${prefix}glass2
┃𔓘𝆯 ${prefix}glass3
┃𔓘𝆯 ${prefix}glass4
┃𔓘𝆯 ${prefix}glass5
┃𔓘𝆯 ${prefix}glass6
┃𔓘𝆯 ${prefix}glass7
┃𔓘𝆯 ${prefix}glass8
┃𔓘𝆯 ${prefix}captain_as2
┃𔓘𝆯 ${prefix}robot
┃𔓘𝆯 ${prefix}equalizer
┃𔓘𝆯 ${prefix}toxic
┃𔓘𝆯 ${prefix}sparkling
┃𔓘𝆯 ${prefix}sparkling2
┃𔓘𝆯 ${prefix}sparkling3
┃𔓘𝆯 ${prefix}sparkling4
┃𔓘𝆯 ${prefix}sparkling5
┃𔓘𝆯 ${prefix}sparkling6
┃𔓘𝆯 ${prefix}sparkling7
┃𔓘𝆯 ${prefix}decorative
┃𔓘𝆯 ${prefix}chocolate
┃𔓘𝆯 ${prefix}strawberry
┃𔓘𝆯 ${prefix}koifish
┃𔓘𝆯 ${prefix}bread
┃𔓘𝆯 ${prefix}matrix
┃𔓘𝆯 ${prefix}blood2
┃𔓘𝆯 ${prefix}neonligth2
┃𔓘𝆯 ${prefix}thunder2
┃𔓘𝆯 ${prefix}3dbox
┃𔓘𝆯 ${prefix}neon2
┃𔓘𝆯 ${prefix}roadw
┃𔓘𝆯 ${prefix}bokeh
┃𔓘𝆯 ${prefix}gneon
┃𔓘𝆯 ${prefix}advanced
┃𔓘𝆯 ${prefix}dropwater
┃𔓘𝆯 ${prefix}wall
┃𔓘𝆯 ${prefix}chrismast
┃𔓘𝆯 ${prefix}honey
┃𔓘𝆯 ${prefix}drug
┃𔓘𝆯 ${prefix}marble
┃𔓘𝆯 ${prefix}marble2
┃𔓘𝆯 ${prefix}ice
┃𔓘𝆯 ${prefix}juice
┃𔓘𝆯 ${prefix}rusty
┃𔓘𝆯 ${prefix}abstra
┃𔓘𝆯 ${prefix}biscuit
┃𔓘𝆯 ${prefix}wood
┃𔓘𝆯 ${prefix}scifi
┃𔓘𝆯 ${prefix}metalr
┃𔓘𝆯 ${prefix}purpleg
┃𔓘𝆯 ${prefix}shiny 
┃𔓘𝆯 ${prefix}jewelry
┃𔓘𝆯 ${prefix}jewelry2
┃𔓘𝆯 ${prefix}jewelry3
┃𔓘𝆯 ${prefix}jewelry4
┃𔓘𝆯 ${prefix}jewelry5
┃𔓘𝆯 ${prefix}jewelry6
┃𔓘𝆯 ${prefix}jewelry7
┃𔓘𝆯 ${prefix}jewelry8
┃𔓘𝆯 ${prefix}metalh
┃𔓘𝆯 ${prefix}golden
┃𔓘𝆯 ${prefix}glitter
┃𔓘𝆯 ${prefix}glitter2
┃𔓘𝆯 ${prefix}glitter3
┃𔓘𝆯 ${prefix}glitter4
┃𔓘𝆯 ${prefix}glitter5
┃𔓘𝆯 ${prefix}glitter6
┃𔓘𝆯 ${prefix}glitter7
┃𔓘𝆯 ${prefix}metale
┃𔓘𝆯 ${prefix}carbon
┃𔓘𝆯 ${prefix}candy
┃𔓘𝆯 ${prefix}metalb
┃𔓘𝆯 ${prefix}gemb
┃𔓘𝆯 ${prefix}3dchrome
┃𔓘𝆯 ${prefix}metalb2
┃𔓘𝆯 ${prefix}metalg
┃𔓘𝆯 ${prefix}metalg${petik}
╰───────────────────➜
`
}

exports.donate = (pushname, ownerNumber) => {
    return`Contact  Owner:
wa.me/${ownerNumber} (Owner)`
}

exports.sewanya = `Subscribe My YouTube Channel And Use Bot: https://youtube.com/@Asif-king`