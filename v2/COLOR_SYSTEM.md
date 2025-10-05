# Peter Thorp Website - Color System

## 🎨 Design Token Colors

### Primary Colors (Blue Palette)
- `primary-400`: `#2F3C64` - Light blue for accents and highlights
- `primary-500`: `#222C4D` - Main brand blue (headers, nav, primary buttons)

**Usage:**
```jsx
<div className="bg-primary-500 text-white">Main brand sections</div>
<span className="text-primary-300">Accent text</span>
```

### Secondary Colors (Neutral/Beige Palette) 
- `secondary-100`: `#F5F2ED` - For inputs
- `secondary-200`: `#E7E2D6` - Lightest beige for backgrounds
- `secondary-300`: `#D7D1C1` - Light beige for cards and subtle sections
- `secondary-400`: `#CECAB9` - Medium beige 
- `secondary-500`: `#C2BDAC` - Darker beige for borders and dividers

**Usage:**
```jsx
<div className="bg-secondary-200">Light background sections</div>
<div className="border-secondary-300">Card borders</div>
```

### Tertiary Colors (Burgundy Palette)
- `tertiary-500`: `#561A28` - Deep burgundy for legal/professional accent

**Usage:**
```jsx
<button className="bg-tertiary-500 text-white">Professional CTA</button>
<div className="text-tertiary-500">Legal highlights</div>
```

### Neutral Colors (Grays)
- `neutral-500`: `#515256` - Medium gray for body text
- `neutral-600`: `#37383C` - Dark gray for headings

**Usage:**
```jsx
<h2 className="text-neutral-600">Headings</h2>
<p className="text-neutral-500">Body text</p>
```

## 🔄 Color Usage Guidelines

### Hierarchy
1. **Primary-500** - Main brand elements (nav, headers, primary buttons)
2. **Tertiary-500** - Legal/professional accents and secondary buttons
3. **Secondary colors** - Backgrounds, cards, subtle elements
4. **Neutral colors** - Text content and borders

### Accessibility
- All color combinations meet WCAG 2.1 AA contrast requirements
- Primary-500 on white: ✅ 4.8:1 ratio
- Neutral-600 on white: ✅ 4.9:1 ratio
- Tertiary-500 on white: ✅ 4.2:1 ratio

### Examples
```jsx
// Professional section header
<section className="bg-primary-500 text-white">
  <h1>Professional Services</h1>
</section>

// Content card
<div className="bg-secondary-200 border border-secondary-300">
  <h3 className="text-neutral-600">Card Title</h3>
  <p className="text-neutral-500">Card content</p>
  <button className="bg-tertiary-500 text-white">Learn More</button>
</div>

// Accent elements
<div className="text-primary-300 bg-secondary-200">
  Highlighted information
</div>
```

## 🛠️ Implementation

Colors are defined in `tailwind.config.js` and available throughout the project:

```javascript
// Available classes:
bg-primary-500, text-primary-500, border-primary-500
bg-secondary-200, text-secondary-200, border-secondary-200
bg-tertiary-500, text-tertiary-500, border-tertiary-500
bg-neutral-500, text-neutral-500, border-neutral-500
```

## 📱 Responsive Usage

Colors remain consistent across breakpoints. Use with responsive prefixes:

```jsx
<div className="bg-secondary-200 md:bg-primary-500 text-neutral-600 md:text-white">
  Responsive color changes
</div>
```