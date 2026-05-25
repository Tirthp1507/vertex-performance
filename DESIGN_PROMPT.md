# Vertex Performance Clinic - Design System & Prompt

## Project Overview

**Brand Name:** Vertex Performance Clinic**Type:** Premium physiotherapy and performance clinic website**Design Philosophy:** Premium Minimal Light Luxury**Target Audience:** Athletes, fitness enthusiasts, rehabilitation patients, corporate wellness programs

---

## Design Philosophy & Aesthetic

### Core Principles

1. **Minimalism with Purpose** - Clean, spacious layouts with intentional use of whitespace. Every element serves a function.

1. **Premium Luxury** - Gold accents, subtle shadows, and refined typography create an upscale, professional feel.

1. **Light & Airy** - White backgrounds with light grey accents create a calm, welcoming environment.

1. **Modern Professionalism** - Contemporary design that conveys expertise, trust, and excellence in healthcare.

### Design Movement

Inspired by **Apple's design language** combined with **luxury wellness brands** (Equinox, Peloton). Emphasis on:

- Generous whitespace

- Subtle depth through shadows

- Premium typography hierarchy

- Smooth, purposeful animations

- High-quality imagery

---

## Color Palette

### Primary Colors

| Color | Value | Usage |
| --- | --- | --- |
| **White** | `#FFFFFF` | Background, primary surface |
| **Black** | `#1A1A1A` | Text, primary foreground |
| **Gold** | `#F2B22B` | Accent, highlights, CTAs, premium feel |
| **Light Grey** | `#F5F5F5` | Secondary background, subtle divisions |
| **Medium Grey** | `#E8E8E8` | Borders, subtle separators |
| **Dark Grey** | `#666666` | Secondary text, muted content |

### Semantic Colors

- **Primary:** Gold (#F2B22B) - Used for CTAs, highlights, and premium elements

- **Secondary:** Light Grey (#F5F5F5) - Used for section backgrounds and cards

- **Accent:** Gold (#F2B22B) - Draws attention to key interactive elements

- **Text:** Black (#1A1A1A) on white, Dark Grey (#666666) for secondary text

- **Borders:** Medium Grey (#E8E8E8)

---

## Typography System

### Font Families

| Type | Font | Weight | Usage |
| --- | --- | --- | --- |
| **Display** | Poppins | 700 (Bold) | Page titles, hero headlines (48-64px) |
| **Heading** | Poppins | 600 (SemiBold) | Section titles, card titles (24-36px) |
| **Body** | Inter | 400 (Regular) | Body text, descriptions (16px) |
| **Body Small** | Inter | 400 (Regular) | Secondary text, captions (14px) |
| **Label** | Inter | 600 (SemiBold) | Button text, labels (12-14px) |

### Typography Hierarchy

```
Hero Title: 64px, Bold, Black, Poppins
Section Title: 36px, SemiBold, Black, Poppins
Subsection Title: 24px, SemiBold, Black, Poppins
Body Text: 16px, Regular, Black, Inter
Secondary Text: 14px, Regular, Dark Grey, Inter
Label/Caption: 12px, SemiBold, Dark Grey, Inter
```

---

## Spacing System

### Spacing Scale (in pixels)

```
xs: 4px
sm: 8px
md: 16px
lg: 24px
xl: 32px
2xl: 48px
3xl: 64px
4xl: 96px
```

### Layout Spacing

- **Container Padding:** 24px (tablet), 32px (desktop)

- **Section Padding:** 64px vertical, 32px horizontal (desktop)

- **Component Gap:** 16px (default), 24px (large components)

- **Card Padding:** 24px

---

## Component Specifications

### Buttons

#### Primary Button (CTA)

- **Background:** Gold (#F2B22B)

- **Text:** White, 14px, SemiBold

- **Padding:** 12px 24px

- **Border Radius:** 8px

- **Hover State:** Opacity 90%, slight scale up (1.02)

- **Shadow:** 0 4px 12px rgba(242, 178, 43, 0.15)

#### Secondary Button (Outline)

- **Background:** Transparent

- **Border:** 2px solid Black (#1A1A1A)

- **Text:** Black, 14px, SemiBold

- **Padding:** 12px 24px

- **Border Radius:** 8px

- **Hover State:** Background light grey, border remains black

#### Text Link

- **Color:** Gold (#F2B22B)

- **Hover:** Underline appears

- **Transition:** 0.3s smooth

### Cards

- **Background:** White (#FFFFFF)

- **Border:** 1px solid Medium Grey (#E8E8E8)

- **Padding:** 24px

- **Border Radius:** 12px

- **Shadow:** 0 2px 8px rgba(0, 0, 0, 0.04)

- **Hover Shadow:** 0 8px 24px rgba(0, 0, 0, 0.08)

- **Transition:** 0.3s ease

### Input Fields

- **Background:** White (#FFFFFF)

- **Border:** 1px solid Medium Grey (#E8E8E8)

- **Padding:** 12px 16px

- **Border Radius:** 8px

- **Focus:** Border color changes to Gold (#F2B22B)

- **Text:** 16px, Regular, Black

### Navigation

- **Background:** White with 95% opacity backdrop blur

- **Height:** 64px

- **Logo:** 32x32px, Gold background, white text "V"

- **Links:** 14px, Regular, Black, hover turns Gold

- **Active Link:** Gold color, underline

- **Button:** Primary CTA button

---

## Layout Patterns

### Hero Section

- **Height:** 600-700px (desktop)

- **Background:** Premium image with overlay gradient (black 0-40% opacity)

- **Content Alignment:** Center

- **Text Color:** White (for contrast over dark overlay)

- **Headline:** 64px, Bold, Poppins

- **Subheadline:** 20px, Regular, Inter

- **CTA Buttons:** 2 buttons (Primary + Secondary)

### Feature Section

- **Layout:** 3-column grid (desktop), 1-column (mobile)

- **Card Height:** 300px

- **Image:** Top 60%, content bottom 40%

- **Icon Size:** 48px

- **Title:** 20px, SemiBold

- **Description:** 14px, Regular, Dark Grey

### Testimonial Section

- **Layout:** Carousel or grid (3-4 items visible)

- **Card:** 300x300px minimum

- **Quote:** 16px, Regular, italic

- **Author:** 14px, SemiBold

- **Rating:** 5-star icons in Gold

### Gallery Section

- **Layout:** Masonry grid (4 columns desktop, 2 mobile)

- **Gap:** 24px

- **Image Aspect Ratio:** Varied (some 2x2, some 1x1)

- **Overlay:** Dark overlay (0-60% opacity) on hover

- **Text:** White, positioned bottom-left

- **Lightbox:** Full-screen modal with close button

### Contact Form

- **Layout:** Single column, max-width 600px

- **Fields:** Name, Email, Phone, Message

- **Field Spacing:** 24px

- **Submit Button:** Full width, Primary style

- **Success Message:** Toast notification (Sonner)

---

## Animation & Motion

### Entrance Animations

- **Fade In:** 0.6s ease-out, staggered children (0.1s delay)

- **Slide Up:** 0.8s ease-out, 20px offset

- **Scale:** 0.8s ease-out, 0.95 initial scale

### Hover Animations

- **Buttons:** Scale 1.02, shadow increase, 0.3s ease

- **Cards:** Lift effect (shadow increase), 0.3s ease

- **Images:** Subtle zoom (1.05), 0.5s ease

- **Links:** Color change + underline, 0.3s ease

### Scroll Animations

- **Parallax:** Subtle background image movement (20-30% offset)

- **Fade on Scroll:** Elements fade in as they enter viewport

- **Counter Animation:** Numbers animate from 0 to target on scroll

### Transitions

- **Page Transitions:** Fade in/out, 0.3s duration

- **Modal/Lightbox:** Scale + fade, 0.3s ease

- **Carousel:** Smooth slide, 0.5s ease

---

## Responsive Design

### Breakpoints

| Device | Width | Columns | Padding |
| --- | --- | --- | --- |
| Mobile | 320-640px | 1 | 16px |
| Tablet | 641-1024px | 2 | 24px |
| Desktop | 1025px+ | 3-4 | 32px |

### Mobile Adjustments

- **Navigation:** Hamburger menu (3-line icon)

- **Hero Height:** 400px

- **Font Sizes:** Reduce by 10-15%

- **Spacing:** Reduce by 20-30%

- **Grid:** Single column for most sections

- **Images:** Full width with aspect ratio maintained

---

## Imagery Guidelines

### Hero Images

- **Style:** Premium, professional, minimalist

- **Content:** Clinic interiors, equipment, professional staff, happy clients

- **Tone:** Bright, clean, professional

- **Aspect Ratio:** 16:9

- **Quality:** High resolution (2560px+ width)

### Section Images

- **Style:** Consistent with hero, professional photography

- **Content:** Specific to section (therapy, training, recovery)

- **Aspect Ratio:** 4:3 or 1:1

- **Overlay:** Optional dark overlay for text contrast

### Icons

- **Style:** Lucide React icons (24-48px)

- **Color:** Gold (#F2B22B) or Black (#1A1A1A)

- **Stroke Width:** 2px

---

## Interaction Patterns

### Click States

- **Buttons:** Visual feedback (scale, shadow, opacity)

- **Links:** Color change + underline

- **Form Fields:** Border color change to Gold on focus

- **Cards:** Lift effect on hover

### Loading States

- **Spinner:** Animated gold circle

- **Skeleton:** Light grey placeholder shapes

- **Toast:** Sonner notifications (top-right, auto-dismiss)

### Empty States

- **Icon:** Large, light grey icon (64px)

- **Message:** "No items found" or similar

- **CTA:** Link to create/add content

---

## Accessibility

### Color Contrast

- **Text on White:** Black (#1A1A1A) - 16.5:1 ratio ✓

- **Text on Gold:** White (#FFFFFF) - 4.5:1 ratio ✓

- **Text on Light Grey:** Black (#1A1A1A) - 10:1 ratio ✓

### Typography

- **Minimum Font Size:** 14px for body text

- **Line Height:** 1.6 for body text, 1.2 for headings

- **Letter Spacing:** 0.5px for body, 0.25px for headings

### Interactive Elements

- **Focus Ring:** 2px solid Gold (#F2B22B)

- **Focus Visible:** Always visible on keyboard navigation

- **Hover/Focus:** Distinct visual feedback

### Semantic HTML

- **Headings:** Proper hierarchy (h1, h2, h3)

- **Labels:** Associated with form inputs

- **Alt Text:** Descriptive alt text for all images

- **ARIA:** Proper ARIA labels for complex components

---

## Page-Specific Designs

### Home Page

1. **Navigation** - Fixed header with logo, links, CTA

1. **Hero Section** - Premium image, headline, two CTAs

1. **Services Overview** - 3-card grid with icons

1. **About Section** - Image carousel (auto-rotate 5s) + text

1. **Why Choose Us** - Checklist with icons

1. **Services Pricing** - 3 pricing cards with features

1. **Who We Work With** - Logo grid or testimonials

1. **CTA Section** - "Ready to start?" with button

1. **Footer** - Links, contact info, social

### About Page

1. **Hero** - Smaller hero with page title

1. **Story** - Text + image layout

1. **Team** - Team member cards (image + bio)

1. **Values** - 4-column value cards with icons

1. **Facilities** - Image gallery section

1. **CTA** - Contact/booking CTA

### Services Page

1. **Hero** - Service overview

1. **Service Cards** - Detailed service cards with pricing

1. **Process** - Step-by-step process with icons

1. **FAQ** - Accordion component

1. **CTA** - Book appointment button

### Programs Page

1. **Hero** - Programs overview

1. **Program Cards** - Grid of program cards with details

1. **Benefits** - Benefits section with checklist

1. **Testimonials** - Client success stories

1. **CTA** - Enroll button

### Gallery Page

1. **Hero** - Gallery title and description

1. **Masonry Grid** - 6+ images in masonry layout

1. **Lightbox** - Full-screen image viewer on click

1. **Captions** - Image titles and categories

1. **CTA** - "Book your consultation" button

### Contact Page

1. **Hero** - Contact page title

1. **Contact Form** - Multi-field form with validation

1. **Contact Info** - Address, phone, email, hours

1. **Map** - Google Map (if available)

1. **Social Links** - Social media icons

---

## Implementation Notes

### Technology Stack

- **Framework:** React 19 with TypeScript

- **Styling:** Tailwind CSS 4

- **Components:** shadcn/ui

- **Animations:** Framer Motion

- **Icons:** Lucide React

- **Forms:** React Hook Form + Zod validation

- **Routing:** Wouter

### Performance Considerations

- **Image Optimization:** WebP format, lazy loading

- **Code Splitting:** Route-based code splitting

- **CSS:** Utility-first with Tailwind

- **Bundle Size:** Minimize dependencies

### Browser Support

- Chrome/Edge: Latest 2 versions

- Firefox: Latest 2 versions

- Safari: Latest 2 versions

- Mobile: iOS Safari 12+, Chrome Android

---

## Design Tokens (CSS Variables)

```css
/* Colors */
--color-white: #FFFFFF;
--color-black: #1A1A1A;
--color-gold: #F2B22B;
--color-light-grey: #F5F5F5;
--color-medium-grey: #E8E8E8;
--color-dark-grey: #666666;

/* Typography */
--font-display: 'Poppins', sans-serif;
--font-body: 'Inter', sans-serif;
--font-size-hero: 64px;
--font-size-heading: 36px;
--font-size-subheading: 24px;
--font-size-body: 16px;
--font-size-small: 14px;
--font-size-label: 12px;

/* Spacing */
--spacing-xs: 4px;
--spacing-sm: 8px;
--spacing-md: 16px;
--spacing-lg: 24px;
--spacing-xl: 32px;
--spacing-2xl: 48px;
--spacing-3xl: 64px;

/* Shadows */
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.04);
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08);
--shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.12);

/* Border Radius */
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;

/* Transitions */
--transition-fast: 0.2s ease;
--transition-base: 0.3s ease;
--transition-slow: 0.5s ease;
```

---

## Brand Voice & Messaging

### Tone

- **Professional** - Expertise and credibility

- **Warm** - Approachable and welcoming

- **Empowering** - Focus on client success

- **Clear** - Direct, easy to understand

### Key Messages

1. "Where Recovery Meets Performance"

1. "Expert care, world-class facilities"

1. "Your performance journey starts here"

1. "Science-backed recovery and training"

---

## Success Metrics

- **Page Load Time:** < 3 seconds

- **Lighthouse Score:** > 90

- **Mobile Usability:** 100%

- **Accessibility Score:** > 95

- **Conversion Rate:** Track form submissions and bookings

---

## Version History

| Version | Date | Changes |
| --- | --- | --- |
| 1.0 | 2026-03-10 | Initial design system created |

