import Counter from "components/Counter"
import ConnectingDots from "components/ConnectingDots"

export default function Playground() {

  return (
    <div className='bg-black'>
      <Counter />
      <ConnectingDots />
      <div style={{ height: "100vh" }}></div>
    </div>
  )
}
