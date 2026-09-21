const fs = require('fs');

function updatePage() {
  let content = fs.readFileSync('src/app/page.tsx', 'utf8');

  // HERO
  content = content.replace(
    'Unite. Act.<br />\n              Transform',
    "Making India's roadsides walkable, <br />green, and clean — <br />one street at a time."
  );
  content = content.replace(
    'Your support powers life changing missions feeding families & rebuilding hope.',
    "The Roadsides began with one person noticing what everyone else walked past. We're still early — and we're building something real, sector by sector, in Faridabad and beyond."
  );
  content = content.replace('Join Us <span className="relative', 'Join the journey <span className="relative');
  
  // TRUST STRIP
  content = content.replace(
    '<p className="text-[var(--charcoal)]/70 text-[14px] leading-[1.6] max-w-[250px] font-medium">\n                  A Section 8 Not-For-Profit creating safer, cleaner, greener environments.\n                </p>',
    '<p className="text-[var(--charcoal)]/70 text-[14px] leading-[1.6] max-w-[250px] font-medium">\n                  A Section 8 registered nonprofit, built from one person\'s initiative into a growing on-ground movement.\n                </p>'
  );
  content = content.replace(
    '<h3 className="text-[var(--charcoal)] text-[24px] font-bold tracking-tight mb-[4px]">3 flagship on-ground initiatives</h3>',
    '<h3 className="text-[var(--charcoal)] text-[24px] font-bold tracking-tight mb-[4px]">2 flagship initiatives, and counting</h3>'
  );
  content = content.replace(
    '<p className="text-[var(--charcoal)]/70 text-[14px] leading-[1.6] max-w-[250px] font-medium">\n                  Impacting local communities directly through tangible actions and drives.\n                </p>',
    '<p className="text-[var(--charcoal)]/70 text-[14px] leading-[1.6] max-w-[250px] font-medium">\n                  A plantation and nurturing drive in Ballabgarh–Faridabad, and a 2025 textile waste recovery program with The Modern School, K.L. Mehta College, and Saahas Zero Waste.\n                </p>'
  );
  content = content.replace(
    '<h3 className="text-[var(--charcoal)] text-[24px] font-bold tracking-tight mb-[4px]">Recognized globally</h3>',
    '<h3 className="text-[var(--charcoal)] text-[24px] font-bold tracking-tight mb-[4px]">Recognized by the UN Environment Programme</h3>'
  );
  content = content.replace(
    '<p className="text-[var(--charcoal)]/70 text-[14px] leading-[1.6] max-w-[250px] font-medium">\n                  Acknowledged by UN Environment Programme, CEO India Magazine, and YourZourney.\n                </p>',
    '<p className="text-[var(--charcoal)]/70 text-[14px] leading-[1.6] max-w-[250px] font-medium">\n                  Official host of a World Environment Day 2026 event in Faridabad — alongside features in CEO India Magazine and YourZourney.\n                </p>'
  );

  // MISSION, BRIEFLY
  content = content.replace('Transforming the spaces in between.', 'For the people, of the people, by the people of India');
  content = content.replace(
    'The Roadsides is a Section 8 Not-For-Profit based in Faridabad, Haryana, India. We are dedicated to creating safer, cleaner, greener roadside environments by uniting citizens and translating corporate sustainability into local action.',
    'Roadsides are where India actually lives — the footpaths we walk, the verges we drive past, the green edges nobody plans for. We work sector by sector to make them safer, cleaner, and greener, starting with the ones closest to home.'
  );
  // Remove ArrowRight from the "Read our full story" link
  content = content.replace('Read our full story <ArrowRight size={20} />', 'Read our full story');

  // OUR WORK, PREVIEW
  content = content.replace('Community in Action', "What we've done on the ground");
  content = content.replace('Vallabgarh and Faridabad Drives', 'Planting — and staying to nurture it');
  content = content.replace(
    'Planted and nurtured hundreds of saplings to create a greener environment and promote biodiversity.',
    "In Ballabgarh and Faridabad, we didn't just plant saplings. We taught children how to look after them — because a tree only survives if someone stays."
  );
  content = content.replace('Textile Waste Initiative', 'Where old clothes go, instead of the landfill');
  content = content.replace(
    'Worked with The Modern School, K.L. Mehta College for Women, and Saahas Zero Waste to collect 275+ kgs of textile waste.',
    'In 2025, we worked with The Modern School and K.L. Mehta College for Women to collect textile waste, routed to Saahas Zero Waste for reuse and recycling.'
  );
  content = content.replace('View Full Gallery <span', 'Read our work <span');
  content = content.replace('href="/gallery" className="group w-full sm:w-auto', 'href="/work" className="group w-full sm:w-auto');
  content = content.replace('href="/gallery" className="bg-[var(--charcoal)]', 'href="/work" className="bg-[var(--charcoal)]');
  content = content.replace('>View Full Gallery</span>', '>Read our work</span>');

  // FOUNDER SPOTLIGHT
  content = content.replace('Visionary Leadership', 'Started by one person. Built for everyone.');
  content = content.replace(
    'It started by noticing what everyone else walks past. An alumnus of IIM Calcutta and Wharton Online with a deep background in ESG strategy, Seema founded The Roadsides to translate corporate sustainability principles into hyperlocal, citizen-led action.',
    "Seema Chowdhry Dhawan spent years in business strategy and ESG before she looked at a roadside and asked a different question. Wharton-trained, IIM Calcutta alumna, and now Vice President of WICCI's Corporate Sustainability Council in Faridabad — she's spent the last two years turning that question into an organization."
  );
  content = content.replace(
    '"I believe that baby steps to a green revolution begin with observing our immediate surroundings. Small, correct daily actions, done consistently and multiplied across a population, is what creates real systemic change."',
    '"Every small, correct choice we make in how we live and move through our surroundings, multiplied across 7.9 billion people, has the power to change this world for good."'
  );
  content = content.replace('Read Seema&apos;s Story', 'Meet the founder');

  // RECOGNITION STRIP
  content = content.replace('Recognized Globally By', 'Recognized, not self-declared');
  content = content.replace('UN Environment Programme</span>', 'UN Environment Programme — Official World Environment Day 2026 host</span>');
  content = content.replace('CEO India Magazine</span>', 'CEO India Magazine — "Beyond the Road"</span>');
  content = content.replace('YourZourney</span>', 'YourZourney — Feature + founder\'s own op-ed</span>');
  content = content.replace('Advaita Women Entrepreneurs Awards</span>', 'Advaita Women Entrepreneurs Awards — Featured story</span>');
  // (Rejected the CTA button for Recognition Strip because the structure does not have one)

  // INSIGHTS PREVIEW
  content = content.replace('Stories and perspectives.', 'Small habits. Real change.');
  content = content.replace(
    'Excerpts from &quot;Baby Steps to Green Revolution&quot; and on-ground case studies.',
    'From the founder\'s own book, "Baby Steps to Green Revolution," and stories from the ground — practical ideas for anyone who wants to start close to home.'
  );
  content = content.replace('Read All Insights', 'Read the latest');

  // GET INVOLVED
  content = content.replace('Join us in creating safer, cleaner, greener environments.', 'However you can — there\'s a way to start');
  
  content = content.replace(
    'Your contributions directly fund our on-ground planting, nurturing, and civic improvement initiatives.',
    'Support the on-ground work directly. Every contribution funds real, specific projects — not overhead.'
  );
  content = content.replace(
    'Join our community drives and help us execute sustainable practices at the hyperlocal level.',
    'Show up for a plantation drive, a cleanup, or a collection initiative near you.'
  );
  content = content.replace(
    'We offer advisory services and collaborate with organizations committed to sustainable development.',
    'Not yet eligible for formal CSR partnerships — but we\'re building relationships now for when we are. Tell us you\'re interested, and we\'ll reach out first.'
  );
  // (Rejected individual CTA buttons on cards because structure does not have them. Updating the main section CTA just in case)
  // We already updated `Join Us` to `Join the journey` in the hero. The get involved section also has `Join Us`. Let's update it to something or leave it as `Join Us`? They didn't ask to change the main CTA for the Get Involved section.

  fs.writeFileSync('src/app/page.tsx', content);

  // FOOTER TAGLINE
  let layoutContent = fs.readFileSync('src/app/layout.tsx', 'utf8');
  layoutContent = layoutContent.replace(
    'Vibrant Walkable Roadsides Foundation. A Section 8 Not-For-Profit based in Faridabad, Haryana, India.',
    'The Roadsides — Vibrant Walkable Roadsides Foundation. Section 8 registered, 2024. Faridabad, Haryana.'
  );
  fs.writeFileSync('src/app/layout.tsx', layoutContent);

  console.log('Homepage copy updated successfully.');
}

updatePage();
