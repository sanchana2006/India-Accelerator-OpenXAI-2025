import React from 'react'
import type { Quote } from '../data/quotes'

export default function QuoteCard({ q }:{ q: Quote }){
  return (
    <article className="card" aria-live="polite">
      <p className="quote">“{q.text}”</p>
      <p className="author">— {q.author ?? 'Unknown'}</p>
    </article>
  )
}