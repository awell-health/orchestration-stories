import { gql } from '@apollo/client'

export const GET_PATHWAY = gql`
  query GetPathway($pathway_id: String!) {
    pathway(id: $pathway_id) {
      pathway {
        id
        title
        pathway_definition_id
        patient_id
        version # version number
        release_id # unique id representing the version
        status
        status_explanation
        start_date
        complete_date # if pathway is completed
        stop_date # if pathway is stopped
      }
    }
  }
`
