import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Api from "../dbClass/Api";
import Loader from "../helper/Loader";
import ListOfJobs from "../jobs/ListOfJobs";

/** Company Detail page.
 *
 * Renders information about company, along with the jobs at that company.
 *
 * Routed at /companies/:handle
 *
 * Routes -> CompanyDetail -> JobCardList
 */

const CompanyDetails = () => {
  const { name } = useParams();
  console.debug("CompanyDetail", "handle=", name);

  const [company, setCompany] = useState(null);

  useEffect(function getCompanyAndJobsForUser() {
    async function getCompany() {
      setCompany(await Api.getCompany(name));
    }

    getCompany();
  }, [name]);

  if (!company) return <Loader />;

  return (
      <div className="CompanyDetail col-md-8 offset-md-2">
        <h4>{company.name}</h4>
        <p>{company.description}</p>
        <ListOfJobs jobs={company.jobs} />
      </div>
  );
}

export default CompanyDetails;
