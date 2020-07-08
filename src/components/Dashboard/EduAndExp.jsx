import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCurrentProfile,deleteEducation } from "../../actions/profile";
import Moment from "react-moment";

function EduAndExp({ profile, getCurrentProfile,deleteEducation, loading }) {
  React.useEffect(() => {
    getCurrentProfile();
  }, [loading]);

  function deleteEdu(id) {
    deleteEducation(id)
  }
  return (
    <>
      <div className="ui-block">
        <div className="ui-block-title">
          <h6 className="title">Your Education History</h6>
        </div>
        <div className="ui-block-content">
          {/* Education History Form */}
          <div className="row">
            <div className="col col-lg-3">
              <Link to="/dashboard/add-education" className="btn btn-success">
                Add New Education
              </Link>
            </div>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th>School</th>
                <th>Degree</th>
                <th class="hide-sm">Field Of Study</th>
                <th class="hide-sm">Years</th>
                <th></th>
              </tr>
              {profile
                ? profile.education.map((edu) => {
                    return (
                      <tr>
                        <td>{edu.school}</td>
                        <td class="hide-sm">{edu.degree}</td>
                        <td class="hide-sm">{edu.fieldOfStudy}</td>
                        <td>
                          <Moment format="DD/MM/YYYY">{edu.fromDate}</Moment> -{" "}
                          {edu.current ? (
                            "Now"
                          ) : (
                            <Moment format="DD/MM/YYYY">{edu.toDate}</Moment>
                          )}
                        </td>
                        <td>
                          <button
                            class="btn btn-danger"
                            onClick={() => deleteEdu(edu._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })
                : ""}
            
            </thead>
          </table>
          {/* ... end Education History Form */}
        </div>
        <div className="ui-block">
          <div className="ui-block-title">
            <h6 className="title">Your Employement History</h6>
          </div>
          <div className="ui-block-content">
            <div className="row">
              <div className="col col-lg-3">
                <Link to="/add-experience" className="btn btn-success">
                  Add New Experience
                </Link>
              </div>
            </div>
            <table class="table">
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Title</th>
                  <th class="hide-sm">Description</th>
                  <th class="hide-sm">Year</th>

                  <th></th>
                </tr>
               
                <tr>
                  <td>
                    Ho Chi Minh City University of Foreign Languages –
                    Information Technology
                  </td>
                  <td class="hide-sm">Balerchor</td>
                  <td class="hide-sm">Information Techonology</td>
                  <td>
                    <time datetime="854755200000">1997/02/01</time> -Now
                  </td>
                  <td>
                    <button class="btn btn-danger">Delete</button>
                  </td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => ({
  profile: state.profile.profile,
  loading: state.profile.loading,
});
export default connect(mapStateToProps, { getCurrentProfile,deleteEducation })(EduAndExp);
