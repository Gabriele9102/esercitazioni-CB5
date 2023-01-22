import './friend.css' 

const Friend = ({ data, setModalContent, setModalDeploy }) => {


  const onHandleClick = () => {
    setModalContent(data.id);
    setModalDeploy(true);

  }
    return (
      <div className='Friend' onClick={onHandleClick} id={data.id}>
      <div className='ImgDefault'>
        <img src={data.image} alt={data.username} />
        <div className='online'></div>
        <p className='nickName'>@{data.username}</p>

      </div>
        <div className='Text__Container'>
          <h3>{`${data.firstName} ${data.lastName}`}</h3>
        </div> 
      </div>
    )
  }

  export default Friend;
