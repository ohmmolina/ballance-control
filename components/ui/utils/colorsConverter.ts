type RGB = {
  r: number;
  g: number;
  b: number;
}
function hexToRgb(hex: string) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  // { r: 255, g: 255, b: 255} or null
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}
function rgbToHex(rgb: RGB | string): string | null {
  if (!rgb) return null;
  if (typeof rgb === "object") {
    // #ffffff
    return "#" + ((1 << 24) | (rgb.r << 16) | (rgb.g << 8) | rgb.b).toString(16).slice(1);
  } else if (typeof rgb === "string") {
    // [255, 255, 255]
    const match = rgb.match(/\d+/g);
    if (!match) return null;
    const rgbObj = {
      r: parseInt(match[0]),
      g: parseInt(match[1]),
      b: parseInt(match[2]),
    }
    return rgbToHex(rgbObj);
  }
  return null;
}
function tints(hex: string, n = 5): string[] | null {
  const rgb = hexToRgb(hex);
  if(!rgb) return null;
  const tints = [];
  for (let i = 1; i <= n; i++) {
    const tint =
      rgbToHex({
        r: Math.round(rgb.r + (255 - rgb.r) * i * 0.1),
        g: Math.round(rgb.g + (255 - rgb.g) * i * 0.1),
        b: Math.round(rgb.b + (255 - rgb.b) * i * 0.1),
      })
    if(tint) tints.push(tint);
  }
  return tints;
}
function shades(hex: string, n = 5): string[] | null {
  const rgb = hexToRgb(hex);
  if (!rgb) return null;
  const shades = [];
  for (let i = 1; i <= n; i++) {
    const shade =
      rgbToHex({
        r: Math.round(rgb.r * (1 - 0.1 * i)),
        g: Math.round(rgb.g * (1 - 0.1 * i)),
        b: Math.round(rgb.b * (1 - 0.1 * i)),
      })
    if(shade) shades.push(shade);
  }
  return shades;
}
export default function colorToTalwind(color: string): Record<string, string> | null {
  if(!color) return null;
  if(color.startsWith('rgb')) {
    const hex = rgbToHex(color);
    if (!hex) return null;
    color = hex;
  }
  const colorTints: string[] | null = tints(color);
  const colorShades: string[] | null = shades(color);
  if(!colorTints || !colorShades) return null;
  return {
     50: colorTints[4],
    100: colorTints[3],
    200: colorTints[2],
    300: colorTints[1],
    400: colorTints[0],
    500: color,
    600: colorShades[0],
    700: colorShades[1],
    800: colorShades[2],
    900: colorShades[4],
  }
}

// Button.vue
// const replaceForCustomColor = (c = color): string[] => {
//   if (!c) return ["blue"];
//   const replaceColors: Record<number, string> | string | undefined = convertColor(c) ?? c
//   if (!replaceColors || typeof replaceColors === 'string') return [c];

//   const classes = variants[variant].map((classString) => {
//     const number: RegExpMatchArray | null = classString.match(/\d+/g);
//     if (!number) return '';
//     const color = replaceColors[parseInt(number[0])];
//     return String(classString.replace(/(blue)-\w+/g, `[${color}]`));
//   });
//   return classes
// };
// const btnClasses = computed(() => {
//   const returnedClass = [roundedClass.value];
//   if (color && (color.startsWith("#") || color.startsWith("rgb"))) {
//     returnedClass.push(
//       ...replaceForCustomColor()
//     );
//   } else {
//     returnedClass.push(...variants[variant].map(c=>c.replace('blue', color ?? 'blue')));
//   }
//   return returnedClass;
// });