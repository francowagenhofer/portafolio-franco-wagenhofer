// ******************************* //
// Configuracion de backgraounds
// ******************************* //

// *********************************************************************************** //
// Background oscuro

// export const darkThemeConfig = {
//   colors: [
//     { color: "#552626", enabled: true },
//     { color: "#03162D", enabled: true },
//     { color: "#002027", enabled: true },
//     { color: "#020210", enabled: true },
//     { color: "#02152A", enabled: true },
//   ],
//   speed: 1.5,
//   horizontalPressure: 3,
//   verticalPressure: 5,
//   waveFrequencyX: 1,
//   waveFrequencyY: 3,
//   waveAmplitude: 12,
//   shadows: 0,
//   highlights: 2,
//   colorBrightness: 1,
//   colorSaturation: 6,
//   wireframe: false,
//   colorBlending: 7,
//   // backgroundColor: "#003FFF",
//   backgroundColor: "#000000ff",
//   backgroundAlpha: 1,
//   grainScale: 2,
//   grainSparsity: 0,
//   grainIntensity: 0.2,
//   grainSpeed: 1,
//   resolution: 1,
//   yOffset: 0,
// };

export const darkThemeConfig = {
  colors: [
    { color: "#1A1C20", enabled: true }, // gris muy oscuro base
    { color: "#22252B", enabled: true }, // gris azulado profundo
    { color: "#2B2E34", enabled: true }, // gris medio frío
    { color: "#2E3240", enabled: true }, // gris con tinte azul violáceo
    { color: "#1E222C", enabled: true }, // azul negruzco
  ],

  speed: 1,
  horizontalPressure: 3,
  verticalPressure: 5,
  waveFrequencyX: 1,
  waveFrequencyY: 3,
  waveAmplitude: 12,
  shadows: 0,
  highlights: 1.4,
  colorBrightness: 0.88,
  colorSaturation: 2,
  wireframe: false,
  colorBlending: 7,
  backgroundColor: "#141516", // Negro aterciopelado base
  backgroundAlpha: 1,
  grainScale: 2,
  grainSparsity: 0,
  grainIntensity: 0.12,
  grainSpeed: 1,
  resolution: 1,
  yOffset: 0,
};

// *************************************************************************************************** //
// Backgorund claro


// 111111111111111111
// export const lightThemeConfig = {
//   colors: [

//   { color: "#FDFDFC", enabled: true }, // Blanco cálido neutro
//   { color: "#F5F3EF", enabled: true }, // Gris perla muy claro
//   { color: "#E9E4DA", enabled: true }, // Beige grisáceo suave (tono elegante)
//   { color: "#D9CBB8", enabled: true }, // Arena clara con matiz miel tenue
//   { color: "#C9B8A4", enabled: true }, // Gris cálido tostado (aporta contraste sutil)
//   ],
//   speed: 1.5,
//   horizontalPressure: 3,
//   verticalPressure: 5,
//   waveFrequencyX: 1,
//   waveFrequencyY: 3,
//   waveAmplitude: 12,
//   shadows: 0,
//   highlights: 2,
//   colorBrightness: 1,
//   colorSaturation: 6,
//   wireframe: false,
//   colorBlending: 7,
//   backgroundColor: "#000000ff",
//   backgroundAlpha: 1,
//   grainScale: 2,
//   grainSparsity: 0,
//   grainIntensity: 0.2,
//   grainSpeed: 1,
//   resolution: 1,
//   yOffset: 0,
// };


// 22222222222222222
// export const lightThemeConfig = {
//   colors: [
//     { color: "#FFFFFF", enabled: true },
//     { color: "#EFE2CE", enabled: true },
//     {
//       color: "#D5ECEB",
//       enabled: true,
//     },
//     {
//       color: "#E4E4E4",
//       enabled: true,
//     },
//     {
//       color: "#F6FFFF",
//       enabled: true,
//     },
//   ],
//   speed: 2,
//   horizontalPressure: 4,
//   verticalPressure: 5,
//   waveFrequencyX: 4,
//   waveFrequencyY: 3,
//   waveAmplitude: 2,
//   shadows: 4,
//   highlights: 7,
//   colorBrightness: 1,
//   colorSaturation: 0,
//   // colorSaturation: 2,
//   wireframe: false,
//   colorBlending: 7,
//   backgroundColor: "#00A2FF",
//   backgroundAlpha: 1,
//   grainScale: 100,
//   grainSparsity: 0,
//   grainIntensity: 0.05,
//   grainSpeed: 0.3,
//   resolution: 0.5,
//   yOffset: 0,
// };


// 333333333333333333333333
// export const lightThemeConfig = {
//   colors: [
//     {
//       color: '#FFFFFF', // blanco puro
//       enabled: true,
//     },
//     {
//       color: '#FBF9F5', // beige muy muy claro
//       enabled: true,
//     },
//     {
//       color: '#EEE9E0', // gris topo claro
//       enabled: true,
//     },
//     {
//       color: '#E3DCC8', // marrón-beige suave
//       enabled: true,
//     },
//     {
//       color: '#DAD1B3', // miel grisácea muy suave
//       enabled: true,
//     },
//   ],
//   speed: 1.5,
//   horizontalPressure: 5,
//   verticalPressure: 7,
//   waveFrequencyX: 2,
//   waveFrequencyY: 2,
//   waveAmplitude: 8,
//   shadows: 5,
//   highlights: 8,
//   colorBrightness: 1,
//   colorSaturation: 4, // tonos más suaves
//   wireframe: false,
//   colorBlending: 12,
//   backgroundColor: '#FCFAF5', // base beige casi blanca
//   backgroundAlpha: 1,
//   grainScale: 3,
//   grainSparsity: 0,
//   grainIntensity: 0.15, // más sutil todavía
//   grainSpeed: 1,
//   resolution: 0.05,
//   yOffset: 0,
// };


// // 44444444444444444444444444444
export const lightThemeConfig = {
  colors: [
    { color: "#FFFFFF", enabled: true },      
    { color: "#FDF9F3", enabled: true },       
    { color: "#E9E4DA", enabled: true },       
    { color: "#FFFFFF", enabled: true },      
    { color: "#FDF9F3", enabled: true },          
    // { color: "#7b705f69", enabled: true },          
    // { color: "#f6e2c1ff", enabled: true }, 

  ],
  speed: 5,
  horizontalPressure: 7,
  verticalPressure: 8,
  waveFrequencyX: 2,
  waveFrequencyY: 1,
  waveAmplitude: 8,
  shadows: 4,
  highlights: 6,
  colorBrightness: 0.95,
  colorSaturation: 2,      // tonos suaves, no tan saturados
  wireframe: false,
  colorBlending: 10,
  backgroundColor: "#FDF9F3", // beige muy claro de base
  backgroundAlpha: 1,
  grainScale: 4,
  grainSparsity: 0,
  grainIntensity: 0.25,
  grainSpeed: 1,
  resolution: 1,
  yOffset: 0,
};