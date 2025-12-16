
export function useNavigate() {
    const navigate = (path: string) => {
      if (typeof window !== 'undefined') {
        window.location.href = path
      }
    }
  
    return navigate
  }
  