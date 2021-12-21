export default function filter_in_place<T>(array: Array<T>, condition: (value: T) => boolean) {
  let next_place = 0

  for (let value of array) {
    if (condition(value)) array[next_place++] = value
  }

  array.splice(next_place)
}
