import { decrement, increment ,incrementByAmount,decrementByAmount} from '../stores/counterSlice'
import { useDispatch } from 'react-redux'

const CounterActions = () => {

  const dispatch = useDispatch()

  return (
    <div>
        <button onClick={()=>dispatch(increment())}>arttir</button>
        <button onClick={()=>dispatch(decrement())}>azalt</button>
        <button onClick={()=>dispatch(incrementByAmount(4))}>4 arttir</button>
        <button onClick={()=>dispatch(decrementByAmount(4))}>4 azalt</button>
    </div>
  )
}

export default CounterActions