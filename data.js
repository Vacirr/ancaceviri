const dataManager = {
    getSiteTitle: () => "ANCAÇEVİRİ",
    getAbout: () => "AncaÇeviri, oyunları kendi dilimizde oynamak için kurulmuş bir çeviri ekibidir.",
    getTeam: () => [
        { name: "Mete", role: "Kurucu & Geliştirici", tasks: "Site Yönetimi, Çeviri" }
    ],
    getGames: () => [
        { 
            id: "pm2", title: "Princess Maker 2 Refine", 
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop", 
            completion: 0.1, downloads: 0, status: "Devam Ediyor", lastUpdate: "2026-01",
            description: "Klasik benzetim oyunu Princess Maker 2'nin Refine versiyonu artık Türkçe'de!",
            installation: "<ol><li>İndir</li></ol>", driveLink: "#", screenshots: [], updates: []
        },
        { 
            id: "xenogears", title: "Xenogears", 
            image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=600&auto=format&fit=crop", 
            completion: 0.1, downloads: 0, status: "Devam Ediyor", lastUpdate: "2026-01",
            description: "Efsanevi PlayStation RPG'si Xenogears artık Türkçe'de!",
            installation: "<ol><li>İndir</li></ol>", driveLink: "#", screenshots: [], updates: []
        }
    ],
    getGame: (id) => dataManager.getGames().find(g => g.id === id),
    getData: () => ({ siteDesc: "Efsanevi oyunları en kaliteli Türkçe çevirilerle oynamak için doğru yerdesin." }),
    incrementDownload: (id) => { console.log(id + " indirildi"); },
    login: (pw) => pw === "admin123",
    isLoggedIn: () => false
};