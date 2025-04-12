import { AlertCircle } from "lucide-react"

interface ErrorMessageProps {
  message: string
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center gap-2 w-full max-w-md mx-auto">
      <AlertCircle className="h-5 w-5 text-red-500" />
      <p>{message}</p>
    </div>
  )
}
