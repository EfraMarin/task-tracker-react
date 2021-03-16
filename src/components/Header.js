import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
    const onClick = () => console.log('cliked from parent')
    return (
        <header className="w-full">
            {/* <h1 style={headingStyles}>{props.title}</h1> */}
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">{props.title}</h1>
                <Button text="Agregar" onClick={onClick} />
            </div>
        </header>
    )
}
Header.defaultProps = {
    title: 'Untitled Component'
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}


//css in react
// const headingStyles = {
//     color: 'red',
//     backgroundColor: 'black',
// }
export default Header
