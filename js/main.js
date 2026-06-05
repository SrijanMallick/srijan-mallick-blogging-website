/**
 * Srijan Mallick Portfolio — Main JavaScript
 * Handles navigation, dynamic content rendering, blog filters, and contact form.
 */

const SITE = {
  name: 'Srijan Mallick',
  email: 'srijanmallicknita@gmail.com',
  linkedin: 'https://linkedin.com/in/srijanmallick',
  github: 'https://github.com/SrijanMallick',
  baseUrl: 'https://www.srijanmallick.in'
};

const BLOGS = [
  {
    id: 'ai-business-analysis',
    title: 'Why AI Will Reshape Business Analysis Faster Than Most Professionals Expect',
    slug: 'blogs/ai-business-analysis.html',
    date: '2025-04-15',
    category: 'Artificial Intelligence',
    summary: 'How generative AI is transforming requirements gathering, stakeholder analysis, and the core competencies every business analyst needs to develop.',
    image: 'assets/images/blog-ai.svg',
    readTime: '8 min read'
  },
  {
    id: 'ecommerce-market',
    title: "What I Learned From Studying India's E-commerce Market",
    slug: 'blogs/ecommerce-market.html',
    date: '2025-03-22',
    category: 'Industry Analysis',
    summary: 'A deep dive into market structure, competitive dynamics, and the strategic shifts shaping India\'s rapidly evolving e-commerce landscape.',
    image: 'assets/images/blog-ecommerce.svg',
    readTime: '10 min read'
  },
  {
    id: 'product-management-future',
    title: 'The Future of Product Management in an AI-First World',
    slug: 'blogs/product-management-future.html',
    date: '2025-02-10',
    category: 'Product Management',
    summary: 'Product managers must rethink discovery, prioritization, and delivery when AI becomes a core part of every product workflow.',
    image: 'assets/images/blog-pm.svg',
    readTime: '9 min read'
  },
  {
    id: 'boring-problems',
    title: 'How Great Products Solve Boring Problems',
    slug: 'blogs/boring-problems.html',
    date: '2025-01-18',
    category: 'Product Strategy',
    summary: 'The most valuable products often address unglamorous operational challenges that enterprises and consumers face every single day.',
    image: 'assets/images/blog-boring.svg',
    readTime: '7 min read'
  },
  {
    id: 'startup-lessons',
    title: "Lessons From India's Fastest Growing Startups",
    slug: 'blogs/startup-lessons.html',
    date: '2024-12-05',
    category: 'Startups',
    summary: 'Patterns in growth strategy, unit economics, and organizational design observed across India\'s most successful startup journeys.',
    image: 'assets/images/blog-startup.svg',
    readTime: '11 min read'
  }
];

const PROJECTS = [
  {
    title: 'Hospital Bed Routing System',
    description: 'Web-based prototype for a centralized patient triage and hospital bed routing system for government hospitals in India. Matches patient severity with real-time bed availability across ICU, oxygen, and general wards.',
    tools: ['TypeScript', 'React', 'Node.js', 'Express', 'Routing Logic'],
    results: 'Built a full triage-to-routing workflow with severity classification, distance-based hospital ranking, fallback recommendations, and an admin panel for bed management.',
    link: 'https://github.com/SrijanMallick/hospital-bed-routing-system',
    date: '2026-01-06'
  },
  {
    title: 'Blinkit EDA — Product & Sales Analysis',
    description: 'Exploratory data analysis of Blinkit\'s product inventory and sales performance to uncover category trends, top-selling items, and pricing distribution across the quick-commerce catalog.',
    tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    results: 'Identified dominant product categories, top-performing SKUs, and price-point patterns compiled into a business intelligence presentation.',
    link: 'https://github.com/SrijanMallick/BlinkIt-EDA-Project',
    date: '2025-10-03'
  },
  {
    title: 'E-commerce Sales Analysis Dashboard',
    description: 'Interactive Power BI dashboard analyzing sales and profit performance for a Shopify-style e-commerce business with geographic, product, and KPI-level drill-downs.',
    tools: ['Power BI', 'DAX', 'Data Visualization', 'KPI Analysis'],
    results: 'Delivered near real-time visibility into total sales, profit margin, order volume, and regional performance across the United States.',
    link: 'https://github.com/SrijanMallick/Ecommerce-Sales-Analysis-Project',
    date: '2025-10-05'
  },
  {
    title: 'Credit Card Fraud Risk Analysis',
    description: 'Power BI risk dashboard to monitor, identify, and analyze potentially fraudulent credit card transactions across channels and time periods.',
    tools: ['Power BI', 'DAX', 'Risk Analytics', 'CSV Data Pipeline'],
    results: 'Visualized fraud rate, total fraud amount, transaction-type vulnerabilities, and time-series fraud trends for proactive risk management.',
    link: 'https://github.com/SrijanMallick/Credit-Card-Fraud-Risk-Analysis-Project',
    date: '2025-10-05'
  },
  {
    title: 'Telecom Customer Churn Prediction',
    description: 'End-to-end churn analysis for a telecommunications provider using EDA, feature engineering, and machine learning to predict at-risk customers.',
    tools: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
    results: 'Identified contract type, tenure, and service subscriptions as key churn drivers and built classification models evaluated on accuracy, precision, recall, and F1-score.',
    link: 'https://github.com/SrijanMallick/Telecom-Churn-Analysis',
    date: '2025-10-03'
  },
  {
    title: 'Diwali Sales Exploratory Analysis',
    description: 'EDA on festive-season retail sales data to understand customer purchasing behavior, high-value segments, and category performance during Diwali.',
    tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    results: 'Found married customers, the 26–35 age group, and female buyers as top revenue contributors; highlighted dominant product categories and regional demand clusters.',
    link: 'https://github.com/SrijanMallick/Exploratory-Data-Analysis-Diwali-Sales',
    date: '2025-12-13'
  },
  {
    title: 'Warehouse Supply Chain Dashboard',
    description: 'Power BI operations dashboard tracking inbound/outbound inventory movement, stock levels, warehouse region performance, and order fulfilment status.',
    tools: ['Power BI', 'DAX', 'Supply Chain Analytics', 'Operations KPIs'],
    results: 'Enabled analysis of inventory movement by category, delivery performance, stock shortages, and operational bottlenecks across warehouse locations.',
    link: 'https://github.com/SrijanMallick/Warehouse-Supply-Chain-Analysis',
    date: '2025-12-03'
  }
];

const CASE_STUDIES = [
  {
    title: 'Culture Circle — Demand Expansion Strategy',
    slug: 'case-studies/culture-circle.html',
    date: '2025-12-22',
    summary: 'Strategic analysis of demand-side expansion in India\'s luxury resale market by targeting aspirational first-salary buyers through trust-led acquisition.',
    image: 'assets/images/case-edtech.svg',
    industry: 'Luxury Resale',
    pdf: 'https://github.com/SrijanMallick/Business-Case-Studies/blob/main/Culture%20Circle%20-%20Case%20Study%20by%20Srijan%20Mallick.pdf'
  },
  {
    title: 'The Economics of the iPhone',
    slug: 'case-studies/iphone-economics.html',
    date: '2025-10-03',
    summary: 'Product economics case study examining iPhone pricing strategy, market positioning, and the business logic behind Apple\'s premium product model.',
    image: 'assets/images/case-iphone.svg',
    industry: 'Consumer Technology',
    pdf: 'https://github.com/SrijanMallick/Business-Case-Studies/blob/main/Economics%20of%20Product%20(iPhone%20Case%20Study)-%20by%20Srijan%20Mallick%20(2).pdf'
  },
  {
    title: 'How PW Avoided BYJU\'S Mistakes',
    slug: 'case-studies/pw-edtech.html',
    date: '2025-10-03',
    summary: 'Competitive analysis of Physics Wallah\'s strategic growth in Indian EdTech — business model choices, positioning, and lessons from BYJU\'S missteps.',
    image: 'assets/images/case-edtech.svg',
    industry: 'EdTech',
    pdf: 'https://github.com/SrijanMallick/Business-Case-Studies/blob/main/How%20PW%20avoided%20BYJU%27S%20mistakes%20-%20Case%20Study%20by%20Srijan.pdf'
  },
  {
    title: 'Meesho\'s Business Model',
    slug: 'case-studies/meesho.html',
    date: '2025-10-03',
    summary: 'Analysis of Meesho\'s social-commerce model covering market penetration in tier-2/3 India, reseller networks, and unit economics innovation.',
    image: 'assets/images/case-ecommerce.svg',
    industry: 'E-commerce',
    pdf: 'https://github.com/SrijanMallick/Business-Case-Studies/blob/main/MEESHO%20%20CASE%20STUDY.pdf'
  },
  {
    title: 'Mercedes-Benz Strategy Analysis',
    slug: 'case-studies/mercedes-strategy.html',
    date: '2025-10-03',
    summary: 'Strategic evaluation of Mercedes-Benz brand positioning, luxury market dynamics, product portfolio decisions, and competitive strategy.',
    image: 'assets/images/case-mercedes.svg',
    industry: 'Automotive',
    pdf: 'https://github.com/SrijanMallick/Business-Case-Studies/blob/main/Mercedes%20Benz%20Case%20Study%20-%20Srijan%20Mallick%20.pdf'
  },
  {
    title: 'Indian Automobile Sector Analysis',
    slug: 'case-studies/indian-automobile.html',
    date: '2025-10-03',
    summary: 'Market analysis of India\'s automobile industry covering growth drivers, regulatory impact, competitive landscape, and key player strategies.',
    image: 'assets/images/case-mercedes.svg',
    industry: 'Automotive',
    pdf: 'https://github.com/SrijanMallick/Business-Case-Studies/blob/main/Indian%20Automobile%20Sector%20-%20Case%20Study%20by%20Srijan%20Mallick%20.pdf'
  },
  {
    title: 'The Niche Market of Hypercars',
    slug: 'case-studies/hypercar-industry.html',
    date: '2025-10-03',
    summary: 'Study of the ultra-luxury hypercar segment — niche marketing, brand exclusivity, engineering innovation, and buyer psychology.',
    image: 'assets/images/case-hypercar.svg',
    industry: 'Automotive',
    pdf: 'https://github.com/SrijanMallick/Business-Case-Studies/blob/main/Hyper%20Car%20Case%20Study%20-%20by%20Srijan%20Mallick%20.pdf'
  }
];

/* --- Utility Functions --- */

function formatDate(dateStr) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateStr).toLocaleDateString('en-US', options);
}

function getLatestItems(items, count) {
  return [...items]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, count);
}

function getPathPrefix() {
  const path = window.location.pathname;
  if (path.includes('/blogs/') || path.includes('/case-studies/')) {
    return '../';
  }
  return '';
}

function resolvePath(relativePath) {
  return getPathPrefix() + relativePath;
}

/* --- Navigation --- */

function initNavigation() {
  const prefix = getPathPrefix();
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  const navHTML = `
    <nav class="navbar" role="navigation" aria-label="Main navigation">
      <div class="container">
        <a href="${prefix}index.html" class="nav-brand">${SITE.name}</a>
        <button class="nav-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul class="nav-menu">
          <li><a href="${prefix}index.html" ${currentPage === 'index.html' || currentPage === '' ? 'class="active"' : ''}>Home</a></li>
          <li><a href="${prefix}about.html" ${currentPage === 'about.html' ? 'class="active"' : ''}>About</a></li>
          <li><a href="${prefix}projects.html" ${currentPage === 'projects.html' ? 'class="active"' : ''}>Projects</a></li>
          <li><a href="${prefix}case-studies.html" ${currentPage === 'case-studies.html' ? 'class="active"' : ''}>Case Studies</a></li>
          <li><a href="${prefix}blogs.html" ${currentPage === 'blogs.html' ? 'class="active"' : ''}>Blogs</a></li>
          <li><a href="${prefix}contact.html" ${currentPage === 'contact.html' ? 'class="active"' : ''}>Contact</a></li>
        </ul>
      </div>
    </nav>
  `;

  const footerHTML = `
    <footer class="footer" role="contentinfo">
      <div class="container">
        <div class="footer-links">
          <a href="${SITE.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="${SITE.github}" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:${SITE.email}">Email</a>
        </div>
        <p class="footer-copy">&copy; ${new Date().getFullYear()} ${SITE.name}. All rights reserved.</p>
      </div>
    </footer>
  `;

  const navPlaceholder = document.getElementById('site-nav');
  const footerPlaceholder = document.getElementById('site-footer');

  if (navPlaceholder) navPlaceholder.innerHTML = navHTML;
  if (footerPlaceholder) footerPlaceholder.innerHTML = footerHTML;

  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
    });

    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

/* --- Card Renderers --- */

function renderBlogCard(blog, prefix) {
  return `
    <article class="card">
      <img src="${prefix}${blog.image}" alt="" class="card-image" width="400" height="225" loading="lazy">
      <div class="card-meta">
        <span class="card-category">${blog.category}</span>
        <span>${formatDate(blog.date)}</span>
      </div>
      <h3>${blog.title}</h3>
      <p>${blog.summary}</p>
      <a href="${prefix}${blog.slug}" class="card-link">Read More</a>
    </article>
  `;
}

function renderProjectCard(project) {
  const toolsHTML = project.tools.map(t => `<span class="tag">${t}</span>`).join('');
  const isExternal = project.link && project.link.startsWith('http');
  return `
    <article class="card project-card">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="tag-list">${toolsHTML}</div>
      <div class="project-results"><strong>Results:</strong> ${project.results}</div>
      <a href="${project.link}" class="card-link"${isExternal ? ' target="_blank" rel="noopener noreferrer"' : ''}>View on GitHub</a>
    </article>
  `;
}

function renderCaseStudyCard(study, prefix) {
  const industryTag = study.industry
    ? `<span class="card-category">${study.industry}</span>`
    : '';
  return `
    <article class="card">
      <img src="${prefix}${study.image}" alt="" class="card-image" width="400" height="225" loading="lazy">
      <div class="card-meta">
        ${industryTag}
        <span>${formatDate(study.date)}</span>
      </div>
      <h3>${study.title}</h3>
      <p>${study.summary}</p>
      <a href="${prefix}${study.slug}" class="card-link">Read Case Study</a>
    </article>
  `;
}

function renderBlogListingCard(blog, prefix) {
  return `
    <article class="blog-card">
      <img src="${prefix}${blog.image}" alt="" class="blog-card-image" width="600" height="338" loading="lazy">
      <div class="blog-card-body">
        <div class="card-meta">
          <span class="card-category">${blog.category}</span>
          <span>${formatDate(blog.date)}</span>
        </div>
        <h3>${blog.title}</h3>
        <p>${blog.summary}</p>
        <a href="${prefix}${blog.slug}" class="card-link">Read More</a>
      </div>
    </article>
  `;
}

/* --- Page-Specific Init --- */

function initHomePage() {
  const prefix = getPathPrefix();

  const featuredBlogs = document.getElementById('featured-blogs');
  if (featuredBlogs) {
    featuredBlogs.innerHTML = getLatestItems(BLOGS, 3)
      .map(b => renderBlogCard(b, prefix))
      .join('');
  }

  const featuredCaseStudies = document.getElementById('featured-case-studies');
  if (featuredCaseStudies) {
    featuredCaseStudies.innerHTML = getLatestItems(CASE_STUDIES, 3)
      .map(s => renderCaseStudyCard(s, prefix))
      .join('');
  }

  const featuredProjects = document.getElementById('featured-projects');
  if (featuredProjects) {
    featuredProjects.innerHTML = getLatestItems(PROJECTS, 3)
      .map(p => renderProjectCard(p))
      .join('');
  }
}

function initProjectsPage() {
  const container = document.getElementById('projects-grid');
  if (container) {
    container.innerHTML = PROJECTS.map(p => renderProjectCard(p)).join('');
  }
}

function initCaseStudiesPage() {
  const prefix = getPathPrefix();
  const container = document.getElementById('case-studies-grid');
  if (container) {
    container.innerHTML = CASE_STUDIES
      .map(s => renderCaseStudyCard(s, prefix))
      .join('');
  }
}

function initBlogsPage() {
  const prefix = getPathPrefix();
  const grid = document.getElementById('blog-grid');
  const searchInput = document.getElementById('blog-search');
  const filterContainer = document.getElementById('category-filters');
  const paginationContainer = document.getElementById('pagination');

  if (!grid) return;

  const categories = ['All', ...new Set(BLOGS.map(b => b.category))];
  let currentCategory = 'All';
  let currentSearch = '';
  let currentPage = 1;
  const perPage = 4;

  if (filterContainer) {
    filterContainer.innerHTML = categories.map(cat => `
      <button class="filter-btn ${cat === 'All' ? 'active' : ''}" data-category="${cat}">${cat}</button>
    `).join('');

    filterContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('filter-btn')) {
        filterContainer.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        currentCategory = e.target.dataset.category;
        currentPage = 1;
        render();
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.toLowerCase();
      currentPage = 1;
      render();
    });
  }

  function getFilteredBlogs() {
    return BLOGS.filter(blog => {
      const matchesCategory = currentCategory === 'All' || blog.category === currentCategory;
      const matchesSearch = !currentSearch ||
        blog.title.toLowerCase().includes(currentSearch) ||
        blog.summary.toLowerCase().includes(currentSearch) ||
        blog.category.toLowerCase().includes(currentSearch);
      return matchesCategory && matchesSearch;
    }).sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  function render() {
    const filtered = getFilteredBlogs();
    const totalPages = Math.ceil(filtered.length / perPage) || 1;
    const start = (currentPage - 1) * perPage;
    const pageItems = filtered.slice(start, start + perPage);

    if (pageItems.length === 0) {
      grid.innerHTML = '<p class="empty-state">No articles found matching your criteria.</p>';
    } else {
      grid.innerHTML = pageItems.map(b => renderBlogListingCard(b, prefix)).join('');
    }

    if (paginationContainer) {
      paginationContainer.innerHTML = `
        <button id="prev-page" ${currentPage <= 1 ? 'disabled' : ''} aria-label="Previous page">Previous</button>
        <span class="pagination-info">Page ${currentPage} of ${totalPages}</span>
        <button id="next-page" ${currentPage >= totalPages ? 'disabled' : ''} aria-label="Next page">Next</button>
      `;

      document.getElementById('prev-page')?.addEventListener('click', () => {
        if (currentPage > 1) { currentPage--; render(); }
      });

      document.getElementById('next-page')?.addEventListener('click', () => {
        if (currentPage < totalPages) { currentPage++; render(); }
      });
    }
  }

  render();
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  const message = document.getElementById('form-message');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const subject = form.querySelector('#subject').value.trim();
    const body = form.querySelector('#message').value.trim();

    if (!name || !email || !subject || !body) {
      message.textContent = 'Please fill in all fields.';
      message.className = 'form-message error';
      return;
    }

    const mailtoLink = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${body}`)}`;
    window.location.href = mailtoLink;

    message.textContent = 'Thank you! Your email client should open shortly.';
    message.className = 'form-message success';
    form.reset();
  });
}

function initTableOfContents() {
  const tocList = document.getElementById('toc-list');
  const content = document.querySelector('.article-content');

  if (!tocList || !content) return;

  const headings = content.querySelectorAll('h2, h3');
  if (headings.length === 0) return;

  headings.forEach((heading, index) => {
    const id = heading.id || `section-${index}`;
    heading.id = id;

    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `#${id}`;
    a.textContent = heading.textContent;
    if (heading.tagName === 'H3') {
      li.classList.add('toc-item--sub');
    }
    li.appendChild(a);
    tocList.appendChild(li);
  });

  initMobileTocPanel();
}

function initMobileTocPanel() {
  const panel = document.querySelector('.toc-panel');
  const tocList = document.getElementById('toc-list');

  if (!panel || !tocList) return;

  const mq = window.matchMedia('(max-width: 768px)');

  const syncOpenState = () => {
    if (mq.matches) {
      panel.removeAttribute('open');
    } else {
      panel.setAttribute('open', '');
    }
  };

  syncOpenState();
  mq.addEventListener('change', syncOpenState);

  tocList.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link && mq.matches) {
      panel.removeAttribute('open');
    }
  });
}

function initRelatedArticles() {
  const container = document.getElementById('related-articles-grid');
  const currentSlug = document.body.dataset.blogSlug;

  if (!container || !currentSlug) return;

  const prefix = '../';
  const related = BLOGS
    .filter(b => b.id !== currentSlug)
    .slice(0, 3);

  container.innerHTML = related.map(b => renderBlogCard(b, prefix)).join('');
}

/* --- Initialize --- */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initHomePage();
  initProjectsPage();
  initCaseStudiesPage();
  initBlogsPage();
  initContactForm();
  initTableOfContents();
  initRelatedArticles();
});
