import { facts } from '../../../data'

export default function handler({ query: { id } }, res) {
  const filtered = facts.filter((fact) => fact._id === id)

  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(200).json({ message: `The fact with id: ${id} was not found` })
  }
}
