# Portfolio Roadmap — Cinematic Splash Screen

## Status: ⏸ Analyzing (not started)

---

## Spec: Cinematic Splash Screen / Intro Experience

A premium 1.5–2.5s cinematic opening sequence that introduces me as a frontend developer and seamlessly transitions into the Hero section.

### Design Philosophy
- Not a loading screen — an opening scene of a premium digital product
- Feels like stepping into the workspace of an elite frontend engineer
- Premium, minimal, cinematic, elegant, modern, immersive, luxurious, smooth
- Never exceed 3 seconds total

### Background
- Start with `#0A192F` (dark, calm, near-empty)
- Soft blue ambient light slowly emerges from center
- Gradually reveals the environment
- No harsh flashes or sudden transitions

### Core: Cinematic Profile Portrait Reveal
- **No logo/brand** — profile picture is the centerpiece
- Premium cinematic reveal (not a simple fade-in):
  - Glass fragments assembling
  - Frosted glass panels sliding into place
  - Blurred silhouette → sharp
  - Soft light revealing portrait
  - Geometric pieces assembling
- Luxurious, refined, memorable — no flashy transitions

### 3D Layered Portrait
- Portrait split into multiple depth layers:
  - Background
  - Body/shoulders
  - Face
  - Foreground highlights
- Layers move independently for realistic depth
- Gentle floating animation immediately begins
- Calm, natural, sophisticated movement

### Premium Glass Frame
- Frosted glass effect
- Rounded corners
- Thin blue glowing border (`#3082C5`)
- Soft reflections
- Semi-transparent layers
- Elegant shadows
- Appears slowly around portrait after assembly

### Floating Motion
- Gently up/down + very slight rotation
- Weightless feel
- Never completely static
- Subtle enough to feel alive, not distracting

### Light Sweep
- One elegant light sweep across glass surface (after portrait + frame complete)
- Creates reflection, shine, premium glass effect
- Happens only once

### Ambient Glow
- Soft blue glow around portrait
- Pulses gently once
- Matches accent color
- Fades naturally
- Not overly bright

### Camera Movement
- After portrait animation finishes
- Slow cinematic forward movement
- No fast zooms, aggression, or sudden acceleration
- Naturally guides into Hero section

### Transition to Hero (Critical)
- Splash must **become part of the Hero** — not disappear
- No flashes, hard cuts, fade-to-black, abrupt changes
- As camera moves forward:
  - Splash scene gradually transforms into Hero
  - Floating workspace elements already visible
  - Hero lighting blends with splash lighting
  - Portrait smoothly moves into permanent Hero position
  - Name fades in, title appears, navbar fades in
  - Floating laptop/smartphone/UI cards become visible
- Feels like splash evolved into Hero — not two separate pages

### Glass Elements (Subtle)
- Floating glass panels, rectangles, shards, frosted layers
- Float gently, rotate slightly, catch reflections
- Add depth without overcrowding
- Less is more

### Motion Design
- Smooth, precise, weightless, natural, cinematic
- Realistic easing — no linear motion
- Believable acceleration/deceleration

### Sound
- No auto-play music
- No mandatory sound effects
- Complete even when silent

### Performance
- Load quickly, 60 FPS
- Lightweight assets
- No blocking
- Fully responsive
- Runs once per visit (unless refreshed)

### Technical Stack
- React + Vite
- Three.js + React Three Fiber + Drei
- GSAP + Framer Motion
- Tailwind CSS
- Modular components:
  - Portrait reveal animation
  - 3D layered portrait
  - Glass frame animation
  - Camera movement
  - Light sweep
  - Ambient lighting
  - Hero transition logic

### Code Quality
- Clean, modular, reusable, scalable, maintainable

---

## Implementation Plan (for when we start)

### Analysis Phase
- [ ] Review current Hero component structure
- [ ] Assess Three.js/R3F/drei compatibility with current Next.js setup
- [ ] Evaluate gsap integration
- [ ] Plan component tree for splash system
- [ ] Design layer separation for portrait image
- [ ] Map out camera animation path
- [ ] Design transition timeline (0s → 2.5s)

### Build Phase
1. Splash container + canvas setup
2. Ambient lighting system
3. Glass fragment / geometric portrait reveal
4. 3D depth layer system for portrait
5. Glass frame (frosted + glow border)
6. Floating animation (y-axis + rotation)
7. Light sweep effect
8. Camera movement (cinematic push-in)
9. Hero transition logic (blend splash → hero)
10. Floating glass ambient elements
11. Hero content fade-in orchestration
12. Performance optimization pass
13. Polish + easing pass

---

*Last updated: 2026-07-10*
