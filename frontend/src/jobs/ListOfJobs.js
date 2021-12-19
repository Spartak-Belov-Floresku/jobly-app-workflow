import JobDetails from "./JobDetails";

/** lists all jobs.
 *
 * Used by both GetAllJobs and CompanyDetail to list jobs
 *
 * GetAllJobs -> ListOfJobs -> JobDetails
 * CompanyDetail -> LisOfJobs -> JobDetails
 *
 */

const ListOfJobs = ({ jobs }) => {

  return (
      <div className="ListOfJobs">
        {jobs.map(job => (
            <JobDetails
                key={job.id}
                id={job.id}
                title={job.title}
                salary={job.salary}
                equity={job.equity}
                companyName={job.companyName}
            />
        ))}
      </div>
  );
}

export default ListOfJobs;