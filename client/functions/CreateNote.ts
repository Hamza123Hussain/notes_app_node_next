import axios from 'axios'

export const CreateNote = async (
  createdBy: any,
  title: string,
  description: string,
  BG: string
) => {
  try {
    const Response = await axios.post('http://localhost:5000/api/Notes/', {
      createdBy,
      title, // Ensure this matches the key in your model
      description,
      BG,
    })
    if (Response.status === 201) {
      // Check for status code 201
      return Response.data
    }
  } catch (error) {
    console.log('FUNCTION ERROR', error)
  }
}
