# Typography System

## Overview

The Typography component provides a consistent set of text elements with standardized font sizes and line heights across the Peter Thorp website.

## Components

### Headings

| Component | Font Size | Line Height | Default Color | HTML Tag | Usage |
|-----------|-----------|-------------|---------------|----------|-------|
| `H1` | 64px | 130% | `text-primary-500` | `<h1>` | Page titles, hero headings |
| `H2` | 40px | 130% | `text-primary-500` | `<h2>` | Section headings |
| `H3` | 32px | 130% | `text-primary-500` | `<h3>` | Subsection headings |
| `H4` | 24px | 130% | `text-primary-500` | `<h4>` | Card titles, bullet point headings |
| `H5` | 20px | 130% | `text-primary-500` | `<h5>` | Small headings, labels |

### Body Text

| Component | Font Size | Line Height | Default Color | HTML Tag | Usage |
|-----------|-----------|-------------|---------------|----------|-------|
| `BodyXL` | 32px | 160% | `text-neutral-500` | `<p>` | Large body text, intros |
| `BodyLead` | 24px | 160% | `text-neutral-500` | `<p>` | Lead paragraphs |
| `Body` | 20px | 160% | `text-neutral-500` | `<p>` | Standard body text |
| `Caption` | 16px | 150% | `text-neutral-500` | `<p>` | Small text, captions |

## Usage Examples

### Import Options

**Option 1: Individual Components**
```tsx
import { H1, H2, Body, Caption } from '../components/Typography';
```

**Option 2: P Namespace (Recommended for Body Text)**
```tsx
import { H1, H2, P } from '../components/Typography';
```

**Option 3: Default Import**
```tsx
import Typography from '../components/Typography';
```

### Usage Examples

**Individual Components:**
```tsx
<H1 className="font-bold">Peter Thorp</H1>
<H2 className="font-bold mb-6">Section Heading</H2>
<Body>This is standard body text with proper line height for readability.</Body>
<Caption>Small caption or helper text</Caption>
```

**P Namespace (Recommended):**
```tsx
<H1 className="font-bold">Peter Thorp</H1>
<H2 className="font-bold mb-6">Section Heading</H2>
<P>This is standard body text with proper line height for readability.</P>
<P.sm>Small caption or helper text</P.sm>
<P.lg>Lead paragraph with larger text</P.lg>
<P.xl>Extra large body text for intros</P.xl>
```

**Color Overrides:**
```tsx
{/* Override colors when needed */}
<H1 className="font-bold text-white">White heading on dark background</H1>
<P className="text-stone-200">Light text on dark background</P>
<P.lg className="text-stone-400">Subtle lead text</P.lg>
```

### Default Import (Alternative)

```tsx
import Typography from '../components/Typography';

<Typography.H1 className="font-bold">Title</Typography.H1>
<Typography.Body className="text-gray-600">Content</Typography.Body>
```

## P Namespace

The `P` namespace provides a clean, organized way to access all paragraph/body text components:

- `P` → `Body` component (20px) - **Default paragraph**
- `P.lg` → `BodyLead` component (24px) - **Large body text**
- `P.xl` → `BodyXL` component (32px) - **Extra large body text**
- `P.sm` → `Caption` component (16px) - **Small body text**

**Benefits:**
- **Cleaner Imports**: Import just `P` instead of multiple individual components
- **Intuitive Sizing**: `sm`, `lg`, `xl` follow familiar sizing conventions
- **Default Component**: `P` alone gives you standard body text
- **Better Organization**: All paragraph components grouped under one namespace
- **Backwards Compatible**: Individual component exports still available

## Design Principles

- **Consistent Spacing**: All components use standardized font sizes
- **Optimized Readability**: Line heights are set for optimal reading experience
- **Semantic HTML**: Each component uses appropriate HTML tags for SEO and accessibility
- **Flexible Styling**: All components accept className props for custom styling
- **Type Safety**: Full TypeScript support with proper prop types
- **Namespace Organization**: P namespace provides clean component grouping

## Implementation Notes

- Font sizes use exact pixel values with Tailwind's arbitrary value syntax: `text-[64px]`
- Line heights use percentage values: `leading-[130%]`
- All components are fully typed with TypeScript
- Components merge custom className props with default styles
- All additional HTML attributes are passed through via spread operator

## Migration from Old System

Replace hardcoded text elements:

```tsx
// Old
<h1 className="text-5xl lg:text-6xl font-bold">Title</h1>
<p className="text-lg leading-relaxed">Body text</p>

// New
<H1 className="font-bold">Title</H1>
<Body>Body text</Body>
```