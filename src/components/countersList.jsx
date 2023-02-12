import React,{useState} from "react";
import Counter from "./counter";

const CountersList = () => {
    const initialState = [
        {id:0, value: 0, name: 'Ненужная вещь'},
        {id:1, value: 4, name: 'Ложка'},
        {id:2, value: 0, name: 'Вилка'},
        {id:3, value: 0, name: 'Тарелка'},
        {id:4, value: 0, name: 'Набор минималиста'}]

    
    const [counters, setCounters] = useState(initialState)
    const handleDelete = (id) => {
        //console.log('handleDelete', id)
        const newCounters = counters.filter((c) => 
            c.id !== id)
        setCounters(newCounters)
    }

    const handleReset = () => {
        //console.log('handle reset')
        setCounters(initialState)
    }

    const handleIncrement = (id) => {
        const newCountersIncrement = counters.map((item) => (
            item.id === id
                ? {...item, value: item.value + 1}
                : item
        ))
        setCounters(newCountersIncrement) 
        
    }

    const handleDecrement = (id) => {
        const newCountersDecrement = counters.map((item) => (
            item.id === id
                ? {...item, value: item.value - 1}
                : item
        ))
        setCounters(newCountersDecrement) 
    }

    
    return <>
        {counters.map((count) =>
            <Counter 
            onDelete={handleDelete}
            onIncrement = {handleIncrement}
            onDecrement = {handleDecrement}
            {...count}
            />
        )}
        <button className="btn btn-pirimary btn-sm m-2" onClick={handleReset}>Сброс</button>
        
        
    </>
}

export default CountersList