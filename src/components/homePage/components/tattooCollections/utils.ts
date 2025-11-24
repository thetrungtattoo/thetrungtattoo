import type { CollectionTattoo } from './types'

/**
 * Determines the size class for a tattoo item based on its position in the grid
 * @param index - The index of the tattoo item
 * @returns The appropriate size class for the item's position
 */
export const getItemSizeClass = (index: number): CollectionTattoo => {
  const column = index % 3 // 0 for first column, 1 for second, 2 for third
  const positionInColumn = Math.floor(index / 3)

  if (column === 0) {
    // First column - 249x289, 249x284, 249x268
    const pattern = positionInColumn % 3
    return `col1-size${pattern + 1}` as CollectionTattoo
  } else if (column === 1) {
    // Second column - always 250x185
    return 'col2-size'
  } else {
    // Third column - 249x305, 249x185, 249x185
    const pattern = positionInColumn % 3
    return `col3-size${pattern + 1}` as CollectionTattoo
  }
}
