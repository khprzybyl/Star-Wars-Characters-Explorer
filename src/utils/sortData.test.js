import { sortData } from './sortData'

describe('sortData', () => {
  const mockData = [
    {
      name: 'Character A',
      height: '172',
      mass: '77',
      created: '2014-12-09',
      edited: '2014-12-20',
      planetData: { name: 'Tatooine' },
    },
    {
      name: 'Character B',
      height: '150',
      mass: '55',
      created: '2014-11-09',
      edited: '2014-11-20',
      planetData: { name: 'Alderaan' },
    },
    {
      name: 'Character C',
      height: '200',
      mass: '80',
      created: '2014-10-09',
      edited: '2014-10-20',
      planetData: { name: 'Yavin IV' },
    },
    {
      name: 'Character D',
      height: '165',
      mass: '65',
      created: '2014-10-10',
      edited: '2014-10-22',
    }, // No planetData
  ]

  test('should correctly sort by planet name in ascending order', () => {
    const sortedByPlanetNameAsc = sortData(mockData, 'planet name', 'asc')
    expect(sortedByPlanetNameAsc[0].planetData?.name).toBe('Alderaan')
    expect(sortedByPlanetNameAsc[1].planetData?.name).toBe('Tatooine')
    expect(sortedByPlanetNameAsc[2].planetData?.name).toBe('Yavin IV')
    expect(sortedByPlanetNameAsc[3].planetData?.name).toBeUndefined()
  })

  test('should correctly sort by height in ascending order', () => {
    const sortedByHeightAsc = sortData(mockData, 'height', 'asc')
    expect(sortedByHeightAsc[0].height).toBe('150')
    expect(sortedByHeightAsc[1].height).toBe('165')
    expect(sortedByHeightAsc[2].height).toBe('172')
    expect(sortedByHeightAsc[3].height).toBe('200')
  })

  test('should correctly sort by height in descending order', () => {
    const sortedByHeightDesc = sortData(mockData, 'height', 'desc')
    expect(sortedByHeightDesc[0].height).toBe('200')
    expect(sortedByHeightDesc[1].height).toBe('172')
    expect(sortedByHeightDesc[2].height).toBe('165')
    expect(sortedByHeightDesc[3].height).toBe('150')
  })

  test('should correctly sort by mass in ascending order', () => {
    const sortedByMassAsc = sortData(mockData, 'mass', 'asc')
    expect(sortedByMassAsc[0].mass).toBe('55')
    expect(sortedByMassAsc[1].mass).toBe('65')
    expect(sortedByMassAsc[2].mass).toBe('77')
    expect(sortedByMassAsc[3].mass).toBe('80')
  })

  test('should correctly sort by mass in descending order', () => {
    const sortedByMassDesc = sortData(mockData, 'mass', 'desc')
    expect(sortedByMassDesc[0].mass).toBe('80')
    expect(sortedByMassDesc[1].mass).toBe('77')
    expect(sortedByMassDesc[2].mass).toBe('65')
    expect(sortedByMassDesc[3].mass).toBe('55')
  })

  test('should correctly sort by creation date in descending order', () => {
    const sortedByCreatedDesc = sortData(mockData, 'created', 'desc')
    expect(sortedByCreatedDesc[0].created).toBe('2014-12-09')
    expect(sortedByCreatedDesc[1].created).toBe('2014-11-09')
    expect(sortedByCreatedDesc[2].created).toBe('2014-10-10')
    expect(sortedByCreatedDesc[3].created).toBe('2014-10-09')
  })

  test('should correctly sort by creation date in ascending order', () => {
    const sortedByCreatedAsc = sortData(mockData, 'created', 'asc')
    expect(sortedByCreatedAsc[0].created).toBe('2014-10-09')
    expect(sortedByCreatedAsc[1].created).toBe('2014-10-10')
    expect(sortedByCreatedAsc[2].created).toBe('2014-11-09')
    expect(sortedByCreatedAsc[3].created).toBe('2014-12-09')
  })
})
