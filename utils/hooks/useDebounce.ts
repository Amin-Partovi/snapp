import { useEffect, useState } from 'react'

function useDebounce<T>(value: T, delay: number=500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer:ReturnType<typeof setTimeout> = setTimeout(() => setDebouncedValue(value), delay )

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}

export default useDebounce
