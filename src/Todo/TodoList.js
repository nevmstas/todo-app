import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'


const styles = {
    div: {
        dysplay: 'flex',
        justifyContent: 'center',        
    }
    
}

class TodoList extends React.Component{
    
    constructor(props){
        super(props);
    }
    
    render(){
        return ( 
        <div>           
            <div style={styles.div}>           
                {this.props.todos.map((todo, index) =>{
                    return (
                    <TodoItem todo={todo} 
                                key={todo.id} 
                                index={index}
                                onChange = {this.props.onToggle}/>
                    )})}
            </div>
        </div>
        
        )
    }
}


TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired

}


export default TodoList;
