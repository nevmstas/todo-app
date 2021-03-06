import React, {useState} from 'react'

import PropTypes from 'prop-types'

function useIntutValue(defaultValue = ''){
    const [value, setValue] = useState(defaultValue)

    return{
        bind:{
        value,
        onChange: event => setValue(event.target.value)
    },
    clear: () => setValue(''),
    value: () => value

    }
}
function AddTodo({onCreate}) {
   
    const input = useIntutValue('')

    function submitHandler(event){
        event.preventDefault()
        
        if(input.value().trim()){
            onCreate(input.value())
            input.clear()
        }
    }

    return(
        <form style = {{marginBottom:'1rem'}} onSubmit={submitHandler}>
            <input type='text' {...input.bind}/>
            <button className={'addBtn'} type='submit'>+</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}
export default AddTodo