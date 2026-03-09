// AncaÇeviri — 2026-03-09 09:07
const DATA = {
  "siteTitle": "ANCAÇEVİRİ",
  "siteDesc": "Efsanevi oyunları en kaliteli Türkçe çevirilerle oynamak için doğru yerdesin.",
  "heroTitle": "Oyunlar Artık Bizim Dilimizde",
  "heroBg": "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070",
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
      "image": "",
      "details": "",
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
          "gameRole": "Proje Lideri",
          "memberId": "xoluos-mmirxen9"
        },
        {
          "gameRole": "Teşekkürler",
          "memberId": "mete-karace-vacir-mmirvumd"
        },
        {
          "memberId": "bendisdsgn-mmis2kkq",
          "gameRole": "Çevirmen"
        },
        {
          "memberId": "order6-mmis30ms",
          "gameRole": "Çevirmen"
        },
        {
          "memberId": "anil-mmis3cle",
          "gameRole": "Kalite Kontrol"
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
      "roles": [
        "Çevirmen",
        "Editör",
        "Genel"
      ],
      "role": "Çevirmen",
      "tasks": "",
      "photo": ""
    },
    {
      "id": "order6-mmis30ms",
      "name": "order6",
      "roles": [
        "Çevirmen"
      ],
      "role": "Çevirmen",
      "tasks": "",
      "photo": ""
    },
    {
      "id": "anil-mmis3cle",
      "name": "Anıl",
      "roles": [
        "Kalite Kontrol"
      ],
      "role": "Kalite Kontrol",
      "tasks": "",
      "photo": ""
    }
  ]
};

const dataManager = {
  getData:()=>DATA, getSiteTitle:()=>DATA.siteTitle, getGames:()=>DATA.games,
  getGame:(id)=>DATA.games.find(g=>g.id===id), getTeam:()=>DATA.team,
  getMember:(id)=>DATA.team.find(m=>m.id===id), getRoles:()=>DATA.roles||[],
  getAbout:()=>DATA.about, login:(pw)=>pw===DATA.password
};
