import PropTypes from 'prop-types'
import Buttons from './Buttons'
import { useLocation } from 'react-router-dom'

const Header = ({ title, onAdd, showAdd}) => {
    const location = useLocation()

    return (
        <header className='header'>
            {location.pathname === '/' && <h1> {title}</h1>}
            {location.pathname === '/' && <Buttons 
                color={showAdd ? 'Red' : 'Green'} 
                text={showAdd ? 'Close' : 'Add'} 
                onClick={onAdd}
            />}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
// CSS in JS
// const headingStyle = {
//     color: 'red', 
// backgroundColor: 'black'
// }

export default Header
