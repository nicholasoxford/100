export default function InfoSlot(props: infoProps) {
  return (
    <div>
      <h2>Day: </h2>
      <div> {props.day}</div>
      <h2>Description:</h2>
      <div>{props.description}</div>
      <h2>Goals:</h2>
      <div className="text-3xl font-bold underline">{props.goal}</div>
    </div>
  )
}

export type infoProps = {
  day: number
  description: string
  goal: string
}
