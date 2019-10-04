import React from 'react';

class FeedCard extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // debugger
    return this.props.fetchPrints();
  }

  render() {
    let prints = this.props.prints.map((print) => {
      return(
        <div>
          <img src={print.photoUrl}/>
        </div>
      )
    })
    return (
    <div>
      Hi
        {prints}
    </div>
    )
  }

}

export default FeedCard;