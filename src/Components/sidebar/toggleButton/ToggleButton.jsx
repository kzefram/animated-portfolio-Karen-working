

const ToggleButton = ({setOpen}) => {
    
  return (
    <button onClick={()=>setOpen((pre) => !pre)}>
      <svg width={30} height={30} viewBox="0 0 24 24">
        <motion.path strokewith="2" stroke="#0c0c1d" strokeLinecap="round" />
      </svg>
    </button>
  )
}

export default ToggleButton
