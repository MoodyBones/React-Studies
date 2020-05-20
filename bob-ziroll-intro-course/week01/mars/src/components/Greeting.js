import React from 'react'

export function Greeting() {
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay
  const styles = {}
  const emoji = {
    day: '🌞',
    night: '🌜',
  }

  if (hours < 12) {
    timeOfDay = `Morning ${emoji.day}`
    styles.color = '#ffc048'
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = `Day ${emoji.day}`
    styles.color = '#34e7e4'
  } else if (hours >= 17 && hours < 20) {
    timeOfDay = `Evening ${emoji.night}`
    styles.color = '#ff5e57'
  } else {
    timeOfDay = `Night ${emoji.night}`
    styles.color = '#575fcf'
  }

  return (
    <span className="greeting" style={styles}>
      Good {timeOfDay}
    </span>
  )
}
