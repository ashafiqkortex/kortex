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
        text: "Keep QuickBooks. Keep what works. But the day your team is the glue holding five logins together, the move is to build the layer underneath them — and increasingly that layer includes [agents doing the handoffs themselves](/ai-agents-for-business). One that knows your shop, runs the handoffs on its own, and that you actually own. That's the difference between renting five tools and running one system.",
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
        text: "If that second number is bigger than your subscription, you've outgrown off-the-shelf. The fix isn't shopping for another platform. It's [a system built around how you already work](/ai-consulting), instead of the other way around.",
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
        text: "The only way you get a real system is to build one on your data and connect it to your stack. Not a subscription with an AI tab tacked on. Something that actually knows how you run, and then runs it — which in practice means [an agent with real access to your systems](/ai-agent-development), not a feature for you.",
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
        text: "Same crew, close to double the work out the door, nobody new on payroll. When you literally can't hire, automation isn't a nice-to-have. It's the only growth lever you actually control — and the first job most shops hand over is [the phone](/ai-receptionist), because it is the one nobody has time for. The broader version of that idea is [an AI employee](/ai-employee): a defined job, owned end to end.",
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
        text: "Here's the part that should bug you: this problem doesn't shrink as you grow. It multiplies. Two of the biggest line items — [answering the phone](/ai-receptionist) and [handling the same customer questions over and over](/ai-customer-service) — come off the desk entirely once they're built properly. The rest is building the connections the off-the-shelf tools were never going to give you.",
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
        text: "The gut check is simple. If [whoever you're talking to](/ai-consulting) can't put something running on your data in front of you fast, they shouldn't be building it. Off-the-shelf got you this far, and that's worth something. But if it's the thing slowing you down now, the next move isn't another platform. It's a system built for exactly how you run.",
      },
    ],
  },
  {
    slug: "what-is-an-ai-agent",
    title: "What Is an AI Agent? A Plain Answer, and Where the Word Gets Abused",
    excerpt:
      "An AI agent pursues a goal across several steps and acts on your systems. Everything else being sold under the name is something simpler wearing the label.",
    category: "Fundamentals",
    date: "2026-08-06",
    readingTime: "8 min read",
    author: "Kortex",
    metaDescription:
      "What is an AI agent? A direct definition, how agents differ from chatbots and workflow automation, what they are genuinely good at, and when you should not build one.",
    keywords: [
      "what is an ai agent",
      "what are ai agents",
      "agentic ai",
      "ai agent vs chatbot",
      "autonomous ai agents",
    ],
    hero: "/blog/what-is-an-ai-agent.svg",
    heroAlt:
      "A chatbot answering one question beside an agent looping through decide, act and check while writing to calendar, CRM and records",
    takeaways: [
      "An AI agent pursues a goal across multiple steps, decides what to do next, and acts on real systems. A chatbot produces text.",
      "The difference that matters commercially is not intelligence — it is whether the thing can change something in your business.",
      "Agents suit exception-heavy work spanning several systems. For work that runs the same way every time, a rule is cheaper and easier to debug.",
      "Most failed agent projects failed on scope or access, not on model capability.",
    ],
    faqs: [
      {
        q: "What is an AI agent?",
        a: "An AI agent is software that pursues a goal across several steps rather than answering a single question. It decides what to do next, uses tools and systems to do it, checks the result, and adapts when something does not go to plan. The defining property is that it takes actions in real systems rather than only producing text.",
      },
      {
        q: "What is the difference between an AI agent and a chatbot?",
        a: "A chatbot responds to a prompt and stops. An agent holds a goal, takes several steps toward it, and changes something — booking an appointment, updating a record, sending an invoice. After a chatbot conversation, nothing in your business is different. After an agent runs, something is.",
      },
      {
        q: "What is agentic AI?",
        a: "Agentic AI is the general term for systems built around agents — software that plans, acts, and adapts rather than responding to one instruction at a time. It describes an approach rather than a specific product, which is part of why the term is used so loosely in marketing.",
      },
      {
        q: "Are AI agents the same as workflow automation?",
        a: "No. Automation follows a path you defined in advance. An agent decides the path as it goes. That flexibility helps with messy, exception-heavy work and hurts anywhere you need the identical outcome every time. Most working systems combine both, with rules handling the predictable share.",
      },
      {
        q: "What are AI agents actually good at?",
        a: "Work that is high volume, spans several systems, and varies case by case — answering and qualifying calls, resolving repetitive support tickets, reconciling documents against records, and chasing follow-ups. All of these share reversible mistakes and a clear definition of done.",
      },
      {
        q: "When should you not build an AI agent?",
        a: "When the process runs identically every time, because a rule is cheaper, faster, and far easier to debug. And when the process has never actually been defined — an agent will not settle a disagreement about how the work should be done, it will pick one interpretation and apply it at speed.",
      },
    ],
    body: [
      {
        type: "p",
        text: "An AI agent is software that pursues a goal across several steps. It works out what to do next, uses your systems to do it, checks what happened, and adjusts when something does not go to plan. That is the whole definition, and everything useful about the category follows from it.",
      },
      {
        type: "p",
        text: "The word has been stretched to cover almost anything with a language model attached, which makes it hard to evaluate what anyone is selling. So it is worth being precise about the line.",
      },
      { type: "h2", text: "What separates an agent from a chatbot?" },
      {
        type: "p",
        text: "A chatbot answers. An agent acts. After a conversation with a chatbot, your business is exactly as it was — you have some text. After an agent runs, an appointment exists, a record has changed, an invoice has gone out.",
      },
      {
        type: "p",
        text: "That distinction is not about how clever the underlying model is. A very capable model with no access to your systems is still a chatbot. A modest model wired into your calendar and your records is an agent. Access is the dividing line, not intelligence.",
      },
      {
        type: "callout",
        text: "The practical test: if the thing succeeds completely, has anything in your business changed? If not, it is a chatbot, whatever the vendor calls it.",
      },
      { type: "h2", text: "How is an agent different from workflow automation?" },
      {
        type: "p",
        text: "Automation follows the path you defined. An agent decides the path. If you have ever built a Zapier chain, you have defined a path — when this happens, do that, then that. It works beautifully right up until reality produces a case you did not anticipate, at which point it either breaks loudly or, more often, does the wrong thing quietly.",
      },
      {
        type: "p",
        text: "An agent handles that case by reasoning about it. That is genuinely valuable for messy work, and it is a liability everywhere you need the same outcome every single time. Determinism is a feature when you can have it.",
      },
      {
        type: "ul",
        items: [
          "Same steps every time, no judgement needed — use a rule. Cheaper, faster, debuggable at 2am.",
          "Steps vary, exceptions are common, judgement spans systems — an agent earns its place.",
          "Most real systems are a mix, with rules doing the predictable majority and an agent handling the tail.",
        ],
      },
      { type: "h2", text: "What do agents actually need to work?" },
      {
        type: "p",
        text: "Four things, and the model is not one of them. Models are a commodity that improves without your involvement. What decides whether an agent survives contact with a real business is much less glamorous.",
      },
      {
        type: "ul",
        items: [
          "A boundary — what it may do, and what it must never do without a human. Written down before any code exists.",
          "Context — what it can see. An agent reasoning over stale or partial data makes confident, wrong decisions.",
          "Actions — what it can change, with permissions on every write path and a way back where the cost of being wrong is high.",
          "Evidence — every decision logged with its reasoning and inputs, so that when it errs you can see why rather than guess.",
        ],
      },
      {
        type: "p",
        text: "Notice that three of those four are about restraint rather than capability. That is not caution for its own sake — it is where the failures actually come from.",
      },
      { type: "h2", text: "Why do most agent projects fail?" },
      {
        type: "p",
        text: "Rarely because the model was not good enough. In practice, projects die for two reasons that have nothing to do with AI.",
      },
      {
        type: "p",
        text: "The first is scope. The agent was pointed at a job nobody had defined, so there was no way to say whether it was doing it correctly. The second is access. It could not reach the systems that hold the truth, so it worked from a partial picture and produced answers that were plausible and wrong.",
      },
      {
        type: "quote",
        text: "Agents amplify whatever structure already exists in a business, including its absence.",
      },
      {
        type: "p",
        text: "This is why the honest first question is not which model to use. It is whether you can write down what a correct outcome looks like. If you cannot, that is the first piece of work — and it is not an AI project.",
      },
      { type: "h2", text: "So should you build one?" },
      {
        type: "p",
        text: "If the work is repetitive and identical every time, no — build a rule and spend the difference elsewhere. If the work is exception-heavy, spans several systems, and currently has a person opening four tabs to apply judgement, then an agent is pointed at the right shape of problem.",
      },
      {
        type: "p",
        text: "And if you are not sure which of those describes your situation, that uncertainty is itself the finding. It usually means the process needs defining before anything gets built on top of it.",
      },
    ],
  },
  {
    slug: "choosing-an-answering-service",
    title: "How to Choose an Answering Service (and the Billing Trap Nobody Mentions)",
    excerpt:
      "Most answering service comparisons argue about price. The pricing model matters more — and the standard one charges you extra for having a good month.",
    category: "Operations",
    date: "2026-08-06",
    readingTime: "7 min read",
    author: "Kortex",
    metaDescription:
      "How to choose an answering service: the per-minute billing trap, what actually separates providers, and the six questions worth asking before you sign.",
    keywords: [
      "best answering service",
      "answering service comparison",
      "answering service pricing",
      "virtual receptionist companies",
      "how to choose an answering service",
    ],
    hero: "/blog/choosing-an-answering-service.svg",
    heroAlt:
      "A chart showing cost rising steeply with call volume under per-minute billing against a flat line",
    takeaways: [
      "The pricing model matters more than the price. Per-minute billing means a busy month costs more than a quiet one.",
      "Ask what counts as a minute — hold time and post-call work often draw from the same allowance as talk time.",
      "The deciding capability is whether it can book an appointment, not whether it can take a message.",
      "Test your busiest hour, not your average one. Simultaneous calls are where most services quietly fail.",
    ],
    faqs: [
      {
        q: "How much does an answering service cost?",
        a: "Most established providers bill per minute against a monthly allowance, with an overage rate once you exceed it. That means your cost tracks your call volume rather than your capability, and a busy month costs more than a quiet one. Automated services generally do not carry the same per-minute staffing cost, so their pricing tends to track capability instead of usage.",
      },
      {
        q: "What is the best answering service for a small business?",
        a: "The one that books work rather than collecting messages. For a small business the deciding factors are usually whether it can commit an appointment during the call, whether it handles several callers at once, and whether the bill stays predictable in a busy month. A service that only takes a name and number has moved the work rather than done it.",
      },
      {
        q: "Is per-minute billing bad?",
        a: "Not inherently, but understand what it does to your incentives. Under per-minute billing every extra call costs you more, which means a successful marketing month arrives with a larger invoice. Businesses with low, steady volume often do fine on it. Businesses that are growing, or that spike seasonally, tend not to.",
      },
      {
        q: "What counts as a minute?",
        a: "This varies by provider and it is worth asking directly. With several services, minutes include more than live talk time — hold time and the administrative work a receptionist does around your call can draw from the same allowance. A three-minute conversation is not always three minutes on the bill.",
      },
      {
        q: "Should I use a human or an AI answering service?",
        a: "Humans still handle genuine complexity and emotional situations better. AI handles volume, simultaneous calls, and out-of-hours coverage without a rota, and it does not have a worse day at 3am than at 3pm. Many businesses end up with a mix, and several providers now sell exactly that combination.",
      },
      {
        q: "How long should I be locked in?",
        a: "A long contract is a reasonable thing to walk away from, but it matters less than how quickly the service can be changed when your business changes. A provider that needs three weeks to update your pricing script is a liability during a busy season, regardless of the contract length.",
      },
    ],
    body: [
      {
        type: "p",
        text: "Most comparisons of answering services argue about the monthly price. That is the least useful number available, because it tells you almost nothing about what you will actually be charged or whether the service will do the job you need.",
      },
      {
        type: "p",
        text: "Two things matter more. How it is billed, and whether it can finish a call rather than pass it back to you.",
      },
      { type: "h2", text: "Why does per-minute billing catch people out?" },
      {
        type: "p",
        text: "The established providers — Ruby, PATLive, AnswerConnect, Abby Connect and most of the traditional field — bill per minute against a monthly allowance, with an overage rate once you go past it. This is not hidden and it is not sinister. It is a direct consequence of paying people to sit and wait for your phone to ring.",
      },
      {
        type: "p",
        text: "But look at what it does to your incentives. Every additional call costs you more. Run a successful campaign and the invoice grows with the pipeline. Have your best month in two years and you are billed for it.",
      },
      {
        type: "callout",
        text: "Under per-minute billing, growth is a cost line. That is a strange property for a service whose entire purpose is to help you capture more work.",
      },
      {
        type: "p",
        text: "There is a second-order version of this worth asking about directly: what counts as a minute? With several providers, the allowance covers more than live talk time — hold time and the work done around your call can draw from the same pool. It is a reasonable policy, and it means a three-minute conversation is not necessarily three minutes on the bill.",
      },
      { type: "h2", text: "Does it book, or only take a message?" },
      {
        type: "p",
        text: "This is the capability that decides whether the service is worth anything, and it is the one most comparisons skip.",
      },
      {
        type: "p",
        text: "A message is a task you still have to do. Somebody calls, the service takes a name and number, and now the job sits in your inbox waiting for you to call back. By the time you do, most callers have worked down the list and hired whoever picked up and solved the problem there and then.",
      },
      {
        type: "p",
        text: "A service that can see your calendar and commit a time during the call has actually removed the work. One that cannot has moved it, with a delay attached. When you are evaluating providers, this single question separates them more sharply than price does.",
      },
      { type: "h2", text: "What happens at your busiest hour?" },
      {
        type: "p",
        text: "Ask about your peak, not your average. The calls you lose do not arrive evenly through the week — they cluster, usually at the worst possible moment, and a service staffed for your average will put the second and third callers on hold precisely when it matters most.",
      },
      {
        type: "p",
        text: "This is the structural advantage automated services have, and it is worth being clear-eyed about the trade. Software handles unlimited simultaneous calls without a rota; it is worse than a good human at genuine complexity and at reading distress. Which of those matters more depends entirely on what your callers ring about.",
      },
      { type: "h2", text: "What should you ask any provider?" },
      {
        type: "ul",
        items: [
          "How is it billed — per minute, per call, or flat? And what is the overage rate?",
          "What counts as a minute? Does hold time or post-call admin draw from the allowance?",
          "Can it book into my calendar during the call, or does it take a message?",
          "What happens when three people call at once?",
          "How does it know my service area, my pricing, and what counts as an emergency?",
          "How quickly can the script be changed when my business changes?",
        ],
      },
      {
        type: "p",
        text: "None of those are trick questions, and a good provider will answer all six straightforwardly. The ones that get evasive about billing mechanics are usually evasive for a reason.",
      },
      { type: "h2", text: "So which should you choose?" },
      {
        type: "p",
        text: "If your call volume is low and steady and your callers mostly need a message passed on, a traditional service is perfectly reasonable and you should not overthink it.",
      },
      {
        type: "p",
        text: "If you are growing, if your volume spikes, if calls arrive outside business hours, or if the value of a booked job is high enough that a missed call genuinely hurts — then billing that punishes volume is working against you, and the ability to book during the call is worth more than any price difference between providers.",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}
