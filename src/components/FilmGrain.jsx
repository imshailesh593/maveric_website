import { useEffect, useRef } from 'react'

export default function FilmGrain() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const render = () => {
      const { width, height } = canvas
      const img = ctx.createImageData(width, height)
      const d = img.data
      for (let i = 0; i < d.length; i += 4) {
        const v = Math.random() * 255
        d[i] = v; d[i + 1] = v; d[i + 2] = v; d[i + 3] = 20
      }
      ctx.putImageData(img, 0, 0)
      raf = requestAnimationFrame(render)
    }
    render()

    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <canvas ref={canvasRef} aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9998] mix-blend-overlay opacity-40" />
  )
}
