import React from "react";
import {connect} from 'react-redux'

function ProfileTimeLine({profile}) {
  return (
    <>
    {
      profile ?<div className="container">
      <div className="row">
        {/* Main Content */}
        <div className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
          <div id="newsfeed-items-grid">
            {/* News Feed Form  */}
            <div className="news-feed-form">
              {/* Nav tabs */}
            
              {/* Tab panes */}
              <div className="tab-content">
                <div
                  className="tab-pane active"
                  id="home-1"
                  role="tabpanel"
                  aria-expanded="true"
                >
                  <form style={{background:"white"}}>
                    <div className="author-thumb">
                      <img src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.0-9/79437909_1067807676930897_996180942336819200_n.jpg?_nc_cat=109&_nc_sid=174925&_nc_ohc=9bdhsF0j-FoAX-6rOy2&_nc_ht=scontent.fsgn2-4.fna&oh=4bc0ad3ba9319b09ffceaf5ca89afceb&oe=5F28F551" width="40px" height="40px" alt="author" />
                    </div>
                    <div className="form-group with-icon label-floating is-empty">
                      <textarea style={{paddingLeft:"90px"}}
                        className="form-control"
                        placeholder="What are you thinking ?"
                       
                      
                      />
                    </div>
                    <div className="add-options-message">
                      <a
                        href="#"
                        className="options-message"
                        data-toggle="tooltip"
                        data-placement="top"
                        data-original-title="ADD PHOTOS"
                      >
                        <svg
                          className="olymp-camera-icon"
                          data-toggle="modal"
                          data-target="#update-header-photo"
                        >
                          <use xlinkHref="#olymp-camera-icon" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="options-message"
                        data-toggle="tooltip"
                        data-placement="top"
                        data-original-title="TAG YOUR FRIENDS"
                      >
                        <svg className="olymp-computer-icon">
                          <use xlinkHref="#olymp-computer-icon" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="options-message"
                        data-toggle="tooltip"
                        data-placement="top"
                        data-original-title="ADD LOCATION"
                      >
                        <svg className="olymp-small-pin-icon">
                          <use xlinkHref="#olymp-small-pin-icon" />
                        </svg>
                      </a>
                      <button className="btn btn-primary btn-md-2">
                        Post Status
                      </button>
                      <button className="btn btn-md-2 btn-border-think btn-transparent c-grey">
                        Preview
                      </button>
                    </div>
                  </form>
                </div>
                <div
                  className="tab-pane"
                  id="profile-1"
                  role="tabpanel"
                  aria-expanded="true"
                >
                  <form>
                    <div className="author-thumb">
                      <img src="img/author-page.jpg" alt="author" />
                    </div>
                    <div className="form-group with-icon label-floating is-empty">
                      <label className="control-label">
                        Share what you are thinking here...
                      </label>
                      <textarea
                        className="form-control"
                        placeholder
                        defaultValue={""}
                      />
                    </div>
                    <div className="add-options-message">
                      <a
                        href="#"
                        className="options-message"
                        data-toggle="tooltip"
                        data-placement="top"
                        data-original-title="ADD PHOTOS"
                      >
                        <svg
                          className="olymp-camera-icon"
                          data-toggle="modal"
                          data-target="#update-header-photo"
                        >
                          <use xlinkHref="#olymp-camera-icon" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="options-message"
                        data-toggle="tooltip"
                        data-placement="top"
                        data-original-title="TAG YOUR FRIENDS"
                      >
                        <svg className="olymp-computer-icon">
                          <use xlinkHref="#olymp-computer-icon" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="options-message"
                        data-toggle="tooltip"
                        data-placement="top"
                        data-original-title="ADD LOCATION"
                      >
                        <svg className="olymp-small-pin-icon">
                          <use xlinkHref="#olymp-small-pin-icon" />
                        </svg>
                      </a>
                      <button className="btn btn-primary btn-md-2">
                        Post Status
                      </button>
                      <button className="btn btn-md-2 btn-border-think btn-transparent c-grey">
                        Preview
                      </button>
                    </div>
                  </form>
                </div>
                <div
                  className="tab-pane"
                  id="blog"
                  role="tabpanel"
                  aria-expanded="true"
                >
                  <form>
                    <div className="author-thumb">
                      <img src="img/author-page.jpg" alt="author" />
                    </div>
                    <div className="form-group with-icon label-floating is-empty">
                      <label className="control-label">
                        Share what you are thinking here...
                      </label>
                      <textarea
                        className="form-control"
                        placeholder
                        defaultValue={""}
                      />
                    </div>
                    <div className="add-options-message">
                      <a
                        href="#"
                        className="options-message"
                        data-toggle="tooltip"
                        data-placement="top"
                        data-original-title="ADD PHOTOS"
                      >
                        <svg
                          className="olymp-camera-icon"
                          data-toggle="modal"
                          data-target="#update-header-photo"
                        >
                          <use xlinkHref="#olymp-camera-icon" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="options-message"
                        data-toggle="tooltip"
                        data-placement="top"
                        data-original-title="TAG YOUR FRIENDS"
                      >
                        <svg className="olymp-computer-icon">
                          <use xlinkHref="#olymp-computer-icon" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="options-message"
                        data-toggle="tooltip"
                        data-placement="top"
                        data-original-title="ADD LOCATION"
                      >
                        <svg className="olymp-small-pin-icon">
                          <use xlinkHref="#olymp-small-pin-icon" />
                        </svg>
                      </a>
                      <button className="btn btn-primary btn-md-2">
                        Post Status
                      </button>
                      <button className="btn btn-md-2 btn-border-think btn-transparent c-grey">
                        Preview
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* ... end News Feed Form  */}
            <div className="ui-block">
              {/* Post */}
              <article className="hentry post">
                <div className="post__author author vcard inline-items">
                  <img src="/img/author-page.jpg" alt="author" />
                  <div className="author-date">
                    <a
                      className="h6 post__author-name fn"
                      href="02-ProfilePage.html"
                    >
                      James Spiegel
                    </a>
                    <div className="post__date">
                      <time className="published" dateTime="2017-03-24T18:18">
                        19 hours ago
                      </time>
                    </div>
                  </div>
                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkHref="#olymp-three-dots-icon" />
                    </svg>
                    <ul className="more-dropdown">
                      <li>
                        <a href="#">Edit Post</a>
                      </li>
                      <li>
                        <a href="#">Delete Post</a>
                      </li>
                      <li>
                        <a href="#">Turn Off Notifications</a>
                      </li>
                      <li>
                        <a href="#">Select as Featured</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum. Sed ut perspiciatis unde
                  omnis iste natus error sit voluptatem accusantium doloremque.
                </p>
                <div className="post-additional-info inline-items">
                  <a href="#" className="post-add-icon inline-items">
                    <svg className="olymp-heart-icon">
                      <use xlinkHref="#olymp-heart-icon" />
                    </svg>
                    <span>8</span>
                  </a>
                  <ul className="friends-harmonic">
                    <li>
                      <a href="#">
                        <img src="/img/friend-harmonic7.jpg" alt="friend" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/friend-harmonic8.jpg" alt="friend" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/friend-harmonic9.jpg" alt="friend" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/friend-harmonic10.jpg" alt="friend" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/friend-harmonic11.jpg" alt="friend" />
                      </a>
                    </li>
                  </ul>
                  <div className="names-people-likes">
                    <a href="#">Jenny</a>, <a href="#">Robert</a> and
                    <br />6 more liked this
                  </div>
                  <div className="comments-shared">
                    <a href="#" className="post-add-icon inline-items">
                      <svg className="olymp-speech-balloon-icon">
                        <use xlinkHref="#olymp-speech-balloon-icon" />
                      </svg>
                      <span>17</span>
                    </a>
                    <a href="#" className="post-add-icon inline-items">
                      <svg className="olymp-share-icon">
                        <use xlinkHref="#olymp-share-icon" />
                      </svg>
                      <span>24</span>
                    </a>
                  </div>
                </div>
                <div className="control-block-button post-control-button">
                  <a href="#" className="btn btn-control featured-post">
                    <svg className="olymp-trophy-icon">
                      <use xlinkHref="#olymp-trophy-icon" />
                    </svg>
                  </a>
                  <a href="#" className="btn btn-control">
                    <svg className="olymp-like-post-icon">
                      <use xlinkHref="#olymp-like-post-icon" />
                    </svg>
                  </a>
                  <a href="#" className="btn btn-control">
                    <svg className="olymp-comments-post-icon">
                      <use xlinkHref="#olymp-comments-post-icon" />
                    </svg>
                  </a>
                  <a href="#" className="btn btn-control">
                    <svg className="olymp-share-icon">
                      <use xlinkHref="#olymp-share-icon" />
                    </svg>
                  </a>
                </div>
              </article>
              {/* .. end Post */}{" "}
            </div>
            <div className="ui-block">
              {/* Post */}
              <article className="hentry post video">
                <div className="post__author author vcard inline-items">
                  <img src="/img/author-page.jpg" alt="author" />
                  <div className="author-date">
                    <a
                      className="h6 post__author-name fn"
                      href="02-ProfilePage.html"
                    >
                      James Spiegel
                    </a>{" "}
                    shared a<a href="#">link</a>
                    <div className="post__date">
                      <time className="published" dateTime="2017-03-24T18:18">
                        7 hours ago
                      </time>
                    </div>
                  </div>
                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkHref="#olymp-three-dots-icon" />
                    </svg>
                    <ul className="more-dropdown">
                      <li>
                        <a href="#">Edit Post</a>
                      </li>
                      <li>
                        <a href="#">Delete Post</a>
                      </li>
                      <li>
                        <a href="#">Turn Off Notifications</a>
                      </li>
                      <li>
                        <a href="#">Select as Featured</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                  If someone missed it, check out the new song by System of a
                  Revenge! I thinks they are going back to their roots...
                </p>
                <div className="post-video">
                  <div className="video-thumb">
                    <img src="/img/video5.jpg" alt="photo" />
                    <a
                      href="https://youtube.com/watch?v=excVFQ2TWig"
                      className="play-video"
                    >
                      <svg className="olymp-play-icon">
                        <use xlinkHref="#olymp-play-icon" />
                      </svg>
                    </a>
                  </div>
                  <div className="video-content">
                    <a href="#" className="h4 title">
                      System of a Revenge - Nothing Else Matters (LIVE)
                    </a>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur ipisicing elit,
                      sed do eiusmod tempo incididunt ut labore..
                    </p>
                    <a href="#" className="link-site">
                      YOUTUBE.COM
                    </a>
                  </div>
                </div>
                <div className="post-additional-info inline-items">
                  <a href="#" className="post-add-icon inline-items">
                    <svg className="olymp-heart-icon">
                      <use xlinkHref="#olymp-heart-icon" />
                    </svg>
                    <span>15</span>
                  </a>
                  <ul className="friends-harmonic">
                    <li>
                      <a href="#">
                        <img src="/img/friend-harmonic9.jpg" alt="friend" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/friend-harmonic10.jpg" alt="friend" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/friend-harmonic7.jpg" alt="friend" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/friend-harmonic8.jpg" alt="friend" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/friend-harmonic11.jpg" alt="friend" />
                      </a>
                    </li>
                  </ul>
                  <div className="names-people-likes">
                    <a href="#">Jenny</a>, <a href="#">Robert</a> and
                    <br />
                    13 more liked this
                  </div>
                  <div className="comments-shared">
                    <a href="#" className="post-add-icon inline-items">
                      <svg className="olymp-speech-balloon-icon">
                        <use xlinkHref="#olymp-speech-balloon-icon" />
                      </svg>
                      <span>1</span>
                    </a>
                    <a href="#" className="post-add-icon inline-items">
                      <svg className="olymp-share-icon">
                        <use xlinkHref="#olymp-share-icon" />
                      </svg>
                      <span>16</span>
                    </a>
                  </div>
                </div>
                <div className="control-block-button post-control-button">
                  <a href="#" className="btn btn-control">
                    <svg className="olymp-like-post-icon">
                      <use xlinkHref="#olymp-like-post-icon" />
                    </svg>
                  </a>
                  <a href="#" className="btn btn-control">
                    <svg className="olymp-comments-post-icon">
                      <use xlinkHref="#olymp-comments-post-icon" />
                    </svg>
                  </a>
                  <a href="#" className="btn btn-control">
                    <svg className="olymp-share-icon">
                      <use xlinkHref="#olymp-share-icon" />
                    </svg>
                  </a>
                </div>
              </article>
              {/* .. end Post */}{" "}
            </div>
            <div className="ui-block">
              {/* Post */}
              <article className="hentry post">
                <div className="post__author author vcard inline-items">
                  <img src="/img/author-page.jpg" alt="author" />
                  <div className="author-date">
                    <a
                      className="h6 post__author-name fn"
                      href="02-ProfilePage.html"
                    >
                      James Spiegel
                    </a>
                    <div className="post__date">
                      <time className="published" dateTime="2017-03-24T18:18">
                        2 hours ago
                      </time>
                    </div>
                  </div>
                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkHref="#olymp-three-dots-icon" />
                    </svg>
                    <ul className="more-dropdown">
                      <li>
                        <a href="#">Edit Post</a>
                      </li>
                      <li>
                        <a href="#">Delete Post</a>
                      </li>
                      <li>
                        <a href="#">Turn Off Notifications</a>
                      </li>
                      <li>
                        <a href="#">Select as Featured</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempo incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris consequat.
                </p>
                <div className="post-additional-info inline-items">
                  <a href="#" className="post-add-icon inline-items">
                    <svg className="olymp-heart-icon">
                      <use xlinkHref="#olymp-heart-icon" />
                    </svg>
                    <span>36</span>
                  </a>
                  <ul className="friends-harmonic">
                    <li>
                      <a href="#">
                        <img src="/img/friend-harmonic7.jpg" alt="friend" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/friend-harmonic8.jpg" alt="friend" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/friend-harmonic9.jpg" alt="friend" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/friend-harmonic10.jpg" alt="friend" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/friend-harmonic11.jpg" alt="friend" />
                      </a>
                    </li>
                  </ul>
                  <div className="names-people-likes">
                    <a href="#">You</a>, <a href="#">Elaine</a> and
                    <br />
                    34 more liked this
                  </div>
                  <div className="comments-shared">
                    <a href="#" className="post-add-icon inline-items">
                      <svg className="olymp-speech-balloon-icon">
                        <use xlinkHref="#olymp-speech-balloon-icon" />
                      </svg>
                      <span>17</span>
                    </a>
                    <a href="#" className="post-add-icon inline-items">
                      <svg className="olymp-share-icon">
                        <use xlinkHref="#olymp-share-icon" />
                      </svg>
                      <span>24</span>
                    </a>
                  </div>
                </div>
                <div className="control-block-button post-control-button">
                  <a href="#" className="btn btn-control">
                    <svg className="olymp-like-post-icon">
                      <use xlinkHref="#olymp-like-post-icon" />
                    </svg>
                  </a>
                  <a href="#" className="btn btn-control">
                    <svg className="olymp-comments-post-icon">
                      <use xlinkHref="#olymp-comments-post-icon" />
                    </svg>
                  </a>
                  <a href="#" className="btn btn-control">
                    <svg className="olymp-share-icon">
                      <use xlinkHref="#olymp-share-icon" />
                    </svg>
                  </a>
                </div>
              </article>
              {/* .. end Post */}
              {/* Comments */}
              <ul className="comments-list">
                <li className="comment-item">
                  <div className="post__author author vcard inline-items">
                    <img src="/img/avatar10-sm.jpg" alt="author" />
                    <div className="author-date">
                      <a className="h6 post__author-name fn" href="#">
                        Elaine Dreyfuss
                      </a>
                      <div className="post__date">
                        <time className="published" dateTime="2017-03-24T18:18">
                          5 mins ago
                        </time>
                      </div>
                    </div>
                    <a href="#" className="more">
                      <svg className="olymp-three-dots-icon">
                        <use xlinkHref="#olymp-three-dots-icon" />
                      </svg>
                    </a>
                  </div>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium der doloremque laudantium.
                  </p>
                  <a href="#" className="post-add-icon inline-items">
                    <svg className="olymp-heart-icon">
                      <use xlinkHref="#olymp-heart-icon" />
                    </svg>
                    <span>8</span>
                  </a>
                  <a href="#" className="reply">
                    Reply
                  </a>
                </li>
                <li className="comment-item has-children">
                  <div className="post__author author vcard inline-items">
                    <img src="/img/avatar5-sm.jpg" alt="author" />
                    <div className="author-date">
                      <a className="h6 post__author-name fn" href="#">
                        Green Goo Rock
                      </a>
                      <div className="post__date">
                        <time className="published" dateTime="2017-03-24T18:18">
                          1 hour ago
                        </time>
                      </div>
                    </div>
                    <a href="#" className="more">
                      <svg className="olymp-three-dots-icon">
                        <use xlinkHref="#olymp-three-dots-icon" />
                      </svg>
                    </a>
                  </div>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugiten, sed quia consequuntur magni dolores eos
                    qui ratione voluptatem sequi en lod nesciunt. Neque porro
                    quisquam est, qui dolorem ipsum quia dolor sit amet,
                    consectetur adipisci velit en lorem ipsum der.
                  </p>
                  <a href="#" className="post-add-icon inline-items">
                    <svg className="olymp-heart-icon">
                      <use xlinkHref="#olymp-heart-icon" />
                    </svg>
                    <span>5</span>
                  </a>
                  <a href="#" className="reply">
                    Reply
                  </a>
                  <ul className="children">
                    <li className="comment-item">
                      <div className="post__author author vcard inline-items">
                        <img src="/img/avatar8-sm.jpg" alt="author" />
                        <div className="author-date">
                          <a className="h6 post__author-name fn" href="#">
                            Diana Jameson
                          </a>
                          <div className="post__date">
                            <time
                              className="published"
                              dateTime="2017-03-24T18:18"
                            >
                              39 mins ago
                            </time>
                          </div>
                        </div>
                        <a href="#" className="more">
                          <svg className="olymp-three-dots-icon">
                            <use xlinkHref="#olymp-three-dots-icon" />
                          </svg>
                        </a>
                      </div>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                      </p>
                      <a href="#" className="post-add-icon inline-items">
                        <svg className="olymp-heart-icon">
                          <use xlinkHref="#olymp-heart-icon" />
                        </svg>
                        <span>2</span>
                      </a>
                      <a href="#" className="reply">
                        Reply
                      </a>
                    </li>
                    <li className="comment-item">
                      <div className="post__author author vcard inline-items">
                        <img src="/img/avatar2-sm.jpg" alt="author" />
                        <div className="author-date">
                          <a className="h6 post__author-name fn" href="#">
                            Nicholas Grisom
                          </a>
                          <div className="post__date">
                            <time
                              className="published"
                              dateTime="2017-03-24T18:18"
                            >
                              24 mins ago
                            </time>
                          </div>
                        </div>
                        <a href="#" className="more">
                          <svg className="olymp-three-dots-icon">
                            <use xlinkHref="#olymp-three-dots-icon" />
                          </svg>
                        </a>
                      </div>
                      <p>Excepteur sint occaecat cupidatat non proident.</p>
                      <a href="#" className="post-add-icon inline-items">
                        <svg className="olymp-heart-icon">
                          <use xlinkHref="#olymp-heart-icon" />
                        </svg>
                        <span>0</span>
                      </a>
                      <a href="#" className="reply">
                        Reply
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="comment-item">
                  <div className="post__author author vcard inline-items">
                    <img src="/img/avatar4-sm.jpg" alt="author" />
                    <div className="author-date">
                      <a className="h6 post__author-name fn" href="#">
                        Chris Greyson
                      </a>
                      <div className="post__date">
                        <time className="published" dateTime="2017-03-24T18:18">
                          1 hour ago
                        </time>
                      </div>
                    </div>
                    <a href="#" className="more">
                      <svg className="olymp-three-dots-icon">
                        <use xlinkHref="#olymp-three-dots-icon" />
                      </svg>
                    </a>
                  </div>
                  <p>
                    Dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit.
                  </p>
                  <a href="#" className="post-add-icon inline-items">
                    <svg className="olymp-heart-icon">
                      <use xlinkHref="#olymp-heart-icon" />
                    </svg>
                    <span>7</span>
                  </a>
                  <a href="#" className="reply">
                    Reply
                  </a>
                </li>
              </ul>
              {/* ... end Comments */}
              <a href="#" className="more-comments">
                View more comments <span>+</span>
              </a>
              {/* Comment Form  */}
              <form className="comment-form inline-items">
                <div className="post__author author vcard inline-items">
                  <img src="/img/author-page.jpg" alt="author" />
                  <div className="form-group with-icon-right ">
                    <textarea
                      className="form-control"
                      placeholder
                      defaultValue={""}
                    />
                    <div className="add-options-message">
                      <a
                        href="#"
                        className="options-message"
                        data-toggle="modal"
                        data-target="#update-header-photo"
                      >
                        <svg className="olymp-camera-icon">
                          <use xlinkHref="#olymp-camera-icon" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <button className="btn btn-md-2 btn-primary">
                  Post Comment
                </button>
                <button className="btn btn-md-2 btn-border-think c-grey btn-transparent custom-color">
                  Cancel
                </button>
              </form>
              {/* ... end Comment Form  */}{" "}
            </div>
            <div className="ui-block">
              {/* Post */}
              <article className="hentry post has-post-thumbnail shared-photo">
                <div className="post__author author vcard inline-items">
                  <img src="/img/author-page.jpg" alt="author" />
                  <div className="author-date">
                    <a
                      className="h6 post__author-name fn"
                      href="02-ProfilePage.html"
                    >
                      James Spiegel
                    </a>{" "}
                    shared
                    <a href="#">Diana Jameson</a>’s <a href="#">photo</a>
                    <div className="post__date">
                      <time className="published" dateTime="2017-03-24T18:18">
                        7 hours ago
                      </time>
                    </div>
                  </div>
                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkHref="#olymp-three-dots-icon" />
                    </svg>
                    <ul className="more-dropdown">
                      <li>
                        <a href="#">Edit Post</a>
                      </li>
                      <li>
                        <a href="#">Delete Post</a>
                      </li>
                      <li>
                        <a href="#">Turn Off Notifications</a>
                      </li>
                      <li>
                        <a href="#">Select as Featured</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                  Hi! Everyone should check out these amazing photographs that
                  my friend shot the past week. Here’s one of them...leave a
                  kind comment!
                </p>
                <div className="post-thumb">
                  <img src="/img/post-photo6.jpg" alt="photo" />
                </div>
                <ul className="children single-children">
                  <li className="comment-item">
                    <div className="post__author author vcard inline-items">
                      <img src="/img/avatar8-sm.jpg" alt="author" />
                      <div className="author-date">
                        <a className="h6 post__author-name fn" href="#">
                          Diana Jameson
                        </a>
                        <div className="post__date">
                          <time
                            className="published"
                            dateTime="2017-03-24T18:18"
                          >
                            16 hours ago
                          </time>
                        </div>
                      </div>
                    </div>
                    <p>
                      Here’s the first photo of our incredible photoshoot from
                      yesterday. If you like it please say so and tel me what
                      you wanna see next!
                    </p>
                  </li>
                </ul>
                <div className="post-additional-info inline-items">
                  <a href="#" className="post-add-icon inline-items">
                    <svg className="olymp-heart-icon">
                      <use xlinkHref="#olymp-heart-icon" />
                    </svg>
                    <span>15</span>
                  </a>
                  <ul className="friends-harmonic">
                    <li>
                      <a href="#">
                        <img src="/img/friend-harmonic5.jpg" alt="friend" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/friend-harmonic10.jpg" alt="friend" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/friend-harmonic7.jpg" alt="friend" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/friend-harmonic8.jpg" alt="friend" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/friend-harmonic2.jpg" alt="friend" />
                      </a>
                    </li>
                  </ul>
                  <div className="names-people-likes">
                    <a href="#">Diana</a>, <a href="#">Nicholas</a> and
                    <br />
                    13 more liked this
                  </div>
                  <div className="comments-shared">
                    <a href="#" className="post-add-icon inline-items">
                      <svg className="olymp-speech-balloon-icon">
                        <use xlinkHref="#olymp-speech-balloon-icon" />
                      </svg>
                      <span>0</span>
                    </a>
                    <a href="#" className="post-add-icon inline-items">
                      <svg className="olymp-share-icon">
                        <use xlinkHref="#olymp-share-icon" />
                      </svg>
                      <span>16</span>
                    </a>
                  </div>
                </div>
                <div className="control-block-button post-control-button">
                  <a href="#" className="btn btn-control">
                    <svg className="olymp-like-post-icon">
                      <use xlinkHref="#olymp-like-post-icon" />
                    </svg>
                  </a>
                  <a href="#" className="btn btn-control">
                    <svg className="olymp-comments-post-icon">
                      <use xlinkHref="#olymp-comments-post-icon" />
                    </svg>
                  </a>
                  <a href="#" className="btn btn-control">
                    <svg className="olymp-share-icon">
                      <use xlinkHref="#olymp-share-icon" />
                    </svg>
                  </a>
                </div>
              </article>
              {/* .. end Post */}{" "}
            </div>
          </div>
          <a
            id="load-more-button"
            href="#"
            className="btn btn-control btn-more"
            data-load-link="items-to-load.html"
            data-container="newsfeed-items-grid"
          >
            <svg className="olymp-three-dots-icon">
              <use xlinkHref="#olymp-three-dots-icon" />
            </svg>
          </a>
        </div>
        {/* ... end Main Content */}
        {/* Left Sidebar */}
        <div className="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12">
          <div className="ui-block">
            <div className="ui-block-title">
              <h6 className="title">Profile Intro</h6>
            </div>
            <div className="ui-block-content">
              {/* W-Personal-Info */}
              <ul className="widget w-personal-info item-block">
                <li>
                  <span className="title">About Me:</span>
                  <span className="text">
                   {profile.aboutMe}
                  </span>
                </li>
                <li>
                  <span className="title">Favourite TV Shows:</span>
                  <span className="text">
                    {profile.allHobbies.favoriteTVShow}
                  </span>
                </li>
                <li>
                  <span className="title">
                    Favourite Music Bands / Artists:
                  </span>
                  <span className="text">
                  {profile.allHobbies.favoriteMusicBand}
                  </span>
                </li>
              </ul>
              {/* .. end W-Personal-Info */}
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
          <div className="ui-block">
            <div className="ui-block-title">
              <h6 className="title">James’s Badges</h6>
            </div>
            <div className="ui-block-content">
              {/* W-Badges */}
              <ul className="widget w-badges">
                <li>
                  <a href="24-CommunityBadges.html">
                    <img src="/img/badge1.png" alt="author" />
                    <div className="label-avatar bg-primary">2</div>
                  </a>
                </li>
                <li>
                  <a href="24-CommunityBadges.html">
                    <img src="/img/badge4.png" alt="author" />
                  </a>
                </li>
                <li>
                  <a href="24-CommunityBadges.html">
                    <img src="/img/badge3.png" alt="author" />
                    <div className="label-avatar bg-blue">4</div>
                  </a>
                </li>
                <li>
                  <a href="24-CommunityBadges.html">
                    <img src="/img/badge6.png" alt="author" />
                  </a>
                </li>
                <li>
                  <a href="24-CommunityBadges.html">
                    <img src="/img/badge11.png" alt="author" />
                  </a>
                </li>
                <li>
                  <a href="24-CommunityBadges.html">
                    <img src="/img/badge8.png" alt="author" />
                  </a>
                </li>
                <li>
                  <a href="24-CommunityBadges.html">
                    <img src="/img/badge10.png" alt="author" />
                  </a>
                </li>
                <li>
                  <a href="24-CommunityBadges.html">
                    <img src="/img/badge13.png" alt="author" />
                    <div className="label-avatar bg-breez">2</div>
                  </a>
                </li>
                <li>
                  <a href="24-CommunityBadges.html">
                    <img src="/img/badge7.png" alt="author" />
                  </a>
                </li>
                <li>
                  <a href="24-CommunityBadges.html">
                    <img src="/img/badge12.png" alt="author" />
                  </a>
                </li>
              </ul>
              {/*.. end W-Badges */}
            </div>
          </div>
          <div className="ui-block">
            <div className="ui-block-title">
              <h6 className="title">My Spotify Playlist</h6>
            </div>
            {/* W-Playlist */}
            <ol className="widget w-playlist">
              <li className="js-open-popup" data-popup-target=".playlist-popup">
                <div className="playlist-thumb">
                  <img src="/img/playlist6.jpg" alt="thumb-composition" />
                  <div className="overlay" />
                  <a href="#" className="play-icon">
                    <svg className="olymp-music-play-icon-big">
                      <use xlinkHref="#olymp-music-play-icon-big" />
                    </svg>
                  </a>
                </div>
                <div className="composition">
                  <a href="#" className="composition-name">
                    The Past Starts Slow...
                  </a>
                  <a href="#" className="composition-author">
                    System of a Revenge
                  </a>
                </div>
                <div className="composition-time">
                  <time className="published" dateTime="2017-03-24T18:18">
                    3:22
                  </time>
                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkHref="#olymp-three-dots-icon" />
                    </svg>
                    <ul className="more-dropdown">
                      <li>
                        <a href="#">Add Song to Player</a>
                      </li>
                      <li>
                        <a href="#">Add Playlist to Player</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="js-open-popup" data-popup-target=".playlist-popup">
                <div className="playlist-thumb">
                  <img src="/img/playlist7.jpg" alt="thumb-composition" />
                  <div className="overlay" />
                  <a href="#" className="play-icon">
                    <svg className="olymp-music-play-icon-big">
                      <use xlinkHref="#olymp-music-play-icon-big" />
                    </svg>
                  </a>
                </div>
                <div className="composition">
                  <a href="#" className="composition-name">
                    The Pretender
                  </a>
                  <a href="#" className="composition-author">
                    Kung Fighters
                  </a>
                </div>
                <div className="composition-time">
                  <time className="published" dateTime="2017-03-24T18:18">
                    5:48
                  </time>
                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkHref="#olymp-three-dots-icon" />
                    </svg>
                    <ul className="more-dropdown">
                      <li>
                        <a href="#">Add Song to Player</a>
                      </li>
                      <li>
                        <a href="#">Add Playlist to Player</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="js-open-popup" data-popup-target=".playlist-popup">
                <div className="playlist-thumb">
                  <img src="/img/playlist8.jpg" alt="thumb-composition" />
                  <div className="overlay" />
                  <a href="#" className="play-icon">
                    <svg className="olymp-music-play-icon-big">
                      <use xlinkHref="#olymp-music-play-icon-big" />
                    </svg>
                  </a>
                </div>
                <div className="composition">
                  <a href="#" className="composition-name">
                    Blood Brothers
                  </a>
                  <a href="#" className="composition-author">
                    Iron Maid
                  </a>
                </div>
                <div className="composition-time">
                  <time className="published" dateTime="2017-03-24T18:18">
                    3:06
                  </time>
                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkHref="#olymp-three-dots-icon" />
                    </svg>
                    <ul className="more-dropdown">
                      <li>
                        <a href="#">Add Song to Player</a>
                      </li>
                      <li>
                        <a href="#">Add Playlist to Player</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="js-open-popup" data-popup-target=".playlist-popup">
                <div className="playlist-thumb">
                  <img src="/img/playlist9.jpg" alt="thumb-composition" />
                  <div className="overlay" />
                  <a href="#" className="play-icon">
                    <svg className="olymp-music-play-icon-big">
                      <use xlinkHref="#olymp-music-play-icon-big" />
                    </svg>
                  </a>
                </div>
                <div className="composition">
                  <a href="#" className="composition-name">
                    Seven Nation Army
                  </a>
                  <a href="#" className="composition-author">
                    The Black Stripes
                  </a>
                </div>
                <div className="composition-time">
                  <time className="published" dateTime="2017-03-24T18:18">
                    6:17
                  </time>
                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkHref="#olymp-three-dots-icon" />
                    </svg>
                    <ul className="more-dropdown">
                      <li>
                        <a href="#">Add Song to Player</a>
                      </li>
                      <li>
                        <a href="#">Add Playlist to Player</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="js-open-popup" data-popup-target=".playlist-popup">
                <div className="playlist-thumb">
                  <img src="/img/playlist10.jpg" alt="thumb-composition" />
                  <div className="overlay" />
                  <a href="#" className="play-icon">
                    <svg className="olymp-music-play-icon-big">
                      <use xlinkHref="#olymp-music-play-icon-big" />
                    </svg>
                  </a>
                </div>
                <div className="composition">
                  <a href="#" className="composition-name">
                    Killer Queen
                  </a>
                  <a href="#" className="composition-author">
                    Archiduke
                  </a>
                </div>
                <div className="composition-time">
                  <time className="published" dateTime="2017-03-24T18:18">
                    5:40
                  </time>
                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkHref="#olymp-three-dots-icon" />
                    </svg>
                    <ul className="more-dropdown">
                      <li>
                        <a href="#">Add Song to Player</a>
                      </li>
                      <li>
                        <a href="#">Add Playlist to Player</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ol>
            {/* .. end W-Playlist */}
          </div>
          <div className="ui-block">
            <div className="ui-block-title">
              <h6 className="title">Twitter Feed</h6>
            </div>
            {/* W-Twitter */}
            <ul className="widget w-twitter">
              <li className="twitter-item">
                <div className="author-folder">
                  <img src="/img/twitter-avatar1.png" alt="avatar" />
                  <div className="author">
                    <a href="#" className="author-name">
                      Space Cowboy
                    </a>
                    <a href="#" className="group">
                      @james_spiegelOK
                    </a>
                  </div>
                </div>
                <p>
                  Tomorrow with the agency we will run 5 km for charity. Come
                  and give us your support!
                  <a href="#" className="link-post">
                    #Daydream5K
                  </a>
                </p>
                <span className="post__date">
                  <time className="published" dateTime="2017-03-24T18:18">
                    2 hours ago
                  </time>
                </span>
              </li>
              <li className="twitter-item">
                <div className="author-folder">
                  <img src="/img/twitter-avatar1.png" alt="avatar" />
                  <div className="author">
                    <a href="#" className="author-name">
                      Space Cowboy
                    </a>
                    <a href="#" className="group">
                      @james_spiegelOK
                    </a>
                  </div>
                </div>
                <p>
                  Check out the new website of “The Bebop Bar”!{" "}
                  <a href="#" className="link-post">
                    bytle/thbp53f
                  </a>
                </p>
                <span className="post__date">
                  <time className="published" dateTime="2017-03-24T18:18">
                    16 hours ago
                  </time>
                </span>
              </li>
              <li className="twitter-item">
                <div className="author-folder">
                  <img src="/img/twitter-avatar1.png" alt="avatar" />
                  <div className="author">
                    <a href="#" className="author-name">
                      Space Cowboy
                    </a>
                    <a href="#" className="group">
                      @james_spiegelOK
                    </a>
                  </div>
                </div>
                <p>
                  The Sunday is the annual agency camping trip and I still
                  haven’t got a tent
                  <a href="#" className="link-post">
                    #TheWild #Indoors
                  </a>
                </p>
                <span className="post__date">
                  <time className="published" dateTime="2017-03-24T18:18">
                    Yesterday
                  </time>
                </span>
              </li>
            </ul>
            {/* .. end W-Twitter */}
          </div>
          <div className="ui-block">
            <div className="ui-block-title">
              <h6 className="title">Last Videos</h6>
            </div>
            <div className="ui-block-content">
              {/* W-Latest-Video */}
              <ul className="widget w-last-video">
                <li>
                  <a
                    href="https://vimeo.com/ondemand/viewfromabluemoon4k/147865858"
                    className="play-video play-video--small"
                  >
                    <svg className="olymp-play-icon">
                      <use xlinkHref="#olymp-play-icon" />
                    </svg>
                  </a>
                  <img src="/img/video8.jpg" alt="video" />
                  <div className="video-content">
                    <div className="title">
                      System of a Revenge - Hypnotize...
                    </div>
                    <time className="published" dateTime="2017-03-24T18:18">
                      3:25
                    </time>
                  </div>
                  <div className="overlay" />
                </li>
                <li>
                  <a
                    href="https://youtube.com/watch?v=excVFQ2TWig"
                    className="play-video play-video--small"
                  >
                    <svg className="olymp-play-icon">
                      <use xlinkHref="#olymp-play-icon" />
                    </svg>
                  </a>
                  <img src="/img/video7.jpg" alt="video" />
                  <div className="video-content">
                    <div className="title">Green Goo - Live at Dan’s Arena</div>
                    <time className="published" dateTime="2017-03-24T18:18">
                      5:48
                    </time>
                  </div>
                  <div className="overlay" />
                </li>
              </ul>
              {/* .. end W-Latest-Video */}
            </div>
          </div>
        </div>
        {/* ... end Left Sidebar */}
        {/* Right Sidebar */}
        <div className="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12">
          <div className="ui-block">
            <div className="ui-block-title">
              <h6 className="title">Last Photos</h6>
            </div>
            <div className="ui-block-content">
              {/* W-Latest-Photo */}
              <ul className="widget w-last-photo js-zoom-gallery">
                <li>
                  <a href="/img/last-photo10-large.jpg">
                    <img src="/img/last-photo10-large.jpg" alt="photo" />
                  </a>
                </li>
                <li>
                  <a href="/img/last-phot11-large.jpg">
                    <img src="/img/last-phot11-large.jpg" alt="photo" />
                  </a>
                </li>
                <li>
                  <a href="/img/last-phot12-large.jpg">
                    <img src="/img/last-phot12-large.jpg" alt="photo" />
                  </a>
                </li>
                <li>
                  <a href="/img/last-phot13-large.jpg">
                    <img src="/img/last-phot13-large.jpg" alt="photo" />
                  </a>
                </li>
                <li>
                  <a href="/img/last-phot14-large.jpg">
                    <img src="/img/last-phot14-large.jpg" alt="photo" />
                  </a>
                </li>
                <li>
                  <a href="/img/last-phot15-large.jpg">
                    <img src="/img/last-phot15-large.jpg" alt="photo" />
                  </a>
                </li>
                <li>
                  <a href="/img/last-phot16-large.jpg">
                    <img src="/img/last-phot16-large.jpg" alt="photo" />
                  </a>
                </li>
                <li>
                  <a href="/img/last-phot17-large.jpg">
                    <img src="/img/last-phot17-large.jpg" alt="photo" />
                  </a>
                </li>
                <li>
                  <a href="/img/last-phot18-large.jpg">
                    <img src="/img/last-phot18-large.jpg" alt="photo" />
                  </a>
                </li>
              </ul>
              {/* .. end W-Latest-Photo */}
            </div>
          </div>
          <div className="ui-block">
            <div className="ui-block-title">
              <h6 className="title">Blog Posts</h6>
            </div>
            {/* W-Blog-Posts */}
            <ul className="widget w-blog-posts">
              <li>
                <article className="hentry post">
                  <a href="#" className="h4">
                    My Perfect Vacations in South America and Europe
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet, consect adipisicing elit, sed do
                    eiusmod por incidid ut labore et.
                  </p>
                  <div className="post__date">
                    <time className="published" dateTime="2017-03-24T18:18">
                      7 hours ago
                    </time>
                  </div>
                </article>
              </li>
              <li>
                <article className="hentry post">
                  <a href="#" className="h4">
                    The Big Experience of Travelling Alone
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet, consect adipisicing elit, sed do
                    eiusmod por incidid ut labore et.
                  </p>
                  <div className="post__date">
                    <time className="published" dateTime="2017-03-24T18:18">
                      March 18th, at 6:52pm
                    </time>
                  </div>
                </article>
              </li>
            </ul>
            {/* .. end W-Blog-Posts */}
          </div>
          <div className="ui-block">
            <div className="ui-block-title">
              <h6 className="title">Friends (86)</h6>
            </div>
            <div className="ui-block-content">
              {/* W-Faved-Page */}
              <ul className="widget w-faved-page js-zoom-gallery">
                <li>
                  <a href="#">
                    <img src="/img/avatar38-sm.jpg" alt="author" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/img/avatar24-sm.jpg" alt="user" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/img/avatar36-sm.jpg" alt="author" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/img/avatar35-sm.jpg" alt="user" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/img/avatar34-sm.jpg" alt="author" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/img/avatar33-sm.jpg" alt="author" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/img/avatar32-sm.jpg" alt="user" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/img/avatar31-sm.jpg" alt="author" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/img/avatar30-sm.jpg" alt="author" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/img/avatar29-sm.jpg" alt="user" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/img/avatar28-sm.jpg" alt="user" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/img/avatar27-sm.jpg" alt="user" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/img/avatar26-sm.jpg" alt="user" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/img/avatar25-sm.jpg" alt="user" />
                  </a>
                </li>
                <li className="all-users">
                  <a href="#">+74</a>
                </li>
              </ul>
              {/* .. end W-Faved-Page */}
            </div>
          </div>
          <div className="ui-block">
            <div className="ui-block-title">
              <h6 className="title">Favourite Pages</h6>
            </div>
            {/* W-Friend-Pages-Added */}
            <ul className="widget w-friend-pages-added notification-list friend-requests">
              <li className="inline-items">
                <div className="author-thumb">
                  <img src="/img/avatar41-sm.jpg" alt="author" />
                </div>
                <div className="notification-event">
                  <a href="#" className="h6 notification-friend">
                    The Marina Bar
                  </a>
                  <span className="chat-message-item">Restaurant / Bar</span>
                </div>
                <span
                  className="notification-icon"
                  data-toggle="tooltip"
                  data-placement="top"
                  data-original-title="ADD TO YOUR FAVS"
                >
                  <a href="#">
                    <svg className="olymp-star-icon">
                      <use xlinkHref="#olymp-star-icon" />
                    </svg>
                  </a>
                </span>
              </li>
              <li className="inline-items">
                <div className="author-thumb">
                  <img src="/img/avatar42-sm.jpg" alt="author" />
                </div>
                <div className="notification-event">
                  <a href="#" className="h6 notification-friend">
                    Tapronus Rock
                  </a>
                  <span className="chat-message-item">Rock Band</span>
                </div>
                <span
                  className="notification-icon"
                  data-toggle="tooltip"
                  data-placement="top"
                  data-original-title="ADD TO YOUR FAVS"
                >
                  <a href="#">
                    <svg className="olymp-star-icon">
                      <use xlinkHref="#olymp-star-icon" />
                    </svg>
                  </a>
                </span>
              </li>
              <li className="inline-items">
                <div className="author-thumb">
                  <img src="/img/avatar43-sm.jpg" alt="author" />
                </div>
                <div className="notification-event">
                  <a href="#" className="h6 notification-friend">
                    Pixel Digital Design
                  </a>
                  <span className="chat-message-item">Company</span>
                </div>
                <span
                  className="notification-icon"
                  data-toggle="tooltip"
                  data-placement="top"
                  data-original-title="ADD TO YOUR FAVS"
                >
                  <a href="#">
                    <svg className="olymp-star-icon">
                      <use xlinkHref="#olymp-star-icon" />
                    </svg>
                  </a>
                </span>
              </li>
              <li className="inline-items">
                <div className="author-thumb">
                  <img src="/img/avatar44-sm.jpg" alt="author" />
                </div>
                <div className="notification-event">
                  <a href="#" className="h6 notification-friend">
                    Thompson’s Custom Clothing Boutique
                  </a>
                  <span className="chat-message-item">Clothing Store</span>
                </div>
                <span
                  className="notification-icon"
                  data-toggle="tooltip"
                  data-placement="top"
                  data-original-title="ADD TO YOUR FAVS"
                >
                  <a href="#">
                    <svg className="olymp-star-icon">
                      <use xlinkHref="#olymp-star-icon" />
                    </svg>
                  </a>
                </span>
              </li>
              <li className="inline-items">
                <div className="author-thumb">
                  <img src="/img/avatar45-sm.jpg" alt="author" />
                </div>
                <div className="notification-event">
                  <a href="#" className="h6 notification-friend">
                    Crimson Agency
                  </a>
                  <span className="chat-message-item">Company</span>
                </div>
                <span
                  className="notification-icon"
                  data-toggle="tooltip"
                  data-placement="top"
                  data-original-title="ADD TO YOUR FAVS"
                >
                  <a href="#">
                    <svg className="olymp-star-icon">
                      <use xlinkHref="#olymp-star-icon" />
                    </svg>
                  </a>
                </span>
              </li>
              <li className="inline-items">
                <div className="author-thumb">
                  <img src="/img/avatar46-sm.jpg" alt="author" />
                </div>
                <div className="notification-event">
                  <a href="#" className="h6 notification-friend">
                    Mannequin Angel
                  </a>
                  <span className="chat-message-item">Clothing Store</span>
                </div>
                <span
                  className="notification-icon"
                  data-toggle="tooltip"
                  data-placement="top"
                  data-original-title="ADD TO YOUR FAVS"
                >
                  <a href="#">
                    <svg className="olymp-star-icon">
                      <use xlinkHref="#olymp-star-icon" />
                    </svg>
                  </a>
                </span>
              </li>
            </ul>
            {/* .. end W-Friend-Pages-Added */}
          </div>
          <div className="ui-block">
            <div className="ui-block-title">
              <h6 className="title">James's Poll</h6>
            </div>
            <div className="ui-block-content">
              {/* W-Pool */}
              <ul className="widget w-pool">
                <li>
                  <p>
                    If you had to choose, which actor do you prefer to be the
                    next Darkman?{" "}
                  </p>
                </li>
                <li>
                  <div className="skills-item">
                    <div className="skills-item-info">
                      <span className="skills-item-title">
                        <span className="radio">
                          <label>
                            <input type="radio" name="optionsRadios" />
                            Thomas Bale
                          </label>
                        </span>
                      </span>
                      <span className="skills-item-count">
                        <span
                          className="count-animate"
                          data-speed={1000}
                          data-refresh-interval={50}
                          data-to={62}
                          data-from={0}
                        />
                        <span className="units">62%</span>
                      </span>
                    </div>
                    <div className="skills-item-meter">
                      <span
                        className="skills-item-meter-active bg-primary"
                        style={{ width: "62%" }}
                      />
                    </div>
                    <div className="counter-friends">
                      12 friends voted for this
                    </div>
                    <ul className="friends-harmonic">
                      <li>
                        <a href="#">
                          <img src="/img/friend-harmonic1.jpg" alt="friend" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="/img/friend-harmonic2.jpg" alt="friend" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="/img/friend-harmonic3.jpg" alt="friend" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="/img/friend-harmonic4.jpg" alt="friend" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="/img/friend-harmonic5.jpg" alt="friend" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="/img/friend-harmonic6.jpg" alt="friend" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="/img/friend-harmonic7.jpg" alt="friend" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="/img/friend-harmonic8.jpg" alt="friend" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="/img/friend-harmonic9.jpg" alt="friend" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="all-users">
                          +3
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="skills-item">
                    <div className="skills-item-info">
                      <span className="skills-item-title">
                        <span className="radio">
                          <label>
                            <input type="radio" name="optionsRadios" />
                            Ben Robertson
                          </label>
                        </span>
                      </span>
                      <span className="skills-item-count">
                        <span
                          className="count-animate"
                          data-speed={1000}
                          data-refresh-interval={50}
                          data-to={27}
                          data-from={0}
                        />
                        <span className="units">27%</span>
                      </span>
                    </div>
                    <div className="skills-item-meter">
                      <span
                        className="skills-item-meter-active bg-primary"
                        style={{ width: "27%" }}
                      />
                    </div>
                    <div className="counter-friends">
                      7 friends voted for this
                    </div>
                    <ul className="friends-harmonic">
                      <li>
                        <a href="#">
                          <img src="/img/friend-harmonic7.jpg" alt="friend" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="/img/friend-harmonic8.jpg" alt="friend" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="/img/friend-harmonic9.jpg" alt="friend" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="/img/friend-harmonic10.jpg" alt="friend" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="/img/friend-harmonic11.jpg" alt="friend" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="/img/friend-harmonic12.jpg" alt="friend" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="/img/friend-harmonic13.jpg" alt="friend" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="skills-item">
                    <div className="skills-item-info">
                      <span className="skills-item-title">
                        <span className="radio">
                          <label>
                            <input type="radio" name="optionsRadios" />
                            Michael Streiton
                          </label>
                        </span>
                      </span>
                      <span className="skills-item-count">
                        <span
                          className="count-animate"
                          data-speed={1000}
                          data-refresh-interval={50}
                          data-to={11}
                          data-from={0}
                        />
                        <span className="units">11%</span>
                      </span>
                    </div>
                    <div className="skills-item-meter">
                      <span
                        className="skills-item-meter-active bg-primary"
                        style={{ width: "11%" }}
                      />
                    </div>
                    <div className="counter-friends">
                      2 people voted for this
                    </div>
                    <ul className="friends-harmonic">
                      <li>
                        <a href="#">
                          <img src="/img/friend-harmonic14.jpg" alt="friend" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="/img/friend-harmonic15.jpg" alt="friend" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              {/* .. end W-Pool */}
              <a
                href="#"
                className="btn btn-md-2 btn-border-think custom-color c-grey full-width"
              >
                Vote Now!
              </a>
            </div>
          </div>
        </div>
        {/* ... end Right Sidebar */}
      </div>
    </div>     :""
    }
    </>
    
  );
}
const mapStateToProps = (state) => ({
  profile: state.profile.profile
})

export default connect(mapStateToProps, { })(ProfileTimeLine)