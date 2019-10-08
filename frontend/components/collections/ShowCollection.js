import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DesignsContainer from './../profile/DesignsContainer'
import ShowCollectionItemContainer from './ShowCollectionItemContainer';


class ShowCollection extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    let collectionId = this.props.match.params.collectionId
    // this.props.fetchCollection(Number(collectionId)).then(() => {
    //   this.props.collection.print_collects.forEach((pc) => {
    //     this.props.fetchPrint(pc.print_id)
    //   })
    // })
    this.props.fetchCollection(Number(collectionId)).then(() => {
      // debugger
      // this.props.collection.print_collects.forEach((pc) => {
      //   debugger
      //   this.props.fetchPrint(pc.print_id)
      // })
    })
    // debugger
  }

  render() {
    // debugger
    // let prints = this.props.prints.map((print) => {
    //   return(
    //     <div key={print.print_id}>
    //       <DesignsContainer
    //         key={print.id}
    //         print={print}
    //         match={this.props.match}
    //       >
    //       </DesignsContainer>
    //     </div>
    //   )
    // })
  
    let prints = this.props.collection.print_collects.map((print) => {
      return (
        <h1 key={print.print_id}>
          {print.print_id}
          <ShowCollectionItemContainer
            print={print}
            match={this.props.match}
          >
          </ShowCollectionItemContainer>
        </h1>
      )
    })
    

    return (
      <div>
        <h1>{this.props.collection.title}</h1>
        <h1>{this.props.collection.title}</h1>
        {prints}

      </div>
    )
  }
};

export default ShowCollection;