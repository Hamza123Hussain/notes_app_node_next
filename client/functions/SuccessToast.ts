import toast from 'react-hot-toast'

// Function to show a success toast when a new note is made
export const showSuccessToast = () => {
  toast.success('New Note Made!', {
    style: {
      border: '1px solid #4CAF50', // Green border
      padding: '16px',
      color: '#4CAF50', // Green text color
      backgroundColor: '#F0FFF4', // Light green background
      borderRadius: '8px', // Rounded corners
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow
    },
    iconTheme: {
      primary: '#4CAF50', // Green icon
      secondary: '#FFFAEE',
    },
  })
}

// Call this function where appropriate, e.g., after a new note is successfully created
showSuccessToast()
