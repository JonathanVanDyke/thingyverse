import React, { memo } from 'react';
import styled from 'styled-components';

const Space = styled.div`
  margin-right: 5px;
  margin-left: 5px;
`

const Dot = styled.div`

`

const Dot = ({ slideId, dotId }) => (
  <Space>
    {/* <Spacer w={5} /> */}
    <Dot className={"dot " + (slideId === dotId ? "white" : "white50")} />
    {/* <Spacer w={5} /> */}
  </Space>
)

export default memo(Dot);