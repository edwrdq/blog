export const projectsData = {
'project-1': {
    title: 'Doral Telemetry',
    description: 'Real‑time VEX V5 debugging & vision‑based tuning suite.',
    longDescription: `Doral Telemetry is a custom pipeline that streams raw robot data (via RS‑485) and high‑FPS GoPro video into a web UI for on‑the‑fly PID and MCL tuning. 
      
Built around a Raspberry Pi interfacing with the V5 Brain over RS‑485, it pushes JSON‑encoded telemetry to a React front‑end. The live vision overlay from the GoPro helps correlate sensor readings with robot movements.
      
Key challenges solved:
- Reliable RS‑485⇄UART bridging on the Pi  
- Syncing 120 FPS video frames to telemetry logs  
- Low‑latency WebSocket streaming without dropped packets  
- Intuitive chart & gauge UI for real‑time parameter tweaking`,
    images: [
      'images/doraltelemetry1.png'
    ],
    tech: ['C++ (PROS)', 'Python', 'RS‑485', 'React', 'WebSockets', 'OpenCV'],
    status: 'In Development',
    timeline: 'May 2025 - April 2026',
    team: 'Doral Robotics Team (6 members)',
    github: 'https://github.com/edwrdq/DoralTelemetry',
    live: null,
    discord: null,
    features: [
      'Live RS‑485 data streaming',
      'High‑FPS GoPro video overlay',
      'Web UI with real‑time charts & gauges',
      'On‑the‑fly PID/MCL parameter tuning',
      'Collision & jam‑detection alerts'
    ],
    challenges: [
      'Bridging RS‑485 to Pi UART reliably',
      'Synchronizing video & telemetry timestamps',
      'Maintaining <50 ms end‑to‑end latency',
      'Designing an intuitive, performance‑oriented UI',
      'Packaging the entire system into a single dashboard'
    ]
  },
  'project-2': {
    title: 'HistoriaBot',
    description: 'LLM‑powered Discord tutor for AP World History.',
    longDescription: `HistoriaBot sits in Discord channels and answers AP World History questions on demand, using a LLM set to behave as a history tutor.
      
It supports mixed‑format prompts (FRQ, SAQ, MCQ) and even moderates group debates by enforcing historical accuracy rules. The bot references users by nickname, tracks discussion threads, and logs session summaries automatically.
      
Key challenges solved:
- Working with APIs for different AI solutions and finding the most economical solution
- Dynamically switching between FRQ, SAQ, and MCQ modes  
- Implementing rate limits & safety filters for Discord`,
    images: [
      '/images/historiabot-1.png'
    ],
    tech: ['Node.js', 'TypeScript', 'Ollama', 'Discord.js', 'SQLite'],
    status: 'In Development',
    timeline: '3 months',
    team: 'Solo Project',
    github: 'https://github.com/edwrdq/historiabot',
    live: null,
    discord: null,
    features: [
      'AP World question parsing (FRQ/SAQ/MCQ)',
      'User‑based memory per channel',
      'Automated session summaries',
      'History debate moderation tools'
    ],
    challenges: [
      'Fine‑tuning prompts for historical accuracy',
      'Maintaining low‑latency responses',
      'Handling multi‑user conversation threads',
      'Ensuring content safety & correctness'
    ]
  },
  'project-3': {
    title: 'Project 3',
    description: 'Description for project 3.',
    longDescription: 'Long description for project 3.',
    images: ['/api/placeholder/800/400'],
    tech: ['Vue', 'Firebase'],
    status: 'Concept',
    timeline: '2 weeks',
    team: 'Solo Project',
    github: '',
    live: '',
    discord: '',
    features: [],
    challenges: []
  },
  'project-4': {
    title: 'Project 4',
    description: 'Description for project 4.',
    longDescription: 'Long description for project 4.',
    images: ['/api/placeholder/800/400'],
    tech: ['Svelte', 'Supabase'],
    status: 'Live',
    timeline: '6 months',
    team: 'Team Project',
    github: '',
    live: '',
    discord: '',
    features: [],
    challenges: []
  }
};