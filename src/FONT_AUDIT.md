# Font Usage Audit for Sela Chat Pages

## Brand Guidelines
- **Headings (H1-H4)**: Fontspring Demo - Use `.text-h1`, `.text-h2`, `.text-h3`, `.text-subheader`
- **Body Text**: Neue Haas Grotesk - Use `.text-body`, `.text-body-small`
- **Functional Elements** (buttons, labels, badges, monospace text): IBM Plex Mono - Use `.text-mono`, `.text-mono-small`, `.text-button-label`

## Current Issues
All chat pages are using inline font declarations like `font-['IBM_Plex_Mono',_monospace]` instead of the utility classes defined in globals.css.

## Files to Update
1. `/components/AIChatInterface.tsx` - Uses text-h2, text-h3, text-body, text-subheader, text-mono, text-button-label (GOOD - already using utility classes)
2. `/components/HealthProfilePage.tsx` - Need to audit
3. `/components/MyCarePlansPage.tsx` - Uses inline font declarations (NEEDS FIX)
4. `/components/MyProvidersPage.tsx` - Need to audit

## Action Plan
Replace all inline font declarations with appropriate utility classes:
- Headings → `.text-h2`, `.text-h3`, `.text-subheader`
- Body text → `.text-body` or `.text-body-small`
- Buttons, badges, labels → `.text-button-label` or `.text-mono` or `.text-mono-small`
