# How Does the Internet Work? 🌐

An interactive educational website designed for Class 9 students to learn how the Internet works through animations, visualizations, and hands-on demonstrations.

## Features

✨ **12 Interactive Sections:**
1. **Hero** - Engaging introduction with interactive quiz
2. **What is the Internet?** - Progressive network builder
3. **History Timeline** - Clickable timeline from ARPANET to today
4. **World Network** - Live packet animation across countries
5. **Internet Components** - Clickable diagram explaining each component
6. **IP Addresses** - Interactive demonstration with house analogy
7. **Google Journey** - Step-by-step "what happens when you type google.com"
8. **Message Sending** - Full journey of a message from sender to receiver
9. **Packets** - Visual packet splitting, routing, and reassembly
10. **Encryption** - Lock/unlock visualization
11. **Complete Journey** - Everything combined in one animation
12. **Interactive Quiz** - 5 questions to test knowledge

🎤 **Presentation Mode:**
- Keyboard navigation (Arrow keys, Space)
- Section-by-section navigation
- Optimized for projector/lecture use
- Hide/show controls

🎨 **Design:**
- Dark theme with neon accents
- Smooth Framer Motion animations
- Responsive layout (optimized for 16:9)
- Custom scrollbar and glow effects

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Technology Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **UI Components:** Custom components with shadcn/ui patterns

## Usage for Teachers

1. Open the website in full-screen mode
2. Click "Presentation Mode" button (bottom right)
3. Use keyboard arrows or on-screen controls to navigate
4. Each section is self-contained and can be explained independently
5. Interactive elements allow live demonstrations during lecture

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles and animations
├── components/
│   ├── presentation-provider.tsx  # Presentation mode context
│   ├── ui/
│   │   └── button.tsx      # Reusable button component
│   └── sections/           # All 12 interactive sections
│       ├── hero-section.tsx
│       ├── what-is-internet-section.tsx
│       ├── history-timeline-section.tsx
│       ├── world-network-section.tsx
│       ├── internet-components-section.tsx
│       ├── ip-address-section.tsx
│       ├── google-journey-section.tsx
│       ├── message-sending-section.tsx
│       ├── packets-section.tsx
│       ├── encryption-section.tsx
│       ├── complete-journey-section.tsx
│       └── quiz-section.tsx
└── lib/
    └── utils.ts            # Utility functions
```

## Key Concepts Covered

- What is the Internet vs Wi-Fi
- Network of networks
- Internet history (ARPANET, TCP/IP, WWW)
- Components: Client, Router, ISP, Internet, Server
- IP Addresses
- DNS (Domain Name System)
- Data packets
- Encryption
- Complete data journey

## Educational Goals

This website is designed to:
- Make complex networking concepts accessible to 14-15 year olds
- Use visual demonstrations instead of text-heavy explanations
- Provide analogies relatable to everyday life
- Allow teachers to control the pace of presentation
- Engage students through interaction and animations
- Test comprehension through an interactive quiz

## Browser Compatibility

Works best on:
- Chrome/Edge (recommended)
- Firefox
- Safari

Requires JavaScript enabled.

## License

Created for educational purposes.
