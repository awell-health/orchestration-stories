import { useQuery } from '@apollo/client'

import { type User } from '../../../types/generated/api.types'
import { GET_PATIENT } from './graphql/GetPatient.graphql'

interface UsePatientHook {
  loading: boolean
  patient: User | null
}

export const usePatient = (patient_id: string): UsePatientHook => {
  const { data, loading, error } = useQuery(GET_PATIENT, {
    variables: {
      patient_id,
    },
  })

  if (error) {
    console.log(error)
  }

  return {
    loading,
    patient: data?.patient.patient || null,
  }
}
