// import React, { useState } from 'react'
// import Calendar from 'react-calendar'

// const BCalendar = () => {
//   const [value, setValue] = useState(new Date())

//   const disabledDates = [tomorrow, in3Days, in5Days]

//   function tileDisabled({ date, view }) {
//     Disable tiles in month view only
//     if (view === 'month') {
//       Check if a date React-Calendar wants to check is on the list of disabled dates
//       return disabledDates.find((dDate) => isSameDay(dDate, date))
//     }
//   }
//   function onChange(nextValue) {
//     console.log(nextValue)
//     // console.log(value)
//     setValue(nextValue)
//   }

//   return (
//     <Calendar onChange={onChange} value={value} />
//     <Calendar onChange={onChange} value={value} tileDisabled={tileDisabled} />
//   )
// }
// export default BCalendar
