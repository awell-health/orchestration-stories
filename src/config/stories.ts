import { type Stories } from '@/types/stories.types'

export const stories: Stories = [
  {
    id: 'start-pathway',
    title: 'List of published pathways & start a pathway',
    description:
      'Display a list of published pathways, select a pathway and start it for an anonymous patient.',
    docsUrl:
      '/awell-orchestration/docs/use-cases/custom-integration/stories/start-pathway',
    codeUrl:
      'https://github.com/awell-health/orchestration-stories/blob/main/pages/stories/start-pathway/index.tsx',
    categories: ['Pathway'],
    operations: [
      {
        type: 'QUERY',
        operationName: 'publishedPathwayDefinitions',
      },
      {
        type: 'MUTATION',
        operationName: 'createPatient',
      },
      {
        type: 'MUTATION',
        operationName: 'startPathway',
      },
    ],
  },
  {
    id: 'create-patient',
    title: 'Create patient',
    description:
      'Learn how to create a page that allows you to create a new patient in Awell.',
    docsUrl:
      '/awell-orchestration/docs/use-cases/custom-integration/stories/create-patient',
    codeUrl:
      'https://github.com/awell-health/orchestration-stories/blob/main/pages/stories/create-patient/index.tsx',
    categories: ['Patients'],
    operations: [
      {
        type: 'MUTATION',
        operationName: 'createPatient',
      },
    ],
  },
  {
    id: 'patient-search',
    title: 'Patient search',
    description:
      'Learn how to create a search on patient code or national registry number',
    docsUrl:
      '/awell-orchestration/docs/use-cases/custom-integration/stories/patient-search',
    codeUrl:
      'https://github.com/awell-health/orchestration-stories/blob/main/pages/stories/patient-search/index.tsx',
    categories: ['Patients'],
    operations: [
      {
        type: 'QUERY',
        operationName: 'searchPatientsByPatientCode',
      },
      {
        type: 'QUERY',
        operationName: 'searchPatientsByNationalRegistryNumber',
      },
    ],
  },
  {
    id: 'activity-feed',
    title: 'Activity feed',
    description:
      'Create a chronological activity feed of everything that has happened in a pathway.',
    docsUrl:
      '/awell-orchestration/docs/use-cases/custom-integration/stories/activity-feed',
    codeUrl:
      'https://github.com/awell-health/orchestration-stories/blob/main/pages/stories/activity-feed/index.tsx',
    categories: ['Activities', 'Pathway view'],
    operations: [
      {
        type: 'QUERY',
        operationName: 'pathwayActivities',
      },
    ],
  },
  {
    id: 'conversational-form',
    title: 'Conversational form (questions one-by-one)',
    description:
      'Display a form in a conversational interface (question-by-question) and send the response back to the Awell API.',
    docsUrl:
      '/awell-orchestration/docs/use-cases/custom-integration/stories/conversational-form',
    codeUrl:
      'https://github.com/awell-health/orchestration-stories/blob/main/pages/stories/conversational-form/index.tsx',
    categories: ['Activities', 'Forms'],
    operations: [
      {
        type: 'QUERY',
        operationName: 'form',
      },
      {
        type: 'MUTATION',
        operationName: 'evaluateFormRules',
      },
      {
        type: 'MUTATION',
        operationName: 'submitFormResponse',
      },
    ],
  },
  {
    id: 'form-page',
    title: 'Form page',
    description:
      'Display a form on a webpage and send the response back to the Awell API.',
    docsUrl:
      '/awell-orchestration/docs/use-cases/custom-integration/stories/form-page',
    codeUrl:
      'https://github.com/awell-health/orchestration-stories/blob/main/pages/stories/form-page/index.tsx',
    categories: ['Activities', 'Forms'],
    operations: [
      {
        type: 'QUERY',
        operationName: 'form',
      },
      {
        type: 'MUTATION',
        operationName: 'evaluateFormRules',
      },
      {
        type: 'MUTATION',
        operationName: 'submitFormResponse',
      },
    ],
  },
  {
    id: 'data-dictionary',
    title: 'Data dictionary',
    description:
      'Create a data dictionary displaying all data points that are collected in a given pathway version.',
    docsUrl:
      '/awell-orchestration/docs/use-cases/custom-integration/stories/data-dictionary',
    codeUrl:
      'https://github.com/awell-health/orchestration-stories/blob/main/pages/stories/data-dictionary/index.tsx',
    categories: ['Data'],
    operations: [
      {
        type: 'QUERY',
        operationName: 'pathwayDataPointDefinitions',
      },
    ],
  },
  {
    id: 'message',
    title: 'Message',
    description:
      'Display a message with subject, content, and attachments to your clients. Additionally, let the Awell API known that the message was read.',
    docsUrl:
      '/awell-orchestration/docs/use-cases/custom-integration/stories/message',
    codeUrl:
      'https://github.com/awell-health/orchestration-stories/blob/main/pages/stories/message/index.tsx',
    categories: ['Activities', 'Message'],
    operations: [
      {
        type: 'QUERY',
        operationName: 'pathwayDataPointDefinitions',
      },
      {
        type: 'MUTATION',
        operationName: 'markMessageAsRead',
      },
    ],
  },
  {
    id: 'patient-list',
    title: 'Patient list',
    description:
      'Create a dashboard or list of all patients in your tenant with filters and pagination.',
    docsUrl:
      '/awell-orchestration/docs/use-cases/custom-integration/stories/patient-list',
    codeUrl:
      'https://github.com/awell-health/orchestration-stories/blob/main/pages/stories/patient-list/index.tsx',
    categories: ['Patients'],
    operations: [
      {
        type: 'QUERY',
        operationName: 'patients',
      },
    ],
  },
  {
    id: 'patient-profile',
    title: 'Patient profile & edit',
    description:
      'Create a patient profile page that lists all patient data and allows to update patient data.',
    docsUrl:
      '/awell-orchestration/docs/use-cases/custom-integration/stories/patient-profile',
    codeUrl:
      'https://github.com/awell-health/orchestration-stories/blob/main/pages/stories/patient-profile/index.tsx',
    categories: ['Patients'],
    operations: [
      {
        type: 'QUERY',
        operationName: 'patient',
      },
      {
        type: 'MUTATION',
        operationName: 'updatePatient',
      },
    ],
  },
  {
    id: 'timeline',
    title: 'Timeline',
    description:
      "Construct a Gantt or Timeline-style view that gives your users a high-level view of a patient's progress through a care flow.",
    docsUrl:
      '/awell-orchestration/docs/use-cases/custom-integration/stories/timeline',
    codeUrl:
      'https://github.com/awell-health/orchestration-stories/blob/main/pages/stories/timeline/index.tsx',
    categories: ['Elements', 'Pathway view'],
    operations: [
      {
        type: 'QUERY',
        operationName: 'pathwayElements',
      },
    ],
  },
]
