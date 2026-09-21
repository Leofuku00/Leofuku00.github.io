const copy = {
  en: {
    skip: "Skip to content",
    navWork: "Work",
    navSkills: "Skills",
    navStory: "Experience",
    navContact: "Contact",
    heroEyebrow: "UCLA Mathematics of Computation",
    heroTitle: "Leo Fukunaga",
    heroSubtitle:
      "Software engineering and machine learning internship candidate. Experience includes PyTorch computer vision, geospatial analysis, Python data pipelines, API integration, and machine learning evaluation.",
    heroPrimary: "View projects",
    heroSecondary: "GitHub",
    signalRoleLabel: "Target",
    signalRole: "SWE / data science internships",
    signalSchoolLabel: "Education",
    signalSchool: "UCLA, Mathematics of Computation major",
    signalFocusLabel: "Focus",
    signalFocus: "Software, machine learning, and geospatial data",
    focusOneLabel: "Backend",
    focusOne: "Python services, Flask APIs, data validation, and Git",
    focusTwoLabel: "Data",
    focusTwo: "Pandas cleaning, SQLite schema design, reproducible pipelines",
    focusThreeLabel: "ML",
    focusThree: "PyTorch, scikit-learn, segmentation, TF-IDF, and NMF",
    experienceEyebrow: "Current internship",
    experienceTitle: "Building machine-learning tools for geospatial analysis",
    experienceRole: "AI / Machine Learning Intern",
    experienceBody:
      "Developing and evaluating semantic-segmentation models for satellite and aerial imagery with Python and PyTorch. Building QGIS, GRASS GIS, and Python workflows to support flood-risk and accessibility analysis.",
    workEyebrow: "Projects",
    workTitle: "Data-driven development and analysis",
    repoLink: "Repository",
    projectRmpTitle: "Professor review rating prediction",
    projectRmpBody:
      "Built a Python pipeline that collects RateMyProfessors review data for UC campuses, cleans review text and tags, stores the data in normalized SQLite tables, and runs cross-validated ML experiments to predict clarity and difficulty ratings.",
    projectRmpMetric: "reviews imported, cleaned, and prepared for modeling",
    projectRmpNote:
      "Includes grouped 5-fold cross-validation to reduce leakage between professors.",
    projectLeagueTitle: "League of Legends match history",
    projectLeagueBody:
      "Built the full match history app: API integration, data parsing, and the user-facing dashboard. It calls Riot Games APIs, handles player and match JSON responses, joins Data Dragon metadata, and displays rank, champions, items, opponents, and KDA.",
    projectLeagueMetric: "turns third-party game data into usable application data",
    projectOutcomeTitle: "League win/loss prediction analysis",
    researchLabel: "Research project",
    projectOutcomeBody:
      "Analyzed more than 65,000 League of Legends games to compare how predictable match outcomes are at different skill levels. Cleaned the data with Pandas and tested multiple scikit-learn models, including Random Forest, Decision Tree, and MLP.",
    projectOutcomeMetric: "games cleaned, grouped by skill level, and modeled",
    skillsEyebrow: "Skills",
    skillsTitle: "Core technical skills",
    skillsLangTitle: "Languages",
    skillsBackendTitle: "Web, APIs, and data",
    skillsMLTitle: "Machine learning",
    skillsPracticeTitle: "Geospatial and workflows",
    storyEyebrow: "Experience",
    storyTitle: "Research and education",
    storyBody:
      "At Helios RS, I develop and evaluate semantic-segmentation models for satellite and aerial imagery with Python and PyTorch, while building QGIS and GRASS GIS workflows for geospatial analysis. Previously, biomedical research at the Lundquist Institute gave me experience interpreting clinical data and preparing publication figures.",
    timelineUcla: "Expected B.S. in Mathematics of Computation at UCLA",
    timelineResearch: "Biomedical Research Assistant, The Lundquist Institute",
    timelineHarbor: "A.A. in Liberal Arts and Sciences, Los Angeles Harbor College",
    timelineAsahi: "Asahi-Gakuen, Japanese government-supported supplementary school",
    contactEyebrow: "Contact",
    contactTitle: "Open to software engineering or data science internships.",
    demoLink: "Demo",
    resumeEnglishLink: "Resume (English)",
    resumeJapaneseLink: "Resume (Japanese)",
  },
  ja: {
    skip: "本文へ移動",
    navWork: "プロジェクト",
    navSkills: "スキル",
    navStory: "経験・経歴",
    navContact: "連絡先",
    heroEyebrow: "UCLA Mathematics of Computation",
    heroTitle: "福永怜生",
    heroSubtitle:
      "志望分野はソフトウェアエンジニア／機械学習系インターン。Python・PyTorchによる画像モデル、地理空間分析、データ処理、API連携、機械学習モデル評価の経験があります。",
    heroPrimary: "プロジェクトを見る",
    heroSecondary: "GitHub",
    signalRoleLabel: "志望",
    signalRole: "ソフトウェアエンジニア／データサイエンス系",
    signalSchoolLabel: "大学・専攻",
    signalSchool: "UCLA Mathematics of Computation 専攻",
    signalFocusLabel: "応募地域",
    signalFocus: "ソフトウェア、機械学習、地理空間データ",
    focusOneLabel: "バックエンド",
    focusOne: "Pythonサービス、Flask API、データ検証、Git",
    focusTwoLabel: "データ",
    focusTwo: "Pandasでの前処理、SQLite設計、再現可能な処理フロー",
    focusThreeLabel: "機械学習",
    focusThree: "PyTorch、scikit-learn、セグメンテーション、TF-IDF / NMF",
    experienceEyebrow: "現在のインターン",
    experienceTitle: "地理空間分析のための機械学習ツール開発",
    experienceRole: "AI / Machine Learning Intern",
    experienceBody:
      "PythonとPyTorchを使い、衛星・航空画像のセマンティックセグメンテーションモデルを開発・評価しています。QGIS、GRASS GIS、Pythonによる洪水リスク・アクセシビリティ分析のワークフローも構築しています。",
    workEyebrow: "主なプロジェクト",
    workTitle: "実データを扱った開発・分析",
    repoLink: "リポジトリ",
    projectRmpTitle: "教授レビューの評価予測",
    projectRmpBody:
      "UCキャンパスのRateMyProfessorsレビューを対象に、データ収集、前処理、SQLiteへの保存、機械学習モデルの比較までを実装。レビュー本文とタグ情報を特徴量化し、clarity / difficulty の予測モデルを検証。",
    projectRmpMetric: "約48万件のレビューを処理",
    projectRmpNote:
      "教授ごとに分割したGrouped 5-fold CVで、評価時のデータリークを抑制。",
    projectLeagueTitle: "League of Legends 戦績アプリ",
    projectLeagueBody:
      "API連携、データ処理、画面表示まで一人で実装した戦績アプリ。Riot Games APIからプレイヤー情報と試合履歴を取得し、Data Dragonのメタデータと組み合わせて、ランク、使用チャンピオン、アイテム、対戦相手、KDAなどを表示。",
    projectLeagueMetric: "外部APIのデータをアプリ用に整形",
    projectOutcomeTitle: "League 勝敗予測分析",
    researchLabel: "研究プロジェクト",
    projectOutcomeBody:
      "65,000件以上の試合データを使い、スキル帯による勝敗予測のしやすさの違いを分析。Pandasで前処理を行い、Random Forest、Decision Tree、MLPなどのモデルを比較検証。",
    projectOutcomeMetric: "65,000件以上の試合を分析",
    skillsEyebrow: "スキル",
    skillsTitle: "主な技術",
    skillsLangTitle: "言語",
    skillsBackendTitle: "Web・API・データ処理",
    skillsMLTitle: "機械学習",
    skillsPracticeTitle: "地理空間・開発フロー",
    storyEyebrow: "経験・経歴",
    storyTitle: "研究と教育",
    storyBody:
      "Helios RSでは、PythonとPyTorchを使って衛星・航空画像のセマンティックセグメンテーションモデルを開発・評価し、QGIS・GRASS GISとPythonによる地理空間分析にも取り組んでいます。以前はLundquist Instituteで臨床データの解釈や論文用の図表作成を経験しました。",
    timelineUcla: "UCLA Mathematics of Computation, 2029年卒業予定",
    timelineResearch: "The Lundquist Institute、Biomedical Research Assistant",
    timelineHarbor: "Los Angeles Harbor College、Liberal Arts and Sciences A.A.",
    timelineAsahi: "Asahi-Gakuen、日本政府認定の補習校",
    contactEyebrow: "連絡先",
    contactTitle: "米国・日本のソフトウェアエンジニア／データサイエンス系インターンを志望",
    demoLink: "デモ",
    resumeEnglishLink: "英文レジュメ",
    resumeJapaneseLink: "和文履歴書",
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
