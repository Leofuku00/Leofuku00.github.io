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
    navWork: "制作物",
    navSkills: "スキル",
    navStory: "経歴",
    navContact: "連絡先",
    heroEyebrow: "UCLA Mathematics of Computation",
    heroTitle: "Leo Fukunaga",
    heroSubtitle:
      "アメリカと日本でソフトウェアエンジニアリングまたはデータサイエンスのインターン機会を探しています。Pythonデータパイプライン、API連携、SQLiteデータベース、機械学習評価のプロジェクト経験があります。",
    heroPrimary: "プロジェクトを見る",
    heroSecondary: "GitHub",
    signalRoleLabel: "志望",
    signalRole: "SWE・データサイエンス インターン",
    signalSchoolLabel: "大学",
    signalSchool: "UCLA, B.S. Mathematics of Computation",
    signalRegionsLabel: "応募地域",
    signalRegions: "アメリカ・日本",
    focusOneLabel: "バックエンド",
    focusOne: "API連携、データ検証、モジュール化したPythonサービス",
    focusTwoLabel: "データ",
    focusTwo: "Pandasによる前処理、SQLite設計、再現可能なパイプライン",
    focusThreeLabel: "機械学習",
    focusThree: "scikit-learnのモデル選択、Grouped CV、TF-IDFとNMF特徴量",
    workEyebrow: "主なソフトウェア制作",
    workTitle: "実データを扱う力が伝わる3つのプロジェクトです。",
    repoLink: "リポジトリ",
    projectRmpTitle: "教授評価予測パイプライン",
    projectRmpBody:
      "UCキャンパスのRateMyProfessorsレビューを収集し、レビュー本文とタグを整形し、正規化したSQLiteテーブルに保存し、clarity/difficultyを予測する機械学習実験を行うPythonパイプラインを作りました。",
    projectRmpMetric: "レビューを取り込み、整形し、モデル用に準備",
    projectRmpNote:
      "教授単位のGrouped 5-fold Cross Validationで、評価時のリークを抑えています。",
    projectLeagueTitle: "League of Legends 戦績バックエンド",
    projectLeagueBody:
      "戦績アプリ向けのPythonバックエンドを作りました。Riot Games APIを呼び出し、プレイヤー・試合JSONを処理し、Data Dragonのメタデータと組み合わせて、ランク、チャンピオン、アイテム、対戦相手、KDAを構造化します。",
    projectLeagueMetric: "外部ゲームデータをアプリで使いやすい形に変換",
    projectOutcomeTitle: "League 試合結果分析",
    researchLabel: "研究プロジェクト",
    projectOutcomeBody:
      "65,000件以上のLeague of Legends試合データを分析し、スキル帯によって試合結果の予測しやすさがどう変わるかを比較しました。Pandasで整形し、Random Forest、Decision Tree、MLPなどのscikit-learnモデルを試しました。",
    projectOutcomeMetric: "試合を整形し、スキル帯で分類し、モデル化",
    skillsEyebrow: "貢献できること",
    skillsTitle: "上のプロジェクトで示せるスキルです。",
    skillsLangTitle: "言語",
    skillsBackendTitle: "バックエンド・データ",
    skillsMLTitle: "機械学習",
    skillsPracticeTitle: "開発姿勢",
    storyEyebrow: "バックグラウンド",
    storyTitle: "授業と研究経験",
    storyBody:
      "C++、データ構造、アルゴリズム、離散数学、線形代数、発展的なPythonを学んでいます。感染症研究室での経験を通して、患者データの整理、図表作成、結果をわかりやすく再現可能に伝える練習をしてきました。",
    timelineUcla: "UCLA Mathematics of Computation 学士課程、2029年卒業予定",
    timelineAa: "Mathematics and Natural Sciences A.A. 取得、Summa Cum Laude",
    timelineResearch: "感染症研究室でBiomedical Research Assistantとして勤務",
    contactEyebrow: "連絡先",
    contactTitle: "アメリカ・日本でのソフトウェアエンジニアリング、またはデータサイエンスの機会に関心があります。",
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
