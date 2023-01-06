import './SearchForm.css';

const SearchForm = ({ articles }) => {
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
    return <option key={ section } value={ section }>{ section }</option>;
  });

  return (
    <form className='search-form'>
      <label>Sort Articles by Content:
        <select
          name='section'>
          <option defaultValue='choose article content'>choose article content</option>
          { getInputs }
        </select>
      </label>
      <label>Search Articles by Title:
        <input
          type='text'
          placeholder='title'
          value='title'
          className='title-input'
        />
      </label>
      <button>Submit</button>
    </form>
  );
};

export default SearchForm;