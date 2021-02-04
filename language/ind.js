exports.wait = () => {
	return`*「 WAIT 」 SEDANG PROSES*`
}

exports.succes = () => {
	return`*「 SUCCES 」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar yXu|17*`
}

exports.rediregis = () => {
	return`*「 SUDAH DAFTAR 」*\n\n*kamu sudah terdaftar di yXu BOT*`
}

exports.stikga = () => {
	return`*yah gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*maaf link tidak valid*`
}

exports.groupo = () => {
	return`*「GROUP ONLY」*`
}

exports.ownerb = () => {
	return`*「OWNER BOT ONLY」*`
}

exports.ownerg = () => {
	return`*「OWNER GROUP ONLY」*`
}

exports.admin = () => {
	return`*「ADMIN GROUP ONLY」*`
}

exports.badmin = () => {
	return`*「BOT HARUS JADI ADMIN」*`
}

exports.nsfwoff = () => {
	return`*NSFW GAK AKTIF*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`*format salah/text kosong*`
}

exports.clears = () => {
	return`*clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`╭──── *「 DATA NEGARA 」* ────\n├ ◩ Nama\n├ ◩ ${namaUser}\n│\n├ ◩ Nomer\n├ ◩ wa.me/${sender.split("@")[0]}\n│\n├ ◩ Umur\n├ ◩ ${umurUser}\n│\n├ ◩ Waktu pendaftaran\n├ ◩ ${time}\n│\n├ ◩ *NS*\n├ ◩ ${serialUser}\n├ ◩ *NOTE* :\n│ Anda sudah terdaftar di yXu BOT\n╰──── *「 DATA NEGARA 」* ────`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role) => { 
	return `
╭────[ 𝗔𝗕𝗢𝗨𝗧 𝗨𝗦𝗘𝗥 ]────
├ ◩ *Nama* : ${pushname}
├ ◩ *Nomer* : wa.me/${sender.split("@")[0]}
├ ◩ *Uang mu* : Rp${uangku}
├ ◩ *XP* : ${getLevelingXp(sender)}/${reqXp}  
├ ◩ *Role* : ${role} 
├ ◩ *Level* : ${getLevelingLevel(sender)}
├ ◩ *User register* : ${_registered.length}
╰──────[ 𝙮𝙓𝙪 𝘽𝙊𝙏 ]──────

╭────[ 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 ]────
├ ◩ *Name* : 𝙮𝙓𝙪 𝘽𝙊𝙏
├ ◩ *Owner* : *_Wahyuu AR_*
├ ◩ *Prefix* : [ ${prefix} ]
├ ◩ *Instagram* : *_yuu_fck18_*
╰────[ 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 ]────    

◩ *M A K E R   M E N U*
├ ${prefix}sticker *_sendpict/reply_*
├ ${prefix}gif *_sendvid/reply_*
├ ${prefix}toimg *_reply sticker_*
├ ${prefix}ttp *_text_*
├ ${prefix}avengers *_text|text_*
├ ${prefix}summer *_text_*
├ ${prefix}sandwrite *_text_*
├ ${prefix}metaldark *_text_*
├ ${prefix}dropwater *_text_*
├ ${prefix}greenneon *_text_*
├ ${prefix}neontext *_text_*
├ ${prefix}sumery *_text_*
├ ${prefix}blood *_text_*
├ ${prefix}firework *_text_*
├ ${prefix}lava *_text_*
├ ${prefix}qrcode *_text_*
├ ${prefix}ninjalogo *_text_*
├ ${prefix}glitch *_text_*
├ ${prefix}wolflogo *_text_*
├ ${prefix}lionlogo *_text_*
╰ ${prefix}jokerlogo *_text_*
    
◩ *M E D I A   M E N U*
├ ${prefix}toxic 
├ ${prefix}quotes 
├ ${prefix}beritahoax 
├ ${prefix}brainly *_[ EROR ]_*
├ ${prefix}pinterest *_judul_*
├ ${prefix}tiktok *_link_*
├ ${prefix}resepmasakan *_text_*
├ ${prefix}igstalk *_username_*
├ ${prefix}tiktokstalk *_username_*
├ ${prefix}bitly *_link_*
├ ${prefix}infonomor *_nomor_*
├ ${prefix}lirik *_judul_*
├ ${prefix}chorg *_judul_*
╰ ${prefix}tts *_<lang> <text>_*
           
◩ *F U N   M E N U*
├ ${prefix}mining 
├ ${prefix}bisakah *_text_*
├ ${prefix}kapankah *_text_*
├ ${prefix}apakah *_text_*
├ ${prefix}rate *_text_*
├ ${prefix}slap 
├ ${prefix}tampar 
├ ${prefix}moddroid *_NameApk_*
├ ${prefix}happymod *_NameApk_*
├ ${prefix}nangis 
├ ${prefix}cium 
╰ ${prefix}peluk 
      
◩ *M U T U A L*
├${prefix}mutual 
╰ ${prefix}next 
 
◩ *D O W N L O A D*
├ ${prefix}ytmp3 *_link_*
├ ${prefix}ytmp4 *_link_*
╰ ${prefix}joox *_judul_*
 
◩ *N S F W   M E N U*
├ ${prefix}pokemon
├ ${prefix}anjing
├ ${prefix}blowjob
├ ${prefix}nekonime   
├ ${prefix}kpop
├ ${prefix}husbu
├ ${prefix}shota
╰ ${prefix}ranime
            
◩ *G R U O P   M E N U*
├  ${prefix}hidetag *_text_*
├  ${prefix}tagall *_text_*
├  ${prefix}grouplist 
├  ${prefix}level 
├  ${prefix}linkgc
├  ${prefix}setpp *_sendpict/reply_*
├  ${prefix}add *_tag_*
├  ${prefix}kick *_tag_*
├  ${prefix}setname *_text_*
├   ${prefix}setdesc *_text_*
├  ${prefix}demote *_tag_*
├  ${prefix}promote *_tag_*
├  ${prefix}listadmin 
├  ${prefix}group *_[ buka/tutup ]_*
├  ${prefix}leveling *_[ enable/disable ]_*
├  ${prefix}nsfw *_[ 1/0 ]_*
├  ${prefix}simih *_[ 1/0 ]_*
╰  ${prefix}welcome *_[ 1/0 ]_*
     
◩ *O W N E R   M E N U*
├  ${prefix}bc *_text_*
├  ${prefix}bcgc *_text_*
├  ${prefix}kickall
├  ${prefix}setreply *_text_*
├  ${prefix}setprefix *_symbol_*
├  ${prefix}clearall
├  ${prefix}block *_tag_*
├  ${prefix}unblock *_tag_*
├  ${prefix}leave 
├  ${prefix}event *_[ 1/0 ]_*
├  ${prefix}clone *_tag_*
╰  ${prefix}setppbot *_sendpict/reply_*
     
◩ *L I M I T*
├  ${prefix}limit
├  ${prefix}buylimit *_jumlah_*
├  ${prefix}transfer *_<tag> <jumlah>_*
╰  ${prefix}dompet

𝑵𝑶𝑻𝑬 : 
    *_Dont spam and call_*
    *_Langar??_*
    *BLOCK*
    *Sekalian follow ig aing :D*
    *_https://Instagram.com/yuu_fck18_* 
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
╭──── *[ SELAMAT ]* ────
├ ◩ *Nama* : ${pushname}
├ ◩ *Nomer* : wa.me/${sender.split("@")[0]}
├ ◩ *Xp* : ${getLevelingXp(sender)}
├ ◩ *Limit* = +3
├ ◩ *Role* :  ${role}
├ ◩ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
├ ◩ *Congrats*🎉😙
╰──── *[ SELAMAT ]* ────   
`}
 
exports.limitend = (pushname) => {
	return`*maaf ${pushname} limit hari ini habis*\n*beli limit untuk mendapatkan limit/ naik level*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
├ ◩ sisa limit anda : ${limitCounts}\n├ ◩ NOTE : untuk mendapatkan limit. bisa lewat naik level atau buylimit`
}

exports.satukos = () => {
	return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`╭────[ *ATM* ]────\n├ ◩ *Nama* : ${pushname}\n├ ◩ *Nomer* : ${sender.split("@")[0]}\n├ ◩ *Uang* : ${uangkau}\n╰────[ *ATM* ]────`
}