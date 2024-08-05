import axios from 'axios'

export const Updateme = async (id: any, title: String, description: String) => {
  try {
    const Response = await axios.put(
      `https://notes-backend-beta-six.vercel.app/api/Notes/${id}`,
      {
        title,
        description,
      }
    )
    if (Response.status === 200) {
      return Response.data
    }
  } catch (error) {
    console.log('ERROR AT FUNCTION ', error)
  }
}
