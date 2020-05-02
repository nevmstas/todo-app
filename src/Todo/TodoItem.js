import React from 'react'
import PropTypes from 'prop-types'


const styles = {
    div: {
        displey: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alingItems: 'center',
        
        border: '1px solid #ccc',
        padding: '.5rem 1rem',
        borderRadius:'4px',
        marginBottom: '.5rem'

    },
    input:{
        marginRight: '1rem'
    }
}

const TodoItem = ({ todo, index, onChange }) =>{
    console.log('lulw', todo)
    return (

    <div style = {styles.div}>
            <input style={styles.input} 
            type='checkbox'
            onChange={() => onChange(todo.id)}/>
            <strong>{index + 1}</strong>
            &nbsp;
            {todo.title}
            <button className='rm'>Remove</button>
    </div>

    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index:PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default TodoItem