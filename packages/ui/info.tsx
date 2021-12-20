export default function InfoSlot(props: infoProps) {
  return (
    <div>
      <h2>{props.day}</h2>
      <h2>{props.description}</h2>
      <h2>{props.goal}</h2>
    </div>
  );
}

export type infoProps = {
  day: number;
  description: string;
  goal: string;
};
