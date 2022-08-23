

const Protected = () => {
    const session = useSession()
    console.log(session);

  return (
    <div>
        this page is Protected for special People.
    </div>  
  )
}

export default Protected