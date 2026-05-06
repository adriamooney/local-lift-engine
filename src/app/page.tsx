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
              <div className="brand-tag">Built in the PNW</div>
            </span>
          </a>
          <nav className="nav-links">
            <a href="#how">How it works</a>
            <a href="#demo">See the demo</a>
            <a href="#fit">Who it's for</a>
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
              <div className="eyebrow signal">§ For PNW junk removal businesses</div>
              <h1 className="h-display size-hero">
                Your competitors are getting calls you&apos;re not. Here&apos;s the <em>complete fix</em> — built
                in 24 hours.
              </h1>
              <p className="body-lg">
                Local Lift Engine builds your junk removal business a premium website, optimizes your Google
                Business Profile, and hands you a ready-to-launch Google Ads playbook — all in one shot.{" "}
                <b style={{ color: "var(--ink-900)" }}>You own everything.</b> No agencies. No retainers. No
                weekend WordPress nights.
              </p>
              <div className="hero-cta">
                <a href="#gap" className="btn btn-primary btn-lg">
                  Get my free Local Search Gap Report <span className="arr">→</span>
                </a>
                <p className="hero-subline">
                  1-page audit. Shows where your business is invisible online — and what&apos;s
                  costing you calls.{" "}
                  <b style={{ color: "var(--ink-900)" }}>Free, no pitch.</b>
                </p>
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
                  <span className="v">Fully optimized</span>
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
                <span className="tb-label">What you get (the system)</span>
              </div>
              <div>
                <span className="tb-value">Premium website</span>
              </div>
              <div>
                <span className="tb-value">Optimized GBP</span>
              </div>
              <div>
                <span className="tb-value">Google Ads playbook</span>
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
                So you put it off. And every week, homeowners Google &quot;junk removal near me,&quot;
                ask Siri, ask ChatGPT — and call <em>whoever shows up first</em>.
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
                  Most websites built before 2024 were never engineered for this.{" "}
                  <strong>Including the ones agencies are still selling for $5,000+.</strong>
                </p>
              </div>
            </div>
            <div className="shift-points">
              <div className="shift-point">
                <span className="label">Voice</span>
                <p className="body">
                  Your customers are asking Siri <em>&quot;find a junk hauler near me.&quot;</em>
                </p>
              </div>
              <div className="shift-point">
                <span className="label">LLMs</span>
                <p className="body">
                  They&apos;re asking ChatGPT <em>&quot;who&apos;s the best junk removal company in Vancouver?&quot;</em>
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
                  <em>invisible</em> to a growing share of your local market.
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
                customers find you. Without your Google Business Profile dialed in, and without a way to
                capture the high-intent searches happening right now, the site sits there. We build all three
                pieces, together, so they actually work.
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
              <h3>GBP, optimized end to end.</h3>
              <p>
                Categories, services, descriptions, photos, schema sync between your site and your listing — so
                you stop losing the local <em>Map Pack</em> to competitors who have less experience but better
                profiles. Usually the fastest source of new calls in the first 30 days.
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
                Done for you · Live in week one
              </p>
              <div className="icon-num">02</div>
            </div>
            <div className="what-card">
              <div className="step">Piece 03 · Google Ads Playbook</div>
              <h3>A complete, ready-to-run campaign.</h3>
              <p>
                Ad copy, keyword groups, negative keywords, landing page mapping, budget guidance, the whole
                launch sequence — mapped to your exact services, city, and target keywords. Plus a 30-minute
                walkthrough call so you launch confidently — or hand it to whoever runs your ads.
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
              <div className="marker">§ 04 · The demo</div>
            </div>
            <div>
              <h2 className="h-display size-section">See what we actually build.</h2>
              <p className="lede" style={{ marginTop: 24 }}>
                A real Local Lift Engine site for a Portland junk removal business. Click around. Check the
                speed. Pull it up on your phone. Compare it to your current site.
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
                <span className="lock">●</span> ripcityjunk.com
              </div>
            </div>
            <div className="demo-stage">
              <div className="demo-overlay">
                <div className="label">Live demo · Portland, OR</div>
                <div className="name">Rip City Junk</div>
                <div className="where">Built in 19 hrs · Lighthouse 96</div>
                <a href="#" className="demo-cta">
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
              <div className="marker">§ 05 · Who it&apos;s for</div>
            </div>
            <div>
              <h2 className="h-display size-section">Who this works for.</h2>
              <p className="lede" style={{ marginTop: 24 }}>
                Local Lift Engine is built specifically for junk removal businesses in the Pacific Northwest
                doing $200K–$2M in annual revenue, who want to stop losing local search to companies they know
                they can out-work.
              </p>
            </div>
          </div>

          <div className="fit-grid">
            <div className="fit-card yes">
              <div className="tag">✓ Built for you</div>
              <h3>Running real jobs. Missing real calls. Tired of agencies.</h3>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: "var(--text-secondary)", margin: 0 }}>
                If you&apos;re somewhere in between — already operating, growing, but feeling like the website is
                the weak link — that&apos;s exactly who we built this for.
              </p>
              <div className="criteria">
                <div className="crit">
                  <b>Region</b>
                  <span>Pacific Northwest — Oregon, Washington, Idaho, BC</span>
                </div>
                <div className="crit">
                  <b>Revenue</b>
                  <span>$200K–$2M annual</span>
                </div>
                <div className="crit">
                  <b>Niche</b>
                  <span>Junk removal / hauling</span>
                </div>
                <div className="crit">
                  <b>State of mind</b>
                  <span>Done with agency retainers</span>
                </div>
              </div>
            </div>
            <div className="fit-card no">
              <div className="tag">— Not the right fit yet</div>
              <h3>If you&apos;re under $100K, or a multi-location franchise.</h3>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: "var(--text-secondary)", margin: 0 }}>
                If you&apos;re under $100K and just starting out, you need volume, not infrastructure. If you&apos;re a
                multi-location franchise with an in-house marketing team, you have other tools available.
              </p>
              <div className="criteria">
                <div className="crit">
                  <b>Too early</b>
                  <span>Pre-revenue or under $100K — focus on volume first</span>
                </div>
                <div className="crit">
                  <b>Too big</b>
                  <span>Multi-location franchises with in-house marketing</span>
                </div>
                <div className="crit">
                  <b>Wrong niche</b>
                  <span>We&apos;ll open to adjacent niches once junk removal proves out</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gap-section" id="gap">
        <div className="container">
          <div className="gap-grid">
            <div>
              <div className="marker eyebrow signal">§ 07 · Free Gap Report</div>
              <h2 className="h-display size-section" style={{ marginTop: 16 }}>
                Not ready to talk yet? Start with a free <em>Gap Report</em>.
              </h2>
              <p className="body-lg" style={{ marginTop: 24, maxWidth: 440 }}>
                We&apos;ll pull real data on your business and your top three local competitors — including how your
                website ranks, how your <b style={{ color: "var(--ink-900)" }}>Google Business Profile</b>{" "}
                compares, and where the highest-intent local searches are going. You&apos;ll see exactly where
                you&apos;re showing up, where they&apos;re winning, and the three biggest fixes you could make.
              </p>
              <p className="body-lg" style={{ marginTop: 16, maxWidth: 440, color: "var(--ink-700)" }}>
                <b>One page. No pitch.</b> Yours to keep whether we ever talk or not.
              </p>
            </div>

            <GapReportForm />
          </div>
        </div>
      </section>

      <section className="s" id="faq">
        <div className="container">
          <div className="s-head">
            <div>
              <div className="marker">§ 08 · FAQ</div>
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
                the technical engineering, the GBP optimization work, and the ad playbook. You can&apos;t get this
                from ChatGPT and a Wix template.
              </div>
            </details>

            <details className="faq-item">
              <summary>
                <span className="num">Q.02</span>
                <div className="q">Do you actually run my Google Ads, or do I have to do that?</div>
                <span className="toggle" />
              </summary>
              <div className="a">
                We give you a complete launch playbook — ad copy, keyword groups, budget guidance, the whole
                campaign mapped out — plus a 30-minute walkthrough call to get you launched. You (or whoever
                you trust with your ad spend) press the buttons. We deliberately don&apos;t manage ad accounts at
                this price point because honest ad management requires ongoing weekly work and a different fee
                structure. We&apos;ll be straight with you about that.
              </div>
            </details>

            <details className="faq-item">
              <summary>
                <span className="num">Q.03</span>
                <div className="q">What does &quot;GBP optimization&quot; actually include?</div>
                <span className="toggle" />
              </summary>
              <div className="a">
                We rebuild your Google Business Profile from end to end — primary and secondary categories, full
                service catalog, optimized descriptions, photo strategy, schema sync between your site and your
                listing, posting cadence, and a review acquisition system. For most junk removal businesses,
                this is the single fastest driver of new calls in month one.
              </div>
            </details>

            <details className="faq-item">
              <summary>
                <span className="num">Q.04</span>
                <div className="q">Do I own the site, or are you holding it hostage?</div>
                <span className="toggle" />
              </summary>
              <div className="a">
                You own it. Domain, code, content, everything. If you ever stop working with us, you keep the
                site and the playbook. We hand over the GitHub repo. No hostages.
              </div>
            </details>

            <details className="faq-item">
              <summary>
                <span className="num">Q.05</span>
                <div className="q">How is this different from what an agency would build?</div>
                <span className="toggle" />
              </summary>
              <div className="a">
                Agencies typically take 4–8 weeks and charge $3,000–$10,000 for the website alone, then bill
                you $1,000+/month for &quot;maintenance.&quot; We deliver website + GBP + ads playbook in 24 hours,
                charge once, and the monthly is optional. Same caliber of work. Different business model.
              </div>
            </details>

            <details className="faq-item">
              <summary>
                <span className="num">Q.06</span>
                <div className="q">How is this different from doing it myself with ChatGPT?</div>
                <span className="toggle" />
              </summary>
              <div className="a">
                You can absolutely try. Most owners we talk to have already tried. The hard parts aren&apos;t the
                writing — they&apos;re the local market data, the technical SEO, the GBP optimization, the schema
                markup, the ad campaign architecture, and the design. Those are what we automated with
                engineering, not just prompts.
              </div>
            </details>

            <details className="faq-item">
              <summary>
                <span className="num">Q.07</span>
                <div className="q">What if I already have a website?</div>
                <span className="toggle" />
              </summary>
              <div className="a">
                Most of the businesses we work with already have one. The question isn&apos;t whether you have a
                site — it&apos;s whether the system around it is doing its job. If your phone isn&apos;t ringing, the
                Gap Report will show you exactly why.
              </div>
            </details>

            <details className="faq-item">
              <summary>
                <span className="num">Q.08</span>
                <div className="q">Why junk removal specifically?</div>
                <span className="toggle" />
              </summary>
              <div className="a">
                We&apos;re starting with the Pacific Northwest junk removal market because that&apos;s where we have
                the deepest data and the strongest local case study. Once we&apos;ve proven it here, we&apos;ll open to
                adjacent niches.
              </div>
            </details>

            <details className="faq-item">
              <summary>
                <span className="num">Q.09</span>
                <div className="q">How long until I see results?</div>
                <span className="toggle" />
              </summary>
              <div className="a">
                GBP improvements typically start showing up within 7–14 days — that&apos;s usually the first source
                of new calls. Website ranking improvements compound over 4–8 weeks. Google Ads can drive calls
                from day one if you fund the campaign. We&apos;re upfront about all of this — anyone promising
                leads in week one without paid ads is selling you something else.
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="final" id="start">
        <div className="container">
          <div className="marker eyebrow" style={{ color: "var(--signal-300)", marginBottom: 24 }}>
            § 09 · Two ways to start
          </div>
          <h2 className="h-display size-hero" style={{ fontSize: 84 }}>
            Stop being invisible in your <em>own city</em>.
          </h2>
          <p className="lede">Two ways to start. Pick whichever feels right.</p>

          <div className="final-cta">
            <div className="final-cta-card primary">
              <div className="cta-label">→ Option A · Talk first</div>
              <h3>Book a 15-min call.</h3>
              <p>See the demo, ask anything, find out if your city is still open. No pitch.</p>
              <a
                href="https://zcal.co/adriamooney/15min-local-lift"
                className="btn btn-primary btn-lg"
                style={{ background: "var(--paper-100)", color: "var(--ink-900)" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a 15-min call <span className="arr">→</span>
              </a>
            </div>
            <div className="final-cta-card secondary">
              <div className="cta-label">→ Option B · Data first</div>
              <h3>Get my free Gap Report first.</h3>
              <p>1-page audit on your business. We&apos;ll send it within 1 business day.</p>
              <a href="#gap" className="btn btn-outline on-dark btn-lg">
                Get my free Gap Report <span className="arr">→</span>
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
                  <div className="brand-tag">Built in the PNW</div>
                </span>
              </div>
              <p className="tag-line">
                Built in the Pacific Northwest, for Pacific Northwest service businesses.
              </p>
            </div>
            <div>
              <h5>Get in touch</h5>
              <a href="mailto:hello@localliftengine.com">hello@localliftengine.com</a>
              {/* <a href="tel:5035550181">(503) 555 — 0181</a> */}
            </div>
            <div>
              <h5>Start here</h5>
              <a href="#gap">Get a Gap Report</a>
              <a href="#start">Book a 15-min call</a>
              <a href="#demo">See the demo</a>
            </div>
            <div>
              <h5>The site</h5>
              <a href="#how">How it works</a>
              <a href="#fit">Who it&apos;s for</a>
              <a href="#faq">FAQ</a>
            </div>
          </div>
          <div className="footer-base">
            <span>© 2026 Local Lift Engine</span>
            <span>v1.0 · Lighthouse 96 · Loaded in 0.84s</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
