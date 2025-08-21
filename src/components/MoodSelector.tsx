import React from 'react'
import type { Mood } from '../data/quotes'

export default function MoodSelector({ mood, onChange }:{
  mood: Mood, onChange: (m: Mood) => void
}){
  return (
    <label className="row" aria-label="Mood selector">
      <span className="muted">Mood</span>
      <select value={mood} onChange={e=>onChange(e.target.value as Mood)} aria-label="Choose mood">
        <option value="any">Any</option>
        <option value="happy">Happy</option>
        <option value="calm">Calm</option>
        <option value="focus">Focus</option>
        <option value="grit">Grit</option>
      </select>
    </label>
  )
}