const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// Hero section text
content = content.replace(
  /<div className="max-w-2xl">([\s\S]*?)<\/div>\s*<\/div>\s*<\/section>/,
  `<div className="max-w-2xl">
            <MotionBlurReveal delay={0}>$1</MotionBlurReveal>
          </div>
        </div>
      </section>`
);

// What We Do (Section 4)
content = content.replace(
  /<h2 className="text-\[48px\].*?">([\s\S]*?)What We Do([\s\S]*?)<\/h2>/,
  `<MotionBlurReveal delay={0}><h2 className="text-[48px] font-bold text-[var(--charcoal)] tracking-[-0.01em] leading-[1.15] mb-[48px] text-center">What We Do</h2></MotionBlurReveal>`
);

content = content.replace(
  /<div className="bg-\[var\(--charcoal\)\].*?>([\s\S]*?)<h3 className="text-\[24px\].*?">The Model<\/h3>([\s\S]*?)<\/div>/,
  `<MotionBlurReveal delay={0}><div className="bg-[var(--charcoal)] rounded-[3px] p-[32px] text-[var(--paper)] h-full border border-[var(--line)]">$1<h3 className="text-[24px] font-bold mb-[16px] leading-[1.2]">The Model</h3>$2</div></MotionBlurReveal>`
);
content = content.replace(
  /<div className="bg-\[var\(--charcoal\)\].*?>([\s\S]*?)<h3 className="text-\[24px\].*?">The Scale<\/h3>([\s\S]*?)<\/div>/,
  `<MotionBlurReveal delay={150}><div className="bg-[var(--charcoal)] rounded-[3px] p-[32px] text-[var(--paper)] h-full border border-[var(--line)]">$1<h3 className="text-[24px] font-bold mb-[16px] leading-[1.2]">The Scale</h3>$2</div></MotionBlurReveal>`
);
content = content.replace(
  /<div className="bg-\[var\(--charcoal\)\].*?>([\s\S]*?)<h3 className="text-\[24px\].*?">The Need<\/h3>([\s\S]*?)<\/div>/,
  `<MotionBlurReveal delay={300}><div className="bg-[var(--charcoal)] rounded-[3px] p-[32px] text-[var(--paper)] h-full border border-[var(--line)]">$1<h3 className="text-[24px] font-bold mb-[16px] leading-[1.2]">The Need</h3>$2</div></MotionBlurReveal>`
);

// Founder Spotlight (Section 5)
content = content.replace(
  /<div className="bg-\[var\(--charcoal\)\].*?flex flex-col md:flex-row gap-\[32px\].*?">([\s\S]*?)<div className="bg-\[var\(--paper\)\].*?w-full md:w-auto md:h-full aspect-square.*?>([\s\S]*?)<\/div>([\s\S]*?)<div className="flex-1 flex flex-col justify-center py-\[24px\] pr-\[24px\]">([\s\S]*?)<\/div>\s*<\/div>/,
  `<div className="bg-[var(--charcoal)] rounded-[3px] p-[16px] flex flex-col md:flex-row gap-[32px] h-auto lg:h-[60vh]">
            <MotionBlurReveal delay={0}>
              <div className="bg-[var(--paper)] rounded-[3px] w-full md:w-auto md:h-full aspect-square relative overflow-hidden shrink-0 mx-auto md:mx-0">
                $2
              </div>
            </MotionBlurReveal>
            <MotionBlurReveal delay={150}>
              <div className="flex-1 flex flex-col justify-center py-[24px] pr-[24px]">
                $4
              </div>
            </MotionBlurReveal>
          </div>`
);

// Recognitions (Section 7)
content = content.replace(
  /<h2 className="text-\[32px\].*?">([\s\S]*?)Recognized and Featured by([\s\S]*?)<\/h2>/,
  `<MotionBlurReveal delay={0}><h2 className="text-[32px] font-bold text-[var(--charcoal)] text-center mb-[48px] leading-[1.2]">Recognized and Featured by</h2></MotionBlurReveal>`
);
content = content.replace(
  /<div className="flex flex-wrap justify-center items-center gap-\[32px\] md:gap-\[64px\] opacity-80">([\s\S]*?)<\/div>\s*<\/div>\s*<\/section>/,
  `<MotionBlurReveal delay={150}><div className="flex flex-wrap justify-center items-center gap-[32px] md:gap-[64px] opacity-80">$1</div></MotionBlurReveal>
        </div>
      </section>`
);

fs.writeFileSync('src/app/page.tsx', content);
console.log("Wrapped sections in MotionBlurReveal.");
