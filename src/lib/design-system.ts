/**
 * Near&Dear Design System
 * Based on the app's design tokens
 */

export const colors = {
  primary: {
    50: '#F3F0FF',
    100: '#E9E4FF',
    200: '#D5CDFF',
    300: '#B8ABFF',
    400: '#9B89FF',
    500: '#806DF6',
    600: '#6B54E8',
    700: '#5A43D4',
    800: '#4A36B0',
    900: '#3D2D8E',
  },
  secondary: {
    50: '#EEF4FB',
    100: '#D6E5F7',
    200: '#B5D0F0',
    300: '#8BB5E6',
    400: '#6A9CD9',
    500: '#4F7FC6',
    600: '#3E68A8',
    700: '#33548A',
    800: '#2C4672',
    900: '#283C5E',
  },
  neutral: {
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
    950: '#020617',
  },
  success: '#16A34A',
  warning: '#D97706',
  error: '#B91C1C',
  info: '#2563EB',
} as const;

export const gradients = {
  primary: 'linear-gradient(135deg, #806DF6 0%, #4F7FC6 100%)',
  primarySoft: 'linear-gradient(135deg, #F3F0FF 0%, #EEF4FB 100%)',
  heroBg: 'linear-gradient(180deg, #F8FAFC 0%, #F3F0FF 50%, #EEF4FB 100%)',
  cta: 'linear-gradient(135deg, #806DF6 0%, #4F7FC6 100%)',
  cardHover: 'linear-gradient(135deg, rgba(128, 109, 246, 0.05) 0%, rgba(79, 127, 198, 0.05) 100%)',
} as const;

export const glass = {
  light: {
    background: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
  },
  dark: {
    background: 'rgba(15, 23, 42, 0.7)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  primary: {
    background: 'rgba(128, 109, 246, 0.1)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    border: '1px solid rgba(128, 109, 246, 0.2)',
  },
} as const;
