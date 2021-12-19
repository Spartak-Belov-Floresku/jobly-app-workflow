import { useState, useEffect } from "react";
import SearchForm from "../forms/SearchForm";
import Api from "../dbClass/Api";
import Company from "./Company";
import Loader from '../helper/Loader'

/** Show page with list of companies.
 *
 * On mount, loads companies from API.
 * Re-loads filtered companies on submit from search form.
 *
 * This is routed to at /companies
 *
 * Routers -> { Company, SearchForm }
 */

const Companies = () => {

  const [companies, setCompanies] = useState(null);

  useEffect(() => {
    search();
  }, []);

  /** Triggered by search form submit; reloads companies. */
  async function search(name) {
    let companies = await Api.getCompanies(name);
    setCompanies(companies);
  }

  if (!companies) return <Loader />;

  return (
      <div className="CompanyList col-md-8 offset-md-2">
        <SearchForm searchFor={search} />
        {companies.length
            ? (
                <div className="CompanyList-list">
                  {companies.map(c => (
                      <Company
                          key={c.handle}
                          handle={c.handle}
                          name={c.name}
                          description={c.description}
                          logoUrl={c.logoUrl}
                      />
                  ))}
                </div>
            ) : (
                <p className="lead">Sorry, no results were found!</p>
            )}
      </div>
  );
}

export default Companies;
