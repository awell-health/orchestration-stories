import { useForm } from 'react-hook-form'

import { useFormActivityContext } from '../../../../../contexts/FormActivityContext'
import { type Question } from '../../../../../types/generated/api.types'
import { KioskButton } from '../../../../Button/variants'
import { Label } from '../Atoms'

interface SingleSelectProps {
  question: Question
}

export const SingleSelect = ({ question }: SingleSelectProps) => {
  const { goToNextQuestion, appendFormData } = useFormActivityContext()
  const options = question.options || []

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ mode: 'all' })

  const onQuestionSubmit = () => {
    handleSubmit(async (data) => {
      await appendFormData(data)
      goToNextQuestion()
    })()
  }

  return (
    <div className="grow flex flex-col">
      <form
        className="grow flex flex-col"
        onSubmit={handleSubmit(onQuestionSubmit)}
      >
        <div className="container grow">
          <Label
            htmlFor={question.id}
            label={question.title}
            mandatory={question.questionConfig?.mandatory}
          />
          <div className="my-4">
            <select
              id={question.id}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              {...register(question.id, {
                required: question.questionConfig?.mandatory || false,
              })}
            >
              {options.map((option) => (
                <option key={option.id} value={option.value.toString()}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors?.[question.id] && (
              <p className="text-red-500">{question.title} is required</p>
            )}
          </div>
        </div>
        <div className="">
          <KioskButton
            label="Next"
            type="submit"
            color="blue"
            disabled={false}
          />
        </div>
      </form>
    </div>
  )
}