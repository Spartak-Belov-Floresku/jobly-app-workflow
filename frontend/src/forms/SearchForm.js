import { useState } from "react";
import "./Forms.css";

/** Search widget.
 *
 * Appears on Companies and GetAllJobs so that these can be filtered
 * down.
 *
 * This component doesn't *do* the searching, but it renders the search
 * form and calls the `searchFor` function prop that runs in a parent to do the
 * searching.
 *
 * { Companies, GetAllJobs } -> SearchCompanies
 */

const SearchForm = ({ searchFor }) => {

  const [searchTerm, setSearchTerm] = useState("");

  // tells parent to filter
  const handleSubmit = evt => {
    // take care of accidentally trying to search for just spaces
    evt.preventDefault();
    searchFor(searchTerm.trim() || undefined);
    setSearchTerm(searchTerm.trim());
  }

  // updates form fields
  const handleChange = evt => {
    setSearchTerm(evt.target.value);
  }

  return (
      <div className="SearchCompanies mb-4">
        <form className="form-inline" onSubmit={handleSubmit}>
          <input
              className="form-control form-control-lg flex-grow-1"
              name="searchTerm"
              placeholder="Enter search term.."
              value={searchTerm}
              onChange={handleChange}
          />
          <button type="submit" className="btn btn-lg btn-primary">
            Submit
          </button>
        </form>
      </div>
  );
}

export default SearchForm;
