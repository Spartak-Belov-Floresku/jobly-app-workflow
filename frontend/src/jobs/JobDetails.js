import { useContext, useState, useEffect } from "react";
import "./JobDetails.css";
import GlobalContext from "../helper/GlobalContext";

/** Show limited information about a job.
 *
 * Is rendered by ListOfJobs to show a "card" for each job.
 *
 * Receives applyToJob func prop from parent, which is called on apply.
 *
 * ListOfJobs -> JobDetails
 */

const JobDetails = ({ id, title, salary, equity, companyName }) => {

  const { jobHasBeenApplied, applyToJob } = useContext(GlobalContext);
  const [applied, setApplied] = useState();

  useEffect(() => {
    setApplied(jobHasBeenApplied(id));
  }, [id, jobHasBeenApplied]);

  // handle apply for a job
  const handleApply = async () => {
    if (jobHasBeenApplied(id)) return;
    applyToJob(id);
    setApplied(true);
  }

  return (
      <div className="JobDetails card"> {applied}
        <div className="card-body">
          <h6 className="card-title">{title}</h6>
          <p>{companyName}</p>
          {salary && <div><small>Salary: {formatSalary(salary)}</small></div>}
          {equity !== undefined && <div><small>Equity: {equity}</small></div>}
          <button
              className="btn btn-danger font-weight-bold text-uppercase float-right"
              onClick={handleApply}
              disabled={applied}
          >
            {applied ? "Applied" : "Apply"}
          </button>
        </div>
      </div>
  );
}

// convert didgit to salary like '$1,000,000

function formatSalary(salary) {
  const digitsRev = [];
  const salaryStr = salary.toString();
  
  if(salaryStr.length >= 4){ 
      let arrNums = salaryStr.split("");
      arrNums = arrNums.reverse() 
    for (let i = 0; i <= arrNums.length - 1; i++) {
        digitsRev.push(arrNums[i]);
        if (i > 0 && (i+1) % 3 === 0 && (i+1) < arrNums.length) digitsRev.push(",");
    }
  }
  return `$${digitsRev.reverse().join("")}`;
}


export default JobDetails;