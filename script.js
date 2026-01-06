const yearEl = document.getElementById("year");
yearEl.textContent = String(new Date().getFullYear());

const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle?.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

const i18n = {
  en: {
    brandSubtitle: "Vojvodinian Early Music Association",
    navAbout: "About",
    navActivities: "Activities",
    navEvents: "Events",
    navMedia: "Media",
    navSupport: "Support",
    navContact: "Contact",

    heroTitle: "Early music in Vojvodina — performed, taught, and shared.",
    heroLead:
      "VEMA connects artists, audiences, and cultural heritage through concerts, education, and research-led projects in Novi Sad and beyond.",
    heroBtnEvents: "Upcoming events",
    heroBtnContact: "Contact",
    fact1Label: "Based in",
    fact2Label: "Focus",
    fact2Value: "Historically informed performance",
    fact3Label: "Key programs",
    heroCardTitle: "Get updates",
    heroCardText: "Subscribe for concert announcements and project news.",
    heroCardBtn: "Subscribe",
    heroCardFineprint: "No spam. Unsubscribe anytime.",

    aboutTitle: "About VEMA",
    aboutIntro:
      "Vojvodinian Early Music Association (VEMA) is a platform for historically informed performance and education, rooted in local heritage and connected to European networks.",
    aboutMissionTitle: "Mission",
    aboutMissionText:
      "To revive and present early music through high-quality performances, masterclasses, and research, while strengthening cultural life in Novi Sad and Vojvodina.",
    aboutFocusTitle: "What we do",
    aboutBullet1: "Produce concerts and festival programs in historical venues",
    aboutBullet2: "Run educational activities and instrument access for young musicians",
    aboutBullet3: "Develop international collaborations and cultural-heritage projects",
    aboutQuote:
      "“Early music is not a museum piece — it’s a living language that becomes real when shared with today’s communities.”",

    actTitle: "Activities",
    actIntro: "Three main pillars that structure our work.",
    actCard1Title: "Concerts & Festivals",
    actCard1Text:
      "We curate programs from Renaissance to High Baroque, presented with historically informed approaches and international guest artists.",
    actCard1Tag: "Dani Barokne Muzike",
    actCard2Title: "Education",
    actCard2Text:
      "Masterclasses, workshops, and ensemble training. We support young musicians with mentorship and access to baroque instruments when possible.",
    actCard2Tag: "Novosadska Barokna Akademija",
    actCard3Title: "Research & Heritage",
    actCard3Text:
      "We explore repertoire from manuscript sources, connect music with historical sites, and create projects that leave long-term cultural value.",
    actCard3Tag: "Residencies · EU projects",

    eventsTitle: "Events",
    eventsIntro:
      "Add upcoming concerts here. For ticketing, link to your platform (e.g., Gigstix).",
    eventsMonthMar: "Mar",
    eventsMonthMay: "May",
    event1Title: "Early Music Day — Concert",
    event1Text:
      "Public concert in Novi Sad (details and venue to be confirmed on the project page).",
    event2Title: "Bridge Cantata — Opening performance",
    event2Text:
      "Bach BWV 106 + new commissioned work (project details to be announced).",
    eventLink: "Details / Tickets →",
    eventsNote: "Want to add an archive? We can turn this section into a filterable list by year.",

    mediaTitle: "Media",
    mediaIntro: "Photos, videos, and press materials.",
    mediaPhotosTitle: "Photos",
    mediaPhotosText: "Add a gallery (we can build a simple lightbox).",
    mediaVideoTitle: "Video",
    mediaVideoText: "Embed YouTube/Vimeo links here.",
    mediaPressTitle: "Press kit",
    mediaPressText: "Add a downloadable PDF with bio, logos, and photos.",

    supportTitle: "Support VEMA",
    supportIntro:
      "Your support helps us commission new work, host guest artists, and create educational opportunities in the region.",
    supportWaysTitle: "Ways to support",
    supportWay1: "Donations (individual)",
    supportWay2: "Sponsorship (companies)",
    supportWay3: "Partnerships & in-kind support (venues, logistics, media)",
    supportContactTitle: "Let’s talk",
    supportContactText:
      "Send us a message and we’ll share a sponsorship deck and options that fit your budget.",
    supportBtn: "Contact us",

    contactTitle: "Contact",
    contactIntro: "For collaborations, concerts, education, and partnerships.",
    contactEmailTitle: "Email",
    contactLocationTitle: "Location",
    contactSocialTitle: "Social",
    contactSocialText: "Add links to Instagram / Facebook / YouTube here.",
    contactFormTitle: "Message",
    contactName: "Name",
    contactEmail: "Email",
    contactMsg: "Message",
    contactSend: "Send",
    contactFormNote:
      "This form is currently non-functional (safe placeholder). We’ll connect it to a free form service next.",

    backToTop: "Back to top ↑",
  },

  sr: {
    brandSubtitle: "Vojvođansko udruženje za ranu muziku",
    navAbout: "O nama",
    navActivities: "Aktivnosti",
    navEvents: "Događaji",
    navMedia: "Mediji",
    navSupport: "Podrška",
    navContact: "Kontakt",

    heroTitle: "Rana muzika u Vojvodini — izvođena, podučavana i deljena.",
    heroLead:
      "VEMA povezuje umetnike, publiku i kulturno nasleđe kroz koncerte, edukaciju i projekte zasnovane na istraživanju u Novom Sadu i šire.",
    heroBtnEvents: "Najave",
    heroBtnContact: "Kontakt",
    fact1Label: "Sedište",
    fact2Label: "Fokus",
    fact2Value: "Istorijski informisano izvođenje",
    fact3Label: "Ključni programi",
    heroCardTitle: "Pratite novosti",
    heroCardText: "Prijavite se za najave koncerata i vesti o projektima.",
    heroCardBtn: "Prijava",
    heroCardFineprint: "Bez spama. Odjava u bilo kom trenutku.",

    aboutTitle: "O VEMA",
    aboutIntro:
      "Vojvođansko udruženje za ranu muziku (VEMA) je platforma za istorijski informisano izvođenje i edukaciju, ukorenjena u lokalno nasleđe i povezana sa evropskim mrežama.",
    aboutMissionTitle: "Misija",
    aboutMissionText:
      "Oživljavanje i predstavljanje rane muzike kroz vrhunske koncerte, masterklasove i istraživanje, uz jačanje kulturnog života Novog Sada i Vojvodine.",
    aboutFocusTitle: "Čime se bavimo",
    aboutBullet1: "Produkcija koncerata i festivalskih programa u istorijskim prostorima",
    aboutBullet2: "Edukativni programi i podrška mladim muzičarima",
    aboutBullet3: "Međunarodne saradnje i projekti kulturnog nasleđa",
    aboutQuote:
      "„Rana muzika nije muzejski eksponat — to je živi jezik koji oživi kada se podeli sa zajednicom danas.“",

    actTitle: "Aktivnosti",
    actIntro: "Tri stuba koja oblikuju naš rad.",
    actCard1Title: "Koncerti i festivali",
    actCard1Text:
      "Kreiramo programe od renesanse do visokog baroka, uz istorijski informisan pristup i međunarodne goste.",
    actCard1Tag: "Dani Barokne Muzike",
    actCard2Title: "Edukacija",
    actCard2Text:
      "Masterklasovi, radionice i ansambl-saradnja. Pomažemo mladim muzičarima mentorstvom i, kada je moguće, pristupom baroknim instrumentima.",
    actCard2Tag: "Novosadska Barokna Akademija",
    actCard3Title: "Istraživanje i nasleđe",
    actCard3Text:
      "Istražujemo repertoar iz rukopisnih izvora, povezujemo muziku sa istorijskim lokacijama i razvijamo projekte sa trajnom vrednošću.",
    actCard3Tag: "Rezidencije · EU projekti",

    eventsTitle: "Događaji",
    eventsIntro:
      "Ovde dodajte najave koncerata. Za prodaju karata postavite link ka platformi (npr. Gigstix).",
    eventsMonthMar: "mar",
    eventsMonthMay: "maj",
    event1Title: "Dan rane muzike — koncert",
    event1Text:
      "Javni koncert u Novom Sadu (detalji i lokacija biće potvrđeni na stranici projekta).",
    event2Title: "Bridge Cantata — otvaranje projekta",
    event2Text:
      "Bach BWV 106 + novo naručeno delo (detalji projekta uskoro).",
    eventLink: "Detalji / Karte →",
    eventsNote: "Želite arhivu? Možemo pretvoriti ovu sekciju u listu sa filtriranjem po godinama.",

    mediaTitle: "Mediji",
    mediaIntro: "Fotografije, video i materijali za medije.",
    mediaPhotosTitle: "Fotografije",
    mediaPhotosText: "Dodajte galeriju (možemo napraviti jednostavan lightbox).",
    mediaVideoTitle: "Video",
    mediaVideoText: "Ubacite YouTube/Vimeo linkove ovde.",
    mediaPressTitle: "Press kit",
    mediaPressText: "Dodajte PDF sa biografijom, logotipima i fotografijama.",

    supportTitle: "Podržite VEMA",
    supportIntro:
      "Vaša podrška pomaže naručivanje novih dela, gostovanja umetnika i edukativne programe u regionu.",
    supportWaysTitle: "Načini podrške",
    supportWay1: "Donacije (pojedinci)",
    supportWay2: "Sponzorstvo (kompanije)",
    supportWay3: "Partnerstva i podrška u naturi (prostori, logistika, mediji)",
    supportContactTitle: "Hajde da razgovaramo",
    supportContactText:
      "Pošaljite poruku i podelićemo sponzorski paket i opcije koje odgovaraju vašem budžetu.",
    supportBtn: "Kontakt",

    contactTitle: "Kontakt",
    contactIntro: "Za saradnje, koncerte, edukaciju i partnerstva.",
    contactEmailTitle: "Email",
    contactLocationTitle: "Lokacija",
    contactSocialTitle: "Mreže",
    contactSocialText: "Dodajte linkove ka Instagramu / Facebooku / YouTube-u.",
    contactFormTitle: "Poruka",
    contactName: "Ime",
    contactEmail: "Email",
    contactMsg: "Poruka",
    contactSend: "Pošalji",
    contactFormNote:
      "Ovaj formular trenutno ne šalje poruke (bezbedan placeholder). Sledeće ga povezujemo na besplatan servis.",

    backToTop: "Na vrh ↑",
  },
};

function setLanguage(lang) {
  document.documentElement.lang = lang === "sr" ? "sr" : "en";
  const dict = i18n[lang] || i18n.en;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  localStorage.setItem("vema_lang", lang);
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

const saved = localStorage.getItem("vema_lang") || "en";
setLanguage(saved);

// close mobile menu after clicking a link
document.querySelectorAll(".nav-menu a").forEach((a) => {
  a.addEventListener("click", () => {
    if (navMenu.classList.contains("open")) {
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
});
