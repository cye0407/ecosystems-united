# Five Stacks — Design System

**Created:** January 27, 2026  
**Status:** Active  
**Purpose:** Visual language, colors, typography, components.

---

## Brand Essence

**Feeling:** Professional calm. Trustworthy. Not flashy.

> "Peace of mind, not panic."

The product handles stressful situations (buyer requests, compliance deadlines). The UI should feel like a capable colleague — competent, organized, reassuring.

**Not:** Corporate bland, startup chaotic, dashboard overload.

---

## Colors

### Primary Palette

| Name | Hex | Usage |
|------|-----|-------|
| **Deep Forest** | `#1B4332` | Primary brand, headers, emphasis |
| **Forest** | `#2D5016` | Secondary brand, interactive elements |
| **Sage** | `#52796F` | Tertiary, borders, muted text |
| **Mint** | `#95D5B2` | Accents, success states, highlights |
| **Cream** | `#F8FAF7` | Backgrounds, cards |
| **White** | `#FFFFFF` | Base background |

### Semantic Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Success / High** | `#2D5016` | High confidence, complete, good |
| **Warning / Medium** | `#D4A017` | Medium confidence, attention needed |
| **Error / Low** | `#C1292E` | Low confidence, errors, critical |
| **Info** | `#1D4E89` | Informational, links |

### Confidence Colors

| Level | Background | Text/Icon | Border |
|-------|------------|-----------|--------|
| High ✅ | `#E8F5E9` | `#2D5016` | `#A5D6A7` |
| Medium ⚠️ | `#FFF8E1` | `#D4A017` | `#FFE082` |
| Low ❓ | `#FFEBEE` | `#C1292E` | `#EF9A9A` |
| None ❌ | `#F5F5F5` | `#757575` | `#E0E0E0` |

### Progress Bar Gradient

```css
background: linear-gradient(90deg, #2D5016 0%, #52796F 50%, #95D5B2 100%);
```

---

## Typography

### Font Stack

```css
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

**Inter** — Clean, professional, excellent for data-heavy interfaces.

### Scale

| Name | Size | Weight | Line Height | Usage |
|------|------|--------|-------------|-------|
| `display` | 32px / 2rem | 700 | 1.2 | Page titles |
| `h1` | 24px / 1.5rem | 600 | 1.3 | Section headers |
| `h2` | 20px / 1.25rem | 600 | 1.4 | Card titles |
| `h3` | 16px / 1rem | 600 | 1.4 | Subsection headers |
| `body` | 14px / 0.875rem | 400 | 1.5 | Default text |
| `body-lg` | 16px / 1rem | 400 | 1.5 | Emphasized body |
| `small` | 12px / 0.75rem | 400 | 1.4 | Captions, metadata |
| `tiny` | 11px / 0.6875rem | 500 | 1.3 | Badges, tags |

### Text Colors

| Name | Hex | Usage |
|------|-----|-------|
| `text-primary` | `#1A1A1A` | Main text |
| `text-secondary` | `#4A4A4A` | Secondary text |
| `text-muted` | `#757575` | Muted, placeholders |
| `text-inverse` | `#FFFFFF` | On dark backgrounds |

---

## Spacing

### Scale (8px base)

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Tight gaps |
| `space-2` | 8px | Default small gap |
| `space-3` | 12px | Comfortable gap |
| `space-4` | 16px | Section padding |
| `space-5` | 24px | Card padding |
| `space-6` | 32px | Section margins |
| `space-8` | 48px | Page sections |
| `space-10` | 64px | Large separations |

### Container

```css
--container-max: 1200px;
--container-padding: 24px;
```

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `radius-sm` | 4px | Inputs, small elements |
| `radius-md` | 8px | Cards, buttons |
| `radius-lg` | 12px | Modals, large cards |
| `radius-xl` | 16px | Feature cards |
| `radius-full` | 9999px | Pills, avatars |

---

## Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift |
| `shadow-md` | `0 4px 6px rgba(0,0,0,0.07)` | Cards |
| `shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Dropdowns, modals |
| `shadow-xl` | `0 20px 25px rgba(0,0,0,0.15)` | Prominent modals |

---

## Components

### Buttons

#### Primary
```css
.btn-primary {
  background: #2D5016;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-primary:hover {
  background: #1B4332;
}
.btn-primary:disabled {
  background: #A5D6A7;
  cursor: not-allowed;
}
```

#### Secondary
```css
.btn-secondary {
  background: white;
  color: #2D5016;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  border: 1px solid #2D5016;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-secondary:hover {
  background: #F8FAF7;
}
```

#### Ghost
```css
.btn-ghost {
  background: transparent;
  color: #2D5016;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  border: none;
  cursor: pointer;
}
.btn-ghost:hover {
  background: #F8FAF7;
}
```

#### Sizes
| Size | Padding | Font Size |
|------|---------|-----------|
| `sm` | 6px 12px | 12px |
| `md` | 10px 20px | 14px |
| `lg` | 14px 28px | 16px |

---

### Cards

#### Default Card
```css
.card {
  background: white;
  border: 1px solid #E8E8E8;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}
```

#### Interactive Card
```css
.card-interactive {
  background: white;
  border: 1px solid #E8E8E8;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
  cursor: pointer;
  transition: all 0.2s;
}
.card-interactive:hover {
  border-color: #2D5016;
  box-shadow: 0 4px 6px rgba(0,0,0,0.07);
}
```

#### Domain Card (Data Overview)
```css
.domain-card {
  background: white;
  border: 1px solid #E8E8E8;
  border-radius: 12px;
  padding: 20px;
  transition: all 0.2s;
}
.domain-card:hover {
  border-color: #95D5B2;
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0,0,0,0.07);
}
.domain-card-empty {
  background: #F8FAF7;
  border-style: dashed;
}
```

---

### Inputs

#### Text Input
```css
.input {
  width: 100%;
  padding: 10px 14px;
  font-size: 14px;
  border: 1px solid #D4D4D4;
  border-radius: 8px;
  background: white;
  transition: border-color 0.2s;
}
.input:focus {
  outline: none;
  border-color: #2D5016;
  box-shadow: 0 0 0 3px rgba(45, 80, 22, 0.1);
}
.input:disabled {
  background: #F5F5F5;
  cursor: not-allowed;
}
.input-error {
  border-color: #C1292E;
}
```

#### Grid Cell (Data Entry)
```css
.grid-cell {
  padding: 8px 12px;
  font-size: 14px;
  text-align: right;
  border: 1px solid transparent;
  background: transparent;
  font-variant-numeric: tabular-nums;
}
.grid-cell:hover {
  background: #F8FAF7;
}
.grid-cell:focus {
  outline: none;
  border-color: #2D5016;
  background: white;
}
```

#### Select
```css
.select {
  padding: 10px 14px;
  font-size: 14px;
  border: 1px solid #D4D4D4;
  border-radius: 8px;
  background: white;
  cursor: pointer;
}
```

---

### Progress Bar

```css
.progress-container {
  width: 100%;
  height: 12px;
  background: #E8E8E8;
  border-radius: 6px;
  overflow: hidden;
}
.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #2D5016 0%, #52796F 50%, #95D5B2 100%);
  border-radius: 6px;
  transition: width 0.5s ease-out;
}
```

#### With Milestones
```css
.progress-milestone {
  position: absolute;
  width: 3px;
  height: 16px;
  background: white;
  border: 2px solid #2D5016;
  border-radius: 2px;
  top: -2px;
}
.progress-milestone-reached {
  background: #2D5016;
}
```

---

### Badges

#### Confidence Badges
```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  font-size: 11px;
  font-weight: 500;
  border-radius: 4px;
}
.badge-high {
  background: #E8F5E9;
  color: #2D5016;
}
.badge-medium {
  background: #FFF8E1;
  color: #D4A017;
}
.badge-low {
  background: #FFEBEE;
  color: #C1292E;
}
```

#### Status Badges
```css
.badge-complete {
  background: #E8F5E9;
  color: #2D5016;
}
.badge-draft {
  background: #F5F5F5;
  color: #757575;
}
.badge-due {
  background: #FFF8E1;
  color: #D4A017;
}
.badge-overdue {
  background: #FFEBEE;
  color: #C1292E;
}
```

---

### Tables / Data Grids

```css
.data-grid {
  width: 100%;
  border-collapse: collapse;
}
.data-grid th {
  text-align: left;
  padding: 12px;
  font-size: 12px;
  font-weight: 600;
  color: #757575;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-bottom: 2px solid #E8E8E8;
  background: #F8FAF7;
}
.data-grid td {
  padding: 12px;
  font-size: 14px;
  border-bottom: 1px solid #E8E8E8;
}
.data-grid tr:hover td {
  background: #F8FAF7;
}
.data-grid-number {
  text-align: right;
  font-variant-numeric: tabular-nums;
}
```

---

### Modal / Dialog

```css
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.modal {
  background: white;
  border-radius: 16px;
  padding: 32px;
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 25px rgba(0,0,0,0.15);
}
.modal-header {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
}
.modal-body {
  color: #4A4A4A;
  margin-bottom: 24px;
}
.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}
```

---

### Milestone Popup

```css
.milestone-popup {
  background: white;
  border-radius: 16px;
  padding: 32px;
  text-align: center;
  max-width: 440px;
}
.milestone-emoji {
  font-size: 48px;
  margin-bottom: 16px;
}
.milestone-title {
  font-size: 24px;
  font-weight: 700;
  color: #1B4332;
  margin-bottom: 8px;
}
.milestone-body {
  color: #4A4A4A;
  margin-bottom: 24px;
  line-height: 1.6;
}
.milestone-funfact {
  background: #F8FAF7;
  border-radius: 8px;
  padding: 16px;
  font-size: 13px;
  color: #52796F;
  margin-bottom: 24px;
}
```

---

### Navigation

#### Top Nav
```css
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background: white;
  border-bottom: 1px solid #E8E8E8;
}
.nav-logo {
  font-size: 20px;
  font-weight: 700;
  color: #1B4332;
}
.nav-links {
  display: flex;
  gap: 8px;
}
.nav-link {
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  color: #4A4A4A;
  border-radius: 6px;
  text-decoration: none;
}
.nav-link:hover {
  background: #F8FAF7;
  color: #1B4332;
}
.nav-link-active {
  background: #E8F5E9;
  color: #2D5016;
}
```

---

### Empty State

```css
.empty-state {
  text-align: center;
  padding: 48px 24px;
  color: #757575;
}
.empty-state-icon {
  font-size: 48px;
  margin-bottom: 16px;
  opacity: 0.5;
}
.empty-state-title {
  font-size: 18px;
  font-weight: 600;
  color: #4A4A4A;
  margin-bottom: 8px;
}
.empty-state-description {
  font-size: 14px;
  margin-bottom: 24px;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}
```

---

### Confidence Indicator (inline)

```css
.confidence-indicator {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  font-size: 12px;
}
.confidence-high {
  background: #E8F5E9;
  color: #2D5016;
}
.confidence-medium {
  background: #FFF8E1;
  color: #D4A017;
}
.confidence-low {
  background: #FFEBEE;
  color: #C1292E;
}
```

---

### To-Do List

```css
.todo-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
}
.todo-item:hover {
  background: #F8FAF7;
}
.todo-checkbox {
  width: 20px;
  height: 20px;
  border: 2px solid #D4D4D4;
  border-radius: 4px;
  flex-shrink: 0;
  margin-top: 2px;
}
.todo-checkbox-checked {
  background: #2D5016;
  border-color: #2D5016;
}
.todo-text {
  flex: 1;
}
.todo-text-done {
  text-decoration: line-through;
  color: #757575;
}
.todo-meta {
  font-size: 12px;
  color: #757575;
}
```

---

### File Upload Zone

```css
.upload-zone {
  border: 2px dashed #D4D4D4;
  border-radius: 12px;
  padding: 48px 24px;
  text-align: center;
  transition: all 0.2s;
  cursor: pointer;
}
.upload-zone:hover {
  border-color: #95D5B2;
  background: #F8FAF7;
}
.upload-zone-active {
  border-color: #2D5016;
  background: #E8F5E9;
}
.upload-zone-icon {
  font-size: 48px;
  margin-bottom: 16px;
  color: #95D5B2;
}
```

---

## Tailwind Config

If using Tailwind CSS:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        forest: {
          900: '#1B4332',
          700: '#2D5016',
          500: '#52796F',
          300: '#95D5B2',
          100: '#E8F5E9',
        },
        cream: '#F8FAF7',
        warning: '#D4A017',
        error: '#C1292E',
        info: '#1D4E89',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0,0,0,0.05)',
        'md': '0 4px 6px rgba(0,0,0,0.07)',
        'lg': '0 10px 15px rgba(0,0,0,0.1)',
        'xl': '0 20px 25px rgba(0,0,0,0.15)',
      },
    },
  },
}
```

---

## Icons

Use **Lucide React** (already familiar from ESG Passport):

```bash
npm install lucide-react
```

Key icons:
- `Package` — Materials
- `Tag` — Packaging
- `Zap` — Energy
- `Building2` — Infrastructure
- `Truck` — Transport
- `Users` — Workforce
- `Trash2` — Outputs/Waste
- `Globe` — External context
- `Wallet` — Financial context
- `CheckCircle2` — High confidence
- `AlertCircle` — Medium/Low confidence
- `Upload` — File upload
- `Download` — Export
- `FileText` — Document/Response
- `Settings` — Settings

---

## Animation

Keep it subtle:

```css
/* Default transition */
.transition-default {
  transition: all 0.2s ease;
}

/* Progress bar fill */
@keyframes progress-fill {
  from { width: 0; }
}
.progress-bar {
  animation: progress-fill 0.5s ease-out;
}

/* Milestone popup entrance */
@keyframes popup-enter {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.milestone-popup {
  animation: popup-enter 0.3s ease-out;
}

/* Subtle hover lift */
.hover-lift:hover {
  transform: translateY(-2px);
}
```

---

## Responsive Breakpoints

```css
/* Mobile first */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
```

**Grid layouts:**
- Mobile: Single column
- Tablet (md): 2 columns
- Desktop (lg): 3 columns for domain cards
- Wide (xl): Sidebar + main content

---

## Dark Mode

**Not MVP.** But if added later, use CSS variables:

```css
:root {
  --bg-primary: #FFFFFF;
  --bg-secondary: #F8FAF7;
  --text-primary: #1A1A1A;
  --border: #E8E8E8;
}

[data-theme="dark"] {
  --bg-primary: #1A1A1A;
  --bg-secondary: #2A2A2A;
  --text-primary: #F8FAF7;
  --border: #3A3A3A;
}
```

---

## Version History

| Date | Change |
|------|--------|
| January 27, 2026 | Initial design system |

---

*This document defines the visual language. Apply consistently across all screens.*
