#!/bin/bash

# Deploy script for Peter Thorp website v2
echo "🔨 Building production version..."

# Save development index.html
cp index.html index.dev.html

# Build production
npm run build

# Deploy production files
echo "📦 Deploying production files..."
cp dist/index.html .
cp -r dist/assets .
cp -r dist/manifest.json .
cp -r dist/robots.txt . 2>/dev/null || true
cp -r dist/sitemap.xml . 2>/dev/null || true

echo "✅ Production deployed! Remember to commit and push."
echo "💡 To restore dev environment, run: cp index.dev.html index.html"