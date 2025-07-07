# 🧩 Design Token Cheatsheet

## 📏 Spacing (padding / margin)
| Token | rem  | px  | Class Examples        |
|-------|------|-----|------------------------|
| xs    | 0.25 | 4px | `.p-xs`, `.mx-xs`      |
| sm    | 0.5  | 8px | `.py-sm`, `.m-sm`      |
| md    | 1    | 16px| `.p-md`, `.mb-md`      |
| lg    | 1.5  | 24px| `.px-lg`, `.my-lg`     |
| xl    | 2    | 32px| `.p-xl`, `.mt-xl`      |

---

## 🔠 Font Sizes
| Token | rem   | px   | Class Example   |
|-------|-------|------|-----------------|
| xs    | 0.75  | 12px | `.text-xs`      |
| sm    | 0.875 | 14px | `.text-sm`      |
| base  | 1     | 16px | `.text-base`    |
| lg    | 1.25  | 20px | `.text-lg`      |
| xl    | 1.5   | 24px | `.text-xl`      |
| 2xl   | 2     | 32px | `.text-2xl`     |

---

## 🧱 Border Radius
| Token | rem   | Class Example     | Usage Example |
|-------|-------|-------------------|---------------|
| none  | 0     | `.rounded-none`   | radius(none)  |
| sm    | 0.25  | `.rounded-sm`     | radius(sm)    |
| md    | 0.5   | `.rounded-md`     | radius(md)    |
| lg    | 1     | `.rounded-lg`     | radius(lg)    |

---

## 🕶 Shadows
| Token         | Value                     | Class Example         |
|---------------|---------------------------|------------------------|
| none          | none                      | `.shadow-none`        |
| sm            | subtle shadow             | `.shadow-sm`          |
| md            | medium soft shadow        | `.shadow-md`          |
| brutal        | 4px x 4px black offset    | `.shadow-brutal`      |
| brutal-heavy  | 6px x 6px black offset    | `.shadow-brutal-heavy`|

---

## 🎨 Colors
### 🍁 Autumn
| Token     | HEX       | Usage Example           |
|-----------|-----------|-------------------------|
| primary   | #8c0327 | `color: var(--color-primary)` |
| secondary | #264653 | —                       |
| accent    | #2a9d8f | —                       |
| neutral   | #f4f4f4 | —                       |
| content   | #222      | `color: var(--color-content)` |

---

## 🧠 Usage Examples

```html
<div class="p-md rounded-md shadow-brutal text-lg">
  Brutalist Box
</div>
