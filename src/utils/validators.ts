export const isEmail = (v: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

export const isSixDigitCode = (v: string) =>
  /^\d{6}$/.test(v)