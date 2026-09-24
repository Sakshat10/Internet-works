#!/bin/bash

# Quick Start Script for "How Does the Internet Work?"
# This script checks dependencies and starts the development server

echo "🌐 Starting Internet Education Website..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "📥 Please install Node.js from: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js $(node --version) detected"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed!"
    exit 1
fi

echo "✅ npm $(npm --version) detected"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies... (this may take a few minutes)"
    npm install
    echo ""
fi

echo "🚀 Starting development server..."
echo ""
echo "📖 Once started, open your browser to: http://localhost:3000"
echo "🎤 Click 'Presentation Mode' for teaching"
echo "⌨️  Use Arrow Keys to navigate sections"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Start the development server
npm run dev
