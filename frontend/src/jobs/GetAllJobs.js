import React, { useState, useEffect } from "react";
import SearchForm from "../forms/SearchForm";
import Api from "../dbClass/Api";
import Loader from "../helper/Loader";
import ListOfJobs from "./ListOfJobs";

/** Show page with list of all jobs available.
 *
 * On mount, loads jobs from API.
 * Re-loads filtered jobs on submit from search form.
 *
 * GetAllJobs -> ListOfJobs -> JobDetails
 *
 * This is routed to at /jobs
 */

const GetAllJobs = () => {

  const [jobs, setAllJobs] = useState(null);

  useEffect(function(){
    searchJobs();
  }, []);

  // handle search form submit; get all results that will matched
  const searchJobs = async (title) => {
    let jobs = await Api.getJobs(title);
    setAllJobs(jobs);
  }

  if (!jobs) return <Loader />;

  return (
      <div className="GetAllJobs col-md-8 offset-md-2">
        <SearchForm searchFor={searchJobs} />
        {jobs.length
            ? <ListOfJobs jobs={jobs} />
            : <p className="lead">Sorry, no results were found!</p>
        }
      </div>
  );
}

export default GetAllJobs;