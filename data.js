// AncaÇeviri — 2026-03-09 10:07
const DATA = {
  "siteTitle": "ANCAÇEVİRİ",
  "siteDesc": "Çeviri değil, yerelleştirme yapıyoruz.",
  "heroTitle": "Bu oyunları anca çevirebildik.",
  "heroBg": "https://i.imgur.com/JQIY48k.jpeg",
  "about": "AncaÇeviri gönüllü bir çeviri topluluğudur.",
  "password": "admin123",
  "roles": [
    "Çevirmen",
    "Editör",
    "Kalite Kontrol",
    "Grafiker",
    "Programcı",
    "Genel",
    "Site Yönetimi",
    "Genel Koordinasyon",
    "Teşekkürler",
    "Proje Lideri"
  ],
  "games": [
    {
      "id": "xenogears-mmiry3c9",
      "title": "Xenogears",
      "image": "https://cdn.mobygames.com/covers/2583963-xenogears-playstation-front-cover.jpg",
      "details": "Xenogears, JRPG türünün zirve noktalarından biri olarak kabul edilen, felsefe ve psikolojiyi bilimkurguyla harmanlayan kült bir yapımdır. Hikâye, hafızasını kaybetmiş genç bir ressam olan Fei Fong Wong’un, devasa bir yıkımın ardından kendi geçmişini ve insanlığın kökenlerini sorguladığı epik bir yolculuğu konu alır.",
      "translationDetails": "Yerelleştirme çalışması 'Perfect World Build' referans alınarak yapılmıştır.",
      "completion": 0,
      "status": "Devam Ediyor",
      "lastUpdate": "2026-03-09",
      "downloadLink": "",
      "downloads": 0,
      "installGuide": "",
      "screenshots": [],
      "contributors": [
        {
          "memberId": "xoluos-mmirxen9",
          "gameRoles": [
            "Proje Lideri",
            "Çevirmen",
            "Editör"
          ],
          "gameRole": "Proje Lideri"
        },
        {
          "memberId": "mete-karace-vacir-mmirvumd",
          "gameRoles": [
            "Teşekkürler"
          ],
          "gameRole": "Teşekkürler"
        },
        {
          "memberId": "bendisdsgn-mmis2kkq",
          "gameRoles": [
            "Çevirmen",
            "Editör"
          ],
          "gameRole": "Çevirmen"
        },
        {
          "memberId": "order6-mmis30ms",
          "gameRoles": [
            "Çevirmen"
          ],
          "gameRole": "Çevirmen"
        },
        {
          "memberId": "anil-mmis3cle",
          "gameRoles": [
            "Kalite Kontrol"
          ],
          "gameRole": "Kalite Kontrol"
        }
      ]
    },
    {
      "id": "princess-maker-2-refine-mmiu9i60",
      "title": "Princess Maker 2 Refine",
      "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/523000/capsule_616x353.jpg?t=1728354404",
      "details": "Princess Maker 2 Refine, klasik yaşam simülasyonu türünün en köklü ve sevilen örneklerinden biri olan orijinal yapımın, modernize edilmiş grafiklerle yeniden karşımıza çıkan halidir. Gökyüzünden sana emanet edilen bir kızı, 10 yaşından 18 yaşına kadar eğitmek, büyütmek ve geleceğini şekillendirmek tamamen senin ellerinde.",
      "translationDetails": "",
      "completion": 0,
      "status": "Devam Ediyor",
      "lastUpdate": "2026-03-09",
      "downloadLink": "",
      "downloads": 0,
      "installGuide": "",
      "screenshots": [],
      "contributors": [
        {
          "memberId": "mete-karace-vacir-mmirvumd",
          "gameRoles": [
            "Proje Lideri",
            "Çevirmen",
            "Editör"
          ],
          "gameRole": "Proje Lideri"
        }
      ]
    }
  ],
  "team": [
    {
      "id": "mete-karace-vacir-mmirvumd",
      "name": "Mete Karace ~ Vacir",
      "photo": "",
      "role": "Genel",
      "roles": [
        "Genel",
        "Çevirmen",
        "Site Yönetimi"
      ],
      "tasks": ""
    },
    {
      "id": "xoluos-mmirxen9",
      "name": "Xoluos",
      "photo": "",
      "role": "Çevirmen",
      "roles": [
        "Çevirmen",
        "Editör",
        "Genel",
        "Genel Koordinasyon"
      ],
      "tasks": ""
    },
    {
      "id": "bendisdsgn-mmis2kkq",
      "name": "bendisdsgn",
      "photo": "",
      "role": "Çevirmen",
      "roles": [
        "Çevirmen",
        "Editör",
        "Genel"
      ],
      "tasks": ""
    },
    {
      "id": "order6-mmis30ms",
      "name": "order6",
      "photo": "",
      "role": "Çevirmen",
      "roles": [
        "Çevirmen"
      ],
      "tasks": ""
    },
    {
      "id": "anil-mmis3cle",
      "name": "Anıl",
      "photo": "",
      "role": "Kalite Kontrol",
      "roles": [
        "Kalite Kontrol"
      ],
      "tasks": ""
    }
  ]
};

const dataManager = {
  getData:()=>DATA, getSiteTitle:()=>DATA.siteTitle, getGames:()=>DATA.games,
  getGame:(id)=>DATA.games.find(g=>g.id===id), getTeam:()=>DATA.team,
  getMember:(id)=>DATA.team.find(m=>m.id===id), getRoles:()=>DATA.roles||[],
  getAbout:()=>DATA.about, login:(pw)=>pw===DATA.password
};
