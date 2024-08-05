import axios from 'axios'

export const GetNotes = async (Email: any) => {
  try {
    const Response = await axios.get(`http://localhost:5000/api/Notes/${Email}`)

    if (Response.status == 200) {
      return Response.data
    }
  } catch (error) {
    console.log('FUNCTION ERROR', error)
  }
}
