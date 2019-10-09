import React from 'react';
import CollectionCards from '../cards/CollectionCard/CollectionCards';
import styled, { keyframes } from 'styled-components';


const Page = styled.section`
  width: 970px;
  margin-bottom: 150px;
  margin-top: 50px;
  display: grid;
  grid-gap: 39px;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
`

// const MiniButton = styled.div`
//   height: 20px;
//   width: 100px;
//   padding: 3px;
//   margin: 20px;
//   background-color: white;
//   border: 1px solid #bebebe;
//   border-radius: 8px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `

class ShowAllCollections extends React.Component {
  constructor(props) {
    super(props);
    this.state={mini: false};
    this.toggleMini = this.toggleMini.bind(this);
  };

  componentDidMount() {
    this.props.fetchCollections()
  }

  toggleMini() {
    this.setState({mini: !this.state.mini})
  }

  render() {
    let collectionIds = this.props.collections.map((collection) => {
      return collection.id
    })

    //CollectionCards takes an array of collectionIds
    //and mini boolean
    return (
      <>
        {/* <MiniButton onClick={() => this.toggleMini()}>
          Shrink/Expand
        </MiniButton> */}
        <Page>
          <CollectionCards
            collectionIds={collectionIds}
            mini={this.state.mini}
          />
        </Page>
      </>
    )
  }
}

export default ShowAllCollections