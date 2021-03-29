// We need to know where the script tag of this file is in the dom
var allScriptTags = document.documentElement.getElementsByTagName( 'script' );
var scriptTag_7ee09c29477e936d36c97691745b073c204d1a52 = false;
scriptTag_7ee09c29477e936d36c97691745b073c204d1a52 = allScriptTags[allScriptTags.length - 1];
// scriptTag is now the last added script, so it should be ours.

// Data section *start*
var polygones_7ee09c29477e936d36c97691745b073c204d1a52 = [
{ "points": [ { "x": -43.87, "y": -112.71, "z": 67.62 }, { "x": -24.17, "y": -82.06, "z": 84.15 }, { "x": -47.65, "y": -56.35, "z": 64.45 }, { "x": -67.34, "y": -87.00, "z": 47.93 } ], "colors": [ { "r": 163, "g": 29, "b": 10, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -24.17, "y": -82.06, "z": 84.15 }, { "x": -43.87, "y": -112.71, "z": 67.62 }, { "x": -18.16, "y": -112.71, "z": 36.98 }, { "x": 1.54, "y": -82.06, "z": 53.51 } ], "colors": [ { "r": 197, "g": 117, "b": 41, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -47.65, "y": -56.35, "z": 64.45 }, { "x": -24.17, "y": -82.06, "z": 84.15 }, { "x": 1.54, "y": -82.06, "z": 53.51 }, { "x": -21.93, "y": -56.35, "z": 33.81 } ], "colors": [ { "r": 118, "g": 59, "b": 21, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -55.20, "y": 56.35, "z": 58.11 }, { "x": -35.50, "y": 87.00, "z": 74.64 }, { "x": -58.98, "y": 112.71, "z": 54.95 }, { "x": -78.67, "y": 82.06, "z": 38.42 } ], "colors": [ { "r": 139, "g": 30, "b": 11, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -35.50, "y": 87.00, "z": 74.64 }, { "x": -55.20, "y": 56.35, "z": 58.11 }, { "x": -29.49, "y": 56.35, "z": 27.47 }, { "x": -9.79, "y": 87.00, "z": 44.00 } ], "colors": [ { "r": 157, "g": 77, "b": 27, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -58.98, "y": 112.71, "z": 54.95 }, { "x": -35.50, "y": 87.00, "z": 74.64 }, { "x": -9.79, "y": 87.00, "z": 44.00 }, { "x": -33.27, "y": 112.71, "z": 24.30 } ], "colors": [ { "r": 193, "g": 100, "b": 35, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -43.87, "y": -112.71, "z": 67.62 }, { "x": -67.34, "y": -87.00, "z": 47.93 }, { "x": -41.63, "y": -87.00, "z": 17.28 }, { "x": -18.16, "y": -112.71, "z": 36.98 } ], "colors": [ { "r": 98, "g": 50, "b": 18, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -47.65, "y": -56.35, "z": 64.45 }, { "x": -21.93, "y": -56.35, "z": 33.81 }, { "x": -41.63, "y": -87.00, "z": 17.28 }, { "x": -67.34, "y": -87.00, "z": 47.93 } ], "colors": [ { "r": 197, "g": 112, "b": 40, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -79.08, "y": -74.14, "z": 38.08 }, { "x": -59.38, "y": -43.50, "z": 54.60 }, { "x": -82.86, "y": -17.79, "z": 34.91 }, { "x": -102.55, "y": -48.43, "z": 18.38 } ], "colors": [ { "r": 160, "g": 33, "b": 12, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -41.63, "y": -87.00, "z": 17.28 }, { "x": -21.93, "y": -56.35, "z": 33.81 }, { "x": 1.54, "y": -82.06, "z": 53.51 }, { "x": -18.16, "y": -112.71, "z": 36.98 } ], "colors": [ { "r": 146, "g": 19, "b": 7, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -55.20, "y": 56.35, "z": 58.11 }, { "x": -78.67, "y": 82.06, "z": 38.42 }, { "x": -52.96, "y": 82.06, "z": 7.78 }, { "x": -29.49, "y": 56.35, "z": 27.47 } ], "colors": [ { "r": 178, "g": 93, "b": 33, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -84.74, "y": 10.39, "z": 33.32 }, { "x": -65.05, "y": 41.03, "z": 49.85 }, { "x": -88.52, "y": 66.74, "z": 30.15 }, { "x": -108.22, "y": 36.10, "z": 13.63 } ], "colors": [ { "r": 149, "g": 33, "b": 12, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -58.98, "y": 112.71, "z": 54.95 }, { "x": -33.27, "y": 112.71, "z": 24.30 }, { "x": -52.96, "y": 82.06, "z": 7.78 }, { "x": -78.67, "y": 82.06, "z": 38.42 } ], "colors": [ { "r": 151, "g": 68, "b": 24, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -59.38, "y": -43.50, "z": 54.60 }, { "x": -79.08, "y": -74.14, "z": 38.08 }, { "x": -53.37, "y": -74.14, "z": 7.44 }, { "x": -33.67, "y": -43.50, "z": 23.96 } ], "colors": [ { "r": 196, "g": 109, "b": 39, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -82.86, "y": -17.79, "z": 34.91 }, { "x": -59.38, "y": -43.50, "z": 54.60 }, { "x": -33.67, "y": -43.50, "z": 23.96 }, { "x": -57.14, "y": -17.79, "z": 4.27 } ], "colors": [ { "r": 128, "g": 67, "b": 24, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -65.05, "y": 41.03, "z": 49.85 }, { "x": -84.74, "y": 10.39, "z": 33.32 }, { "x": -59.03, "y": 10.39, "z": 2.68 }, { "x": -39.34, "y": 41.03, "z": 19.21 } ], "colors": [ { "r": 173, "g": 87, "b": 31, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -52.96, "y": 82.06, "z": 7.78 }, { "x": -33.27, "y": 112.71, "z": 24.30 }, { "x": -9.79, "y": 87.00, "z": 44.00 }, { "x": -29.49, "y": 56.35, "z": 27.47 } ], "colors": [ { "r": 120, "g": 20, "b": 7, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -88.52, "y": 66.74, "z": 30.15 }, { "x": -65.05, "y": 41.03, "z": 49.85 }, { "x": -39.34, "y": 41.03, "z": 19.21 }, { "x": -62.81, "y": 66.74, "z": -0.49 } ], "colors": [ { "r": 169, "g": 90, "b": 32, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": 92.35, "y": -20.78, "z": 25.28 }, { "x": 112.05, "y": 9.86, "z": 41.80 }, { "x": 88.58, "y": 35.57, "z": 22.11 }, { "x": 68.88, "y": 4.93, "z": 5.58 } ], "colors": [ { "r": 94, "g": 1, "b": 0, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -5.30, "y": -112.71, "z": 21.66 }, { "x": 14.39, "y": -82.06, "z": 38.19 }, { "x": -9.08, "y": -56.35, "z": 18.49 }, { "x": -28.78, "y": -87.00, "z": 1.96 } ], "colors": [ { "r": 137, "g": 14, "b": 5, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": 112.05, "y": 9.86, "z": 41.80 }, { "x": 92.35, "y": -20.78, "z": 25.28 }, { "x": 118.07, "y": -20.78, "z": -5.36 }, { "x": 137.76, "y": 9.86, "z": 11.16 } ], "colors": [ { "r": 173, "g": 98, "b": 35, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": 88.58, "y": 35.57, "z": 22.11 }, { "x": 112.05, "y": 9.86, "z": 41.80 }, { "x": 137.76, "y": 9.86, "z": 11.16 }, { "x": 114.29, "y": 35.57, "z": -8.53 } ], "colors": [ { "r": 184, "g": 83, "b": 29, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": 14.39, "y": -82.06, "z": 38.19 }, { "x": -5.30, "y": -112.71, "z": 21.66 }, { "x": 20.41, "y": -112.71, "z": -8.98 }, { "x": 40.11, "y": -82.06, "z": 7.54 } ], "colors": [ { "r": 205, "g": 121, "b": 43, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -9.08, "y": -56.35, "z": 18.49 }, { "x": 14.39, "y": -82.06, "z": 38.19 }, { "x": 40.11, "y": -82.06, "z": 7.54 }, { "x": 16.63, "y": -56.35, "z": -12.15 } ], "colors": [ { "r": 124, "g": 60, "b": 21, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -79.08, "y": -74.14, "z": 38.08 }, { "x": -102.55, "y": -48.43, "z": 18.38 }, { "x": -76.84, "y": -48.43, "z": -12.26 }, { "x": -53.37, "y": -74.14, "z": 7.44 } ], "colors": [ { "r": 107, "g": 57, "b": 20, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -82.86, "y": -17.79, "z": 34.91 }, { "x": -57.14, "y": -17.79, "z": 4.27 }, { "x": -76.84, "y": -48.43, "z": -12.26 }, { "x": -102.55, "y": -48.43, "z": 18.38 } ], "colors": [ { "r": 194, "g": 102, "b": 36, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -16.63, "y": 56.35, "z": 12.15 }, { "x": 3.06, "y": 87.00, "z": 28.68 }, { "x": -20.41, "y": 112.71, "z": 8.98 }, { "x": -40.11, "y": 82.06, "z": -7.54 } ], "colors": [ { "r": 110, "g": 15, "b": 5, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -84.74, "y": 10.39, "z": 33.32 }, { "x": -108.22, "y": 36.10, "z": 13.63 }, { "x": -82.51, "y": 36.10, "z": -17.01 }, { "x": -59.03, "y": 10.39, "z": 2.68 } ], "colors": [ { "r": 151, "g": 81, "b": 29, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -114.29, "y": -35.57, "z": 8.53 }, { "x": -94.59, "y": -4.93, "z": 25.06 }, { "x": -118.07, "y": 20.78, "z": 5.36 }, { "x": -137.76, "y": -9.86, "z": -11.16 } ], "colors": [ { "r": 159, "g": 37, "b": 13, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -88.52, "y": 66.74, "z": 30.15 }, { "x": -62.81, "y": 66.74, "z": -0.49 }, { "x": -82.51, "y": 36.10, "z": -17.01 }, { "x": -108.22, "y": 36.10, "z": 13.63 } ], "colors": [ { "r": 167, "g": 78, "b": 28, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -76.84, "y": -48.43, "z": -12.26 }, { "x": -57.14, "y": -17.79, "z": 4.27 }, { "x": -33.67, "y": -43.50, "z": 23.96 }, { "x": -53.37, "y": -74.14, "z": 7.44 } ], "colors": [ { "r": 141, "g": 22, "b": 8, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": 3.06, "y": 87.00, "z": 28.68 }, { "x": -16.63, "y": 56.35, "z": 12.15 }, { "x": 9.08, "y": 56.35, "z": -18.49 }, { "x": 28.78, "y": 87.00, "z": -1.96 } ], "colors": [ { "r": 163, "g": 79, "b": 28, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -20.41, "y": 112.71, "z": 8.98 }, { "x": 3.06, "y": 87.00, "z": 28.68 }, { "x": 28.78, "y": 87.00, "z": -1.96 }, { "x": 5.30, "y": 112.71, "z": -21.66 } ], "colors": [ { "r": 202, "g": 103, "b": 36, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -94.59, "y": -4.93, "z": 25.06 }, { "x": -114.29, "y": -35.57, "z": 8.53 }, { "x": -88.58, "y": -35.57, "z": -22.11 }, { "x": -68.88, "y": -4.93, "z": -5.58 } ], "colors": [ { "r": 192, "g": 98, "b": 35, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -82.51, "y": 36.10, "z": -17.01 }, { "x": -62.81, "y": 66.74, "z": -0.49 }, { "x": -39.34, "y": 41.03, "z": 19.21 }, { "x": -59.03, "y": 10.39, "z": 2.68 } ], "colors": [ { "r": 129, "g": 22, "b": 8, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": 92.35, "y": -20.78, "z": 25.28 }, { "x": 68.88, "y": 4.93, "z": 5.58 }, { "x": 94.59, "y": 4.93, "z": -25.06 }, { "x": 118.07, "y": -20.78, "z": -5.36 } ], "colors": [ { "r": 167, "g": 76, "b": 27, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -118.07, "y": 20.78, "z": 5.36 }, { "x": -94.59, "y": -4.93, "z": 25.06 }, { "x": -68.88, "y": -4.93, "z": -5.58 }, { "x": -92.35, "y": 20.78, "z": -25.28 } ], "colors": [ { "r": 141, "g": 77, "b": 27, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": 62.81, "y": -66.74, "z": 0.49 }, { "x": 82.51, "y": -36.10, "z": 17.01 }, { "x": 59.03, "y": -10.39, "z": -2.68 }, { "x": 39.34, "y": -41.03, "z": -19.21 } ], "colors": [ { "r": 102, "g": 1, "b": 0, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": 88.58, "y": 35.57, "z": 22.11 }, { "x": 114.29, "y": 35.57, "z": -8.53 }, { "x": 94.59, "y": 4.93, "z": -25.06 }, { "x": 68.88, "y": 4.93, "z": 5.58 } ], "colors": [ { "r": 173, "g": 93, "b": 33, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -5.30, "y": -112.71, "z": 21.66 }, { "x": -28.78, "y": -87.00, "z": 1.96 }, { "x": -3.06, "y": -87.00, "z": -28.68 }, { "x": 20.41, "y": -112.71, "z": -8.98 } ], "colors": [ { "r": 102, "g": 51, "b": 18, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -9.08, "y": -56.35, "z": 18.49 }, { "x": 16.63, "y": -56.35, "z": -12.15 }, { "x": -3.06, "y": -87.00, "z": -28.68 }, { "x": -28.78, "y": -87.00, "z": 1.96 } ], "colors": [ { "r": 207, "g": 116, "b": 41, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": 57.14, "y": 17.79, "z": -4.27 }, { "x": 76.84, "y": 48.43, "z": 12.26 }, { "x": 53.37, "y": 74.14, "z": -7.44 }, { "x": 33.67, "y": 43.50, "z": -23.96 } ], "colors": [ { "r": 88, "g": 1, "b": 0, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": 82.51, "y": -36.10, "z": 17.01 }, { "x": 62.81, "y": -66.74, "z": 0.49 }, { "x": 88.52, "y": -66.74, "z": -30.15 }, { "x": 108.22, "y": -36.10, "z": -13.63 } ], "colors": [ { "r": 191, "g": 109, "b": 39, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": 94.59, "y": 4.93, "z": -25.06 }, { "x": 114.29, "y": 35.57, "z": -8.53 }, { "x": 137.76, "y": 9.86, "z": 11.16 }, { "x": 118.07, "y": -20.78, "z": -5.36 } ], "colors": [ { "r": 101, "g": 9, "b": 3, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": 59.03, "y": -10.39, "z": -2.68 }, { "x": 82.51, "y": -36.10, "z": 17.01 }, { "x": 108.22, "y": -36.10, "z": -13.63 }, { "x": 84.74, "y": -10.39, "z": -33.32 } ], "colors": [ { "r": 158, "g": 72, "b": 26, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -40.51, "y": -74.14, "z": -7.89 }, { "x": -20.82, "y": -43.50, "z": 8.64 }, { "x": -44.29, "y": -17.79, "z": -11.05 }, { "x": -63.98, "y": -48.43, "z": -27.58 } ], "colors": [ { "r": 131, "g": 16, "b": 6, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -3.06, "y": -87.00, "z": -28.68 }, { "x": 16.63, "y": -56.35, "z": -12.15 }, { "x": 40.11, "y": -82.06, "z": 7.54 }, { "x": 20.41, "y": -112.71, "z": -8.98 } ], "colors": [ { "r": 119, "g": 4, "b": 2, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": 76.84, "y": 48.43, "z": 12.26 }, { "x": 57.14, "y": 17.79, "z": -4.27 }, { "x": 82.86, "y": 17.79, "z": -34.91 }, { "x": 102.55, "y": 48.43, "z": -18.38 } ], "colors": [ { "r": 173, "g": 89, "b": 32, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": 53.37, "y": 74.14, "z": -7.44 }, { "x": 76.84, "y": 48.43, "z": 12.26 }, { "x": 102.55, "y": 48.43, "z": -18.38 }, { "x": 79.08, "y": 74.14, "z": -38.08 } ], "colors": [ { "r": 194, "g": 92, "b": 33, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -16.63, "y": 56.35, "z": 12.15 }, { "x": -40.11, "y": 82.06, "z": -7.54 }, { "x": -14.39, "y": 82.06, "z": -38.19 }, { "x": 9.08, "y": 56.35, "z": -18.49 } ], "colors": [ { "r": 186, "g": 96, "b": 34, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -46.18, "y": 10.39, "z": -12.64 }, { "x": -26.48, "y": 41.03, "z": 3.89 }, { "x": -49.95, "y": 66.74, "z": -15.81 }, { "x": -69.65, "y": 36.10, "z": -32.33 } ], "colors": [ { "r": 118, "g": 17, "b": 6, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -20.41, "y": 112.71, "z": 8.98 }, { "x": 5.30, "y": 112.71, "z": -21.66 }, { "x": -14.39, "y": 82.06, "z": -38.19 }, { "x": -40.11, "y": 82.06, "z": -7.54 } ], "colors": [ { "r": 158, "g": 70, "b": 25, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -20.82, "y": -43.50, "z": 8.64 }, { "x": -40.51, "y": -74.14, "z": -7.89 }, { "x": -14.80, "y": -74.14, "z": -38.53 }, { "x": 4.90, "y": -43.50, "z": -22.00 } ], "colors": [ { "r": 207, "g": 113, "b": 40, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -44.29, "y": -17.79, "z": -11.05 }, { "x": -20.82, "y": -43.50, "z": 8.64 }, { "x": 4.90, "y": -43.50, "z": -22.00 }, { "x": -18.58, "y": -17.79, "z": -41.70 } ], "colors": [ { "r": 134, "g": 69, "b": 24, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -114.29, "y": -35.57, "z": 8.53 }, { "x": -137.76, "y": -9.86, "z": -11.16 }, { "x": -112.05, "y": -9.86, "z": -41.80 }, { "x": -88.58, "y": -35.57, "z": -22.11 } ], "colors": [ { "r": 119, "g": 67, "b": 24, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -118.07, "y": 20.78, "z": 5.36 }, { "x": -92.35, "y": 20.78, "z": -25.28 }, { "x": -112.05, "y": -9.86, "z": -41.80 }, { "x": -137.76, "y": -9.86, "z": -11.16 } ], "colors": [ { "r": 186, "g": 90, "b": 32, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -26.48, "y": 41.03, "z": 3.89 }, { "x": -46.18, "y": 10.39, "z": -12.64 }, { "x": -20.47, "y": 10.39, "z": -43.28 }, { "x": -0.77, "y": 41.03, "z": -26.75 } ], "colors": [ { "r": 182, "g": 89, "b": 32, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -14.39, "y": 82.06, "z": -38.19 }, { "x": 5.30, "y": 112.71, "z": -21.66 }, { "x": 28.78, "y": 87.00, "z": -1.96 }, { "x": 9.08, "y": 56.35, "z": -18.49 } ], "colors": [ { "r": 90, "g": 4, "b": 2, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -49.95, "y": 66.74, "z": -15.81 }, { "x": -26.48, "y": 41.03, "z": 3.89 }, { "x": -0.77, "y": 41.03, "z": -26.75 }, { "x": -24.24, "y": 66.74, "z": -46.45 } ], "colors": [ { "r": 177, "g": 93, "b": 33, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -112.05, "y": -9.86, "z": -41.80 }, { "x": -92.35, "y": 20.78, "z": -25.28 }, { "x": -68.88, "y": -4.93, "z": -5.58 }, { "x": -88.58, "y": -35.57, "z": -22.11 } ], "colors": [ { "r": 137, "g": 25, "b": 9, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": 62.81, "y": -66.74, "z": 0.49 }, { "x": 39.34, "y": -41.03, "z": -19.21 }, { "x": 65.05, "y": -41.03, "z": -49.85 }, { "x": 88.52, "y": -66.74, "z": -30.15 } ], "colors": [ { "r": 139, "g": 65, "b": 23, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": 33.27, "y": -112.71, "z": -24.30 }, { "x": 52.96, "y": -82.06, "z": -7.78 }, { "x": 29.49, "y": -56.35, "z": -27.47 }, { "x": 9.79, "y": -87.00, "z": -44.00 } ], "colors": [ { "r": 111, "g": 1, "b": 0, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": 59.03, "y": -10.39, "z": -2.68 }, { "x": 84.74, "y": -10.39, "z": -33.32 }, { "x": 65.05, "y": -41.03, "z": -49.85 }, { "x": 39.34, "y": -41.03, "z": -19.21 } ], "colors": [ { "r": 192, "g": 103, "b": 37, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": 57.14, "y": 17.79, "z": -4.27 }, { "x": 33.67, "y": 43.50, "z": -23.96 }, { "x": 59.38, "y": 43.50, "z": -54.60 }, { "x": 82.86, "y": 17.79, "z": -34.91 } ], "colors": [ { "r": 178, "g": 85, "b": 30, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": 27.60, "y": -28.18, "z": -29.06 }, { "x": 47.30, "y": 2.47, "z": -12.53 }, { "x": 23.82, "y": 28.18, "z": -32.23 }, { "x": 4.13, "y": -2.47, "z": -48.75 } ], "colors": [ { "r": 95, "g": 1, "b": 0, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": 53.37, "y": 74.14, "z": -7.44 }, { "x": 79.08, "y": 74.14, "z": -38.08 }, { "x": 59.38, "y": 43.50, "z": -54.60 }, { "x": 33.67, "y": 43.50, "z": -23.96 } ], "colors": [ { "r": 170, "g": 82, "b": 29, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": 52.96, "y": -82.06, "z": -7.78 }, { "x": 33.27, "y": -112.71, "z": -24.30 }, { "x": 58.98, "y": -112.71, "z": -54.95 }, { "x": 78.67, "y": -82.06, "z": -38.42 } ], "colors": [ { "r": 210, "g": 121, "b": 43, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": 65.05, "y": -41.03, "z": -49.85 }, { "x": 84.74, "y": -10.39, "z": -33.32 }, { "x": 108.22, "y": -36.10, "z": -13.63 }, { "x": 88.52, "y": -66.74, "z": -30.15 } ], "colors": [ { "r": 111, "g": 10, "b": 4, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": 29.49, "y": -56.35, "z": -27.47 }, { "x": 52.96, "y": -82.06, "z": -7.78 }, { "x": 78.67, "y": -82.06, "z": -38.42 }, { "x": 55.20, "y": -56.35, "z": -58.11 } ], "colors": [ { "r": 128, "g": 60, "b": 21, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -40.51, "y": -74.14, "z": -7.89 }, { "x": -63.98, "y": -48.43, "z": -27.58 }, { "x": -38.27, "y": -48.43, "z": -58.22 }, { "x": -14.80, "y": -74.14, "z": -38.53 } ], "colors": [ { "r": 112, "g": 59, "b": 21, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -44.29, "y": -17.79, "z": -11.05 }, { "x": -18.58, "y": -17.79, "z": -41.70 }, { "x": -38.27, "y": -48.43, "z": -58.22 }, { "x": -63.98, "y": -48.43, "z": -27.58 } ], "colors": [ { "r": 205, "g": 106, "b": 38, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": 21.93, "y": 56.35, "z": -33.81 }, { "x": 41.63, "y": 87.00, "z": -17.28 }, { "x": 18.16, "y": 112.71, "z": -36.98 }, { "x": -1.54, "y": 82.06, "z": -53.51 } ], "colors": [ { "r": 83, "g": 1, "b": 0, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": 47.30, "y": 2.47, "z": -12.53 }, { "x": 27.60, "y": -28.18, "z": -29.06 }, { "x": 53.31, "y": -28.18, "z": -59.70 }, { "x": 73.01, "y": 2.47, "z": -43.17 } ], "colors": [ { "r": 191, "g": 100, "b": 36, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": 59.38, "y": 43.50, "z": -54.60 }, { "x": 79.08, "y": 74.14, "z": -38.08 }, { "x": 102.55, "y": 48.43, "z": -18.38 }, { "x": 82.86, "y": 17.79, "z": -34.91 } ], "colors": [ { "r": 96, "g": 10, "b": 4, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": 23.82, "y": 28.18, "z": -32.23 }, { "x": 47.30, "y": 2.47, "z": -12.53 }, { "x": 73.01, "y": 2.47, "z": -43.17 }, { "x": 49.53, "y": 28.18, "z": -62.87 } ], "colors": [ { "r": 168, "g": 82, "b": 29, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -46.18, "y": 10.39, "z": -12.64 }, { "x": -69.65, "y": 36.10, "z": -32.33 }, { "x": -43.94, "y": 36.10, "z": -62.98 }, { "x": -20.47, "y": 10.39, "z": -43.28 } ], "colors": [ { "r": 158, "g": 84, "b": 30, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -75.72, "y": -35.57, "z": -37.43 }, { "x": -56.02, "y": -4.93, "z": -20.90 }, { "x": -79.50, "y": 20.78, "z": -40.60 }, { "x": -99.19, "y": -9.86, "z": -57.13 } ], "colors": [ { "r": 126, "g": 19, "b": 7, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -49.95, "y": 66.74, "z": -15.81 }, { "x": -24.24, "y": 66.74, "z": -46.45 }, { "x": -43.94, "y": 36.10, "z": -62.98 }, { "x": -69.65, "y": 36.10, "z": -32.33 } ], "colors": [ { "r": 176, "g": 81, "b": 29, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -38.27, "y": -48.43, "z": -58.22 }, { "x": -18.58, "y": -17.79, "z": -41.70 }, { "x": 4.90, "y": -43.50, "z": -22.00 }, { "x": -14.80, "y": -74.14, "z": -38.53 } ], "colors": [ { "r": 110, "g": 5, "b": 2, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": 41.63, "y": 87.00, "z": -17.28 }, { "x": 21.93, "y": 56.35, "z": -33.81 }, { "x": 47.65, "y": 56.35, "z": -64.45 }, { "x": 67.34, "y": 87.00, "z": -47.93 } ], "colors": [ { "r": 168, "g": 79, "b": 28, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": 18.16, "y": 112.71, "z": -36.98 }, { "x": 41.63, "y": 87.00, "z": -17.28 }, { "x": 67.34, "y": 87.00, "z": -47.93 }, { "x": 43.87, "y": 112.71, "z": -67.62 } ], "colors": [ { "r": 207, "g": 103, "b": 37, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -56.02, "y": -4.93, "z": -20.90 }, { "x": -75.72, "y": -35.57, "z": -37.43 }, { "x": -50.01, "y": -35.57, "z": -68.07 }, { "x": -30.31, "y": -4.93, "z": -51.54 } ], "colors": [ { "r": 203, "g": 103, "b": 36, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -43.94, "y": 36.10, "z": -62.98 }, { "x": -24.24, "y": 66.74, "z": -46.45 }, { "x": -0.77, "y": 41.03, "z": -26.75 }, { "x": -20.47, "y": 10.39, "z": -43.28 } ], "colors": [ { "r": 97, "g": 5, "b": 2, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -79.50, "y": 20.78, "z": -40.60 }, { "x": -56.02, "y": -4.93, "z": -20.90 }, { "x": -30.31, "y": -4.93, "z": -51.54 }, { "x": -53.79, "y": 20.78, "z": -71.24 } ], "colors": [ { "r": 148, "g": 80, "b": 28, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": 33.27, "y": -112.71, "z": -24.30 }, { "x": 9.79, "y": -87.00, "z": -44.00 }, { "x": 35.50, "y": -87.00, "z": -74.64 }, { "x": 58.98, "y": -112.71, "z": -54.95 } ], "colors": [ { "r": 106, "g": 52, "b": 18, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": 29.49, "y": -56.35, "z": -27.47 }, { "x": 55.20, "y": -56.35, "z": -58.11 }, { "x": 35.50, "y": -87.00, "z": -74.64 }, { "x": 9.79, "y": -87.00, "z": -44.00 } ], "colors": [ { "r": 212, "g": 116, "b": 41, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": 27.60, "y": -28.18, "z": -29.06 }, { "x": 4.13, "y": -2.47, "z": -48.75 }, { "x": 29.84, "y": -2.47, "z": -79.40 }, { "x": 53.31, "y": -28.18, "z": -59.70 } ], "colors": [ { "r": 149, "g": 73, "b": 26, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -1.94, "y": -74.14, "z": -53.85 }, { "x": 17.75, "y": -43.50, "z": -37.32 }, { "x": -5.72, "y": -17.79, "z": -57.02 }, { "x": -25.42, "y": -48.43, "z": -73.54 } ], "colors": [ { "r": 102, "g": 1, "b": 0, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": 23.82, "y": 28.18, "z": -32.23 }, { "x": 49.53, "y": 28.18, "z": -62.87 }, { "x": 29.84, "y": -2.47, "z": -79.40 }, { "x": 4.13, "y": -2.47, "z": -48.75 } ], "colors": [ { "r": 189, "g": 94, "b": 33, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": 35.50, "y": -87.00, "z": -74.64 }, { "x": 55.20, "y": -56.35, "z": -58.11 }, { "x": 78.67, "y": -82.06, "z": -38.42 }, { "x": 58.98, "y": -112.71, "z": -54.95 } ], "colors": [ { "r": 121, "g": 11, "b": 4, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": 21.93, "y": 56.35, "z": -33.81 }, { "x": -1.54, "y": 82.06, "z": -53.51 }, { "x": 24.17, "y": 82.06, "z": -84.15 }, { "x": 47.65, "y": 56.35, "z": -64.45 } ], "colors": [ { "r": 190, "g": 97, "b": 34, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -7.61, "y": 10.39, "z": -58.60 }, { "x": 12.09, "y": 41.03, "z": -42.07 }, { "x": -11.39, "y": 66.74, "z": -61.77 }, { "x": -31.08, "y": 36.10, "z": -78.30 } ], "colors": [ { "r": 88, "g": 1, "b": 0, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": 18.16, "y": 112.71, "z": -36.98 }, { "x": 43.87, "y": 112.71, "z": -67.62 }, { "x": 24.17, "y": 82.06, "z": -84.15 }, { "x": -1.54, "y": 82.06, "z": -53.51 } ], "colors": [ { "r": 163, "g": 70, "b": 25, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": 17.75, "y": -43.50, "z": -37.32 }, { "x": -1.94, "y": -74.14, "z": -53.85 }, { "x": 23.77, "y": -74.14, "z": -84.49 }, { "x": 43.46, "y": -43.50, "z": -67.96 } ], "colors": [ { "r": 213, "g": 113, "b": 40, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": 29.84, "y": -2.47, "z": -79.40 }, { "x": 49.53, "y": 28.18, "z": -62.87 }, { "x": 73.01, "y": 2.47, "z": -43.17 }, { "x": 53.31, "y": -28.18, "z": -59.70 } ], "colors": [ { "r": 105, "g": 11, "b": 4, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -5.72, "y": -17.79, "z": -57.02 }, { "x": 17.75, "y": -43.50, "z": -37.32 }, { "x": 43.46, "y": -43.50, "z": -67.96 }, { "x": 19.99, "y": -17.79, "z": -87.66 } ], "colors": [ { "r": 138, "g": 69, "b": 24, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -75.72, "y": -35.57, "z": -37.43 }, { "x": -99.19, "y": -9.86, "z": -57.13 }, { "x": -73.48, "y": -9.86, "z": -87.77 }, { "x": -50.01, "y": -35.57, "z": -68.07 } ], "colors": [ { "r": 125, "g": 69, "b": 25, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -79.50, "y": 20.78, "z": -40.60 }, { "x": -53.79, "y": 20.78, "z": -71.24 }, { "x": -73.48, "y": -9.86, "z": -87.77 }, { "x": -99.19, "y": -9.86, "z": -57.13 } ], "colors": [ { "r": 198, "g": 95, "b": 33, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": 12.09, "y": 41.03, "z": -42.07 }, { "x": -7.61, "y": 10.39, "z": -58.60 }, { "x": 18.10, "y": 10.39, "z": -89.24 }, { "x": 37.80, "y": 41.03, "z": -72.72 } ], "colors": [ { "r": 188, "g": 90, "b": 32, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": 24.17, "y": 82.06, "z": -84.15 }, { "x": 43.87, "y": 112.71, "z": -67.62 }, { "x": 67.34, "y": 87.00, "z": -47.93 }, { "x": 47.65, "y": 56.35, "z": -64.45 } ], "colors": [ { "r": 92, "g": 11, "b": 4, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -11.39, "y": 66.74, "z": -61.77 }, { "x": 12.09, "y": 41.03, "z": -42.07 }, { "x": 37.80, "y": 41.03, "z": -72.72 }, { "x": 14.33, "y": 66.74, "z": -92.41 } ], "colors": [ { "r": 182, "g": 93, "b": 33, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -73.48, "y": -9.86, "z": -87.77 }, { "x": -53.79, "y": 20.78, "z": -71.24 }, { "x": -30.31, "y": -4.93, "z": -51.54 }, { "x": -50.01, "y": -35.57, "z": -68.07 } ], "colors": [ { "r": 102, "g": 6, "b": 2, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -1.94, "y": -74.14, "z": -53.85 }, { "x": -25.42, "y": -48.43, "z": -73.54 }, { "x": 0.29, "y": -48.43, "z": -104.19 }, { "x": 23.77, "y": -74.14, "z": -84.49 } ], "colors": [ { "r": 116, "g": 59, "b": 21, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -5.72, "y": -17.79, "z": -57.02 }, { "x": 19.99, "y": -17.79, "z": -87.66 }, { "x": 0.29, "y": -48.43, "z": -104.19 }, { "x": -25.42, "y": -48.43, "z": -73.54 } ], "colors": [ { "r": 212, "g": 107, "b": 38, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -7.61, "y": 10.39, "z": -58.60 }, { "x": -31.08, "y": 36.10, "z": -78.30 }, { "x": -5.37, "y": 36.10, "z": -108.94 }, { "x": 18.10, "y": 10.39, "z": -89.24 } ], "colors": [ { "r": 162, "g": 85, "b": 30, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -37.15, "y": -35.57, "z": -83.39 }, { "x": -17.46, "y": -4.93, "z": -66.86 }, { "x": -40.93, "y": 20.78, "z": -86.56 }, { "x": -60.63, "y": -9.86, "z": -103.09 } ], "colors": [ { "r": 93, "g": 1, "b": 0, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -11.39, "y": 66.74, "z": -61.77 }, { "x": 14.33, "y": 66.74, "z": -92.41 }, { "x": -5.37, "y": 36.10, "z": -108.94 }, { "x": -31.08, "y": 36.10, "z": -78.30 } ], "colors": [ { "r": 182, "g": 81, "b": 29, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": 0.29, "y": -48.43, "z": -104.19 }, { "x": 19.99, "y": -17.79, "z": -87.66 }, { "x": 43.46, "y": -43.50, "z": -67.96 }, { "x": 23.77, "y": -74.14, "z": -84.49 } ], "colors": [ { "r": 113, "g": 12, "b": 4, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -17.46, "y": -4.93, "z": -66.86 }, { "x": -37.15, "y": -35.57, "z": -83.39 }, { "x": -11.44, "y": -35.57, "z": -114.03 }, { "x": 8.25, "y": -4.93, "z": -97.51 } ], "colors": [ { "r": 210, "g": 103, "b": 37, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -5.37, "y": 36.10, "z": -108.94 }, { "x": 14.33, "y": 66.74, "z": -92.41 }, { "x": 37.80, "y": 41.03, "z": -72.72 }, { "x": 18.10, "y": 10.39, "z": -89.24 } ], "colors": [ { "r": 99, "g": 13, "b": 4, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -40.93, "y": 20.78, "z": -86.56 }, { "x": -17.46, "y": -4.93, "z": -66.86 }, { "x": 8.25, "y": -4.93, "z": -97.51 }, { "x": -15.22, "y": 20.78, "z": -117.20 } ], "colors": [ { "r": 152, "g": 80, "b": 28, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -37.15, "y": -35.57, "z": -83.39 }, { "x": -60.63, "y": -9.86, "z": -103.09 }, { "x": -34.92, "y": -9.86, "z": -133.73 }, { "x": -11.44, "y": -35.57, "z": -114.03 } ], "colors": [ { "r": 129, "g": 70, "b": 25, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -40.93, "y": 20.78, "z": -86.56 }, { "x": -15.22, "y": 20.78, "z": -117.20 }, { "x": -34.92, "y": -9.86, "z": -133.73 }, { "x": -60.63, "y": -9.86, "z": -103.09 } ], "colors": [ { "r": 205, "g": 95, "b": 34, "a": 0.71 }, undefined, undefined ] },
{ "points": [ { "x": -34.92, "y": -9.86, "z": -133.73 }, { "x": -15.22, "y": 20.78, "z": -117.20 }, { "x": 8.25, "y": -4.93, "z": -97.51 }, { "x": -11.44, "y": -35.57, "z": -114.03 } ], "colors": [ { "r": 106, "g": 14, "b": 5, "a": 0.71 }, undefined, undefined ] }
];

// Data section *end*


/**
 * Class to render the given set of polygones
 * Rendering will be done using a specified output driver
 * All further manipulations are based on an event generator
 * which is associated with the renderer
 */
function Renderer_7ee09c29477e936d36c97691745b073c204d1a52() 
{
    // Generate sinus and cosinus lookup tables
    this._generateSinCosTables();
}

// Class constants
Renderer_7ee09c29477e936d36c97691745b073c204d1a52.EVENT_TRANSLATE = 1;
Renderer_7ee09c29477e936d36c97691745b073c204d1a52.EVENT_ROTATE = 2;

Renderer_7ee09c29477e936d36c97691745b073c204d1a52.prototype = {
    /**
     * Width of the image
     */
    _imageSizeX: 250.0,
    /**
     * Height of the image 
     */
    _imageSizeY: 250.0,

    /**
     * Cos values (0-360 degrees, step 1 ) 
     */
    _cos: Array(),
    /**
     * Sin values ( 0-360 degrees, step 1 )
     */
    _sin: Array(),

    /**
     * Viewpoint used for rendering 
     */
    _viewpoint: 500.0,
    /**
     * Distance used for rendering 
     */
    _distance: 500.0,
    
    /**
     * Output driver which renders the actual data 
     */
    _driver: false,

    /**
     * Event generator to notify the renderer 
     */
    _eventGenerator: false,
    
    /**
     * Generate sinus and cosinus lookup tables for faster access
     */
    _generateSinCosTables: function() {
        var factor = Math.PI*2 / 360;
        this._sin = new Array();
        this._cos = new Array();
        for(var i=0; i<=360; i++) {
            this._sin[i] = Math.sin(factor*i);
            this._cos[i] = Math.cos(factor*i);
        }
    },

    /**
     * Set a driver to use for output rendering
     */
    setDriver: function( driver ) {
        // Delete the old driver class from memory
        delete this._driver;

        // Set the new one
        this._driver = driver;
    },

    /**
     * Return the current used driver 
     */
    getDriver: function() {
        return this._driver;
    },

    /**
     * Set an event generator to listen to 
     */
    setEventGenerator: function( eventGenerator ) {
        // Delete the old event generator to free memory and stop it from notifying the renderer
        if ( this._eventGenerator != false ) 
        {
            this._eventGenerator.detach();
        }
        delete this._eventGenerator;

        // Set new event generator and attach it to this renderer
        this._eventGenerator = eventGenerator;
        this._eventGenerator.attach( this );
    },

    /**
     * Set the viewpoint for rendering 
     */
    setViewpoint: function( viewpoint ) {
        this._viewpoint = viewpoint;
    },
    
    /**
     * Set the distance for rendering 
     */
    setDistance: function( distance ) {
        this._distance = distance;
    },

    /**
     * Compare two polygones by their medium z distance
     * Used for sorting the polygones array
     */
    _sortByMidZ: function( polygon1, polygon2 ) 
    {
        var midZ_polygon1 = 0.0;
        var midZ_polygon2 = 0.0;
        
        for( var i = 0; i<polygon1["points"].length; i++ ) 
        {
            midZ_polygon1 += polygon1["points"][i]["z"];
        }
        midZ_polygon1 = midZ_polygon1 / parseFloat( polygon1["points"].length );

        for( var i = 0; i<polygon2["points"].length; i++ ) 
        {
            midZ_polygon2 += polygon2["points"][i]["z"];
        }
        midZ_polygon2 = midZ_polygon2 / parseFloat( polygon2["points"].length );

        return midZ_polygon2 - midZ_polygon1;
    },

    /**
     * Sort the polygones by their medium z distance
     */
    _sortPolygones: function() 
    {
        polygones_7ee09c29477e936d36c97691745b073c204d1a52.sort( this._sortByMidZ );
    },

    /**
     * Apply a specified rotation on all of the polygones
     */
    _rotate: function( rx, ry, rz ) 
    {
        for( var i = 0; i<polygones_7ee09c29477e936d36c97691745b073c204d1a52.length; i++ ) 
        {
            for ( var j = 0; j<polygones_7ee09c29477e936d36c97691745b073c204d1a52[i]["points"].length; j++ )
            {
                var px = polygones_7ee09c29477e936d36c97691745b073c204d1a52[i]["points"][j]["x"];
                var py = polygones_7ee09c29477e936d36c97691745b073c204d1a52[i]["points"][j]["y"];
                var pz = polygones_7ee09c29477e936d36c97691745b073c204d1a52[i]["points"][j]["z"];

                // Rotate around the z axis
                if ( rz != 0 ) 
                {
                    var x = this._cos[rz] * px + this._sin[rz] * py;
                    var y = -this._sin[rz] * px + this._cos[rz] * py;
                    var z = pz;

                    px = x; py = y; pz = z;                           
                }

                // Rotate around the x axis
                if ( rx != 0 ) 
                {
                    var x = px;
                    var y = this._cos[rx] * py + ( -this._sin[rx] * pz );
                    var z = this._sin[rx] * py + this._cos[rx] * pz;

                    px = x; py = y; pz = z;                           
                }

                // Rotate around the y axis
                if ( ry != 0 ) 
                {
                    var x = this._cos[ry] * px + this._sin[ry] * pz;
                    var y = py;
                    var z = -this._sin[ry] * px + this._cos[ry] * pz;

                    px = x; py = y; pz = z;                           
                }

                polygones_7ee09c29477e936d36c97691745b073c204d1a52[i]["points"][j]["x"] = px;
                polygones_7ee09c29477e936d36c97691745b073c204d1a52[i]["points"][j]["y"] = py;
                polygones_7ee09c29477e936d36c97691745b073c204d1a52[i]["points"][j]["z"] = pz;
            }
        }
    },

    /**
     * Apply a specified translation on all of the polygones
     */
    _translate: function( tx, ty, tz ) 
    {
        for( var i = 0; i<polygones_7ee09c29477e936d36c97691745b073c204d1a52.length; i++ ) 
        {
            for ( var j = 0; j<polygones_7ee09c29477e936d36c97691745b073c204d1a52[i]["points"].length; j++ )
            {
                polygones_7ee09c29477e936d36c97691745b073c204d1a52[i]["points"][j]["x"] = polygones_7ee09c29477e936d36c97691745b073c204d1a52[i]["points"][j]["x"] + tx;
                polygones_7ee09c29477e936d36c97691745b073c204d1a52[i]["points"][j]["y"] = polygones_7ee09c29477e936d36c97691745b073c204d1a52[i]["points"][j]["y"] + ty;
                polygones_7ee09c29477e936d36c97691745b073c204d1a52[i]["points"][j]["z"] = polygones_7ee09c29477e936d36c97691745b073c204d1a52[i]["points"][j]["z"] + tz;
            }
        }
    },


    /**
     *  A new event has been occured
     */
    notify: function( event, data ) {
        switch ( event ) 
        {
            case Renderer_7ee09c29477e936d36c97691745b073c204d1a52.EVENT_TRANSLATE:
                this._translate( data[0], data[1], data[2] );
            break;
            case Renderer_7ee09c29477e936d36c97691745b073c204d1a52.EVENT_ROTATE:
                this._rotate( data[0], data[1], data[2] );
            break;
        }
        this.render();
    },

    /**
     * Calculate screen coordinates for every polygon and render it 
     */
    render: function() {
        // Begin output
        this._driver.begin( this._imageSizeX, this._imageSizeY );

        // Sort all polygones by their Z-Order
        this._sortPolygones();
        
        // Draw the background
        this._driver.drawPolygon( { points: [ [ 0, 0 ], [ this._imageSizeX, 0 ], [ this._imageSizeX, this._imageSizeY ], [ 0, this._imageSizeY ] ], colors: [ { r: 0, g: 0, b: 0, a:1.00 }, undefined, undefined ] } );

        // Calculate screen coordinate for every polygon point and send it to the driver for drawing
        for( var i = 0; i<polygones_7ee09c29477e936d36c97691745b073c204d1a52.length; i++ ) 
        {
            var screenCoords = new Array();
            for ( var j = 0; j<polygones_7ee09c29477e936d36c97691745b073c204d1a52[i]["points"].length; j++ ) 
            {
                screenCoords.push( 
                    [ 
                        this._viewpoint * polygones_7ee09c29477e936d36c97691745b073c204d1a52[i]["points"][j]["x"] / (polygones_7ee09c29477e936d36c97691745b073c204d1a52[i]["points"][j]["z"] + this._distance) + this._imageSizeX/2,
                        this._viewpoint * polygones_7ee09c29477e936d36c97691745b073c204d1a52[i]["points"][j]["y"] / (polygones_7ee09c29477e936d36c97691745b073c204d1a52[i]["points"][j]["z"] + this._distance) + this._imageSizeY/2
                    ]
                );
            }
            this._driver.drawPolygon( { points: screenCoords, colors: polygones_7ee09c29477e936d36c97691745b073c204d1a52[i]["colors"] } );
        }

        // Tell the driver to finish his work
        this._driver.finish();
    }
}


/**
 * Output Driver to render into a canvas object
 */
function CanvasDriver_7ee09c29477e936d36c97691745b073c204d1a52( canvasElement ) {
    if ( !canvasElement.getContext ) 
    {            
        window.alert( 'Unfortunatly your browser does not support the "Canvas" control.\\nDownload Firefox <http://mozilla.org/firefox> to make the 3D control display in your browser.' );
        throw "Canvas Control not available.";
    }

    this._canvas = canvasElement.getContext( '2d' );
}

CanvasDriver_7ee09c29477e936d36c97691745b073c204d1a52.prototype = {
    /**
     * Canvas rendering context 
     */
    _canvas: false,

    /**
     * Create a "rgba" string from a specified color array
     */
    _getRgba: function( color ) 
    {
        if ( arguments[1] != undefined ) 
        {
            color["a"] = arguments[1];
        }
        return "rgba( " + color["r"] + ", " + color["g"] + ", " + color["b"] + ", " + color["a"] + " )";
    },

    /**
     * Starts output by recieving width and height of the image
     * to be rendered 
     */
    begin: function( x, y ) {
        // Nothing to do here
    },

    /**
     * Draw a given polygon into the approriate context
     */
    drawPolygon: function( polygon ) {
        this._canvas.beginPath();
        this._canvas.moveTo( polygon["points"][0][0], polygon["points"][0][1] );
        for ( var j = 1; j<polygon["points"].length; j++ ) 
        {
            this._canvas.lineTo( polygon["points"][j][0], polygon["points"][j][1] );                            
        }
        this._canvas.lineTo( polygon["points"][0][0], polygon["points"][0][1] );
        if ( polygon["colors"][1] == undefined ) 
        {
            // Only one color, means flat shading
            this._canvas.fillStyle = this._getRgba( polygon["colors"][0] );
            this._canvas.fill();                
        }
        else 
        {
            // More than one color. Gauroud shading is used

            // Create the main gradient between the first and the second point
            var mainGradient = this._canvas.createLinearGradient( polygon["points"][0][0], polygon["points"][0][1], polygon["points"][1][0], polygon["points"][1][1] );
            mainGradient.addColorStop( 0.0, this._getRgba( polygon["colors"][0] ) );
            mainGradient.addColorStop( 1.0, this._getRgba( polygon["colors"][1] ) );
            
            // Create the overlay gradient between the third point and the inbetween of the two other points
            var overlayGradient = this._canvas.createLinearGradient( 
                polygon["points"][2][0],
                polygon["points"][2][1],
                ( polygon["points"][0][0] + polygon["points"][1][0] ) / 2.0,
                ( polygon["points"][0][1] + polygon["points"][1][1] ) / 2.0
            );
            overlayGradient.addColorStop( 0.0, this._getRgba( polygon["colors"][2] ) );
            overlayGradient.addColorStop( 1.0, this._getRgba( polygon["colors"][2], 0.0 ) );
            
            // Draw the gradients
            this._canvas.fillStyle = mainGradient;
            this._canvas.fill();
            this._canvas.fillStyle = overlayGradient;
            this._canvas.fill();

            // Delete the gradients to free memory
            delete mainGradient;
            delete overlayGradient;
        }
    },

    /**
     * Finish the output 
     */
    finish: function() {
        // Nothing to do here
    }
}


/**
 * Driver which outputs a png image of the rendering context
 */
function PngDriver_7ee09c29477e936d36c97691745b073c204d1a52() {
    // Nothing to do here
}

PngDriver_7ee09c29477e936d36c97691745b073c204d1a52.prototype = {
    /**
     * The in-memory canvas element, where the image will be
     * rendered to before it is saved to a png
     */
    _canvasElement: false,

    /**
     * Begin output by creating in-memory canvas to draw to 
     */
    begin: function( x, y ) {
        this._canvasElement = document.createElement( 'canvas' );
        this._canvasElement.width = x;
        this._canvasElement.height = y;

        if ( !this._canvasElement.toDataURL ) 
        {
            window.alert('Sorry your browser does not support export to an image file.');
            throw "Canvas does not support toDataURL";
        }
        this._canvasDriver = new CanvasDriver_7ee09c29477e936d36c97691745b073c204d1a52( this._canvasElement );                
    },

    /**
     * Draw a given polygon 
     */
    drawPolygon: function( polygon ) 
    {
        this._canvasDriver.drawPolygon( polygon );
    },
    
    /**
     *  Finish the output process
     */
    finish: function() {
        window.location = this._canvasElement.toDataURL(); 
    }
}


function SvgDriver_7ee09c29477e936d36c97691745b073c204d1a52() {
    this._polygones = new Array();
    this._gradients = new Array();
}

SvgDriver_7ee09c29477e936d36c97691745b073c204d1a52.prototype = {
    _svg: "",
    _index: 0,
    _polygones: new Array(),
    _gradients: new Array(),

    _decimal2hex: function( decimal ) {
        var charset = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
        var hex = Array();

        for( var d = decimal; d != 0; d = parseInt( d / 16 ) )
        {
            hex.unshift( charset[ d%16 ] ) 
            
        }
        if ( hex.length == 0 ) 
        {
            hex.unshift( "0" );
        }

        return hex.join( "" );
    },

    _getStyle: function( color ) {
        var rx = ( this._decimal2hex( color["r"] ).length < 2 ) ? "0" + this._decimal2hex( color["r"] ) : this._decimal2hex( color["r"] );
        var gx = ( this._decimal2hex( color["g"] ).length < 2 ) ? "0" + this._decimal2hex( color["g"] ) : this._decimal2hex( color["g"] );
        var bx = ( this._decimal2hex( color["b"] ).length < 2 ) ? "0" + this._decimal2hex( color["b"] ) : this._decimal2hex( color["b"] );

        return "fill: #" + rx + gx + bx + "; fill-opacity: " + color["a"] + "; stroke: none;";
    },

    _getGradientStop: function( color, offset, alpha ) {
    },

    begin: function( x, y ) {
        this._svg += '<?xml version="1.0" ?>\n';
        this._svg += '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"\n';             
        this._svg += '"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n\n';
        this._svg += '<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="' + x + '" height="' + y + '">\n';
    },

    drawPolygon: function( polygon ) {
        var pointlist = ""
        for( var i=0; i<polygon["points"].length; i++ ) 
        {
            pointlist += ( Math.round( polygon["points"][i][0] * 100 ) / 100 ) + "," + ( Math.round( polygon["points"][i][1] * 100 ) / 100 ) + " "; 
        }
        this._polygones.push( "<polygon points=\"" + pointlist.substr( 0, pointlist.length -1 ) + "\" style=\"" + this._getStyle( polygon["colors"][0] )  +"\" />\n" );
    },

    finish: function() {
        this._svg += "<defs></defs>\n";
        this._svg += this._polygones.join( "" );
        this._svg += "</svg>";
        window.location = "data:image/svg+xml;base64," + Base64_7ee09c29477e936d36c97691745b073c204d1a52.encode( this._svg ); 
    }
}


/**
 * EventGenerator which enables controlling the render by mouse movements
 */
function MouseEventGenerator_7ee09c29477e936d36c97691745b073c204d1a52( activateObject, deactivateObject, movementObject ) {
    this._activateObject = activateObject;
    this._deactivateObject = deactivateObject;
    this._movementObject = movementObject;
    this.setControlState( null, MouseEventGenerator_7ee09c29477e936d36c97691745b073c204d1a52.CONTROL_TRANSLATE_XY );
}           

// Class constants
MouseEventGenerator_7ee09c29477e936d36c97691745b073c204d1a52.CONTROL_TRANSLATE_XY = 1;
MouseEventGenerator_7ee09c29477e936d36c97691745b073c204d1a52.CONTROL_TRANSLATE_Z = 2;
MouseEventGenerator_7ee09c29477e936d36c97691745b073c204d1a52.CONTROL_ROTATE_XY = 3;
MouseEventGenerator_7ee09c29477e936d36c97691745b073c204d1a52.CONTROL_ROTATE_Z = 4;

MouseEventGenerator_7ee09c29477e936d36c97691745b073c204d1a52.prototype =  {
    /**
     * The renderer which should be notified 
     */
    _renderer: false,

    /**
     * Dom object to register mousedown event on
     */
    _activateObject: false,
    /**
     * Dom object to register mouseup event on
     */
    _deactivateObject: false,
    /**
     * Dom object to register mousemove event on
     */
    _movementObject: false,

    /**
     * Anonymous function to be called on activation
     * Needed to compensate javascripts strange "this" behaviour
     */
    _activateFunction: false,
    /**
     * Anonymous function to be called on deactivation
     * Needed to compensate javascripts strange "this" behaviour
     */
    _deactivateFunction: false,
    /**
     * Anonymous function to be called on movement
     * Needed to compensate javascripts strange "this" behaviour
     */
    _movementFunction: false,
    
    /**
     * Last captured x mouse position 
     */
    _lastMouseX: 0,
    /**
     * Last captured y mouse position 
     */
    _lastMouseY: 0,
    /**
     * Calculated x offset from the last mouse position
     */
    _mouseXOffset: 0,
    /**
     * Calculated y offset from the last mouse position 
     */
    _mouseYOffset: 0,

    /**
     * Manipulation state 
     */
    _inProgress: false,

    /**
     * Current control state 
     */
    _currentControlState: 0,

    /**
     * Attach to a renderer 
     */
    attach: function( renderer ) {
        // Register events on the appropriate DOM objects
        var self = this;
        this._activateFunction = function( event ) { self._onMouseDown( event ); };
        this._deactivateFunction = function( event ) { self._onMouseUp( event ); };
        this._movementFunction = function( event ) { self._onMouseMove( event ); };
        this._activateObject.addEventListener( 'mousedown', this._activateFunction , true );
        this._deactivateObject.addEventListener( 'mouseup', this._deactivateFunction, true );
        this._movementObject.addEventListener( 'mousemove', this._movementFunction, true );
        // Set the renderer to notify of events
        this._renderer = renderer;
    },

    /**
     * Detach from a renderer 
     */
    detach: function() {
        // Stop notifying the renderer of events
        this._renderer = false;

        // Remove the registered event listeners
        this._activateObject.removeEventListener( 'mousedown', this._activateFunction, false );
        this._deactivateObject.removeEventListener( 'mouseup', this._deactivateFunction, false );
        this._movementObject.removeEventListener( 'mousemove', this._movementFunction, false );
    },

    /**
     * Notify the attached renderer of an occured event 
     */
    _notifyRenderer: function( event, data ) {
        if ( this._renderer != false ) 
        {
            this._renderer.notify( event, data );
        }
    },

    /**
     * Capture any mousemove event
     */
    _onMouseMove: function( event ) 
    {
        var progressOffset = 4;
        var calcOffsetX = 0;
        var calcOffsetY = 0;

        if( !this._inProgress ) 
        {   
            return;
        }

        if ( this._mouseXOffset < progressOffset && this._mouseXOffset > -progressOffset ) 
        {
            this._mouseXOffset += this._lastMouseX - event.clientX;
            calcOffsetX = 0;
        }
        else
        {
            calcOffsetX = Math.round( ( this._lastMouseX - event.clientX ) / progressOffset )
            this._lastMouseX = event.clientX;
            this._mouseXOffset = 0;
        }

        if ( this._mouseYOffset < progressOffset && this._mouseYOffset > -progressOffset ) 
        {
            this._mouseYOffset += this._lastMouseY - event.clientY;
            calcOffsetY = 0;
        }
        else
        {
            calcOffsetY = Math.round( ( this._lastMouseY - event.clientY ) / progressOffset )
            this._lastMouseY = event.clientY;
            this._mouseYOffset = 0;
        }


        if ( calcOffsetX != 0 || calcOffsetY != 0 ) 
        {
            switch ( this._currentControlState ) 
            {
                case MouseEventGenerator_7ee09c29477e936d36c97691745b073c204d1a52.CONTROL_TRANSLATE_XY:
                    this._notifyRenderer( Renderer_7ee09c29477e936d36c97691745b073c204d1a52.EVENT_TRANSLATE, [ -calcOffsetX * 2, -calcOffsetY * 2, 0 ] );
                break
                case MouseEventGenerator_7ee09c29477e936d36c97691745b073c204d1a52.CONTROL_TRANSLATE_Z:
                    this._notifyRenderer( Renderer_7ee09c29477e936d36c97691745b073c204d1a52.EVENT_TRANSLATE, [ 0, 0, -calcOffsetY * 2 ] );
                break;
                case MouseEventGenerator_7ee09c29477e936d36c97691745b073c204d1a52.CONTROL_ROTATE_XY:
                    this._notifyRenderer( Renderer_7ee09c29477e936d36c97691745b073c204d1a52.EVENT_ROTATE, [ calcOffsetY < 0 ? -calcOffsetY * 2 : 360 - calcOffsetY * 2, calcOffsetX < 0 ? 360 - -calcOffsetX * 2 : calcOffsetX * 2, 0 ] );
                break;
                case MouseEventGenerator_7ee09c29477e936d36c97691745b073c204d1a52.CONTROL_ROTATE_Z:
                    this._notifyRenderer( Renderer_7ee09c29477e936d36c97691745b073c204d1a52.EVENT_ROTATE, [ 0, 0, calcOffsetX < 0 ? 360 - -calcOffsetX * 2 : calcOffsetX * 2 ] );
                break;
            }
        }
    },
    
    /**
     * Capture any mousedown event
     */
    _onMouseDown: function( event ) 
    {
        this._lastMouseX = event.clientX;
        this._lastMouseY = event.clientY;
        this._inProgress = true;
    },

    /**
     * Capture any mouseup event 
     */
    _onMouseUp: function( event ) 
    {
        this._inProgress = false;
    },

    /**
     * Set the specified control state and change the control
     * representation appropriatly
     */ 
    setControlState: function( event, state ) 
    {
        this._currentControlState = state;
    }

}


/**
 * Class to generate timer based events to roate the object
 * ( For testing purpose only )
 */
function RotateAnimationEventGenerator_7ee09c29477e936d36c97691745b073c204d1a52() {
    this._timeout( this );
}

RotateAnimationEventGenerator_7ee09c29477e936d36c97691745b073c204d1a52.prototype = {
    /**
     * Renderer to send events to 
     */
    _renderer: false,

    /**
     * Attach to a renderer 
     */
    attach: function( renderer ) {
        // Set the renderer to notify of events
        this._renderer = renderer;
    },

    /**
     * Detach from a renderer 
     */
    detach: function() {
        this._renderer = false;
    },

    /**
     * Notify the renderer of an occured event 
     */
    _notifyRenderer: function( event, data ) {
        if ( this._renderer != false ) 
        {
            this._renderer.notify( event, data );
        }
    },

    /**
     * Called every 10 ms to send rotation event 
     */
    _timeout: function( self ) {
        self._notifyRenderer( Renderer_7ee09c29477e936d36c97691745b073c204d1a52.EVENT_ROTATE, [ 2, 4, 2 ] );
        window.setTimeout( function(){ self._timeout( self ); }, 10 );                    
    }
}


/**
 * Class managing the toolbar with all of the control buttons
 */
function Toolbar_7ee09c29477e936d36c97691745b073c204d1a52( container )
{
    // Create the needed ul to hold the toolbar buttons
    this.container = document.createElement( 'ul' );
    this.container.setAttribute( 'style', '-moz-user-select: none;' );
    this.container.style.margin = '0px';
    this.container.style.padding = '0px';
    this.container.style.marginLeft = '8px';
    this.container.style.marginTop = '4px';
    this.container.style.width = ( 250 - 8 ) + 'px';

    // Add the ul to our outer container
    container.appendChild( this.container );
}

Toolbar_7ee09c29477e936d36c97691745b073c204d1a52.prototype = {
    container: false,
    buttons: new Array(),
    activeButton: false,

    addButton: function( image, onClick ) {
        var button = document.createElement( 'li' );
        var img = document.createElement( 'img' );
        img.src = image;
        button.innerHtml = image;
        button.appendChild( img );
        button.style.backgroundColor = '#d3d7cf';
        button.style.borderBottom = '1px solid #555753';
        button.style.borderRight = '1px solid #555753';
        button.style.borderTop = '1px solid #eeeeec';
        button.style.borderLeft = '1px solid #eeeec';
        button.style.display = 'block';
        button.style.cssFloat = 'left';
        button.style.height = "24px";
        button.style.width = "24px";
        button.style.padding = "0px";
        button.style.margin = "0px";
        button.style.marginRight = "6px";

        button.addEventListener( 'click', onClick, false );

        this.container.appendChild( button );
        this.buttons.push( button );
        return button;
    },

    activate: function( o ) {
        for( var key in this.buttons ) 
        {
            this.buttons[key].style.borderBottom = '1px solid #555753';
            this.buttons[key].style.borderRight = '1px solid #555753';
            this.buttons[key].style.borderTop = '1px solid #eeeeec';
            this.buttons[key].style.borderLeft = '1px solid #eeeeec';
        }
        o.style.borderBottom = '1px solid #eeeeec';
        o.style.borderRight = '1px solid #eeeeec';
        o.style.borderTop = '1px solid #555753';
        o.style.borderLeft = '1px solid #555753';
        this.activeButton = o;
    }
}


Base64_7ee09c29477e936d36c97691745b073c204d1a52 = {
    charset: [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/" ],

    encode: function( data ) 
    {
        // Tranform data string to an array for easier handling
        var input = Array();                
        for ( var i = 0; i<data.length; i++ ) 
        {
            input[i] = data.charCodeAt( i );
        }

        var encoded = Array();
        
        // Create padding to let us operate on 24 bit ( 3 byte ) chunks till the end
        var padding = 0;
        while ( input.length % 3 != 0 ) 
        {
            input.push( 0 );
            padding++;
        }

        for( var i=0; i<input.length; i+=3 ) 
        {
            encoded.push( Base64_7ee09c29477e936d36c97691745b073c204d1a52.charset[ input[i] >> 2 ] );
            encoded.push( Base64_7ee09c29477e936d36c97691745b073c204d1a52.charset[ ( ( input[i] & 3) << 4 ) | ( input[i+1] >> 4 ) ] );
            encoded.push( Base64_7ee09c29477e936d36c97691745b073c204d1a52.charset[ ( ( input[i+1] & 15) << 2 ) | ( input[i+2] >> 6 ) ] );
            encoded.push( Base64_7ee09c29477e936d36c97691745b073c204d1a52.charset[ ( input[i+2] & 63 ) ] );
        }


        // Replace our added zeros with the correct padding characters
        for( var i=0; i<padding; i++ ) 
        {
            encoded[encoded.length-1-i]= "=";                    
        }

        return encoded.join( "" );
    }
}


Image3D_7ee09c29477e936d36c97691745b073c204d1a52 = {
    container: false,
    canvas: false,
    controlOverlay: false,
    toolbar: false,
    bodyElement: false,
    mouseEventGenerator: false,                

    init: function() 
    {
        Image3D_7ee09c29477e936d36c97691745b073c204d1a52.container = document.createElement( 'div' );
        Image3D_7ee09c29477e936d36c97691745b073c204d1a52.canvas = document.createElement( 'canvas' );
        Image3D_7ee09c29477e936d36c97691745b073c204d1a52.controlOverlay = document.createElement( 'div' );
        Image3D_7ee09c29477e936d36c97691745b073c204d1a52.container.style.position = "relative";
        Image3D_7ee09c29477e936d36c97691745b073c204d1a52.container.style.width = 250 + "px";
        Image3D_7ee09c29477e936d36c97691745b073c204d1a52.container.style.height = 250 + "px";
        Image3D_7ee09c29477e936d36c97691745b073c204d1a52.canvas.style.position = "absolute";
        Image3D_7ee09c29477e936d36c97691745b073c204d1a52.canvas.style.top = "0px";
        Image3D_7ee09c29477e936d36c97691745b073c204d1a52.canvas.style.left = "0px";
        Image3D_7ee09c29477e936d36c97691745b073c204d1a52.canvas.style.width = 250 + "px";
        Image3D_7ee09c29477e936d36c97691745b073c204d1a52.canvas.style.height = 250 + "px";
        Image3D_7ee09c29477e936d36c97691745b073c204d1a52.canvas.width = 250;
        Image3D_7ee09c29477e936d36c97691745b073c204d1a52.canvas.height = 250;
        Image3D_7ee09c29477e936d36c97691745b073c204d1a52.controlOverlay.style.position = "absolute";
        Image3D_7ee09c29477e936d36c97691745b073c204d1a52.controlOverlay.style.top = "0px";
        Image3D_7ee09c29477e936d36c97691745b073c204d1a52.controlOverlay.style.left = "0px";
        Image3D_7ee09c29477e936d36c97691745b073c204d1a52.controlOverlay.style.width = 250 + "px";
        Image3D_7ee09c29477e936d36c97691745b073c204d1a52.controlOverlay.style.height = 250 + "px";
        Image3D_7ee09c29477e936d36c97691745b073c204d1a52.toolbar = new Toolbar_7ee09c29477e936d36c97691745b073c204d1a52( Image3D_7ee09c29477e936d36c97691745b073c204d1a52.controlOverlay );

        // Create a new MouseEventGenerator
        var bodyElement = document.getElementsByTagName( "body" );
        Image3D_7ee09c29477e936d36c97691745b073c204d1a52.bodyElement = bodyElement[0];
        Image3D_7ee09c29477e936d36c97691745b073c204d1a52.mouseEventGenerator = new MouseEventGenerator_7ee09c29477e936d36c97691745b073c204d1a52( Image3D_7ee09c29477e936d36c97691745b073c204d1a52.controlOverlay, Image3D_7ee09c29477e936d36c97691745b073c204d1a52.bodyElement, Image3D_7ee09c29477e936d36c97691745b073c204d1a52.bodyElement );
        
        // Create the needed toolbar buttons
        Image3D_7ee09c29477e936d36c97691745b073c204d1a52.toolbar.activate( 
            Image3D_7ee09c29477e936d36c97691745b073c204d1a52.toolbar.addButton( 
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAUwwAAFMMBFXBNQgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAALHSURBVEiJrZU9aBRBFMd/s0lIiJdCMaiFYKyE4G5zexsEURFFkYAfIGJjo4UoWFxMTvJhzMflLjEEhWipIKLYGDURGysRHQbRaS2MdmIgGhEhYm4sMhvXc+88NQ+OvTc78/vPe/PmrTDGUKl5fjAEfNZKDlW6xvlLeAbIen7QtawCEXho/Z4fnF8WgSJ4Drhq//d6ftD3XwJF8EGt5DngVESk2/ODwX8S8PygCthk3X6tZBeAVtIUibR6fpAoqWCM+e3nJlPr7LPGTaYOl5gj3GTqnJtMNVo/ETdPFJepTctxYJdW8lW58CNr1gCPgQc2jfEpiuR8NXCwEri1Y0AzkLGMJVuKoOhAR+caD9wUgmvCmPEqmPiO8wgKk0aIJgEb+Dq/mxV12zAmL4wZaJiZaAHSdn0ujMSJgY9oJdvePsy8NDBjhOhbEE4GYTZXFcQNDNeBrdTXnjSmMAAmUZ/4dl8r2QaMWMZSJMJNpqLwYa1kRxjexr1Z1zjOS7uRy9NTmTMATfvyd8HsAepA7J+e6rgXSXMeaA8jcYC5SMoaPD8QoeMUzEfgm3XfhuMFYdJALfCkCC6Ahgjvk6OVzAGdduAkMB6KLFQ7OUAAz4Hu9XvGVgG8m8y8MbAgEK+L4OOWAdCulcw7AFrJLNAVFWlqzW4BcRS4UhCcBlZWVc9fIMZi4Ge1kiMQKVOt5CDQE4qsmH12CIcd1Wa+991k5gWYFlMwt5fSh9hJQYSHeiICT2slL4bz4i5aD3AE2K6V/BC345gIaoBbwFOt5NgvL0u0gYR9rnWTqfYyrSLnJlNu6FfUKiK7SgCKxYY3aus8fBfN+SzQrJV8H8cp2U21kl+AO9ZNe34wHAMHuFQKDjFnEBNJH9Bt3WEW6zyE92gl+8ut/6OAFRng510JrctWXlmr6JtsPzbZyFBnJXCoMILQbAObs7e/IvsBkv5/BeJknOEAAAAASUVORK5CYII=',
                function( event ) 
                {
                    Image3D_7ee09c29477e936d36c97691745b073c204d1a52.mouseEventGenerator.setControlState( event, MouseEventGenerator_7ee09c29477e936d36c97691745b073c204d1a52.CONTROL_TRANSLATE_XY );
                    Image3D_7ee09c29477e936d36c97691745b073c204d1a52.toolbar.activate( this );
                }
            )
        );
        Image3D_7ee09c29477e936d36c97691745b073c204d1a52.toolbar.addButton( 
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAUwwAAFMMBFXBNQgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKDSURBVEiJrZU9aBRBFIC/2btoc2k0onYqKYTgbnN722ohiqiFiNjZaBGi1ZmfMz9Kfi5nLhpEQnobg9gpsbK0GKZxaiFYpAgWxogoMbmMxc2Gybp3rpoHw+6bee97+97OvBHGGLJKEEbTwFet5HRWH+8v4UNANQijkT0N4MBjmQjC6P6eBEjAa8CCfX8QhNH4fwVIwKe0khWgzwkyGoTR1D8FCMIoB5y06oRWcgRAK2kSQS4FYVRoGcEY89vwi6Wj9tnhF0vXWtgIv1iq+MXSIasX0uxEcpvastwEzmol37dL3/E5DLwFXtkyppfIqXkXcCUL3MoNoAcYsowd2ckg8UMfaSXvxkbd52vdjRwvXUdjROXj0uAb5+NmgbJVa3EmXgq87sIBhGfWQSw2B13AKYFYc22sT92qO5kIv1hy4TNaycFWdThxoXbbCJ4KYfqXX1dm02yCMHoIDMSZeMC6s94ZhJFIczx2sXpmWzAHPGsDF0CnM/VFGGMIwugeEB+YBaDP7vcm/PLkcbGVVwhWRH77nPE2N/IbB358WLqzkYDPA712akArWfcAtJJVIG5gvcC8m4nXyF9FcBAIzJa3ys/9a5t8L7eB92sl6wD52EgrORWEkQeMW8MVoArgbTUWG/tyyi1HTrDsqLcceFkr+TheSDtoY8B14LRW8hMZJAijDuA58E4rObdrsUUbKNjnEb9YGmjTKmp+seTHeqZW4XxVAVA0G96ug5eo+WegRyu5msZp2U21kt+AF1YtB2E0kwIHeNIKDin/ICWTcWDUqjM093kMH9NKTrTz/2MAG2QSGE5Mj2gl2142kPFOtpdN1ZkazgKHjBnEYhvYulayltXnF0ETY0N5irsxAAAAAElFTkSuQmCC',
            function( event ) 
            {
                Image3D_7ee09c29477e936d36c97691745b073c204d1a52.mouseEventGenerator.setControlState( event, MouseEventGenerator_7ee09c29477e936d36c97691745b073c204d1a52.CONTROL_TRANSLATE_Z );
                Image3D_7ee09c29477e936d36c97691745b073c204d1a52.toolbar.activate( this );
            }
        );
        Image3D_7ee09c29477e936d36c97691745b073c204d1a52.toolbar.addButton( 
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAUwwAAFMMBFXBNQgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAPmSURBVEiJtZVdbFNlGMd/zznbWrqJCdkFuJisMqPJas/CTj9YMKEhIgwQg+K1KGq8MTFeWLxw4MWYEcFA/P64Nhr87qYsZFEjtqeDrdskJoNsiVEvFsc2t46t7Xm8GG0Krhsk+r98n+f5/Z//m5zziqryf6pqpaKISCAcbpWC7hAxdmSn/to2Ojq6YIUjZ9XljGD0Dp1PDugKW0qlmhWKPgp6ClhfPJup860Z6+u7aoUiZUP6B5jPZtI/f3VTBpZl1WqN96TAE0sd/CiududN6RlJpTIA97VGg4ahu4HdwOYlH3mf3PzzmUxmrqKBZVm11HhTQDMwgeiTGcf5ulJ8gGAoulfQD4B64BcWr0bKTYzrumu8x4BmhGRBNLgaHGAonfyyWgtBhCTQjMf7xrIJgqHQTsHoBial2gwOnjv3+2rwctm2vSEn5hBQLwb7BlOpz69LIGq8BSAGB28VDtDf3/+noTwOoC5vi4hRStASDjerygjohUzaaQWQxz41GycuVo9vZVE7Oty72095PHWTujC7Tjx1kzrySceiCNK49YinEfJ9fR15gJZQ5CeFNkM0POA46aUErjwIoGIkihttnLnsx+eZaXQ8bzbt6GrKy1w2O1dzPC/Zj+fmPFP+Xa+t9+88ehCfZ37M59lbnFNIALgq20tXpMJmYFpcKRlc+jZ+SVXfAQ4UTI6pkDXy1a+4oi8szeUPuyIvA9+PJ+Kni3MFgwQwjRAtXVEl3fPQ6/ULbm5MlDrg8FgifgTAv6urEzgEuKrY493xgUoMAyAQCNT4YzHvjcWc5htE8QEIcmfxvDa70AnkUL5ZDu6PxbyBQKCmZGD6ak+vnc3OByIRq7xRXU6gXBHkQ0UP3LXnVQtgpK9jFsgjTN0It+zNkbWz2XlzTV2iZCAuZwCqCrqztEX70YdBYyraWW1WxYFZdfV4pasoSdxrDF1iArgUegUTNaQd6AIY6z70BSBlo7eXc8YScd9yfIV2AQzR3lKCof7+X4HLKPdb4fCeVbesICsUfUQgBPw2mE5nSgZL0fQZQFH5yLbtDbcK37Rpyx2g7wEqLk8V34iSQcZxzqJ6EqjPGeZnLW1tDTcLb2lrayhU5U4D61A9OXg+9V2xdt3fdOa22jgwgBLVfGE4aEf2rwYP2pH9mi8Mo0RBnOz0lRfL6//60PyxmHft33NdiDwHiCgZ15AecHuGHOcHgBY7ukVx2wVpV8ECVOHE/NTkS6OjowsrGhRlhcPbUHkX2FhKuNyTqYy7Ik8Pp5O9y3EqPvoZxzkLNAVt+14D8wE12F47MeFeK3cjcsY06L2QTF6sxFgxwX+lfwBl/7JL8gMxeQAAAABJRU5ErkJggg==',
            function( event ) 
            {
                Image3D_7ee09c29477e936d36c97691745b073c204d1a52.mouseEventGenerator.setControlState( event, MouseEventGenerator_7ee09c29477e936d36c97691745b073c204d1a52.CONTROL_ROTATE_XY );
                Image3D_7ee09c29477e936d36c97691745b073c204d1a52.toolbar.activate( this );
            }
        );
        Image3D_7ee09c29477e936d36c97691745b073c204d1a52.toolbar.addButton( 
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAUwwAAFMMBFXBNQgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANkSURBVEiJtZXNT5xVFMZ/574DTKGyaEi0kkZIXWiYzjsp73ww6cJJY20JVaPWtbFa48bEFdWNX2msiYkGkxq18R9Q2vgxgExIE01wZqCFAetmVJoYdYHWUoEpwtzjgs4I+DJQo8/ynOc8zz25OeeIqvJ/IlArKSISisU6payHRczhxWu/HSwWi0tuLD6ilmHBZKYuZie0xitls5wbTTwG+g5wRyV2fWfjjpkLF2640fiaIv0ZnGcLY19/ui0D13WbtD7YJ/DkKoOvxOrAiiOD3+RyBYB9nYmwMdoD9ABdqz7yAcul5wuFwsKmBq7rNlEfzAEdwCyixwv5/GebtQ8QjiYeEvQs0AJc5s8b8bUmZh27Pvgm0IGQLYuGtxIHmBrLflKn5TBCFuigIfi2bwfhaPSIYAaAq1LnhCdHR3/aSnwtPM/bvSzOFNAihkcmc7nz6zoQNWcAxPDUrYoDjI+P/2KUJwDU8q6ImKpBJBbrQGgDvVRx/jeYGM+lBUaB2yPRaCdU5sDKAwiomLRf4Z6jp1oD1unfEH55Jn1yaCNXIQ0krcohYMwAqNAFzIkVXwOjziIwBAwptAIxY2Xej1s2pIE5hATUGDQ/tPW8flxUziLy0sznva9up8YAhEKh+vZUKlhb/I2kqJwBOXcl3ftaLW57KhUMhUL1VQOnsam/eX6xFIrHXb+CPUdPtYpqP/D9coM90XbfKw3y+EeOH9f1uuLN84slZ8fOdNVALMMAgbIe8StybOBhVnfSvXVL8iuNDaX2hR9e8H2+2JsauqoJYClnBAc10g2c3lhjA3LesXp5fXBlxk9foVsAI5qBNZ/sRuPfAXsRfXA7K8IPbjTxKOjHwI9T4/m7VFX/3kWizwCKyoee5+2+VfH9+w/cCfo+oGJ5unIjqgaFfH4E1T6gZdk45yLJZOt2xSPJZGs5sNwP7EK1b/Ji7otKbt02vX5b00lgAiWhK+XpsBc/tpV42Isf05XyNEoCJL8493vv2vw/Bq09lQo2/7FwGpHnABGlYI0Mgh2cyue/BIh4iQOK7RakWwUXUIW3SteuvlgsFpdqGlTgxmIHUXkP2Fvt0O9kKlesyInpsWzGT2fTo1/I50eAu8Oed4/BuV8Nh5pmZ+3N9AAiw44hcymb/XYzjZod/Ff4C3BLaHc8XLxLAAAAAElFTkSuQmCC',
            function( event ) 
            {
                Image3D_7ee09c29477e936d36c97691745b073c204d1a52.mouseEventGenerator.setControlState( event, MouseEventGenerator_7ee09c29477e936d36c97691745b073c204d1a52.CONTROL_ROTATE_Z );
                Image3D_7ee09c29477e936d36c97691745b073c204d1a52.toolbar.activate( this );
            }
        );
        Image3D_7ee09c29477e936d36c97691745b073c204d1a52.toolbar.addButton( 
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAUwwAAFMMBFXBNQgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKYSURBVEiJtZRPSFRRFIe/8+Zppi2KoiiCojSEyKmcZhISE4Ig3UQFQS2iTaVWq1CjsEXQH2whZdKuCIRatAg1aBOtauZJqIsWRSkZFET0hwqdZubXoiZnpueUpgfe4p7z3vedc3n3miRmM1yA9ZHITiVVk1s0U/eA58XyATaEw5tSKfbl5oXFhvqj3S6AkqrB7Hg2na5Bz/P+1uGA5/VXVEYOYGrIbo4bQLfj+5XRNeTFGvUP+ydJg/2PGw11+tX/FEwBnhkDXqzJ4Ep+wTThE5LoUcFlf8F/wtMx5EWPIXX8TkgiGAqFAZPETD3BysgWST+hsxlu5qJ0e/vipJu4+2v5Fbg53NtyfVXd+R6Mjy97Wvavqr+wX1KTq5KasXkJJ/At3mFSBPhk4uzLvpb7mcysCcp2XFyesNQoRh+iCNgaSLhLk25iAFiK2AtagdmFRMmcYvfLeBfGXuAaqA7MRkpWr9HtPck00/8cSKOg54CjOcmiiXa4iFlxxpv1YPdcjZ82nIMSu1e+e1qQifIXYIeAPZK1v7jb/OpX8h6wCDgMUPghXogxH/T2u1NULfTQjCeBkoLSvwpknBrubV040td8YiLJqGHngCUA8QWFceAZUOt+Twwha/BjTTKBf+jbWDvY8EQjdgIoS7qBV5iugmJjhfYmj2DuOxxqA47dzAI72uWYLg0/aBtLmbbhUPt67efxkZ7mXnNTy5RSHWjzSDhe9fpO6/vsriTWVVaWz+Qhk8TajVWlkn5OYDiHg5siZ6ayXfkiGAofcZ3EydwtapsJSTAUPoJZp8ycXMF/S9JwwNI5v79oWhI/+GSCKUsmg0P6sjN7AnYrp1YeDFVFBvsfRfPBK0KhcrNANdjtrEIqFQVm/7r+AbMwjQnKOMtVAAAAAElFTkSuQmCC',
            function( event ) 
            {
                var oldDriver = Image3D_7ee09c29477e936d36c97691745b073c204d1a52.renderer.getDriver();
                Image3D_7ee09c29477e936d36c97691745b073c204d1a52.renderer.setDriver( new PngDriver_7ee09c29477e936d36c97691745b073c204d1a52() );
                Image3D_7ee09c29477e936d36c97691745b073c204d1a52.renderer.render();
                Image3D_7ee09c29477e936d36c97691745b073c204d1a52.renderer.setDriver( oldDriver );
                return false;
            }
        );
        Image3D_7ee09c29477e936d36c97691745b073c204d1a52.toolbar.addButton( 
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAUwwAAFMMBFXBNQgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAALDSURBVEiJtZVfiFR1FMc/33vHGQ0CEbaoxCxWWsictrnOsGDsQxrpRlGvvki9ZKZBuKx/EFsCdX0TXYTeRNpog32IzT8EQi/W7B1ldx8iiNgtMEZMqIdwWefebw825czOrrmuB+7LOfd+Pueee35c2eZhRgbgxVLpLSfubi5KHhqP47GFAJ3F4sY0ZXtz3mhsslIeygA4cTfSh410Tk/EcXyvDsfjuLKhUNqB/H5jc5wBhoKWT4nTk/HYLv+P+dn2ROX7XcKDrepzBfcBvzvG47EPBKcWFiwS/p+kvNtwsrXgAeH1mIzLe7BP/JuwTT6KioBss1RXvlDaZPsO9GFGpjnR/vqR9QnBgMzjmAtT5/cdWrvt2AVbk9Pn+nqf3Xr8OQfpGQcMhDO6lGR9EuiU+d2BDk6P9l2+mzdnixIHg5g2iy9T0fd0z0AXcFNK31F/f+DArwGlIE2uplmfFbwt+AaxTvY9tggA/QwUsF/B7Jge7bssewS0ak2c6zTeLLiy6nrbb8CroOFUfIK93ebdKPp02YIjIjvzEbeXT9vsltjyTM/R7K1k2fCKTO1WaG017k6tY38+dnMlKAeuhqjH4qyA60/cWA1ca/kGEmI29zlOV4SzagcSEayvXtz7F+ii8R7gUWXSkZ/O7b8BVI231EJdAg7MnUaTwMbGFVBvmvWvwEwaJp8BiHQEaAN+mPpq/4//3L9XKApr6TXgCPDt7dncHw1Nt1rTdduOttWkAoTjU1/3VgGeeqP/kaxzReRqXQCw5s3jTwaJO42rv4zuuzIHZpsXCoWOpTxktnn+pa5223dGJIL38htLH7ea4WIiHxV3ZoLaAWj8BoeXQpKPijuRBi0FzYIHltThgOq5Vj+cRUlawecT3LdkPjjUT7J0FfRFU60jH3WVJirflReCb4iiDil8GTTcUEjTMsxzDpYy/gZYSq+GrT8bOwAAAABJRU5ErkJggg==',
            function( event ) 
            {
                var oldDriver = Image3D_7ee09c29477e936d36c97691745b073c204d1a52.renderer.getDriver();
                Image3D_7ee09c29477e936d36c97691745b073c204d1a52.renderer.setDriver( new SvgDriver_7ee09c29477e936d36c97691745b073c204d1a52() );
                Image3D_7ee09c29477e936d36c97691745b073c204d1a52.renderer.render();
                Image3D_7ee09c29477e936d36c97691745b073c204d1a52.renderer.setDriver( oldDriver );
                return false;
            }
        );

        // Put everything together and add it to the document
        Image3D_7ee09c29477e936d36c97691745b073c204d1a52.container.appendChild( Image3D_7ee09c29477e936d36c97691745b073c204d1a52.canvas );
        Image3D_7ee09c29477e936d36c97691745b073c204d1a52.container.appendChild( Image3D_7ee09c29477e936d36c97691745b073c204d1a52.controlOverlay );
        scriptTag_7ee09c29477e936d36c97691745b073c204d1a52.parentNode.insertBefore( Image3D_7ee09c29477e936d36c97691745b073c204d1a52.container, scriptTag_7ee09c29477e936d36c97691745b073c204d1a52.nextSibling );

        // Init a new renderer
        Image3D_7ee09c29477e936d36c97691745b073c204d1a52.renderer = new Renderer_7ee09c29477e936d36c97691745b073c204d1a52();
        Image3D_7ee09c29477e936d36c97691745b073c204d1a52.renderer.setDriver( new CanvasDriver_7ee09c29477e936d36c97691745b073c204d1a52( Image3D_7ee09c29477e936d36c97691745b073c204d1a52.canvas ) );
        Image3D_7ee09c29477e936d36c97691745b073c204d1a52.renderer.setEventGenerator( Image3D_7ee09c29477e936d36c97691745b073c204d1a52.mouseEventGenerator );

        // Render the scene for the first time
        Image3D_7ee09c29477e936d36c97691745b073c204d1a52.renderer.render();
    }
}


// Register our new onload function
document.addEventListener(  "DOMContentLoaded", Image3D_7ee09c29477e936d36c97691745b073c204d1a52.init, false );
