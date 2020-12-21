import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

import news1 from "./news/pp-last-song.md";
import news2 from "./news/russfest.md";
import news3 from "./news/wanderlust.md";
import news4 from "./news/always-a-pp.md";
import news5 from "./news/message-from-cfo.md";
import news6 from "./news/bullshit-blog.md";
import news7 from "./news/hendricks-goes-to-wash.md";
import news8 from "./news/fort-piper.md";
import news9 from "./news/ico.md";
import news10 from "./news/for-fiona.md";


class FullNews extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      markdown: '' , 
      id: this.props.match.params._id
    };
  }

  componentWillMount() {
    var newsObj = {
      "pp-last-song": news1,
      "russfest": news2,
      "wanderlust": news3,
      "always-a-pp": news4,
      "message-from-cfo": news5,
      "bullshit-blog": news6,
      "hendricks-goes-to-wash": news7,
      "fort-piper": news8,
      "ico": news9,
      "for-fiona": news10
    }

    const value = newsObj[this.state.id];

    fetch(value)
      .then(res => res.text())
      .then(text => {
        this.setState({ markdown: text })
      }); 
  }

  render() {
    const { markdown } = this.state;

    return (
      <div className="fullnews">
        <ReactMarkdown source={markdown} />
      </div>
    );
  }
}

export default FullNews;
