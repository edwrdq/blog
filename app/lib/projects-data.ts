export const projectsData = {
  'project-1': {
    title: 'HistoriaBot',
    description: 'AI-powered Discord study bot with multiple personas and interactive tools.',
    longDescription: `HistoriaBot is a versatile Discord bot that acts as an interactive study partner. It uses the Google Gemini API to take on different personas (e.g.,
history tutor, math expert, debate moderator) based on the channel it's in.

The bot is designed to be a comprehensive study hub, offering features beyond simple Q&A. It can generate structured essay outlines, run Pomodoro study timers, and even track
its own development by announcing new commits from its GitHub repository directly into a changelog channel.

Key challenges solved:
- Engineering distinct, effective prompts for multiple AI personas.
- Implementing a background task system for asynchronous features like commit tracking and timers.
- Handling Discord API limitations, such as character limits for long responses, by splitting content into multiple messages.
- Creating an administrator-only command to manually trigger updates without restarting the bot.`,
    images: [
      '/historiabot-1.png'
    ],
    tech: ['Python', 'Discord.py', 'Google Gemini API', 'Requests', 'Git'],
    status: 'In Development',
    timeline: 'June 2025 - Present',
    team: 'Solo Project',
    github: 'https://github.com/edwrdq/historiabot',
    live: null,
    discord: null,
    features: [
      'Multi-persona AI tutor (History, Math, etc.)',
      'Structured essay outline generator',
      'Integrated Pomodoro study timer',
      'Automated GitHub commit changelog',
      'Interactive debate moderation tools',
      'Context-aware conversational memory'
    ],
    challenges: [
      'Crafting effective prompts for diverse AI behaviors',
      'Managing asynchronous tasks within the Discord event loop',
      'Gracefully handling API rate limits and errors',
      'Ensuring a seamless and intuitive user experience with slash commands'
    ]
  },
  'project-2': {
    title: 'Doral Telemetry',
    description: 'Real‑time VEX V5 debugging & vision‑based tuning suite.',
    longDescription: `Doral Telemetry is a custom pipeline that streams raw robot data (via RS‑485) and high‑FPS GoPro video into a web UI for on‑the‑fly PID and MCL tuning.

Built around a Raspberry Pi interfacing with the V5 Brain over RS‑485, it pushes JSON‑encoded telemetry to a React front‑end. The live vision overlay from the GoPro helps
correlate sensor readings with robot movements.

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