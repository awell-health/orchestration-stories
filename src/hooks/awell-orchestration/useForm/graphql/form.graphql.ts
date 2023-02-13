import { gql } from '@apollo/client'

export const GET_FORM = gql`
  query GetForm($id: String!) {
    form(id: $id) {
      form {
        id
        title
        questions {
          id # this changes between versions (=published id) --> this is what evaluates form rules mutation uses
          # definition_id --> doesn't change between versions
          title
          dataPointValueType
          options {
            id
            value
            label
          }
          questionType
          userQuestionType
          questionConfig {
            recode_enabled
            mandatory
            slider {
              min
              max
              step_value
              display_marks
              min_label
              max_label
              is_value_tooltip_on
              show_min_max_values
            }
          }
          rule {
            definition_id
            boolean_operator
            conditions {
              id
              reference
              reference_key
              operator
              operand {
                type
                value
              }
            }
          }
        }
      }
    }
  }
`
