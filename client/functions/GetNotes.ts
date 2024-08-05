import axios from 'axios'

export const GetNotes = async (Email: any) => {
  try {
    const Response = await axios.get(
      `https://notes-app-node-next.vercel.app/api/Notes/${Email}`
    )

    if (Response.status == 200) {
      return Response.data
    }
  } catch (error) {
    console.log('FUNCTION ERROR', error)
  }
}
