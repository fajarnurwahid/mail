/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'checkbox': 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEwLjAwMDcgMTUuMTcwOUwxOS4xOTMxIDUuOTc4NTJMMjAuNjA3MyA3LjM5MjczTDEwLjAwMDcgMTcuOTk5M0wzLjYzNjcyIDExLjYzNTRMNS4wNTA5MyAxMC4yMjEyTDEwLjAwMDcgMTUuMTcwOVoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMSkiPjwvcGF0aD48L3N2Zz4=")'
      }
    },
  },
  plugins: [],
}

