// import product3 from '../images/book.jpeg'

const Barbers = ({ handleClick, isActive }) => {
  console.log(isActive)

  return (
    <div onTouchStart={() => handleClick()}>
      {/* {!isActive ? handleClick() : handleClick()} */}
      {/* <img src={product3} alt='' onLoad={() => handleClick()}></img> */}
      <h1>Barbers</h1>
    </div>
  )
}

export default Barbers
