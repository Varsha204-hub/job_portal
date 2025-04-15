import './JobFilters.css';

const JobFilters = ({ filters, onFilterChange }) => {
  const employmentTypes = ['Full-time', 'Part-time', 'Contract', 'Internship'];
  
  return (
    <div className="job-filters">
      <div className="filter-group">
        <h4>Employment Type</h4>
        {employmentTypes.map(type => (
          <label key={type}>
            <input
              type="checkbox"
              checked={filters.employmentType.includes(type)}
              onChange={() => onFilterChange('employmentType', type)}
            />
            {type}
          </label>
        ))}
      </div>
      
      <div className="filter-group">
        <h4>Salary Range</h4>
        <select
          value={filters.minSalary}
          onChange={(e) => onFilterChange('minSalary', e.target.value)}
        >
          <option value="">Any</option>
          <option value="30000">$30k+</option>
          <option value="50000">$50k+</option>
          <option value="80000">$80k+</option>
        </select>
      </div>
    </div>
  );
};

export default JobFilters;