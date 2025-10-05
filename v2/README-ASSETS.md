# Asset Management Guide

## Folder Structure

```
src/assets/
├── icons/           # SVG icon files
└── images/          # PNG/JPG image files
```

## Adding Images

Place your images in `public/images/` (they're automatically copied from `src/assets/images/`):
- `header-background.png` - Hero section background
- `header-peter.png` - Peter's photo for hero section
- `peter-chair.png` - Peter in chair photo (About page)
- `peter-ponsonby.png` - Peter at Ponsonby Rugby Club (Community page)
- `tools.png` - Legal tools/scales image (Practice page)
- `artwork.png` - Office artwork image (Contact page)
- `books.png` - Legal books image (About page)

## Adding Icons

### Step 1: Place SVG files in `src/assets/icons/`

### Step 2: Convert fill colors to currentColor
For each SVG file, replace any hardcoded colors with `currentColor`:

**Before:**
```svg
<path fill="#000000" d="..."/>
<path fill="black" d="..."/>
<path fill="#333" d="..."/>
```

**After:**
```svg
<path fill="currentColor" d="..."/>
<path fill="currentColor" d="..."/>
<path fill="currentColor" d="..."/>
```

### Step 3: Add to Icon component
Update `src/components/Icon.jsx` to include your new icons:

```javascript
const icons = {
  // Add your new icon here
  yourIconName: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      {/* Paste your SVG path here */}
      <path fill="currentColor" d="your-svg-path-data"/>
    </svg>
  ),
  // ... existing icons
};
```

### Step 4: Use in components
```jsx
<Icon name="yourIconName" className="w-6 h-6 text-blue-600" />
```

## Icon Mapping for Legal Services

Based on your asset list, here's the recommended mapping:

- `Gavel.svg` or `Gavel-1.svg` → Contract & Tort, Legal Practice
- `Buildings.svg` → Commercial Litigation  
- `BuildingApartment.svg` → Company Law & Trusts
- `FileText.svg` → Administrative Law
- `Farm.svg` → Land Law
- `CraneTower.svg` → Construction Law
- `Bank.svg` → Financial/Corporate Law
- `Shield.svg` → Insurance Law
- `Brain.svg` → Intellectual Property
- `Scroll.svg` → Survey Law
- `User.svg` → Personal/Client Services
- `UsersThree.svg` → Community Leadership
- `Envelope.svg` → Contact/Email
- `Phone.svg` → Contact/Phone
- `MapPin.svg` → Location
- `Mailbox.svg` → Postal Address

## Color System

The icons use `currentColor` so you can control their color with CSS:

```jsx
{/* Red icons */}
<Icon name="gavel" className="w-8 h-8 text-red-800" />

{/* Blue icons */}
<Icon name="bank" className="w-8 h-8 text-blue-800" />

{/* White icons on colored backgrounds */}
<div className="bg-blue-800 p-4">
  <Icon name="envelope" className="w-6 h-6 text-white" />
</div>
```

## Current Header Structure

The home page header now has the clean structure you requested:

- **Background**: `header-background.png` with burgundy gradient overlay
- **Left side**: Peter Thorp, Barrister, LLB (HONS) 
- **Right side**: `header-peter.png` image
- **Content below**: All other content moved to separate sections

## Next Steps

1. Add your image and icon files to the appropriate folders
2. Update SVG files to use `currentColor`
3. Add new icons to the Icon component
4. Update service cards to use the correct icon names
5. Test that images load properly

The Icon component will automatically warn in the console if an icon name is not found, making it easy to debug.