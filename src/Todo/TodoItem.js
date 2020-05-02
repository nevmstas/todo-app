import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from '../context'

const styles = {
    div: {
        displey: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alingItems: 'center',
        background: 'white',
        
        border: '1px solid #ccc',
        padding: '.5rem 1rem',
        borderRadius:'10px',
        marginBottom: '.5rem',


    },
    input:{
        marginRight: '1rem'
    }
}

const TodoItem = ({ todo, index, onChange }) =>{
    console.log('lulw', todo)

    const {removeTodo} = useContext(Context)

    const classes = []

    if(todo.completed){
        classes.push('done')
    }
    
    return (
    <div className ={classes.join('')} style = {styles.div} >
                <input style={styles.input} 
                checked={todo.completed}
                type='checkbox'
                onChange={() => onChange(todo.id)}/>
                <strong>{index + 1}</strong>
                &nbsp;
                {todo.title}
                <button className='rm' onClick={removeTodo.bind(null, todo.id)}>Remove</button>
        </div>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index:PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default TodoItem