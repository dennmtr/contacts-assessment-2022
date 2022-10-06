import React from 'react'
import DescriptionListStyled from 'src/components/DescriptionList/DescriptionList.styled'

interface IDescriptionList {
  data: string[][]
}

const DescriptionList: React.FC<IDescriptionList> = ({ data }) => (
  <DescriptionListStyled>
    {data.map(item => (
      <React.Fragment key={item[0]}>
        <dt>{item[0]}:</dt>
        <dd>{item[1]}</dd>
      </React.Fragment>
    ))}
  </DescriptionListStyled>
)

export default DescriptionList
