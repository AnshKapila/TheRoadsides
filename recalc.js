const { execSync } = require('child_process');

function hexToRgb(h) {
  h = h.replace('#', '');
  if (h.length === 3) h = h.split('').map(c => c+c).join('');
  return [parseInt(h.substring(0,2), 16), parseInt(h.substring(2,4), 16), parseInt(h.substring(4,6), 16)];
}

function luminance(r, g, b) {
  let a = [r, g, b].map(function (v) {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow( (v + 0.055) / 1.055, 2.4 );
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function contrast(rgb1, rgb2) {
  let lum1 = luminance(rgb1[0], rgb1[1], rgb1[2]);
  let lum2 = luminance(rgb2[0], rgb2[1], rgb2[2]);
  let brightest = Math.max(lum1, lum2);
  let darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

function rgbToHsl(r, g, b){
  r /= 255, g /= 255, b /= 255;
  let max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  if(max == min){
      h = s = 0;
  }else{
      let d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch(max){
          case r: h = (g - b) / d + (g < b ? 6 : 0); break;
          case g: h = (b - r) / d + 2; break;
          case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
  }
  return [h, s, l];
}

function hslToRgb(h, s, l){
  let r, g, b;
  if(s == 0){
      r = g = b = l;
  }else{
      const hue2rgb = function hue2rgb(p, q, t){
          if(t < 0) t += 1;
          if(t > 1) t -= 1;
          if(t < 1/6) return p + (q - p) * 6 * t;
          if(t < 1/2) return q;
          if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
          return p;
      }
      let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      let p = 2 * l - q;
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
  }
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function rgbToHex(r, g, b) {
  return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1).toUpperCase();
}

function findAccessibleLightness(baseHex, darkBgHex, targetRatio) {
  let rgb = hexToRgb(baseHex);
  let bgRgb = hexToRgb(darkBgHex);
  let [h, s, l] = rgbToHsl(rgb[0], rgb[1], rgb[2]);
  
  for (let newL = l; newL <= 1.0; newL += 0.01) {
    let newRgb = hslToRgb(h, s, newL);
    let ratio = contrast(newRgb, bgRgb);
    if (ratio >= targetRatio) {
      return { hex: rgbToHex(...newRgb), ratio: ratio.toFixed(2) };
    }
  }
  return { hex: "#FFFFFF", ratio: contrast(hexToRgb("#FFFFFF"), bgRgb).toFixed(2) };
}

let charcoal = "#25231F";
let orange = "#96432E"; // REAL base from globals.css

let orangeOnDark = findAccessibleLightness(orange, charcoal, 4.5);

console.log("REAL Orange On Dark:", orangeOnDark.hex, "Contrast against Charcoal:", orangeOnDark.ratio);
