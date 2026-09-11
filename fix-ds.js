const fs = require('fs');

let content = fs.readFileSync('design-system-v2.html', 'utf8');

const oldMotion = `<section>
    <div class="wrap">
      <h2 class="section-title">Motion</h2>
      <p class="section-dek">One deliberate animation, not motion on every element.</p>
      <p class="t-body">The hero image's ambient micro-motion (leaves, dappled light) is the one sustained animation on the site. Everywhere else: instant or 200ms ease transitions on hover only. No scroll-triggered fade-up/slide-in applied uniformly to every section &mdash; that pattern alone is one of the most common signs of a templated AI-built site.</p>
    </div>
  </section>`;

const newMotion = `<section>
    <div class="wrap">
      <h2 class="section-title">Motion &amp; Micro-Interactions</h2>
      <p class="section-dek">Purposeful, content-aware motion. Never repeat one identical fade-up-on-scroll effect down the whole page. Motion should feel alive, varied, and tied to what each piece of content actually is.</p>
      
      <p class="t-body"><strong>Decision Authority:</strong> Use judgment per section. A hero doesn't need to move like a footer; a stat block shouldn't animate like a pull-quote. Mix patterns across the page.</p>

      <ul class="t-body" style="margin-left: 20px; margin-top: 16px;">
        <li style="margin-bottom: 8px;"><strong>Scroll entry, text blocks:</strong> fade + slight upward rise (8-16px), 400-500ms, ease-out</li>
        <li style="margin-bottom: 8px;"><strong>Scroll entry, images/cards:</strong> fade + slight scale (0.98 &rarr; 1), 400-500ms</li>
        <li style="margin-bottom: 8px;"><strong>Scroll entry, grouped items:</strong> staggered entry, 60-100ms delay between siblings</li>
        <li style="margin-bottom: 8px;"><strong>Hover, image/content cards:</strong> subtle image scale to 1.03-1.05; heading stays visible, description reveals on hover only (fade + slight rise)</li>
        <li style="margin-bottom: 8px;"><strong>Hover, buttons:</strong> color-shift per button spec, plus small icon shift (translateX 2-4px)</li>
        <li style="margin-bottom: 8px;"><strong>Hover, text links:</strong> underline animates in from the left</li>
        <li style="margin-bottom: 8px;"><strong>Pull-quotes:</strong> arrive a beat after surrounding content (slightly delayed fade) to give a distinct moment</li>
      </ul>

      <p class="t-body" style="margin-top: 20px;"><strong>Timing:</strong> Hover/micro-interactions 150-300ms; scroll-entry animations 400-600ms. Easing: ease-out for things entering, ease-in-out for hover states.</p>
      
      <p class="t-body" style="margin-top: 16px;"><strong>Accessibility:</strong> Respect <code>prefers-reduced-motion</code> &mdash; provide a static fallback (content simply present, no animation).</p>
      
      <p class="t-body" style="margin-top: 16px; color: var(--brick);"><strong>AVOID:</strong> Applying the identical animation pattern to every section with no variation. Motion must be content-aware.</p>
    </div>
  </section>`;

if (content.includes('One deliberate animation, not motion on every element.')) {
  // Regex to flexibly match the old block
  content = content.replace(/<section>[\s\S]*?<h2 class="section-title">Motion<\/h2>[\s\S]*?<\/section>/i, newMotion);
  fs.writeFileSync('design-system-v2.html', content);
  console.log("Updated design system motion section.");
} else {
  console.log("Could not find the original motion section in HTML.");
}
