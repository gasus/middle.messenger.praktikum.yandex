export const identity: <T>(value: T) => T = (value) => value

export const last: <T>(list: T[]) => T | undefined = (list) => {
  const length = list?.length
  return Array.isArray(list) && length ? list[length - 1] : undefined
}

export const first: <T>(list: T[]) => T | undefined = (list) => {
  return Array.isArray(list) && list?.length ? list[0] : undefined
}

export const range = ({
  start = 0,
  end,
  step,
  isRight
}: {
  start?: number
  end?: number
  step?: number
  isRight?: boolean
}): number[] => {
  const rangeStart = end ? start : 0
  const rangeEnd = end ?? start
  const defaultStep = rangeStart < rangeEnd ? 1 : -1
  const rangeStep = step ?? defaultStep

  const stepCount = Math.max(Math.ceil((rangeEnd - rangeStart) / rangeStep), 0)

  const result = [...new Array(stepCount)]?.map(
    (_, index) => rangeStart + rangeStep * index
  )

  return isRight ? result.reverse() : result
}

// TODO: Не удалось типизировать
export const isEmpty = (value: any): boolean => {
  switch (typeof value) {
    case 'string':
      return !value.length
    case 'object':
      if ([null].includes(value)) {
        return true
      } else if (value?.size !== undefined) {
        return !value?.size
      } else if (value?.length !== undefined) {
        return !value.length
      } else {
        return Object.keys(value).length === 0
      }
    default:
      return true
  }
}

type PlainObject<T = any> = {
  [k in string]: T
}

const isPlainObject = (value: unknown): value is PlainObject => {
  return (
    typeof value === 'object' &&
    value !== null &&
    value.constructor === Object &&
    Object.prototype.toString.call(value) === '[object Object]'
  )
}

const isArray = (value: unknown): value is [] => {
  return Array.isArray(value)
}

const isArrayOrObject = (value: unknown): value is [] | PlainObject => {
  return isPlainObject(value) || isArray(value)
}

export const isEqual = (lhs: PlainObject, rhs: PlainObject): boolean => {
  if (Object.keys(lhs).length !== Object.keys(rhs).length) {
    return false
  }

  for (const [key, value] of Object.entries(lhs)) {
    const rightValue = rhs[key]
    if (isArrayOrObject(value) && isArrayOrObject(rightValue)) {
      if (isEqual(value, rightValue)) {
        continue
      }
      return false
    }

    if (value !== rightValue) {
      return false
    }
  }

  return true
}
