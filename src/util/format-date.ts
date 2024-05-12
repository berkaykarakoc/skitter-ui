export function formatISODate(isoDate: string): string {
  const parsedDate = new Date(isoDate)
  const currentDate = new Date()

  const timeDifference = currentDate.getTime() - parsedDate.getTime()
  const secondsPassed = Math.floor(timeDifference / 1000)
  const minutesPassed = Math.floor(timeDifference / (1000 * 60))
  const hoursPassed = Math.floor(timeDifference / (1000 * 60 * 60))

  if (secondsPassed < 60) {
    return `${secondsPassed}s`
  } else if (minutesPassed < 60) {
    return `${minutesPassed}m`
  } else if (hoursPassed < 24) {
    return `${hoursPassed}h`
  } else {
    return parsedDate.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }
}
