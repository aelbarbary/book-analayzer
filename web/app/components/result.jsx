var React = require('react');

var Result = React.createClass({
  render: function() {
    var imageSource = "./images/" +
                      this.props.data.surahEnglishName.replace(" ", "-").toLowerCase() +
                      ".jpg"
    return (
      <li>
        <div className="comment-main-level">

          <div className="comment-box">
            <div className="comment-head">
              <div className="comment-name">
                  {this.props.data.surahArabicName} - {this.props.data.surahEnglishName}
              </div>
              <span>[{this.props.data.surahNumber}:{this.props.data.verseNumber}]</span>
              <i>
              </i>
              <i className="fa fa-heart">
              </i>
            </div>
            <div className="comment-content">
              {this.props.data.verse}
            </div>
          </div>
        </div>
      </li>
    );
  }
});

module.exports = Result;
