// AncaÇeviri — 2026-03-09 09:02
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
    "Genel Koordinasyon"
  ],
  "games": [],
  "team": [
    {
      "id": "mete-karace-vacir-mmirvumd",
      "name": "Mete Karace ~ Vacir",
      "roles": [
        "Genel",
        "Çevirmen",
        "Site Yönetimi"
      ],
      "role": "Genel",
      "tasks": "",
      "photo": ""
    },
    {
      "id": "xoluos-mmirxen9",
      "name": "Xoluos",
      "roles": [
        "Çevirmen",
        "Editör",
        "Genel",
        "Genel Koordinasyon"
      ],
      "role": "Çevirmen",
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
