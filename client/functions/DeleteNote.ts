import axios from 'axios'

export const DeleteNote = async (_id: any) => {
  try {
    const Response = await axios.delete(
      `https://notes-backend-beta-six.vercel.app/api/Notes/${_id}`
    )
    if (Response.status === 200) {
      return true
    }
  } catch (error) {
    console.log(' ERROR AT FUNCTION : ', error)
  }
}
