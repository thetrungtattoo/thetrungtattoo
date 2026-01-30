/**
 * Loading system constants
 */

export const LOADING_CONSTANTS = {
  LOADING_TIMEOUT: 1000,
  FADE_OUT_DELAY: 200,
  DEFAULT_LOADING_MESSAGE: "The Thế Trung Tattoo...",
  LOADING_OVERLAY_Z_INDEX: 1000,
  INITIAL_LOADING_Z_INDEX: 9999,
  SPINNER_SIZE: {
    INITIAL: 60,
    PAGE: 50,
    MOBILE: 40
  },
  
  COLORS: {
    SPINNER_BORDER: '#222',
    SPINNER_ACTIVE: '#ddeeff',
    OVERLAY_BACKGROUND: '#0f0f0f',
    TEXT_COLOR: '#ddeeff'
  }
} as const;
