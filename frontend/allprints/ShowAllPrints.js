import React from 'react';
import PrintCards from '../components/cards/PrintCards';
import styled, {keyframes} from 'styled-components';



const Page = styled.section`
  width: 970px;
  margin-bottom: 150px;
  margin-top: 50px;
  display: grid;
  grid-gap: 39px;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
`



class ShowAllPrints extends React.Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    this.props.fetchPrints()
  }

  render() {
    // debugger
    let printIds = this.props.prints.map((print) => {
      return print.id
    })

    //PrintCards takes an array of printIds
    return(
      <Page>
        <PrintCards
          printIds={printIds}
        />
      </Page>
    )
  }
}

export default ShowAllPrints