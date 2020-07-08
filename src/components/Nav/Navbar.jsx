import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Navbar({ isAuthenticated, user }) {
  return (
    <div>
      {/* Header-BP */}
      <header
        className={isAuthenticated ? "header" : "header header--logout"}
        id="site-header"
      >
        <div className="page-title">
          <h6>Newsfeed</h6>
        </div>
        <div className="header-content-wrapper">
          <form className="search-bar w-search notification-list friend-requests">
            <div className="form-group with-button">
              <input
                className="form-control js-user-search"
                placeholder="Search here people or pages..."
                type="text"
              />
              <button>
                <svg className="olymp-magnifying-glass-icon">
                  <use xlinkto="#olymp-magnifying-glass-icon" />
                </svg>
              </button>
            </div>
          </form>
          <Link to="#" className="link-find-friend">
            Find Friends
          </Link>
          {isAuthenticated && user ? (
            <div className="control-block">
              <div className="control-icon more has-items">
                <svg className="olymp-happy-face-icon">
                  <use xlinkto="#olymp-happy-face-icon" />
                </svg>
                <div className="label-avatar bg-blue">6</div>
                <div className="more-dropdown more-with-triangle triangle-top-center">
                  <div className="ui-block-title ui-block-title-small">
                    <h6 className="title">FRIEND REQUESTS</h6>
                    <Link to="#">Find Friends</Link>
                    <Link to="#">Settings</Link>
                  </div>
                  <div className="mCustomScrollbar" data-mcs-theme="dark">
                    <ul className="notification-list friend-requests">
                      <li>
                        <div className="author-thumb">
                          <img src="/img/avatar55-sm.jpg" alt="author" />
                        </div>
                        <div className="notification-event">
                          <Link to="#" className="h6 notification-friend">
                            Tamara Romanoff
                          </Link>
                          <span className="chat-message-item">
                            Mutual Friend: Sarah Hetfield
                          </span>
                        </div>
                        <span className="notification-icon">
                          <Link to="#" className="accept-request">
                            <span className="icon-add without-text">
                              <svg className="olymp-happy-face-icon">
                                <use xlinkto="#olymp-happy-face-icon" />
                              </svg>
                            </span>
                          </Link>
                          <Link to="#" className="accept-request request-del">
                            <span className="icon-minus">
                              <svg className="olymp-happy-face-icon">
                                <use xlinkto="#olymp-happy-face-icon" />
                              </svg>
                            </span>
                          </Link>
                        </span>
                        <div className="more">
                          <svg className="olymp-three-dots-icon">
                            <use xlinkto="#olymp-three-dots-icon" />
                          </svg>
                        </div>
                      </li>
                      <li>
                        <div className="author-thumb">
                          <img src="/img/avatar56-sm.jpg" alt="author" />
                        </div>
                        <div className="notification-event">
                          <Link to="#" className="h6 notification-friend">
                            Tony Stevens
                          </Link>
                          <span className="chat-message-item">
                            4 Friends in Common
                          </span>
                        </div>
                        <span className="notification-icon">
                          <Link to="#" className="accept-request">
                            <span className="icon-add without-text">
                              <svg className="olymp-happy-face-icon">
                                <use xlinkto="#olymp-happy-face-icon" />
                              </svg>
                            </span>
                          </Link>
                          <Link to="#" className="accept-request request-del">
                            <span className="icon-minus">
                              <svg className="olymp-happy-face-icon">
                                <use xlinkto="#olymp-happy-face-icon" />
                              </svg>
                            </span>
                          </Link>
                        </span>
                        <div className="more">
                          <svg className="olymp-three-dots-icon">
                            <use xlinkto="#olymp-three-dots-icon" />
                          </svg>
                        </div>
                      </li>
                      <li className="accepted">
                        <div className="author-thumb">
                          <img src="/img/avatar57-sm.jpg" alt="author" />
                        </div>
                        <div className="notification-event">
                          You and{" "}
                          <Link to="#" className="h6 notification-friend">
                            Mary Jane Stark
                          </Link>{" "}
                          just became friends. Write on{" "}
                          <Link to="#" className="notification-link">
                            her wall
                          </Link>
                          .
                        </div>
                        <span className="notification-icon">
                          <svg className="olymp-happy-face-icon">
                            <use xlinkto="#olymp-happy-face-icon" />
                          </svg>
                        </span>
                        <div className="more">
                          <svg className="olymp-three-dots-icon">
                            <use xlinkto="#olymp-three-dots-icon" />
                          </svg>
                          <svg className="olymp-little-delete">
                            <use xlinkto="#olymp-little-delete" />
                          </svg>
                        </div>
                      </li>
                      <li>
                        <div className="author-thumb">
                          <img src="/img/avatar58-sm.jpg" alt="author" />
                        </div>
                        <div className="notification-event">
                          <Link to="#" className="h6 notification-friend">
                            Stagg Clothing
                          </Link>
                          <span className="chat-message-item">
                            9 Friends in Common
                          </span>
                        </div>
                        <span className="notification-icon">
                          <Link to="#" className="accept-request">
                            <span className="icon-add without-text">
                              <svg className="olymp-happy-face-icon">
                                <use xlinkto="#olymp-happy-face-icon" />
                              </svg>
                            </span>
                          </Link>
                          <Link to="#" className="accept-request request-del">
                            <span className="icon-minus">
                              <svg className="olymp-happy-face-icon">
                                <use xlinkto="#olymp-happy-face-icon" />
                              </svg>
                            </span>
                          </Link>
                        </span>
                        <div className="more">
                          <svg className="olymp-three-dots-icon">
                            <use xlinkto="#olymp-three-dots-icon" />
                          </svg>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <Link to="#" className="view-all bg-blue">
                    Check all your Events
                  </Link>
                </div>
              </div>
              <div className="control-icon more has-items">
                <svg className="olymp-chat---messages-icon">
                  <use xlinkto="#olymp-chat---messages-icon" />
                </svg>
                <div className="label-avatar bg-purple">2</div>
                <div className="more-dropdown more-with-triangle triangle-top-center">
                  <div className="ui-block-title ui-block-title-small">
                    <h6 className="title">Chat / Messages</h6>
                    <Link to="#">Mark all as read</Link>
                    <Link to="#">Settings</Link>
                  </div>
                  <div className="mCustomScrollbar" data-mcs-theme="dark">
                    <ul className="notification-list chat-message">
                      <li className="message-unread">
                        <div className="author-thumb">
                          <img src="/img/avatar59-sm.jpg" alt="author" />
                        </div>
                        <div className="notification-event">
                          <Link to="#" className="h6 notification-friend">
                            Diana Jameson
                          </Link>
                          <span className="chat-message-item">
                            Hi James! It’s Diana, I just wanted to let you know
                            that we have to reschedule...
                          </span>
                          <span className="notification-date">
                            <time
                              className="entry-date updated"
                              dateTime="2004-07-24T18:18"
                            >
                              4 hours ago
                            </time>
                          </span>
                        </div>
                        <span className="notification-icon">
                          <svg className="olymp-chat---messages-icon">
                            <use xlinkto="#olymp-chat---messages-icon" />
                          </svg>
                        </span>
                        <div className="more">
                          <svg className="olymp-three-dots-icon">
                            <use xlinkto="#olymp-three-dots-icon" />
                          </svg>
                        </div>
                      </li>
                      <li>
                        <div className="author-thumb">
                          <img src="/img/avatar60-sm.jpg" alt="author" />
                        </div>
                        <div className="notification-event">
                          <Link to="#" className="h6 notification-friend">
                            Jake Parker
                          </Link>
                          <span className="chat-message-item">
                            Great, I’ll see you tomorrow!.
                          </span>
                          <span className="notification-date">
                            <time
                              className="entry-date updated"
                              dateTime="2004-07-24T18:18"
                            >
                              4 hours ago
                            </time>
                          </span>
                        </div>
                        <span className="notification-icon">
                          <svg className="olymp-chat---messages-icon">
                            <use xlinkto="#olymp-chat---messages-icon" />
                          </svg>
                        </span>
                        <div className="more">
                          <svg className="olymp-three-dots-icon">
                            <use xlinkto="#olymp-three-dots-icon" />
                          </svg>
                        </div>
                      </li>
                      <li>
                        <div className="author-thumb">
                          <img src="/img/avatar61-sm.jpg" alt="author" />
                        </div>
                        <div className="notification-event">
                          <Link to="#" className="h6 notification-friend">
                            Elaine Dreyfuss
                          </Link>
                          <span className="chat-message-item">
                            We’ll have to check that at the office and see if
                            the client is on board with...
                          </span>
                          <span className="notification-date">
                            <time
                              className="entry-date updated"
                              dateTime="2004-07-24T18:18"
                            >
                              Yesterday at 9:56pm
                            </time>
                          </span>
                        </div>
                        <span className="notification-icon">
                          <svg className="olymp-chat---messages-icon">
                            <use xlinkto="#olymp-chat---messages-icon" />
                          </svg>
                        </span>
                        <div className="more">
                          <svg className="olymp-three-dots-icon">
                            <use xlinkto="#olymp-three-dots-icon" />
                          </svg>
                        </div>
                      </li>
                      <li className="chat-group">
                        <div className="author-thumb">
                          <img src="/img/avatar11-sm.jpg" alt="author" />
                          <img src="/img/avatar12-sm.jpg" alt="author" />
                          <img src="/img/avatar13-sm.jpg" alt="author" />
                          <img src="/img/avatar10-sm.jpg" alt="author" />
                        </div>
                        <div className="notification-event">
                          <Link to="#" className="h6 notification-friend">
                            You, Faye, Ed &amp; Jet +3
                          </Link>
                          <span className="last-message-author">Ed:</span>
                          <span className="chat-message-item">
                            Yeah! Seems fine by me!
                          </span>
                          <span className="notification-date">
                            <time
                              className="entry-date updated"
                              dateTime="2004-07-24T18:18"
                            >
                              March 16th at 10:23am
                            </time>
                          </span>
                        </div>
                        <span className="notification-icon">
                          <svg className="olymp-chat---messages-icon">
                            <use xlinkto="#olymp-chat---messages-icon" />
                          </svg>
                        </span>
                        <div className="more">
                          <svg className="olymp-three-dots-icon">
                            <use xlinkto="#olymp-three-dots-icon" />
                          </svg>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <Link to="#" className="view-all bg-purple">
                    View All Messages
                  </Link>
                </div>
              </div>
              <div className="control-icon more has-items">
                <svg className="olymp-thunder-icon">
                  <use xlinkto="#olymp-thunder-icon" />
                </svg>
                <div className="label-avatar bg-primary">8</div>
                <div className="more-dropdown more-with-triangle triangle-top-center">
                  <div className="ui-block-title ui-block-title-small">
                    <h6 className="title">Notifications</h6>
                    <Link to="#">Mark all as read</Link>
                    <Link to="#">Settings</Link>
                  </div>
                  <div className="mCustomScrollbar" data-mcs-theme="dark">
                    <ul className="notification-list">
                      <li>
                        <div className="author-thumb">
                          <img src="/img/avatar62-sm.jpg" alt="author" />
                        </div>
                        <div className="notification-event">
                          <div>
                            <Link to="#" className="h6 notification-friend">
                              Mathilda Brinker
                            </Link>{" "}
                            commented on your new{" "}
                            <Link to="#" className="notification-link">
                              profile status
                            </Link>
                            .
                          </div>
                          <span className="notification-date">
                            <time
                              className="entry-date updated"
                              dateTime="2004-07-24T18:18"
                            >
                              4 hours ago
                            </time>
                          </span>
                        </div>
                        <span className="notification-icon">
                          <svg className="olymp-comments-post-icon">
                            <use xlinkto="#olymp-comments-post-icon" />
                          </svg>
                        </span>
                        <div className="more">
                          <svg className="olymp-three-dots-icon">
                            <use xlinkto="#olymp-three-dots-icon" />
                          </svg>
                          <svg className="olymp-little-delete">
                            <use xlinkto="#olymp-little-delete" />
                          </svg>
                        </div>
                      </li>
                      <li className="un-read">
                        <div className="author-thumb">
                          <img src="/img/avatar63-sm.jpg" alt="author" />
                        </div>
                        <div className="notification-event">
                          <div>
                            You and{" "}
                            <Link to="#" className="h6 notification-friend">
                              Nicholas Grissom
                            </Link>{" "}
                            just became friends. Write on{" "}
                            <Link to="#" className="notification-link">
                              his wall
                            </Link>
                            .
                          </div>
                          <span className="notification-date">
                            <time
                              className="entry-date updated"
                              dateTime="2004-07-24T18:18"
                            >
                              9 hours ago
                            </time>
                          </span>
                        </div>
                        <span className="notification-icon">
                          <svg className="olymp-happy-face-icon">
                            <use xlinkto="#olymp-happy-face-icon" />
                          </svg>
                        </span>
                        <div className="more">
                          <svg className="olymp-three-dots-icon">
                            <use xlinkto="#olymp-three-dots-icon" />
                          </svg>
                          <svg className="olymp-little-delete">
                            <use xlinkto="#olymp-little-delete" />
                          </svg>
                        </div>
                      </li>
                      <li className="with-comment-photo">
                        <div className="author-thumb">
                          <img src="/img/avatar64-sm.jpg" alt="author" />
                        </div>
                        <div className="notification-event">
                          <div>
                            <Link to="#" className="h6 notification-friend">
                              Sarah Hetfield
                            </Link>{" "}
                            commented on your{" "}
                            <Link to="#" className="notification-link">
                              photo
                            </Link>
                            .
                          </div>
                          <span className="notification-date">
                            <time
                              className="entry-date updated"
                              dateTime="2004-07-24T18:18"
                            >
                              Yesterday at 5:32am
                            </time>
                          </span>
                        </div>
                        <span className="notification-icon">
                          <svg className="olymp-comments-post-icon">
                            <use xlinkto="#olymp-comments-post-icon" />
                          </svg>
                        </span>
                        <div className="comment-photo">
                          <img src="/img/comment-photo1.jpg" alt="photo" />
                          <span>
                            “She looks incredible in that outfit! We should see
                            each...”
                          </span>
                        </div>
                        <div className="more">
                          <svg className="olymp-three-dots-icon">
                            <use xlinkto="#olymp-three-dots-icon" />
                          </svg>
                          <svg className="olymp-little-delete">
                            <use xlinkto="#olymp-little-delete" />
                          </svg>
                        </div>
                      </li>
                      <li>
                        <div className="author-thumb">
                          <img src="/img/avatar65-sm.jpg" alt="author" />
                        </div>
                        <div className="notification-event">
                          <div>
                            <Link to="#" className="h6 notification-friend">
                              Green Goo Rock
                            </Link>{" "}
                            invited you to attend to his event Goo in{" "}
                            <Link to="#" className="notification-link">
                              Gotham Bar
                            </Link>
                            .
                          </div>
                          <span className="notification-date">
                            <time
                              className="entry-date updated"
                              dateTime="2004-07-24T18:18"
                            >
                              March 5th at 6:43pm
                            </time>
                          </span>
                        </div>
                        <span className="notification-icon">
                          <svg className="olymp-happy-face-icon">
                            <use xlinkto="#olymp-happy-face-icon" />
                          </svg>
                        </span>
                        <div className="more">
                          <svg className="olymp-three-dots-icon">
                            <use xlinkto="#olymp-three-dots-icon" />
                          </svg>
                          <svg className="olymp-little-delete">
                            <use xlinkto="#olymp-little-delete" />
                          </svg>
                        </div>
                      </li>
                      <li>
                        <div className="author-thumb">
                          <img src="/img/avatar66-sm.jpg" alt="author" />
                        </div>
                        <div className="notification-event">
                          <div>
                            <Link to="#" className="h6 notification-friend">
                              James Summers
                            </Link>{" "}
                            commented on your new{" "}
                            <Link to="#" className="notification-link">
                              profile status
                            </Link>
                            .
                          </div>
                          <span className="notification-date">
                            <time
                              className="entry-date updated"
                              dateTime="2004-07-24T18:18"
                            >
                              March 2nd at 8:29pm
                            </time>
                          </span>
                        </div>
                        <span className="notification-icon">
                          <svg className="olymp-heart-icon">
                            <use xlinkto="#olymp-heart-icon" />
                          </svg>
                        </span>
                        <div className="more">
                          <svg className="olymp-three-dots-icon">
                            <use xlinkto="#olymp-three-dots-icon" />
                          </svg>
                          <svg className="olymp-little-delete">
                            <use xlinkto="#olymp-little-delete" />
                          </svg>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <Link to="#" className="view-all bg-primary">
                    View All Notifications
                  </Link>
                </div>
              </div>
              <div className="author-page author vcard inline-items more">
                <div className="author-thumb">
                  <img
                    style={{width:"35px", height:"35px"}}
                    alt="author"
                    src="https://scontent-amt2-1.xx.fbcdn.net/v/t31.0-8/22218275_556421638069506_4561117867076871068_o.jpg?_nc_cat=101&_nc_sid=a4a2d7&_nc_ohc=3h3sgE3_fUkAX9B2IHC&_nc_ht=scontent-amt2-1.xx&oh=bb1f4b3b334d6b0c53741316b3547b61&oe=5F25DE79"
                    className="avatar"
                  />
                  <span className="icon-status online" />
                  <div className="more-dropdown more-with-triangle">
                    <div className="mCustomScrollbar" data-mcs-theme="dark">
                      <div className="ui-block-title ui-block-title-small">
                        <h6 className="title">Your Account</h6>
                      </div>
                      <ul className="account-settings">
                        <li>
                          <Link to="/dashboard/personal">
                            <svg className="olymp-menu-icon">
                              <use xlinkto="#olymp-menu-icon" />
                            </svg>
                            <span>Profile Settings</span>
                          </Link>
                        </li>
                      
                        <li>
                          <Link to="#">
                            <svg className="olymp-logout-icon">
                              <use xlinkto="#olymp-logout-icon" />
                            </svg>
                            <span>Log Out</span>
                          </Link>
                        </li>
                      </ul>
                     
                      
                    </div>
                  </div>
                </div>
                <Link to={`/profile/${user._id}/timeline`} className="author-name fn">
                  <div className="author-title">
                    {user.firstName} {user.lastName}
                    <svg className="olymp-dropdown-arrow-icon">
                      <use xlinkto="#olymp-dropdown-arrow-icon" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          ) : (
            <div className="form--login-logout">
              <form className="form-inline">
                <div className="form-group is-empty">
                  <input
                    className="form-control form-control-sm"
                    type="text"
                    placeholder="Username"
                  />
                  <span className="material-input" />
                </div>
                <div className="form-group is-empty">
                  <input
                    className="form-control form-control-sm"
                    type="password"
                    placeholder="Password"
                  />
                  <span className="material-input" />
                </div>
                <button className="btn btn-primary btn-md-2">
                  Login
                  <div className="ripple-container" />
                </button>
              </form>
              <Link
                to="#"
                className="btn btn-primary btn-md-2 login-btn-responsive"
                data-toggle="modal"
                data-target="#registration-login-form-popup"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </header>
      {/* ... end Header-BP */}
      {/* Responsive Header-BP */}
      <header className="header header-responsive" id="site-header-responsive">
        {/* Google Tag Manager */}
        {/* End Google Tag Manager */}
        <div className="header-content-wrapper">
          <ul className="nav nav-tabs mobile-app-tabs" role="tablist">
            <li className="nav-item">
              <Link
                className="nav-link"
                data-toggle="tab"
                to="#request"
                role="tab"
              >
                <div className="control-icon has-items">
                  <svg className="olymp-happy-face-icon">
                    <use xlinkto="#olymp-happy-face-icon" />
                  </svg>
                  <div className="label-avatar bg-blue">6</div>
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" data-toggle="tab" to="#chat" role="tab">
                <div className="control-icon has-items">
                  <svg className="olymp-chat---messages-icon">
                    <use xlinkto="#olymp-chat---messages-icon" />
                  </svg>
                  <div className="label-avatar bg-purple">2</div>
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                data-toggle="tab"
                to="#notification"
                role="tab"
              >
                <div className="control-icon has-items">
                  <svg className="olymp-thunder-icon">
                    <use xlinkto="#olymp-thunder-icon" />
                  </svg>
                  <div className="label-avatar bg-primary">8</div>
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                data-toggle="tab"
                to="#search"
                role="tab"
              >
                <svg className="olymp-magnifying-glass-icon">
                  <use xlinkto="#olymp-magnifying-glass-icon" />
                </svg>
                <svg className="olymp-close-icon">
                  <use xlinkto="#olymp-close-icon" />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
        {/* Tab panes */}
        <div className="tab-content tab-content-responsive">
          <div className="tab-pane " id="request" role="tabpanel">
            <div className="mCustomScrollbar" data-mcs-theme="dark">
              <div className="ui-block-title ui-block-title-small">
                <h6 className="title">FRIEND REQUESTS</h6>
                <Link to="#">Find Friends</Link>
                <Link to="#">Settings</Link>
              </div>
              <ul className="notification-list friend-requests">
                <li>
                  <div className="author-thumb">
                    <img src="/img/avatar55-sm.jpg" alt="author" />
                  </div>
                  <div className="notification-event">
                    <Link to="#" className="h6 notification-friend">
                      Tamara Romanoff
                    </Link>
                    <span className="chat-message-item">
                      Mutual Friend: Sarah Hetfield
                    </span>
                  </div>
                  <span className="notification-icon">
                    <Link to="#" className="accept-request">
                      <span className="icon-add without-text">
                        <svg className="olymp-happy-face-icon">
                          <use xlinkto="#olymp-happy-face-icon" />
                        </svg>
                      </span>
                    </Link>
                    <Link to="#" className="accept-request request-del">
                      <span className="icon-minus">
                        <svg className="olymp-happy-face-icon">
                          <use xlinkto="#olymp-happy-face-icon" />
                        </svg>
                      </span>
                    </Link>
                  </span>
                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkto="#olymp-three-dots-icon" />
                    </svg>
                  </div>
                </li>
                <li>
                  <div className="author-thumb">
                    <img src="/img/avatar56-sm.jpg" alt="author" />
                  </div>
                  <div className="notification-event">
                    <Link to="#" className="h6 notification-friend">
                      Tony Stevens
                    </Link>
                    <span className="chat-message-item">
                      4 Friends in Common
                    </span>
                  </div>
                  <span className="notification-icon">
                    <Link to="#" className="accept-request">
                      <span className="icon-add without-text">
                        <svg className="olymp-happy-face-icon">
                          <use xlinkto="#olymp-happy-face-icon" />
                        </svg>
                      </span>
                    </Link>
                    <Link to="#" className="accept-request request-del">
                      <span className="icon-minus">
                        <svg className="olymp-happy-face-icon">
                          <use xlinkto="#olymp-happy-face-icon" />
                        </svg>
                      </span>
                    </Link>
                  </span>
                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkto="#olymp-three-dots-icon" />
                    </svg>
                  </div>
                </li>
                <li className="accepted">
                  <div className="author-thumb">
                    <img src="/img/avatar57-sm.jpg" alt="author" />
                  </div>
                  <div className="notification-event">
                    You and{" "}
                    <Link to="#" className="h6 notification-friend">
                      Mary Jane Stark
                    </Link>{" "}
                    just became friends. Write on{" "}
                    <Link to="#" className="notification-link">
                      her wall
                    </Link>
                    .
                  </div>
                  <span className="notification-icon">
                    <svg className="olymp-happy-face-icon">
                      <use xlinkto="#olymp-happy-face-icon" />
                    </svg>
                  </span>
                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkto="#olymp-three-dots-icon" />
                    </svg>
                    <svg className="olymp-little-delete">
                      <use xlinkto="#olymp-little-delete" />
                    </svg>
                  </div>
                </li>
                <li>
                  <div className="author-thumb">
                    <img src="/img/avatar58-sm.jpg" alt="author" />
                  </div>
                  <div className="notification-event">
                    <Link to="#" className="h6 notification-friend">
                      Stagg Clothing
                    </Link>
                    <span className="chat-message-item">
                      9 Friends in Common
                    </span>
                  </div>
                  <span className="notification-icon">
                    <Link to="#" className="accept-request">
                      <span className="icon-add without-text">
                        <svg className="olymp-happy-face-icon">
                          <use xlinkto="#olymp-happy-face-icon" />
                        </svg>
                      </span>
                    </Link>
                    <Link to="#" className="accept-request request-del">
                      <span className="icon-minus">
                        <svg className="olymp-happy-face-icon">
                          <use xlinkto="#olymp-happy-face-icon" />
                        </svg>
                      </span>
                    </Link>
                  </span>
                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkto="#olymp-three-dots-icon" />
                    </svg>
                  </div>
                </li>
              </ul>
              <Link to="#" className="view-all bg-blue">
                Check all your Events
              </Link>
            </div>
          </div>
          <div className="tab-pane " id="chat" role="tabpanel">
            <div className="mCustomScrollbar" data-mcs-theme="dark">
              <div className="ui-block-title ui-block-title-small">
                <h6 className="title">Chat / Messages</h6>
                <Link to="#">Mark all as read</Link>
                <Link to="#">Settings</Link>
              </div>
              <ul className="notification-list chat-message">
                <li className="message-unread">
                  <div className="author-thumb">
                    <img src="/img/avatar59-sm.jpg" alt="author" />
                  </div>
                  <div className="notification-event">
                    <Link to="#" className="h6 notification-friend">
                      Diana Jameson
                    </Link>
                    <span className="chat-message-item">
                      Hi James! It’s Diana, I just wanted to let you know that
                      we have to reschedule...
                    </span>
                    <span className="notification-date">
                      <time
                        className="entry-date updated"
                        dateTime="2004-07-24T18:18"
                      >
                        4 hours ago
                      </time>
                    </span>
                  </div>
                  <span className="notification-icon">
                    <svg className="olymp-chat---messages-icon">
                      <use xlinkto="#olymp-chat---messages-icon" />
                    </svg>
                  </span>
                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkto="#olymp-three-dots-icon" />
                    </svg>
                  </div>
                </li>
                <li>
                  <div className="author-thumb">
                    <img src="/img/avatar60-sm.jpg" alt="author" />
                  </div>
                  <div className="notification-event">
                    <Link to="#" className="h6 notification-friend">
                      Jake Parker
                    </Link>
                    <span className="chat-message-item">
                      Great, I’ll see you tomorrow!.
                    </span>
                    <span className="notification-date">
                      <time
                        className="entry-date updated"
                        dateTime="2004-07-24T18:18"
                      >
                        4 hours ago
                      </time>
                    </span>
                  </div>
                  <span className="notification-icon">
                    <svg className="olymp-chat---messages-icon">
                      <use xlinkto="#olymp-chat---messages-icon" />
                    </svg>
                  </span>
                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkto="#olymp-three-dots-icon" />
                    </svg>
                  </div>
                </li>
                <li>
                  <div className="author-thumb">
                    <img src="/img/avatar61-sm.jpg" alt="author" />
                  </div>
                  <div className="notification-event">
                    <Link to="#" className="h6 notification-friend">
                      Elaine Dreyfuss
                    </Link>
                    <span className="chat-message-item">
                      We’ll have to check that at the office and see if the
                      client is on board with...
                    </span>
                    <span className="notification-date">
                      <time
                        className="entry-date updated"
                        dateTime="2004-07-24T18:18"
                      >
                        Yesterday at 9:56pm
                      </time>
                    </span>
                  </div>
                  <span className="notification-icon">
                    <svg className="olymp-chat---messages-icon">
                      <use xlinkto="#olymp-chat---messages-icon" />
                    </svg>
                  </span>
                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkto="#olymp-three-dots-icon" />
                    </svg>
                  </div>
                </li>
                <li className="chat-group">
                  <div className="author-thumb">
                    <img src="/img/avatar11-sm.jpg" alt="author" />
                    <img src="/img/avatar12-sm.jpg" alt="author" />
                    <img src="/img/avatar13-sm.jpg" alt="author" />
                    <img src="/img/avatar10-sm.jpg" alt="author" />
                  </div>
                  <div className="notification-event">
                    <Link to="#" className="h6 notification-friend">
                      You, Faye, Ed &amp; Jet +3
                    </Link>
                    <span className="last-message-author">Ed:</span>
                    <span className="chat-message-item">
                      Yeah! Seems fine by me!
                    </span>
                    <span className="notification-date">
                      <time
                        className="entry-date updated"
                        dateTime="2004-07-24T18:18"
                      >
                        March 16th at 10:23am
                      </time>
                    </span>
                  </div>
                  <span className="notification-icon">
                    <svg className="olymp-chat---messages-icon">
                      <use xlinkto="#olymp-chat---messages-icon" />
                    </svg>
                  </span>
                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkto="#olymp-three-dots-icon" />
                    </svg>
                  </div>
                </li>
              </ul>
              <Link to="#" className="view-all bg-purple">
                View All Messages
              </Link>
            </div>
          </div>
          <div className="tab-pane " id="notification" role="tabpanel">
            <div className="mCustomScrollbar" data-mcs-theme="dark">
              <div className="ui-block-title ui-block-title-small">
                <h6 className="title">Notifications</h6>
                <Link to="#">Mark all as read</Link>
                <Link to="#">Settings</Link>
              </div>
              <ul className="notification-list">
                <li>
                  <div className="author-thumb">
                    <img src="/img/avatar62-sm.jpg" alt="author" />
                  </div>
                  <div className="notification-event">
                    <div>
                      <Link to="#" className="h6 notification-friend">
                        Mathilda Brinker
                      </Link>{" "}
                      commented on your new{" "}
                      <Link to="#" className="notification-link">
                        profile status
                      </Link>
                      .
                    </div>
                    <span className="notification-date">
                      <time
                        className="entry-date updated"
                        dateTime="2004-07-24T18:18"
                      >
                        4 hours ago
                      </time>
                    </span>
                  </div>
                  <span className="notification-icon">
                    <svg className="olymp-comments-post-icon">
                      <use xlinkto="#olymp-comments-post-icon" />
                    </svg>
                  </span>
                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkto="#olymp-three-dots-icon" />
                    </svg>
                    <svg className="olymp-little-delete">
                      <use xlinkto="#olymp-little-delete" />
                    </svg>
                  </div>
                </li>
                <li className="un-read">
                  <div className="author-thumb">
                    <img src="/img/avatar63-sm.jpg" alt="author" />
                  </div>
                  <div className="notification-event">
                    <div>
                      You and{" "}
                      <Link to="#" className="h6 notification-friend">
                        Nicholas Grissom
                      </Link>{" "}
                      just became friends. Write on{" "}
                      <Link to="#" className="notification-link">
                        his wall
                      </Link>
                      .
                    </div>
                    <span className="notification-date">
                      <time
                        className="entry-date updated"
                        dateTime="2004-07-24T18:18"
                      >
                        9 hours ago
                      </time>
                    </span>
                  </div>
                  <span className="notification-icon">
                    <svg className="olymp-happy-face-icon">
                      <use xlinkto="#olymp-happy-face-icon" />
                    </svg>
                  </span>
                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkto="#olymp-three-dots-icon" />
                    </svg>
                    <svg className="olymp-little-delete">
                      <use xlinkto="#olymp-little-delete" />
                    </svg>
                  </div>
                </li>
                <li className="with-comment-photo">
                  <div className="author-thumb">
                    <img src="/img/avatar64-sm.jpg" alt="author" />
                  </div>
                  <div className="notification-event">
                    <div>
                      <Link to="#" className="h6 notification-friend">
                        Sarah Hetfield
                      </Link>{" "}
                      commented on your{" "}
                      <Link to="#" className="notification-link">
                        photo
                      </Link>
                      .
                    </div>
                    <span className="notification-date">
                      <time
                        className="entry-date updated"
                        dateTime="2004-07-24T18:18"
                      >
                        Yesterday at 5:32am
                      </time>
                    </span>
                  </div>
                  <span className="notification-icon">
                    <svg className="olymp-comments-post-icon">
                      <use xlinkto="#olymp-comments-post-icon" />
                    </svg>
                  </span>
                  <div className="comment-photo">
                    <img src="/img/comment-photo1.jpg" alt="photo" />
                    <span>
                      “She looks incredible in that outfit! We should see
                      each...”
                    </span>
                  </div>
                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkto="#olymp-three-dots-icon" />
                    </svg>
                    <svg className="olymp-little-delete">
                      <use xlinkto="#olymp-little-delete" />
                    </svg>
                  </div>
                </li>
                <li>
                  <div className="author-thumb">
                    <img src="/img/avatar65-sm.jpg" alt="author" />
                  </div>
                  <div className="notification-event">
                    <div>
                      <Link to="#" className="h6 notification-friend">
                        Green Goo Rock
                      </Link>{" "}
                      invited you to attend to his event Goo in{" "}
                      <Link to="#" className="notification-link">
                        Gotham Bar
                      </Link>
                      .
                    </div>
                    <span className="notification-date">
                      <time
                        className="entry-date updated"
                        dateTime="2004-07-24T18:18"
                      >
                        March 5th at 6:43pm
                      </time>
                    </span>
                  </div>
                  <span className="notification-icon">
                    <svg className="olymp-happy-face-icon">
                      <use xlinkto="#olymp-happy-face-icon" />
                    </svg>
                  </span>
                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkto="#olymp-three-dots-icon" />
                    </svg>
                    <svg className="olymp-little-delete">
                      <use xlinkto="#olymp-little-delete" />
                    </svg>
                  </div>
                </li>
                <li>
                  <div className="author-thumb">
                    <img src="/img/avatar66-sm.jpg" alt="author" />
                  </div>
                  <div className="notification-event">
                    <div>
                      <Link to="#" className="h6 notification-friend">
                        James Summers
                      </Link>{" "}
                      commented on your new{" "}
                      <Link to="#" className="notification-link">
                        profile status
                      </Link>
                      .
                    </div>
                    <span className="notification-date">
                      <time
                        className="entry-date updated"
                        dateTime="2004-07-24T18:18"
                      >
                        March 2nd at 8:29pm
                      </time>
                    </span>
                  </div>
                  <span className="notification-icon">
                    <svg className="olymp-heart-icon">
                      <use xlinkto="#olymp-heart-icon" />
                    </svg>
                  </span>
                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkto="#olymp-three-dots-icon" />
                    </svg>
                    <svg className="olymp-little-delete">
                      <use xlinkto="#olymp-little-delete" />
                    </svg>
                  </div>
                </li>
              </ul>
              <Link to="#" className="view-all bg-primary">
                View All Notifications
              </Link>
            </div>
          </div>
          <div className="tab-pane " id="search" role="tabpanel">
            <form className="search-bar w-search notification-list friend-requests">
              <div className="form-group with-button">
                <input
                  className="form-control js-user-search"
                  placeholder="Search here people or pages..."
                  type="text"
                />
              </div>
            </form>
          </div>
        </div>
        {/* ... end  Tab panes */}
      </header>
      {/* ... end Responsive Header-BP */}
      {/* <div className="header-spacer" /> */}
    </div>
  );
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapStateToProps, {})(Navbar);
