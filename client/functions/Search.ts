import axios from 'axios'

export const SearchNote = async (title: String) => {
  try {
    const Response = await axios.get(
      `https://notes-backend-beta-six.vercel.app/api/note/search?title=${title}`
    )
    if (Response.status == 200) {
      return Response.data
    }
  } catch (error) {
    console.log('FUNCTION ERROR ', error)
  }
}
