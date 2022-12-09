const Barbers = ({ handleClick, isActive }) => {
  console.log(isActive)

  return (
    <div>
      <h1 onLoad={() => handleClick()}>Barbers</h1>
    </div>
  )
}

export default Barbers
