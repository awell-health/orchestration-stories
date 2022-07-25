import { useMutation } from '@apollo/client'
import { useState } from 'react'

import {
  type PatientProfileInput,
  type User,
} from '../../../types/generated/api.types'
import { UPDATE_PATIENT } from './graphql/UpdatePatient.graphql'

interface UseUpdatePatientHook {
  loading: boolean
  updatePatient: (profile: PatientProfileInput) => Promise<User>
}

export const useUpdatePatient = (patient_id: string): UseUpdatePatientHook => {
  const [updatePatientMutation] = useMutation(UPDATE_PATIENT)
  const [loading, setLoading] = useState(false)

  const updatePatient = async (profile: PatientProfileInput) => {
    try {
      setLoading(true)
      const { data } = await updatePatientMutation({
        variables: {
          input: {
            patient_id,
            profile,
          },
          refetchQueries: ['GetPatient', 'GetPatients'],
        },
      })
      setLoading(false)
      return data.updatePatient.patient
    } catch (error) {
      console.log(error)
    }
    return undefined
  }

  return {
    loading,
    updatePatient,
  }
}
