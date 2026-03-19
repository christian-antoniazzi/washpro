# Design System Specification: Midnight Pro Evolution

## 1. Overview & Creative North Star
The Creative North Star for this system is **"The Kinetic Obsidian."** 

We are moving away from the static, "boxed-in" nature of traditional enterprise dashboards toward an editorial, immersive experience. This system treats the interface not as a grid of containers, but as a fluid landscape of light and shadow. By utilizing the deep slate tones of the background against the vibrant Teal accents, we create a high-contrast, premium environment that feels both authoritative and cutting-edge. 

To break the "template" look, designers must embrace **Intentional Asymmetry**. Large display typography should be used to anchor layouts, while components float with generous white space (utilizing our `16` and `24` spacing tokens) to create a sense of breathing room typically reserved for high-end physical architecture.

---

## 2. Colors & Surface Philosophy
The palette is rooted in deep, cool-toned neutrals to reduce eye strain while allowing the Teal accent to "pop" with neon-like precision.

*   **Primary Background:** `surface` (#0b1326) — The foundation of the experience.
*   **Secondary Surfaces:** `surface_container_lowest` (#060e20) for deep recesses, and `surface_container_highest` (#2d3449) for prominent interactive cards.
*   **Accents:** `primary` (#57f1db) and `primary_container` (#2dd4bf). These are reserved for high-intent actions only.

### The "No-Line" Rule
**Explicit Instruction:** You are prohibited from using 1px solid borders to define sections. Layout boundaries must be achieved through:
1.  **Tonal Shifts:** Placing a `surface_container_low` card against a `surface` background.
2.  **Negative Space:** Using the `8` (2rem) or `10` (2.5rem) spacing tokens to create perceived groupings.

### The Glass & Gradient Rule
To achieve a "Midnight Pro" feel, floating elements (modals, dropdowns) should use `surface_bright` with a 60% opacity and a `backdrop-blur` of 20px. This creates a "frosted obsidian" effect that maintains context of the layers beneath. Use a subtle linear gradient (Top-Left to Bottom-Right) on `primary` buttons, transitioning from `#57f1db` to `#2dd4bf` to add dimension.

---

## 3. Typography: The Editorial Voice
We use **Manrope** exclusively. Its geometric yet slightly condensed nature provides a technical but approachable feel.

*   **Display (lg/md):** Use for hero moments and data highlights. These should be set with a `-0.02em` letter-spacing to feel "tight" and custom.
*   **Headline (lg/md):** The primary navigational anchor. Always use `on_surface` (#dae2fd) to ensure maximum readability against the dark void.
*   **Body (lg/md):** For long-form content, use `on_surface_variant` (#bacac5). This reduction in contrast prevents "text vibration" on dark backgrounds.
*   **Labels:** Always uppercase with `+0.05em` letter-spacing when used for overlines or small UI metadata.

---

## 4. Elevation & Depth: Tonal Layering
Depth in this system is a measure of light, not shadows.

*   **The Layering Principle:** 
    *   **Level 0 (Base):** `surface` (#0b1326)
    *   **Level 1 (Sectioning):** `surface_container_low` (#131b2e)
    *   **Level 2 (Cards/Interaction):** `surface_container` (#171f33)
*   **Ambient Shadows:** If an element must float (e.g., a Toast notification), use a shadow: `0px 24px 48px rgba(0, 0, 0, 0.5)`. Never use pure black shadows; ensure the shadow has a hint of the background's navy hue to feel natural.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility in input fields, use `outline_variant` (#3c4a46) at **20% opacity**. It should be felt, not seen.

---

## 5. Components

### Buttons
*   **Primary:** Background: `primary_container` (#2dd4bf); Text: `on_primary` (#003731). Shape: `full` (9999px) for a high-end "pill" look.
*   **Secondary:** Background: `surface_container_highest`; Text: `primary`. 
*   **Tertiary:** No background. Text: `primary`. Use for low-emphasis actions like "Cancel" or "Learn More."

### Input Fields
*   **Style:** Background: `surface_container_low`. Shape: `DEFAULT` (1rem). 
*   **State:** On focus, the border transitions from 0% opacity to 100% `primary` with a subtle outer glow (4px blur).

### Cards & Lists
*   **Card Anatomy:** Use `surface_container` with a `lg` (2rem) corner radius. 
*   **Lists:** **Forbidden:** Divider lines. 
*   **Alternative:** Use a 4px vertical gap between list items, giving each item a slightly different background tone (`surface_container_low` vs `surface_container`) on hover to indicate interactivity.

### Chips
*   **Selection:** Use `secondary_container` with `on_secondary_container` text. These should be highly rounded (`full`) to contrast against the more structured card shapes.

---

## 6. Do’s and Don’ts

### Do:
*   **Use Asymmetric Margins:** For example, give a headline a `16` (4rem) left margin but keep the body text at `10` (2.5rem) to create an editorial "indent" look.
*   **Embrace the Teal:** Use the `primary` color for micro-interactions, like a 2px tall progress bar or a small dot next to an active notification.
*   **High Roundness:** Ensure all interactive elements use at least the `DEFAULT` (1rem) radius. Sharp corners are forbidden in this system.

### Don’t:
*   **Don't use pure white:** Never use `#FFFFFF`. It is too harsh. Always use `on_background` (#dae2fd) or `primary_text` (#F8FAFC).
*   **Don't stack cards on cards:** If you need a container inside a container, change the background tone (e.g., from `surface_container` to `surface_container_high`). Do not use a border.
*   **Don't crowd the UI:** If a screen feels busy, increase the spacing token by one level (e.g., move from `8` to `10`). Silence is a feature.