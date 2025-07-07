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
|---------------|---------------------------|-----------------------|
| none          | none                      | `.shadow-none`        |
| sm            | subtle shadow             | `.shadow-sm`          |
| md            | medium soft shadow        | `.shadow-md`          |
| brutal        | 4px x 4px black offset    | `.shadow-brutal`      |
| brutal-heavy  | 6px x 6px black offset    | `.shadow-brutal-heavy`|

---

## 🎨 Colors
### 🍁 Autumn
|------------------------------------------------------------------|
| Token              | Approx. HEX   | CSS Variable                |
|--------------------|---------------|-----------------------------|
| base-100           | #f5f5f4     | `--color-base-100`          |
| base-200           | #e3e3e3     | `--color-base-200`          |
| base-300           | #d2d2d2     | `--color-base-300`          |
| base-content       | #313131     | `--color-base-content`      |
| primary            | #8c0327     | `--color-primary`           |
| primary-content    | #f2e6e9     | `--color-primary-content`   |
| secondary          | #a2553d     | `--color-secondary`         |
| secondary-content  | #201f1f     | `--color-secondary-content` |
| accent             | #8be1c5     | `--color-accent`            |
| accent-content     | #242321     | `--color-accent-content`    |
| neutral            | #888785     | `--color-neutral`           |
| neutral-content    | #e8e6e5     | `--color-neural-content`    |
| info               | #7ec3e9     | `--color-info`              |
| info-content       | #222325     | `--color-info`              |
| success            | #54c7ae     | `--color-success`           |
| success-content    | #1f2221     | `--color-success-content`   |
| warning            | #f5c06e     | `--color-warning`           |
| warning-content    | #232220     | `--color-warning-content`   |
| error              | #ce3b1e     | `--color-error`             |
| error-content      | #e7e2e1     | `--color-error-content`     |
|------------------------------------------------------------------|

---

## 🧠 Usage Examples

```html
<div class="p-md rounded-md shadow-brutal text-lg">
  Brutalist Box
</div>
