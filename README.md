# Detector

## Introduction

Lightweight plugin 3.5KB.

This is a plug-in that monitors whether web elements appear in the specified container.

❗️❗️Important reminder: It is based on the browser [Intersection Observer API](https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API).

It can detect the display and hiding of elements (enter the container visual area, exit the container visual area).

Some requirements are to perform animation when one or some elements enter the visible area of the specified container, so for such requirements, this plug-in is sufficient for you.

Support TS, comes with type declaration file.✅

## Code Repository

[https://github.com/Anunnakill/Detector](https://github.com/Anunnakill/Detector)

## Installation

### npm

```bash
npm i --save web-element-detector
```

### yarn

```bash
yarn add web-element-detector
```

## Usage

### ES6

```javascript
import Observer from "web-element-detector";
```

```html
<div class="item" data-status="hidden" />

<div class="item" data-status="hidden" data-animate="animate1" />

<div class="item" data-status="hidden" data-animate="animate2" />

<div class="item" data-status="hidden" data-animate3="animate3" />

<div class="item" data-status="hidden" data-animate4="animate4" />

<!-- data-status="hidden": -->
<!-- Element default initialization state, data-status and hidden cannot be changed, it is fixed and needs to be used during detection and cannot be changed. -->
<!-- When the element appears, the status will become data-status="visible". -->

<!-- data-animate="animate": -->
<!-- The style of the element when it appears. -->
<!-- data-animate and animate can be customized and changed. -->
```

```css
/* Element initial state */
*[data-status="hidden"] {
  opacity: 0;
}

/* Element display status */
*[data-status="visible"] {
  opacity: 0.3;
}

*[data-status="visible"][data-animate="animate1"] {
  opacity: 0.5;
}

*[data-status="visible"][data-animate="animate2"] {
  opacity: 0.7;
}

div[data-status="visible"][data-animate3="animate3"] {
  opacity: 0.9;
}

.item[data-status="visible"][data-animate4="animate4"] {
  opacity: 1;
}
```

```javascript
Observer({
  eles: document.querySelectorAll(".item"),
  // ...options
});

// The eles field is a collection of element dom nodes, Is the collection of elements to be monitored.
// If there is only one monitored element, it must be placed in an array.
// E.g: [document.querySelector(".item")].
Observer({
  eles: [document.querySelector(".item")],
  // ...options
});

// Other options are from Intersection Observer API.
```

### Based on

[Intersection Observer API](https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API).
