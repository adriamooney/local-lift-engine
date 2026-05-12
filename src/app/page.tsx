import { GapReportForm } from "@/components/GapReportForm";

export default function Home() {
  return (
    <main data-screen-label="01 Landing">
      <header className="nav">
        <div className="container nav-inner">
          <a href="#start" className="brand" style={{ textDecoration: "none", color: "inherit" }}>
            <span className="brand-glyph" />
            <span>
              <div className="brand-name">Local Lift Engine</div>
              <div className="brand-tag">Built for local service businesses</div>
            </span>
          </a>
          <nav className="nav-links">
            <a href="#how">How it works</a>
            <a href="https://demo.localliftengine.com" target="_blank" rel="noreferrer">
              See the demo
            </a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
            <a href="#gap" className="btn btn-primary">
              Get my Gap Report <span className="arr">→</span>
            </a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="eyebrow signal">§ For local service businesses</div>
              <h1 className="h-display size-hero">
                Your competitors are getting calls you&apos;re not. Here&apos;s the <em>complete fix</em> — built
                in 24 hours.
              </h1>
              <p className="body-lg">
                Local Lift Engine builds your business a premium website, optimizes your Google Business Profile,
                and hands you a ready-to-launch Google Ads playbook. All three pieces, coordinated, in 24 hours. You
                own everything.
              </p>
              <p className="body-lg" style={{ marginTop: 16 }}>
                No agencies. No retainers you don&apos;t understand. No weekend WordPress nights.
              </p>
              <div className="hero-cta">
                <a href="#gap" className="btn btn-primary btn-lg">
                  Get my free Local Search Gap Report <span className="arr">→</span>
                </a>
                <div className="hero-chips">
                  <span className="hero-chip">Free · 1-page audit</span>
                  <span className="hero-chip">In your inbox within 1 business day</span>
                  <span className="hero-chip">Yours to keep</span>
                </div>
              </div>
            </div>
            <aside className="hero-aside">
              <div>
                <div className="ha-eyebrow">§ The complete system</div>
                <div className="ha-line">
                  <b>01 · Website</b>
                  <span className="v">Custom build</span>
                </div>
                <div className="ha-line">
                  <b>02 · GBP</b>
                  <span className="v">Audited + optimized</span>
                </div>
                <div className="ha-line">
                  <b>03 · Ads playbook</b>
                  <span className="v">Ready to launch</span>
                </div>
                <div className="ha-line">
                  <b>Lighthouse</b>
                  <span className="v">96 / 100</span>
                </div>
                <div className="ha-line">
                  <b>Time to ship</b>
                  <span className="v">&lt; 24 hrs</span>
                </div>
                <div className="ha-line">
                  <b>You own it</b>
                  <span className="v">100%</span>
                </div>
              </div>
              <div className="ha-foot">Same tech stack as Nike &amp; Target · Lighthouse 95+ · &lt;1s loads</div>
            </aside>
          </div>
        </div>

        <div className="trust-bar">
          <div className="container">
            <div className="trust-bar-inner">
              <div>
                <span className="tb-num">&lt; 24h</span>
                <span className="tb-label">Full system delivered</span>
              </div>
              <div>
                <span className="tb-num">96</span>
                <span className="tb-label">Lighthouse score</span>
              </div>
              <div>
                <span className="tb-num">$0</span>
                <span className="tb-label">Mystery monthly retainers</span>
              </div>
              <div>
                <span className="tb-num">3</span>
                <span className="tb-label">Pieces. One system.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="s" id="problem">
        <div className="container">
          <div className="s-head">
            <div>
              <div className="marker">§ 01 · The problem</div>
            </div>
            <div>
              <h2 className="h-display size-section">
                You already know the problem. It&apos;s costing you calls every week.
              </h2>
            </div>
          </div>

          <div className="stacks">
            <div className="stack">
              <div className="num">№ 01 · The agency route</div>
              <p>
                You&apos;ve tried the agency route. <em>Three thousand</em> up front, fifteen hundred
                a month, and a &quot;monthly report&quot; that doesn&apos;t explain why the phone still
                isn&apos;t ringing.
              </p>
            </div>
            <div className="stack">
              <div className="num">№ 02 · The DIY route</div>
              <p>
                You&apos;ve tried the DIY route. A weekend lost to Wix. Another weekend lost to
                GoDaddy. The site looks fine. <em>It doesn&apos;t get you calls.</em>
              </p>
            </div>
            <div className="stack">
              <div className="num">№ 03 · The wait</div>
              <p>
                So you put it off. And every week, customers Google &quot;[your service] near me,&quot; ask Siri,
                ask ChatGPT — and call <em>whoever shows up first</em>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="shift" id="shift">
        <div className="container">
          <div className="s-head" style={{ borderColor: "var(--ink-700)" }}>
            <div>
              <div className="marker">§ 02 · The shift</div>
            </div>
            <div>
              <h2 className="h-display size-section">
                The way customers find you has changed. <em>Most local sites haven&apos;t caught up.</em>
              </h2>
            </div>
          </div>

          <div className="shift-grid">
            <div>
              <p
                className="body-lg"
                style={{ color: "var(--paper-300)", fontSize: 19, maxWidth: 460 }}
              >
                Five years ago, ranking on Google was the whole game. That&apos;s not the game anymore.
              </p>
              <div className="shift-foot">
                <p className="body-lg">
                  Most websites built before 2024 were never engineered for what&apos;s happening now.{" "}
                  <strong>Including the ones agencies are still selling for $5,000+.</strong>
                </p>
              </div>
            </div>
            <div className="shift-points">
              <div className="shift-point">
                <span className="label">Voice</span>
                <p className="body">
                  Your customers are asking Siri <em>&quot;find a [service] near me.&quot;</em>
                </p>
              </div>
              <div className="shift-point">
                <span className="label">LLMs</span>
                <p className="body">
                  They&apos;re asking ChatGPT <em>&quot;who&apos;s the best [service] in [city]?&quot;</em>
                </p>
              </div>
              <div className="shift-point">
                <span className="label">Overviews</span>
                <p className="body">
                  They&apos;re using Google&apos;s new AI Overviews instead of scrolling through blue links.
                </p>
              </div>
              <div className="shift-point">
                <span className="label">The cost</span>
                <p className="body">
                  If your site isn&apos;t built to be read and recommended by these systems, you&apos;re{" "}
                  <em>invisible</em> to a growing share of your local market. Most local business sites we audit are
                  completely invisible to AI crawlers. That&apos;s a fixable problem — but the fix isn&apos;t a faster
                  template.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="s" id="how">
        <div className="container">
          <div className="s-head">
            <div>
              <div className="marker">§ 03 · What we do</div>
            </div>
            <div>
              <h2 className="h-display size-section">
                Three pieces. <em>One system.</em> Built in 24 hours.
              </h2>
              <p className="lede" style={{ marginTop: 24 }}>
                Most &quot;website&quot; companies sell you a website and walk away. The website is one piece of how
                customers find you. Without your Google Business Profile dialed in, and without a way to capture the
                high-intent searches happening right now, the site sits there.
              </p>
              <p className="lede" style={{ marginTop: 16, maxWidth: 560 }}>
                We build all three pieces together, so they actually work as one system.
              </p>
            </div>
          </div>

          <div className="three-cards">
            <div className="what-card">
              <div className="step">Piece 01 · The Website</div>
              <h3>A premium, fast, conversion-engineered site.</h3>
              <p>
                Not a template — built specifically for your city, your services, and the way local customers
                actually search. Engineered to be found by Google, Siri, ChatGPT, and AI search. You own the
                code, the domain, everything.
              </p>
              <p
                style={{
                  marginTop: 16,
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "var(--signal-700)",
                }}
              >
                Built in 24 hours · Yours forever
              </p>
              <div className="icon-num">01</div>
            </div>
            <div className="what-card">
              <div className="step">Piece 02 · Google Business Profile</div>
              <h3>Audited and optimized across 47 ranking factors.</h3>
              <p>
                We audit your profile against the 47 factors Google uses to rank local businesses, fix what&apos;s
                hurting you, and unlock what&apos;s missing. Most profiles need 10–15 specific improvements — we make
                them all in week one.
              </p>
              <p style={{ marginTop: 12 }}>
                Categories, services, descriptions, photos, schema sync between your site and your listing — so you
                stop losing the local <em>Map Pack</em> to competitors who have less experience but better profiles.
                Usually the fastest source of new calls in the first 30 days.
              </p>
              <p
                style={{
                  marginTop: 16,
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "var(--signal-700)",
                }}
              >
                Audit + improvements · Live in week one
              </p>
              <div className="icon-num">02</div>
            </div>
            <div className="what-card">
              <div className="step">Piece 03 · Google Ads Playbook</div>
              <h3>A complete, ready-to-run campaign.</h3>
              <p>
                Ad copy, keyword groups, negative keywords, landing page mapping, budget guidance, the whole launch
                sequence — mapped to your exact services, city, and target keywords.
              </p>
              <p style={{ marginTop: 12 }}>
                Plus a recorded walkthrough video so you launch confidently. Or hand it to whoever runs your ads.
              </p>
              <p
                style={{
                  marginTop: 16,
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "var(--signal-700)",
                }}
              >
                Yours to launch on day one
              </p>
              <div className="icon-num">03</div>
            </div>
          </div>

          <div className="add-on">
            <div className="a-tag">§ Stack closer</div>
            <p>
              This is what local lead generation actually looks like in 2026. <b>Not just a website.</b> The
              complete system, built in a day, owned by you.
            </p>
            <div className="price">Website + GBP + Ads · 24 hrs</div>
          </div>
        </div>
      </section>

      <section className="s monthly-section" id="monthly">
        <div className="container">
          <div className="s-head">
            <div>
              <div className="marker">§ 04 · The monthly</div>
            </div>
            <div>
              <h2 className="h-display size-section">The setup is the start. The monthly is what closes the gap.</h2>
            </div>
          </div>
          <div className="monthly-prose">
            <p>
              Most providers stop at delivery. The site is live, the GBP is dialed, the ads playbook is in your inbox
              — and then nothing. Six months later you&apos;re back to square one, wondering why the calls slowed down.
            </p>
            <p>
              The monthly is what keeps the system improving. Every month we re-run the same Gap Report you got for
              free — except now we&apos;re measuring how much the gap closed. You see your rank move. You see reviews
              climb. You see AI search start citing you. In real numbers.
            </p>
          </div>
          <h3 className="monthly-h3">What&apos;s in every monthly tier:</h3>
          <ul className="monthly-list">
            <li>
              <span className="arrow">→</span>
              <span>
                <strong>Monthly Gap Report</strong> — The same audit format, re-run on your business every 30 days.
                You see exactly what moved.
              </span>
            </li>
            <li>
              <span className="arrow">→</span>
              <span>
                <strong>Recorded video walkthrough</strong> — A 10-minute video each month showing what changed, what
                we did, and what&apos;s next. Watch it in the truck. Skip the call.
              </span>
            </li>
            <li>
              <span className="arrow">→</span>
              <span>
                <strong>Google Business Profile management</strong> — Weekly posts, photo uploads, Q&amp;A monitoring
                and responses, service catalog updates. The activity Google rewards.
              </span>
            </li>
            <li>
              <span className="arrow">→</span>
              <span>
                <strong>Review acquisition system</strong> — NiceJob built into your workflow. Customers get a text
                within an hour of job completion asking for a review. Happy ones go to Google. Unhappy ones go to you.
                Normally $150/month standalone — included.
              </span>
            </li>
            <li>
              <span className="arrow">→</span>
              <span>
                <strong>Call tracking</strong> — CallRail set up across your website, GBP, and ads. Every call
                attributed to its source so you know what&apos;s working. Normally $45/month standalone — included.
              </span>
            </li>
            <li>
              <span className="arrow">→</span>
              <span>
                <strong>Blog content</strong> — 2–4 SEO-optimized blog posts per month, targeting the searches your
                customers actually run. Written for operators, not for Google.
              </span>
            </li>
            <li>
              <span className="arrow">→</span>
              <span>
                <strong>Quarterly new page</strong> — A new service page or city page each quarter. Targeted to expand
                what you rank for over time.
              </span>
            </li>
            <li>
              <span className="arrow">→</span>
              <span>
                <strong>Monthly competitor watch</strong> — We track your top 3 local competitors. When they change
                something — new service, new schema, new pricing — you find out from us.
              </span>
            </li>
          </ul>
          <p className="monthly-note">
            If you also want us running your Google Ads, that&apos;s the Growth tier (below). Honest ad management
            requires ongoing weekly work, and at $497/mo we&apos;d be lying if we said we could do it well.
            We&apos;re upfront about that.
          </p>
          <p className="monthly-cancel">§ Cancel anytime after month 3. The site, the GBP work, and the playbook are yours either way.</p>
        </div>
      </section>

      <section className="pricing-v2" id="pricing">
        <div className="container">
          <div className="s-head">
            <div>
              <div className="marker">§ 05 · Pricing</div>
            </div>
            <div>
              <h2 className="h-display size-section">$997 to build it. Pick a monthly to keep it working.</h2>
            </div>
          </div>

          <div className="pricing-setup-card">
            <h3>Setup — $997</h3>
            <div className="price-row">$997</div>
            <ul>
              <li>Built-to-rank website (24 hr delivery, you own it)</li>
              <li>GBP audit + optimization across 47 ranking factors</li>
              <li>Google Ads playbook (ready to launch)</li>
              <li>Schema, AI search optimization, conversion engineering</li>
              <li>Recorded walkthrough video of everything we built and why</li>
            </ul>
            <div className="pricing-setup-foot">One-time. Paid once. No surprises.</div>
          </div>

          <p className="pricing-subhead">Then choose a monthly:</p>
          <div className="pricing-tier-grid">
            <div className="pricing-tier">
              <h4>Local Lift Core — $497/month</h4>
              <div className="tier-price">$497/mo</div>
              <ul>
                <li>Monthly Gap Report (the same one you got free, re-run on your business)</li>
                <li>Monthly recorded video walkthrough</li>
                <li>4 Google Posts/month + photo uploads to your GBP</li>
                <li>Q&amp;A monitoring and response</li>
                <li>Review acquisition system (NiceJob — normally $150/mo, included)</li>
                <li>Call tracking (CallRail — normally $45/mo, included)</li>
                <li>2–4 SEO-optimized blog posts per month</li>
                <li>Quarterly new service or city landing page</li>
                <li>Monthly competitor watch</li>
                <li>Cancel anytime after month 3</li>
              </ul>
              <p className="tier-foot">Best for businesses who run their own ads, or aren&apos;t running ads yet.</p>
            </div>
            <div className="pricing-tier featured">
              <span className="tier-badge">★ Most picked</span>
              <h4>Local Lift Growth — $1,497/month</h4>
              <div className="tier-price">$1,497/mo</div>
              <ul>
                <li>Everything in Core, plus:</li>
                <li>We run your Google Ads (up to $5K/month ad spend)</li>
                <li>Weekly ad optimization</li>
                <li>Monthly recorded ad performance review</li>
                <li>Landing page conversion improvements based on call data</li>
                <li>Call data review built into your monthly video</li>
                <li>Cancel anytime after month 6</li>
              </ul>
              <p className="tier-foot">
                Best for businesses ready to fund ads. Ad spend goes directly to Google, not us.
              </p>
            </div>
          </div>

          <div className="pricing-annual">
            <strong>§ Annual billing</strong> — Pay annually and save 10%. Core annual: $5,367 (save $597). Growth
            annual: $16,167 (save $1,797).
          </div>
        </div>
      </section>

      <section className="guarantee-section" id="guarantee">
        <div className="container">
          <div className="s-head" style={{ borderColor: "var(--paper-300)" }}>
            <div>
              <div className="marker">§ 06 · The guarantee</div>
            </div>
            <div>
              <h2 className="h-display size-section">If the gap doesn&apos;t close in 90 days, we work for free until it does.</h2>
            </div>
          </div>
          <div className="guarantee-inner">
            <p className="lede" style={{ marginTop: 0 }}>
              Most agencies measure things you can&apos;t verify. &quot;Impressions.&quot; &quot;Engagement.&quot;
              &quot;Brand awareness.&quot; We measure three things you can:
            </p>
            <ul className="guarantee-list">
              <li>Where you rank for your top local searches</li>
              <li>How many Google reviews you have</li>
              <li>Whether AI search can see your business</li>
            </ul>
            <p className="body-lg" style={{ marginTop: 20 }}>
              These are the same three KPIs in your Gap Report. We measure them on day one. We re-measure them on day
              90.
            </p>
            <p className="body-lg" style={{ marginTop: 16 }}>
              If at least two of the three haven&apos;t measurably improved by day 90, we keep working at no monthly
              charge until they do.
            </p>
            <p className="body-lg" style={{ marginTop: 16 }}>
              This is a real guarantee because the metrics are objectively verifiable. Anyone can pull rank data.
              Anyone can count reviews. Anyone can ask ChatGPT about your business.
            </p>
            <p className="body-lg" style={{ marginTop: 16, marginBottom: 0 }}>
              We can offer this because we already know what works. We&apos;re not guessing.
            </p>
          </div>
        </div>
      </section>

      <section
        className="s"
        id="demo"
        style={{
          background: "var(--paper-50)",
          borderTop: "1px solid var(--paper-300)",
          borderBottom: "1px solid var(--paper-300)",
        }}
      >
        <div className="container">
          <div className="s-head">
            <div>
              <div className="marker">§ 07 · The demo</div>
            </div>
            <div>
              <h2 className="h-display size-section">See what we actually build.</h2>
              <p className="lede" style={{ marginTop: 24 }}>
                A real Local Lift Engine site for Portland Best Junk Removal. Click around. Check the speed. Pull it up
                on your phone. Compare it to your current site.
              </p>
            </div>
          </div>

          <div className="demo-frame">
            <div className="demo-chrome">
              <div className="demo-dots">
                <span />
                <span />
                <span />
              </div>
              <div className="demo-url">
                <span className="lock">●</span> portlandbestjunkremoval.com
              </div>
            </div>
            <div className="demo-stage">
              <div className="demo-overlay">
                <div className="label">Live demo · Portland, OR</div>
                <div className="name">Portland Best Junk Removal</div>
                <div className="where">Built in 19 hrs · Lighthouse 96</div>
                <a
                  href="https://demo.localliftengine.com"
                  target="_blank"
                  rel="noreferrer"
                  className="demo-cta"
                >
                  View the demo <span>↗</span>
                </a>
              </div>
            </div>
          </div>

          <div className="demo-caption">
            <span>
              <b>Lighthouse score:</b> 96 / 100
            </span>
            <span>
              <b>Page load:</b> 0.84s
            </span>
            <span>
              <b>Built in:</b> &lt; 24 hours
            </span>
          </div>
        </div>
      </section>

      <section className="fit" id="fit">
        <div className="container">
          <div className="s-head">
            <div>
              <div className="marker">§ 08 · Who it&apos;s for</div>
            </div>
            <div>
              <h2 className="h-display size-section">Who this works for.</h2>
              <p className="lede" style={{ marginTop: 24 }}>
                Local Lift Engine is built for local service businesses doing $50K–$500K in annual revenue, who want
                to stop losing local search to companies they know they can out-work.
              </p>
            </div>
          </div>

          <div className="fit-grid">
            <div className="fit-card yes">
              <div className="tag">✓ Built for you</div>
              <h3>Running real jobs. Missing real calls. Tired of agencies.</h3>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: "var(--text-secondary)", margin: 0 }}>
                If you&apos;re somewhere in between — already operating, growing, but feeling like the website is the
                weak link — that&apos;s exactly who we built this for.
              </p>
              <div className="criteria">
                <div className="crit">
                  <b>Type of business</b>
                  <span>
                    Local service: junk removal, HVAC, roofing, landscaping, cleaning, pest control, electricians,
                    plumbers, and similar trades
                  </span>
                </div>
                <div className="crit">
                  <b>Revenue</b>
                  <span>$50K–$500K annual</span>
                </div>
                <div className="crit">
                  <b>Geographic</b>
                  <span>We&apos;re based in the Pacific Northwest. We serve clients anywhere in the US and Canada.</span>
                </div>
                <div className="crit">
                  <b>State of mind</b>
                  <span>Done with agency retainers that don&apos;t move the numbers</span>
                </div>
              </div>
            </div>
            <div className="fit-card no">
              <div className="tag">— Not the right fit yet</div>
              <h3>If you&apos;re under $50K, or a multi-location franchise.</h3>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: "var(--text-secondary)", margin: 0 }}>
                If you&apos;re under $50K and just starting out, you need volume, not infrastructure. Spend your money
                on ads and on building word-of-mouth first.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: "var(--text-secondary)", margin: "12px 0 0" }}>
                If you&apos;re a multi-location franchise with an in-house marketing team, you have other tools
                available — and our pricing isn&apos;t built for your scale.
              </p>
              <div className="criteria">
                <div className="crit">
                  <b>Too early</b>
                  <span>Pre-revenue or under $50K — focus on volume first</span>
                </div>
                <div className="crit">
                  <b>Too big</b>
                  <span>Multi-location franchises with in-house marketing</span>
                </div>
                <div className="crit">
                  <b>Wrong fit</b>
                  <span>B2B services, e-commerce, or anything that isn&apos;t local + service-based</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gap-section" id="gap">
        <div className="gap-split">
          <div className="gap-panel-dark">
            <div className="gap-panel-content">
              <div className="marker" style={{ color: "var(--signal-300)" }}>§ 09 · Free Gap Report</div>
              <h2 className="h-display size-section" style={{ marginTop: 16 }}>
                Not ready to talk yet? Start with a free <em>Gap Report</em>.
              </h2>
              <p className="body-lg" style={{ marginTop: 24 }}>
                Real data on your business and your top three local competitors. No pitch — just the gap.
              </p>
              <div className="gap-trust">
                <div className="gap-trust-item">
                  <span className="gt-plus">+</span>
                  <span>Where your site ranks for your top local searches</span>
                </div>
                <div className="gap-trust-item">
                  <span className="gt-plus">+</span>
                  <span>How your Google Business Profile compares to your top 3 competitors</span>
                </div>
                <div className="gap-trust-item">
                  <span className="gt-plus">+</span>
                  <span>The 3 highest-leverage fixes for your exact situation</span>
                </div>
                <div className="gap-trust-item">
                  <span className="gt-plus">+</span>
                  <span>AI search visibility status</span>
                </div>
              </div>
              <p className="gap-trust-note">One page. No pitch. Yours to keep whether we ever talk or not.</p>
            </div>
          </div>

          <div className="gap-panel-light">
            <div className="gap-panel-content">
              <div className="gap-form-head">
                <h3>Get my free Gap Report</h3>
                <p>We&apos;ll send it within 1 business day</p>
              </div>
              <GapReportForm />
            </div>
          </div>
        </div>
      </section>

      <section className="s" id="faq">
        <div className="container">
          <div className="s-head">
            <div>
              <div className="marker">§ 10 · FAQ</div>
            </div>
            <div>
              <h2 className="h-display size-section">Honest answers to the questions we get most.</h2>
            </div>
          </div>

          <div className="faq-list">
            <details className="faq-item" open>
              <summary>
                <span className="num">Q.01</span>
                <div className="q">Is this just another AI website tool?</div>
                <span className="toggle" />
              </summary>
              <div className="a">
                No. AI is part of how we build, but the value isn&apos;t the AI — it&apos;s the local market research,
                the technical engineering, the GBP optimization work, and the ad playbook. You can&apos;t get this from
                ChatGPT and a Wix template.
              </div>
            </details>

            <details className="faq-item">
              <summary>
                <span className="num">Q.02</span>
                <div className="q">Why is the monthly required? Can I just buy the setup?</div>
                <span className="toggle" />
              </summary>
              <div className="a">
                The setup is the start of the system. The monthly is what closes the gap and keeps it closed. Reviews
                need to be collected continuously. Google Posts need to keep going. AI search citations build over
                months, not days. The agencies that sell &quot;just a website&quot; make money once and leave you to figure
                out the rest. We don&apos;t operate that way.
                <br />
                <br />
                That said — if you genuinely only want the website and no ongoing work, email us and ask. We have a
                website-only option that&apos;s not on this page. It costs more up front and you&apos;re on your own
                after. We&apos;ll tell you whether it makes sense for your situation.
              </div>
            </details>

            <details className="faq-item">
              <summary>
                <span className="num">Q.03</span>
                <div className="q">What does the 90-day guarantee actually mean?</div>
                <span className="toggle" />
              </summary>
              <div className="a">
                We measure three things on day one: your rank for your top local searches, your Google review count,
                and your AI search visibility. We re-measure on day 90. If at least 2 of the 3 haven&apos;t measurably
                improved, we keep working at no monthly charge until they do. This is in your contract, not a marketing
                line.
              </div>
            </details>

            <details className="faq-item">
              <summary>
                <span className="num">Q.04</span>
                <div className="q">Do you actually run my Google Ads?</div>
                <span className="toggle" />
              </summary>
              <div className="a">
                Only on the Growth tier ($1,497/mo). At Core ($497/mo) we give you the playbook and a recorded
                walkthrough so you (or whoever runs your ads) can launch confidently.
                <br />
                <br />
                Why this split? Honest ad management requires weekly work — bid adjustments, negative keywords, landing
                page tweaks, conversion tracking. At $497/mo we&apos;d be lying if we said we could do it well.
                We&apos;d rather be upfront and price it correctly than overpromise.
              </div>
            </details>

            <details className="faq-item">
              <summary>
                <span className="num">Q.05</span>
                <div className="q">What does &quot;GBP optimization&quot; actually include?</div>
                <span className="toggle" />
              </summary>
              <div className="a">
                We audit your profile against the 47 factors Google uses to rank local businesses. Categories,
                services, descriptions, photos, schema sync, posting cadence, Q&amp;A seeding, review acquisition
                system. Most profiles need 10–15 specific fixes — we make them all in week one. For most local
                businesses, this is the single fastest driver of new calls in month one.
              </div>
            </details>

            <details className="faq-item">
              <summary>
                <span className="num">Q.06</span>
                <div className="q">What if I just want help with my GBP?</div>
                <span className="toggle" />
              </summary>
              <div className="a">
                We offer a $297 one-time GBP-only sprint — audit + 30-day optimization, no website, no monthly. Email
                us and ask about it. It&apos;s not on the pricing page because the full system is usually the better
                fit, but for some businesses it&apos;s the right starting point.
              </div>
            </details>

            <details className="faq-item">
              <summary>
                <span className="num">Q.07</span>
                <div className="q">Do I own the site, or are you holding it hostage?</div>
                <span className="toggle" />
              </summary>
              <div className="a">
                You own it. Domain, code, content, everything. If you ever stop working with us, you keep the site and
                the playbook. We hand over the GitHub repo. No hostages.
              </div>
            </details>

            <details className="faq-item">
              <summary>
                <span className="num">Q.08</span>
                <div className="q">How is this different from what an agency would build?</div>
                <span className="toggle" />
              </summary>
              <div className="a">
                Agencies typically take 4–8 weeks and charge $3,000–$10,000 for the website alone, then bill you
                $1,000+/month for &quot;maintenance&quot; that doesn&apos;t change anything. We deliver website + GBP +
                ads playbook in 24 hours, charge $997 to build it, and the monthly is for actual ongoing work — not
                maintenance. Same caliber of work. Different business model.
              </div>
            </details>

            <details className="faq-item">
              <summary>
                <span className="num">Q.09</span>
                <div className="q">How is this different from doing it myself with ChatGPT?</div>
                <span className="toggle" />
              </summary>
              <div className="a">
                You can absolutely try. Most owners we talk to have already tried. The hard parts aren&apos;t the
                writing — they&apos;re the local market data, the technical SEO, the GBP optimization, the schema markup,
                the ad campaign architecture, and the design. Those are what we automated with engineering, not just
                prompts.
              </div>
            </details>

            <details className="faq-item">
              <summary>
                <span className="num">Q.10</span>
                <div className="q">What if I already have a website?</div>
                <span className="toggle" />
              </summary>
              <div className="a">
                Most of the businesses we work with already have one. The question isn&apos;t whether you have a site —
                it&apos;s whether the system around it is doing its job. If your phone isn&apos;t ringing, the Gap
                Report will show you exactly why.
              </div>
            </details>

            <details className="faq-item">
              <summary>
                <span className="num">Q.11</span>
                <div className="q">Why don&apos;t you do strategy calls?</div>
                <span className="toggle" />
              </summary>
              <div className="a">
                Service business owners don&apos;t have time for calls. You&apos;re on a job, or driving, or quoting,
                or hiring. We replaced every strategy call with a recorded video walkthrough you can watch in the truck.
                10 minutes, on your time, explaining exactly what changed and what&apos;s next.
              </div>
            </details>

            <details className="faq-item">
              <summary>
                <span className="num">Q.12</span>
                <div className="q">Which industries do you serve?</div>
                <span className="toggle" />
              </summary>
              <div className="a">
                Local service businesses — junk removal, HVAC, roofing, landscaping, cleaning, pest control,
                electricians, plumbers, and similar trades. We started with junk removal in the Pacific Northwest,
                which is where our demo lives. We&apos;ve since opened to adjacent service niches and locations across
                the US and Canada. If you&apos;re not sure if you fit, just ask.
              </div>
            </details>

            <details className="faq-item">
              <summary>
                <span className="num">Q.13</span>
                <div className="q">How long until I see results?</div>
                <span className="toggle" />
              </summary>
              <div className="a">
                GBP improvements typically start showing up within 7–14 days — that&apos;s usually the first source of
                new calls. Website ranking improvements compound over 4–8 weeks. Google Ads can drive calls from day
                one if you fund the campaign. Our 90-day guarantee covers the full ramp window. Anyone promising leads
                in week one without paid ads is selling you something else.
              </div>
            </details>

            <details className="faq-item">
              <summary>
                <span className="num">Q.14</span>
                <div className="q">Can I cancel?</div>
                <span className="toggle" />
              </summary>
              <div className="a">
                Yes. Core: cancel anytime after month 3. Growth: cancel anytime after month 6. You keep the site, the GBP
                optimization stays in place, and you get a final Gap Report showing where you are. No hostages, no
                clawbacks.
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="final" id="start">
        <div className="container">
          <div className="marker eyebrow" style={{ color: "var(--signal-300)", marginBottom: 24 }}>
            § 11 · Two ways to start
          </div>
          <h2 className="h-display size-hero" style={{ fontSize: 84 }}>
            Stop being invisible in your <em>own city</em>.
          </h2>
          <p className="lede">Two ways to start. Pick whichever feels right.</p>

          <div className="final-cta">
            <div className="final-cta-card primary">
              <div className="cta-label">→ Option A · Data first</div>
              <h3>Get my free Gap Report.</h3>
              <p>1-page audit on your business. We&apos;ll send it within 1 business day.</p>
              <a
                href="#gap"
                className="btn btn-primary btn-lg"
                style={{ background: "var(--paper-100)", color: "var(--ink-900)" }}
              >
                Get my free Gap Report <span className="arr">→</span>
              </a>
            </div>
            <div className="final-cta-card secondary">
              <div className="cta-label">→ Option B · Talk first</div>
              <h3>Book a 15-min intro.</h3>
              <p>See the demo, ask anything, find out if you&apos;re a fit. No pitch.</p>
              <a
                href="https://zcal.co/adriamooney/15min-local-lift"
                className="btn btn-outline on-dark btn-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a 15-min intro <span className="arr">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="brand">
                <span className="brand-glyph" />
                <span>
                  <div className="brand-name">Local Lift Engine</div>
                  <div className="brand-tag">Built for local service businesses</div>
                </span>
              </div>
              <p className="tag-line">Built for local service businesses across the US and Canada.</p>
            </div>
            <div>
              <h5>Get in touch</h5>
              <a href="mailto:hello@localliftengine.com">hello@localliftengine.com</a>
              {/* <a href="tel:5035550181">(503) 555 — 0181</a> */}
            </div>
            <div>
              <h5>Start here</h5>
              <a href="#gap">Get a Gap Report</a>
              <a href="https://zcal.co/adriamooney/15min-local-lift" target="_blank" rel="noopener noreferrer">
                Book a 15-min intro
              </a>
              <a href="https://demo.localliftengine.com" target="_blank" rel="noreferrer">
                See the demo
              </a>
            </div>
            <div>
              <h5>The site</h5>
              <a href="#how">How it works</a>
              <a href="#pricing">Pricing</a>
              <a href="#faq">FAQ</a>
            </div>
          </div>
          <div className="footer-base">
            <span>© 2026 Local Lift Engine</span>
            <span>v2.0 · Lighthouse 96 · Loaded in 0.84s</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
