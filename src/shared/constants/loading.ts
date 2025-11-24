/**
 * Loading system constants
 */

export const LOADING_CONSTANTS = {
  LOADING_TIMEOUT: 3000,
  FADE_OUT_DELAY: 300,
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
    SPINNER_ACTIVE: '#fafad2',
    OVERLAY_BACKGROUND: '#0f0f0f',
    TEXT_COLOR: '#fafad2'
  }
} as const;
