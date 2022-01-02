import InfoSlot, { infoProps } from 'ui/components/info'
export default function Five() {
  const props: infoProps = {
    day: 5,
    description:
      'I created a chrome extension that parses certain websites for longitude and latitude coordinates. Land watch then sends the long, lat, and zipcode to my api which returns a list of closest trader joes, air quality, and plant hardiness.',
    goal: 'Create a chrome extension.'
  }
  return (
    <div>
      <InfoSlot {...props} />
      <div className="text-3xl font-bold underline">hello world</div>
    </div>
  )
}
