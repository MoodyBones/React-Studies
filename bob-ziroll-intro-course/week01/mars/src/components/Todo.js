import React from 'react'

export function Todo() {
  return (
    <section>
      <div>
        <input
          type="checkbox"
          id="computer-keyboard"
          name="computer-keyboard"
        />
        <label htmlFor="computer-keyboard">
          <span role="img" aria-label="computer-keyboard">
            ⌨️
          </span>
        </label>
        <input type="checkbox" id="space-invader" name="space-invader" />
        <label htmlFor="space-invader">
          <span role="img" aria-label="space-invader">
            👾
          </span>
        </label>
        <input type="checkbox" id="eject" name="eject" />
        <label htmlFor="eject">
          <span role="img" aria-label="eject">
            ⏏️
          </span>
        </label>
      </div>
    </section>
  )
}
