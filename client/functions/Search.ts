import axios from 'axios'

export const SearchNote = async (title: String) => {
  try {
    const Response = await axios.get(
      `http://localhost:5000/api/note/search?title=${title}`
    )
    if (Response.status == 200) {
      return Response.data
    }
  } catch (error) {
    console.log('FUNCTION ERROR ', error)
  }
}
