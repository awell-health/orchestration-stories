import { useQuery } from '@apollo/client'

import { type Activity } from '../../../types/generated/api.types'
import { PATHWAY_ACTIVITIES } from './graphql/GetPathwayActivities.graphql'

interface UseBaselineInfoHook {
  loading: boolean
  startPolling: (pollInterval: number) => void
  stopPolling: () => void
  activities: Array<Activity>
}

export const usePathwayActivities = (
  pathway_id: string
): UseBaselineInfoHook => {
  const { data, loading, error, startPolling, stopPolling } = useQuery(
    PATHWAY_ACTIVITIES,
    {
      variables: {
        pathway_id,
      },
    }
  )

  if (error) {
    console.log(error)
    return { activities: [], loading: false, startPolling, stopPolling }
  }
  if (loading) {
    return { activities: [], loading: true, startPolling, stopPolling }
  }

  /**
   * Needs fixing
   * I need to reverse activities array in order to make sure I show
   * activities in the right order to the user
   */
  const activities = data?.pathwayActivities?.activities
    ? data.pathwayActivities.activities.slice().reverse()
    : []

  return {
    loading: false,
    startPolling,
    stopPolling,
    activities,
  }
}
