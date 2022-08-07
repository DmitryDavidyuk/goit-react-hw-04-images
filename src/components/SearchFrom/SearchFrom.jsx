import { useState } from 'react';
import PropTypes from 'prop-types';

import CSS from './SearchForm.module.css';
import { toast } from 'react-toastify';

export default function SearchFrom({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearchInput = event => {
    const { value } = event.currentTarget;
    setQuery(value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      toast.error('введите запрос', { autoClose: 1000 });
      return;
    }

    onSearch(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit} className={CSS.SearchForm}>
      <button type="submit" className={CSS.SearchForm_button}>
        <span className={CSS.SearchForm_button_label}>Search</span>
      </button>

      <input
        className={CSS.SearchForm_input}
        value={query}
        name="query"
        onChange={handleSearchInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  );
}

// class oldSearchFrom extends Component {
//   state = {
//     query: '',
//   };

//   handleSearchInput = event => {
//     const { name, value } = event.currentTarget;
//     this.setState({ [name]: value.toLowerCase() });
//   };

//   handleSubmit = event => {
//     // запрещает обновлять инпут при сабмте
//     event.preventDefault();

//     const { query } = this.state;
//     const { onSearch } = this.props;

//     // Запрещает сабмит при пустой строке
//     if (query.trim() === '') {
//       toast.error('введите запрос', { autoClose: 1000 });
//       return;
//     }

//     onSearch(this.state.query);

//     // Сброс инпута
//     this.setState({ query: '' });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit} className={CSS.SearchForm}>
//         <button type="submit" className={CSS.SearchForm_button}>
//           <span className={CSS.SearchForm_button_label}>Search</span>
//         </button>

//         <input
//           className={CSS.SearchForm_input}
//           value={this.state.query}
//           name="query"
//           onChange={this.handleSearchInput}
//           type="text"
//           autoComplete="off"
//           autoFocus
//           placeholder="Search images and photos"
//         />
//       </form>
//     );
//   }
// }

SearchFrom.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
