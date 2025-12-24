export type Column<T> = {
  key: keyof T
  label: string
}

export type User = {
  id: number
  firstName: string
  lastName: string
  email: string
}

export const columns: Column<User>[] = [
  { key: 'id', label: 'Id' },
  { key: 'firstName', label: 'Name' },
  { key: 'lastName', label: 'Last Name' },
  { key: 'email', label: 'email' }
]

export const tableColorClasses: Record<string, string> = {
  red: 'bg-red-500',
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  yellow: 'bg-yellow-500',
  purple: 'bg-purple-500'
}