const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "reaction",
  version: "1.0.4",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 6,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);
  var tl = ["YES ❤️🥰 ", "CAN I HAVE SOME SLEEP ❤️😒 ", "YOUR BOT ❤️🥰 ", "عطيني نبوس ❤️🥰 ", "you bitch ❤️🥰 ", "YES SISTER ❤️🥰 ", "وي سلعة❤️🥰 ", " yeah ❤️ ", "WANNA SOME COFFEE  ☕❓", "خطي نمي وش خصك😐  ", "IM THE KING HERE 😎", "I FEEL LONELY 😞 " ,"مدا تريد ❤️🥰 " ,"YES BRO❤️" ,"روح قود😾" ,"مكش صحبي مدصرنيش🥱" ,"insta:1vqzo   😻", "تعال احضنك اشبعك حنان 😽", " Arwah prv 😻", "هات بوسة 😾", "Nooood 9awd😡", "اخطيني اودي 🙁" ,"Nn dzl ","الوان تع ثبي متهدرش معاي 😳", "snap:vqzo.1😍","هدا نيفك 😳 بلعقل تجبدنا صحبي 😳","kiss me slowly 🫦","بالعود منثوشيكش 🤢","Oui🙃","هات نبمر يا عنبر 😻","yedk fih🥰","هاك روح اشري بوكسور يالفايح😳","Nta Chikor ga3 hna😽","شوفو خاوتي كفاه ينبح 😳","Cv zin😩","قول اسد 😳","roh mdrsch 😾","تديه ملوي😩","pst 3ndk insta😩","ديجا هدرنا شوي دصرتني 🙂","follow me insta:1vqzo😽","رقصيلي وحركيها 😍","nta lizom😻","عييت في بلاصتك ونتا تنبح😡","twarkili😻","تروح معاي نشريلك فلاش😻","your Boobs 😻","تاكلو هنا ولا تديه معاك😽","mwaah😽","هاك ديميل روح اتنقى يالفايح🤢","I saw you in porn hub😳","زيد انبح شوية دك نعطيك تبوسو 😽","kiss my dick😩","المطور  𝐅𝐁 𝐋𝐈𝐍𝐊 :m.me/100057102592010","هاك بوسة محححح😻","say /owner","البوت عايز ينام😩","sleep with me😻🫦","نباحك طرب 😎","manakhadmouch L7alaba🙃","تبهدل بانتلك روحك كيوت 🤢","arawh nbi3lk string b 5 alf 😩","ديرلي بييا🥹","you little bitch😎","داير(ة) كي ديشي تع لختانة 😹","bot chikork😾","انبح بلعقل دك ينوضو الجيران😺","شحال عندك فلطاي😻","صيي فهمنا بلي انا شيكورك🙁","دصرتني صيي قلعت ديجا 😾","زيد شوي دك نديها فيك😹","انا عاقل🥺","متقليش بوت قلي شيكوري😩","متزوج دزل💔","Aji 3ndi😻","نتا بالبوس برك نطيحك😻","فليكسيلي💔","شبيك زين😻","هاك بوس يدي🚶","سلفلي وجهك ندير بيه اكسيدو🚶","كرشيت فيك 😽","نط بريفي نديرو حاجة😽","قولهم وش درتلك 😽","kiss1 or slap1? 😻","محكيتلكمش بلي هدا كلب تعي؟😳","علبالي حاب تبوس يدي زيد صبر شوي😽","اعع بانتلك روحك شابة🤢","ڨهمتني دك منزيدش ناكل🤢","شحال في عمرك زين😻","اسكت طننت عليك 😽","تنبح غاية صحبي😳","الكلب ينبح ميقولش بوت بوت🙃","هاك بوسو 🥰","ريحة التراب رهي تطلع مع لهدرة تعك🤢","شحال ليلة🥰","وجهك صحيح تع بريكولاج الله يبارك😺","كون نقولك حمار الحمار يزعف😾","رني حلبتك صيي تحقق الحلم تعك🚶","تحب لي يرخسك ياك😾","خلنا ارجع كمل وحوحلي فالبريفي😾","حاب داصرني بالسيف🤨","نوض قود🤢","شبعتنا مقروط معسل ڨهمتنا🤢","اهبط بوسو😻","وي عمري😺","نقلهم بلي كنت تنبحلي فالبريفي😳","هاك ترضع وسكتنا 😎","فيك لي غاڨل اعع🤢","نن دزل نوجعك😻","شبيك راك قريب تعبدني😐","نعيف حتى نحطو فيك😾","هاك بوس رجلي🚶","وحوحلي 😩","نط بريفي نعطيهولك😩","قول تيزي وزو🙁","صحا كلبي😳","فعلت فيك ومخلصتكش😳","غامل هات يدك ارواح معنا ل2024🚶","علبالهم بلي تنبحلي فلبريفي🚶؟","هيا اليد فاليد ونحكوهالو😳","تنابح تنابح🚶","حكها علبالي جاتك تع الليل🥕","تغيض باين جيت لدنيا غلطة😩","زيد نبح شوية ونخلصك 😩","نتا تع بوس مشي تع موس 😺","مدود(ة) رح تتنقى🙁","نت تع كف وبزاق 😩","احشم مشي حتى نرخسك🙁","انستا المطور insta:1vqzo😩","وجه الركبة تفوو😾","كن نبدا نهدر نبكيك🚶","حاب تولي صحبي بالسيف؟🤠","سكتنا يزيدو يقولو راك صحبي🙈","الغبار راه يطلع مع لهدرة تعك 🧍","معليش تروح تقود؟😵","علبالك جيت نتا كوبيتلي ضحكة 🧍","ڨهمتنا نوض قود 🤒","علبالهم بلي كنت تقلي شيكوري فالبريفي؟🙈","تقعد غي نتي منثوشيكش🧍","تغيض يالغامل(ة) هات يدك نجبدك من الغرقة🧍","رني نساعف فيك بسك رفق بالحيوان واجب🙈","صيي مدصرنيش يزيدو يقولو راك صحبي😀","اعععع شبعتنا غمالة😣","توحشت كي كنت نعطيك تلحس😻","اييي ياحسراا فكرتني كي كنت نديك تحت النخل نلعبو😫","نوجعك انا مدصرنيش😀","حاب نشريك شحال عطاو فيك😺","انبحلي ونخلصك😫","سخنت؟ حكيها😺","ايماجيني انا بوت ونرخس فيك تغيض علبالك🚶","حكها برك ني حاس بيك😺","بوس يد شيكورك🫳","وجهك صحيح علبالك نحتاجو عندي بريكول خفيف 😻","ارواح نديرو حاجة شابة شوف انا نبزق فيك ونتا قول شيكوري😻","نبغيييييييييييييييييك😻","نقصر معاك كلبي😻","زعفت مني💔☹️","متقودليش الله يرضى عليك😀","ريحتي شوية من ترمتك؟😀","سقسيني وش بقى 😀","نط بريفي😻","Aji 3ndi Nboos😻","kiss me 😻"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if ((event.body.toLowerCase() == "تهلاو") || (event.body.toLowerCase() == "باي")) {
     return api.sendMessage("️نلتقي لاحقا 🥰", threadID, messageID);
   };
  
  if ((event.body.toLowerCase() == "وش بقى") || (event.body.toLowerCase() == "وش بقا")) {
     return api.sendMessage("️بقى الزب 😻", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "يو") || (event.body.toLowerCase() == "اهلا")) {
     return api.sendMessage("❤️اهلا 🥰", threadID);
   };
  if ((event.body.toLowerCase() == "تيزي وزو") || (event.body.toLowerCase() == "تيزي وزو")) {
     return api.sendMessage("فيك ندزو😂", threadID);
   };
  if ((event.body.toLowerCase() == "kiss1") || (event.body.toLowerCase() == "slap1")) {
     return api.sendMessage("تفووو دصارة تع نمي😾", threadID);
   };
  
  if ((event.body.toLowerCase() == "اسد") || (event.body.toLowerCase() == "أسد")) {
     return api.sendMessage("تاكل حبة اسد 😩", threadID);
   };

  if ((event.body.toLowerCase() == "بوت نقش") || (event.body.toLowerCase() == "bot na9ch")) {
     return api.sendMessage("مكش نقش منك لهيه😀", threadID);
   };

  if ((event.body.toLowerCase() == "صباح الخير") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("❤️صباح النور ", threadID);
   };
  
   if ((event.body.toLowerCase() == " انستا") || (event.body.toLowerCase() == "instaا")) {
     return api.sendMessage("انستا المطور (1vqzo)", threadID);                            
   };
  
 if ((event.body.toLowerCase() == " بوت كيراك") || (event.body.toLowerCase() == "بوت صفا")) {
     return api.sendMessage("حمدلله", threadID);                            
   };

  if ((event.body.toLowerCase() == "ميكسا قحبة") || (event.body.toLowerCase() == "ميكاسا قحبة")) {
     return api.sendMessage("متفرقش بين يماك وميكاسا 😾", threadID);                            
   };

  if ((event.body.toLowerCase() == "بوت نحبك") || (event.body.toLowerCase() == "نحبك بوت")) {
     return api.sendMessage("مام انا نحبك 😻", threadID);
   };

  if ((event.body.toLowerCase() == "هند") || (event.body.toLowerCase() == "hind")) {
     return api.sendMessage("هند مرتي 😾", threadID);
   }; 
   

  if ((event.body.toLowerCase() == "بوت نكمك") || (event.body.toLowerCase() == "bot nikmok")) {
     return api.sendMessage("انا اوموا نعرف يما شوف نتا🧍", threadID);
   };

  
   if ((event.body.toLowerCase() == "الوداد") || (event.body.toLowerCase() == "وداد")) {
     return api.sendMessage("كاع الجراد ولاد القحاب", threadID);
   };

  
   if ((event.body.toLowerCase() == "تصبحو على خير") || (event.body.toLowerCase() == "Good night")) {
     return api.sendMessage("و انت من اهلو ❤️", threadID);
   };

  
   if ((event.body.toLowerCase() == "🥕") || (event.body.toLowerCase() == "🥕🥕")) {
     return api.sendMessage("اشتم رائحة دنيا سطايفية🙄", threadID);
   };


  if ((event.body.toLowerCase() == "🫦") || (event.body.toLowerCase() == "🫦🫦")) {
     return api.sendMessage("شواربك ازين😻", threadID);
   };

  if ((event.body.toLowerCase() == "💔") || (event.body.toLowerCase() == "💔💔")) {
     return api.sendMessage("هاك سكوتش ازين 🩹", threadID);
   };

  
   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "😒😒")) {
     return api.sendMessage(" ابتهج انت هنا للمرح🥺", threadID);
   };
  
  if ((event.body.toLowerCase() == "😹") || (event.body.toLowerCase() == "😹😹")) {
     return api.sendMessage("تضحكي اقحبة 😻", threadID);
   };

   if ((event.body.toLowerCase() == "Moha") || (event.body.toLowerCase() == "موحا")) {
     return api.sendMessage("نعم صديقي ❤️ ", threadID);
   };
   mess = "{name}"
  
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("بوت") == 0)) {
    var msg = {
      body: `${name}... ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }