const revealTargets = document.querySelectorAll(".hero, .section, .video");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealTargets.forEach((el) => {
  el.classList.add("reveal");
  observer.observe(el);
});

const i18n = {
  zh: {
    pageTitle: "劉宜芳｜個人網站",
    toggle: "EN",
    eyebrow: "個人網站",
    heroTitle: "流行音樂 × 攝影",
    heroSubtitle:
      "我是一位大一學生，主修流行音樂，平常喜歡用影像觀察生活，把情緒、光線與故事留下來。",
    heroDescription:
      "我還在學習影像創作與說故事的方式。拍照與剪輯時，我會留意光線、空間和情緒。這個網站整理了我目前的作品與練習紀錄。",
    chipInterest: "興趣：攝影",
    chipCamera: "相機：Canon R6 Mark II",
    chipLens: "鏡頭：Canon RF 24-105mm",
    chipDevice: "設備：iPhone",
    aboutTitle: "劉宜芳",
    aboutDesc: "個人簡介",
    aboutBody:
      "我目前在一間 stealth startup 擔任 UX Intern，也是台北城市科技大學流行音樂事業系大一學生。過去從音樂學習出發，後來透過拍照與剪輯接觸影像創作，也參與過校內外演出、MV 製作與音樂祭攝影。現在的我正在持續累積作品與實作經驗，慢慢建立自己的影像風格。",
    aboutPoint1: "台北城市科技大學流行音樂事業系大一學生。",
    aboutPoint2: "目前在 stealth startup 擔任 UX Intern。",
    aboutPoint3: "從音樂學習延伸到攝影與剪輯創作。",
    aboutPoint4: "持續累積作品與實作經驗，建立個人風格。",
    eduTitle: "求學經歷",
    eduPoint1: "中華藝術學校音樂科。",
    eduPoint2: "台北城市科技大學流行音樂事業系（大一）。",
    skillTitle: "興趣專長",
    skillPoint1: "興趣：鋼琴、音樂創作、攝影、旅遊、影音剪輯。",
    skillPoint2: "專長：攝影與影音後製剪輯。",
    expTitle: "經驗",
    expPoint1: "中華藝校春秋展 民族打擊與管弦樂團。",
    expPoint2: "2023 高雄管樂節 台灣青年長笛樂團。",
    expPoint3: "崑山科大 MV 拍攝與錄音合作。",
    expPoint4: "崛起音樂祭攝影組。",
    imageTitle: "靜態作品",
    imageDesc: "影像作品",
    imageDescription:
      "這些照片依主題分類，包含藝術、街拍、家庭與日常紀錄。每一張都來自我的生活觀察，也是我持續練習構圖與色調的過程。",
    videoTitle: "動態作品",
    videoDesc: "影片作品",
    videoDescription: "動態作品是我在剪輯與敘事上的練習，主要嘗試節奏安排、轉場和情緒鋪陳。",
    videoLinkOne: "作品連結一",
    videoLinkTwo: "作品連結二",
    coverTitle: "Photographer in Focus",
    coverNote: "在快節奏與安靜時刻之間，我用相機記下每一個值得被記得的瞬間。",
    closingNote: "謝謝你瀏覽我的作品集。這裡記錄了我目前的學習與創作，也歡迎交流想法。",
    navHome: "首頁",
    navAbout: "關於我",
    navGallery: "作品集與影片",
    carouselDotsLabel: "輪播指示器",
    videoIframeTitle1: "影片作品（一）",
    videoIframeTitle2: "影片作品（二）",
    exploreBtn: "查看作品",
    prevSlide: "上一張",
    nextSlide: "下一張",
    dotLabel: "跳到第 {index} 張",
    categories: {
      Art: "藝術",
      Cat: "貓",
      Family: "家庭",
      Me: "我",
      School: "學校",
      "Street snap 2024": "街拍 2024",
      "Street snap 2025": "街拍 2025",
    },
    categoryBlurbs: {
      Art: "走進展演與藝術現場時留下的畫面。",
      Cat: "路上偶遇的貓，還有牠們把街頭變慢的那一瞬間。",
      Family: "和家人膩在一起的平凡片刻，把溫度留在鏡頭裡。",
      Me: "對著鏡頭練習表達，也是記錄此刻自己的方式。",
      School: "校園裡的光影、走廊與人群——把日常當成練習題。",
      "Street snap 2024": "2024 年在街頭晃蕩時拾起的城市細節與巧合。",
      "Street snap 2025": "2025 年延續街拍，多試一點故事感與視線的走向。",
    },
  },
  en: {
    pageTitle: "Yi Fang Liu's Website",
    toggle: "中",
    eyebrow: "Personal Website",
    heroTitle: "Popular Music × Photography",
    heroSubtitle:
      "I'm a first-year student studying popular music. I love observing life through images—capturing light, mood, and stories.",
    heroDescription:
      "I'm still learning visual storytelling. When I shoot or edit, I pay attention to light, space, and emotion. This site collects my current work and practice.",
    chipInterest: "Interest: Photography",
    chipCamera: "Camera: Canon R6 Mark II",
    chipLens: "Lens: Canon RF 24-105mm",
    chipDevice: "Device: iPhone",
    aboutTitle: "Yi Fang Liu",
    aboutDesc: "Profile",
    aboutBody:
      "I am currently a UX intern at a stealth startup, and a first-year student in the Department of Popular Music at TPCU. My journey started from music, then gradually expanded into photography and video editing. I have participated in school and external performances, MV production, and music festival photography. Right now, I am focused on building my portfolio and strengthening practical skills while developing my own visual style.",
    aboutPoint1: "First-year student in the Department of Popular Music, TPCU.",
    aboutPoint2: "Currently a UX intern at a stealth startup.",
    aboutPoint3: "My creative journey has expanded from music to photography and video editing.",
    aboutPoint4: "I am continuously building projects and hands-on experience.",
    eduTitle: "Education",
    eduPoint1: "Department of Music, Chung-Hwa School of Arts.",
    eduPoint2: "Department of Popular Music, TPCU (first year).",
    skillTitle: "Interests & Skills",
    skillPoint1: "Interests: piano, songwriting, photography, travel, and video editing.",
    skillPoint2: "Strengths: photography and post-production editing.",
    expTitle: "Experience",
    expPoint1: "Chung-Hwa School of Arts Spring and Autumn Showcase: Ethnic Percussion and Orchestra.",
    expPoint2: "2023 Kaohsiung City Wind Festival, Taiwan Youth Flute Ensemble.",
    expPoint3: "Collaborated with Kun Shan University on MV production and recording.",
    expPoint4: "Photography team member at RISING STAR.",
    imageTitle: "Still Photography",
    imageDesc: "Photographs",
    imageDescription:
      "These photographs are grouped by theme—art, street photography, family, and everyday life. Each image comes from observing daily life and reflects my ongoing practice in composition and color grading.",
    videoTitle: "Video",
    videoDesc: "Film & video",
    videoDescription:
      "My video work is practice in editing and storytelling—I focus on pacing, transitions, and emotional build-up.",
    videoLinkOne: "Work link 1",
    videoLinkTwo: "Work link 2",
    coverTitle: "Photographer in Focus",
    coverNote: "Between fast-paced days and quiet moments, I capture the scenes worth remembering.",
    closingNote: "Thanks for visiting my portfolio. This site documents my current learning journey, and I am always happy to connect and learn from feedback.",
    navHome: "Home",
    navAbout: "About",
    navGallery: "Gallery & Video",
    carouselDotsLabel: "Carousel indicators",
    videoIframeTitle1: "Video 1",
    videoIframeTitle2: "Video 2",
    exploreBtn: "Explore Works",
    prevSlide: "Previous image",
    nextSlide: "Next image",
    dotLabel: "Go to image {index}",
    categories: {
      Art: "Art",
      Cat: "Cat",
      Family: "Family",
      Me: "Me",
      School: "School",
      "Street snap 2024": "Street 2024",
      "Street snap 2025": "Street 2025",
    },
    categoryBlurbs: {
      Art: "Images captured while visiting performances and art spaces.",
      Cat: "Cats I meet on the street—and the moment they slow the city down.",
      Family: "Ordinary moments close with family—keeping the warmth in the frame.",
      Me: "Practicing how I express myself to the lens—a way to record who I am right now.",
      School: "Light, corridors, and crowds on campus—treating everyday life as practice.",
      "Street snap 2024": "Urban details and chance encounters gathered while wandering the streets in 2024.",
      "Street snap 2025": "Continuing street photography in 2025—pushing further into story and where the eye travels.",
    },
  },
};

const categoryImages = {
  Art: [
    "image/Art/483638889_18060969833071281_7803941534940104482_n.jpg",
    "image/Art/483695673_18060969806071281_6040005904222556534_n.jpg",
    "image/Art/483992646_18060969824071281_7705732474503595572_n.jpg",
    "image/Art/571803664_18084403376071281_5026605565682710856_n.jpg",
    "image/Art/571886028_18084403394071281_7241852841124593059_n.jpg",
    "image/Art/572733013_18084403391071281_8464348596648012283_n.jpg",
  ],
  Cat: [
    "image/Cat/491511915_18065316098071281_8655208232579277451_n.jpg",
    "image/Cat/491529246_18065316089071281_659097912999324683_n.jpg",
    "image/Cat/510490631_18070862465071281_5950157859655478905_n.jpg",
    "image/Cat/510960628_18070862489071281_6459134881430310646_n.jpg",
    "image/Cat/557490016_18081624623071281_4700491970302271853_n.jpg",
    "image/Cat/559151762_18081624632071281_8289697129086018856_n.jpg",
    "image/Cat/559639687_18081624614071281_8973164990085007402_n.jpg",
    "image/Cat/625112409_18093377390071281_8756569848101605777_n.jpg",
  ],
  Family: [
    "image/Family/485049534_18061563935071281_2514272059041058590_n.jpg",
    "image/Family/491507753_18065316137071281_4387715157666504788_n.jpg",
    "image/Family/491618215_18065316116071281_6389039009724050859_n.jpg",
    "image/Family/551798217_18079742921071281_8096709683834832577_n.jpg",
    "image/Family/569992934_17933990037099686_6402645096407211913_n.jpg",
    "image/Family/573655450_17933990040099686_1352911868554120775_n.jpg",
    "image/Family/573807645_17933990022099686_8264358704764512506_n.jpg",
    "image/Family/573830499_17933990013099686_6968365359890478903_n.jpg",
    "image/Family/648672526_17925714594235793_5280686834039120156_n.jpg",
    "image/Family/653712124_18132595330529780_4927757007948735722_n.jpg",
    "image/Family/655450349_18058911086412216_6416373216668088106_n.jpg",
  ],
  Me: [
    "image/Me/474383348_18056829191071281_1097417029221155096_n.jpg",
    "image/Me/475311565_18056829170071281_5456601004976491760_n.jpg",
    "image/Me/510972426_18070862438071281_3198874773094615222_n.jpg",
    "image/Me/510975660_18070863257071281_8851698318508849553_n.jpg",
    "image/Me/557749914_18081624587071281_7307464849224424518_n.jpg",
    "image/Me/558246424_18081624578071281_2870589451159513355_n.jpg",
    "image/Me/566532392_18083617076071281_3047592405279770949_n.jpg",
  ],
  School: [
    "image/School/537907711_18076890662071281_1728443289848616577_n.jpg",
    "image/School/538973485_18076890671071281_872945451825029343_n.jpg",
    "image/School/551065726_18079742918071281_6188196632385853142_n.jpg",
    "image/School/650557682_17995281221920394_4849605986769071316_n.jpg",
    "image/School/653581069_18096420077069269_2271001025584131539_n.webp",
    "image/School/653674819_17978097560831216_2746993025499635774_n.jpg",
    "image/School/656022651_18081921113609579_7527253812194149097_n.jpg",
    "image/School/656440306_18063384614657859_643232099172388618_n.jpg",
    "image/School/661088710_18578993437012488_3049758939483237119_n.jpg",
    "image/School/669758859_18356221183227950_2169735198131421625_n.jpg",
  ],
  "Street snap 2024": [
    "image/Street snap 2024/640432486_18565207567023068_39969439864040526_n.webp",
    "image/Street snap 2024/655302590_18087862124184228_3027814467317112138_n.jpg",
    "image/Street snap 2024/660227299_18519272206078637_4450330592456710046_n.jpg",
    "image/Street snap 2024/IMG_4402.jpg",
    "image/Street snap 2024/IMG_4403.jpg",
    "image/Street snap 2024/IMG_4405.jpg",
    "image/Street snap 2024/IMG_4407.jpg",
    "image/Street snap 2024/IMG_6754.JPG",
    "image/Street snap 2024/IMG_6771.JPG",
  ],
  "Street snap 2025": [
    "image/Street snap 2025/510409035_18070863287071281_3220767351699106361_n.jpg",
    "image/Street snap 2025/510487975_18070863266071281_7186731386462253080_n.jpg",
    "image/Street snap 2025/538973555_18076890704071281_2315019775842017603_n.jpg",
    "image/Street snap 2025/539495977_18076890707071281_6596945978624938276_n.jpg",
    "image/Street snap 2025/540043009_18076890689071281_8322649415768019067_n.jpg",
    "image/Street snap 2025/552177937_18079742903071281_8170130583352810184_n.jpg",
    "image/Street snap 2025/565957818_18083617145071281_1898637427418201991_n.jpg",
    "image/Street snap 2025/566002478_18083617103071281_8353634447657545936_n.jpg",
    "image/Street snap 2025/566197219_18083617154071281_9049531810400980189_n.jpg",
    "image/Street snap 2025/566839918_18083617094071281_120450684126031195_n.jpg",
    "image/Street snap 2025/581687424_18086259953071281_7795317159681006517_n.jpg",
    "image/Street snap 2025/582758582_18086259989071281_6842864721692328489_n.jpg",
    "image/Street snap 2025/582762501_18086259962071281_172461034177614189_n.jpg",
    "image/Street snap 2025/583355026_18086522903071281_736716009030547873_n.jpg",
    "image/Street snap 2025/583773154_18086259971071281_8895584315757072970_n.jpg",
    "image/Street snap 2025/584238832_18086259980071281_4043269253030570099_n.jpg",
    "image/Street snap 2025/IMG_0674.JPG",
    "image/Street snap 2025/IMG_0859.JPG",
    "image/Street snap 2025/IMG_0860.JPG",
    "image/Street snap 2025/IMG_0862.JPG",
    "image/Street snap 2025/IMG_6820.JPG",
    "image/Street snap 2025/IMG_8412.JPG",
    "image/Street snap 2025/IMG_9080.JPG",
    "image/Street snap 2025/IMG_9084.JPG",
  ],
};

const categoryTabs = document.querySelectorAll(".tab-btn");
const carouselTrack = document.getElementById("carouselTrack");
const carouselViewport = document.querySelector(".carousel-viewport");
const dotsContainer = document.getElementById("carouselDots");
const prevSlideBtn = document.getElementById("prevSlide");
const nextSlideBtn = document.getElementById("nextSlide");
const carouselCategory = document.getElementById("carouselCategory");
const carouselCounter = document.getElementById("carouselCounter");
const categoryBlurb = document.getElementById("categoryBlurb");
const langToggle = document.getElementById("langToggle");
const coverSection = document.getElementById("coverSection");
const exploreBtn = document.getElementById("exploreBtn");
const imageSection = document.getElementById("imageSection");

let currentCategory = "Cat";
let currentIndex = 0;
let autoplayTimer = null;
let currentLang = localStorage.getItem("portfolio_lang") || "zh";

const translateText = (id, value) => {
  const el = document.getElementById(id);
  if (el) {
    el.textContent = value;
  }
};

const applyLanguage = () => {
  const t = i18n[currentLang];
  document.title = t.pageTitle;
  document.documentElement.lang = currentLang === "zh" ? "zh-Hant" : "en";

  translateText("eyebrowText", t.eyebrow);
  translateText("heroTitle", t.heroTitle);
  translateText("heroSubtitle", t.heroSubtitle);
  translateText("heroDescription", t.heroDescription);
  translateText("chipInterest", t.chipInterest);
  translateText("chipCamera", t.chipCamera);
  translateText("chipLens", t.chipLens);
  translateText("chipDevice", t.chipDevice);
  translateText("aboutTitle", t.aboutTitle);
  translateText("aboutDesc", t.aboutDesc);
  translateText("aboutBody", t.aboutBody);
  translateText("aboutPoint1", t.aboutPoint1);
  translateText("aboutPoint2", t.aboutPoint2);
  translateText("aboutPoint3", t.aboutPoint3);
  translateText("aboutPoint4", t.aboutPoint4);
  translateText("eduTitle", t.eduTitle);
  translateText("eduPoint1", t.eduPoint1);
  translateText("eduPoint2", t.eduPoint2);
  translateText("skillTitle", t.skillTitle);
  translateText("skillPoint1", t.skillPoint1);
  translateText("skillPoint2", t.skillPoint2);
  translateText("expTitle", t.expTitle);
  translateText("expPoint1", t.expPoint1);
  translateText("expPoint2", t.expPoint2);
  translateText("expPoint3", t.expPoint3);
  translateText("expPoint4", t.expPoint4);
  translateText("imageTitle", t.imageTitle);
  translateText("imageDesc", t.imageDesc);
  translateText("imageDescription", t.imageDescription);
  translateText("videoTitle", t.videoTitle);
  translateText("videoDesc", t.videoDesc);
  translateText("videoDescription", t.videoDescription);
  translateText("videoLinkOne", t.videoLinkOne);
  translateText("videoLinkTwo", t.videoLinkTwo);
  translateText("coverTitle", t.coverTitle);
  translateText("coverNote", t.coverNote);
  translateText("closingNote", t.closingNote);
  translateText("exploreBtn", t.exploreBtn);
  translateText("navHome", t.navHome);
  translateText("navAbout", t.navAbout);
  translateText("navGallery", t.navGallery);
  translateText("langToggle", t.toggle);

  const carouselDotsEl = document.getElementById("carouselDots");
  if (carouselDotsEl && t.carouselDotsLabel) {
    carouselDotsEl.setAttribute("aria-label", t.carouselDotsLabel);
  }

  const videoEmbed1 = document.getElementById("videoEmbed1");
  const videoEmbed2 = document.getElementById("videoEmbed2");
  if (videoEmbed1 && t.videoIframeTitle1) {
    videoEmbed1.setAttribute("title", t.videoIframeTitle1);
  }
  if (videoEmbed2 && t.videoIframeTitle2) {
    videoEmbed2.setAttribute("title", t.videoIframeTitle2);
  }

  if (prevSlideBtn) prevSlideBtn.setAttribute("aria-label", t.prevSlide);
  if (nextSlideBtn) nextSlideBtn.setAttribute("aria-label", t.nextSlide);

  categoryTabs.forEach((tab) => {
    const key = tab.dataset.category;
    tab.textContent = t.categories[key] || key;
  });

  if (carouselTrack && dotsContainer) {
    renderSlides();
  } else {
    updateCarousel();
  }
};

const renderSlides = () => {
  if (!carouselTrack || !dotsContainer) return;
  const images = categoryImages[currentCategory];
  const categoryLabel = i18n[currentLang].categories[currentCategory] || currentCategory;
  carouselTrack.innerHTML = images
    .map((src, idx) => {
      const alt =
        currentLang === "zh"
          ? `${categoryLabel}，第 ${idx + 1} 張`
          : `${categoryLabel} ${idx + 1}`;
      return `<article class="slide"><img src="${src}" alt="${alt}" loading="lazy" /></article>`;
    })
    .join("");

  dotsContainer.innerHTML = images
    .map((_, idx) => {
      const labelTemplate = i18n[currentLang].dotLabel;
      const label = labelTemplate.replace("{index}", String(idx + 1));
      return `<button class="dot ${idx === 0 ? "is-active" : ""}" data-index="${idx}" aria-label="${label}"></button>`;
    })
    .join("");

  currentIndex = 0;
  updateCarousel();
};

const updateCarousel = () => {
  if (!carouselTrack || !dotsContainer || !carouselCategory || !carouselCounter) return;
  const images = categoryImages[currentCategory];
  carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;

  dotsContainer.querySelectorAll(".dot").forEach((dot, idx) => {
    dot.classList.toggle("is-active", idx === currentIndex);
  });

  carouselCategory.textContent = i18n[currentLang].categories[currentCategory] || currentCategory;
  carouselCounter.textContent = `${currentIndex + 1} / ${images.length}`;
  if (categoryBlurb) {
    categoryBlurb.textContent = i18n[currentLang].categoryBlurbs[currentCategory] || "";
  }
};

const nextSlide = () => {
  const images = categoryImages[currentCategory];
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
};

const prevSlide = () => {
  const images = categoryImages[currentCategory];
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
};

const restartAutoplay = () => {
  if (!carouselTrack) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }
  if (autoplayTimer) {
    window.clearInterval(autoplayTimer);
  }
  autoplayTimer = window.setInterval(nextSlide, 3500);
};

const stopAutoplay = () => {
  if (autoplayTimer) {
    window.clearInterval(autoplayTimer);
    autoplayTimer = null;
  }
};

categoryTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    currentCategory = tab.dataset.category;
    categoryTabs.forEach((item) => item.classList.remove("is-active"));
    tab.classList.add("is-active");
    renderSlides();
    restartAutoplay();
  });
});

if (dotsContainer) {
  dotsContainer.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (!target.classList.contains("dot")) return;
    currentIndex = Number(target.dataset.index || 0);
    updateCarousel();
    restartAutoplay();
  });
}

if (nextSlideBtn) {
  nextSlideBtn.addEventListener("click", () => {
    nextSlide();
    restartAutoplay();
  });
}

if (prevSlideBtn) {
  prevSlideBtn.addEventListener("click", () => {
    prevSlide();
    restartAutoplay();
  });
}

if (langToggle) {
  langToggle.addEventListener("click", () => {
    currentLang = currentLang === "zh" ? "en" : "zh";
    localStorage.setItem("portfolio_lang", currentLang);
    applyLanguage();
  });
}

if (exploreBtn && imageSection) {
  exploreBtn.addEventListener("click", () => {
    imageSection.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

if (coverSection) {
  coverSection.addEventListener("mousemove", (event) => {
    const rect = coverSection.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    const moveX = x * -12;
    const moveY = y * -12;
    coverSection.style.setProperty("--cover-x", `${moveX.toFixed(2)}px`);
    coverSection.style.setProperty("--cover-y", `${moveY.toFixed(2)}px`);
  });

  coverSection.addEventListener("mouseleave", () => {
    coverSection.style.setProperty("--cover-x", "0px");
    coverSection.style.setProperty("--cover-y", "0px");
  });
}

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    stopAutoplay();
  } else {
    restartAutoplay();
  }
});

if (carouselViewport) {
  carouselViewport.addEventListener("mouseenter", stopAutoplay);
  carouselViewport.addEventListener("mouseleave", restartAutoplay);
}

document.addEventListener("keydown", (event) => {
  const isTyping =
    event.target instanceof HTMLElement &&
    (event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA" || event.target.isContentEditable);
  if (isTyping) return;

  if (event.key === "ArrowRight") {
    nextSlide();
    restartAutoplay();
  }
  if (event.key === "ArrowLeft") {
    prevSlide();
    restartAutoplay();
  }
});

const applyActiveNav = () => {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach((link) => {
    const href = link.getAttribute('href') || '';
    link.classList.toggle('is-active', href === current);
  });
};

renderSlides();
applyLanguage();
applyActiveNav();
restartAutoplay();
