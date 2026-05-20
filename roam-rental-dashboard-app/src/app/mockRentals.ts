import { Rental } from './sharedTypes/rental'

export interface MockRental extends Rental {
  categories: string[]
}

export const mockRentals: MockRental[] = [
  {
    id: 101,
    name: 'Summit Trail Camper',
    description: 'Compact towable camper with solar charging and a fold-out galley.',
    categories: ['utility-trailer', 'camper', 'compact'],
    images: [
      {
        id: 1,
        url: '/demo-rentals/summit-trail-camper.svg',
      },
    ],
  },
  {
    id: 102,
    name: 'Lakeside Tow Rig',
    description: 'Tow vehicle configured for weekend trips and light adventure gear.',
    categories: ['tow-vehicle', 'truck', 'weekend'],
    images: [
      {
        id: 2,
        url: '/demo-rentals/lakeside-tow-rig.svg',
      },
    ],
  },
  {
    id: 103,
    name: 'Desert Gear Trailer',
    description: 'Utility trailer with storage for bikes, boards, and camping equipment.',
    categories: ['utility-trailer', 'gear', 'storage'],
    images: [
      {
        id: 3,
        url: '/demo-rentals/desert-gear-trailer.svg',
      },
    ],
  },
  {
    id: 104,
    name: 'Family Road Suite',
    description: 'Roomy travel setup for family routes, remote work, and long weekends.',
    categories: ['other', 'family', 'travel'],
    images: [
      {
        id: 4,
        url: '/demo-rentals/family-road-suite.svg',
      },
    ],
  },
]
