import axios from 'axios'

export const DeleteNote = async (_id: any) => {
  try {
    const Response = await axios.delete(
      `http://localhost:5000/api/Notes/${_id}`
    )
    if (Response.status === 200) {
      return true
    }
  } catch (error) {
    console.log(' ERROR AT FUNCTION : ', error)
  }
}
