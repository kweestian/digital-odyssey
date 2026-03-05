/* eslint-disable max-len */

// ─────────────────────────────────────────────────────────────────────────────
// 1. LEADERSHIP LIGHTHOUSE
// ─────────────────────────────────────────────────────────────────────────────

export const leadershipLighthouseExperiences: Experience[] = [
  {
    name: 'Leadership Quiz',
    key: 'leadership-quiz',
    description: `In this experience, you will explore several common beliefs about leadership.
      For each statement, decide whether it reflects an outdated assumption or a
      future-facing leadership mindset.`,
    interaction: {
      type: 'quiz',
      label: 'Enter the Quiz',
      questions: [
        {
          key: 'q1',
          title: 'Question One',
          text: "Being a leader is something you're born with.",
          correctAnswer: 'false',
          choices: [
            { value: 'true', text: 'True' },
            { value: 'false', text: 'False' },
          ],
        },
        {
          key: 'q2',
          title: 'Question Two',
          text: 'A leader must always have all the answers.',
          correctAnswer: 'false',
          choices: [
            { value: 'true', text: 'True' },
            { value: 'false', text: 'False' },
          ],
        },
        {
          key: 'q3',
          title: 'Question Three',
          text: 'Continuous learning is essential for effective leadership.',
          correctAnswer: 'true',
          choices: [
            { value: 'true', text: 'True' },
            { value: 'false', text: 'False' },
          ],
        },
        {
          key: 'q4',
          title: 'Question Four',
          text: 'Continuous feedback creates confusion and should be avoided unless performance is poor.',
          correctAnswer: 'false',
          choices: [
            { value: 'true', text: 'True' },
            { value: 'false', text: 'False' },
          ],
        },
        {
          key: 'q5',
          title: 'Question Five',
          text: 'The ability to create psychological safety is increasingly recognized as a core leadership capability in high-performing teams.',
          correctAnswer: 'true',
          choices: [
            { value: 'true', text: 'True' },
            { value: 'false', text: 'False' },
          ],
        },
        {
          key: 'q6',
          title: 'Question Six',
          text: 'Leading others means controlling their work closely.',
          correctAnswer: 'false',
          choices: [
            { value: 'true', text: 'True' },
            { value: 'false', text: 'False' },
          ],
        },
        {
          key: 'q7',
          title: 'Question Seven',
          text: 'Delegating tasks is a sign that a leader is disengaged.',
          correctAnswer: 'false',
          choices: [
            { value: 'true', text: 'True' },
            { value: 'false', text: 'False' },
          ],
        },
        {
          key: 'q8',
          title: 'Question Eight',
          text: 'Strong leaders intentionally build cross-functional partnerships to advance shared goals.',
          correctAnswer: 'true',
          choices: [
            { value: 'true', text: 'True' },
            { value: 'false', text: 'False' },
          ],
        },
        {
          key: 'q9',
          title: 'Question Nine',
          text: 'Leaders should avoid technological changes to protect team stability.',
          correctAnswer: 'false',
          choices: [
            { value: 'true', text: 'True' },
            { value: 'false', text: 'False' },
          ],
        },
        {
          key: 'q10',
          title: 'Question Ten',
          text: 'Encouraging teams to take responsible risks increases innovation and competitive edge.',
          correctAnswer: 'true',
          choices: [
            { value: 'true', text: 'True' },
            { value: 'false', text: 'False' },
          ],
        },
      ],
    },
    keyLearning: {
      text: `Leadership is evolving. As organisations grow more complex and interconnected,
        leadership is less about control and more about fostering faster decisions and
        harnessing the power of people. Whether you're new to a managerial role or a
        seasoned leader, continuous learning and psychological safety are at the heart
        of future-facing leadership.`,
      additionalRessources: [
        {
          text: 'Grow your Leadership — Degreed Learning Plan',
          link: 'https://eu.degreed.com/plan/855671',
        },
      ],
    },
    coordinates: { x: 595, y: 250 },
  },
  {
    name: 'Masterclass',
    key: 'leadership-masterclass',
    description: `Leadership is shaped by exposure to different perspectives and ways of thinking.
      Explore one lesson from the Masterclass digital library on leadership to gain insight
      into how influence, decision-making, and responsibility are approached by leaders
      across disciplines.<br /><br />
      <strong>Your Mission:</strong> Access your designated learning platform and browse the Masterclass
      leadership library. Select one course. Watch one lesson or the opening segment —
      then write a document with 2–3 takeaways that challenged or refined your view of
      leadership, and upload it to the portal here.`,
    interaction: {
      type: 'attachment',
      label: 'Upload your document',
    },
    bonus: {
      description: `Leadership is shaped by how principles translate into action. Watch a short extract
        from <strong>Roger Federer's Dartmouth University 2024 commencement speech</strong> to identify
        key leadership insights around performance, resilience, and responsibility.<br /><br />
        Note 2–3 leadership insights from Mr. Federer's speech. Open
        <a href="https://gemini.google.com" target="_blank">Gemini</a> (or DeepSeek / Kering AI for
        participants from China) and use the prompt below to generate a short visual storybook
        illustrating these insights in a contemporary work context. Upload a screenshot of the
        generated visuals below.<br /><br />
        <em>Prompt: "Create a short visual storybook (5 scenes) that illustrates these leadership
        insights: [insert your 2–3 insights]. Each scene should depict a realistic workplace moment
        showing how these principles are applied in action. Describe each scene visually and
        narratively."</em>`,
      type: 'attachment',
      label: 'Upload your screenshot',
    },
    keyLearning: {
      text: `Great leaders are continuous learners. By exposing ourselves to diverse perspectives —
        whether through a Masterclass lesson or a commencement speech — we sharpen our
        ability to lead with influence, empathy, and purpose.`,
      additionalRessources: [
        {
          text: 'Grow your Leadership — Degreed Learning Plan',
          link: 'https://eu.degreed.com/plan/855671',
        },
      ],
    },
    coordinates: { x: 560, y: 270 },
  },
  {
    name: 'Video Challenge',
    key: 'leadership-video-challenge',
    description: `Leadership is shaped by how principles translate into action. Watch a short extract
      from <strong>Roger Federer's Dartmouth University 2024 commencement speech</strong> to identify
      key leadership insights around performance, resilience, and responsibility.<br /><br />
      <strong>Your Mission:</strong> Note 2–3 leadership insights from Mr. Federer's speech. Open
      <a href="https://gemini.google.com" target="_blank">Gemini</a> (or DeepSeek / Kering AI for
      participants from China) and use the prompt below to generate a short visual storybook.
      Upload a screenshot of the generated visuals below.<br /><br />
      <em>Prompt: "Create a short visual storybook (5 scenes) that illustrates these leadership
      insights: [insert your 2–3 insights]. Each scene should depict a realistic workplace moment
      showing how these principles are applied in action."</em>`,
    interaction: {
      type: 'attachment',
      label: 'Upload your screenshot',
    },
    bonus: undefined,
    keyLearning: {
      text: `The best leaders translate principles into action. Roger Federer's reflections on
        resilience, effort, and responsibility offer timeless insights that apply as much in the
        boardroom as on the court.`,
      additionalRessources: [
        {
          text: 'Grow your Leadership — Degreed Learning Plan',
          link: 'https://eu.degreed.com/plan/855671',
        },
      ],
    },
    coordinates: { x: 630, y: 260 },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 2. COLLABORATION HORIZON
// ─────────────────────────────────────────────────────────────────────────────

export const collaborationHorizonExperiences: Experience[] = [
  {
    name: 'Dominic Alldis Video',
    key: 'collaboration-dominic-video',
    description: `Watch this short extract from the Global Learning Day Conference, where
      <strong>Dominic Alldis</strong> — orchestral conductor, jazz musician, and long-standing professor
      at the Royal Academy of Music — joins Thomas Cuntz, Kering Talent Development
      and People Engagement Director. Together, they explore fresh perspectives and
      practical insights that may reshape the way you think about collaboration.<br /><br />
      If you're curious to learn more, watch the full conference live on March 19 from
      5:00 to 5:30 PM CET and later available on Viva as a replay in the Global Learning
      Day community.`,
    interaction: {
      type: 'attachment',
      label: 'Upload your reflection',
    },
    keyLearning: {
      text: `Collaboration is like an orchestra: each member brings unique skills that contribute
        differently to the whole. A steady foundation — like the double bass — enables
        others to perform. Extraordinary performance requires coordination and confidence
        in executing a shared direction.`,
      additionalRessources: [
        {
          text: 'Collaboration — Degreed Pathway',
          link: 'https://eu.degreed.com/pathway/08qdv74lpr',
        },
      ],
    },
    coordinates: { x: 580, y: 530 },
  },
  {
    name: 'Collaboration Quiz',
    key: 'collaboration-quiz',
    description: `Test your understanding of Dominic Alldis's insights on collaboration, orchestras,
      and shared purpose.`,
    interaction: {
      type: 'quiz',
      label: 'Enter the Quiz',
      questions: [
        {
          key: 'cq1',
          title: 'Question One',
          text: 'What does Dominic suggest is the "common purpose" that unites the members of an orchestra?',
          correctAnswer: 'b',
          choices: [
            { value: 'a', text: 'Competing to stand out individually' },
            { value: 'b', text: 'Interpreting the score and delivering a coherent performance' },
            { value: 'c', text: 'Experimenting freely without coordination' },
            { value: 'd', text: 'Following personal goals' },
          ],
        },
        {
          key: 'cq2',
          title: 'Question Two',
          text: 'What makes orchestras (and organizations) complex?',
          correctAnswer: 'c',
          choices: [
            { value: 'a', text: 'They consist of only a few roles' },
            { value: 'b', text: 'They rely on identical tasks from everyone' },
            { value: 'c', text: 'They involve many interdependent roles that must align to succeed' },
            { value: 'd', text: 'They only function through improvisation' },
          ],
        },
        {
          key: 'cq3',
          title: 'Question Three',
          text: 'What is the example of the double bass emphasizing?',
          correctAnswer: 'b',
          choices: [
            { value: 'a', text: 'Occasional solo performance that showcases individual talent' },
            {
              value: 'b',
              text: 'Providing a steady, continuous foundation that allows other parts of the group to perform',
            },
            { value: 'c', text: 'Exercising primary authority and directing the overall interpretation of the work' },
            { value: 'd', text: 'Carrying out a narrowly defined role with minimal impact on the broader outcome' },
          ],
        },
        {
          key: 'cq4',
          title: 'Question Four',
          text: 'What does Dominic highlight about the members of an orchestra?',
          correctAnswer: 'd',
          choices: [
            { value: 'a', text: 'They all perform the same tasks' },
            { value: 'b', text: 'Their roles are interchangeable depending on the piece' },
            { value: 'c', text: 'They compete for visibility during a performance' },
            { value: 'd', text: 'They bring unique skills that contribute differently to the whole' },
          ],
        },
        {
          key: 'cq5',
          title: 'Question Five',
          text: 'What does Dominic suggest is required to deliver an "extraordinary performance"?',
          correctAnswer: 'c',
          choices: [
            { value: 'a', text: 'Individual work done in isolation' },
            { value: 'b', text: 'Everyone interpreting the plan in their own way' },
            { value: 'c', text: 'Coordination and confidence in executing a shared direction' },
            { value: 'd', text: 'Frequent changes of roles among members' },
          ],
        },
      ],
    },
    keyLearning: {
      text: `Teamwork makes the dream work. Collaboration at its best means every person
        understands their unique contribution and trusts others to do the same — creating
        the conditions for extraordinary collective performance.`,
      additionalRessources: [
        {
          text: 'Collaboration — Degreed Pathway',
          link: 'https://eu.degreed.com/pathway/08qdv74lpr',
        },
      ],
    },
    coordinates: { x: 600, y: 550 },
  },
  {
    name: 'AWEN',
    key: 'collaboration-awen',
    description: `Boost your creativity by envisioning a potential iconic bag for a Kering Maison.
      Use the <strong>AWEN</strong> tool to bring your vision to life and define the future of luxury.<br /><br />
      <strong>Your Mission:</strong> Watch the demo video and then launch AWEN. Use the provided image
      library to experiment with colors, materials, and forms of a new product.<br /><br />
      <em>Team Up (optional):</em> To boost your creativity, invite 1, 2, or 3 colleagues to join
      your workspace and collaboratively refine concepts!`,
    interaction: {
      type: 'attachment',
      label: 'Upload your creation',
    },
    bonus: {
      description: `Innovation at Kering matters most when it serves our business and people. Through
        the <strong>Kering Imagination Lab Hackathon</strong>, we spark collective intelligence by uniting
        House talents and operational experts.<br /><br />
        Watch the Hackathon video to see this synergy in action. Then help shape our future:
        what should be our next theme? Identify the frontier where technology and teamwork
        redefine luxury — and submit your idea below.`,
      type: 'attachment',
      label: 'Upload your idea',
    },
    keyLearning: {
      text: `Creativity flourishes in collaboration. When diverse perspectives come together
        around a shared challenge — whether designing a bag or imagining the next
        innovation sprint — the results are always greater than the sum of their parts.`,
      additionalRessources: [
        {
          text: 'Collaboration — Degreed Pathway',
          link: 'https://eu.degreed.com/pathway/08qdv74lpr',
        },
      ],
    },
    coordinates: { x: 620, y: 570 },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 3. EFFICIENCY VALLEY
// ─────────────────────────────────────────────────────────────────────────────

export const efficiencyValleyExperiences: Experience[] = [
  {
    name: 'Copilot Chat / Kering AI',
    key: 'efficiency-copilot',
    description: `Your calendar reflects how your work is really structured. In this challenge,
      use AI to step back from last week's routines and explore how your time could
      be organised more intentionally.<br /><br />
      <strong>Your Mission:</strong> Open <strong>Copilot Chat</strong> (or Kering AI in China). Share a past week's
      calendar screenshot or task list. Use the prompt below to generate a more efficient
      structure for your week. Review the suggestion, then upload a document with a
      reflection on what surprised you, or what you might change.<br /><br />
      <em>Prompt: "Here is a snapshot of my past week's calendar/tasks. Please propose a
      more effective weekly structure using batching, sequencing, and time blocking.
      Highlight potential time drains, moments of fragmentation, and opportunities to
      protect focus."</em>`,
    interaction: {
      type: 'attachment',
      label: 'Upload your reflection document',
    },
    keyLearning: {
      text: `Efficiency is not about doing more — it's about designing smarter ways of working.
        Small structural shifts in how you plan, batch, and sequence work can unlock
        greater focus and flow, and create space for high-value work.`,
      additionalRessources: [
        {
          text: 'Unlock productivity to increase impact — Degreed Course',
          link: 'https://eu.degreed.com/courses/unlock-productivity-to-increase-impact?d=28097545&inputtype=course&inputType=Course',
        },
      ],
    },
    coordinates: { x: 780, y: 620 },
  },
  {
    name: 'Pomellato / AI Quiz',
    key: 'efficiency-pomellato-quiz',
    description: `AI is increasingly becoming part of creative and operational workflows across
      luxury Houses. Discover how one Pomellato team experimented with AI to explore
      new ways of accelerating product development — while also uncovering the limits
      of today's tools.`,
    interaction: {
      type: 'quiz',
      label: 'Enter the Quiz',
      questions: [
        {
          key: 'eq1',
          title: 'Question One',
          text: "What was the primary objective of Pomellato's AI initiative?",
          correctAnswer: 'b',
          choices: [
            { value: 'a', text: 'To fully automate product design' },
            { value: 'b', text: 'To explore whether AI could support daily product development workflows' },
            { value: 'c', text: 'To replace physical prototyping entirely' },
            { value: 'd', text: 'To remove human involvement from the creative process' },
          ],
        },
        {
          key: 'eq2',
          title: 'Question Two',
          text: 'Why did the team experiment with AI-generated previews of colour and material combinations?',
          correctAnswer: 'a',
          choices: [
            { value: 'a', text: 'To reduce the number of physical prototypes and the time needed to create them' },
            { value: 'b', text: 'To eliminate the need for artisans' },
            { value: 'c', text: 'To standardise all product designs' },
            { value: 'd', text: 'To reduce the cost of raw materials' },
          ],
        },
        {
          key: 'eq3',
          title: 'Question Three',
          text: "Which statement best reflects the team's perspective on AI's role in their work?",
          correctAnswer: 'b',
          choices: [
            { value: 'a', text: 'AI should take over creative direction' },
            { value: 'b', text: 'AI can become a supportive tool within existing workflows' },
            { value: 'c', text: 'AI should be used only for administrative tasks' },
            { value: 'd', text: 'AI should replace early-stage design exploration' },
          ],
        },
        {
          key: 'eq4',
          title: 'Question Four',
          text: 'Why is developing a clear understanding of what AI can and cannot do considered essential?',
          correctAnswer: 'b',
          choices: [
            { value: 'a', text: 'To accelerate the full automation of design' },
            { value: 'b', text: 'To shape how AI evolves and is responsibly integrated into future workflows' },
            { value: 'c', text: 'To reduce training needs' },
            { value: 'd', text: 'To standardise creative processes across Houses' },
          ],
        },
        {
          key: 'eq5',
          title: 'Question Five',
          text: 'Which mindset best supports productive use of AI in creative product development?',
          correctAnswer: 'c',
          choices: [
            { value: 'a', text: 'Treating AI as a finished solution' },
            { value: 'b', text: 'Avoiding experimentation with emerging tools' },
            { value: 'c', text: "Testing AI's capabilities while retaining human judgment" },
            { value: 'd', text: 'Delegating creative decisions entirely to algorithms' },
          ],
        },
      ],
    },
    keyLearning: {
      text: `AI is a supportive tool, not a replacement for human judgment. The Pomellato
        experiment shows how thoughtful integration of AI into existing workflows can
        accelerate product development while preserving the craft and creativity at the
        heart of luxury.`,
      additionalRessources: [
        {
          text: 'Unlock productivity to increase impact — Degreed Course',
          link: 'https://eu.degreed.com/courses/unlock-productivity-to-increase-impact?d=28097545&inputtype=course&inputType=Course',
        },
      ],
    },
    coordinates: { x: 800, y: 640 },
  },
  {
    name: 'Demo on Vittorio',
    key: 'efficiency-vittorio-demo',
    description: `Experience the way that AI can transform static documents and guidelines —
      for instance a retail store handbook — into a fully interactive, 24/7-available agent.<br /><br />
      <strong>Your Mission:</strong> Watch the demo video of <strong>Vittorio</strong>, the bespoke expert AI assistant
      of Bottega Veneta client advisors. Reflect on how AI assistants may be able to
      reduce friction and heighten your productivity in your own day-to-day work life.
      Upload your reflection below.`,
    interaction: {
      type: 'attachment',
      label: 'Upload your reflection',
    },
    bonus: undefined,
    keyLearning: {
      text: `AI assistants like Vittorio show how institutional knowledge can be made instantly
        accessible — turning static handbooks into dynamic, conversational tools that
        empower teams to work smarter and serve clients better.`,
      additionalRessources: [
        {
          text: 'Unlock productivity to increase impact — Degreed Course',
          link: 'https://eu.degreed.com/courses/unlock-productivity-to-increase-impact?d=28097545&inputtype=course&inputType=Course',
        },
      ],
    },
    coordinates: { x: 820, y: 600 },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 4. CRAFT CANYON
// ─────────────────────────────────────────────────────────────────────────────

export const craftCanyonExperiences: Experience[] = [
  {
    name: 'Craft Quiz',
    key: 'craft-quiz',
    description: `Craft at Kering lives at the intersection of heritage, innovation, and creative vision.
      Across this experience, you'll encounter techniques, materials, and savoir-faire that
      define excellence across Kering Houses. Each question invites you to trace how
      craftsmanship is shaped, from atelier to final creation.`,
    interaction: {
      type: 'quiz',
      label: 'Enter the Quiz',
      questions: [
        {
          key: 'crq1',
          title: 'Question One',
          text: 'Bottega Veneta revolutionized Italian leather craftsmanship through its signature technique. In which year was the Intrecciato method introduced?',
          correctAnswer: 'b',
          choices: [
            { value: 'a', text: '1966' },
            { value: 'b', text: '1975' },
            { value: 'c', text: '1980' },
            { value: 'd', text: '1999' },
          ],
        },
        {
          key: 'crq2',
          title: 'Question Two',
          text: "Gucci's long-standing expertise in equestrian-inspired leather and metal craftsmanship led to the creation of an enduring icon. Which product, launched in 1953, stands as the emblem of this heritage?",
          correctAnswer: 'b',
          choices: [
            { value: 'a', text: 'The Bamboo 1947 bag' },
            { value: 'b', text: 'The Horsebit loafer' },
            { value: 'c', text: 'The Ophidia bag' },
            { value: 'd', text: 'The Dionysus bag' },
          ],
        },
        {
          key: 'crq3',
          title: 'Question Three',
          text: "Balenciaga is celebrated for pushing the boundaries of garment architecture. Which silhouette innovation best reflects the House's craft mastery?",
          correctAnswer: 'c',
          choices: [
            { value: 'a', text: 'The Mermaid dress' },
            { value: 'b', text: 'The A-line coat' },
            { value: 'c', text: 'Exaggerated volumes with dropped waistlines and structural hourglass jackets' },
            { value: 'd', text: 'The asymmetric suit' },
          ],
        },
        {
          key: 'crq4',
          title: 'Question Four',
          text: 'Which statement best captures the couture craft identity of McQueen?',
          correctAnswer: 'b',
          choices: [
            { value: 'a', text: 'It is primarily defined by lightweight draping and minimalist construction' },
            {
              value: 'b',
              text: 'It is rooted in Savile Row tailoring traditions, emphasizing cut, proportion, and silhouette',
            },
            { value: 'c', text: 'It relies exclusively on streetwear materials and oversized technical fabrics' },
            { value: 'd', text: 'It avoids experimental or theatrical techniques in favor of classic couture methods' },
          ],
        },
        {
          key: 'crq5',
          title: 'Question Five',
          text: 'How many stages of artisan work are required to craft a Brioni bespoke suit?',
          correctAnswer: 'c',
          choices: [
            { value: 'a', text: 'About 50' },
            { value: 'b', text: 'Over 120' },
            { value: 'c', text: 'More than 200' },
            { value: 'd', text: 'Around 350' },
          ],
        },
        {
          key: 'crq6',
          title: 'Question Six',
          text: 'In 1879, Boucheron introduced a pioneering technique that challenged traditional necklace construction. Which technical innovation did the House introduce?',
          correctAnswer: 'c',
          choices: [
            { value: 'a', text: 'The Quatre ring' },
            { value: 'b', text: 'The Éternelle bracelet' },
            { value: 'c', text: 'The Question Mark necklace' },
            { value: 'd', text: 'The Serpent Bohème pendant' },
          ],
        },
        {
          key: 'crq7',
          title: 'Question Seven',
          text: 'Kering Eyewear expanded its artisanal and technological excellence by acquiring a brand renowned for minimalism and precision engineering. Which brand was acquired in 2021?',
          correctAnswer: 'b',
          choices: [
            { value: 'a', text: 'Maui Jim' },
            { value: 'b', text: 'Lindberg' },
            { value: 'c', text: 'Zeal Optics' },
            { value: 'd', text: 'Puma Eyewear' },
          ],
        },
        {
          key: 'crq8',
          title: 'Question Eight',
          text: 'What major milestone did Qeelin achieve in 2019?',
          correctAnswer: 'c',
          choices: [
            { value: 'a', text: 'Launching its first watch collection' },
            { value: 'b', text: 'Opening a flagship in Shanghai' },
            { value: 'c', text: 'Becoming the first Chinese jewelry house on Place Vendôme' },
            { value: 'd', text: 'Introducing the Wulu Perfume' },
          ],
        },
        {
          key: 'crq9',
          title: 'Question Nine',
          text: 'What defines the craftsmanship of the Pomellato Nudo collection?',
          correctAnswer: 'b',
          choices: [
            { value: 'a', text: 'Invisible settings' },
            { value: 'b', text: 'A patented 57-facet irregular gemstone cut' },
            { value: 'c', text: 'Only using blue gemstones' },
            { value: 'd', text: 'A reversible metal-gemstone construction' },
          ],
        },
        {
          key: 'crq10',
          title: 'Question Ten',
          text: "The craftsmanship of Ginori 1735 traces back to one of Europe's oldest porcelain manufactories. Where was the brand originally founded?",
          correctAnswer: 'c',
          choices: [
            { value: 'a', text: 'Venice' },
            { value: 'b', text: 'Florence' },
            { value: 'c', text: 'Doccia, Tuscany' },
            { value: 'd', text: 'Milan' },
          ],
        },
      ],
    },
    keyLearning: {
      text: `Craft at Kering is a living practice — shaped by heritage, reinvented through
        innovation, and expressed through the savoir-faire of each House. From Intrecciato
        leather to precision-cut gemstones, excellence is always in the detail.`,
      additionalRessources: [
        {
          text: 'Balenciaga Behind the Seams — Degreed Learning Plan',
          link: 'https://eu.degreed.com/plan/968107',
        },
      ],
    },
    coordinates: { x: 1140, y: 620 },
  },
  {
    name: 'DeeVid AI Challenge',
    key: 'craft-deevid',
    description: `Craft lives through gesture, material, and movement. In this experience, use AI to
      bring archival imagery to life and explore new ways of translating heritage into
      contemporary expression.<br /><br />
      <strong>Your Mission:</strong> Follow the link to
      <a href="https://deevid.ai/fr/image-to-video" target="_blank">DeeVid AI's platform</a>.
      Upload one of the designated archival images from a Kering House, and generate a
      short animated video/gif that brings this moment of craft to life. Upload the video
      (or a still frame) to continue your journey!<br /><br />
      <em>For participants from China, please use SeeDance.</em>`,
    interaction: {
      type: 'attachment',
      label: 'Upload your video or still frame',
    },
    keyLearning: {
      text: `AI tools like DeeVid open new possibilities for bringing archival heritage to life —
        creating a bridge between the past and the future of luxury craft.`,
      additionalRessources: [
        {
          text: 'Balenciaga Behind the Seams — Degreed Learning Plan',
          link: 'https://eu.degreed.com/plan/968107',
        },
      ],
    },
    coordinates: { x: 1060, y: 640 },
  },
  {
    name: 'Gucci x Snap La Famiglia',
    key: 'craft-gucci-snap',
    description: `Creativity and craftsmanship can come alive more immersively for luxury clients
      when you can imagine yourself projected right into a brand's world.<br /><br />
      <strong>Your Mission:</strong> Download Snapchat on your phone. On the camera screen, click the
      smiley face feature to browse the lens library. Search <strong>'La Famiglia'</strong> to find the
      Gucci La Famiglia filter. Discover which member of La Famiglia you are via AR tech,
      then download the result and upload it here.<br /><br />
      <em>Note: this challenge is not available for participants from China.</em>`,
    interaction: {
      type: 'attachment',
      label: 'Upload your La Famiglia result',
    },
    bonus: undefined,
    keyLearning: {
      text: `AR technology allows brands to create deeply personal, immersive experiences that
        bring their creative world directly to the consumer. Gucci's La Famiglia filter is a
        compelling example of how craft and storytelling can merge in the digital space.`,
      additionalRessources: [
        {
          text: 'Balenciaga Behind the Seams — Degreed Learning Plan',
          link: 'https://eu.degreed.com/plan/968107',
        },
      ],
    },
    coordinates: { x: 1080, y: 700 },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 5. ADAPTABILITY DUNES
// ─────────────────────────────────────────────────────────────────────────────

export const adaptabilityDunesExperiences: Experience[] = [
  {
    name: 'Object Thought Experiment',
    key: 'adaptability-object',
    description: `Adaptability begins with the ability to step outside habitual patterns and reframe
      constraints. In this challenge, you'll train creative flexibility under simple limitations.<br /><br />
      <strong>Your Mission:</strong> Choose a simple, everyday object around you. Come up with
      <strong>10 different, original, and unexpected uses</strong> for this object. Aim to move beyond
      obvious functions and explore new angles, contexts, or purposes.<br /><br />
      Upload your list of ideas — and reflect on which idea required you to shift your
      usual way of thinking the most!`,
    interaction: {
      type: 'attachment',
      label: 'Upload your list',
    },
    keyLearning: {
      text: `Adaptability starts with the mindset to reframe constraints. When we force ourselves
        to see familiar objects in unfamiliar ways, we train the creative flexibility that makes
        us more agile in the face of real challenges.`,
      additionalRessources: [
        {
          text: 'Adaptability — Degreed Pathway',
          link: 'https://eu.degreed.com/pathway/08godlnrpw',
        },
      ],
    },
    coordinates: { x: 860, y: 290 },
  },
  {
    name: 'Video + Quiz',
    key: 'adaptability-video-quiz',
    description: `One of the most singular and desirable characteristics we can develop is our
      capacity to respond to change.<br /><br />
      <strong>Your Mission:</strong> Watch the
      <a href="https://www.my-mooc.com/en/video/3-ways-to-measure-your-adaptability-and-how-to-improve-it-natalie-fratto-1085ad85-f11e-4c35-ae33-f360a8dfa11b" target="_blank">TEDx talk from Natalie Fratto</a>
      on why she values — and how she measures — start-up founders' adaptability.
      Then reflect: which of the three adaptability markers mentioned in the video
      (curiosity, ability to experiment, etc.) do you most naturally demonstrate?
      Which feels least natural — and why? Make a personal commitment to one thing
      you will do this week to increase your own adaptability. Upload your reflection below.`,
    interaction: {
      type: 'attachment',
      label: 'Upload your reflection',
    },
    keyLearning: {
      text: `Adaptability is measurable and learnable. Natalie Fratto's three markers —
        curiosity, the ability to experiment, and releasing old patterns — give us a
        practical framework for building resilience and staying relevant in a fast-changing world.`,
      additionalRessources: [
        {
          text: 'Adaptability — Degreed Pathway',
          link: 'https://eu.degreed.com/pathway/08godlnrpw',
        },
      ],
    },
    coordinates: { x: 880, y: 310 },
  },
  {
    name: 'Lovable',
    key: 'adaptability-lovable',
    description: `Adaptability is not only about speed — it's also about how effectively you can
      adjust direction when goals, constraints, or contexts evolve. In this challenge,
      you'll experience what it means to iterate under changing conditions.<br /><br />
      <strong>Your Mission:</strong> Open <a href="https://lovable.dev" target="_blank">Lovable</a>.
      Create a simple website prototype for a métier, service, or project related to your
      work. Then modify your prompt to reflect a change in context (new audience, new
      objective, new constraint). Observe how the output evolves and upload a screenshot
      of the end result.<br /><br />
      <em>Prompt example: 1) "Create a simple landing page for a [describe your métier or
      service], including a short description, key sections, and a visual tone." 2) "Now adapt
      this concept for a [different audience or use case], while preserving its core purpose."</em>`,
    interaction: {
      type: 'attachment',
      label: 'Upload your screenshot',
    },
    bonus: undefined,
    keyLearning: {
      text: `Iteration under constraint is at the heart of adaptability. Tools like Lovable let
        us experience firsthand how adjusting direction — while preserving core purpose —
        is a skill that applies as much in work as in design.`,
      additionalRessources: [
        {
          text: 'Adaptability — Degreed Pathway',
          link: 'https://eu.degreed.com/pathway/08godlnrpw',
        },
      ],
    },
    coordinates: { x: 900, y: 270 },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 6. LEARNING AGILITY OASIS
// ─────────────────────────────────────────────────────────────────────────────

export const learningAgilityOasisExperiences: Experience[] = [
  {
    name: 'Conclusion Experience — NotebookLM',
    key: 'oasis-notebooklm',
    description: `Learning compounds when insights are connected. In this final experience,
      you'll use AI to synthesise what you've explored across the Odyssey and surface
      the patterns that matter most to you.<br /><br />
      <strong>Your Mission:</strong> Open
      <a href="https://notebooklm.google" target="_blank">NotebookLM</a>. Upload all the content
      you created during the Odyssey — your notes, key learnings, produced assets —
      and ask NotebookLM to generate a concise summary of your key learnings and a
      short teaser capturing your overall journey. Share this summary or teaser with
      a colleague, and upload it below.<br /><br />
      <em>Prompt: "Based on the documents I've uploaded, please generate 1) a concise
      summary of my key learnings across leadership, collaboration, efficiency, craft,
      adaptability, and learning, and 2) a short teaser that captures the essence of my
      Learning Odyssey."</em><br /><br />
      <em>For participants from China, please use Kering AI.</em>`,
    interaction: {
      type: 'attachment',
      label: 'Upload your summary or teaser',
    },
    bonus: undefined,
    keyLearning: {
      text: `Learning agility is the ability to learn quickly and easily in unknown situations.
        Your willingness to seek new information and connect insights across disciplines
        creates the agility that organisations need today. This journey is not an end point —
        it's a milestone. The Golden Owl recognises that you are ready to look ahead with
        clarity and purpose.`,
      additionalRessources: [
        {
          text: 'Learning Agility — Degreed Pathway',
          link: 'https://eu.degreed.com/pathway/e9kjnw2o8o',
        },
      ],
    },
    coordinates: { x: 1200, y: 390 },
  },
];
