# SkipList App — Development Process

## Overview

I didn’t start coding right away. I grabbed a pen and started sketching.

For me, it’s not about jumping in fast — I like to take a step back and think things through. I wasn’t just trying to pass a test — I wanted to show how I approach building things: with **simplicity and structure** in mind.

I began by sketching how the app would flow — rough mockups, layout ideas — just enough to think through the UI and how users would interact with it.

Once I had a basic visual layout, I broke it down into its component hierarchy:

- A list of `SkipCard` components
- A `SelectedSkip` side panel
- Sorting and filtering controls in the `SkipList` component

This helped me plan the **data flow** and **state ownership** early.

---

## Step 1: Static UI + Data Shape

I started with a **static version** — no logic, just structure. This helped me define the data requirements early:

- `SkipCards` needed:
  - Name
  - Image
  - Price
  - Additional info
- `SelectedSkip` side panel needed:
  - Quantity adjustment functionality

I mocked out sample data and passed it through the component hierarchy, keeping things simple and easy to test.

---

## Step 2: State Management + Context

Once the layout was working, I identified which parts of the app required state and how state would be shared.

- Some state (like the selected product) needed to be accessed across components.
- To avoid **prop drilling**, I used **React Context** for the selected product.
- I placed context providers high in the component tree so that any component that needed access could get it.

---

## Step 3: Interactivity

Next, I wired up core interactions:

- Clicking a `SkipCard`:
  - Updates the selected product in context
  - Triggers the `SelectedSkip` side panel to appear
- The side panel:
  - Lets users adjust quantity
  - Proceeds to the next screen
- Implemented sorting in the `SkipList` component

### Common Issues Encountered

####  Side Panel Problem

Initially, the side panel was just another component in the layout. But it caused layout issues:

- `z-index` stacking problems
- Scroll bugs
- It wasn’t really "detached" from the rest of the page

**Fix:**  
I used **React Portals** to render the panel outside the normal DOM hierarchy. This gave me more control over layout and positioning, and fixed most layout quirks.

#### Weird Dropdown Bug

I used **Headless UI** for dropdowns, which mostly worked — except:

- When the sort dropdown opened, the page width would randomly expand.
- Cause: Headless UI added extra padding to the page.

**Fix:**  
I disabled the extra padding added by Headless UI when the dropdown opened.

---

## Step 4: Real Data + Mobile Support

Once the main pieces were functional:

- I connected the app to real data via API requests.
- Added loading states and error handling with fallbacks.
- Implemented **mobile-first design** using Tailwind CSS.
- Manually tested breakpoints for responsiveness.

---

## Summary

This project wasn't just about building a UI. It was about showcasing how I:

- Plan before jumping into code
- Focus on clean structure and simplicity
- Solve layout and state management problems
- Prioritize UX and responsiveness
