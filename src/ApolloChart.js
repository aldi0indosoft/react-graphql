import React from 'react'
import BarChart from './BarChart'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

function ApolloChart({ data: { allBars, refetch } }) {
    let data = [5, 10, 1, 3]
    console.log("debug: allBars")
    console.log(allBars)
    
    if (allBars) {
        data = []
        allBars.forEach(e => data.push(e.value))
        console.log("debug: data")
        console.log(data)
    }
    return (
        <div>
            <button onClick={() => refetch()}>Refresh</button>
            <BarChart data={data} size={[500, 500]} />
        </div>
    )
}

export default graphql(gql`
  query ApolloChartQuery {
    allBars {
      value
    }
  }
`)(ApolloChart)