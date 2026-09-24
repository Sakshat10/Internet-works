# Quick Setup Guide 🚀

## Prerequisites

Make sure you have **Node.js** installed (version 18 or higher).
- Check by running: `node --version`
- If not installed, download from: https://nodejs.org/

## Installation Steps

### Step 1: Open Terminal/Command Prompt

Navigate to this project folder:
```bash
cd /Users/temp/Desktop/Internet/internet-education
```

### Step 2: Install Dependencies

Run this command (may take 2-3 minutes):
```bash
npm install
```

If you encounter any errors, try:
```bash
npm install --legacy-peer-deps
```

### Step 3: Start Development Server

```bash
npm run dev
```

You should see output like:
```
▲ Next.js 15.x.x
- Local:        http://localhost:3000
```

### Step 4: Open in Browser

Open your browser and go to:
```
http://localhost:3000
```

## Presenting to Students

1. **Open the website** in full-screen mode (F11 or browser full-screen)
2. **Click "Presentation Mode"** button (bottom-right corner)
3. **Use keyboard to navigate:**
   - **Arrow Right** or **Space**: Next section
   - **Arrow Left**: Previous section
4. **Click interactive elements** as you explain concepts
5. **Press "Exit Presentation"** when done

## Troubleshooting

### Port 3000 already in use?
```bash
npm run dev -- -p 3001
```
Then open: http://localhost:3001

### Dependencies not installing?
Try clearing npm cache:
```bash
npm cache clean --force
npm install
```

### TypeScript errors?
The app should still run. You can ignore TypeScript warnings during development.

## Building for Production

To create an optimized production build:
```bash
npm run build
npm start
```

## Tips for Best Experience

- **Use Chrome or Edge** for best performance
- **Connect to projector** before starting
- **Test all interactive elements** before the lecture
- **Have a backup browser tab** open with the quiz section
- Each section takes approximately 2-3 minutes to explain

## Section Overview (25-minute lecture plan)

1. **Hero** (2 min) - Introduction & question
2. **What is Internet** (2 min) - Network of networks
3. **History** (2 min) - ARPANET to today
4. **World Network** (2 min) - Global connectivity
5. **Components** (2 min) - Router, ISP, Server
6. **IP Address** (2 min) - Addressing devices
7. **Google Journey** (3 min) - DNS & routing
8. **Message Sending** (2 min) - End-to-end path
9. **Packets** (2 min) - Data chunking
10. **Encryption** (2 min) - Security
11. **Complete Journey** (2 min) - Everything together
12. **Quiz** (2 min) - Test knowledge

**Total: ~25 minutes**

## Need Help?

Check the main README.md for more detailed information.

Happy teaching! 📚✨
