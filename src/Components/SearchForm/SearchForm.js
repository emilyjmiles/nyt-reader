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

  return (
    <section className='search-section'>
      <form className='search-form' data-cy='search-form'>
        <div className='input-type sort-options'>
          <label>Search Articles by Section: </label>
          <select
            value={ !sortValue ? '' : sortValue }
            className='section-input'
            data-cy='section-input'
            onChange={ handleSort }>
            { sortValue === null && <option
              value=''
              disabled>
              select content type
            </option> }
            { getInputs }
          </select>
        </div>
        <div className='input-type title-search'>
          <label>Search Articles by Title: </label>
          <input
            type='text'
            placeholder='article title'
            value={ searchValue }
            className='title-input'
            data-cy='title-input'
            onChange={ handleSearch }
          />
        </div>
      </form>
      <button
        className='clear-button'
        data-cy='clear-button'
        onClick={ (event) => clearInputs(event) }>
        Clear Search
      </button>
    </section>
  );
};

export default SearchForm;