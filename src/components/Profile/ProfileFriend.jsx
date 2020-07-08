import React from 'react'
import {Link} from 'react-router-dom'

export default function ProfileFriend() {
    return (
        <div className="container">
        <div className="row">
          <div className="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="ui-block">
              {/* Friend Item */}
              <div className="friend-item">
                <div className="friend-header-thumb">
                  <img src="/img/friend1.jpg" alt="friend" />
                </div>
                <div className="friend-item-content">
                  <div className="more">
                    <svg className="olymp-three-dots-icon"><use xlinkto="#olymp-three-dots-icon" /></svg>
                    <ul className="more-dropdown">
                      <li>
                        <Link to="#">Report Profile</Link>
                      </li>
                      <li>
                        <Link to="#">Block Profile</Link>
                      </li>
                      <li>
                        <Link to="#">Turn Off Notifications</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="friend-avatar">
                    <div className="author-thumb">
                      <img src="/img/avatar1.jpg" alt="author" />
                    </div>
                    <div className="author-content">
                      <Link to="#" className="h5 author-name">Nicholas Grissom</Link>
                      <div className="country">San Francisco, CA</div>
                    </div>
                  </div>
                  <div className="swiper-container" data-slide="fade">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="friend-count" data-swiper-parallax={-500}>
                          <Link to="#" className="friend-count-item">
                            <div className="h6">52</div>
                            <div className="title">Friends</div>
                          </Link>
                          <Link to="#" className="friend-count-item">
                            <div className="h6">240</div>
                            <div className="title">Photos</div>
                          </Link>
                          <Link to="#" className="friend-count-item">
                            <div className="h6">16</div>
                            <div className="title">Videos</div>
                          </Link>
                        </div>
                        <div className="control-block-button" data-swiper-parallax={-100}>
                          <Link to="#" className="btn btn-control bg-blue">
                            <svg className="olymp-happy-face-icon"><use xlinkto="#olymp-happy-face-icon" /></svg>
                          </Link>
                          <Link to="#" className="btn btn-control bg-purple">
                            <svg className="olymp-chat---messages-icon"><use xlinkto="#olymp-chat---messages-icon" /></svg>
                          </Link>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <p className="friend-about" data-swiper-parallax={-500}>
                          Hi!, I’m Marina and I’m a Community Manager for “Gametube”. Gamer and full-time mother.
                        </p>
                        <div className="friend-since" data-swiper-parallax={-100}>
                          <span>Friends Since:</span>
                          <div className="h6">December 2014</div>
                        </div>
                      </div>
                    </div>
                    {/* If we need pagination */}
                    <div className="swiper-pagination" />
                  </div>
                </div>
              </div>
              {/* ... end Friend Item */}			</div>
          </div>
          <div className="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="ui-block">
              {/* Friend Item */}
              <div className="friend-item">
                <div className="friend-header-thumb">
                  <img src="/img/friend2.jpg" alt="friend" />
                </div>
                <div className="friend-item-content">
                  <div className="more">
                    <svg className="olymp-three-dots-icon"><use xlinkto="#olymp-three-dots-icon" /></svg>
                    <ul className="more-dropdown">
                      <li>
                        <Link to="#">Report Profile</Link>
                      </li>
                      <li>
                        <Link to="#">Block Profile</Link>
                      </li>
                      <li>
                        <Link to="#">Turn Off Notifications</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="friend-avatar">
                    <div className="author-thumb">
                      <img src="/img/avatar2.jpg" alt="author" />
                    </div>
                    <div className="author-content">
                      <Link to="#" className="h5 author-name">Marina Valentine</Link>
                      <div className="country">Long Island, NY</div>
                    </div>
                  </div>
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="friend-count" data-swiper-parallax={-500}>
                          <Link to="#" className="friend-count-item">
                            <div className="h6">52</div>
                            <div className="title">Friends</div>
                          </Link>
                          <Link to="#" className="friend-count-item">
                            <div className="h6">240</div>
                            <div className="title">Photos</div>
                          </Link>
                          <Link to="#" className="friend-count-item">
                            <div className="h6">16</div>
                            <div className="title">Videos</div>
                          </Link>
                        </div>
                        <div className="control-block-button" data-swiper-parallax={-100}>
                          <Link to="#" className="btn btn-control bg-blue">
                            <svg className="olymp-happy-face-icon"><use xlinkto="#olymp-happy-face-icon" /></svg>
                          </Link>
                          <Link to="#" className="btn btn-control bg-purple">
                            <svg className="olymp-chat---messages-icon"><use xlinkto="#olymp-chat---messages-icon" /></svg>
                          </Link>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <p className="friend-about" data-swiper-parallax={-500}>
                          Hi!, I’m Marina and I’m a Community Manager for “Gametube”. Gamer and full-time mother.
                        </p>
                        <div className="friend-since" data-swiper-parallax={-100}>
                          <span>Friends Since:</span>
                          <div className="h6">December 2014</div>
                        </div>
                      </div>
                    </div>
                    {/* If we need pagination */}
                    <div className="swiper-pagination" />
                  </div>
                </div>
              </div>
              {/* ... end Friend Item */}			</div>
          </div>
          <div className="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="ui-block">
              {/* Friend Item */}
              <div className="friend-item">
                <div className="friend-header-thumb">
                  <img src="/img/friend3.jpg" alt="friend" />
                </div>
                <div className="friend-item-content">
                  <div className="more">
                    <svg className="olymp-three-dots-icon"><use xlinkto="#olymp-three-dots-icon" /></svg>
                    <ul className="more-dropdown">
                      <li>
                        <Link to="#">Report Profile</Link>
                      </li>
                      <li>
                        <Link to="#">Block Profile</Link>
                      </li>
                      <li>
                        <Link to="#">Turn Off Notifications</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="friend-avatar">
                    <div className="author-thumb">
                      <img src="/img/avatar3.jpg" alt="author" />
                    </div>
                    <div className="author-content">
                      <Link to="#" className="h5 author-name">Nicholas Grissom</Link>
                      <div className="country">Los Angeles, CA</div>
                    </div>
                  </div>
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="friend-count" data-swiper-parallax={-500}>
                          <Link to="#" className="friend-count-item">
                            <div className="h6">49</div>
                            <div className="title">Friends</div>
                          </Link>
                          <Link to="#" className="friend-count-item">
                            <div className="h6">132</div>
                            <div className="title">Photos</div>
                          </Link>
                          <Link to="#" className="friend-count-item">
                            <div className="h6">5</div>
                            <div className="title">Videos</div>
                          </Link>
                        </div>
                        <div className="control-block-button" data-swiper-parallax={-100}>
                          <Link to="#" className="btn btn-control bg-blue">
                            <svg className="olymp-happy-face-icon"><use xlinkto="#olymp-happy-face-icon" /></svg>
                          </Link>
                          <Link to="#" className="btn btn-control bg-purple">
                            <svg className="olymp-chat---messages-icon"><use xlinkto="#olymp-chat---messages-icon" /></svg>
                          </Link>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <p className="friend-about" data-swiper-parallax={-500}>
                          Hi!, I’m Marina and I’m a Community Manager for “Gametube”. Gamer and full-time mother.
                        </p>
                        <div className="friend-since" data-swiper-parallax={-100}>
                          <span>Friends Since:</span>
                          <div className="h6">December 2014</div>
                        </div>
                      </div>
                    </div>
                    {/* If we need pagination */}
                    <div className="swiper-pagination" />
                  </div>
                </div>
              </div>
              {/* ... end Friend Item */}			</div>
          </div>
          <div className="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="ui-block">
              {/* Friend Item */}
              <div className="friend-item">
                <div className="friend-header-thumb">
                  <img src="/img/friend4.jpg" alt="friend" />
                </div>
                <div className="friend-item-content">
                  <div className="more">
                    <svg className="olymp-three-dots-icon"><use xlinkto="#olymp-three-dots-icon" /></svg>
                    <ul className="more-dropdown">
                      <li>
                        <Link to="#">Report Profile</Link>
                      </li>
                      <li>
                        <Link to="#">Block Profile</Link>
                      </li>
                      <li>
                        <Link to="#">Turn Off Notifications</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="friend-avatar">
                    <div className="author-thumb">
                      <img src="/img/avatar4.jpg" alt="author" />
                    </div>
                    <div className="author-content">
                      <Link to="#" className="h5 author-name">Chris Greyson</Link>
                      <div className="country">Austin, TX</div>
                    </div>
                  </div>
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="friend-count" data-swiper-parallax={-500}>
                          <Link to="#" className="friend-count-item">
                            <div className="h6">65</div>
                            <div className="title">Friends</div>
                          </Link>
                          <Link to="#" className="friend-count-item">
                            <div className="h6">104</div>
                            <div className="title">Photos</div>
                          </Link>
                          <Link to="#" className="friend-count-item">
                            <div className="h6">12</div>
                            <div className="title">Videos</div>
                          </Link>
                        </div>
                        <div className="control-block-button" data-swiper-parallax={-100}>
                          <Link to="#" className="btn btn-control bg-blue">
                            <svg className="olymp-happy-face-icon"><use xlinkto="#olymp-happy-face-icon" /></svg>
                          </Link>
                          <Link to="#" className="btn btn-control bg-purple">
                            <svg className="olymp-chat---messages-icon"><use xlinkto="#olymp-chat---messages-icon" /></svg>
                          </Link>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <p className="friend-about" data-swiper-parallax={-500}>
                          Hi!, I’m Marina and I’m a Community Manager for “Gametube”. Gamer and full-time mother.
                        </p>
                        <div className="friend-since" data-swiper-parallax={-100}>
                          <span>Friends Since:</span>
                          <div className="h6">December 2014</div>
                        </div>
                      </div>
                    </div>
                    {/* If we need pagination */}
                    <div className="swiper-pagination" />
                  </div>
                </div>
              </div>
              {/* ... end Friend Item */}			</div>
          </div>
          <div className="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="ui-block">
              {/* Friend Item */}
              <div className="friend-item">
                <div className="friend-header-thumb">
                  <img src="/img/friend5.jpg" alt="friend" />
                </div>
                <div className="friend-item-content">
                  <div className="more">
                    <svg className="olymp-three-dots-icon"><use xlinkto="#olymp-three-dots-icon" /></svg>
                    <ul className="more-dropdown">
                      <li>
                        <Link to="#">Report Profile</Link>
                      </li>
                      <li>
                        <Link to="#">Block Profile</Link>
                      </li>
                      <li>
                        <Link to="#">Turn Off Notifications</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="friend-avatar">
                    <div className="author-thumb">
                      <img src="/img/avatar5.jpg" alt="author" />
                    </div>
                    <div className="author-content">
                      <Link to="#" className="h5 author-name">Elaine Dreifuss</Link>
                      <div className="country">New York, NY</div>
                    </div>
                  </div>
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="friend-count" data-swiper-parallax={-500}>
                          <Link to="#" className="friend-count-item">
                            <div className="h6">82</div>
                            <div className="title">Friends</div>
                          </Link>
                          <Link to="#" className="friend-count-item">
                            <div className="h6">204</div>
                            <div className="title">Photos</div>
                          </Link>
                          <Link to="#" className="friend-count-item">
                            <div className="h6">27</div>
                            <div className="title">Videos</div>
                          </Link>
                        </div>
                        <div className="control-block-button" data-swiper-parallax={-100}>
                          <Link to="#" className="btn btn-control bg-blue">
                            <svg className="olymp-happy-face-icon"><use xlinkto="#olymp-happy-face-icon" /></svg>
                          </Link>
                          <Link to="#" className="btn btn-control bg-purple">
                            <svg className="olymp-chat---messages-icon"><use xlinkto="#olymp-chat---messages-icon" /></svg>
                          </Link>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <p className="friend-about" data-swiper-parallax={-500}>
                          Hi!, I’m Marina and I’m a Community Manager for “Gametube”. Gamer and full-time mother.
                        </p>
                        <div className="friend-since" data-swiper-parallax={-100}>
                          <span>Friends Since:</span>
                          <div className="h6">December 2014</div>
                        </div>
                      </div>
                    </div>
                    {/* If we need pagination */}
                    <div className="swiper-pagination" />
                  </div>
                </div>
              </div>
              {/* ... end Friend Item */}			</div>
          </div>
          <div className="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="ui-block">
              {/* Friend Item */}
              <div className="friend-item">
                <div className="friend-header-thumb">
                  <img src="/img/friend6.jpg" alt="friend" />
                </div>
                <div className="friend-item-content">
                  <div className="more">
                    <svg className="olymp-three-dots-icon"><use xlinkto="#olymp-three-dots-icon" /></svg>
                    <ul className="more-dropdown">
                      <li>
                        <Link to="#">Report Profile</Link>
                      </li>
                      <li>
                        <Link to="#">Block Profile</Link>
                      </li>
                      <li>
                        <Link to="#">Turn Off Notifications</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="friend-avatar">
                    <div className="author-thumb">
                      <img src="/img/avatar6.jpg" alt="author" />
                    </div>
                    <div className="author-content">
                      <Link to="#" className="h5 author-name">Bruce Peterson</Link>
                      <div className="country">Austin, TX</div>
                    </div>
                  </div>
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="friend-count" data-swiper-parallax={-500}>
                          <Link to="#" className="friend-count-item">
                            <div className="h6">73</div>
                            <div className="title">Friends</div>
                          </Link>
                          <Link to="#" className="friend-count-item">
                            <div className="h6">360</div>
                            <div className="title">Photos</div>
                          </Link>
                          <Link to="#" className="friend-count-item">
                            <div className="h6">11</div>
                            <div className="title">Videos</div>
                          </Link>
                        </div>
                        <div className="control-block-button" data-swiper-parallax={-100}>
                          <Link to="#" className="btn btn-control bg-blue">
                            <svg className="olymp-happy-face-icon"><use xlinkto="#olymp-happy-face-icon" /></svg>
                          </Link>
                          <Link to="#" className="btn btn-control bg-purple">
                            <svg className="olymp-chat---messages-icon"><use xlinkto="#olymp-chat---messages-icon" /></svg>
                          </Link>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <p className="friend-about" data-swiper-parallax={-500}>
                          Hi!, I’m Marina and I’m a Community Manager for “Gametube”. Gamer and full-time mother.
                        </p>
                        <div className="friend-since" data-swiper-parallax={-100}>
                          <span>Friends Since:</span>
                          <div className="h6">December 2014</div>
                        </div>
                      </div>
                    </div>
                    {/* If we need pagination */}
                    <div className="swiper-pagination" />
                  </div>
                </div>
              </div>
              {/* ... end Friend Item */}			</div>
          </div>
          <div className="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="ui-block">
              {/* Friend Item */}
              <div className="friend-item">
                <div className="friend-header-thumb">
                  <img src="/img/friend7.jpg" alt="friend" />
                </div>
                <div className="friend-item-content">
                  <div className="more">
                    <svg className="olymp-three-dots-icon"><use xlinkto="#olymp-three-dots-icon" /></svg>
                    <ul className="more-dropdown">
                      <li>
                        <Link to="#">Report Profile</Link>
                      </li>
                      <li>
                        <Link to="#">Block Profile</Link>
                      </li>
                      <li>
                        <Link to="#">Turn Off Notifications</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="friend-avatar">
                    <div className="author-thumb">
                      <img src="/img/avatar7.jpg" alt="author" />
                    </div>
                    <div className="author-content">
                      <Link to="#" className="h5 author-name">Carol Summers</Link>
                      <div className="country">Los Angeles, CA</div>
                    </div>
                  </div>
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="friend-count" data-swiper-parallax={-500}>
                          <Link to="#" className="friend-count-item">
                            <div className="h6">49</div>
                            <div className="title">Friends</div>
                          </Link>
                          <Link to="#" className="friend-count-item">
                            <div className="h6">132</div>
                            <div className="title">Photos</div>
                          </Link>
                          <Link to="#" className="friend-count-item">
                            <div className="h6">5</div>
                            <div className="title">Videos</div>
                          </Link>
                        </div>
                        <div className="control-block-button" data-swiper-parallax={-100}>
                          <Link to="#" className="btn btn-control bg-blue">
                            <svg className="olymp-happy-face-icon"><use xlinkto="#olymp-happy-face-icon" /></svg>
                          </Link>
                          <Link to="#" className="btn btn-control bg-purple">
                            <svg className="olymp-chat---messages-icon"><use xlinkto="#olymp-chat---messages-icon" /></svg>
                          </Link>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <p className="friend-about" data-swiper-parallax={-500}>
                          Hi!, I’m Marina and I’m a Community Manager for “Gametube”. Gamer and full-time mother.
                        </p>
                        <div className="friend-since" data-swiper-parallax={-100}>
                          <span>Friends Since:</span>
                          <div className="h6">December 2014</div>
                        </div>
                      </div>
                    </div>
                    {/* If we need pagination */}
                    <div className="swiper-pagination" />
                  </div>
                </div>
              </div>
              {/* ... end Friend Item */}			</div>
          </div>
          <div className="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="ui-block">
              {/* Friend Item */}
              <div className="friend-item">
                <div className="friend-header-thumb">
                  <img src="/img/friend8.jpg" alt="friend" />
                </div>
                <div className="friend-item-content">
                  <div className="more">
                    <svg className="olymp-three-dots-icon"><use xlinkto="#olymp-three-dots-icon" /></svg>
                    <ul className="more-dropdown">
                      <li>
                        <Link to="#">Report Profile</Link>
                      </li>
                      <li>
                        <Link to="#">Block Profile</Link>
                      </li>
                      <li>
                        <Link to="#">Turn Off Notifications</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="friend-avatar">
                    <div className="author-thumb">
                      <img src="/img/avatar8.jpg" alt="author" />
                    </div>
                    <div className="author-content">
                      <Link to="#" className="h5 author-name">Michael Maximoff</Link>
                      <div className="country">Portland, OR</div>
                    </div>
                  </div>
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="friend-count" data-swiper-parallax={-500}>
                          <Link to="#" className="friend-count-item">
                            <div className="h6">58</div>
                            <div className="title">Friends</div>
                          </Link>
                          <Link to="#" className="friend-count-item">
                            <div className="h6">304</div>
                            <div className="title">Photos</div>
                          </Link>
                          <Link to="#" className="friend-count-item">
                            <div className="h6">19</div>
                            <div className="title">Videos</div>
                          </Link>
                        </div>
                        <div className="control-block-button" data-swiper-parallax={-100}>
                          <Link to="#" className="btn btn-control bg-blue">
                            <svg className="olymp-happy-face-icon"><use xlinkto="#olymp-happy-face-icon" /></svg>
                          </Link>
                          <Link to="#" className="btn btn-control bg-purple">
                            <svg className="olymp-chat---messages-icon"><use xlinkto="#olymp-chat---messages-icon" /></svg>
                          </Link>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <p className="friend-about" data-swiper-parallax={-500}>
                          Hi!, I’m Marina and I’m a Community Manager for “Gametube”. Gamer and full-time mother.
                        </p>
                        <div className="friend-since" data-swiper-parallax={-100}>
                          <span>Friends Since:</span>
                          <div className="h6">December 2014</div>
                        </div>
                      </div>
                    </div>
                    {/* If we need pagination */}
                    <div className="swiper-pagination" />
                  </div>
                </div>
              </div>
              {/* ... end Friend Item */}			</div>
          </div>
        </div>
      </div>
    )
}
