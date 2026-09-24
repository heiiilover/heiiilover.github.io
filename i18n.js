const english = {
  skip: 'Skip to main content',
  homeAria: 'Back to home',
  navAria: 'Main navigation',
  navPortfolio: 'Portfolio',
  navBlog: 'Blog',
  navResume: 'Résumé',
  navContact: 'Contact ↗',
  heroEyebrow: 'Explore · Build · Document',
  heroTitle: 'Hi,<br />I’m <span class="highlight">heiiilover<span class="highlight-dot">.</span></span>',
  heroDescription: 'I explore CPU architecture, operating systems, and computer vision. This space collects what I am learning, building, and thinking about.',
  heroAbout: 'About me ↗',
  heroWork: 'View projects ↓',
  heroNote: 'With sincerity and persistence, even metal and stone will yield.',
  artCaption: 'Stay curious. Keep learning.',
  aboutTitle: 'Let’s get <span class="serif-accent">acquainted.</span>',
  aboutLead: 'Hello, I’m <span class="name-placeholder">heiiilover</span>.',
  aboutP1: 'My GitHub profile lists Northeastern University. I am exploring LoongArch CPUs, operating systems, and computer vision, and I enjoy turning abstract ideas into concrete understanding through experiments and debugging.',
  aboutP2: 'Lately I have been working through Rust OS exercises, small YOLOv11 and OpenCV4 object detection experiments, and the organization of my MIPS CPU RTL project.',
  aboutGithub: 'Visit my GitHub ↗',
  exploreTitle: 'Explore this site<span class="heading-period">.</span>',
  exploreIntro: 'Projects, writing, and experience<br />in one small space.',
  featurePortfolio: 'My MIPS CPU RTL, the collaborative FinDynAgent project, and open-source work I explore on GitHub.',
  featurePortfolioLink: 'View projects ↗',
  featureBlog: 'A future home for learning notes, experiments, and ideas.',
  featureBlogLink: 'Visit the blog ↗',
  featureResume: 'A brief look at my interests, tools, and public projects.',
  featureResumeLink: 'Learn more ↗',
  contactTitle: 'Every conversation starts with <span>hello.</span>',
  contactDescription: 'I welcome conversations about CPU architecture, operating systems, and computer vision.',
  contactGithub: 'Find me on GitHub ↗',
  footerTagline: 'Learn, experiment, grow.',
  avatarCreditLabel: 'Avatar: ',
  backTop: 'Back to top ↑',
  backHome: 'Back to home ↑',
  portfolioTitle: 'Things I have built,<br /><span class="highlight">and projects I explore<span class="highlight-dot">.</span></span>',
  portfolioIntro: 'My own RTL project, alongside open-source repositories I follow on GitHub. Forks are clearly labeled.',
  projectCpuType: 'Independent project / Verilog',
  projectCpuTitle: 'Five-stage MIPS CPU',
  projectCpuDescription: 'RTL from my myCPU directory: a five-stage pipeline, 2 KiB instruction and data caches, an AXI master interface, CP0, exception handling, and iterative division.',
  collabType: 'Collaborative project / Python',
  projectFinDescription: 'A multi-agent system for constructing dynamic financial computer-use benchmarks. I contributed the initial source upload and README documentation.',
  viewRepository: 'View repository ↗',
  forkType: 'Public fork / Exploring',
  projectAiDescription: 'A paper retrieval and organization system for AI Scientist. This is a public fork on my GitHub account.',
  projectDocsDescription: 'A public fork of the PaddlePaddle documentation repository, which I use to follow framework documentation and technical content.',
  projectPaddleDescription: 'A public fork of the PaddlePaddle deep learning framework. The upstream project is credited as such.',
  blogTitle: 'Write it down,<br /><span class="highlight">keep a trace of ideas<span class="highlight-dot">.</span></span>',
  blogIntro: 'A place for notes on CPU design, Rust OS exercises, object detection experiments, and debugging.',
  blogEmptyTitle: 'The first post is on its way.',
  blogEmptyDescription: 'The blog is ready. When I have a note worth sharing, it will appear here.',
  resumeTitle: 'Hello,<br /><span class="highlight">here is my background<span class="highlight-dot">.</span></span>',
  resumeIntro: 'A short overview of the interests and projects I have shared publicly on GitHub. More formal experience can be added later.',
  resumeProfileTitle: 'Profile',
  resumeProfileText: 'heiiilover. Interested in CPU architecture, operating systems, and computer vision. I like to understand systems by building and experimenting.',
  resumeEducationTitle: 'Education',
  resumeEducationText: 'My public GitHub profile lists Northeastern University. Major and dates have not been shared publicly.',
  resumeFocusTitle: 'Areas of interest',
  resumeFocusText: 'LoongArch CPU architecture and simulation, Rust operating system exercises, YOLOv11 object detection, and OpenCV4 image processing.',
  resumeProjectsTitle: 'Public projects',
  resumeProjectsText: 'Five-stage MIPS CPU RTL; source and documentation work on FinDynAgent; plus public forks related to AI Scientist, PaddlePaddle, and its documentation.'
};

const pageTitles = {
  'index.html': ['heiiilover · Personal Website', 'heiiilover’s personal website: CPU architecture, operating systems, computer vision, and open-source projects.'],
  'portfolio.html': ['Portfolio · heiiilover', 'Projects and public repositories by heiiilover, including a five-stage MIPS CPU.'],
  'blog.html': ['Blog · heiiilover', 'Notes on CPU design, operating systems, and computer vision by heiiilover.'],
  'resume.html': ['Résumé · heiiilover', 'heiiilover’s public interests, background, and projects.']
};

const params = new URLSearchParams(location.search);
const isEnglish = params.get('lang') === 'en';
const toggle = document.querySelector('[data-lang-toggle]');

if (isEnglish) {
  document.documentElement.lang = 'en';

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const translation = english[element.dataset.i18n];
    if (translation !== undefined) element.textContent = translation;
  });
  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    const translation = english[element.dataset.i18nHtml];
    if (translation !== undefined) element.innerHTML = translation;
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    const translation = english[element.dataset.i18nAria];
    if (translation !== undefined) element.setAttribute('aria-label', translation);
  });
  document.querySelectorAll('.brand-mark').forEach((element) => { element.textContent = 'H'; });

  const page = location.pathname.split('/').pop() || 'index.html';
  const metadata = pageTitles[page];
  if (metadata) {
    document.title = metadata[0];
    document.querySelector('meta[name="description"]').content = metadata[1];
  }

  document.querySelectorAll('a[href^="./"]').forEach((link) => {
    const url = new URL(link.getAttribute('href'), location.href);
    url.searchParams.set('lang', 'en');
    link.href = url.href;
  });
}

toggle.textContent = isEnglish ? '中文' : 'EN';
toggle.setAttribute('aria-label', isEnglish ? '切换到中文' : 'Switch to English');
toggle.addEventListener('click', () => {
  const url = new URL(location.href);
  if (isEnglish) url.searchParams.delete('lang');
  else url.searchParams.set('lang', 'en');
  location.href = url.href;
});
