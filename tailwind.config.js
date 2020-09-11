module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },

  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
    },

    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '4.5rem'
    },

    colors: {
      'black': '#000000',
      'white': '#FFFFFF',
      'dark': '#323545',
      'dark-4c': '#4C4E5C',
      'light-dark': '#616477',
      'blue': '#2DABF6',
      'gray': '#F5F6F6',
      'dark-gray': '#949AA6',
      'dark-gray-8': '#8B8E9C',
      'transparent': 'transparent'
    }

  },

  corePlugins: {
    float: false
  }
  
}
