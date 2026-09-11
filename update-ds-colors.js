const fs = require('fs');

let content = fs.readFileSync('design-system-v2.html', 'utf8');

const newColors = `<div class="color-row">
        <div class="swatch" style="background-color: var(--primary-green);"></div>
        <div class="color-details">
          <div class="color-name">Action Green</div>
          <div class="color-hex">#C0DA3B</div>
        </div>
        <div class="color-usage">Primary buttons, active states. Passes on Charcoal (9.96:1). Black (#25231F) text MUST be used on top of this color.</div>
      </div>
      
      <div style="margin-top: 32px; margin-bottom: 16px;"><strong>Surface-Aware Variants: Orange</strong></div>
      <div class="color-row">
        <div class="swatch" style="background-color: var(--brick);"></div>
        <div class="color-details">
          <div class="color-name">Orange (On Light)</div>
          <div class="color-hex">#96432E</div>
        </div>
        <div class="color-usage">Base orange. Use ONLY on Paper or light backgrounds.</div>
      </div>
      <div class="color-row">
        <div class="swatch" style="background-color: #CC7059;"></div>
        <div class="color-details">
          <div class="color-name">Orange (On Dark)</div>
          <div class="color-hex">#CC7059</div>
        </div>
        <div class="color-usage">Lightened tint for dark surfaces. Passes on Charcoal (4.50:1). Use ONLY on Charcoal, dark overlays, or imagery.</div>
      </div>

      <div style="margin-top: 32px; margin-bottom: 16px;"><strong>Surface-Aware Variants: Moss</strong></div>
      <div class="color-row">
        <div class="swatch" style="background-color: #5C6B47;"></div>
        <div class="color-details">
          <div class="color-name">Moss (On Light)</div>
          <div class="color-hex">#5C6B47</div>
        </div>
        <div class="color-usage">Base moss. Use ONLY on Paper or light backgrounds. Passes on Paper (5.43:1).</div>
      </div>
      <div class="color-row">
        <div class="swatch" style="background-color: #7E9361;"></div>
        <div class="color-details">
          <div class="color-name">Moss (On Dark)</div>
          <div class="color-hex">#7E9361</div>
        </div>
        <div class="color-usage">Lightened tint for dark surfaces. Passes on Charcoal (4.66:1). Use ONLY on Charcoal, dark overlays, or imagery.</div>
      </div>`;

content = content.replace(/<div class="color-row">[\s\S]*?<div class="swatch" style="background-color: var\(--primary-green\);"><\/div>[\s\S]*?<\/div>(\s*<div style="margin-top: 32px; margin-bottom: 16px;"><strong>Surface-Aware Variants: Orange<\/strong><\/div>[\s\S]*?<div class="color-row">[\s\S]*?#7E9361[\s\S]*?<\/div>|<\s*div class="color-row">[\s\S]*?var\(--brick\)[\s\S]*?<\/div>)/, newColors);
fs.writeFileSync('design-system-v2.html', content);
console.log("Updated design system HTML.");
