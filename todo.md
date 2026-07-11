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

## Spec: Premium 3D Animations & Interactive Experiences

## Status: ⏸ Analyzing (not started)

### Overall Philosophy
- Animations communicate professionalism, craftsmanship, and creativity
- No flashy, distracting, or unnecessary effects
- Every animation has a purpose
- Elegant, realistic, smooth, responsive to interaction
- Consistent 60 FPS across desktop, tablet, mobile

---

### Hero 3D Scene — Floating Developer Workspace

**Objects:**
- Floating premium laptop
- Floating smartphone
- Floating UI cards
- Floating code snippets
- Floating developer tools
- Soft ambient lighting + realistic shadows + blue glow

**Mouse interaction:**
- Laptop rotates naturally on cursor move
- Phone slightly follows cursor
- UI cards move with subtle depth
- Camera slightly shifts for parallax
- No continuous spinning or aggressive movement
- Calm, elegant, premium feel

---

### 3D Layered Profile Portrait (Hero Signature)

**Layer structure:**
- Background layer
- Body/shoulders layer
- Face layer
- Foreground highlight layer
- Each layer moves independently → realistic 3D parallax

**Glass frame:**
- Frosted glass effect
- Rounded corners (20–24px)
- Thin glowing blue border (#3082C5)
- Soft reflections + semi-transparent surface + elegant shadow

**Floating motion:**
- Gently up/down + very slight rotation
- Weightless, never stops completely
- Calm and natural

**Mouse interaction:**
- Portrait tilts naturally with cursor
- Each depth layer shifts independently
- Glass frame follows slightly behind

**Lighting:**
- Soft ambient + blue glow
- Realistic shadows + subtle reflections
- Light sweep across glass every few seconds

**Entrance animation (1.5–2s):**
- Glass frame fades in
- Portrait scales into position
- Depth layers assemble naturally
- Floating begins after entrance completes

**Mobile:**
- Disable mouse tilt
- Preserve floating animation
- Optional gyroscope support

---

### 3D Project Cards

On hover:
- Tilt toward cursor
- Slight lift
- Shadow depth increases
- Soft blue glow
- Image scales subtly
- Buttons animate into view
- Feels like holding a real physical object

---

### Interactive Skill Galaxy

- Each technology = floating glowing node
- Nodes float gently with organic movement
- Connected by elegant animated lines
- React to mouse movement
- Glow softly, enlarge on hover
- Display skill info on select
- No progress bars

---

### Floating Glass Elements (Ambient)

Throughout portfolio:
- Glass cards, rectangles, panels, cubes, rings
- Slow float + tiny rotations
- Motion feels almost alive
- Adds depth without distraction

---

### Background Objects

Do NOT use: particles, stars, snow, confetti

Instead use:
- Large wireframe cubes
- Floating glass rings
- Rounded rectangles
- Abstract geometric shapes
- Minimal holographic objects
- Very slow movement + rotation

---

### Scroll Animations

- Sections reveal naturally
- Cards rise gently
- Elements fade smoothly
- Background objects parallax at different speeds
- Camera movement creates depth
- Cinematic scrolling experience

---

### Mouse Interaction (Global)

Every major element responds:
- Cards tilt, buttons react
- Laptop rotates, phone follows cursor
- Portrait parallax with depth layers
- Background objects shift subtly
- Everything refined, no exaggeration

---

### Custom Cursor

- Soft blue glow
- Smooth movement
- Trailing effect
- Magnetic interaction with buttons
- Hover expansion
- Interactive scaling

---

### Lighting System (Global)

- Realistic ambient + directional light
- Subtle reflections + shadows
- Blue accent lighting
- No harsh lighting anywhere

---

### Depth System

- Perspective + camera movement + layer separation
- Soft blur for depth of field
- Foreground/background distinction

---

### Hover Animations

- Tilt + lift + glow + shadow enhancement
- Smooth transitions
- Premium micro-interactions
- Every hover feels satisfying

---

### Loading Animation (< 3s)

- Floating logo assembling
- Glass shards merging
- Developer workspace fading in
- Camera zoom
- Elegant transition into Hero

---

### Section Transitions

- No abrupt changes
- Fade, slide, scale, parallax, morphing motion
- Continuous visual flow between sections

---

### Performance

- Three.js + R3F + Drei + GSAP + Framer Motion
- Optimized 3D models
- Lazy loading
- 60 FPS across all devices

---

### Overall Feeling

- Premium, elegant, creative, interactive
- Cinematic, immersive, minimal, professional
- Impresses recruiters within seconds
- Animations enhance content — never distract
- Memorable experience that stands out among modern portfolios

---

### Implementation Plan

#### Analysis Phase
- [ ] Audit current Three.js/R3F usage
- [ ] Evaluate GSAP vs Framer Motion for each animation type
- [ ] Plan 3D layered portrait implementation (image slicing/planes)
- [ ] Design floating workspace object hierarchy
- [ ] Map skill galaxy node layout
- [ ] Plan custom cursor architecture
- [ ] Assess mobile performance strategy

#### Build Phase
1. 3D floating workspace (laptop, phone, UI cards, code snippets)
2. 3D layered portrait + glass frame with parallax
3. Project card 3D tilt on hover
4. Interactive skill galaxy (nodes + connections)
5. Floating glass ambient elements
6. Background geometric objects
7. Scroll-triggered reveal animations
8. Custom cursor with glow + magnetic
9. Global mouse interaction system
10. Lighting system (ambient + directional + blue glow)
11. Entrance loading animation
12. Section transition orchestration
13. Performance optimization pass
14. Mobile polish pass

---

*Last updated: 2026-07-10*
