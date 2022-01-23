import InfoSlot from 'ui/components/info'

import { days } from '../../../public/days'
export default function Page() {
  const props = days.filter(day => day.day === 7)[0]
  return (
    <div>
      <InfoSlot {...props} />
    </div>
  )
}
