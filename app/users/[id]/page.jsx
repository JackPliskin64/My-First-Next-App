//rfce//
async function getUser(id) {
  console.log(id)
  const res = await fetch(`https://reqres.in/api/users/${id}`)
  const data = await res.json()
  console.log(data)
  return data.data
}

async function UserDetails({ params }) {
  const user = await getUser(params.id)
  console.log(user)
  return (
    <div className='row'>
      <div className='col-md-6 offset-md-3 p-4'>
        <div className='card'>
          <div className='card-header text-center'>
            <img
              src={user.avatar}
              alt=''
              style={{ borderRadius: '50%', padding: '1rem' }}
            />
          </div>
        </div>
        <div className='card-body text-center p-4'>
          <h3>
            {user.first_name} {user.last_name}
          </h3>
          <p>{user.email}</p>
        </div>
      </div>
    </div>
  )
}

export default UserDetails
