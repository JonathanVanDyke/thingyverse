// import React from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import ShowAllPrintsItemContainer from './ShowAllPrintsContainer';


// class ShowAllPrints extends React.Component {
//   constructor(props) {
//     super(props);

//   }

//   componentDidMount() {
//     this.props.fetchPrints()
//   }

//   render() {
//     // debugger
//     // let prints = this.props.prints.map((print) => {
//     //   return(
//     //     <div key={print.print_id}>
//     //       <DesignsContainer
//     //         key={print.id}
//     //         print={print}
//     //         match={this.props.match}
//     //       >
//     //       </DesignsContainer>
//     //     </div>
//     //   )
//     // })
  
//     let prints = this.props.prints.map((print) => {
//       return (
//         <h1 key={print.id}>
//           <ShowCollectionItemContainer
//             print={print.id}
//             match={this.props.match}
//           >
//           </ShowCollectionItemContainer>
//         </h1>
//       )
//     })
    

//     return (
//       <div>
//         <h1>{this.props.collection.title}</h1>
//         <h1>{this.props.collection.title}</h1>
//         {prints}

//       </div>
//     )
//   }
// };

// export default ShowAllPrints;