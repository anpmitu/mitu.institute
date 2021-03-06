/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')
const { createSecureHeaders } = require('next-secure-headers')
const dev = process.env.NODE_ENV !== 'production'

module.exports = withPWA({
  async redirects() {
    return [
      {
        source: '/promo',
        destination: '/',
        permanent: true
      }
    ]
  },
  reactStrictMode: true,
  poweredByHeader: false,
  // trailingSlash: true,
  i18n: {
    locales: ['ru', 'kk_KZ', 'uz_UZ'],
    defaultLocale: 'ru',
    localeDetection: true,
    domains: [
      {
        domain: 'mitm.uz',
        defaultLocale: 'uz_UZ',
        http: dev
      }
    ]
  },
  images: {
    // loader: 'cloudinary',
    // path: 'https://res.cloudinary.com/mitu-institute/',
    domains: ['res.cloudinary.com']
  },
  pwa: {
    dest: 'public',
    disable: dev,
    register: true,
    scope: '/'
  },
  async headers() {
    return [
      {
        source: '/:path*',
        // headers: createSecureHeaders()
        headers: createSecureHeaders({
          referrerPolicy: 'no-referrer-when-downgrade',
          frameGuard: false
        })
      }
    ]
  }
})
