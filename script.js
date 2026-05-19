const copy = {
  en: {
    skip: "Skip to content",
    navWork: "Work",
    navSkills: "Skills",
    navStory: "Story",
    navContact: "Contact",
    heroEyebrow: "SWE internship portfolio",
    heroTitle: "I build software around messy real-world data.",
    heroSubtitle:
      "UCLA Mathematics of Computation student working across Python, C++, Flask, SQL, and machine learning. I like projects where APIs, data cleaning, model evaluation, and usable interfaces have to meet in one place.",
    heroPrimary: "View projects",
    heroSecondary: "GitHub",
    signalRoleLabel: "Target",
    signalRole: "Software engineering internships",
    signalSchoolLabel: "School",
    signalSchool: "UCLA, B.S. Mathematics of Computation",
    signalRegionsLabel: "Regions",
    signalRegions: "United States and Japan",
    focusOneLabel: "Backend",
    focusOne: "Flask routes, API integration, JSON processing, local deployment",
    focusTwoLabel: "Data",
    focusTwo: "Pandas cleaning, SQLite schema design, reproducible pipelines",
    focusThreeLabel: "ML",
    focusThree: "Scikit-learn model selection, grouped CV, TF-IDF and NMF features",
    workEyebrow: "Selected software work",
    workTitle: "Projects with working parts, not just screenshots.",
    repoLink: "Repository",
    projectRmpTitle: "RateMyProfessors rating prediction pipeline",
    projectRmpBody:
      "End-to-end Python pipeline for UC professor review data: fetches source data, cleans text, expands rating tags, builds a normalized SQLite database, and compares models for clarity and difficulty prediction.",
    projectRmpMetric: "top clarity CV accuracy from model search",
    projectRmpNote:
      "Uses grouped cross-validation by professor to reduce leakage between train and validation folds.",
    projectLeagueTitle: "League of Legends match history dashboard",
    projectLeagueBody:
      "Flask app that connects to Riot Games APIs and Data Dragon to show user rank, level, profile icon, recent opponents, match history, champion picks, items, and KDA.",
    projectLeagueMetric: "data is requested and rendered from Riot services",
    projectOutcomeTitle: "League outcome predictability analysis",
    researchLabel: "Research project",
    projectOutcomeBody:
      "Analyzed more than 65,000 League of Legends games across skill levels to compare match outcome predictability and game-balance signals.",
    projectOutcomeMetric: "games cleaned, sorted, and modeled",
    skillsEyebrow: "What I can contribute",
    skillsTitle: "A software foundation with data-heavy project experience.",
    skillsLangTitle: "Languages",
    skillsBackendTitle: "Backend and data",
    skillsMLTitle: "Machine learning",
    skillsPracticeTitle: "Engineering practice",
    storyEyebrow: "Background",
    storyTitle: "I came into software through computation, data, and research.",
    storyBody:
      "My coursework covers C++, data structures, algorithms, discrete math, linear algebra, and advanced Python. Outside class, I have worked on biomedical research data, built figures for a manuscript, and learned to treat messy datasets as engineering problems rather than spreadsheet chores.",
    timelineUcla: "Expected B.S. in Mathematics of Computation at UCLA",
    timelineAa: "A.A. in Mathematics and Natural Sciences, Summa Cum Laude",
    timelineResearch: "Biomedical research assistant, infectious disease lab",
    contactEyebrow: "Contact",
    contactTitle: "Open to SWE internship conversations in the U.S. and Japan.",
    demoLink: "Dashboard demo",
    footerText: "Built as a focused SWE internship portfolio.",
  },
  ja: {
    skip: "本文へ移動",
    navWork: "制作物",
    navSkills: "スキル",
    navStory: "経歴",
    navContact: "連絡先",
    heroEyebrow: "ソフトウェアエンジニア インターン向けポートフォリオ",
    heroTitle: "現実の複雑なデータを扱うソフトウェアを作っています。",
    heroSubtitle:
      "UCLAで Mathematics of Computation を専攻し、Python、C++、Flask、SQL、機械学習を中心に学んでいます。API、データ整形、モデル評価、使いやすいUIが一つにつながるプロジェクトに特に興味があります。",
    heroPrimary: "プロジェクトを見る",
    heroSecondary: "GitHub",
    signalRoleLabel: "志望",
    signalRole: "ソフトウェアエンジニア インターン",
    signalSchoolLabel: "大学",
    signalSchool: "UCLA, B.S. Mathematics of Computation",
    signalRegionsLabel: "応募地域",
    signalRegions: "アメリカ・日本",
    focusOneLabel: "バックエンド",
    focusOne: "Flaskルーティング、API連携、JSON処理、ローカルデプロイ",
    focusTwoLabel: "データ",
    focusTwo: "Pandasによる前処理、SQLite設計、再現可能なパイプライン",
    focusThreeLabel: "機械学習",
    focusThree: "scikit-learnのモデル選択、Grouped CV、TF-IDFとNMF特徴量",
    workEyebrow: "主なソフトウェア制作",
    workTitle: "見た目だけではなく、動く仕組みまで作ったプロジェクトです。",
    repoLink: "リポジトリ",
    projectRmpTitle: "RateMyProfessors 評価予測パイプライン",
    projectRmpBody:
      "UCキャンパスの教授レビューを対象にしたPythonパイプラインです。データ取得、テキスト整形、タグ展開、正規化したSQLiteデータベース構築、clarity/difficulty予測モデルの比較まで実装しました。",
    projectRmpMetric: "clarity予測のCV精度で最良の結果",
    projectRmpNote:
      "教授単位のGrouped Cross Validationを使い、学習データと検証データのリークを抑える設計にしています。",
    projectLeagueTitle: "League of Legends 戦績ダッシュボード",
    projectLeagueBody:
      "Riot Games APIとData Dragonに接続するFlaskアプリです。ランク、レベル、プロフィールアイコン、最近の対戦相手、戦績、チャンピオン、アイテム、KDAを表示します。",
    projectLeagueMetric: "Riotのサービスからデータを取得して画面に反映",
    projectOutcomeTitle: "League 勝敗予測可能性の分析",
    researchLabel: "研究プロジェクト",
    projectOutcomeBody:
      "スキル帯ごとの試合結果の予測しやすさとゲームバランスの傾向を比較するため、65,000件以上のLeague of Legendsの試合データを分析しました。",
    projectOutcomeMetric: "試合データを整形・分類・モデル化",
    skillsEyebrow: "貢献できること",
    skillsTitle: "ソフトウェアの基礎と、データを扱う実践的な制作経験があります。",
    skillsLangTitle: "言語",
    skillsBackendTitle: "バックエンド・データ",
    skillsMLTitle: "機械学習",
    skillsPracticeTitle: "開発姿勢",
    storyEyebrow: "バックグラウンド",
    storyTitle: "計算、データ、研究を通してソフトウェアに取り組んできました。",
    storyBody:
      "C++、データ構造、アルゴリズム、離散数学、線形代数、発展的なPythonを学んでいます。授業外では、医学研究データの分析や論文用の図表作成にも関わり、扱いにくいデータをエンジニアリングの問題として整理する経験を積みました。",
    timelineUcla: "UCLA Mathematics of Computation 学士課程、2029年卒業予定",
    timelineAa: "Mathematics and Natural Sciences A.A. 取得、Summa Cum Laude",
    timelineResearch: "感染症研究室でBiomedical Research Assistantとして勤務",
    contactEyebrow: "連絡先",
    contactTitle: "アメリカ・日本でのSWEインターンについて、ぜひご連絡ください。",
    demoLink: "ダッシュボードのデモ",
    footerText: "SWEインターン応募向けに制作したポートフォリオです。",
  },
};

const buttons = document.querySelectorAll(".lang-btn");
const translatable = document.querySelectorAll("[data-i18n]");

function setLanguage(lang) {
  const dictionary = copy[lang] || copy.en;
  document.documentElement.lang = lang;

  translatable.forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[key]) {
      node.textContent = dictionary[key];
    }
  });

  buttons.forEach((button) => {
    const active = button.dataset.lang === lang;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  localStorage.setItem("portfolio-language", lang);
}

buttons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

setLanguage(localStorage.getItem("portfolio-language") || "en");
