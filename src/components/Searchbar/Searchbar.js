import{ useState } from 'react';
import PropTypes from 'prop-types';

export default function Searchbar({onSubmit}) {
    
    const [query, setQuery] = useState('');
    
    const handleChange = e => {
        setQuery(e.currentTarget.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (query.trim() === '') {
            alert('Введите название картинки');
            return;
        } 
        onSubmit(query);
        setQuery('');
    };
    
    return (
        <header className="Searchbar" >
                <form className="SearchForm" onSubmit={handleSubmit}>
                    <button type="submit" className="SearchForm-button">
                        <span className="SearchForm-button-label">Search</span>
                    </button>

                    <input
                        className="SearchForm-input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={query}
                        onChange={handleChange}
                    />
                </form>
            </header>
    )
}

Searchbar.propTypes = {
        query: PropTypes.string,
    };
// export default class Searchbar extends Component {
//     static propTypes = {
//         query: PropTypes.string,
//     };
    
//     state = {
//         query: '',
//     };

//     handleChange = e => {
//         this.setState({ query: e.currentTarget.value });
//     };

//     handleSubmit = e => {
//         e.preventDefault();

//         if (this.state.query.trim() === '') {
//             alert('Введите название картинки');
//             return;
//         } 
//         this.props.onSubmit(this.state.query);
//         this.setState({ query: '' });
//     };

//     render() {
//         const { query } = this.state;
//         return (
//             <header className="Searchbar" >
//                 <form className="SearchForm" onSubmit={this.handleSubmit}>
//                     <button type="submit" className="SearchForm-button">
//                         <span className="SearchForm-button-label">Search</span>
//                     </button>

//                     <input
//                         className="SearchForm-input"
//                         type="text"
//                         autoComplete="off"
//                         autoFocus
//                         placeholder="Search images and photos"
//                         value={query}
//                         onChange={this.handleChange}
//                     />
//                 </form>
//             </header>
//         )
//     }
// }