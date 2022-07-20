import { Link } from "react-router-dom"

const Hangover = ({user, hangoverTip, handleDeleteTip, profiles}) => {
  return (
    <>
    <div className="card">
      <div className="card-body">
        <h2 className="card-text">{user.name}'s </h2>
        <h4 className="card-text">{hangoverTip.title}</h4>
        <h5>{hangoverTip.text}</h5>
      </div>
    </div>
        <>
        {user?.profile === profiles?._id &&
          <><button>Rethinking This?</button><button onClick={() => handleDeleteTip(hangoverTip._id)}>Regret this?</button></>
    
        }:
        <h2>No Hangover Tips yet</h2>
        </>
          <>
          {user?.profile === profiles?._id &&
          <Link to="/hangover-tip" >
            <button>Add a new tip?</button>
          </Link>
          }</>
    </>
  )
}


export default Hangover

