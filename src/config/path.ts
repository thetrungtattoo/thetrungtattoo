export const ROUTE_PATHS = {
  ROOT: '/',
  ABOUT: '/about-us',
  CONTACT: '/contact-us',
  SERVICES: '/our-services',
  PRODUCTS: '/our-collections',
  BLOG: '/blog',
  
  COLLECTIONS: {
    REALISTIC: '/our-collections/realistic',
    LINEWORK: '/our-collections/linework',
    BLACK_GREY: '/our-collections/black-grey',
    WATERCOLOR: '/our-collections/watercolor',
    TRADITIONAL: '/our-collections/traditional',
    JAPANESE: '/our-collections/japanese',
    TRIBAL_POLYNESIAN_MAORI: '/our-collections/tribal-polynesian-maori',
    ARM: '/our-collections/arm-tattoos',
    BACK: '/our-collections/back-tattoos',
    LEG: '/our-collections/leg-tattoos',
    CHEST_SHOULDER: '/our-collections/chest-shoulder-tattoos',
    BELLY_TATTOO: '/our-collections/belly-tattoos',
    NECK_TATTOO: '/our-collections/neck-tattoos',
    ANKLE_WRIST_TATTOO: '/our-collections/ankle-wrist-tattoos',
  },

  SERVICE_TATTOO: {
    CUSTOM_TATTOOS: '/our-services/custom-tattoos',
    PERSONALIZED_TATTOO: '/our-services/personalized-tattoo',
    TATTOO_CARE_REMOVAL: '/our-services/tattoo-care-and-removal',
    TRAINING_WORKSHOP: '/our-services/training-and-workshop',
  },

  BUSINESS: {
    PRICING: '/tattoo-pricing',
    FULL_BACK: '/tattoo-pricing/full-back',
    FULL_BODY: '/tattoo-pricing/full-body',
    FULL_ARM: '/tattoo-pricing/full-arm',
    HALF_SLEEVE: '/tattoo-pricing/half-sleeve',
    FULL_LEG: '/tattoo-pricing/full-leg',
    A4_SIZE: '/tattoo-pricing/a4-size',
    APPOINTMENT: '/book-appointment',
  },

  BRAND: {
    HIUBDN: '/hiubdn-experience',
  },

  LEGAL: {
    TERMS: '/terms-of-service',
  },

  BLOG_TATTOO: {
    MEANING: '/blog/tattoo-meaning',
    STORIES: '/blog/customer-stories',
    AFTERCARE: '/blog/aftercare',
  },

  NEWS: {
    LIST: '/news',
    DETAIL: '/news/:id',
  },

  MEANING: {
    LIST: '/meaning',
    DETAIL: '/meaning/:id',
  },

  SUPPORT: {
    CHAT: '/support/chat',
    FEEDBACK: '/support/feedback',
    FAQ: '/support/faq',
    TERMS: '/support/terms',
    COMMUNITY_STANDARDS: '/support/community-standards',
  },
} as const;
