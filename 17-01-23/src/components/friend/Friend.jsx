import './friend.css' 

const Friend = ({ data }) => {

    return (
      <div className='Friend'>
      <div className='ImgDefault'>
        <img src={data.image} alt={data.username} />
        <div className='online'></div>
        <p className='nickName'>@{data.username}</p>

      </div>
        <div className='Text__Container'>
          <h3>{`${data.firstName} ${data.lastName}`}</h3>
          <h4 className='city'>{data.address.city}</h4>
        </div> 
      </div>
    )
  }

  export default Friend;
