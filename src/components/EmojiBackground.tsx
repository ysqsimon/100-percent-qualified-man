import { useEffect, useState } from 'react'

type EmojiParticle = {
  id: number
  char: string
  top: number
  left: number
  size: number
  rotate: number
  opacity: number
}

const EMOJIS = ['👨', '🧔', '💪', '✅', '📝', '🕶️', '👔', '👟']

function seededRandom(seed: number) {
  let s = seed % 2147483647
  if (s <= 0) s += 2147483646
  return () => (s = (s * 16807) % 2147483647) / 2147483647
}

export default function EmojiBackground() {
  const [particles, setParticles] = useState<EmojiParticle[]>([])
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  // Update window size when it changes
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    // Generate a new random seed on each render
    const seed = Math.floor(Math.random() * 1000000)
    const rnd = seededRandom(seed)
    const items: EmojiParticle[] = []

    // Responsive spacing with better mobile optimization
    const isMobile = windowSize.width <= 768
    const baseDistance = isMobile ? 70 : 85 // Smaller distance for mobile
    const maxDistance = isMobile ? 80 : 120 // Smaller max distance for mobile
    const targetDistance = Math.min(maxDistance, Math.max(baseDistance, windowSize.width / (isMobile ? 8 : 15)))

    // Calculate grid dimensions based on window size with mobile optimization
    const minCols = isMobile ? 5 : 4 // More columns on mobile for better density
    const gridCols = Math.max(minCols, Math.floor(windowSize.width / targetDistance))
    const gridRows = Math.max(minCols, Math.floor(windowSize.height / targetDistance))
    
    // Create a 2D grid to track emoji positions
    const grid: string[][] = Array(gridRows).fill(null).map(() => Array(gridCols).fill(''))
    
    // Function to check if an emoji can be placed at a position
    const canPlaceEmoji = (row: number, col: number, emoji: string): boolean => {
      // Check all adjacent cells (horizontal, vertical, and diagonal)
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (i === 0 && j === 0) continue
          const newRow = row + i
          const newCol = col + j
          if (
            newRow >= 0 && newRow < gridRows &&
            newCol >= 0 && newCol < gridCols &&
            grid[newRow][newCol] === emoji
          ) {
            return false
          }
        }
      }
      return true
    }
    
    // Function to get available emojis for a position
    const getAvailableEmojis = (row: number, col: number): string[] => {
      return EMOJIS.filter(emoji => canPlaceEmoji(row, col, emoji))
    }
    
    // Fill the grid with emojis
    for (let row = 0; row < gridRows; row++) {
      for (let col = 0; col < gridCols; col++) {
        const availableEmojis = getAvailableEmojis(row, col)
        if (availableEmojis.length > 0) {
          const randomIndex = Math.floor(rnd() * availableEmojis.length)
          grid[row][col] = availableEmojis[randomIndex]
        } else {
          // If no emoji can be placed, pick a random one
          grid[row][col] = EMOJIS[Math.floor(rnd() * EMOJIS.length)]
        }
      }
    }
    
    // Convert grid to particles
    for (let row = 0; row < gridRows; row++) {
      for (let col = 0; col < gridCols; col++) {
        const jitter = 1 // Increased jitter for more random appearance
        
        // Calculate position in percentage
        // Add padding to ensure emojis don't touch the edges
        const paddingPercent = 5
        const availableWidth = 100 - (2 * paddingPercent)
        const availableHeight = 100 - (2 * paddingPercent)
        
        // Calculate cell dimensions
        const cellWidth = availableWidth / (gridCols - 1)
        const cellHeight = availableHeight / (gridRows - 1)
        
        // Base position (center of cell)
        const left = paddingPercent + (availableWidth * (col / (gridCols - 1)))
        const top = paddingPercent + (availableHeight * (row / (gridRows - 1)))
        
        // Add enhanced random jitter using multiple random values for more natural distribution
        const jitterX = ((rnd() + rnd() + rnd()) / 3 - 0.5) * cellWidth * jitter
        const jitterY = ((rnd() + rnd() + rnd()) / 3 - 0.5) * cellHeight * jitter
        
        const jitteredLeft = Math.max(paddingPercent, Math.min(100 - paddingPercent, left + jitterX))
        const jitteredTop = Math.max(paddingPercent, Math.min(100 - paddingPercent, top + jitterY))
        
        // Calculate dynamic size based on window dimensions with mobile optimization
        const minSize = isMobile ? 24 : 32 // Smaller base size for mobile
        const maxSize = isMobile ? 36 : 48 // Smaller max size for mobile
        const viewportScale = Math.min(windowSize.width, windowSize.height) / (isMobile ? 600 : 1200)
        const baseSize = Math.min(maxSize, Math.max(minSize, minSize * viewportScale))
        const size = baseSize + Math.floor(rnd() * baseSize) // Reduced variation for mobile
        const rotate = Math.floor(rnd() * 360)
        const opacity = 0.2 + rnd() // Controlled opacity range
        
        items.push({
          id: row * gridCols + col,
          char: grid[row][col],
          left: jitteredLeft,
          top: jitteredTop,
          size,
          rotate,
          opacity
        })
      }
    }
    
    setParticles(items)
  }, [windowSize.width, windowSize.height]) // Re-render when window size changes

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-0" 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden'
      }}
      aria-hidden
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="select-none"
          style={{
            position: 'absolute',
            top: `${p.top}%`,
            left: `${p.left}%`,
            transform: `translate(-50%, -50%) rotate(${p.rotate}deg)`,
            fontSize: `${p.size}px`,
            opacity: p.opacity,
          }}
        >
          {p.char}
        </span>
      ))}
    </div>
  )
}


