import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { getCurrentProfile } from '../../actions/profile'



function ProfileBanner({ user, profile, getCurrentProfile, id }) {
  return (
    <>
      {



        profile ? <div>
          <div className="container">
            <div className="row">
              <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="ui-block">
                  <div className="top-header">
                    <div className="top-header-thumb">
                      <img src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.0-9/21761622_549899362055067_4595991539228220412_n.jpg?_nc_cat=106&_nc_sid=19026a&_nc_ohc=z52ZmBx4ryAAX-egRp4&_nc_ht=scontent.fsgn2-5.fna&oh=89dad3d0be045b409a1ece0101a4fd24&oe=5F286BD1" style={{ height: "420px" }} alt="nature" />
                    </div>
                    <div className="profile-section">
                      <div className="row">
                        <div className="col col-lg-5 col-md-5 col-sm-12 col-12">
                          <ul className="profile-menu">
                            <li>
                              <Link to={`/profile/${id}/timeline`} className="active">Timeline</Link>
                            </li>
                            <li>
                              <Link to={`/profile/${id}/about`}>About</Link>
                            </li>
                            <li>
                              <Link to={`/profile/${id}/friend`}>Friends</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col col-lg-5 ml-auto col-md-5 col-sm-12 col-12">
                          <ul className="profile-menu">
                            <li>
                              <a href="07-ProfilePage-Photos.html">Photos</a>
                            </li>
                            <li>
                              <a href="09-ProfilePage-Videos.html">Videos</a>
                            </li>
                            <li>
                              <div className="more">
                                <svg className="olymp-three-dots-icon"><use xlinkHref="#olymp-three-dots-icon" /></svg>
                                <ul className="more-dropdown more-with-triangle">
                                  <li>
                                    <a href="#">Report Profile</a>
                                  </li>
                                  <li>
                                    <a href="#">Block Profile</a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="control-block-button">
                        {
                          user ? <>{profile.userId._id === user._id ? <>
                            <div className="btn btn-control bg-primary more">
                              <svg className="olymp-settings-icon"><use xlinkHref="#olymp-settings-icon" /></svg>
                              <ul className="more-dropdown more-with-triangle triangle-bottom-right">
                                <li>
                                  <a href="#" data-toggle="modal" data-target="#update-header-photo">Update Profile Photo</a>
                                </li>
                                <li>
                                  <a href="#" data-toggle="modal" data-target="#update-header-photo">Update Header Photo</a>
                                </li>
                                <li>
                                  <a href="29-YourAccount-AccountSettings.html">Account Settings</a>
                                </li>
                              </ul>
                            </div>
                          </> : <>
                              <a href="35-YourAccount-FriendsRequests.html" className="btn btn-control bg-blue">
                                <svg className="olymp-happy-face-icon"><use xlinkHref="#olymp-happy-face-icon" /></svg>
                              </a>
                              <a href="#" className="btn btn-control bg-purple">
                                <svg className="olymp-chat---messages-icon"><use xlinkHref="#olymp-chat---messages-icon" /></svg>
                              </a>
                            </>
                          }</> : ""
                        }


                      </div>
                    </div>
                    <div className="top-header-author">
                      <a href="02-ProfilePage.html" className="author-thumb">
                        <img src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.0-9/79437909_1067807676930897_996180942336819200_n.jpg?_nc_cat=109&_nc_sid=174925&_nc_ohc=9bdhsF0j-FoAX-6rOy2&_nc_ht=scontent.fsgn2-4.fna&oh=4bc0ad3ba9319b09ffceaf5ca89afceb&oe=5F28F551" style={{ borderRadius: "50$ !important", maxWidth: "100%" }} alt="author" />
                      </a>
                      <div className="author-content">
                        <a href="02-ProfilePage.html" className="h4 author-name">{profile.userId.firstName} {profile.userId.lastName}</a>
                        <div className="country">{profile.birthPlace}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> : "loading"
      }
    </>

  )
}
const mapStateToProps = (state) => ({
  profile: state.profile.profile,
  user: state.auth.user
})

export default connect(mapStateToProps, { getCurrentProfile })(ProfileBanner)
