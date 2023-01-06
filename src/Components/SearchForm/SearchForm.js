import './SearchForm.css';

const SearchForm = ({ articles, handleSearch, handleSort, searchValue, sortValue, clearInputs }) => {
  const getSections = articles.reduce((list, article) => {
    if (!list.includes(article.section)) {
      list.push(article.section);
    }
    if (!list.includes(article.subsection) && article.subsection) {
      list.push(article.subsection);
    }
    return list.sort();
  }, []);

  const getInputs = getSections.map(section => {
    return (
      <option
        key={ section }
        value={ section }>
        { section }
      </option>
    );
  });

  console.log(sortValue);
  console.log(searchValue);

  return (
    <form className='search-form'>
      <label>Search Articles by Content: </label>
      <select
        name='section'
        onChange={ handleSort }>
        <option
          defaultValue=''>
          choose article content
        </option>
        { getInputs }
      </select>
      <label>Search Articles by Title: </label>
      <input
        type='text'
        placeholder='article title'
        value={ searchValue }
        className='title-input'
        onChange={ handleSearch }
      />
      <button
        onClick={ (event) => clearInputs(event) }>
        Clear Search
      </button>
    </form>
  );
};

export default SearchForm;