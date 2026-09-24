# Troubleshooting Guide 🔧

## Common Issues and Solutions

### 1. "npm: command not found"

**Problem:** Node.js or npm is not installed.

**Solution:**
1. Download and install Node.js from https://nodejs.org/
2. Choose the LTS (Long Term Support) version
3. Restart your terminal after installation
4. Verify: `node --version` and `npm --version`

---

### 2. "Cannot find module" or "Module not found"

**Problem:** Dependencies are not installed.

**Solution:**
```bash
npm install
```

If that doesn't work:
```bash
rm -rf node_modules package-lock.json
npm install
```

---

### 3. "Port 3000 is already in use"

**Problem:** Another application is using port 3000.

**Solution:**
```bash
npm run dev -- -p 3001
```
Then open: http://localhost:3001

Or kill the process using port 3000:
```bash
# On macOS/Linux:
lsof -ti:3000 | xargs kill -9

# On Windows:
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F
```

---

### 4. "EACCES: permission denied"

**Problem:** Insufficient permissions.

**Solution:**
```bash
sudo chown -R $USER ~/.npm
```

Or run with sudo (not recommended):
```bash
sudo npm install
```

---

### 5. Animations are laggy or choppy

**Problem:** Browser performance issues.

**Solutions:**
- Use Chrome or Edge (best performance)
- Close other browser tabs
- Disable browser extensions
- Update your graphics drivers
- Reduce browser zoom to 100%

---

### 6. Website doesn't load or shows blank page

**Problem:** JavaScript errors or build issues.

**Solutions:**
1. Check browser console (F12 → Console tab)
2. Clear browser cache (Ctrl+Shift+Delete)
3. Try incognito/private mode
4. Rebuild the project:
```bash
npm run build
npm run dev
```

---

### 7. "Error: Cannot find module 'framer-motion'"

**Problem:** Missing dependency.

**Solution:**
```bash
npm install framer-motion lucide-react
```

---

### 8. TypeScript errors during build

**Problem:** Type checking issues.

**Solution:**
TypeScript errors usually don't prevent the app from running. You can:
1. Ignore them during development
2. Or fix them if they prevent building:
```bash
npm run build
```

---

### 9. Presentation Mode not working

**Problem:** Keyboard events not captured.

**Solutions:**
- Click anywhere on the page first to focus
- Make sure no input fields are focused
- Try using on-screen navigation buttons instead
- Refresh the page (F5)

---

### 10. Sections not scrolling smoothly

**Problem:** Browser smooth scroll not enabled.

**Solutions:**
- Enable smooth scrolling in browser settings
- Try a different browser
- Use Presentation Mode for better navigation

---

### 11. Quiz not saving answers

**Problem:** This is expected - answers are stored in memory only.

**Note:** The quiz resets when you refresh the page. This is intentional for educational use.

---

### 12. Mobile/Tablet display issues

**Note:** This website is optimized for desktop/projector use (16:9 aspect ratio). Mobile experience may be limited.

**Tip:** Use landscape mode on tablets for better viewing.

---

## Performance Tips

### For Best Experience:
1. **Use wired connection** instead of Wi-Fi when presenting
2. **Close unnecessary applications** to free up RAM
3. **Use Chrome/Edge** for best animation performance
4. **Test before lecture** - go through all sections once
5. **Full-screen mode** (F11) for presentations
6. **Disable notifications** during presentation

### Hardware Requirements:
- **Minimum:** 4GB RAM, dual-core processor
- **Recommended:** 8GB+ RAM, quad-core processor
- **Graphics:** Any modern GPU (integrated is fine)

---

## Still Having Issues?

### Check the logs:
```bash
npm run dev
```
Look for error messages in the terminal output.

### Clear everything and start fresh:
```bash
rm -rf node_modules package-lock.json .next
npm install
npm run dev
```

### Browser Developer Tools:
1. Press F12
2. Go to Console tab
3. Look for red error messages
4. Share these errors if seeking help

---

## Getting Help

If you're still stuck:
1. Check the README.md for general information
2. Check the SETUP.md for installation steps
3. Search for the error message online
4. Make sure you're using Node.js version 18 or higher

---

## Keyboard Shortcuts

- **F11** - Full screen
- **F5** - Refresh page
- **F12** - Developer tools
- **Ctrl/Cmd + Shift + R** - Hard refresh (clears cache)
- **Arrow Left/Right** - Navigate sections (in Presentation Mode)
- **Space** - Next section (in Presentation Mode)

---

## Educational Use Notes

- Each section is self-contained
- You can jump to any section directly
- Interactive elements require clicking to activate
- Animations have replay buttons
- Quiz can be retaken unlimited times

Happy teaching! 🎓✨
