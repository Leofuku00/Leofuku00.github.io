const copy = {
  en: {
    skip: "Skip to content",
    navWork: "Work",
    navSkills: "Skills",
    navStory: "Story",
    navContact: "Contact",
    heroEyebrow: "UCLA Mathematics of Computation",
    heroTitle: "Leo Fukunaga",
    heroSubtitle:
      "Software engineering and data science internship candidate open to roles in the United States and Japan. Project experience includes Python data pipelines, API integration, SQLite databases, and machine learning evaluation.",
    heroPrimary: "View projects",
    heroSecondary: "GitHub",
    signalRoleLabel: "Target",
    signalRole: "SWE and data science internships",
    signalSchoolLabel: "School",
    signalSchool: "UCLA, B.S. Mathematics of Computation",
    signalRegionsLabel: "Regions",
    signalRegions: "United States and Japan",
    focusOneLabel: "Backend",
    focusOne: "API integration, data validation, modular Python services",
    focusTwoLabel: "Data",
    focusTwo: "Pandas cleaning, SQLite schema design, reproducible pipelines",
    focusThreeLabel: "ML",
    focusThree: "Scikit-learn model selection, grouped CV, TF-IDF and NMF features",
    workEyebrow: "Selected software work",
    workTitle: "Three projects that show how I work with real data.",
    repoLink: "Repository",
    projectRmpTitle: "Professor rating prediction pipeline",
    projectRmpBody:
      "Built a Python pipeline that collects RateMyProfessors review data for UC campuses, cleans review text and tags, stores the data in normalized SQLite tables, and runs cross-validated ML experiments to predict clarity and difficulty ratings.",
    projectRmpMetric: "reviews imported, cleaned, and prepared for modeling",
    projectRmpNote:
      "Includes grouped 5-fold cross-validation to reduce leakage between professors.",
    projectLeagueTitle: "League of Legends match history backend",
    projectLeagueBody:
      "Built a Python backend for a match history app. It calls Riot Games APIs, handles player and match JSON responses, joins Data Dragon metadata, and prepares structured summaries for rank, champions, items, opponents, and KDA.",
    projectLeagueMetric: "turns third-party game data into usable application data",
    projectOutcomeTitle: "League match outcome analysis",
    researchLabel: "Research project",
    projectOutcomeBody:
      "Analyzed more than 65,000 League of Legends games to compare how predictable match outcomes are at different skill levels. Cleaned the data with Pandas and tested multiple scikit-learn models, including Random Forest, Decision Tree, and MLP.",
    projectOutcomeMetric: "games cleaned, grouped by skill level, and modeled",
    skillsEyebrow: "What I can contribute",
    skillsTitle: "Skills I can show through the projects above.",
    skillsLangTitle: "Languages",
    skillsBackendTitle: "Backend and data",
    skillsMLTitle: "Machine learning",
    skillsPracticeTitle: "Engineering practice",
    storyEyebrow: "Background",
    storyTitle: "Coursework and research experience",
    storyBody:
      "My coursework covers C++, data structures, algorithms, discrete math, linear algebra, and advanced Python. Research work at an infectious disease lab gave me practice cleaning patient data, creating figures, and checking that results are understandable and reproducible.",
    timelineUcla: "Expected B.S. in Mathematics of Computation at UCLA",
    timelineAa: "A.A. in Mathematics and Natural Sciences, Summa Cum Laude",
    timelineResearch: "Biomedical research assistant, infectious disease lab",
    contactEyebrow: "Contact",
    contactTitle: "Open to software engineering or data science roles in the U.S. and Japan.",
    demoLink: "Dashboard demo",
  },
  ja: {
    skip: "本文へ移動",
    navWork: "プロジェクト",
    navSkills: "スキル",
    navStory: "経歴",
    navContact: "連絡先",
    heroEyebrow: "UCLA Mathematics of Computation",
    heroTitle: "福永怜生",
    heroSubtitle:
      "米国・日本でのソフトウェアエンジニア職・データサイエンス職を志望。主な経験は、Pythonでのデータ処理、API連携、SQLite、機械学習モデル評価。",
    heroPrimary: "プロジェクトを見る",
    heroSecondary: "GitHub",
    signalRoleLabel: "志望",
    signalRole: "SWE・データサイエンス職",
    signalSchoolLabel: "所属",
    signalSchool: "UCLA, B.S. Mathematics of Computation",
    signalRegionsLabel: "応募地域",
    signalRegions: "米国・日本",
    focusOneLabel: "バックエンド",
    focusOne: "外部API連携、JSON処理、データ検証",
    focusTwoLabel: "データ",
    focusTwo: "Pandasでの前処理、SQLite設計、再現可能な処理フロー",
    focusThreeLabel: "機械学習",
    focusThree: "scikit-learn、交差検証、TF-IDF / NMF特徴量",
    workEyebrow: "主なプロジェクト",
    workTitle: "実データを扱った開発・分析",
    repoLink: "リポジトリ",
    projectRmpTitle: "教授レビュー評価予測",
    projectRmpBody:
      "UCキャンパスのRateMyProfessorsレビューを対象に、データ収集、前処理、SQLiteへの保存、機械学習モデルの比較までを実装。レビュー本文とタグ情報を特徴量化し、clarity / difficulty の予測モデルを検証。",
    projectRmpMetric: "約48万件のレビューを処理",
    projectRmpNote:
      "教授ごとに分割したGrouped 5-fold CVで、評価時のデータリークを抑制。",
    projectLeagueTitle: "League of Legends 戦績データ処理",
    projectLeagueBody:
      "Riot Games APIからプレイヤー情報と試合履歴を取得し、Data Dragonのメタデータと組み合わせて整形。ランク、使用チャンピオン、アイテム、対戦相手、KDAなどを扱いやすい形式に整理。",
    projectLeagueMetric: "外部APIのデータをアプリ用に整形",
    projectOutcomeTitle: "League 勝敗予測分析",
    researchLabel: "研究プロジェクト",
    projectOutcomeBody:
      "65,000件以上の試合データを使い、スキル帯による勝敗予測のしやすさの違いを分析。Pandasで前処理を行い、Random Forest、Decision Tree、MLPなどのモデルを比較検証。",
    projectOutcomeMetric: "65,000件以上の試合を分析",
    skillsEyebrow: "スキル",
    skillsTitle: "プロジェクトで使った技術",
    skillsLangTitle: "言語",
    skillsBackendTitle: "API・データ処理",
    skillsMLTitle: "機械学習",
    skillsPracticeTitle: "開発・検証",
    storyEyebrow: "経歴",
    storyTitle: "授業と研究経験",
    storyBody:
      "UCLAではC++、データ構造、アルゴリズム、離散数学、線形代数、発展的なPythonを履修。感染症研究室では患者データの整理や論文用の図表作成に携わり、結果を正確にまとめて伝える経験を積みました。",
    timelineUcla: "UCLA Mathematics of Computation 学士課程、2029年卒業予定",
    timelineAa: "Mathematics and Natural Sciences A.A. 取得、Summa Cum Laude",
    timelineResearch: "感染症研究室 Biomedical Research Assistant",
    contactEyebrow: "連絡先",
    contactTitle: "米国・日本でのSWE・データサイエンス職に関心",
    demoLink: "ダッシュボードのデモ",
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
