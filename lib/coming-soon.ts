// Coming-soon landing page served at the apex (kortexconsulting.com) until
// the site is ready to flip live. To flip:
//   1. Delete middleware.ts (or change APEX_HOST to something that won't match)
//   2. Commit + push — CF auto-deploys, apex now serves the full Next.js site

export const COMING_SOON_HTML = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Kortex Consulting — AI &amp; Automation, Built Inside Your Business</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Custom AI &amp; Automation Solutions for businesses that want AI built on their own data, in their own environment. From small business to enterprise.">
  <meta name="robots" content="noindex, nofollow">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <meta property="og:image" content="https://staging.kortexconsulting.com/opengraph-image">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Kortex Consulting — AI that knows your business. Built into your environment.">
  <meta property="og:url" content="https://kortexconsulting.com">
  <meta name="twitter:image" content="https://staging.kortexconsulting.com/opengraph-image">
  <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500&family=Instrument+Serif:ital,wght@0,400;1,400&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
    :root{--bg:#07090C;--surface:#12141C;--border:#1E2130;--border-bright:#2A2E42;--fg:#E8E9F0;--fg-dim:#B6BAC5;--muted:#8A8F9A;--muted-2:#545967;--accent:#5EEAD4}
    *{box-sizing:border-box;margin:0;padding:0}
    html,body{height:100%;background:var(--bg);color:var(--fg);font-family:'Geist',system-ui,sans-serif;-webkit-font-smoothing:antialiased}
    body{min-height:100vh;display:flex;flex-direction:column;overflow-x:hidden}
    .bg-grid{position:fixed;inset:0;pointer-events:none;background-image:linear-gradient(to right,rgba(255,255,255,.015) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,.015) 1px,transparent 1px);background-size:64px 64px;opacity:.6}
    .bg-glow{position:fixed;inset:0;pointer-events:none;background:radial-gradient(ellipse 70% 50% at 50% 50%,rgba(94,234,212,.07),transparent 65%)}
    nav{padding:32px 40px;display:flex;align-items:center;gap:12px;z-index:2;position:relative}
    nav .mark{width:24px;height:24px}
    nav .wordmark{font-size:17px;font-weight:500;letter-spacing:-.01em}
    .pill{display:inline-flex;align-items:center;gap:8px;padding:6px 12px;border:1px solid var(--border-bright);background:rgba(18,20,28,.7);backdrop-filter:blur(8px);border-radius:999px;font-family:'JetBrains Mono',monospace;font-size:11px;text-transform:uppercase;letter-spacing:.15em;color:var(--fg-dim)}
    .pill-dot{width:6px;height:6px;background:var(--accent);border-radius:50%;animation:pulse 2s ease-in-out infinite;box-shadow:0 0 8px var(--accent)}
    @keyframes pulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.4);opacity:.6}}
    main{flex:1;display:flex;align-items:center;justify-content:center;padding:24px 40px;z-index:2;position:relative}
    .content{max-width:780px;text-align:center}
    h1{font-family:'Instrument Serif',Georgia,serif;font-weight:400;font-size:72px;line-height:1.0;letter-spacing:-.02em;margin-top:36px}
    h1 em{color:var(--accent);font-style:italic}
    .sub{margin-top:28px;font-size:18px;line-height:1.6;color:var(--fg-dim);max-width:620px;margin-left:auto;margin-right:auto}
    .cta{margin-top:40px;display:inline-flex;align-items:center;gap:8px;padding:14px 24px;background:var(--fg);color:var(--bg);border-radius:999px;font-weight:500;text-decoration:none;font-size:15px;transition:all .2s;border:1px solid transparent}
    .cta:hover{background:var(--accent)}
    .cta svg{transition:transform .2s}
    .cta:hover svg{transform:translate(2px,-2px)}
    footer{padding:24px 40px;display:flex;justify-content:space-between;align-items:center;font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--muted-2);text-transform:uppercase;letter-spacing:.15em;z-index:2;position:relative}
    footer a{color:inherit;text-decoration:none;transition:color .2s}
    footer a:hover{color:var(--accent)}
    @media (max-width:600px){h1{font-size:44px}.sub{font-size:16px}nav,main,footer{padding-left:24px;padding-right:24px}footer{flex-direction:column;gap:8px;text-align:center}}
  </style>
</head>
<body>
  <div class="bg-grid"></div>
  <div class="bg-glow"></div>

  <nav>
    <svg class="mark" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Kortex">
      <rect x="1.5" y="1.5" width="21" height="21" rx="4" stroke="#E8E9F0" stroke-opacity=".35" stroke-width="1"/>
      <line x1="5" y1="9" x2="19" y2="9" stroke="#E8E9F0" stroke-opacity=".55" stroke-width="1.25" stroke-linecap="round"/>
      <line x1="5" y1="15" x2="19" y2="15" stroke="#5EEAD4" stroke-width="1.75" stroke-linecap="round"/>
      <circle cx="12" cy="15" r="2" fill="#5EEAD4"/>
      <circle cx="12" cy="15" r="4" fill="#5EEAD4" fill-opacity=".15"/>
    </svg>
    <span class="wordmark">Kortex</span>
  </nav>

  <main>
    <div class="content">
      <div class="pill">
        <span class="pill-dot"></span>
        Launching Soon
      </div>
      <h1>AI that knows<br><em>your business.</em></h1>
      <p class="sub">
        Kortex is an AI &amp; automation consultancy that designs and ships custom AI agents, generative AI solutions, and workflow automation &mdash; built directly into your business, on your data, in your environment. From small business to enterprise.
      </p>
      <a class="cta" href="mailto:info@kortexconsulting.com?subject=Kortex%20Consulting%20%E2%80%94%20Inquiry">
        Get in touch
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
      </a>
    </div>
  </main>

  <footer>
    <div>&copy; Kortex Consulting</div>
    <div><a href="mailto:info@kortexconsulting.com">info@kortexconsulting.com</a></div>
  </footer>
</body>
</html>`;
