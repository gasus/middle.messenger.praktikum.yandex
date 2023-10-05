export const validateName = (str: string): string => {
  if (str.match(/[0-9\s]/)) {
    return 'Недопустимы пробелы или цифры'
  }

  if (str.match(/[^\w-]/)) {
    return 'Недопустимы спецсимволы (за искл. дефиса)'
  }

  const regex = /^[a-zA-Zа-яА-Я]+$/
  if (!regex.test(str) || str.charAt(0) !== str.charAt(0).toUpperCase()) {
    return 'Допустима только латиница и кирилица c заглавной буквы'
  }

  return ''
}

export const validateLogin = (str: string): string => {
  if (str.length < 3 || str.length > 20) {
    return 'Должен быть от 3 до 20 символов'
  }

  if (/^[а-яА-Я]+$/.test(str)) {
    return 'Допустима только латиница'
  }

  if (str.includes(' ')) {
    return 'Недопустимы пробелы'
  }

  if (/[^\w-]/.test(str)) {
    return 'Недопустимы сцецсимволы, кроме дефиса и нижнего подчеркивания'
  }

  if (/^\d+$/.test(str)) {
    return 'Не может состоять только из цифр'
  }

  return ''
}

export const validateEmail = (str: string): string => {
  return /^[\w-]+@[a-zA-Z]+\.[a-zA-Z]+$/.test(str)
    ? ''
    : 'В email-адресе допущена ошибка'
}

export const validatePassword = (str: string): string => {
  if (str.length < 8 || str.length > 40) {
    return 'Должен быть от 8 до 40 символов'
  }

  if (!/(?=.*[A-Z])/.test(str)) {
    return 'Должен содержать хотя бы одну заглавную букву'
  }

  if (!/(?=.*\d)/.test(str)) {
    return 'Должен содержать хотя бы одну цифру'
  }

  return ''
}

export const validatePhone = (str: string): string => {
  if (str.length < 10 || str.length > 15) {
    return 'Должен быть от 10 до 15 символов'
  }

  if (!/^\+?\d+$/.test(str)) {
    return 'Должен состоять из цифр и может начинаться с плюса'
  }

  return ''
}
