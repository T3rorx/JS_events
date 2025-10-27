# JavaScript Events Exercise

## Overview
This project demonstrates interactive JavaScript functionality using DOM manipulation and event handling with Bootstrap styling.

## Files
- `exo_events_dark.html` - Main HTML file with dark theme Bootstrap styling
- `script.js` - JavaScript file containing all interactive features

## Features Implemented

### 1. Footer Click Counter
- Click on footer displays "clique" in console
- Advanced version: displays "clic numéro x" with incrementing counter

### 2. Hamburger Menu Toggle
- Double-click on navbar hamburger button toggles the collapsible menu
- Uses `classList.toggle("collapse")` to show/hide menu

### 3. Card Text Color Change (First Card)
- Click "Edit" button on first card changes text color to red
- Irreversible change (until page reload)
- Uses `style.setProperty()` with `!important` to override Bootstrap styles

### 4. Card Text Color Toggle (Second Card)
- Click "Edit" button on second card toggles text color between green and normal
- Reversible functionality using if/else logic
- Demonstrates toggle pattern for style manipulation

### 5. Nuclear Mode (Bootstrap Disable)
- Double-click on navbar disables Bootstrap CSS
- Page displays without Bootstrap styling
- Reversible: double-click again to re-enable Bootstrap
- Uses `link.disabled` property to control CSS loading

## Technical Notes
- All features use `addEventListener` for event handling
- Bootstrap CSS conflicts resolved using `!important` declarations
- Proper DOM element selection using `querySelector` and `querySelectorAll`
- Event debugging with `console.log` statements

## Learning Objectives
- DOM manipulation and element selection
- Event handling and listeners
- CSS style manipulation via JavaScript
- Bootstrap integration and override techniques
- Debugging JavaScript functionality
