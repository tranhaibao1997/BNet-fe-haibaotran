import React from 'react'
import { connect } from 'react-redux'
import { getCurrentProfile } from '../../actions/profile'

function ProfileAbout({ profile, testProp }) {


  console.log(profile, "hello")
  return (
    <>
      {
        profile ? <div className="container">
          <div className="row">
            <div className="col col-xl-8 order-xl-2 col-lg-8 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12">
              <div className="ui-block">
                <div className="ui-block-title">
                  <h6 className="title">Hobbies and Interests</h6>
                  <a href="#" className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="#olymp-three-dots-icon" /></svg></a>
                </div>
                <div className="ui-block-content">
                  <div className="row">
                    <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                      {/* W-Personal-Info */}
                      <ul className="widget w-personal-info item-block">
                        <li>
                          <span className="title">Hobbies:</span>
                          <span className="text">{profile.allHobbies.hobbies}
                          </span>
                        </li>
                        <li>
                          <span className="title">Favourite TV Shows:</span>
                          <span className="text">{profile.allHobbies.favoriteTVShow}</span>
                        </li>
                        <li>
                          <span className="title">Favourite Movies:</span>
                          <span className="text">{profile.allHobbies.favoriteMovies}</span>
                        </li>
                        <li>
                          <span className="title">Favourite Games:</span>
                          <span className="text">{profile.allHobbies.favoriteGames}</span>
                        </li>
                      </ul>
                      {/* ... end W-Personal-Info */}
                    </div>
                    <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                      {/* W-Personal-Info */}
                      <ul className="widget w-personal-info item-block">
                        <li>
                          <span className="title">Favourite Music Bands / Artists:</span>
                          <span className="text">{profile.allHobbies.favoriteMusicBand}</span>
                        </li>
                        <li>
                          <span className="title">Favourite Books:</span>
                          <span className="text">{profile.allHobbies.favoriteBooks}</span>
                        </li>
                        <li>
                          <span className="title">Favourite Writers:</span>
                          <span className="text">{profile.allHobbies.favoriteWriters} </span>
                        </li>
                        <li>
                          <span className="title">Other Interests:</span>
                          <span className="text">{profile.allHobbies.otherInterests}</span>
                        </li>
                      </ul>
                      {/* ... end W-Personal-Info */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="ui-block">
                <div className="ui-block-title">
                  <h6 className="title">Education and Employement</h6>
                  <a href="#" className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="#olymp-three-dots-icon" /></svg></a>
                </div>
                <div className="ui-block-content">
                  <div className="row">
                    <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                      {/* W-Personal-Info */}
                      <ul className="widget w-personal-info item-block">
                        <li>
                          <span className="title">The New College of Design</span>
                          <span className="date">2001 - 2006</span>
                          <span className="text">Breaking Good, RedDevil, People of Interest, The Running Dead, Found,  American Guy.</span>
                        </li>
                        <li>
                          <span className="title">Rembrandt Institute</span>
                          <span className="date">2008</span>
                          <span className="text">Five months Digital Illustration course. Professor: Leonardo Stagg.</span>
                        </li>
                        <li>
                          <span className="title">The Digital College </span>
                          <span className="date">2010</span>
                          <span className="text">6 months intensive Motion Graphics course. After Effects and Premire. Professor: Donatello Urtle. </span>
                        </li>
                      </ul>
                      {/* ... end W-Personal-Info */}
                    </div>
                    <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                      {/* W-Personal-Info */}
                      <ul className="widget w-personal-info item-block">
                        <li>
                          <span className="title">Digital Design Intern</span>
                          <span className="date">2006-2008</span>
                          <span className="text">Digital Design Intern for the “Multimedz” agency. Was in charge of the communication with the clients.</span>
                        </li>
                        <li>
                          <span className="title">UI/UX Designer</span>
                          <span className="date">2008-2013</span>
                          <span className="text">UI/UX Designer for the “Daydreams” agency. </span>
                        </li>
                        <li>
                          <span className="title">Senior UI/UX Designer</span>
                          <span className="date">2013-Now</span>
                          <span className="text">Senior UI/UX Designer for the “Daydreams” agency. I’m in charge of a ten person group, overseeing all the proyects and talking to potential clients.</span>
                        </li>
                      </ul>
                      {/* ... end W-Personal-Info */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-xl-4 order-xl-1 col-lg-4 order-lg-1 col-md-12 order-md-2 col-sm-12 col-12">
              <div className="ui-block">
                <div className="ui-block-title">
                  <h6 className="title">Personal Info</h6>
                  <a href="#" className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="#olymp-three-dots-icon" /></svg></a>
                </div>
                <div className="ui-block-content">
                  {/* W-Personal-Info */}
                  <ul className="widget w-personal-info">
                    <li>
                      <span className="title">About Me:</span>
                      <span className="text">{profile.aboutMe}
                      </span>
                    </li>
                    <li>
                      <span className="title">Birthday:</span>
                      <span className="text">December 14th, 1980</span>
                    </li>
                    <li>
                      <span className="title">Birthplace:</span>
                      <span className="text">{profile.birthPlace}</span>
                    </li>
                    <li>
                      <span className="title">Lives in:</span>
                      <span className="text">{profile.livesIn}</span>
                    </li>
                    <li>
                      <span className="title">Occupation:</span>
                      <span className="text">{profile.occupation}</span>
                    </li>
                    <li>
                      <span className="title">Joined:</span>
                      <span className="text">{profile.userId.createdAt}</span>
                    </li>
                    <li>
                      <span className="title">Gender:</span>
                      <span className="text">Male</span>
                    </li>
                    <li>
                      <span className="title">Status:</span>
                      <span className="text">Married</span>
                    </li>
                    <li>
                      <span className="title">Email:</span>
                      <a href="#" className="text">{profile.userId.email}</a>
                    </li>
                    <li>
                      <span className="title">Website:</span>
                      <a href="#" className="text">{profile.personalWebsite}</a>
                    </li>
                    <li>
                      <span className="title">Phone Number:</span>
                      <span className="text">{profile.phoneNumber}</span>
                    </li>
                 
                  </ul>
                  {/* ... end W-Personal-Info */}
                  {/* W-Socials */}
                  <div className="widget w-socials">
                    <h6 className="title">Other Social Networks:</h6>
                    <a href="#" className="social-item bg-facebook">
                      <i className="fab fa-facebook-f" aria-hidden="true" />
                Facebook
              </a>
                    <a href="#" className="social-item bg-twitter">
                      <i className="fab fa-twitter" aria-hidden="true" />
                Twitter
              </a>
                    <a href="#" className="social-item bg-dribbble">
                      <i className="fab fa-dribbble" aria-hidden="true" />
                Dribbble
              </a>
                  </div>
                  {/* ... end W-Socials */}
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
  profile: state.profile.profile
})
export default connect(mapStateToProps, { getCurrentProfile })(ProfileAbout)