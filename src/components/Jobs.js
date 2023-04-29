import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
{
  allStrapiJobs {
    nodes {
      position
      company
      date
      desc {
        id
        name
      }
    }
  }
}
`

const Jobs = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiJobs: { nodes: jobs },
  } = data
  const [value, setValue] = React.useState(0)
  const { company, position, date, desc } = jobs[value]
  return (
    <section className="section jobs"
    
    style={{background: 'lightblue'}}
    
    
    >
      <Title title="experience" />
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container1">
          {jobs.map((item, index) => {
            return (
              <button
                key={index}
                className={index === value ? "job-btn1 active-btn1" : "job-btn1"}
                onClick={() => setValue(index)}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc.map(item => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item.name}</p>
              </div>
            )
          })}
        </article>
      </div>
      <Link 
      
      style={{display:"flex", justifyContent:"center", background:"white"}}
      
      to="/about" className="btn center-btn">
        About Me
      </Link>
    </section>
  )
}

export default Jobs
