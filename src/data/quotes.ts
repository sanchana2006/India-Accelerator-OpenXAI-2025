export type Mood = 'any'|'happy'|'calm'|'focus'|'grit'

export type Quote = { text: string; author?: string; mood: Exclude<Mood,'any'> }

export const QUOTES: Quote[] = [
  { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author:"Chinese Proverb", mood:'grit' },
  { text: "Simplicity is the ultimate sophistication.", author:"Leonardo da Vinci", mood:'focus' },
  { text: "Be where your feet are.", author:undefined, mood:'calm' },
  { text: "Make it work, make it right, make it fast.", author:"Kent Beck", mood:'focus' },
  { text: "Keep going. Everything you need will come at the perfect time.", mood:'grit' },
  { text: "Joy is not in things; it is in us.", author:"Wagner", mood:'happy' },
  { text: "Slow is smooth. Smooth is fast.", mood:'calm' },
  { text: "Done is better than perfect.", mood:'focus' },
  { text: "A little progress each day adds up to big results.", mood:'grit' },
  { text: "Choose happy.", mood:'happy' },
]