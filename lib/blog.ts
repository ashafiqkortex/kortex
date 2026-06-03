export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "callout"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "stat"; items: Array<{ value: string; label: string }> };

export type Faq = { q: string; a: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO — published date
  readingTime: string;
  author: string;
  // SEO
  metaDescription: string;
  keywords: string[];
  // Imagery
  hero: string; // path under /public
  heroAlt: string;
  // AEO — answer-first takeaways + FAQ (also rendered as JSON-LD FAQPage)
  takeaways: string[];
  faqs: Faq[];
  body: Block[];
};

export const POSTS: Post[] = [
  {
    slug: "best-software-for-contractors",
    title: "The 5 Software Tools Most Contractors Run (and Where Each One Stops)",
    excerpt:
      "An honest look at the tools running home services shops — what each one is genuinely good at, and the ceiling you hit with all of them.",
    category: "Tools",
    date: "2026-06-03",
    readingTime: "9 min read",
    author: "Asim, Kortex",
    metaDescription:
      "The best software for HVAC, plumbing, and electrical contractors — Jobber, Housecall Pro, ServiceTitan, QuickBooks, and CompanyCam — what each does well, and what to do when you outgrow them.",
    keywords: [
      "best software for contractors",
      "best HVAC software",
      "best field service software",
      "software for plumbing business",
      "ServiceTitan vs Housecall vs Jobber",
    ],
    hero: "/blog/best-software-for-contractors.png",
    heroAlt:
      "Abstract warm illustration of five separate software tools tangled together by manual connections",
    takeaways: [
      "Jobber and Housecall Pro fit small-to-mid shops; ServiceTitan fits larger operations; QuickBooks and CompanyCam fill the gaps.",
      "Every one of them is good at its slice — the problem is they don't talk to each other.",
      "Past a certain size you stop needing another tool and start needing the layer that connects (or replaces) the ones you have.",
    ],
    faqs: [
      {
        q: "What is the best software for HVAC and plumbing contractors?",
        a: "There's no single best — it depends on size. Jobber suits small, growing shops. Housecall Pro is a strong all-rounder for SMB home services. ServiceTitan fits larger operations that need deep dispatch and reporting. Most contractors also run QuickBooks for accounting and a tool like CompanyCam for field photos.",
      },
      {
        q: "What software do most contractors actually use?",
        a: "A typical home services stack is a field service platform (Jobber, Housecall Pro, or ServiceTitan), QuickBooks for accounting, and a point tool or two like CompanyCam for job photos or Podium for reviews. The catch is that these tools rarely connect, so staff end up re-entering data between them.",
      },
      {
        q: "When should a contractor stop adding software and build a custom system?",
        a: "When you're running several tools that don't talk to each other and a person — usually your office manager — has become the integration layer between them. At that point another subscription won't help; you need the connective layer that unifies your stack or a custom system built on your data.",
      },
    ],
    body: [
      {
        type: "p",
        text: "Search \"best software for contractors\" and you'll drown in listicles written by people who've never ridden along on a service call. So here's a straight one. These are the tools actually running HVAC, plumbing, and electrical shops right now, what each is genuinely good at, and the wall you hit with every one of them.",
      },
      {
        type: "p",
        text: "No affiliate links. No \"#1 best.\" Just the honest version.",
      },
      { type: "h2", text: "1. Jobber — best for small, growing shops" },
      {
        type: "p",
        text: "If you're a few trucks and you've finally outgrown a whiteboard and a shoebox of receipts, [Jobber](https://getjobber.com) is a great first real system. Scheduling, quoting, invoicing, a clean app your techs will actually open. It's cheap to start and you can be running in a weekend.",
      },
      {
        type: "p",
        text: "Where it stops: it's built for simple. Add trucks, add complexity, add the weird jobs, and Jobber starts feeling tight. It won't carry heavy dispatch or the custom logic a bigger operation runs on.",
      },
      { type: "h2", text: "2. Housecall Pro — the SMB all-rounder" },
      {
        type: "p",
        text: "[Housecall Pro](https://www.housecallpro.com) is the do-everything option for small and mid home services shops. Scheduling, dispatch, payments, even some marketing, all in one place, with a solid mobile experience. For a lot of shops it's the sweet spot.",
      },
      {
        type: "p",
        text: "Where it stops: it's opinionated. You run the business its way, not yours. Reporting and customization get thin once you're past a handful of trucks and you want the software to match how you actually operate.",
      },
      { type: "h2", text: "3. ServiceTitan — built for the big operations" },
      {
        type: "p",
        text: "[ServiceTitan](https://www.servicetitan.com) is the heavyweight. Deep field service management, real dispatch, serious reporting, payroll, the works. If you're running a large operation, it can genuinely run your floor.",
      },
      {
        type: "p",
        text: "Where it stops: price and weight. You're looking at around twenty grand a year, a long onboarding, and a platform that's overkill for plenty of shops. And for all that power, it still doesn't know your specific business — you adapt to it.",
      },
      { type: "h2", text: "4. QuickBooks — the accounting layer almost everyone runs" },
      {
        type: "p",
        text: "Nearly every contractor lands on [QuickBooks](https://quickbooks.intuit.com) eventually. Books, invoicing, payroll, and your accountant already speaks it. It's the financial backbone, and it earns its spot.",
      },
      {
        type: "p",
        text: "Where it stops: it's not a field tool, and it usually doesn't talk cleanly to your scheduling software. So someone keys the same job into QuickBooks and into your FSM. That double entry is the most common leak in the whole stack.",
      },
      { type: "h2", text: "5. CompanyCam — field photos that don't get lost" },
      {
        type: "p",
        text: "[CompanyCam](https://companycam.com) keeps job-site photos organized by project instead of buried in fifteen phones. Great for documentation, accountability, and settling \"that wasn't us\" disputes. Crews like it because it's dead simple.",
      },
      {
        type: "p",
        text: "Where it stops: it's one more island. The photos live in their own app, separate from the job, the invoice, and the customer record, unless you wire it in by hand.",
      },
      { type: "h2", text: "The real problem isn't any of these tools" },
      {
        type: "p",
        text: "Read those again and notice the pattern. Every tool is good at its own slice. None of them are the problem. The problem is what happens when you run all five at once: they don't talk to each other, so a human ends up being the wiring between them.",
      },
      {
        type: "p",
        text: "That human is usually your office manager, typing the same customer into Housecall, then QuickBooks, then tagging the CompanyCam album by hand. Five good tools, stitched together by a person doing data entry. That's where the hours and the cash quietly go.",
      },
      {
        type: "image",
        src: "/blog/diagram-stack.svg",
        alt: "Five software tools all feeding into one office manager who acts as the manual integration layer between them",
        caption: "The tools don't talk. A person becomes the wiring.",
      },
      {
        type: "callout",
        text: "You don't have a software problem. You have an integration problem wearing five subscriptions. Adding a sixth tool makes it worse, not better.",
      },
      { type: "h2", text: "What to do when you outgrow all of them" },
      {
        type: "p",
        text: "Outgrowing your stack doesn't mean ripping everything out on a Monday. It means you've hit the point where the next win isn't another app. It's the connective layer — a system built on your data that ties your tools together, or replaces the worst offenders, so a customer is entered once and flows everywhere.",
      },
      {
        type: "p",
        text: "Keep QuickBooks. Keep what works. But the day your team is the glue holding five logins together, the move is to build the layer underneath them. One that knows your shop, runs the handoffs on its own, and that you actually own. That's the difference between renting five tools and running one system.",
      },
    ],
  },
  {
    slug: "servicetitan-true-cost",
    title: "ServiceTitan Is Costing You More Than the Subscription",
    excerpt:
      "The $20,000 invoice is the part you can see. The bigger bill is the labor you keep paying because the software never learned how your shop actually works.",
    category: "Build vs Buy",
    date: "2026-06-03",
    readingTime: "7 min read",
    author: "Asim, Kortex",
    metaDescription:
      "Is ServiceTitan worth it? The subscription is only half the cost. Here's the real five-year math for contractors — and when a custom-built system beats off-the-shelf.",
    keywords: [
      "is ServiceTitan worth it",
      "ServiceTitan alternative",
      "ServiceTitan cost",
      "field service software for contractors",
      "custom software vs ServiceTitan",
    ],
    hero: "/blog/servicetitan-true-cost.png",
    heroAlt:
      "Abstract warm illustration of a single software subscription line splitting into many hidden labor costs",
    takeaways: [
      "ServiceTitan runs about $20,000/year — but the real cost is the labor you still pay to work around it.",
      "Generic platforms can't encode how you price, route, and close, so your team becomes the integration layer.",
      "Over five years, a custom system you own usually costs less than half the SaaS path — and you keep the code.",
    ],
    faqs: [
      {
        q: "How much does ServiceTitan really cost per year?",
        a: "The subscription itself runs roughly $20,000 a year for most mid-size contractors. But the bigger number is hidden: the staff hours spent re-entering data, chasing quotes, and bridging tools the platform doesn't connect. For many shops that hidden labor cost is larger than the subscription.",
      },
      {
        q: "When is it worth replacing ServiceTitan with custom software?",
        a: "When the labor you spend working around the platform costs more than the platform itself. Usually that's when you're entering the same customer into multiple systems, you're paying for features you don't use, and your real pricing or routing logic lives in someone's head instead of the software.",
      },
      {
        q: "Is custom software cheaper than ServiceTitan over time?",
        a: "Often, yes. A custom system is a one-time build (typically $40,000–$80,000) instead of a forever subscription. By year three most contractors have paid less than the SaaS path, and they own the code and data instead of renting access.",
      },
    ],
    body: [
      {
        type: "p",
        text: "You bought ServiceTitan because someone promised it would fix everything. A year in, you're cutting a check for about twenty grand, and your dispatcher is still typing the same customer into three different screens. The software works fine. It just doesn't know how you run.",
      },
      {
        type: "p",
        text: "That gap is the part of the bill nobody talks about. So let's actually put a number on it.",
      },
      { type: "h2", text: "The cost you see, and the one you don't" },
      {
        type: "p",
        text: "The subscription is the easy number. It shows up on a statement once a month. The expensive number is invisible: it's the people you pay to make the software fit a business it was never built for. Off-the-shelf is built for the average contractor. You're not average, so you spend your week bending your shop to match the tool, and you pay staff to do the bending.",
      },
      {
        type: "stat",
        items: [
          { value: "$20K", label: "Per tech / yr on paperwork" },
          { value: "23 days", label: "Average to collect a payment" },
          { value: "3x", label: "Same customer, three systems" },
        ],
      },
      {
        type: "p",
        text: "Run the math on one tech. Forty bucks an hour, two hours a day buried in paperwork instead of on a job. That's twenty thousand dollars a year you're paying him to do data entry. Now multiply it by your headcount. Your office manager re-keys the same name into three tools. Quotes sit for three days because somebody has to get to them. Collections crawl past three weeks. None of it shows up on the ServiceTitan invoice. You pay it anyway, every single month.",
      },
      { type: "h2", text: "Why the platform can't close that gap" },
      {
        type: "p",
        text: "This isn't a knock on the vendor. It's just how their business works. They price for the middle of the market, which means they can't bake in the stuff that makes your shop yours: how you quote the weird jobs, which tech you send where, what \"done right\" actually means on your trucks. Every quarter they ship a new AI button. But it's bolted onto a platform that still has no idea how you operate.",
      },
      {
        type: "quote",
        text: "We bought ServiceTitan to stop drowning. We pay twenty-five grand a year for it. And I'm still doing quotes at 10pm on a Sunday.",
        cite: "Contractor, pulled from review threads",
      },
      { type: "h2", text: "Now run the five-year math" },
      {
        type: "p",
        text: "Stay put and you'll pay roughly $20K a year. Call it $100,000 over five years. At the end of it you own nothing, and you're still quoting on Sundays. A custom system flips that. It's a one-time build, usually $40K to $80K depending on what you need, trained on your data and running in your environment. By year three you've typically spent less than half what the subscription would've cost. By year five you've saved enough to put another truck on the road. And the code is yours.",
      },
      {
        type: "image",
        src: "/blog/diagram-5yr-cost.svg",
        alt: "Line chart showing rented SaaS climbing to about 100K over five years while a one-time custom build stays flat, breaking even near year three",
        caption: "Rent climbs forever. Own is a one-time spend that flattens out.",
      },
      {
        type: "callout",
        text: "The real question was never \"is ServiceTitan expensive.\" It's whether you're paying twice — once for the software, and again for the people who clean up after it.",
      },
      {
        type: "p",
        text: "If that second number is bigger than your subscription, you've outgrown off-the-shelf. The fix isn't shopping for another platform. It's a system built around how you already work, instead of the other way around.",
      },
    ],
  },
  {
    slug: "ai-features-vs-ai-systems",
    title: "AI Features vs. AI Systems: Why Most Contractor AI Projects Flop",
    excerpt:
      "Every platform you pay for just shipped \"AI.\" Most of it is a button you click. The thing that actually moves the needle is a system that runs without you.",
    category: "AI Systems",
    date: "2026-05-27",
    readingTime: "6 min read",
    author: "Asim, Kortex",
    metaDescription:
      "Does AI actually work for HVAC and plumbing businesses? The difference between an AI feature and an AI system is why 70-85% of projects fail. Here's what works.",
    keywords: [
      "AI for HVAC business",
      "AI for contractors",
      "does AI work for home services",
      "AI automation for plumbers",
      "AI system vs AI feature",
    ],
    hero: "/blog/ai-features-vs-ai-systems.png",
    heroAlt:
      "Abstract warm illustration contrasting a single disconnected button with a connected end-to-end workflow",
    takeaways: [
      "An AI feature is a button you click; an AI system is a connected workflow that runs on its own.",
      "Most contractor AI projects (70-85%) fail because they bolt a generic model onto software that doesn't know the business.",
      "A real system is trained on your data and wired into your tools, so the work happens without anyone starting it.",
    ],
    faqs: [
      {
        q: "Why do most AI projects fail?",
        a: "Industry studies put the failure rate at 70-85%. The usual reason isn't the technology — it's that the AI is a disconnected feature bolted onto generic software. It doesn't know the specific business and isn't wired into the rest of the workflow, so it never changes how the company actually runs.",
      },
      {
        q: "What's the difference between an AI feature and an AI system?",
        a: "A feature is one task you trigger by hand — draft a message, summarize a call. A system is the whole chain connected and automatic: a call comes in, gets booked, dispatched, invoiced, and collected without anyone touching it. Features make a step faster; systems remove the step.",
      },
      {
        q: "Does AI actually work for HVAC and plumbing businesses?",
        a: "Yes, when it's built as a system trained on your data and connected to your tools — answering calls, routing techs, firing invoices, and following up on quotes. Generic AI features bundled into off-the-shelf platforms tend to underdeliver because they don't understand how your shop operates.",
      },
    ],
    body: [
      {
        type: "p",
        text: "ServiceTitan AI. Housecall AI. Jobber AI. Every platform you already pay for slapped \"AI\" on the box this year. And yet, depending on which study you read, somewhere between 70 and 85 percent of AI projects go nowhere. If this stuff is so powerful, why does most of it die in a pilot?",
      },
      {
        type: "p",
        text: "Because there are two very different things being sold under the same word, and almost everyone is handing you the weaker one.",
      },
      { type: "h2", text: "A feature is a button" },
      {
        type: "p",
        text: "A feature is something you click. It drafts a follow-up text, sums up a call, spits out a suggested price. Handy for about ten seconds. But nothing around it moves. You still have to start it, eyeball the output, and carry it over to the next tool yourself. All the work that lives between the steps is still sitting on your team's plate.",
      },
      { type: "h2", text: "A system runs while you sleep" },
      {
        type: "p",
        text: "A system is the whole chain, hooked together and running on its own:",
      },
      {
        type: "ul",
        items: [
          "A customer calls at 9pm. AI picks up, using your call history and your pricing.",
          "The job books itself, and the right tech gets dispatched on your routing rules.",
          "Confirmation goes out. A reminder fires the day before.",
          "The tech closes the job, and the invoice goes out that same second.",
          "Payment lands, then a review request goes out automatically.",
        ],
      },
      {
        type: "image",
        src: "/blog/diagram-ai-flow.svg",
        alt: "A workflow running from a 9pm call through booking, dispatch, invoice, payment and review with zero human touches",
        caption: "A system, not a feature: every step hands off on its own.",
      },
      {
        type: "p",
        text: "Nobody clicked anything. Nobody stayed late. That's not a feature in a menu. That's your back office running itself. The clever AI part isn't even the point. The connected workflow is.",
      },
      {
        type: "callout",
        text: "A feature makes one task faster. A system deletes the task. That's the whole reason feature projects stall out and system projects keep compounding.",
      },
      { type: "h2", text: "Why the off-the-shelf AI keeps whiffing" },
      {
        type: "p",
        text: "Generic AI fails for the same reason generic software does. It doesn't know your shop. It never saw your customers, your old jobs, or the logic you use to price a tricky one, and it isn't plugged into your tools. Drop a stock model onto a platform built for the average contractor and you get average, disconnected output. That's the 80 percent that quietly dies.",
      },
      {
        type: "p",
        text: "The only way you get a real system is to build one on your data and connect it to your stack. Not a subscription with an AI tab tacked on. Something that actually knows how you run, and then runs it for you.",
      },
    ],
  },
  {
    slug: "grow-without-hiring",
    title: "How to Grow a Contracting Business When You Can't Hire",
    excerpt:
      "The trades are short about a third of the people they need. You can't recruit your way out of that. So the only lever left is squeezing more out of the crew you've already got.",
    category: "Growth",
    date: "2026-05-20",
    readingTime: "6 min read",
    author: "Asim, Kortex",
    metaDescription:
      "Can't hire enough techs? Here's how home services contractors grow without adding headcount — by automating the coordination work, not the craft. Same crew, more output.",
    keywords: [
      "grow HVAC business without hiring",
      "scale plumbing company",
      "trades labor shortage",
      "grow contracting business",
      "automation for home services",
    ],
    hero: "/blog/grow-without-hiring.png",
    heroAlt:
      "Abstract warm illustration of a small team producing far more output through connected automation",
    takeaways: [
      "With a ~32% skilled-trades labor shortage, hiring your way to growth is mostly off the table.",
      "Automate the coordination work — calls, follow-ups, invoicing — not the trade work your techs do.",
      "Done right, the same crew can roughly double output with zero new hires.",
    ],
    faqs: [
      {
        q: "How do you grow a contracting business without hiring more techs?",
        a: "You free up the people you already have by automating the coordination work around the job — answering calls, following up on quotes, dispatching, and invoicing. That lets your existing team handle far more volume without adding headcount.",
      },
      {
        q: "What should contractors automate first?",
        a: "Start with the coordination tasks that don't require a trade skill: missed-call answering, quote follow-ups at day three and day seven, automatic invoicing when a job closes, and reactivation of old customers. These are the highest-friction, lowest-skill tasks eating your team's day.",
      },
      {
        q: "How much more can a team handle with automation?",
        a: "It varies, but contractors commonly see the same crew handle roughly double the throughput. One 12-truck Texas plumbing company cut quote-to-close from four days to same-day and grew revenue 23% the next quarter without adding a single hire.",
      },
    ],
    body: [
      {
        type: "p",
        text: "Every contractor doing a million or five hits the same wall. To grow, you need more people. And there are no people. Best estimates put the skilled-trades shortage around 32 percent. You can bump pay, poach from the shop across town, and still end the month short-handed. The old advice — grow by hiring — just doesn't work anymore.",
      },
      {
        type: "p",
        text: "Which leaves one lever. Get more out of the crew you already have. Not by leaning on them harder. By taking the junk off their plate that was never theirs to begin with.",
      },
      { type: "h2", text: "Your people are doing two jobs" },
      {
        type: "p",
        text: "Watch where the hours actually go. Your dispatcher is half data-entry clerk. Your office manager loses every morning to re-keying customers between systems. Your techs do paperwork in the truck instead of the work you pay them for. Every one of those is coordination. And coordination is exactly the thing software was supposed to handle in the first place.",
      },
      {
        type: "stat",
        items: [
          { value: "~32%", label: "Skilled-trades shortage" },
          { value: "2x", label: "Output, same crew" },
          { value: "0", label: "New hires needed" },
        ],
      },
      { type: "h2", text: "Automate the coordination, not the craft" },
      {
        type: "p",
        text: "Nobody's automating the actual trade work. Your techs do that, and they always will. What you automate is everything wrapped around it. The call that gets answered at 9pm. The quote that follows itself up on day three and again on day seven. The invoice that fires the second a job is marked done. The email to the customer you haven't seen since last winter.",
      },
      {
        type: "p",
        text: "When that layer runs itself, the same people quietly change jobs without changing seats:",
      },
      {
        type: "ul",
        items: [
          "Your dispatcher goes back to dispatching instead of copying records.",
          "Your office manager manages customers instead of spreadsheets.",
          "Your techs get their hour a day back.",
        ],
      },
      {
        type: "image",
        src: "/blog/diagram-roles.svg",
        alt: "Before and after comparison showing the same roles shifting from admin work to real work",
        caption: "Same crew, new jobs: admin work moves off their plates.",
      },
      {
        type: "callout",
        text: "Same crew, close to double the work out the door, nobody new on payroll. When you literally can't hire, automation isn't a nice-to-have. It's the only growth lever you actually control.",
      },
      {
        type: "p",
        text: "A twelve-truck plumbing outfit in Texas did exactly this. Quote-to-close went from four days to same-day, and the next quarter revenue was up 23 percent. Same crew. The growth didn't come from more bodies. It came from pulling the friction out from between the bodies they already had.",
      },
    ],
  },
  {
    slug: "twenty-thousand-dollar-office-problem",
    title: "The $20,000-a-Year Problem Hiding in Your Office",
    excerpt:
      "It's not payroll, and it's not on any invoice. It's paperwork, double entry, and slow collections — and it gets worse with every tech you add.",
    category: "Operations",
    date: "2026-05-13",
    readingTime: "5 min read",
    author: "Asim, Kortex",
    metaDescription:
      "The most expensive problem in a contracting business doesn't show up on any invoice. Here's how to find the $20K-per-tech paperwork leak — and shut it off.",
    keywords: [
      "reduce contractor admin work",
      "contractor paperwork automation",
      "office manager efficiency",
      "field service invoicing automation",
      "home services operations",
    ],
    hero: "/blog/twenty-thousand-dollar-office-problem.png",
    heroAlt:
      "Abstract warm illustration of paperwork and double-entry quietly draining money from an office",
    takeaways: [
      "A tech who spends two hours a day on paperwork costs you about $20,000 a year — per tech.",
      "Double entry across three systems and 23-day collections are cash leaks that hit no invoice.",
      "Fix it by connecting the tools so a customer is entered once and flows everywhere.",
    ],
    faqs: [
      {
        q: "What's the hidden cost of paperwork for contractors?",
        a: "A technician billing $40/hour who spends two hours a day on paperwork costs roughly $20,000 a year in time not spent on the job. Multiply that by your headcount and add slow invoicing and collections, and the office becomes the most expensive problem in the building — even though it never appears on an invoice.",
      },
      {
        q: "How do you reduce admin work in a service business?",
        a: "Connect your tools so data is entered once and flows everywhere, automate invoicing so it fires the moment a job is marked complete, and let quotes follow up on their own. That removes the re-keying and chasing that eat your office manager's day.",
      },
      {
        q: "Why is my payment collection so slow?",
        a: "Usually because invoicing is a manual step that happens 'whenever someone gets to it.' When invoices fire automatically at job completion and payment links go out same-day, collection times typically drop from three weeks toward a week.",
      },
    ],
    body: [
      {
        type: "p",
        text: "Ask most contractors where the money leaks and they'll point at marketing, or fuel, or that one bad hire from last spring. Almost nobody points at the office. Which is exactly why the most expensive problem in the building is the one that never lands on an invoice.",
      },
      { type: "h2", text: "Put a real number on the paperwork" },
      {
        type: "p",
        text: "Your tech costs you about forty dollars an hour. Say he loses two hours a day to tickets, notes, and re-entry. That's roughly twenty thousand dollars a year you're paying him to push paper instead of do the work you hired him for. Per tech. Stack that across the crew and the number gets ugly fast.",
      },
      {
        type: "stat",
        items: [
          { value: "$20K", label: "Per tech / yr on paperwork" },
          { value: "3+ days", label: "Quotes sitting unsent" },
          { value: "23 days", label: "To collect a payment" },
        ],
      },
      { type: "h2", text: "Then there's the double-entry tax" },
      {
        type: "p",
        text: "The office has its own leak. The same customer gets typed into three systems because none of them talk to each other. Quotes sit unsent for three days because a human has to get to them. Collections drag past three weeks because invoicing only happens when somebody finds a spare minute. Every one of those delays is money you've earned and haven't collected yet.",
      },
      {
        type: "image",
        src: "/blog/diagram-double-entry.svg",
        alt: "One customer being typed by hand into three separate systems: Housecall Pro, QuickBooks, and CompanyCam",
        caption: "One customer, three systems, every record keyed by hand.",
      },
      {
        type: "callout",
        text: "This was never a tools problem. You've got plenty of tools. The problem is none of them know your business or talk to each other, so a person ends up being the glue.",
      },
      { type: "h2", text: "What it looks like once it's fixed" },
      {
        type: "p",
        text: "In a shop that's wired up right, the customer gets entered once and shows up everywhere. The quote sends itself and chases its own follow-up. The invoice fires the instant a job is marked done, and the payment link goes out same-day. Your office manager stops re-typing records and starts actually managing customers, handling three times the volume without three times the stress.",
      },
      {
        type: "p",
        text: "Here's the part that should bug you: this problem doesn't shrink as you grow. It multiplies. The only way to stop paying it is to build the connections the off-the-shelf tools were never going to give you.",
      },
    ],
  },
  {
    slug: "custom-vs-off-the-shelf",
    title: "Custom Software vs. Off-the-Shelf: What $500K–$10M Contractors Actually Need",
    excerpt:
      "Off-the-shelf is the right call, right up until it isn't. Here's the honest line between when a subscription is fine and when you've outgrown renting somebody else's software.",
    category: "Decision",
    date: "2026-05-06",
    readingTime: "8 min read",
    author: "Asim, Kortex",
    metaDescription:
      "Build vs. buy for contractors: when off-the-shelf field service software is fine, when you've outgrown it, and what a custom system really costs ($40K-$80K).",
    keywords: [
      "custom software for contractors",
      "build vs buy field service software",
      "custom field service management",
      "off the shelf vs custom software",
      "contractor software decision",
    ],
    hero: "/blog/custom-vs-off-the-shelf.png",
    heroAlt:
      "Abstract warm illustration weighing a rented subscription against an owned custom system",
    takeaways: [
      "Off-the-shelf is right when you're small; you shouldn't build custom to run five trucks.",
      "You've outgrown it when the labor to work around the platform costs more than the platform.",
      "Custom is a one-time $40K-$80K asset you own — code, data, and all — not a forever subscription.",
    ],
    faqs: [
      {
        q: "Should a contractor build custom software or buy off-the-shelf?",
        a: "Buy off-the-shelf when you're small and your needs are standard — it's cheap and fast. Build custom once the labor you spend working around the platform costs more than the subscription, your team is double-entering data, and your real pricing and routing logic doesn't fit the tool.",
      },
      {
        q: "How much does custom field service software cost?",
        a: "A custom operating system is typically a one-time build of $40,000 to $80,000 depending on scope — not the six-month, six-figure project people fear. You should see a working prototype on your data within the first week.",
      },
      {
        q: "What's the advantage of custom software over a subscription?",
        a: "Ownership. With off-the-shelf you rent access and the vendor controls the roadmap; stop paying and you have nothing. Custom is an asset built around your workflows and your data. You own the code, you can change it anytime, and you can take it anywhere.",
      },
    ],
    body: [
      {
        type: "p",
        text: "Let's be fair to off-the-shelf for a second. When you're starting out, a ServiceTitan or a Jobber is exactly the right move. Cheap to start, quick to set up, good enough to run a small shop. You should not build custom software to run five trucks. So this isn't an anti-SaaS rant. It's a question of timing: when have you outgrown it?",
      },
      { type: "h2", text: "The signs you've outgrown the subscription" },
      {
        type: "p",
        text: "You've crossed the line the day the platform costs you more in worked-around labor than it does in fees. In plain terms:",
      },
      {
        type: "ul",
        items: [
          "Your team types the same data into more than one system because the tools won't talk.",
          "You're paying for a stack of features you never touch and missing the one workflow you actually need.",
          "\"That's just how the software works\" has started deciding how you run the business.",
          "Your real edge — your pricing calls, your routing rules — lives in somebody's head, not the system.",
        ],
      },
      {
        type: "p",
        text: "If two or more of those ring true, you're not renting a tool anymore. You're renting a ceiling.",
      },
      { type: "h2", text: "The real difference is ownership" },
      {
        type: "p",
        text: "Off-the-shelf is a subscription. You rent access, the vendor decides what gets built next, and the day you stop paying you've got nothing to show for it. Custom is an asset. It's shaped around your workflows, trained on your data, running in your environment. The code is yours. The data is yours. You can pick it up and move it whenever you want. That ownership is the whole ballgame, and it's the one thing a subscription can never hand you.",
      },
      {
        type: "image",
        src: "/blog/diagram-rent-vs-own.svg",
        alt: "Comparison table of renting off-the-shelf versus owning custom across cost, roadmap, fit, and ownership",
        caption: "Renting versus owning, on the four things that matter.",
      },
      {
        type: "callout",
        text: "Rent generic forever, roll the dice on a cheap freelancer who ghosts by month two, or spend once on something that's actually yours. For a business doing $500K to $10M, only one of those compounds in your favor.",
      },
      { type: "h2", text: "What custom actually costs, and how it gets built" },
      {
        type: "p",
        text: "A custom operating system usually runs a one-time $40K to $80K depending on scope. Not the six-month, six-figure horror story you're bracing for. The way you take the risk out of it is the process itself:",
      },
      {
        type: "ul",
        items: [
          "Audit, one week — map every tool, every handoff, every spot where data gets entered twice.",
          "Blueprint, one week — see exactly what gets automated, what stays human, and how it all connects.",
          "Build, four to six weeks — a working prototype on your real data by the end of week one, not month six.",
          "Optimize, ongoing — the system changes as the business does.",
        ],
      },
      {
        type: "p",
        text: "The gut check is simple. If a builder can't put something running on your data in front of you fast, they shouldn't be building it. Off-the-shelf got you this far, and that's worth something. But if it's the thing slowing you down now, the next move isn't another platform. It's a system built for exactly how you run.",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}
