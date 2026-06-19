import { defineThemeConfig } from '@utils/defineThemeConfig'
import previewImage from '@assets/img/social-preview-image.png'
import logoImage from '@assets/img/logo.svg'

export default defineThemeConfig({
  name: 'Xojiakbar Akramov',
  id: 'xojiakbar-portfolio',
  logo: logoImage,
  seo: {
    title: 'Xojiakbar Akramov — Full-Stack Developer',
    description:
      'Full-stack developer building web applications with Django, JavaScript, and AI. Based in Uzbekistan.',
    author: 'Xojiakbar Akramov',
    image: previewImage,
  },
  colors: {
    primary: '#d648ff',
    secondary: '#00d1b7',
    neutral: '#b9bec4',
    outline: '#ff4500',
  },
  navigation: {
    darkmode: true,
    items: [
      {
        type: 'link',
        label: 'Home',
        href: '/',
      },
      {
        type: 'link',
        label: 'About',
        href: '/about',
      },
      {
        type: 'link',
        label: 'Portfolio',
        href: '/portfolio',
      },
      {
        type: 'link',
        label: 'Contact',
        href: '/contact',
      },
      {
        type: 'link',
        label: 'Go to my GitHub profile, opens in new tab',
        href: 'https://github.com/XOJIAKBAR-9',
        icon: 'lucide:github',
        external: true,
        excludeFromLauncher: true,
      },
    ],
  },
  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/XOJIAKBAR-9',
      icon: 'lucide:github',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/xojiakbar-akramov-9508a1332',
      icon: 'lucide:linkedin',
    },
  ],
})
