import React, { memo } from 'react';
import Spacer from './Spacer';

const Dot = ({ sliceId, dotId }) => (
  <div className="row">
    <Spacer w={5} />
    <div className={'dot' + (sliceId === dotId ? "white" : "white50")} />
    <Spacer w={5} />
  </div>
)

export default memo(Dot);
//970, 342