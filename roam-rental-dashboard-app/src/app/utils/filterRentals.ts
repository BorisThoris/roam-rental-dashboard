import { Rental } from '../sharedTypes/rental'

export const filterRentals = (
  rentals: Rental[],
  query?: string,
): Rental[] => {
  const searchValue = query ? query.trim().toLowerCase() : ''

  if (!searchValue) {
    return rentals
  }

  return rentals.filter((rental) => {
    const searchableText = [
      rental.name,
      rental.description,
      ...(rental.categories ?? []),
    ].join(' ').toLowerCase()

    return searchableText.includes(searchValue)
  })
}
